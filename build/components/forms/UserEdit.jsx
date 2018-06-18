import React from 'react'
import ListActions from '../../actions/ListActions';
import AuthActions from '../../actions/AuthActions';
//Components
import ConfirmModal from './confirmModal'

import { Form, FormGroup, Label, Input, Alert, Button, Collapse } from 'reactstrap';

export default class UserEdit extends React.Component {

	constructor (props){
		super(props);
		
		this.state = {
			save: false,
			delete: false
		}

		this.onSave = this.onSave.bind(this)
		this.onDelete = this.onDelete.bind(this)
		this.onSaveAlert = this.onSaveAlert.bind(this)
		this.onDeleteAlert = this.onDeleteAlert.bind(this)
		this.toggleModal = this.toggleModal.bind(this)

	}

	toggleModal(modalName) {
        this.setState({
            [modalName]: !this.state[modalName]
        })
    }
	
	//save alert
    onSaveAlert(event) {
        event.preventDefault();
        this.setState({ 
            save: true
        })
	}
	//delete alert
    onDeleteAlert(event) {
        event.preventDefault();
        this.setState({ 
            delete: true
        })
	}
	
	//save
    onSave(event) {
		AuthActions.updateUser(this.props.user)
	}
	//delete
    onDelete(event) {
		console.log('deleting user')
		AuthActions.deleteUser({_id: this.props.user._id})
	}

    render() {
    	let user = this.props.user;
    	return (
    		<Form>

				<Label>First Name</Label>
				<div className="formSection">
					<Input name="firstname" placeholder="Your First Name" type="text" onChange={this.props.handleChange} value={user.firstname}  />
				</div>
				
				<Label>Last Name</Label>
				<div className="formSection">
					<Input name="lastname" placeholder="Your Last Name" type="text" onChange={this.props.handleChange} value={user.lastname}  />
				</div>
				
				<Label>Email</Label>
				<div className="formSection">
					<Input name="email" placeholder="Your Email" type="email" onChange={this.props.handleChange}  value={user.local.username} />
				</div>

				<Label for="exampleSelect">User Role</Label>
				<Input type="select" name="userAccess" onChange={this.props.handleChange} value={user.userAccess}>
					<option value={3}>SuperAdmin</option>
					<option value={1} >Editor</option>
					<option value={2}>Admin</option>
					<option value={0}>Subscriber</option>
				</Input>

			<FormGroup>
				<Button onClick={this.onSaveAlert}>Save</Button> <Button color="danger" onClick={this.onDeleteAlert}>Delete</Button>
            </FormGroup>

			{this.state.save && <ConfirmModal 
														handleSubmit={this.onSave}
														toggle={this.toggleModal}
														name="save"
                                                        textTitle="Save"
                                                        textAction="save this User"
                                                        textConfirm="Saved!"
                                                        error={this.props.error.updateUser}
														success={this.props.success.updateUser}/>}
														
			{this.state.delete && <ConfirmModal 
														handleSubmit={this.onDelete}
														toggle={this.toggleModal}
														name="delete"
                                                        textTitle="Delete"
                                                        textAction="Delete this user"
                                                        textConfirm="Deleted!"
                                                        error={this.props.error.deleteUser}
                                                        success={this.props.success.deleteUser}/>}

		</Form>
    	)
    }
}