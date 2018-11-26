import React from 'react';
import {Link} from 'react-router';
import EventActions from '../actions/EventActions';
import moment from 'moment';
//COMPONENTS
import Helmet from './blocks/Helmet'
import Event from './blocks/Event';
import Date from './blocks/DateBlock';
//import DayPicker from './forms/DayPicker';
import Loading from './blocks/loading'
import AdBlock from './blocks/AdBlock'

var scrollToComponent = ''


export default class EventsPage extends React.Component {
    constructor(props) {
        super(props);

        this.scrollToDate = this.scrollToDate.bind(this)
    }

    componentDidMount() {
        EventActions.getEvents();
        scrollToComponent = require('react-scroll-to-component')
    }

    scrollToDate(date) {
        let formattedDate = moment(date).format('YYYY MM DD')
        scrollToComponent(this.refs[formattedDate])
    }

    render() {
        let oldDate = moment()
        let thelist = this.props.eventsListings && this.props.eventsListings.map((event, index) => {
          let newDate = moment(event.date);
            if ( newDate.isSame(oldDate, 'day')) {
                if (index === 0) {
                    return (
                        <div className="date" key={event._id}>
                            <h2>Today</h2>
                            <Event event={event} user={this.props.user}/>
                        </div>
                    )
                }
                return (<Event event={event} key={event._id} user={this.props.user}/>)
            } else {
                oldDate = newDate
                return (
                    <div className="date" key={event._id}>
                        <h2><Date date={newDate} ref={moment(newDate).format('YYYY MM DD')} /></h2>
                        <Event event={event} user={this.props.user}/>
                    </div>
                )
            }
        })
        
        return ( 
            <div className="events mainList">
            <Helmet
                title="Events"
                ogTitle="Events - artcritical"
                link="https://list.artcritical.com/events"
            />
            <h1>Events</h1>
            <div className="left-col">
                { /*<DayPicker events={this.props.eventsListings} scrollToDate={this.scrollToDate} /> */}
			</div>
            <div className={this.props.view + " listingsWrap main-col"}>
                {this.props.eventsListings.length 
                    ? thelist 
                    : this.props.loading.events 
                        ? <Loading />
                        : <div>
                            <h2>No Future Events</h2>
                            <p>Check back again later or check out our <Link to={'/'}>list of this week's openings</Link>.</p>
                        </div>}
            </div>
			<div className="right-col">
                <AdBlock location="events" ads={this.props.ads} />
			</div>
            </div>
        );
    }
}