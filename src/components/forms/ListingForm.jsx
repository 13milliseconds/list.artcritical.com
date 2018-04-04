import React from 'react'
import ToggleButton from 'react-toggle-button'
import ListActions from '../../actions/ListActions'
import {browserHistory} from 'react-router'; 
import { Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';


//Components
import DateRange from './formDateRange'
import DateSingle from './formDateSingle'
import Select from './formSelect'
import ThumbnailInput from './ThumbnailInput'
import EventsForm from './EventsForm'
import UpdateModal from './updateModal'

export default class ListingForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            event: this.props.event,
            updatevisible: false,
            deletevisible: false,
            createvisible: false,
            modal: false,
            wasChanged: false //check if any change was made to the listing
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
        this.onDeleteConfirm = this.onDeleteConfirm.bind(this);
        this.onCreateConfirm = this.onCreateConfirm.bind(this);
        this.toggleCreate = this.toggleCreate.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
      }

    toggleDelete() {
        this.setState({
          modal: !this.state.modal,
          deletevisible: !this.state.deletevisible
        });
    }


    toggleCreate() {
        this.setState({ 
            modal: !this.state.modal,
            createvisible: !this.state.createvisible 
        });
    }

    //confirm alert
    onConfirm(event) {
        event.preventDefault();
        console.log("Let's try to update")
        this.setState({ 
            updatevisible: true
        })
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

            let deleteModal = this.state.deletevisible ?
        <Modal isOpen={this.state.deletevisible} toggle={this.toggleDelete}>
                      <ModalHeader toggle={this.toggleDelete}>Delete Listing</ModalHeader>
                      <ModalBody>
                       {!this.props.deleteitem && !this.props.error.general ? "Press Confirm to DELETE this listing. Press Cancel to go back" : null}

                        
                        {this.props.deleteitem && 
                            <div className='success'>Deleted!</div>
                        }
                        {this.props.error.general && 
                            <div className='error'>Sorry, there was an error! Please try again!</div>
                        }
                      </ModalBody>
                      <ModalFooter>
                        {!this.props.deleteitem ? 
                            <div>
                                <Button color="primary" onClick={this.props.handleDelete}>Confirm</Button>{' '}
                                <Button color="primary" onClick={this.toggleDelete}>Cancel</Button>
                            </div>
                        :
                            <Button color="success" onClick={this.toggleDelete}>Close</Button>
                        }
                        
                      </ModalFooter>
        </Modal> 
    :
        null

          let createModal = this.state.createvisible &&
                <Modal isOpen={this.onCreateConfirm} toggle={this.toggleCreate}>
                            <ModalHeader toggle={this.toggleCreate}>Create Listing</ModalHeader>
                              <ModalBody toggle={this.toggleCreate}>
                                {!this.props.savelisting && !this.props.error.general ? "Press Confirm to CREATE this Listing. Press Cancel to go back" : null}
                                {this.props.savelisting && 
                                    <div className='success'>Created!</div>
                                }
                                {this.props.error.general && 
                                    <div className='error'>{this.props.error.savelisting.general}</div>
                                }
                              </ModalBody>
                              <ModalFooter>
                                {!this.props.savelisting ? 
                                    <div>
                                        <Button color="primary" onClick={this.props.handleSubmit}>Confirm</Button>
                                        <Button color="primary" onClick={this.toggleCreate}>Cancel</Button>
                                    </div>
                                :
                                    <Button color="success" onClick={this.toggleCreate}>Close</Button>
                                }
                                
                                
                              </ModalFooter>
                </Modal>
        
        let venueData = { value: this.props.venue._id, label: this.props.venue.name}
        
        let deleteButton = this.props.handleDelete &&
                <Button className="delete" color="danger" onClick={this.onDeleteConfirm}>Delete</Button>

        return ( 

            <div id="listingForm">

                <Form>
                    <FormGroup check>
                        <Label>Name</Label>
                        <div className="formSection">
                            <Input name="name" placeholder="Event name" type="text" value={this.props.name} onChange={this.handleChange} />
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
                              value={this.props.event}
                              onToggle={(value) => {
                                this.handleChange({'event': value})
                              }} />
                        </div>
                    </FormGroup>
                    <FormGroup check>
                        <Label> Dates </Label>
                        <div className="formSection">
                           {this.props.event 
                                ? //If an event
                                <DateSingle startDate={this.props.start} onDatesChange={this.handleChange}/>
                                : // If not an event
                                <DateRange startDate={this.props.start} endDate={this.props.end} onDatesChange={this.handleChange}/>
                           }
                        </div>  
                    </FormGroup>
                     <FormGroup check>
                        <Label>Description</Label>
                        <div className="formSection">
                            <Input type="textarea" name="description" value={this.props.description} onChange={this.handleChange} />
                        </div>
                    </FormGroup>
                    <FormGroup check>
                        <Label>Events</Label>
                        <div className="formSection">
                            <EventsForm events={this.props.events? this.props.events : []}/>
                        </div>
                    </FormGroup>
                     <FormGroup check>
                           <Label>Thumbnail</Label>
                            <ThumbnailInput {...this.props} /> 
					</FormGroup>
                    Edited by {this.props.updated_by} at {this.props.updated_at}
                    Created on {this.props.created_at}
					
					<FormGroup>
                            {this.props._id ? <Button onClick={this.onConfirm} disabled={!this.state.wasChanged}>Update</Button> : <Button onClick={this.onCreateConfirm}>Create</Button>}
                            {deleteButton}
                    </FormGroup>
                </Form>   
                       {this.state.updatevisible && <UpdateModal updatevisible={this.state.updatevisible} {...this.props} error={this.props.error.general}/>}
                       {createModal}
                       {deleteModal}
            </div>

           

        );
    }
}