import React from 'react';
import {Link} from 'react-router';
import ListStore from '../stores/ListStore';
import ListActions from '../actions/ListActions';
//COMPONENTS
import Listing from './listing.jsx';
import Date from './date.jsx';


export default class EventsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ListStore.listen(this.onChange);
        ListActions.getEvents();
    }

    componentWillUnmount() {
        ListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let oldDate
        let thelist = this.state.eventsListings.map((listing) => {
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
                  <Listing {...listing} key={listing._id} mylist = {this.props.mylist}/>
              )   
            }
        });
        
        return ( 
            <div className = "home">
                <h2>Events</h2>
            <div className = "listingsWrap">
                {thelist}
            </div>
            </div>
        );
    }
}