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
        ListActions.getFuture();
    }

    render() {
        //let futureListings = this.props.futureListings
        let thelistings = futureListings => futureListings.map(function(listing, index){
            console.log(listing)
            console.log(moment(listing['start']).format().slice(0,10))
            return (
                <Listing key={index} {...listing} user={this.props.user}/>
            )

        })

    	return(
    		<div>
	    		<div>
	    			<h4>Review New Listings</h4>
	    		</div>
	    		
	    		<div className="events mainList">
    	            <div>
                        {thelistings(this.props.futureListings)}
    	            </div>
	            </div>
            </div>
    	)
    }
}