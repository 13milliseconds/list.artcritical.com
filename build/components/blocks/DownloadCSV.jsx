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
        this._downloadTxtFile = this._downloadTxtFile.bind(this);
    }

    componentDidUpdate() {

    }

    _downloadTxtFile(){
        // Block other clicks
        this.setState({
            compiling: true
        })

        //Prepare the JSON into CSV
        var data = 'Title,Start Date,End Date,Venue,URL,Address,City,Neighborhood \n';
        this.props.download.map(listing => {
            data += listing.title ? '"' + listing.title + '", ' : '"' + DisplayActions.listingName(listing) + '", '
            data += listing.start ? moment(listing.start).format('MM/DD/YY') + ', ' : ', '
            data += listing.end ? moment(listing.end).format('MM/DD/YY') + ', ' : ', '
            data += listing.venue ? listing.venue.name.replace(new RegExp(',', 'g'), '') + ', ' : ', '
            data += listing.venue ? listing.venue.website + ', ' : ', '
            data += listing.venue ? listing.venue.address1.replace(new RegExp(',', 'g'), '') + ' ' + listing.venue.address2.replace(new RegExp(',', 'g'), '') + ', ' : ', '
            data += listing.venue ? listing.venue.city + ', ' : ', '
            data += listing.venue ? listing.venue.neighborhood + ', ' : ', '
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

        let buttonActivated = !this.state.compiling && this.props.download.length > 0
        
        return (
            <Button 
                onClick={this._downloadTxtFile}
                disabled={!buttonActivated}>
                Download CSV
            </Button>
        );
    }
}