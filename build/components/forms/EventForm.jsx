import React from 'react'
import EventActions from '../../actions/EventActions'
import ListActions from '../../actions/ListActions'
import {browserHistory} from 'react-router'; 
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';


//Components
import DateSingle from './formDateSingle'
import Date from '../blocks/DateBlock.jsx';
import Select from './formSelect'
import ThumbnailInput from './ThumbnailInput'
import ConfirmModal from './confirmModal'
import UserLink from '../blocks/UserLink'

export default class EventForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            event: this.props.event,
            updateModal: false,
            deleteModal: false,
            createModal: false,
            wasChanged: false, //check if any change was made to the event
            errorMessages: {}
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.onConfirm = this.onConfirm.bind(this)
        this.onDeleteConfirm = this.onDeleteConfirm.bind(this)
        this.onCreateConfirm = this.onCreateConfirm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.onThumbChange = this.onThumbChange.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this._validateVenue = this._validateVenue.bind(this)
        this._validateDate = this._validateDates.bind(this)
        this._validateName = this._validateName.bind(this)
        this._validateAll = this._validateAll.bind(this)
      }

    toggleModal(modalName) {
        this.setState({
            [modalName]: !this.state[modalName]
        })
    }

    // Add the event to the database
    handleSubmit() {
        let newEvent = this.props.event

		if (this.props.event._id){
			//Edit the current event
            EventActions.updateEvent(newEvent)
		} else {	
			//Create a new Event
			delete newEvent._id
            EventActions.saveEvent(newEvent)
		}
      }

    //If thumbnail are edited
    onThumbChange(){
        this.setState({
            wasChanged: true
        })
    }
    
    //Delete the event
    handleDelete() {
        EventActions.deleteEvent(this.props.event._id)
    }

    //confirm alert
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
        EventActions.eventDuplicate();
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

        if (this._validateAll()) {
        
            this.setState({ 
                createModal: true
            })
        }
    }


    handleChange (event) {
        //Update values of inputs
        EventActions.eventInfoChange(event)
        this.setState({
            wasChanged: true
        })
    }

    _validateAll(){
        var validVenue = this._validateVenue()
        var validDate = this._validateDate()
        var validName = this._validateName()

        var result = validVenue && validName && validDate ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.general = result ? '' : 'Please review the error messages above.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    //Validate the venue
    _validateVenue(){
        let result = this.props.event.venue._id ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.venue = result ? '' : 'Please enter a venue.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    _validateName(){
        let result = this.props.event.name ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.name = result ? '' : 'Please enter a name or an artist.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    _validateDates(){
        let result = this.props.event.date ? true : false 

        let errorMessages = this.state.errorMessages
        errorMessages.date = result ? '' : 'A date need to be defined.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }
    
    //Search as the user types in select box
    handleSelectChange (data) {
        this.setState({
            wasChanged: true
        })
        if (data) {
            ListActions.getVenueInfo(data.value);
        } else {
            ListActions.resetVenue();
        }   
    }


    
    render() {

        let event = this.props.event
        
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

          
        
        let venueData = event.venue._id && { value: event.venue._id, label: event.venue.name}
        
        // If the event exists, offer to delete it
        let deleteButton = event._id &&
                <Button className="delete" color="danger" onClick={this.onDeleteConfirm}>Delete</Button>

        return ( 

            <div id="eventForm">
                {!event._id && <Alert color="primary">This is a draft event.</Alert>}
                <Form>
                    <FormGroup check  className="group-venue">
                        <Label>Venue</Label>
                         <div className="formSection">
                          <Select value={venueData} handleSelectChange={this.handleSelectChange} getOptions={getOptions} />
                          {this.state.errorMessages.venue && <Alert color="danger">{this.state.errorMessages.venue}</Alert>}
                        </div>
                    </FormGroup>
                    <FormGroup check className="group-name">
                        <Label>Name</Label>
                        <div className="formSection">
                            <Input name="name" placeholder="Event name" type="text" value={event.name} onChange={this.handleChange} />
                            {this.state.errorMessages.name && <Alert color="danger">{this.state.errorMessages.name}</Alert>}
                        </div>
                    </FormGroup>
                    <FormGroup check className="group-dates">
                        <Label> Date </Label>
                        <div className="formSection">
                                <DateSingle startDate={event.date} onDatesChange={this.handleChange}/>
                                {this.state.errorMessages.date && <Alert color="danger">{this.state.errorMessages.date}</Alert>}
                        </div>  
                    </FormGroup>
                     <FormGroup check className="group-description">
                        <Label>Description</Label>
                        <div className="formSection">
                            <Input type="textarea" name="description" value={event.description} onChange={this.handleChange} />
                        </div>
                    </FormGroup>
                     <FormGroup check className="group-thumbnail">
                           <Label>Thumbnail</Label>
                            <ThumbnailInput {...event} onChange={this.onThumbChange}/> 
					</FormGroup>
                        <div className="byline">
                        {event.updated_by && 
                            <p>Edited by <UserLink user={event.updated_by}/> on <Date date={event.updated_at}/></p>
                        }
                        {event.created_at &&
                            <p>Created on <Date date={event.created_at}/></p>
                        }
                        </div>
					
					<FormGroup className="group-buttons">
                            {this.state.errorMessages.general && <Alert color="danger">{this.state.errorMessages.general}</Alert>}
                            {event._id ? <Button onClick={this.onConfirm} disabled={!this.state.wasChanged}>Update</Button> : <Button onClick={this.onCreateConfirm}>Create</Button>}
                            {deleteButton}
                            {event._id && <Button onClick={this.onDuplicate}>Duplicate</Button>}
                    </FormGroup>
                </Form>   
                       {this.state.updateModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.handleSubmit}
                                                        name="updateModal"
                                                        textTitle="Update"
                                                        textAction="save this Event"
                                                        textConfirm="Saved!"
                                                        error={this.props.error.updateEvent}
                                                        success={this.props.success.updateEvent}/>}
                       {this.state.createModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.handleSubmit}
                                                        name="createModal"
                                                        textTitle="Create"
                                                        textAction="create this Event"
                                                        textConfirm="Created!"
                                                        error={this.props.error.saveEvent}
                                                        success={this.props.success.saveEvent}/>}
                        {this.state.deleteModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.handleDelete}
                                                        name="deleteModal"
                                                        textTitle="Delete"
                                                        textAction="delete this Event"
                                                        textConfirm="Deleted!"
                                                        error={this.props.error.deleteEvent}
                                                        success={this.props.success.deleteEvent}/>}
            </div>

           

        );
    }
}