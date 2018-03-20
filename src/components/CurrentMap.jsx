import React from 'react';
import ReactDOM from 'react-dom';
import ListActions from '../actions/ListActions';
//COMPONENTS
import ReactMapGL, {LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
import DeckGLOverlay from './blocks/MapCluster';
import {json as requestJson} from 'd3-request';

var d3 = require('d3-ease');


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
                height: 0,
				transitionDuration: this.props.transitionDuration,
            	transitionInterpolator: this.props.transitionInterpolator,
            	transitionEasing: this.props.transitionEasing
              }
        }
		
		//Getting the cluster icons
		requestJson('javascripts/location-icon-mapping.json', (error, response) => {
		  if (!error) {
			this.setState({iconMapping: response});
		  }
		});
		
		
		this.componentDidMount = this.componentDidMount.bind(this)
		this._goToNYC = this._goToNYC.bind(this)
		this._onViewportChange = this._onViewportChange.bind(this)
    }

    componentDidMount() {
		//If the current listings are not loaded, load em
		this.props.currentListings.length === 0 && ListActions.getCurrent()
		
		// Create variable to change property
        const viewport = {
			...this.state.viewport,
			width: window.innerWidth,//ReactDOM.findDOMNode(this).offsetWidth
			height: window.innerHeight
		}
        //Update state
        this.setState({
			viewport
          })
    }
	
	_onViewportChange(viewport) {
		 this.setState({viewport});
	}
	
	_goToNYC() {
        const viewport = {
            ...this.state.viewport,
            longitude: this.props.center.lng,
            latitude: this.props.center.lat,
            zoom: this.props.zoom,
			transitionDuration: this.props.transitionDuration,
			transitionInterpolator: this.props.transitionInterpolator,
			transitionEasing: this.props.transitionEasing
        }
        this.setState({viewport})
    }
	
	_onHover(el) {
		console.log('Hover: ', el.object.name)
	}
	
	_onClick(el) {
		console.log('Clicked: ', el.object.name)
	}

    render() {

        return ( 
            <div className="currentMap">
					{this.props.loading.current && <div className="loading">Loading...</div>}
					<p>There are currently {this.props.currentListings.length} shows open in NYC and around.</p>
                    <ReactMapGL
						{...this.state.viewport}
						onViewportChange={this._onViewportChange} >
						<DeckGLOverlay
						  viewport={this.state.viewport}
						  data={this.props.currentListings}
						  iconAtlas="images/location-icon-atlas.png"
          				  iconMapping={this.state.iconMapping}
						  showCluster={true}
						  onHover={this._onHover}
						  onClick={this._onClick}
						/>
					</ReactMapGL>
				<button onClick={this._goToNYC}>Back to NYC</button>
            </div>
        );
    }
}

CurrentMap.defaultProps = {
    center: {lat: 40.7238556, lng: -73.9221523},
    zoom: 11,
    token: process.env.MapboxAccessToken,
	transitionDuration: 1000,
	transitionInterpolator: new FlyToInterpolator(),
	transitionEasing: d3.easeCubic
};