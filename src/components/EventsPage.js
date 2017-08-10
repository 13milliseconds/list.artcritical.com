import React from 'react';
import {Link} from 'react-router';
import ListStore from '../stores/ListStore';
import Listing from './listing';
import ListActions from '../actions/ListActions';
import Date from './date';


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
                    <div>
                        <h2><Date date={newDate} /></h2>
                        <Listing {...listing} />
                    </div>
                )
            } else {
                return (
                  <Listing {...listing} />
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