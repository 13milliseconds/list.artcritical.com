import React from 'react';
// Components
import Listing from '../listing';
import SizeSelector from '../blocks/sizeSelector';

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
                    <SizeSelector view={this.props.view} />
                    <div className={this.props.view + " listingsWrap"}>
                    {this.props.listings ? listingsRender(this.props.listings) : 'No Listings'}
                    </div>
                </div>
        );
    }
}