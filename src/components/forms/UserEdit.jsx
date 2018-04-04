import React from 'react'
import ListActions from '../../actions/ListActions';
import AuthActions from '../../actions/AuthActions';

import { Form, FormGroup, Label, Input, Alert, Button, Collapse } from 'reactstrap';

export default class UserEdit extends React.Component {

	constructor (props){
        super(props);

    }

    render() {
    	let user = this.props.user;
    	return (
    		<Form onSubmit={this.saveChanges}>

				<Label>First Name</Label>
				<div className="formSection">
					<Input name="firstname" placeholder="Your First Name" type="text" onChange={this.handleChange} value={user.firstname}  />
				</div>
				
				<Label>Last Name</Label>
				<div className="formSection">
					<Input name="lastname" placeholder="Your Last Name" type="text" onChange={this.handleChange} value={user.lastname}  />
				</div>
				
				<Label>Email</Label>
				<div className="formSection">
					<Input name="email" placeholder="Your Email" type="email" onChange={this.handleChange}  value={user.local.username} />
				</div>

				<Label for="exampleSelect">User Role</Label>
				<Input type="select" name="userAccess" onChange={this.handleChange} value={user.userAccess}>
					<option value={3}>SuperAdmin</option>
					<option value={1} >Editor</option>
					<option value={2}>Admin</option>
					<option value={0}>Subscriber</option>
				</Input>


			<Button type="submit">Submit Changes</Button>

		</Form>
    	)
    }
}