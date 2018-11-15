import React from 'react'
//COMPONENTS
import {Link} from 'react-router'
import Listing from './Listing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class VenueBlock extends React.Component {
    
    constructor(props) {
        super(props)
    }
        
    render() {

    let listing = this.props.listings[0]
    let allowAccess = this.props.user.isLoggedIn && this.props.user.userAccess > 0 ? true : false

    //display the listings
    let displayListings = listings => listings.map((currentListing, index) => {
        return <Listing {...this.props} listing={currentListing} key={index}/>
    })
      
    return (
        <div className="venue">
            <div className="venueInfo">
                <Link className="venueName" to={"/venue/" + listing.venue.slug}>{listing.venue.name}</Link>
                {listing.venue.website && allowAccess &&
                    <a href={listing.venue.website} target="_blank" className="external"> <FontAwesomeIcon icon={['fal', 'external-link-square']} /></a>}
            </div>
            {displayListings(this.props.listings)}
        </div>
    );
  }
}