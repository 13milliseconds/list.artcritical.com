import React from 'react';
import AuthActions from '../actions/AuthActions';
var async = require('async');
var MapboxClient = require('mapbox');
var client = new MapboxClient('pk.eyJ1IjoiYXJ0Y3JpdGljYWwiLCJhIjoiY2o5ZWUzdGlrMmIydjJ3bnJpeWxsN2I1YSJ9.HKlVu4oYspR74CeCdVouRg');
// Components
import Listing from './mylist/myListing';
import MyMap from './mylist/myMap';
import SizeSelector from './blocks/sizeSelector';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';


let markers


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default class MyList extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            selected: null,
            simpleList: this.props.user.mylist,
            list: this.listingRender(this.props.user.mylist)
        }
        
        this.onDragEnd = this.onDragEnd.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.listingRender = this.listingRender.bind(this);
        this.findCoord = this.findCoord.bind(this);
    }
    
    componentWillReceiveProps() {
        this.setState({
            simpleList: this.props.user.mylist,
            list: this.listingRender(this.props.user.mylist),
        });
    }
    
    onHover(id){
        //Find the right marker
        console.log('Hovering on ', id)
        //Zoom and center on the marker
    }
    
    onLeave(id){
        
    }
    
    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
          return;
        }

        const simpleList = reorder(
          this.state.simpleList,
          result.source.index,
          result.destination.index
        );
        
        const list = reorder(
          this.state.list,
          result.source.index,
          result.destination.index
        );

        this.setState({
            simpleList,
            list
        });
      }
    
    findCoord(listing, done) {

        if (listing.venue) {
            if (!listing.venue.coordinates) {
                // Get coordinates
                const fullAddress = listing.venue.address + ' ' + listing.venue.city
                client.geocodeForward(fullAddress, {}).then(function (res) {
                        const newCoords = {
                            lat: res.entity.features[0].center[1],
                            long: res.entity.features[0].center[0]
                        }
                        var newListing = listing
                        newListing.venue.coordinates = newCoords
                        //Callback function
                        done({}, newListing)
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
    
    //function to render all listings
    listingRender(listings) {
        
        return listings.map((listing, index) => {
            if (listing.venue){
                return <Draggable draggableId={listing._id} key={index} type="list">
                      {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={provided.draggableStyle}
                            {...provided.dragHandleProps}
                          >
                        <Listing    {...listing} 
                                    onHover={this.onHover} 
                                    onLeave={this.onLeave} />
                            {provided.placeholder}
                        </div>
                        )}
                    </Draggable>
            }
        })
    }
    
    componentWillMount(){
        AuthActions.getMylist()
    }

    render() {
        
        async.map(this.state.simpleList, this.findCoord, function(err, results){
          // results is now an array
          markers = results;
        });
        
        return ( 
                <div className="myList">
                    <MyMap markers={markers} />
                    <SizeSelector view={this.props.view} />
                    <DragDropContext
                            onDragEnd={this.onDragEnd}
                          >
                        <div className={this.props.view + " listingsWrap"}>
                            <Droppable droppableId="droppable-list" type="list">
                              {(provided, snapshot) => (
                                <div ref={provided.innerRef}>

                                    {this.state.list}

                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                        </div>
                    </DragDropContext>
                </div>
        );
    }
}