import React from 'react';
// Components
import Listing from './myListing';

//

export default class UserListings extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return ( 
            <div className={this.props.view + " listingsWrap"}>
                    { this.props.user.mylist.map((listing, index) => (
                            <Listing  {...listing} key={index} number={index + 1} user={this.props.user} public={true}/>
                        ))}
            </div>
        );
    }
}