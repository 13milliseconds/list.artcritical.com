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
        	listings: []
        }
    }

    componentDidMount() {
        ListActions.getEvents();
    }

    render() {
    	let oldDate
        let thelist = this.props.eventsListings.map((listing) => {
          let newDate = listing.start;
            if ( newDate !== oldDate) {
                oldDate = newDate
                return (
                    <div key={listing._id}>
                        <h2><Date date={newDate} /></h2>
                        <Listing {...listing} user={this.props.user}/>
                    </div>
                )
            } else {
                return (
                  <Listing {...listing} key={listing._id} user={this.props.user}/>
              )   
            }
        })

    	return(
    		<div>
	    		<div>
	    			<h4>Review New Listings</h4>

	    		</div>
	    		
	    		<div className="events mainList">
	            <div className="left-col">
					Calendar
				</div>
	            <div className={this.props.view + " listingsWrap main-col"}>
	                {this.props.eventsListings.length ? thelist : "No Events to Review"}
	            </div>
				<div className="right-col">
					Ads
				</div>
	            </div>
            </div>
    	)
    }
}