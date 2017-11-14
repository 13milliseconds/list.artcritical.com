import React from 'react';
import AuthActions from '../../actions/AuthActions';
import ListActions from '../../actions/ListActions';
var async = require('async');
var MapboxClient = require('mapbox');
var client = new MapboxClient('pk.eyJ1IjoiYXJ0Y3JpdGljYWwiLCJhIjoiY2o5ZWUzdGlrMmIydjJ3bnJpeWxsN2I1YSJ9.HKlVu4oYspR74CeCdVouRg');
// Components
import MyListings from './myListings';
import MyMap from './myMap';
import SizeSelector from '../blocks/sizeSelector';
import {reorder} from 'react-reorder';

let markers

export default class MyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingHover: '',
        }
        
        this.onReorder = this.onReorder.bind(this);
        this.onHover = this.onHover.bind(this);
        this.findCoord = this.findCoord.bind(this);
    }
    
    componentWillMount(){
        async.map(this.props.user.mylist, this.findCoord, function(err, results){
          // results is now an array
          markers = results;
        });
    }
    
    onHover(_id){
        //Find the right marker
        console.log('Hovering', _id)
        this.setState({
            listingHover: _id
        })
    }
    
    onLeave(){
        
    }
    
    onReorder (event, fromIndex, toIndex, fromId, toId) {
        let newOrder = reorder(this.props.user.mylist, fromIndex, toIndex)
        AuthActions.reorderMyList(newOrder)
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

    render() {
        
        return ( 
                <div className="myList">
                    <MyMap markers={markers} 
                        listingHover={this.state.listingHover} />
                    <SizeSelector view={this.props.view} />
                            {this.props.user.mylist? <MyListings 
                                                   list={this.props.user.mylist}
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