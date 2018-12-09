import React from 'react'
import ListActions from '../../actions/ListActions'

//COMPONENTS
import VenueBlock from '../blocks/VenueBlock'
import Loading from '../blocks/loading'
import {Button, Input} from 'reactstrap'
import Event from "../blocks/Event"


export default class ReviewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'listings'
        }

        this.changeSelect = this.changeSelect.bind(this)
    }

    componentDidMount() {
        ListActions.getLatestListings();
    }

    componentDidUpdate(){
        console.log('Updating ReviewPage ' + this.state.type)
        if(this.state.type === "venues" && this.props.latestVenues.length === 0 && this.props.loading.latestVenues === false) {
             ListActions.getLatestVenues()
        } 
        if (this.state.type === "events" && this.props.latestEvents.length === 0 && this.props.loading.latestEvents === false){
            ListActions.getLatestEvents()
        }
    }

    cleanup(){
        ListActions.cleanupListings();
    }

    changeSelect(event){
        this.setState({
            type: event.target.value
        })
    }

    render() {
        let thelistings = latestListings => latestListings.map(function(listing){
            return <VenueBlock key={listing._id} listings={[listing]} user={this.props.user}/>
        }, this)

        let theevents = latestEvents => latestEvents.map(function(event){
            return <Event event={event} key={event._id} user={this.props.user}/>
        }, this)

        let thevenues = latestVenues => latestVenues.map(function(venue){
            return <div className='venue' key={venue._id}><a href={'/venue/' + venue.slug}>{venue.name}</a></div>

        }, this)

    	return(
    		<div className={this.props.view + ' reviewWrap'}>
	    		<h4>Review</h4>
                Clean up database: <Button onClick={this.cleanup}>Cleanup</Button>
                <Input type="select" onChange={this.changeSelect}>
                    <option value="listings">Listings</option>
                    <option value="venues">Venues</option>
                    <option value="events">Events</option>
                </Input>
	    		<div className='toReview'>
                    {this.state.type === 'venues' 
                        ? this.props.loading.latestVenues ? <Loading /> : thevenues(this.props.latestVenues)
                        : this.state.type === 'events' 
                            ? this.props.loading.latestEvents ? <Loading /> : theevents(this.props.latestEvents)
                            : this.props.loading.latestListings ? <Loading /> : thelistings(this.props.latestListings)}

	            </div>
            </div>
    	)
    }
}