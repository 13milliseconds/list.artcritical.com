import React from 'react';
import ReactDOM from 'react-dom';
import ListActions from '../actions/ListActions';
//COMPONENTS
import ReactMapGL, {NavigationControl, Marker} from 'react-map-gl';
import DeckGLOverlay from './blocks/MapCluster';


export default class CurrentMap extends React.Component {
    constructor(props) {
        super(props);
		
		this.state = {
            viewport: {
                latitude: this.props.center.lat,
                longitude: this.props.center.lng,
                zoom: this.props.zoom,
                mapboxApiAccessToken: this.props.token,
                bearing: 0,
                pitch: 0,
                width: 0,
                height: 500
              }
        }
		
		this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
		//If the current listings are not loaded, load em
		this.props.currentListings.length === 0 && ListActions.getCurrent()
		
		// Create variable to change property
        let newViewport = this.state.viewport
        newViewport.width = ReactDOM.findDOMNode(this).offsetWidth
        //Update state
        this.setState({
			viewport: newViewport
          })
    }

    render() {

        return ( 
            <div className="currentMap">
					{this.props.loading.current && <div className="loading">Loading...</div>}
					{this.props.currentListings.length}
                    <ReactMapGL
						{...this.state.viewport}
						onViewportChange={(viewport) => this.setState({viewport})} >
						<DeckGLOverlay
						  viewport={this.state.viewport}
						  data={this.props.currentListings}
						  showCluster={true}
						/>
					</ReactMapGL>
            </div>
        );
    }
}

CurrentMap.defaultProps = {
    center: {lat: 40.7238556, lng: -73.9221523},
    zoom: 11,
    token: process.env.MapboxAccessToken
};