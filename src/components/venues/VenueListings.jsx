import React from 'react';
// Components
import Listing from '../listing';

export default class VenueListings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        let listingsRender = listings => listings.map((listing) => {
            return(
                <Listing {...listing} myList={this.props.myList} key={listing._id}/>
            )
        })
        
        return ( 
                <div className="venueListings">
                    {this.props.listings ? listingsRender(this.props.listings) : 'No Listings'}
                </div>
        );
    }
}