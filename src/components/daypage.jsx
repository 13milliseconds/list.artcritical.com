import React from 'react';
import {IntlProvider, FormattedDate} from 'react-intl';
import ListActions from '../actions/ListActions';
import moment from 'moment';
//COMPONENTS
import Listing from './listing';
import FeatureBlock from './blocks/featureBlock';
import SizeSelector from './blocks/sizeSelector';


export default class DayPage extends React.Component {
    
    constructor(props) {
        super(props);
		
		this.state={
			date: moment(this.props.date).format().slice(0,10),
			openings: [],
			events: [],
        	closings: [],
		}
    }
    
    componentWillMount(){
        ListActions.featureReset();
        ListActions.featureLoad({date: this.props.date});
    }
	
	componentWillReceiveProps(nextProps){
		
		let events = []
		let openings = []
		let closings = []
		
		this.props.glanceListings.map((listing) => {
            // Check if it is an event
            if ( listing.event == true) {
                // it IS an event
                
                if ( moment(listing.start).format().slice(0,10) == this.state.date) {
                    events.push(<Listing {...listing} key={listing._id} user={this.props.user}/>) 
                }
                
            } else {
                //not an event
                //Check if it starts on this day
                if (moment(listing.start).format().slice(0,10) == this.state.date) {
                    openings.push(<Listing {...listing} key={listing._id} user={this.props.user} dateView="current"/>) 
                } 
                //Check if it ends on this day
                if (moment(listing.end).format().slice(0,10) == this.state.date) {
                    closings.push(<Listing {...listing} key={listing._id} user={this.props.user}/>)  
                } 
            }
			
			this.setState({
				openings: openings,
				events: events,
				closings: closings,
			})
                  
        });
		
	}

    render() {
        
        return ( 
            <div className = "day">
            <div className="featuredSection">
                <FeatureBlock feature={this.props.feature}/>
            </div>
            <SizeSelector view={this.props.view} />
            <div className={this.props.view + " listingsWrap"}>
                    { this.state.openings.length > 0 && <h3>Openings</h3>}
                        {this.state.openings}
                    { this.state.events.length > 0 && <h3>Events</h3> }
                        {this.state.events}
                    { this.state.closings.length > 0 && <h3>Closing</h3> }
                        {this.state.closings}
                        
                    { (this.state.closings.length + this.state.events.length + this.state.openings.length) == 0 
					 && <h3>Nothing happening today!</h3> }
            </div>
            </div>
        );
    }
}