import React from 'react';
import ListActions from '../../actions/ListActions';
//Components
import ListingForm from '../forms/ListingForm';
import VenueBlock from '../blocks/VenueBlock';


export default class NewListing extends React.Component {
    
    constructor (props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentWillUnmount(){
        ListActions.listingEditReset();
    }
    
    // Add the listing to the database
    handleSubmit(event) {
        let newListing = {
            ...listingEdit,
            venue: this.props.listingEdit.venue._id,
            neighborhood: this.props.listingEdit.venue.neighborhood,
        }
        ListActions.saveListing(newListing) 
      }

    render() {
        
        return ( 
            <div className = "new">
                <div>
                    <h2>New Event</h2>
                    
                    <ListingForm 
                        {...this.props.listingEdit} 
                        handleSubmit={this.handleSubmit} 
                        error={this.props.error.savelisting} 
                        loading={this.props.loading.savelisting} 
                        success={this.props.success.savelisting} />
                    
                    <div id="newlistingDemo">
                        <h2>Listing Preview</h2>
                        <div className="medium listingsWrap">
                            <VenueBlock listings={this.props.listingEdit} user="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}