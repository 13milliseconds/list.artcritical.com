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
    }
    
    componentWillMount(){
        ListActions.getVenueInfo(this.props.params.id);
    }

    render() {
        
        return ( 
            <div className="venuePage">
                <VenueContent venue={this.props.venue}/>
                {this.props.venue.coordinates && <MapBlock {...this.props.venue} />}
                <div className="listingsWrap">
                    <Tabs>
                        <VenueListings listings={this.props.venue.currentListings} mylist={this.props.mylist} label="Current Shows" />
                        <VenueListings listings={this.props.venue.upcomingListings} mylist={this.props.mylist} label="Upcoming Shows" />
                        <VenueListings listings={this.props.venue.pastListings} mylist={this.props.mylist} label="Past Shows" />
                    </Tabs>
                </div>
            </div>
        );
    }
}