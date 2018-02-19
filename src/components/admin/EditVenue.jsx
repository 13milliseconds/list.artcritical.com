import React from 'react';
import Display from '../../actions/displayActions';
import ListActions from '../../actions/ListActions';
//Components
import Listing from '../listing';
import Select from '../forms/formSelect';
import VenueForm from '../forms/VenueForm';
import MapBlock from '../blocks/mapBlock';


export default class VenueEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formDisplay: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
      }
    
    componentWillUnmount(){
        ListActions.venueEditReset();
    }
    
    // Add the listing to the database
    handleSubmit() {
		if (this.props.venueEdit._id){
			ListActions.updateVenue(this.props.venueEdit)
		} else {	
			let newVenue = this.props.venueEdit
			delete newVenue._id
			ListActions.saveVenue(newVenue)
		}
		this.setState({
			formDisplay: false,
		})
      }
    
    //Delete the listing
    handleDelete() {
        ListActions.deleteVenue(this.props.venueEdit._id)
      }
    
    handleSelectChange (data) {
		console.log(data);
        if (data){
			this.setState({
                    formDisplay: true
                })
            if (data.label == data.value) {
				//New Venue
				ListActions.venueInfoChange({
					name: 'name',
					value: data.value
				})
			} else {
				//Update venue
                ListActions.getVenueInfo(data.value);
            }
        } else {
			// If the reset form button is pressed
            ListActions.venueEditReset();
			this.setState({
                    formDisplay: false
                })
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
            <div className="editVenue cf">
                <h3>Edit Venue</h3>
                <div className="d-1of2">
                <div className="venueList">
                    <form onSubmit={this.handleSubmit}>
                        <Select value={{value: this.props.venueEdit._id, label: this.props.venueEdit.name}} handleSelectChange={this.handleSelectChange} getOptions={getOptions} />
                    </form>
                </div>
					<div className="listingForm">
					{this.state.formDisplay && 
                        <VenueForm {...this.props.venueEdit} 
                            handleSubmit={this.handleSubmit}  
                            handleDelete={this.handleDelete} 
							newVenue={(this.props._id == '' || this.props._id == null && this.props.name !== '')}
                            error={this.props.error.updatevenue} 
                            loading={this.props.loading.updatevenue}
                            success={this.props.success.updatevenue}/>
						}
					</div>
                </div>
                <div className="d-1of2">
						<MapBlock {...this.props.venueEdit} />
                </div>
            </div>
        );
    }
}