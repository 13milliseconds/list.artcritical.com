import React from 'react';
import {IntlProvider, FormattedDate} from 'react-intl';
import ListActions from '../actions/ListActions';
import moment from 'moment';
//COMPONENTS
import VenueList from './blocks/VenueList';
import FeatureBlock from './blocks/featureBlock';


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
    
    //componentWillMount(){
        //ListActions.featureReset();
        //ListActions.featureLoad({date: this.props.date});
    //}
	
	componentWillMount(){
		
		let events = []
		let openings = []
		let closings = []
		
		this.props.glanceListings.map((listing) => {
            // Check if it is an event
            if ( listing.event == true) {// it IS an event
                moment(listing.start).format().slice(0,10) == this.state.date && events.push(listing)
                
            } else { //not an event
                //Check if it starts on this day
                if (moment(listing.start).format().slice(0,10) == this.state.date) {
                    openings.push(listing) 
                } 
                //Check if it ends on this day
                if (moment(listing.end).format().slice(0,10) == this.state.date) {
                    closings.push(listing)  
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
            <p> { this.state.openings.length > 0 && this.state.openings.length + ' shows openings, '}
                { this.state.events.length > 0 && this.state.events.length + ' events, '}
                { this.state.closings.length > 0 && this.state.closings.length + ' shows closing'}</p>
            <div className={this.props.view + " listingsWrap"}>
                    { this.state.openings.length > 0 && <div><h2>Openings</h2>
                        <VenueList listings={this.state.openings} user={this.props.user} dateView="current"/>
                        </div>
                    }
                    { this.state.events.length > 0 && <div><h2>Events</h2> 
                        <VenueList listings={this.state.events}  user={this.props.user} dateView="nodate"/>
                        </div>
                    }
                    { this.state.closings.length > 0 && <div><h2>Last Chance</h2>
                        <VenueList listings={this.state.closings} user={this.props.user} dateView="nodate"/>
                        </div>
                    }
                        
                    { (this.state.closings.length + this.state.events.length + this.state.openings.length) == 0 
                     && <h4>Nothing happening today!</h4> }
            </div>
			<div className="featuredSection">
                <FeatureBlock feature={this.props.feature} user={this.props.user}/>
            </div>
            </div>
        );
    }
}