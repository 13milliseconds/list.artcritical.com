import React from 'react'
import ToggleButton from 'react-toggle-button'
import ListActions from '../../actions/ListActions'
import {browserHistory} from 'react-router'; 
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';


//Components
import DateRange from './formDateRange'
import DateSingle from './formDateSingle'
import Select from './formSelect'
import ThumbnailInput from './ThumbnailInput'
import EventsForm from './EventsForm'
import ConfirmModal from './confirmModal'

export default class ListingForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            event: this.props.event,
            updatevisible: false,
            deletevisible: false,
            createvisible: false,
            wasChanged: false //check if any change was made to the listing
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
        this.onDeleteConfirm = this.onDeleteConfirm.bind(this);
        this.onCreateConfirm = this.onCreateConfirm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
      }

    // Add the listing to the database
    handleSubmit(event) {
        event.preventDefault();
        let newListing = this.props.listing

        //Check and save only events that have a date
        let allEvents = []
        newListing.events.map(event => {
            if (event.date){allEvents.push(event)}
        })
        newListing.events = allEvents

		if (this.props.listing._id){
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
        ListActions.deleteListing(this.props.listing._id)
      }

    //confirm alert
    onConfirm(event) {
        event.preventDefault();
        this.setState({ 
            updatevisible: true
        })
    }

    //Duplicate
    onDuplicate(event) {
        event.preventDefault();
        ListActions.listingDuplicate();
    }

     //confirm alert
    onDeleteConfirm(event) {
        event.preventDefault();
        this.setState({ 
            deletevisible: true
        });
    }

    onCreateConfirm(event) {
        event.preventDefault();
        this.setState({ 
            createvisible: true
        });
    }


    handleChange (event) {
        //Update values of inputs
        ListActions.listingInfoChange(event);
        this.setState({
            wasChanged: true
        })
    }
    
    //Search as the user types in select box
    handleSelectChange (data) {
        if (data) {
            if (data.label == data.value) {
                // Create a new venue
				ListActions.venueInfoChange({ 
					name: 'name', 
					value: data.value
				})
				browserHistory.push('/admin/venues');
            } else {
                //Fetch all the venue info
                ListActions.getVenueInfo(data.value);
            }    
        } else {
            ListActions.resetVenue();
        }   
    }


    
    render() {

        let listing = this.props.listing
        
        //how to get option for select element
        const getOptions = (input) => {
            if (input){
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

          
        
        let venueData = { value: listing.venue._id, label: listing.venue.name}
        
        // If the listing exists, offer to delete it
        let deleteButton = this.props.listing._id &&
                <Button className="delete" color="danger" onClick={this.onDeleteConfirm}>Delete</Button>

        return ( 

            <div id="listingForm">
                {!listing._id && <Alert color="primary">This is a draft listing.</Alert>}
                <Form>
                    <FormGroup check>
                        <Label>Name</Label>
                        <div className="formSection">
                            <Input name="name" placeholder="Event name" type="text" value={listing.name} onChange={this.handleChange} />
                        </div>
                    </FormGroup>
                    <FormGroup check>
                        <Label>Venue</Label>
                         <div className="formSection">
                          <Select value={venueData} handleSelectChange={this.handleSelectChange} getOptions={getOptions} />
                        </div>
                    </FormGroup>
                    <FormGroup check>
                        <Label>Event</Label>
                        <div className="formSection">
                            <ToggleButton
                              value={listing.event}
                              onToggle={(value) => {
                                this.handleChange({'event': value})
                              }} />
                        </div>
                    </FormGroup>
                    <FormGroup check>
                        <Label> Dates </Label>
                        <div className="formSection">
                           {listing.event 
                                ? //If an event
                                <DateSingle startDate={listing.start} onDatesChange={this.handleChange}/>
                                : // If not an event
                                <DateRange startDate={listing.start} endDate={listing.end} onDatesChange={this.handleChange}/>
                           }
                        </div>  
                    </FormGroup>
                     <FormGroup check>
                        <Label>Description</Label>
                        <div className="formSection">
                            <Input type="textarea" name="description" value={listing.description} onChange={this.handleChange} />
                        </div>
                    </FormGroup>
                    <FormGroup check>
                        <Label>Events</Label>
                        <div className="formSection">
                            <EventsForm events={listing.events? listing.events : []}/>
                        </div>
                    </FormGroup>
                     <FormGroup check>
                           <Label>Thumbnail</Label>
                            <ThumbnailInput {...listing} /> 
					</FormGroup>
                    {listing.updated_by &&
                        <div className="byline">
                            <p>Edited by {listing.updated_by.name} on {listing.updated_at}</p>
                            <p>Created on {listing.created_at}</p>
                        </div>
                    }
					
					<FormGroup>
                            {listing._id ? <Button onClick={this.onConfirm} disabled={!this.state.wasChanged}>Update</Button> : <Button onClick={this.onCreateConfirm}>Create</Button>}
                            {deleteButton}
                            {listing._id && <Button onClick={this.onDuplicate}>Duplicate</Button>}
                    </FormGroup>
                </Form>   
                       {this.state.updatevisible && <ConfirmModal 
                                                        modalVisible={this.state.updatevisible}
                                                        handleSubmit={this.handleSubmit}
                                                        textTitle="Update"
                                                        textAction="save this Listing"
                                                        textConfirm="Saved!"
                                                        error={this.props.error.general}
                                                        success={this.props.success.updatelisting}/>}
                       {this.state.createvisible && <ConfirmModal 
                                                        modalVisible={this.state.createvisible}
                                                        handleSubmit={this.handleSubmit}
                                                        textTitle="Create"
                                                        textAction="create this Listing"
                                                        textConfirm="Created!"
                                                        error={this.props.error.general}
                                                        success={this.props.success.savelisting}/>}
                        {this.state.deletevisible && <ConfirmModal 
                                                        modalVisible={this.state.deletevisible}
                                                        handleSubmit={this.handleDelete}
                                                        textTitle="Delete"
                                                        textAction="delete this Listing"
                                                        textConfirm="Deleted!"
                                                        error={this.props.error.general}
                                                        success={this.props.success.deletelisting}/>}
            </div>

           

        );
    }
}