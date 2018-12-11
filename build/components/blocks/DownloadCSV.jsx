import React from 'react'
import {Button} from 'reactstrap'
import moment from 'moment'
import DisplayActions from '../../actions/displayActions'

export default class DownloadCSV extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            compiling: false
        }
        
        // Function binding
        this._download = this._download.bind(this)
        this._downloadListingsCSV = this._downloadListingsCSV.bind(this)
        this._downloadVenuesCSV = this._downloadVenuesCSV.bind(this)
    }


    _download(){
        if (this.props.listings)
            this._downloadListingsCSV(this.props.listings)
        if (this.props.venues)
            this._downloadVenuesCSV(this.props.venues)
    }

    _downloadListingsCSV(listings){
        // Block other clicks
        this.setState({
            compiling: true
        })

        //Order the listings from North to South
        function compare(a,b) {
            if (a.venue && b.venue){
                if (a.venue.coordinates.lat > b.venue.coordinates.lat)
                    return -1;
                if (a.venue.coordinates.lat < b.venue.coordinates.lat)
                    return 1;
            }
            return 0;
          }
        var sortedListings = listings
        sortedListings.sort(compare)

        //Prepare the JSON into CSV
        var data = 'Title,Notes,Start Date,End Date,Venue,Address,City,Neighborhood, Website,Phone \n';
        sortedListings.map(listing => {
            data += listing.title ? '"' + listing.title + '",' : '"' + DisplayActions.listingName(listing) + '",'
            data += listing.description ? '"' + listing.description + '",' : ','
            data += listing.start ? moment(listing.start).format('MM/DD/YY') + ',' : ','
            data += listing.end ? moment(listing.end).format('MM/DD/YY') + ',' : ','
            data += listing.venue ? '"' + listing.venue.name + '",' : ','
            data += listing.venue ? '"' + listing.venue.address1 + ' ' + listing.venue.address2 + '",' : ','
            data += listing.venue ? listing.venue.city + ',' : ','
            data += listing.venue ? listing.venue.neighborhood + ',' : ','
            data += listing.venue ? listing.venue.website + ',' : ','
            data += listing.venue ? listing.venue.phone + ',' : ','
		    data += "\n";
        })

        //Prepare the file
        var element = document.createElement("a")
        let file = new Blob([data], {type: 'text/csv'})
        element.href = URL.createObjectURL(file)
        element.download = this.props.name + '-' + moment().format('MMDDYY-HHmm') + ".csv"
        element.click();

        // Allow clicks again
        this.setState({
            compiling: false
        })
      }

      _downloadVenuesCSV(venues){
        // Block other clicks
        this.setState({
            compiling: true
        })

        //Prepare the JSON into CSV
        var data = 'Name,Address,City,Neighborhood, Website,Phone \n';
        venues.map(venue => {
            data += '"' + venue.name + '",'
            data += '"' + venue.address1 + ' ' + venue.address2 + '",' 
            data += venue.city + ','
            data += venue.neighborhood + ','
            data += venue.website + ','
            data += venue.phone + ','
		    data += "\n";
        })

        //Prepare the file
        var element = document.createElement("a")
        let file = new Blob([data], {type: 'text/csv'})
        element.href = URL.createObjectURL(file)
        element.download = this.props.name + '-' + moment().format('MMDDYY-HHmm') + ".csv"
        element.click();

        // Allow clicks again
        this.setState({
            compiling: false
        })
      }
        
    render() {

        let buttonActivated = !this.state.compiling && (this.props.listings || this.props.venues)
        
        return (
            <Button 
                onClick={this._download}
                disabled={!buttonActivated}>
                Download CSV
            </Button>
        );
    }
}