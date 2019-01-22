import React from 'react'

//COMPONENT
import SingleMarker from './singleMarker'
import ReactMapGL, {Marker} from 'react-map-gl'

export default class MapBlock extends React.Component {
    
    constructor(props) {
        super(props);   
        
        this.state = {
            viewport: {
                zoom: 12,
                mapboxApiAccessToken: process.env.MapboxAccessToken,
                bearing: 0,
                pitch: 0,
                width: 500,
                height: 500
              }
        }
        
        this.updateViewport = this.updateViewport.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this._resizeMap = this._resizeMap.bind(this)
    }
    
    componentDidMount(){
        //Resize the map in the background
		this._resizeMap()
        window.addEventListener("resize", this._resizeMap);
        
    }

    _resizeMap(){
		// Create variable to change property
		const viewport = {
			...this.state.viewport,
			width: this.refs.mapWrap.offsetWidth,
			height: this.refs.mapWrap.offsetHeight
		}
		//Update state
		this.setState({
			viewport
		})
	}
    
    updateViewport(v) {
        this.setState({
            viewport: v
        })
    }

  render() {
    return (
        <div className="map" ref="mapWrap">
			{this.props.coordinates &&
            <ReactMapGL
                {...this.state.viewport}
				latitude={this.props.coordinates.lat ? this.props.coordinates.lat : 40.7263098}
                longitude={this.props.coordinates.long ? this.props.coordinates.long : -73.9940454}
                onViewportChange={this.updateViewport}
              >
				{this.props.coordinates.lat &&
                <Marker 
                        latitude={this.props.coordinates.lat}
                        longitude={this.props.coordinates.long}
                        anchor="bottom"
                                  >
                        <SingleMarker />
                </Marker>
				}
            </ReactMapGL>
				}
        </div>
            
    );
  }
}
