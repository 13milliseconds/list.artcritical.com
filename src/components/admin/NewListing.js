import React from 'react';
import ListingForm from './ListingForm';


export default class NewListing extends React.Component {

    render() {
        
        return ( 
            <div className = "new">
                <ListingForm />
            </div>
        );
    }
}