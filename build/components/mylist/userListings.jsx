import React from 'react';
// Components
import VenueBlock from '../blocks/VenueBlock';

//

export default class UserListings extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return ( 
            <div className={this.props.view + " listingsWrap"}>
                    { this.props.currentUser.mylist.map((listing, index) => (
						<div key={listing._id} 
                            className={listing._id == this.props.listingHover && 'active'} 
                            >
                            <VenueBlock  
                                {...this.props}
                                listings={[listing]} 
								number={index + 1} 
								user={this.props.user}
								public={true}
                                mapMouseEnter={this.props.onHover.bind(this, listing)}
                                mapMouseLeave={this.props.onLeave.bind(this, listing)}/>
						</div>
                        ))}
            </div>
        );
    }
}