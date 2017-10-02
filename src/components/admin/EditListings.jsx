import React from 'react';
import ListingEdit from './ListingEdit';

export default class IndexPage extends React.Component {

    render() {
        
        return ( 
            <div className = "edit">
                <h3>Edit Listings</h3>
                <ListingEdit />
            </div>
        );
    }
}