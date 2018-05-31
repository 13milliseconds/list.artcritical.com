import React from 'react';
//COMPONENTS
import VenueList from './VenueList'

export default class ListingsHood extends React.Component {
    constructor(props) {
        super(props);
    }

	
    render() {

        let sortedListings = this.props.listings.sort(function(a, b){
            var nameA=a.venue.name.toLowerCase(), nameB=b.venue.name.toLowerCase();
            if (nameA < nameB) //sort string ascending
             return -1;
            if (nameA > nameB)
             return 1;
            return 0; //default return value (no sorting)
           });

    return (
        <div className="neighborhood">
            <h2>{this.props.title}</h2>
            <VenueList {...this.props} listings={sortedListings} />
        </div>
    );
  }
}