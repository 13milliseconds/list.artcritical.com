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
        this.onUpdateSubmit = this.onUpdateSubmit.bind(this);
      }
    
    componentWillUnmount(){
        ListActions.listingEditReset();
    }
    
    // Add the listing to the database
    handleSubmit(event) {
            event.preventDefault();
		if (this.props.listingEdit._id){
			//Edit the current listing
			ListActions.updateListing(this.props.listingEdit)
		} else {	
			//Create a new Listing
			let newListing = this.props.listingEdit
			delete newListing._id
			newListing.venue = newListing.venue._id
			newListing.neighborhood = newListing.venue.neighborhood
			ListActions.saveListing(newListing)
		}
        this.onUpdateSubmit();
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
                        <Listing {...this.props.listingEdit} user=""/>
                    </div>
                </div>
                <div className="listingForm">
                    <ListingForm {...this.props.listingEdit} 
                        handleSubmit={this.handleSubmit}  
                        handleDelete={this.handleDelete} 
                        error={this.props.error.updatelisting} 
                        loading={this.props.loading.updatelisting}
                        success={this.props.success.updatelisting}/>
                </div>
            </div>
        );
    }
}