import React from 'react';
import ListActions from '../../actions/ListActions';
//Components
import ListingForm from '../forms/ListingForm';
import Listing from '../listing';


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
        var listingId = this.props.listingEdit._id || null;
        let newListing = {
            _id: listingId,
            name: this.props.listingEdit.name,
            start: this.props.listingEdit.start,
            end: this.props.listingEdit.end,
            venue: this.props.listingEdit.venue._id,
            website: this.props.listingEdit.website,
            description: this.props.listingEdit.description,
            neighborhood: this.props.listingEdit.venue.neighborhood,
            image: this.props.listingEdit.image
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
                            <Listing {...this.props.listingEdit} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}