import React from 'react'
import ListActions from '../../actions/ListActions'
import {Link, browserHistory} from 'react-router'; 
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';


//Components
import ToggleButton from 'react-toggle-button'
import DateRange from './formDateRange'
import DateSingle from './formDateSingle'
import Date from '../blocks/DateBlock.jsx';
import Select from './formSelect'
import ThumbnailInput from './ThumbnailInput'
import EventsForm from './EventsForm'
import ConfirmModal from './confirmModal'
import UserLink from '../blocks/UserLink'
import ArtistTags from './ArtistTags'

export default class ListingForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            event: this.props.event,
            updateModal: false,
            deleteModal: false,
            createModal: false,
            wasChanged: false //check if any change was made to the listing
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleArtistsChange = this.handleArtistsChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.onConfirm = this.onConfirm.bind(this)
        this.onDeleteConfirm = this.onDeleteConfirm.bind(this)
        this.onCreateConfirm = this.onCreateConfirm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.onEventsChange = this.onEventsChange.bind(this)
        this.onThumbChange = this.onThumbChange.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
      }

    toggleModal(modalName) {
        this.setState({
            [modalName]: !this.state[modalName]
        })
    }

    // Add the listing to the database
    handleSubmit() {
        let newListing = this.props.listing

        //Make sure that the listing copies the venue's neighborhood
		newListing.neighborhood = newListing.venue.neighborhood

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
            ListActions.saveListing(newListing)
		}
      }

    //If events are edited
    onEventsChange(){
        this.setState({
            wasChanged: true
        })
    }

    //If thumbnail are edited
    onThumbChange(){
        this.setState({
            wasChanged: true
        })
    }
    
    //Delete the listing
    handleDelete() {
        ListActions.deleteListing(this.props.listing._id)
    }

    //confirm alert
    onConfirm(event) {
        event.preventDefault();
        this.setState({ 
            updateModal: true
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
            deleteModal: true
        });
    }

    onCreateConfirm(event) {
        event.preventDefault();
        this.setState({ 
            createModal: true
        });
    }


    handleChange (event) {
        //Update values of inputs
        ListActions.listingInfoChange(event)
        this.setState({
            wasChanged: true
        })
    }

    handleArtistsChange (artists) {
        //Update values of inputs
        ListActions.listingInfoChange({target: {name: 'artists', value: artists}})
        this.setState({
            wasChanged: true
        })
    }
    
    //Search as the user types in select box
    handleSelectChange (data) {
        this.setState({
            wasChanged: true
        })
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

          
        
        let venueData = listing.venue ? { value: listing.venue._id, label: listing.venue.name} : {value:'', label:''}
        
        // If the listing exists, offer to delete it
        let deleteButton = listing._id &&
                <Button className="delete" color="danger" onClick={this.onDeleteConfirm}>Delete</Button>

        return ( 

            <div id="listingForm">
                {!listing._id && <Alert color="primary">This is a draft listing.</Alert>}
                <Form>
                    <FormGroup check  className="group-venue">
                        <Label>Venue</Label>
                         <div className="formSection">
                          <Select value={venueData} handleSelectChange={this.handleSelectChange} getOptions={getOptions} />
                        </div>
                    </FormGroup>
                    <FormGroup check className="group-artists">
                        <Label>Artists</Label>
                        <div className="formSection">
                            <ArtistTags allArtists={this.props.allArtists} onChange={this.handleArtistsChange} value={listing.artists}/>
                        </div>
                    </FormGroup>
                    <FormGroup check className="group-name">
                        <Label>Show Name</Label>
                        <div className="formSection">
                            <Input name="name" placeholder="Event name" type="text" value={listing.name} onChange={this.handleChange} />
                        </div>
                    </FormGroup>
                    <FormGroup check className="group-event">
                        <Label>Event</Label>
                        <div className="formSection">
                            <ToggleButton
                              value={listing.event}
                              onToggle={(value) => {
                                this.handleChange({'event': value})
                              }} />
                        </div>
                    </FormGroup>
                    <FormGroup check className="group-dates">
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
                     <FormGroup check className="group-description">
                        <Label>Description</Label>
                        <div className="formSection">
                            <Input type="textarea" name="description" value={listing.description} onChange={this.handleChange} />
                        </div>
                    </FormGroup>
                    <FormGroup check className="group-review">
                        <Label>Review Link</Label>
                        <div className="formSection">
                            <Input type="url"  name="review" placeholder="Link" type="text" value={listing.review} onChange={this.handleChange} />
                        </div>
                    </FormGroup>
                    {!listing.event &&
                        <FormGroup check  className="group-events">
                            <Label>Related Events</Label>
                            <div className="formSection">
                                <EventsForm events={listing.events? listing.events : []} onChange={this.onEventsChange}/>
                            </div>
                        </FormGroup>
                    }
                     <FormGroup check className="group-thumbnail">
                           <Label>Thumbnail</Label>
                            <ThumbnailInput {...listing} onChange={this.onThumbChange}/> 
					</FormGroup>
                        <div className="byline">
                        {listing.updated_by && 
                            <p>Edited by <UserLink user={listing.updated_by}/> on <Date date={listing.updated_at}/></p>
                        }
                        {listing.created_at &&
                            <p>Created on <Date date={listing.created_at}/></p>
                        }
                        </div>
					
					<FormGroup>
                            {listing._id ? <Button onClick={this.onConfirm} disabled={!this.state.wasChanged}>Update</Button> : <Button onClick={this.onCreateConfirm}>Create</Button>}
                            {deleteButton}
                            {listing._id && <Button onClick={this.onDuplicate}>Duplicate</Button>}
                    </FormGroup>
                </Form>   
                       {this.state.updateModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.handleSubmit}
                                                        name="updateModal"
                                                        textTitle="Update"
                                                        textAction="save this Listing"
                                                        textConfirm="Saved!"
                                                        error={this.props.error.general}
                                                        success={this.props.success.updatelisting}/>}
                       {this.state.createModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.handleSubmit}
                                                        name="createModal"
                                                        textTitle="Create"
                                                        textAction="create this Listing"
                                                        textConfirm="Created!"
                                                        error={this.props.error.general}
                                                        success={this.props.success.savelisting}/>}
                        {this.state.deleteModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.handleDelete}
                                                        name="deleteModal"
                                                        textTitle="Delete"
                                                        textAction="delete this Listing"
                                                        textConfirm="Deleted!"
                                                        error={this.props.error.general}
                                                        success={this.props.success.deletelisting}/>}
            </div>

           

        );
    }
}