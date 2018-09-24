import React from 'react';

export default class ListingNameDisplay extends React.Component {

    render() {

        let listing = this.props
        let artistPresent = listing.artists 
                                && listing.artists.length > 0 
                                    && true
        let isGroupShow = listing.artists 
                                && (listing.artists.length > 3 && listing.name)
                                    ? true 
                                    : false

        let artistBlock = ''
        if (listing.artists){
            var i
            for (i =0; i < listing.artists.length; i++) {
                var comma = i < (listing.artists.length - 1) ? ', ' : ''
                artistBlock = artistBlock + listing.artists[i].name + comma
            }
        }
      
    return (
        <span className="title">
            {isGroupShow ? 'Group Show' : artistBlock}
            { artistPresent && listing.name ? ': ' : ''}
            { listing.name } 
        </span>
    )
  }
}