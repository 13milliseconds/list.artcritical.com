import React from 'react';
import ListActions from '../../actions/ListActions';
//COMPONENTS
import ToggleButton from 'react-toggle-button'
import ConfirmModal from './confirmModal'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import Date from '../blocks/DateBlock.jsx';
import NeighborhoodSelect from './NeighborhoodSelect'
import UserLink from '../blocks/UserLink'




export default class VenueForm extends React.Component {

    constructor(props) {
        super(props)
		this.state = {
			fullAdress: null,
            event: this.props.event,
            updateModal: false,
            disableModal: false,
            deleteModal: false,
            createvisible: false,
            wasChanged: false,
            errorMessages: {}
		}

        this.handleChange = this.handleChange.bind(this)
        this.handleDisable = this.handleDisable.bind(this)
        this.onConfirm = this.onConfirm.bind(this)
        this.onCreateConfirm = this.onCreateConfirm.bind(this)
        this.onDeleteConfirm = this.onDeleteConfirm.bind(this)
        this.onDisableConfirm = this.onDisableConfirm.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        //Validation
        this._validateAll = this._validateAll.bind(this)
        this._validateName = this._validateName.bind(this)
        this._validateAddress = this._validateAddress.bind(this)
        this._validateCity = this._validateCity.bind(this)
        this._validateNeighborhood = this._validateNeighborhood.bind(this)
        this._validateZipcode = this._validateZipcode.bind(this)

      }

      toggleModal(modalName) {
        this.setState({
            [modalName]: !this.state[modalName]
        })
    }
    
    handleChange (event) {
        //Update values of inputs
        ListActions.venueInfoChange(event.target ? event.target : event);
        this.setState({
            wasChanged:true
        })
    }

      //Disable the listing
    handleDisable(event) {
        event.preventDefault();
        let venue = {
            ...this.props, 
            disabled: !this.props.disabled
        }

        ListActions.updateVenue(venue)
        //this.setState({disablevisible: false})
      }


    onConfirm(event) {
        event.preventDefault();
        if (this._validateAll()) {
        
            this.setState({ 
                updateModal: true
            })
        }
    }

    onCreateConfirm(event) {
        event.preventDefault();
        if (this._validateAll()) {
        
            this.setState({ 
                createModal: true
            })
        }
    }

    onDeleteConfirm(event) {
        event.preventDefault();
        this.setState({ 
            deleteModal: true
        });
    }

    onDisableConfirm(event) {
        event.preventDefault();
        this.setState({ 
            disableModal: true
        });
    }

    //Duplicate
    _duplicate(event) {
        event.preventDefault();
        ListActions.venueDuplicate();
    }

    _validateAll(){
        var validName = this._validateName()
        var validAddress = this._validateAddress()
        var validCity = this._validateCity()
        var validZipcode = this._validateZipcode()
        var validNeighborhood = this._validateNeighborhood()

        var result = validAddress && validName && validCity && validZipcode && validNeighborhood ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.general = result ? '' : 'Please review the error messages above.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    _validateName(){
        let result = this.props.name ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.name = result ? '' : 'Please enter a name.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    //Validate the Address
    _validateAddress(){
        let result = this.props.address1 ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.address = result ? '' : 'Please enter an address.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    _validateCity(){
        let result = this.props.city ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.city = result ? '' : 'Please enter a city.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    _validateZipcode(){
        let result = this.props.zipcode ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.zipcode = result ? '' : 'Please enter a zipcode.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    _validateNeighborhood(){
        let result = this.props.neighborhood ? true : false 

        let errorMessages = this.state.errorMessages
        errorMessages.neighborhood = result ? '' : 'Please select a neighborhood.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }


		
	componentWillMount(){
        //Define the full address
        this.props.address1 
				? this.setState({
                    fullAdress: this.props.address1
                                + (this.props.city? ' ' + this.props.city : '')
                                + (this.props.state? ', ' + this.props.state : '')
                                + (this.props.zipcode? ' ' + this.props.zipcode : '')
				})
				: null
	}
		
	componentWillUpdate(nextProps, nextState){
		const nextFullAdress = nextProps.address1 !== '' && nextProps.address1
                                ? nextProps.address1
                                    + (nextProps.city? ' ' + nextProps.city : '')
                                    + (nextProps.state? ', ' + nextProps.state : '') 
                                    + (nextProps.zipcode? ' ' + nextProps.zipcode : '')
								: null
		if (nextFullAdress !== this.state.fullAdress && nextFullAdress !== null) {
			this.setState({
                fullAdress: nextFullAdress
			})
			this.props.calculateCoords(nextFullAdress)
		}
	}
	
	
    
    render() {

        let venue = this.props

        let deleteButton = this.props._id &&
                <Button className="delete" color="danger" onClick={this.onDeleteConfirm}>Delete</Button>
        let duplicateButton = this.props._id &&
                <Button className="duplicate" color="danger" onClick={this._duplicate}>Duplicate</Button>
        let disableButton = this.props._id &&
                <Button className="disable" color="info" onClick={this.onDisableConfirm}>{this.props.disabled? "Enable" : "Disable"}</Button>
		
		let coordinates = this.props.coordinates || {}
        
        return ( 
            <div id="venueForm">
               <Form>
                    {!venue._id && <Alert color="primary">This is a draft venue.</Alert>}
                   {venue.disabled && <Alert color="danger">This venue is currently disabled.</Alert>}
                    <FormGroup>
                        <Label>Name</Label>
                        <div className="formSection">
                          <Input disabled={venue.disabled} name="name" placeholder="Name" type="text" value={venue.name} onChange={this.handleChange} />
                          {this.state.errorMessages.name && <Alert color="danger">{this.state.errorMessages.name}</Alert>}
                        </div> 
                    </FormGroup>
                    
                    <FormGroup>
                        <Label>Slug</Label>
                        <div className="formSection">
                          <Input disabled={true} name="slug" type="text" value={venue.slug} onChange={this.handleChange} />
                        </div> 
                    </FormGroup>

                    <FormGroup>
                        <Label>Popup</Label>
                        <div className="formSection">
                            <ToggleButton
                                value={venue.popup}
                                onToggle={(value) => {
                                    this.handleChange({name: 'popup', value: value})
                                }} />
                        </div> 
                    </FormGroup>
                    <FormGroup>
                        <Label>Address</Label>
                        <div className="formSection">
                          <Input disabled={venue.disabled} name="address1" placeholder="Line 1" type="text" value={venue.address1} onChange={this.handleChange} />
                          <Input disabled={venue.disabled} name="address2" placeholder="Line 2" type="text" value={venue.address2} onChange={this.handleChange} />
                          {this.state.errorMessages.address && <Alert color="danger">{this.state.errorMessages.address}</Alert>}
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label>City</Label>
                        <div className="formSection">
                          <Input disabled={venue.disabled} name="city" placeholder="City" type="text" value={venue.city} onChange={this.handleChange} />
                          {this.state.errorMessages.city && <Alert color="danger">{this.state.errorMessages.city}</Alert>}
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label>Neighborhood</Label>
                        <div className="formSection">
                          <NeighborhoodSelect disabled={venue.disabled} selected={venue.neighborhood} onChange={this.handleChange}/>
                          {this.state.errorMessages.neighborhood && <Alert color="danger">{this.state.errorMessages.neighborhood}</Alert>}
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label>State</Label>
                        <div className="formSection">
                          <Input disabled={venue.disabled} name="state" placeholder="State" type="text" value={this.props.state} onChange={this.handleChange} />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label>Zipcode</Label>
                        <div className="formSection">
                          <Input disabled={venue.disabled} name="zipcode" placeholder="Zipcode" type="number" value={this.props.zipcode} onChange={this.handleChange} />
                          {this.state.errorMessages.zipcode && <Alert color="danger">{this.state.errorMessages.zipcode}</Alert>}
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label>Coordinates</Label>
                        <div className="formSection">
                            <Input disabled={venue.disabled} name="lat" type="text" value={coordinates.lat} onChange={this.handleChange} />
                            <Input disabled={venue.disabled} name="long" type="text" value={coordinates.long} onChange={this.handleChange} />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label>Website</Label>
                        <div className="formSection">
                          <Input disabled={venue.disabled} name="website" placeholder="Website" type="text" value={venue.website} onChange={this.handleChange} />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <div className="formSection">
                          <Input disabled={venue.disabled} name="email" placeholder="Email" type="text" value={venue.email} onChange={this.handleChange} />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label>Phone Number</Label>
                        <div className="formSection">
                          <Input disabled={venue.disabled} name="phone" placeholder="Phone Number" type="text" value={venue.phone} onChange={this.handleChange} />
                        </div>
                    </FormGroup>
				   
				   {venue.updated_by
				   		?(venue.created_at === venue.updated_at) 
							? 
					   		<p> Created on <Date date = {venue.updated_at}/> by <UserLink user={venue.updated_by} />.</p>
							:
					   		<p> Updated on <Date date = {venue.updated_at}/> by <UserLink user={venue.updated_by} />.</p>
				   		: ''
				   	}
  
                    <FormGroup className="group-buttons">
                        {this.state.errorMessages.general && <Alert color="danger">{this.state.errorMessages.general}</Alert>}
                        {venue._id ? <Button onClick={this.onConfirm} disabled={!this.state.wasChanged}>Update</Button> : <Button onClick={this.onCreateConfirm}>Create</Button>}
                        {disableButton}{duplicateButton}{deleteButton}
                    </FormGroup>

                    {this.state.updateModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.props.handleSubmit}
                                                        name="updateModal"
                                                        textTitle="Update"
                                                        textAction="save this Listing"
                                                        textConfirm="Saved!"
                                                        loading={this.props.loading.updatevenue}
                                                        error={this.props.error.general}
                                                        success={this.props.success.updatevenue}/>}
                       {this.state.createModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        modalVisible={this.state.createModal}
                                                        handleSubmit={this.props.handleSubmit}
                                                        name="createModal"
                                                        textTitle="Create"
                                                        textAction="create this Listing"
                                                        textConfirm="Created!"
                                                        loading={this.props.loading.savevenue}
                                                        error={this.props.error.general}
                                                        success={this.props.success.savevenue}/>}
                        {this.state.deleteModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.props.handleDelete}
                                                        name="deleteModal"
                                                        textTitle="Delete"
                                                        textAction="delete this Listing"
                                                        textConfirm="Deleted!"
                                                        loading={this.props.loading.deletevenue}
                                                        error={this.props.error.general}
                                                        success={this.props.success.deletevenue}/>}                             
                        {this.state.disableModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.handleDisable}
                                                        name="disableModal"
                                                        textTitle={this.props.disabled ? "Enable" : "Disable"}
                                                        textAction={this.props.disabled ? "activate this venue again." : "hide this venue from the list of active venues."}
                                                        textConfirm={this.props.disabled ? "Disabled!" : "Enabled!"}
                                                        loading={this.props.loading.updatevenue}
                                                        error={this.props.error.general}
                                                        success={this.props.success.updatevenue}/>} 
                </Form>      

            </div>
        );
    }
}