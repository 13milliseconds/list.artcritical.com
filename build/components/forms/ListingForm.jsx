import React from 'react'
import ListActions from '../../actions/ListActions'
import {browserHistory} from 'react-router'; 
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';


//Components
import DateRange from './formDateRange'
import Date from '../blocks/DateBlock.jsx';
import Select from './formSelect'
import ThumbnailInput from './ThumbnailInput'
import EventsForm from './EventsForm'
import ConfirmModal from './confirmModal'
import UserLink from '../blocks/UserLink'
import ArtistTags from './ArtistTags'
import ListingNameDisplay from '../blocks/ListingNameDisplay'

export default class ListingForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            event: this.props.event,
            updateModal: false,
            deleteModal: false,
            createModal: false,
            wasChanged: false, //check if any change was made to the listing
            errorMessages:{}
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
        this._validateVenue = this._validateVenue.bind(this)
        this._validateDates = this._validateDates.bind(this)
        this._validateName = this._validateName.bind(this)
        this._validateAll = this._validateAll.bind(this)
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
        newListing.relatedEvents.map(event => {
            if (event.date){allEvents.push(event)}
        })
        newListing.relatedEvents = allEvents

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

    // Create/Update confirm alert
    onConfirm(event) {
        event.preventDefault();
        if (this._validateAll()) {
        
            this.setState({ 
                updateModal: true
            })
        }
    }

    //Duplicate
    onDuplicate(event) {
        event.preventDefault();
        ListActions.listingDuplicate();
    }

     //Delete confirm alert
    onDeleteConfirm(event) {
        event.preventDefault();
        this.setState({ 
            deleteModal: true
        });
    }

    onCreateConfirm(event) {
        event.preventDefault();
        if (this._validateAll()) {
            this.setState({ 
                createModal: true
            });
        }
    }

    _validateAll(){
        var validVenue = this._validateVenue()
        var validDates = this._validateDates()
        var validName = this._validateName()

        var result = validVenue && validName && validDates ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.general = result ? '' : 'Please review the error messages above.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    //Validate the venue
    _validateVenue(){
        let result = this.props.listing.venue._id ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.venue = result ? '' : 'Please enter a venue.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    _validateName(){
        let result = this.props.listing.name || (this.props.listing.artists && this.props.listing.artists.length > 0) ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.name = result ? '' : 'Please enter a name or an artist.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    _validateDates(){
        let result = this.props.listing.start && this.props.listing.end ? true : false 

        let errorMessages = this.state.errorMessages
        errorMessages.dates = result ? '' : 'Both dates need to be defined.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
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

          
        
        let venueData = listing.venue._id && { value: listing.venue._id, label: listing.venue.name}
        
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
                            <div className="info">
                                {listing.venue._id && listing.venue.address1 + ' ' + listing.venue.address2 + ' ' + listing.venue.city}
                            </div>
                          {this.state.errorMessages.venue && <Alert color="danger">{this.state.errorMessages.venue}</Alert>}
                        </div>
                    </FormGroup>
                    <FormGroup check className="group-artists">
                        <Label>Artists</Label>
                        <div className="formSection">
                            <ArtistTags allArtists={this.props.allArtists} onChange={this.handleArtistsChange} value={listing.artists}/>
                        </div>
                    </FormGroup>
                    <FormGroup check className="group-name">
                        <Label>Show Title</Label>
                        <div className="formSection">
                            <Input name="name" placeholder="Event name" type="text" value={listing.name} onChange={this.handleChange} />
                            {this.state.errorMessages.name && <Alert color="danger">{this.state.errorMessages.name}</Alert>}
                            <ListingNameDisplay {...listing} />
                        </div>
                    </FormGroup>
                    <FormGroup check className="group-dates">
                        <Label> Dates </Label>
                        <div className="formSection">
                            <DateRange startDate={listing.start} endDate={listing.end} onDatesChange={this.handleChange}/>
                            {this.state.errorMessages.dates && <Alert color="danger">{this.state.errorMessages.dates}</Alert>}
                        </div>  
                    </FormGroup>
                     <FormGroup check className="group-description">
                        <Label>Notes</Label>
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
                                <EventsForm events={listing.relatedEvents? listing.relatedEvents : []} onChange={this.onEventsChange}/>
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
					
					<FormGroup className="group-buttons">
                        {this.state.errorMessages.general && <Alert color="danger">{this.state.errorMessages.general}</Alert>}
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
                                                        error={this.props.error.savelisting}
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