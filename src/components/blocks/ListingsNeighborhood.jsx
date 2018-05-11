import React from 'react';
//COMPONENTS
import Listing from '../listing'
import ListingCluster from './ListingCluster'

export default class FeatureBlock extends React.Component {
    constructor(props) {
        super(props);
    }

	
    render() {

        let currentVenue = ''
        let listingsExport = []

        //Render listings inside a neighborhood div
        let thelistRender = listings => listings.map((listing, index) => {
            if (index == 0) {
                listingsExport.push(listing)
                currentVenue = listing.venue._id
                return true
            }
            if (currentVenue !== listing.venue._id){
                currentVenue = listing.venue._id

                //Transfer the export to delete it securely
                var thisExport = listingsExport
                listingsExport = [listing]

                if (thisExport.length == 1) {
                    return <Listing key={listing._id} listing={thisExport[0]} user={this.props.user} dateView="current"/>
                } else if (thisExport.length > 1) {
                    return <ListingCluster key={listing._id} listings={thisExport} user={this.props.user} dateView="current"/>
                }
            } else {
                listingsExport.push(listing)
                currentVenue = listing.venue._id
                return true
            }
        })
      
    return (
        <div className="neighborhood">
            <h2>{this.props.title}</h2>
            {thelistRender(this.props.listings)}
        </div>
    );
  }
}