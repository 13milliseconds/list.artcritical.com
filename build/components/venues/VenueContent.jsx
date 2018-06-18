import React from 'react';
//Components
import Tabs from '../tabs.jsx';
import VenueListings from './VenueListings';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


export default class VenuePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const venue = this.props.venue
        
        return ( 
            <div className="mapInfo">
                    <h2>{venue.name}</h2>
                    <section>
                        {venue.address1} {venue.address2}<br/>
                        {venue.city}{venue.state && ', ' + venue.state} {venue.zipcode}
                        {venue.phone && <div className="phone"><FontAwesomeIcon icon={['fas', 'phone']}/> {venue.phone}</div>}
                        {venue.website && <div><FontAwesomeIcon icon={['fal', 'link']}/> <a className="website" target="_blank" href={venue.website}>{venue.website}</a></div>}
                    </section>
                    <section className="contact">
                        Represent this gallery? Contact us at <a href="mailto:hello@artcritical.com">hello@artcritical.com</a> to get access to this page.
                    </section>
                    <Tabs>
                        <VenueListings view={this.props.view} listings={this.props.venue.currentListings} user={this.props.user} label="Current Shows" />
                        <VenueListings view={this.props.view} listings={this.props.venue.upcomingListings} user={this.props.user} label="Upcoming Shows" />
                        <VenueListings view={this.props.view} listings={this.props.venue.pastListings} user={this.props.user} label="Past Shows" />
                    </Tabs>
            </div>
        );
    }
}