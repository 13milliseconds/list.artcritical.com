import React from 'react'
import AdActions from '../../actions/AdActions'
import { Form, FormGroup, Label, Input, Alert, Button} from 'reactstrap';
import Select from 'react-select';
//Components
import ThumbnailInput from './ThumbnailInput'
import ConfirmModal from './confirmModal'
import UserLink from '../blocks/UserLink'
import Date from '../blocks/DateBlock'

const options = [
	{ label: 'Current', value: 'current' },
	{ label: 'Future', value: 'future' },
	{ label: 'Events', value: 'events' },
];

export default class AdForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            updateModal: false,
            deleteModal: false,
            createModal: false,
            wasChanged: false, //check if any change was made to the ad
            errorMessages:{}
        };

        this.handleChange = this.handleChange.bind(this)
        this.onConfirm = this.onConfirm.bind(this)
        this.onDeleteConfirm = this.onDeleteConfirm.bind(this)
        this.onCreateConfirm = this.onCreateConfirm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.onThumbChange = this.onThumbChange.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this._validateName = this._validateName.bind(this)
        this._validateLink = this._validateLink.bind(this)
        this._validateImage = this._validateImage.bind(this)
        this._validateAll = this._validateAll.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
      }

    toggleModal(modalName) {
        this.setState({
            [modalName]: !this.state[modalName]
        })
    }

    // Add the ad to the database
    handleSubmit() {
        let newad = this.props.ad

		if (this.props.ad._id){
			//Edit the current ad
            AdActions.update(newad)
		} else {	
			//Create a new ad
			delete newad._id
            AdActions.save(newad)
		}
      }

    //If thumbnail are edited
    onThumbChange(){
        this.setState({
            wasChanged: true
        })
    }
    
    //Delete the ad
    handleDelete() {
        AdActions.delete(this.props.ad._id)
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
        AdActions.adDuplicate();
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
        var validName = this._validateName()
        var validLink = this._validateLink()
        var validImage = this._validateImage()

        var result = validImage && validLink && validName ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.general = result ? '' : 'Please review the error messages above.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    _validateName(){
        let result = this.props.ad.name ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.name = result ? '' : 'Please enter a name or an artist.'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    _validateLink(){
        let result = this.props.ad.link ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.link = result ? '' : 'Please enter a link'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }

    _validateImage(){
        let result = this.props.ad.image ? true : false

        let errorMessages = this.state.errorMessages
        errorMessages.image = result ? '' : 'Please add an image'

        this.setState({
            errorMessages: errorMessages
        })

        return result
    }


    handleChange (event) {
        let info = {}
        info[event.target.name] = event.target.value
        //Update values of inputs
        AdActions.adInfoChange(info)
        this.setState({
            wasChanged: true
        })
    }
    
    //Search as the user types in select box
    handleSelectChange (data) {
        this.setState({
            wasChanged: true
        })
        AdActions.adInfoChange({locations: data}); 
    }


    
    render() {

        let ad = this.props.ad
        
        // If the ad exists, offer to delete it
        let deleteButton = ad._id &&
                <Button className="delete" color="danger" onClick={this.onDeleteConfirm}>Delete</Button>

        return ( 

            <div id="adForm">
                {!ad._id && <Alert color="primary">This is a draft ad.</Alert>}
                <Form>

                    <FormGroup check className="group-name">
                        <Label>Ad Name</Label>
                        <div className="formSection">
                            <Input name="name" placeholder="Ad name" type="text" value={ad.name} onChange={this.handleChange} />
                            {this.state.errorMessages.name && <Alert color="danger">{this.state.errorMessages.name}</Alert>}
                        </div>
                    </FormGroup>

                    <FormGroup check className="group-review">
                        <Label>Link</Label>
                        <div className="formSection">
                            <Input type="url"  name="link" placeholder="Link" type="text" value={ad.link} onChange={this.handleChange} />
                            {this.state.errorMessages.link && <Alert color="danger">{this.state.errorMessages.link}</Alert>}
                        </div>
                    </FormGroup>

                     <FormGroup check className="group-image">
                           <Label>Image</Label>
                            <ThumbnailInput 
                                image={ad.image}
                                name="image"
                                onChange={this.onThumbChange}
                                />
                            {this.state.errorMessages.image && <Alert color="danger">{this.state.errorMessages.image}</Alert>}
					</FormGroup>

                     <FormGroup check className="group-mobileImage">
                           <Label>Mobile Image</Label>
                            <ThumbnailInput 
                                image={ad.mobileImage}
                                name="mobileImage"
                                onChange={this.onThumbChange}
                                /> 
					</FormGroup>

                     <FormGroup check className="group-location">
                           <Label>Location</Label>
                           <Select
                                closeOnSelect={false}
                                multi
                                onChange={this.handleSelectChange}
                                options={options}
                                placeholder="Select the ad locations"
                                removeSelected={true}
                                simpleValue
                                value={ad.locations}
                            />

					</FormGroup>

                     <FormGroup check className="group-description">
                        <Label>Notes</Label>
                        <div className="formSection">
                            <Input type="textarea" name="description" value={ad.description} onChange={this.handleChange} />
                        </div>
                    </FormGroup>

                        <div className="byline">
                        {ad.updated_by && ad.updated_at && 
                            <p>Edited by <UserLink user={ad.updated_by}/> on <Date date={ad.updated_at}/></p>
                        }
                        {ad.created_at &&
                            <p>Created on <Date date={ad.created_at}/></p>
                        }
                        </div>
					
					<FormGroup className="group-buttons">
                        {this.state.errorMessages.general && <Alert color="danger">{this.state.errorMessages.general}</Alert>}
                        {ad._id ? <Button onClick={this.onConfirm} disabled={!this.state.wasChanged}>Update</Button> : <Button onClick={this.onCreateConfirm}>Create</Button>}
                        {deleteButton}
                        {ad._id && <Button onClick={this.onDuplicate}>Duplicate</Button>}
                    </FormGroup>

                </Form>   
                       {this.state.updateModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.handleSubmit}
                                                        name="updateModal"
                                                        textTitle="Update"
                                                        textAction="save this ad"
                                                        textConfirm="Saved!"
                                                        error={this.props.error.update}
                                                        success={this.props.success.update}/>}
                       {this.state.createModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.handleSubmit}
                                                        name="createModal"
                                                        textTitle="Create"
                                                        textAction="create this ad"
                                                        textConfirm="Created!"
                                                        error={this.props.error.save}
                                                        success={this.props.success.save}/>}
                        {this.state.deleteModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.handleDelete}
                                                        name="deleteModal"
                                                        textTitle="Delete"
                                                        textAction="delete this ad"
                                                        textConfirm="Deleted!"
                                                        error={this.props.error.delete}
                                                        success={this.props.success.delete}/>}
            </div>

           

        );
    }
}