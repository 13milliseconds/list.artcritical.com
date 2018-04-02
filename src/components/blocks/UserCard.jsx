import React from 'react';
import ListActions from '../../actions/ListActions';
import AuthActions from '../../actions/AuthActions';
//Components
import ImageBlock from './imageBlock'
import DateBlock from './DateBlock'

import { Form, FormGroup, Label, Input, Alert, Button, Collapse } from 'reactstrap';


export default class UserCard extends React.Component {

	constructor (props){
        super(props);

    	this.state = { collapse: false };

        this.saveChanges = this.saveChanges.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)){
           	console.log(nextProps.user);
        }
    }
    
    handleChange(event) {
        //Update values of inputs
       AuthActions.userInfoChange(event, this.props.index);
    }

    saveChanges(event){
    	event.preventDefault();
        AuthActions.updateUser(this.props.user)
    }

    toggleForm() {
    	this.setState({ collapse: !this.state.collapse });
  	}


    render() {
		
    	let user = this.props.user;
		let userAccess = accessCode => ({
			3: 'Super Admin',
			2: 'Admin',
			1: 'Editor',
			0 : 'Subscriber'
		})[accessCode]


        
    return (
        <div className="user">
      
			<div className="image">
				<ImageBlock image={user.avatar} />

			</div>
			  	<div>
        		<p>{`${user['firstname']} ${user['lastname']}`}</p>
				<p>{user.local.username}</p>
				<p>{userAccess([this.props.user.userAccess])}</p>
        	</div>
			<div className="info">
			<Button color="primary" onClick={this.toggleForm}>Edit</Button>
			<Collapse isOpen={this.state.collapse}>
			
			<form onSubmit={this.saveChanges}>

					  <label>First Name</label>
	                <div className="formSection">
	                    <input name="firstname" placeholder="Your First Name" type="text" onChange={this.handleChange} value={user.firstname}  />
	                </div>
					
					<label>Last Name</label>
	                <div className="formSection">
	                    <input name="lastname" placeholder="Your Last Name" type="text" onChange={this.handleChange} value={user.lastname}  />
	                </div>
	                
	                <label>Email</label>
	                <div className="formSection">

	                    <input name="email" placeholder="Your Email" type="email" onChange={this.handleChange}  value={user.local.username} />
	                </div>

			          <Label for="exampleSelect">User Role</Label>
			          <Input type="select" name="userAccess" onChange={this.handleChange}>
			          		<option value={3}>SuperAdmin</option>
							<option value={1} >Editor</option>
							<option value={2}>Admin</option>
							<option value={0}>Subscriber</option>
			          </Input>


				<button type="submit">Submit Changes</button>

					</form>
			</Collapse>
			</div>
		</div>
    );
  }
}