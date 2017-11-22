import React from 'react';
//COMPONENT
import MyMarker from './myMarker';
import ReactMapGL, {NavigationControl, Marker} from 'react-map-gl';
let num = 0


export default class MyMap extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.mapMarkers = this.mapMarkers.bind(this)
    }
    
    
      
    mapMarkers(allListings){
        
        if (allListings){
        return allListings.map((listing, index, done) => {
          
          num = num + 1
          const thisNum = num

        if (listing.venue){
            const newMarker = <Marker key={listing._id}
                        latitude={listing.venue.coordinates.lat}
                        longitude={listing.venue.coordinates.long}
                        anchor="bottom"
                        onMouseEnter={this.props.onHover.bind(this, listing)}
                        onMouseLeave={this.props.onLeave.bind(this, listing)}
                        className={listing._id == this.props.listingHover? 'active' : ''}
                                  >
                        <MyMarker
                            className={listing._id}
                            listing={listing}
                            num={index + 1} />
                </Marker>

            return newMarker
          }
        })
        }
    }

  render() {
    const {viewport, updateViewport} = this.props;
    return (
        <div className="mapWrap">
            <ReactMapGL
                {...viewport}
                onViewportChange={updateViewport}
              >
                {this.mapMarkers(this.props.markers)}
            </ReactMapGL>
        </div>
    );
  }
}
