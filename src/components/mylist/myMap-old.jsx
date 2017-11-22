import React from 'react';
//COMPONENT
import MyMarker from './myMarker';
let ReactMapboxGl
let Map, Marker
let num = 0


export default class MyMap extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.mapMarkers = this.mapMarkers.bind(this)
    }
    
    componentDidMount() {
        ReactMapboxGl = require("react-mapbox-gl");
        Marker = ReactMapboxGl.Marker;
        this.forceUpdate();
    }
    
    
      
    mapMarkers(allListings){
        num = 0
        
        if (allListings){
        return allListings.map((listing, done) => {
          
          num = num + 1
          const thisNum = num

        if (listing.venue){
            const coord = {
                lat: listing.venue.coordinates.lat,
                lng: listing.venue.coordinates.long
            }
            const newMarker = <Marker key={listing._id}
                        coordinates={coord}
                        anchor="bottom"
                        className={listing._id}
                                  >
                        <MyMarker
                            listing={listing}
                            num={thisNum} />
                </Marker>

            return newMarker
          }
        })
        }
    }

  render() {
      
      Map = ReactMapboxGl && ReactMapboxGl.Map({
          accessToken: "pk.eyJ1IjoiYXJ0Y3JpdGljYWwiLCJhIjoiY2o5ZWUzdGlrMmIydjJ3bnJpeWxsN2I1YSJ9.HKlVu4oYspR74CeCdVouRg"
        })
      
      
    return (
        <div className="mapWrap">
            { (Map) ? 
            <Map style="mapbox://styles/mapbox/streets-v9"
                 containerStyle={{height: "500px", width: "100%"}}
                 center={this.props.center} >
                {this.mapMarkers(this.props.markers)}
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
