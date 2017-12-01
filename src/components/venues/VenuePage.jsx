import React from 'react';
import ListActions from '../../actions/ListActions';
//COMPONENTS
import MapBlock from '../blocks/mapBlock';
import VenueListings from './VenueListings';
import VenueContent from './VenueContent';
import Tabs from '../tabs.jsx';


export default class VenuePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.componentWillMount = this.componentWillMount.bind(this);
    }
    
    componentWillMount(){
        ListActions.getVenueFullInfo(this.props.params.slug);
    }

    render() {
        
        // Get coordinates
        const fullAdress = this.props.venue.address 
                                ? this.props.venue.address + ' ' + this.props.venue.city
                                : null
        const venueId = this.props.venue._id
        
        if (fullAdress && !this.props.venue.coordinates) {
            client.geocodeForward(fullAdress, function(err, data, res) {
                const newCoords = data.features[0].center;
                ListActions.updateVenue(newCoords, venueId);
            })
        } 
        
        return ( 
            <div className="venuePage">
                <VenueContent venue={this.props.venue}/>
                {this.props.venue.coordinates && <MapBlock {...this.props.venue} />}
                <div className="listingsWrap">
                    <Tabs>
                        <VenueListings view={this.props.view} listings={this.props.venue.currentListings} user={this.props.user} label="Current Shows" />
                        <VenueListings view={this.props.view} listings={this.props.venue.upcomingListings} user={this.props.user} label="Upcoming Shows" />
                        <VenueListings view={this.props.view} listings={this.props.venue.pastListings} user={this.props.user} label="Past Shows" />
                    </Tabs>
                </div>
            </div>
        );
    }
}