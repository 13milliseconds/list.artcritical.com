import React from 'react';
import {Link} from 'react-router';
import ListStore from '../stores/ListStore';
import ListActions from '../actions/ListActions';
//COMPONENTS
import Listing from './listing.jsx';
import Date from './blocks/DateBlock.jsx';
import SizeSelector from './blocks/sizeSelector';


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
                        <Listing {...listing} mylist = {this.props.mylist}/>
                    </div>
                )
            } else {
                return (
                  <Listing {...listing} key={listing._id} mylist={this.props.user.mylist}/>
              )   
            }
        });
        
        return ( 
            <div className = "home">
                <h2>Events</h2>
            <SizeSelector view={this.props.view} />
            <div className={this.props.view + " listingsWrap"}>
                {thelist}
            </div>
            </div>
        );
    }
}