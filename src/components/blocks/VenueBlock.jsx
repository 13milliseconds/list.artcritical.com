import React from 'react'
//COMPONENTS
import {Link} from 'react-router'
import Listing from './Listing'

export default class VenueBlock extends React.Component {
    
    constructor(props) {
        super(props)
    }
        
    render() {

    let listing = this.props.listings[0]

    //display the listings
    let displayListings = listings => listings.map((currentListing, index) => {
        return <Listing listing={currentListing} key={index} {...this.props}/>
    })
        
    let address = <span className="address">{listing.venue.address1} {listing.venue.address2}{(listing.venue.address2 !== '' && listing.venue.city !== '') && ', ' }{listing.venue.city}</span>
      
    return (
        <div className="venue">
            <div className="venueInfo">
                <Link className="venueName" to={"/venue/" + listing.venue.slug}>{listing.venue.name}</Link>{address}
            </div>
            {displayListings(this.props.listings)}
        </div>
    );
  }
}