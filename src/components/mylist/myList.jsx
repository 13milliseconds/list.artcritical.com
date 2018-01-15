import React from 'react';
import ReactDOM from 'react-dom';
import AuthActions from '../../actions/AuthActions';
import ListActions from '../../actions/ListActions';
import {experimental} from 'react-map-gl';
var async = require('async');
// Components
import MyListings from './myListings';
import MyMap from './myMap';
import SizeSelector from '../blocks/sizeSelector';
import {reorder} from 'react-reorder';

export default class MyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingHover: '',
            markers: [],
            viewport: {
                latitude: this.props.center.lat,
                longitude: this.props.center.lng,
                zoom: this.props.zoom,
                mapboxApiAccessToken: this.props.token,
                bearing: 0,
                pitch: 0,
                width: window.innerWidth,
                height: 500
              }
        }
        
        this.onReorder = this.onReorder.bind(this);
        this.onHover = this.onHover.bind(this);
        this.onLeave = this.onLeave.bind(this);
        this._goToViewport = this._goToViewport.bind(this);
        this.findCoord = this.findCoord.bind(this);
        this.updateViewport = this.updateViewport.bind(this);
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
        // Create variable to change property
        let newViewport = this.state.viewport
        newViewport.width = ReactDOM.findDOMNode(this).offsetWidth
        //Update state
        this.setState({
              viewport: newViewport
          })
    }
    
    onHover(listing){
        this._goToViewport(listing.venue.coordinates.lat, listing.venue.coordinates.long)
        //Find the right marker
        this.setState({
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
    
     _goToViewport(latitude, longitude){
        this.updateViewport({
          longitude: longitude,
          latitude: latitude,
          zoom: 14,
            width: this.state.viewport.width,
            height: this.state.viewport.height,
          transitionInterpolator: experimental.viewportFlyToInterpolator,
          transitionDuration: 3000
        });
    }
    
    updateViewport(v) {
        this.setState({
            viewport: v
        })
    }

    render() {
        
        return ( 
                <div className="myList">
				<h2>{this.props.user.name}'s List</h2>
                    <MyMap 
                        markers={this.state.markers} 
                        viewport ={this.state.viewport}
                        updateViewport ={this.updateViewport}
                        listingHover={this.state.listingHover} 
                        onHover={this.onHover}
                        onLeave={this.onLeave}
                        />
                    <SizeSelector view={this.props.view} />
                    {this.props.user.mylist? <MyListings 
                                           user={this.props.user}
                                            view={this.props.view}
                                           onHover={this.onHover}
                                           onLeave={this.onLeave}
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
    token: process.env.MapboxAccessToken
};