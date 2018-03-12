import React, {Component} from 'react';
import DeckGL, {ScatterplotLayer, WebMercatorViewport} from 'deck.gl';
import rbush from 'rbush';

export default class DeckGLOverlay extends Component {

  constructor(props) {
    super(props);

    // build spatial index
    this._tree = rbush(9, ['.x', '.y', '.x', '.y']);
    this.state = {
		points: [],
		x: 0,
		y: 0,
		hoveredItems: null,
		expanded: false
    };

    this._updateCluster(props);
  }

  componentWillReceiveProps(nextProps) {
    const {viewport} = nextProps;
    const oldViewport = this.props.viewport;

    if (
      nextProps.data !== this.props.data ||
      viewport.width !== oldViewport.width ||
      viewport.height !== oldViewport.height
    ) {
      this._updateCluster(nextProps);
    }
  }
	


  // Compute icon clusters
  // We use the projected positions instead of longitude and latitude to build
  // the spatial index, because this particular dataset is distributed all over
  // the world, we can't use some fixed deltaLon and deltaLat
  _updateCluster({data, viewport}) {
    if (!data) {
      return;
    }

    const tree = this._tree;

    const transform = new WebMercatorViewport({
      viewport,
      zoom: 0
    });

    data.forEach(p => {
	  const coordinates = [p.venue.coordinates.lat, p.venue.coordinates.long]
      const screenCoords = transform.project(coordinates)
      p.x = screenCoords[0];
      p.y = screenCoords[1];
	  p.position = [p.venue.coordinates.lat, p.venue.coordinates.long]
	  p.radius = 5
	  p.color = [255, 140, 0]
      p.zoomLevels = [];
    });
	  

    tree.clear();
    tree.load(data);

    for (let z = 0; z <= 20; z++) {
      const radius = 100 / 2 / Math.pow(2, z);

      data.forEach(p => {
        if (p.zoomLevels[z] === undefined) {
          // this point does not belong to a cluster
          const {x, y} = p;

          // find all points within radius that do not belong to a cluster
          const neighbors = tree
            .search({
              minX: x - radius,
              minY: y - radius,
              maxX: x + radius,
              maxY: y + radius
            })
            .filter(neighbor => neighbor.zoomLevels[z] === undefined);

          // only show the center point at this zoom level
          neighbors.forEach(neighbor => {
            if (neighbor === p) {
              p.zoomLevels[z] = {
                points: neighbors
              };
            } else {
              neighbor.zoomLevels[z] = null;
            }
          });
        }
      });
    }
	  
  }

  render() {
    const {viewport, data, showCluster} = this.props;

    if (!data) {
      return null;
    }

    const z = Math.floor(viewport.zoom);
    const size = showCluster ? 1 : Math.min(Math.pow(1.5, viewport.zoom - 10), 1);
    const updateTrigger = z * showCluster;

    const layer = [new ScatterplotLayer({
      id: 'icon',
      data,
      //pickable: this.props.onHover || this.props.onClick,
	  getPosition: d => [d.venue.coordinates.long, d.venue.coordinates.lat, 0], 
      //getPosition: d => [d.x, d.y], //Using the projected coordinates
      //getIcon: d => (showCluster ? d.zoomLevels[z] && d.zoomLevels[z].icon : 'marker'),
      getColor: d => [0, 128, 255],
    getRadius: d => 10,
    opacity: 0.5,
    pickable: true,
    radiusMaxPixels: 30,//,
      //onHover: this.props.onHover,
      //onClick: this.props.onClick,
      //updateTriggers: {
        //getIcon: updateTrigger,
        //getSize: updateTrigger
      //}
    })];

    return <DeckGL {...viewport} layers={layer} />;
  }
}