import React from 'react'
//COMPONENTS
import VenueBlock from './VenueBlock'

export default class VenueList extends React.Component {
    
    constructor(props) {
        super(props)
    }
        
    render() {

        let currentVenue = ''
        let listingsExport = []

        //Render listings inside a neighborhood div
        let thelistRender = listings => listings.map((listing, index) => {
            if (index == 0) { //If it is the first listing
                listingsExport.push(listing)
                currentVenue = listing.venue._id
                return true
            }
            if (index == this.props.listings.length - 1){ //If it is the last listing
                if (currentVenue !== listing.venue._id){
                    return [<VenueBlock key={listing._id} {...this.props} listings={listingsExport}/>,
                            <VenueBlock key={index} {...this.props} listings={[listing]}/>]
                }else {
                    listingsExport.push(listing)
                    return <VenueBlock key={listing._id} {...this.props} listings={listingsExport}/>
                }
            }
            if (currentVenue !== listing.venue._id){ //New venue
                currentVenue = listing.venue._id

                //Transfer the export to delete it securely
                var thisExport = listingsExport
                listingsExport = [listing]

                return <VenueBlock key={listing._id} {...this.props} listings={thisExport}/>

            } else { //Same venue
                listingsExport.push(listing)
                currentVenue = listing.venue._id
                return true
            }
        })
      
    return (
        <div className="venuesWrap">
            {this.props.listings.length == 1
                ? <VenueBlock {...this.props} />
                : thelistRender(this.props.listings)}
        </div>
    );
  }
}