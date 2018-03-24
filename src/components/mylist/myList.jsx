import React from 'react';
import ReactDOM from 'react-dom';
import AuthActions from '../../actions/AuthActions';
import ListActions from '../../actions/ListActions';
import {FlyToInterpolator} from 'react-map-gl';
var async = require('async');
// Components
import MyListings from './myListings';
import MyMap from './myMap';
import FacebookShare from '../blocks/facebookShare';
import {reorder} from 'react-reorder';

var d3 = require('d3-ease');

export default class MyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingHover: '',
			publicUrl: '',
            markers: [],
            viewport: {
                latitude: this.props.center.lat,
                longitude: this.props.center.lng,
                zoom: this.props.zoom,
                mapboxApiAccessToken: this.props.token,
                bearing: 0,
                pitch: 0,
                width: 0,
                height: 500,
            }
        }
        
        this.onReorder = this.onReorder.bind(this);
        this._onHover = this._onHover.bind(this);
        this._onLeave = this._onLeave.bind(this);
        this.findCoord = this.findCoord.bind(this);
        this._updateViewport = this._updateViewport.bind(this);
        this._updateDimensions = this._updateDimensions.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentWillMount(){
        async.map(this.props.user.mylist, this.findCoord, function(err, results){
          // results is now an array
          this.setState({
              markers: results
          })
        }.bind(this));
    }
    
    componentDidMount(){
        //Update state
        this.setState({
			publicUrl: window.location.href + '/' + this.props.user.slug
        })
        //Resize the map
        this._updateDimensions
        window.addEventListener("resize", this._updateDimensions);
    }

    _updateDimensions(){
        const viewport = {
			...this.state.viewport,
            width: document.getElementsByClassName("mapWrap")[0].offsetWidth
        }
        this.setState({
            viewport
        })
    }
    
    _onHover(listing){
        const viewport = {
            ...this.state.viewport,
            longitude: listing.venue.coordinates.long,
          	latitude: listing.venue.coordinates.lat,
            zoom: 14,
			transitionDuration: this.props.transitionDuration,
			transitionInterpolator: this.props.transitionInterpolator,
			transitionEasing: this.props.transitionEasing
        }
        //Find the right marker
        this.setState({
			viewport,
            listingHover: listing._id
        })
    }
    
    _onLeave(){
        // Create variable to change property
		const viewport = {
            ...this.state.viewport,
            longitude: this.props.center.lng,
          	latitude: this.props.center.lat,
            zoom: this.props.zoom,
			transitionDuration: this.props.transitionDuration,
			transitionInterpolator: this.props.transitionInterpolator,
			transitionEasing: this.props.transitionEasing
        }
		
        //Reset markers
        this.setState({
			viewport,
            listingHover: ''
        })
    }
    
    onReorder (event, fromIndex, toIndex, fromId, toId) {
        let newOrder = reorder(this.props.user.mylist, fromIndex, toIndex)
        AuthActions.reorderMyList(newOrder)
        this.setState({
              markers: newOrder
          })
    }
    
    findCoord(listing, done) {
        if (listing.venue !== null && typeof listing.venue === 'object') { //If venue is an object
            if (!listing.venue.coordinates && listing.venue.address) {
                // Get coordinates
                const fullAddress = listing.venue.address + ' ' + listing.venue.city
                client.geocodeForward(fullAddress, {}).then(function (res) {
                        const newCoords = {
                            lat: res.entity.features[0].center[1],
                            long: res.entity.features[0].center[0]
                        }
                        listing.venue.coordinates = newCoords
                        //Save the coordinates in the database for next time
                        ListActions.updateVenue(listing.venue);
                        console.log(listing)
                        //Callback function
                        done({}, listing)
                    })
                    .catch(function (err) {
                        console.log('Geocodding error: ', err)
                    })
            } else {
                //Callback function
                done({}, listing)
            }
        }
    }
    
    _updateViewport(v) {
        this.setState({
            viewport: v
        })
    }

    render() {
        
        return ( 
                <div className="myList">
				<div className="listInfo cf">
					<a target="_blank" href={window.location.href + '/' + this.props.user.slug}>Public page</a>
					<FacebookShare url={this.state.publicUrl} />
				</div>
                    <MyMap 
                        markers={this.state.markers} 
                        viewport ={this.state.viewport}
                        updateViewport ={this._updateViewport}
                        listingHover={this.state.listingHover} 
                        onHover={this._onHover}
                        onLeave={this._onLeave}
                        />
                    {this.props.user.mylist? <MyListings 
                                           user={this.props.user}
                                            view={this.props.view}
                                           onHover={this._onHover}
                                           onLeave={this._onLeave}
                                           onReorder={this.onReorder}
                                            listingHover={this.state.listingHover}
                                           /> : null }
                </div>
        );
    }
}

MyList.defaultProps = {
    center: {lat: 40.7238556, lng: -73.9221523},
    zoom: 11,
    token: process.env.MapboxAccessToken,
	transitionDuration: 1000,
	transitionInterpolator: new FlyToInterpolator(),
	transitionEasing: d3.easeCubic
};