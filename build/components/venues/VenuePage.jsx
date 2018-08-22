import React from 'react';
import ListActions from '../../actions/ListActions';
//COMPONENTS
import MapBlock from '../blocks/mapBlock';
import VenueContent from './VenueContent';


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
        const venueId = this.props.venue
							? this.props.venue._id
							: ''
		
        if (fullAdress && !this.props.venue.coordinates) {
            client.geocodeForward(fullAdress, function(err, data, res) {
                const newCoords = data.features[0].center;
                ListActions.updateVenue(newCoords, venueId);
            })
        } 
        
        return ( 
            <div className="venuePage">
                <VenueContent {...this.props}/>
                {this.props.venue.coordinates && <div className="mapWrap" ><MapBlock {...this.props.venue} /></div>}
            </div>
        );
    }
}