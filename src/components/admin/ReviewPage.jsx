import React from 'react';
import ListActions from '../../actions/ListActions';
import ListStore from '../../stores/ListStore';
//COMPONENTS
import Listing from '../listing.jsx';
import Date from '../blocks/DateBlock.jsx';
import SizeSelector from '../blocks/sizeSelector';


export default class ReviewPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        	listings: this.props.futureListings
        }
    }

    componentDidMount() {
        ListActions.getFuture();
    }

    render() {

    	return(
    		<div>
	    		<div>
	    			<h4>Review New Listings</h4>
	    		</div>
	    		
	    		<div className="events mainList">
	            <div>

	            </div>
	            </div>
            </div>
    	)
    }
}