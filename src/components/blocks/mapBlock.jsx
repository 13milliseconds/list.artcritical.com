import React from 'react';
import GoogleMapReact from 'google-map-react';
//COMPONENT
import Marker from './singleMarker';

export default class MapBlock extends React.Component {
    constructor(props) {
        super(props);
        
    }

  render() {
      
    return (
        <div className="mapWrap">
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyD1qPeqE6djJy-KU0hj2JJfKJ77JAkXmNg"}}
        defaultCenter={{lat: this.props.coordinates.lat, lng: this.props.coordinates.long}}
        defaultZoom={15}
      >
        <Marker
            lat={this.props.coordinates.lat}
            lng={this.props.coordinates.long}
        />
      </GoogleMapReact>
        </div>
    );
  }
}
