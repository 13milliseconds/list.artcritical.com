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
import DeleteModal from './deleteModal';
import CreateModal from './createModal';
import UpdateModal from './updateModal';

export default class ListingForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            event: this.props.event,
            updatevisible: false,
            deletevisible: false,
            createvisible: false,
            modal: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
        this.onDeleteConfirm = this.onDeleteConfirm.bind(this);
        this.onCreateConfirm = this.onCreateConfirm.bind(this);
        this.toggleCreate = this.toggleCreate.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);

      }

    toggle() {
        this.setState({
          modal: !this.state.modal,
          updatevisible: !this.state.updatevisible
        });
    }


    toggleDelete() {
        this.setState({
          modal: !this.state.modal,
          deletevisible: !this.state.deletevisible
        });
    }


    toggleCreate() {
        this.setState({ createvisible: false });
    }

    //confirm alert
    onConfirm(event) {
        event.preventDefault();
        this.setState({ 
            updatevisible: true
        });
    }

     //confirm alert
    onDeleteConfirm(event) {
        event.preventDefault();
        console.log(this.props)
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
        
        let venueData = { value: this.props.venue._id, label: this.props.venue.name}
        
        let deleteButton = this.props.handleDelete ?
                <Button className="delete" color="danger" onClick={this.onDeleteConfirm}>Delete</Button>
            :
                null

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
                           {this.props.event ? //If an event
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
                           <Label>Thumbnail</Label>
                            <ThumbnailInput {...this.props} /> 
					</FormGroup>
					
					<FormGroup>
                            {this.props._id ? <Button onClick={this.onConfirm}>Update</Button> : <Button onClick={this.onCreateConfirm}>Create</Button>}
                            {deleteButton}
                    </FormGroup>
                </Form>   
                        <UpdateModal updateView={this.state.updatevisible} />
                        <DeleteModal deleteView={this.state.deletevisible}/>
                        <CreateModal createView={this.state.createvisible}/>
            </div>

           

        );
    }
}