import React from 'react';
import {IntlProvider, FormattedDate} from 'react-intl';
import ListActions from '../actions/ListActions';
//COMPONENTS
import Listing from './listing';
import FeatureBlock from './blocks/featureBlock';
import SizeSelector from './blocks/sizeSelector';


export default class DayPage extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    componentWillMount(){
        ListActions.featureReset();
        ListActions.featureLoad({date: this.props.date});
    }

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
                    events.push(<Listing {...listing} key={listing._id} mylist = {this.props.mylist}/>) 
                }
                
            } else {
                //not an event
                
                //Check if it starts on this day
                if ( listing.start == date) {
                    openings.push(<Listing {...listing} key={listing._id} mylist = {this.props.mylist}/>) 
                } 
                //Check if it ends on this day
                if ( listing.end == date) {
                    closings.push(<Listing {...listing} key={listing._id} mylist = {this.props.mylist}/>)  
                } 
            }
                  
        });
        
        
        return ( 
            <div className = "day">
            <div className="featuredSection">
                <FeatureBlock feature={this.props.feature}/>
            </div>
            <SizeSelector view={this.props.view} />
            <div className={this.props.view + " listingsWrap"}>
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