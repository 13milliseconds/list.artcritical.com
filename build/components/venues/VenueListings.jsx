import React from 'react';
// Components
import VenueBlock from '../blocks/VenueBlock';
import SizeSelector from '../blocks/sizeSelector';

export default class VenueListings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        
        return ( 
                <div className="venueListings">
                    <SizeSelector view={this.props.view} />
                    <div className={this.props.view + " listingsWrap"}>
                    {this.props.listings[0]    ? <VenueBlock listings={this.props.listings} user={this.props.user} key={this.props.listings[0]._id}/> 
                                            : 'No Listings'
                    }
                    </div>
                </div>
        );
    }
}