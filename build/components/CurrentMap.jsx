import React from 'react';
import ListActions from '../actions/ListActions';
//COMPONENTS
import Helmet from './blocks/Helmet'
import ReactMapGL, {FlyToInterpolator} from 'react-map-gl';
import MapCluster from './blocks/MapCluster';
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
			revealOther: false
        }
		
		//Getting the cluster icons
		requestJson('javascripts/location-icon-mapping.json', (error, response) => {
		  if (!error) {
			this.setState({iconMapping: response});
		  }
		});
		
		
		this.componentDidMount = this.componentDidMount.bind(this)
		this._revealOther = this._revealOther.bind(this)
		this._hideOther = this._hideOther.bind(this)
		this._goToNYC = this._goToNYC.bind(this)
		this._goToPhil = this._goToPhil.bind(this)
		this._goToUpstate = this._goToUpstate.bind(this)
		this._goToNJ = this._goToNJ.bind(this)
		this._goToLI = this._goToLI.bind(this)
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
	_revealOther(){
		this.setState({
			revealOther: true
		})
	}
	_hideOther(){
		this.setState({
			revealOther: false
		})
	}
	_goToPhil() {
        const viewport = {
            ...this.state.viewport,
            longitude: -75.161488,
            latitude: 39.9373046,
            zoom: this.props.zoom,
			transitionDuration: this.props.transitionDuration,
			transitionInterpolator: this.props.transitionInterpolator,
			transitionEasing: this.props.transitionEasing
        }
        this.setState({viewport})
	}
	_goToUpstate() {
        const viewport = {
            ...this.state.viewport,
            longitude: -75.0738887,
            latitude: 42.6291662,
            zoom: 7,
			transitionDuration: this.props.transitionDuration,
			transitionInterpolator: this.props.transitionInterpolator,
			transitionEasing: this.props.transitionEasing
        }
        this.setState({viewport})
	}
	_goToLI() {
        const viewport = {
            ...this.state.viewport,
            longitude: -72.9371244,
            latitude: 40.8286694,
            zoom: 8.5,
			transitionDuration: this.props.transitionDuration,
			transitionInterpolator: this.props.transitionInterpolator,
			transitionEasing: this.props.transitionEasing
        }
        this.setState({viewport})
	}
	_goToNJ() {
        const viewport = {
            ...this.state.viewport,
            longitude: -74.6243706,
            latitude: 40.5731734,
            zoom: 9,
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

		let labelTally = []
		let showLabels = (listings) => listings.map((listing) => {
			//Showing the listings names
			//return <ListingNameDisplay {...listing} key={listing._id} />
			let venueName = listing.venue.name
			if (labelTally.indexOf(venueName) >= 0){
				return
			} else {
				labelTally.push(venueName)
				return <div key={listing._id}>{venueName}</div>
			}
		})

		let labelStyles = {
			left: this.state.hoverPosition[0],
			top: this.state.hoverPosition[1]
		}

        return ( 
            <div className="currentMap">
			<Helmet 
				title="Map"
				link="https://list.artcritical.com/map"
				/>
					<div className="mapWrap" ref="mapWrap"> 
                    <ReactMapGL
						{...this.state.viewport}
						onViewportChange={this._onViewportChange}
						>
						<MapCluster
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
					<div className={this.props.view + " mapInfo"}>
						<div className="mapHeader">
						<h2>Explore art exhibitions in New York City and beyond. Create your personal lists. See. Share.</h2>
						<p>THE LIST prides itself on being the best, so if something's wrong or missing, please <a href="mailto:thelist@artcritical.com">let us know</a></p>
						</div>
						<div className="content">
						{this.state.browseListings?
							displayListings(this.state.browseListings)
							:
							<div className="intro">
							<p>Click on markers for neighborhood and exhibition details</p>
							{this.props.loading.current && <div className="loading">Loading...</div>}
							<p>There are currently <strong>{this.props.currentListings.length} shows</strong> open in NYC and around.</p>
							</div>
						}
						</div>
						<div className="footer cityJump">
							<Button onClick={this._goToNYC}>New York City</Button>
							<div className="otherWrap" onMouseEnter={this._revealOther} onMouseLeave={this._hideOther}>
								<Button>Other</Button>
								{this.state.revealOther && 
									<div>
									<Button onClick={this._goToUpstate}>Upstate NY</Button>
									<Button onClick={this._goToLI}>Long Island</Button>
									<Button onClick={this._goToNJ}>New Jersey</Button>
									<Button onClick={this._goToPhil}>Philadelphia</Button>
									</div>
								}
							</div>
						</div>
					</div>
            </div>
        );
    }
}

CurrentMap.defaultProps = {
    center: {lat: 40.7321712, lng: -73.973286},
    zoom: 11,
    token: process.env.MapboxAccessToken,
	transitionDuration: 1000,
	transitionInterpolator: new FlyToInterpolator(),
	transitionEasing: d3.easeCubic
};