import React from 'react';
import ListStore from '../../stores/ListStore';
import ListActions from '../../actions/ListActions';
import moment from 'moment';

//COMPONENTS
import Listing from '../listing.jsx';
import Date from '../blocks/DateBlock.jsx';
import SizeSelector from '../blocks/sizeSelector';


export default class ReviewPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        ListActions.getLatestListings();
    }

    render() {
        //let futureListings = this.props.futureListings
        let thelistings = futureListings => futureListings.map(function(listing, index){
            //console.log(moment(listing['start']).format().slice(0,10))
            return (
                <Listing key={index} listing={listing} user={this.props.user}/>
            )

        }, this)

    	return(
    		<div>
	    		<h4>Review New Listings</h4>
	    		<div className="medium">
                        {thelistings(this.props.latestListings)}
	            </div>
            </div>
    	)
    }
}