import React from 'react';
import Listing from './listing';
import {IntlProvider, FormattedDate} from 'react-intl';


export default class DayPage extends React.Component {

    render() {
        let date = this.props.label.toISOString()
        
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
            <div className = "day">
            <div className="featuredSection">
                <h2>Featured item</h2>
            </div>
            <div className = "listingsWrap">
                    { openings.length > 0 && <h3>Openings</h3>}
                        {openings}
                    { events.length > 0 && <h3>Events</h3> }
                        {events}
                    { closings.length > 0 && <h3>Closing</h3> }
                        {closings}
                        
                    { (closings.length + events.length + openings.length) == 0 && <h3>Nothing happening today!</h3> }
            </div>
            </div>
        );
    }
}