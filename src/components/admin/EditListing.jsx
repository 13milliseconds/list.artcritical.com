import React from 'react';
import Display from '../../actions/displayActions';
import ListActions from '../../actions/ListActions';
//Components
import Listing from '../listing';
import Select from '../forms/formSelect';
import ListingForm from '../forms/ListingForm';



export default class ListingEdit extends React.Component {

    constructor(props) { 
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
      }
    
    componentWillUnmount(){
        ListActions.listingEditReset();
    }
    
    // Add the listing to the database
    handleSubmit(event) {
        event.preventDefault();
        let newListing = this.props.listingEdit

        //Check and save only events that have a date
        let allEvents = []
        newListing.events.map(event => {
            if (event.date){allEvents.push(event)}
        })
        newListing.events = allEvents

		if (this.props.listingEdit._id){
			//Edit the current listing
			ListActions.updateListing(newListing)
		} else {	
			//Create a new Listing
			delete newListing._id
			newListing.venue = newListing.venue._id
			newListing.neighborhood = newListing.venue.neighborhood
			ListActions.saveListing(newListing)
		}
      }
    
    //Delete the listing
    handleDelete() {
        ListActions.deleteListing(this.props.listingEdit._id)
      }
    
    handleSelectChange (data) {
        if (data){
			if (data.label == data.value) {
				//New Listing
				ListActions.listingInfoChange({target:{
					name: 'name',
					value: data.value
				}})
			} else {
				//Fetch all the venue info
            	ListActions.getListingInfo(data.value);	
			}
        } else {
			//Reset
			ListActions.listingEditReset();
		}
    }
    
    render() {
        
        //how to get option for select element
        const getOptions = (input) => {
            if (input) {
                return fetch('/list/find/' + input)
                .then((response) => {
                  return response.json();
                }).then((json) => {
                  return { options: json };
                });   
            } else {
                return Promise.resolve({ options: [] });
            }
        }
        
        return ( 
            <div>
                <h3>Edit Listing</h3>
                <div id="ListingList">
                    <form onSubmit={this.handleSubmit}>
                        <Select value={{
                            value: this.props.listingEdit._id, 
                            label: this.props.listingEdit.name}
                        } 
                        handleSelectChange={this.handleSelectChange} 
                        getOptions={getOptions} 
                        />
                    </form>
                </div>
                <div id="ListingInfo">
                    <div className="medium listingsWrap">
                        <Listing listing={this.props.listingEdit} user=""/>
                    </div>
                </div>
                <div className="listingForm">
                    <ListingForm {...this.props.listingEdit} 
                        handleSubmit={this.handleSubmit}  
                        handleDelete={this.handleDelete} 
                        error={this.props.error.updatelisting} 
                        loading={this.props.loading.updatelisting}
                        success={this.props.success.updatelisting}
                        deleteitem={this.props.success.deletelisting}
                        savelisting={this.props.success.savelisting}/>
                </div>
            </div>
        );
    }
}