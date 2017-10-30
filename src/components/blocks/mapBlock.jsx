import React from 'react';
import GoogleMapReact from 'google-map-react';
//COMPONENT
import SingleMarker from './singleMarker'
let ReactMapboxGl, Layer, Feature, Map, Marker

export default class MapBlock extends React.Component {
    
    constructor(props) {
        super(props);    
    }
    
    componentDidMount() {
        ReactMapboxGl = require("react-mapbox-gl");
        Layer = ReactMapboxGl.Layer;
        Feature = ReactMapboxGl.Feature;
        Marker = ReactMapboxGl.Marker;
        this.forceUpdate();
    }

  render() {
       
      
      const coord = {lat: this.props.coordinates.lat, lng: this.props.coordinates.long}
      
      
        Map = ReactMapboxGl && ReactMapboxGl.Map({
          accessToken: "pk.eyJ1IjoiYXJ0Y3JpdGljYWwiLCJhIjoiY2o5ZWUzdGlrMmIydjJ3bnJpeWxsN2I1YSJ9.HKlVu4oYspR74CeCdVouRg"
        })

      
    return (
        <div className="mapWrap">
            { Map ? 
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{height: "500px", width: "100%"}}
                    center={coord}
                >
                    <Marker coordinates={coord}
                        anchor="bottom">
                        <SingleMarker />
                    </Marker>
                </Map>
            :
                null
             }
        </div>
            
    );
  }
}
