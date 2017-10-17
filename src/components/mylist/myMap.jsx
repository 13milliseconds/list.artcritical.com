import React from 'react';
import GoogleMapReact from 'google-map-react';
//COMPONENT
import Marker from './marker';

export default class MyMap extends React.Component {
    constructor(props) {
        super(props);
        
    }

  render() {
      let num = 0;
      let markers = this.props.items.map(function(listing){
            num = num + 1
            return <Marker
                key="listing._id"
                lat={listing.venue.coordinates.lat || this.props.center.lat}
                lng={listing.venue.coordinates.long || this.props.center.long}
                listing={listing}
                num={num}
        />
      })
      
    return (
        <div className="mapWrap">
          <GoogleMapReact
            bootstrapURLKeys={{key: "AIzaSyD1qPeqE6djJy-KU0hj2JJfKJ77JAkXmNg"}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {markers}
          </GoogleMapReact>
        </div>
    );
  }
}

MyMap.defaultProps = {
    center: {lat: 40.7238556, lng: -73.9221523},
    zoom: 11
};
