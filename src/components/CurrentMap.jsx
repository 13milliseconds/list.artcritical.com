import React from 'react';
import ReactDOM from 'react-dom';
import ListActions from '../actions/ListActions';
//COMPONENTS
import ReactMapGL, {LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
import DeckGLOverlay from './blocks/MapCluster';
import VenueBlock from './blocks/VenueBlock'
import {json as requestJson} from 'd3-request';
import {Button} from 'reactstrap';

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
			  },
			hoverPosition: [0,0],
        }
		
		//Getting the cluster icons
		requestJson('javascripts/location-icon-mapping.json', (error, response) => {
		  if (!error) {
			this.setState({iconMapping: response});
		  }
		});
		
		
		this.componentDidMount = this.componentDidMount.bind(this)
		this._goToNYC = this._goToNYC.bind(this)
		this._goToPhil = this._goToPhil.bind(this)
		this._onViewportChange = this._onViewportChange.bind(this)
		this._onHover = this._onHover.bind(this)
		this._onClick = this._onClick.bind(this)
		this._resizeMap = this._resizeMap.bind(this)
    }

    componentDidMount() {

		//Resize the map in the background
		this._resizeMap()
		window.addEventListener("resize", this._resizeMap);

		//If the current listings are not loaded, load em
		!this.props.currentLoaded && ListActions.getCurrent()
		
    }
	_resizeMap(){
		console.log(this.refs.mapWrap)
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
            longitude: -75.2581144,
            latitude: 40.0026767,
            zoom: this.props.zoom,
			transitionDuration: this.props.transitionDuration,
			transitionInterpolator: this.props.transitionInterpolator,
			transitionEasing: this.props.transitionEasing
        }
        this.setState({viewport})
    }
	
	_onHover(el) {
		this.setState({
			hoverListings: el.object,
			hoverPosition: el.pixel
		})
	}
	
	_onClick(el) {
		//When clicked, the state gets the list of events
		this.setState({
			browseListings: el.object.zoomLevels[Math.round(this.state.viewport.zoom)].points
		})
	}

    render() {

		let displayListings = (listings) => listings.map((listing, index) => {
			return <VenueBlock key={index} listings={[listing]} user={this.props.user} dateView="current"/>
		})

		let showLabels = (listings) => listings.map((listing, index) => {
			return <div key={index}>{listing.name}</div>
		})

		let labelStyles = {
			left: this.state.hoverPosition[0],
			top: this.state.hoverPosition[1]
		}

        return ( 
            <div className="currentMap">
					<div className="mapWrap" ref="mapWrap"> 
                    <ReactMapGL
						{...this.state.viewport}
						onViewportChange={this._onViewportChange}
						>
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
					{this.state.hoverListings && 
						<div className="label" style={labelStyles}>
							{showLabels(this.state.hoverListings.zoomLevels[Math.round(this.state.viewport.zoom)].points)}
						</div>
					}
					</div> 
					<div className={this.props.view + " list"}>
						{this.state.browseListings?
							displayListings(this.state.browseListings)
							:
							<div className="intro">
							<h2>Discover the latest shows and events that your friends and art experts love</h2>
							<p>Click on markers to explore all the shows currently open in New York City and beyond.</p>
							{this.props.loading.current && <div className="loading">Loading...</div>}
							<p>There are currently {this.props.currentListings.length} shows open in NYC and around.</p>
							</div>
						}
						<div className="cityJump">
							<h6>Navigate between Cities</h6>
							<Button onClick={this._goToNYC}>New York City</Button>
							<Button onClick={this._goToPhil}>Philadelphia</Button>
						</div>
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