import React from 'react';
var async = require('async');
var MapboxClient = require('mapbox');
var client = new MapboxClient('pk.eyJ1IjoiYXJ0Y3JpdGljYWwiLCJhIjoiY2o5ZWUzdGlrMmIydjJ3bnJpeWxsN2I1YSJ9.HKlVu4oYspR74CeCdVouRg');
//COMPONENT
import MyMarker from './myMarker';


let ReactMapboxGl, Map, Marker
let markers
let num = 0

export default class MyMap extends React.Component {
    
    constructor(props) {
        super(props);   
        
        this.mapMarkers = this.mapMarkers.bind(this);
    }
    
    componentDidMount() {
        console.log('Map is Mounting')
        ReactMapboxGl = require("react-mapbox-gl");
        Marker = ReactMapboxGl.Marker;
        this.forceUpdate();
    }
    
    mapMarkers(listing, done) {
           num = num + 1
           const thisNum = num
          
          if (listing.venue){
              if(!listing.venue.coordinates){
                // Get coordinates
                const fullAddress = listing.venue.address + ' ' + listing.venue.city
                if (fullAddress && !listing.venue.coordinates) {
                    client.geocodeForward(fullAddress, {}).then(function(res) {
                        var data = res.entity;
                        const newCoords = { 
                                lat: data.features[0].center[1],
                                lng: data.features[0].center[0]
                              }
                        const newMarker = <Marker 
                                   key={listing._id}
                                   coordinates={newCoords}
                                   anchor="bottom">
                                    <MyMarker
                                        listing={listing}
                                        num={thisNum} />
                            </Marker>
                        //Callback function
                        done({}, newMarker) 
                  })
                  .catch(function(err) {
                    console.log('Geocodding error: ', err)
                  }) 
              }
            } else {
                const coord = { lat: listing.venue.coordinates.lat,
                                lng: listing.venue.coordinates.long
                              }
            const newMarker = <Marker key={listing._id}
                        coordinates={coord}
                        anchor="bottom">
                        <MyMarker
                            listing={listing}
                            num={thisNum} />
                </Marker>
            //Callback function
            done({}, newMarker) 
          }
          }
      }

  render() {
      console.log('rendering the map')
      
      Map = ReactMapboxGl && ReactMapboxGl.Map({
          accessToken: "pk.eyJ1IjoiYXJ0Y3JpdGljYWwiLCJhIjoiY2o5ZWUzdGlrMmIydjJ3bnJpeWxsN2I1YSJ9.HKlVu4oYspR74CeCdVouRg"
        })
      
      async.map(this.props.items, this.mapMarkers, function(err, results){
          // results is now an array
          markers = results;
        });
      
    return (
        <div className="mapWrap">
            { (Map) ? 
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{height: "500px", width: "100%"}}
                center={this.props.center}
            >
                <myMarkers/>
                {markers}
            </Map>
            :
                null
            }
        </div>
    );
  }
}

MyMap.defaultProps = {
    center: {lat: 40.7238556, lng: -73.9221523},
    zoom: 11
};
