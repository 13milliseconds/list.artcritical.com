import React from 'react';
import ListActions from '../../actions/ListActions';
//Components
import ImageBlock from './imageBlock'
import DateBlock from './DateBlock'

import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';


export default class UserCard extends React.Component {

	constructor (props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange (event) {
        //Update values of inputs
        ListActions.listingInfoChange(event);
    }

    render() {
		
		let user = this.props.user
		
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
					<div className="formSection">
							<Label>User Name</Label>
							<p>{user.firstname} {user.lastname} - {userAccess(user.userAccess)}</p>
                            <Input name="name" placeholder="User name" type="text" defaultValue={user.firstname} onChange={this.handleChange} />
                            <Input name="name" placeholder="User name" type="text" defaultValue={user.lastname} onChange={this.handleChange} />
                    </div>
                    <FormGroup>
			          <Label for="exampleSelect">User Role</Label>

			          <Input type="select" name="select" id="exampleSelect">
			          	<option>{userAccess}</option>
			            <option>Editor</option>
			            <option>Admin</option>
			            <option>Subscriber</option>
			          </Input>
			        </FormGroup>
				</FormGroup>
				<Button>Submit Changes</Button>
			</Form>
				
				
			</div>
		</div>
    );
  }
}