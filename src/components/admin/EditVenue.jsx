import React from 'react';
import Display from '../../actions/displayActions';
import ListActions from '../../actions/ListActions';
//Components
import Listing from '../listing';
import Select from '../forms/formSelect';
import VenueForm from '../forms/VenueForm';


export default class VenueEdit extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
      }
    
    componentWillUnmount(){
        ListActions.venueEditReset();
    }
    
    // Add the listing to the database
    handleSubmit() {
        ListActions.updateVenue(this.props.venueEdit)
      }
    
    //Delete the listing
    handleDelete() {
        ListActions.deleteVenue(this.props.venueEdit._id)
        ListActions.listingEditReset();
      }
    
    handleSelectChange (data) {
        if (data.value){
            ListActions.getVenueInfo(data.value);
        }
    }
    
    render() {
        
        //Get option for select element
        const getOptions = (input) => {
            if (input) {
                return fetch('/venues/find/' + input)
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
                <h3>Edit Venue</h3>
                <div id="ListingList">
                    <form onSubmit={this.handleSubmit}>
                        <Select value={{value: this.props.venueEdit._id, label: this.props.venueEdit.name}} handleSelectChange={this.handleSelectChange} getOptions={getOptions} />
                    </form>
                </div>
                <div className="listingForm">
                    <VenueForm {...this.props.venueEdit} 
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