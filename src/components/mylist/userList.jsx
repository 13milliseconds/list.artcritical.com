import React from 'react';
import ReactDOM from 'react-dom';
import AuthActions from '../../actions/AuthActions';
import ListActions from '../../actions/ListActions';
import {FlyToInterpolator} from 'react-map-gl';
var async = require('async');
// Components
import UserListings from './userListings';
import MyMap from './myMap';
import FacebookShare from '../blocks/facebookShare';
import { Button} from 'reactstrap';

var d3 = require('d3-ease');

export default class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingHover: '',
			url: '',
            markers: [],
            viewport: {
                latitude: this.props.center.lat,
                longitude: this.props.center.lng,
                zoom: this.props.zoom,
                mapboxApiAccessToken: this.props.token,
                bearing: 0,
                pitch: 0,
                width: 0,
                height: 0,
              }
        }
        
        this.findCoord = this.findCoord.bind(this);
		this._onHover = this._onHover.bind(this);
        this.onLeave = this.onLeave.bind(this);
        this.updateViewport = this.updateViewport.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this._updateDimensions = this._updateDimensions.bind(this);
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
        //Resize the map
        this._updateDimensions()
        window.addEventListener("resize", this._updateDimensions)
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
    
    onLeave(){
        // Create variable to change property
        let newViewport = this.state.viewport
        newViewport.lat = this.props.center.lat
        newViewport.lng = this.props.center.lng
        newViewport.zoom = this.props.zoom
        //Reset markers
        this.setState({
            listingHover: '',
            viewport: newViewport
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

    _updateDimensions(){
        const viewport = {
			...this.state.viewport,
            width: document.getElementsByClassName("mapWrap")[0].offsetWidth,
            height: document.getElementsByClassName("mapWrap")[0].offsetHeight
        }
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
		let fullURL = ''
        let hasAvatar = false
        
        if (this.props.user.avatar) {
            hasAvatar = true
            fullURL = "https://res.cloudinary.com/artcritical/image/upload/" + this.props.user.avatar + ".jpg";
        } else if (this.props.user.facebook){
            hasAvatar = true
            fullURL = "https://graph.facebook.com/" + this.props.user.facebook.id + "/picture?type=large";
        }
		
        let name = this.props.user.lastname 
                                ? this.props.user.firstname + " " + this.props.user.lastname
                                : this.props.user.firstname
        
        return ( 
                <div className="myList">
				<div className="listInfo cf">
					{hasAvatar && <img className="avatar" src={fullURL}/>}
					<h2>{name}'s List</h2>
					<p className="bio">{this.props.user.bio}</p>
					{this.props.user.website && <a className="button"
												href={this.props.user.website}
												target="_blank">Website</a>}
					<FacebookShare url={this.state.url} />
                    {this.props.user.mylist? <UserListings 
                                           user={this.props.user}
                                            view={this.props.view}
                                            listingHover={this.state.listingHover}
											onHover={this._onHover}
                        					onLeave={this.onLeave}
                                           /> : <div>
                                                    <h2>There is no show in this list</h2>
                                                    <Button href="/current">Explore all shows</Button>
                                                </div> }
				</div>
                    <MyMap 
                        markers={this.state.markers} 
                        viewport ={this.state.viewport}
                        updateViewport ={this.updateViewport}
                        listingHover={this.state.listingHover} 
                        onHover={this._onHover}
                        onLeave={this.onLeave}
                        />
                </div>
        );
    }
}

UserList.defaultProps = {
    center: {lat: 40.7238556, lng: -73.9221523},
    zoom: 11,
    token: process.env.MapboxAccessToken,
	transitionDuration: 1000,
	transitionInterpolator: new FlyToInterpolator(),
	transitionEasing: d3.easeCubic
};