import React from 'react';
import {Link} from 'react-router';
import ListStore from '../stores/ListStore';
import ListActions from '../actions/ListActions';
//COMPONENTS
import Listing from './listing.jsx';
import Date from './blocks/DateBlock.jsx';
import SizeSelector from './blocks/sizeSelector';
import DayPicker from './forms/DayPicker';


export default class EventsPage extends React.Component {
    constructor(props) {
        super(props);
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
        
        return ( 
            <div className="events mainList">
            <div className="left-col">
				<DayPicker events={this.props.eventsListings} />
			</div>
            <div className={this.props.view + " listingsWrap main-col"}>
                {this.props.eventsListings.length ? thelist : "No Future Events"}
            </div>
			<div className="right-col">
				Ads
			</div>
            </div>
        );
    }
}