import React from 'react';
import ReactDOM from 'react-dom';
import ListActions from '../actions/ListActions';
//COMPONENTS
import ReactMapGL, {LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
import DeckGLOverlay from './blocks/MapCluster';
import Listing from './listing'
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
		this._onHover = this._onHover.bind(this)
		this._onClick = this._onClick.bind(this)
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
	_goToPhil() {
        const viewport = {
            ...this.state.viewport,
            longitude: 40.0026767,
            latitude: -75.2581144,
            zoom: this.props.zoom,
			transitionDuration: this.props.transitionDuration,
			transitionInterpolator: this.props.transitionInterpolator,
			transitionEasing: this.props.transitionEasing
        }
        this.setState({viewport})
    }
	
	_onHover(el) {
		if (el.object) {
			console.log('Hover: ', el.object.zoomLevels[Math.round(this.state.viewport.zoom)].points)
		}
	}
	
	_onClick(el) {
		//When clicked, the state gets the list of events
		this.setState({
			browseListings: el.object.zoomLevels[Math.round(this.state.viewport.zoom)].points
		})
	}

    render() {

		let displayListings = (listings) => listings.map((listing, index) => {
			return <Listing key={index} {...listing} user={this.props.user} dateView="current"/>
		})

        return ( 
            <div className="currentMap">
					<div className="mapInfo">
						{this.props.loading.current && <div className="loading">Loading...</div>}
						<p>There are currently {this.props.currentListings.length} shows open in NYC and around.</p>
						<div className="cityJump">
							<button onClick={this._goToNYC}>New York City</button>
							<button onClick={this._goToPhil}>Philadelphia</button>
						</div>
					</div>
					<div className="mapWrap"> 
                    <ReactMapGL
						{...this.state.viewport}
						onViewportChange={this._onViewportChange}
						onClick={console.log('clicked')} >
						<DeckGLOverlay
						  viewport={this.state.viewport}
						  data={this.props.currentListings}
						  iconAtlas="images/location-icon-atlas.png"
          				  iconMapping={this.state.iconMapping}
						  showCluster={true}
						  onHover={this._onHover}
						/>
					</ReactMapGL>
					</div> 
					<div className={this.props.view + " list"}>
						{this.state.browseListings?
							displayListings(this.state.browseListings)
							:
							<div className="intro">
							<h2>Welcome to the artcritical map</h2>
							<p>Click on markers to explore all the shows currently open in New York City and beyond.</p>
							</div>
						}
					</div>
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