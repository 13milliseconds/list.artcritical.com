import React from 'react';
import Listing from './listing';
import {IntlProvider, FormattedDate} from 'react-intl';


export default class DayPage extends React.Component {

    render() {
        let date = this.props.date.toISOString()
        
        let openings = []
        let events = []
        let closings = []
        
        let thelist = this.props.glanceListings.map((listing) => {
            // Check if it is an event
            if ( listing.event == true) {
                // it IS an event
                
                if ( listing.start == date) {
                    events.push(<Listing {...listing} />) 
                }
                
            } else {
                //not an event
                
                //Check if it starts on this day
                if ( listing.start == date) {
                    openings.push(<Listing {...listing} />) 
                } 
                //Check if it ends on this day
                if ( listing.end == date) {
                    closings.push(<Listing {...listing} />)  
                } 
            }
                  
        });
        
        
        return ( 
             <IntlProvider locale="en">
                <div className = "day">
                    <h2><FormattedDate value={date} weekday="long" day="numeric" month="short" /></h2>
                    { openings.length > 0 && <h3>Openings</h3>}
                        {openings}
                    { events.length > 0 && <h3>Events</h3> }
                        {events}
                    { closings.length > 0 && <h3>Closing</h3> }
                        {closings}
            </div>
            </IntlProvider>
        );
    }
}