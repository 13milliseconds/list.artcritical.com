import React from 'react';
import ListActions from '../../actions/ListActions';
import AuthActions from '../../actions/AuthActions';
//Components
import ImageBlock from './imageBlock'
import DateBlock from './DateBlock'

import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';


export default class UserCard extends React.Component {

	constructor (props){
        super(props);

        this.state = {
            firstname: this.props.user.firstname,
            lastname: this.props.user.lastname,
            updating: false
        }

        this.saveChanges = this.saveChanges.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //  componentWillReceiveProps(nextProps){
        
    //     if(JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)){
    //         console.log(nextProps.user);
    //     }
    // }
    
    handleChange(event) {
        //Update values of inputs
       AuthActions.userInfoChange(event);
    }

    saveChanges(){

        AuthActions.updateUser(this.props.user)
    }

    render() {
		
		let user = this.props.user
		console.log(user)

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
			<div className="info">
			<Form>
				<FormGroup>
					  <label>First Name</label>
	                <div className="formSection">
	                    <input name="firstname" placeholder="Your First Name" type="text" defaultValue={user.firstname} onChange={this.handleChange} />
	                </div>
					
					<label>Last Name</label>
	                <div className="formSection">
	                    <input name="lastname" placeholder="Your Last Name" type="text" defaultValue={user.lastname} onChange={this.handleChange} />
	                </div>
	                
	                <label>Email</label>
	                <div className="formSection">
	                    <input name="email" placeholder="Your Email" type="email" defaultValue={user.local.username} onChange={this.handleChange} />
	                </div>
                    <FormGroup>
			          <Label for="exampleSelect">User Role</Label>
			          <Input type="select" name="select" id="exampleSelect">
			          	<option>{userAccess([this.props.user.userAccess])}</option>
			            <option>Editor</option>
			            <option>Admin</option>
			            <option>Subscriber</option>
			          </Input>
			        </FormGroup>
				</FormGroup>
				<Button onClick={this.saveChanges}>Submit Changes</Button>

			</Form>
				
				
			</div>
		</div>
    );
  }
}