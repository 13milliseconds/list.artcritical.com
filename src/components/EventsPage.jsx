import React from 'react';
import {Link} from 'react-router';
import ListStore from '../stores/ListStore';
import ListActions from '../actions/ListActions';
import moment from 'moment';
//COMPONENTS
import Helmet from './blocks/Helmet'
import VenueBlock from './blocks/VenueBlock';
import Date from './blocks/DateBlock';
import SizeSelector from './blocks/sizeSelector';
import DayPicker from './forms/DayPicker';
import Loading from './blocks/loading'

var scrollToComponent = ''


export default class EventsPage extends React.Component {
    constructor(props) {
        super(props);

        this.scrollToDate = this.scrollToDate.bind(this)
    }

    componentDidMount() {
        ListActions.getEvents();
        scrollToComponent = require('react-scroll-to-component')
    }

    scrollToDate(date) {
        let formattedDate = moment(date).format('YYYY MM DD')
        scrollToComponent(this.refs[formattedDate])
    }

    render() {
        let oldDate
        let thelist = this.props.eventsListings.map((listing) => {
          let newDate = listing.start;
            if ( newDate !== oldDate) {
                oldDate = newDate
                return (
                    <div className="date" key={listing._id}>
                        <h2><Date date={newDate} ref={moment(newDate).format('YYYY MM DD')} /></h2>
                        <VenueBlock listings={[listing]} user={this.props.user}/>
                    </div>
                )
            } else {
                return (
                  <VenueBlock listings={[listing]} key={listing._id} user={this.props.user}/>
              )   
            }
        })
        
        return ( 
            <div className="events mainList">
            <Helmet
                title="Events"
                link="http://list.artcritical.com/events"
            />
            <div className="left-col">
				{this.props.eventsListings && <DayPicker events={this.props.eventsListings} scrollToDate={this.scrollToDate} />}
			</div>
            <div className={this.props.view + " listingsWrap main-col"}>
                {this.props.eventsListings.length 
                    ? thelist 
                    : this.props.loading.events 
                        ? <Loading />
                        : "No Future Events"}
            </div>
			<div className="right-col">
				Ads
			</div>
            </div>
        );
    }
}