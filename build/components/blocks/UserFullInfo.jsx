import React from 'react';
import AuthActions from '../../actions/AuthActions'
//Components
import ImageBlock from './imageBlock'
import DateBlock from './DateBlock'
import UserEdit from '../forms/UserEdit'

export default class UserFullInfo extends React.Component {

		constructor(props){
				super(props)

				this.handleChange = this.handleChange.bind(this);
			}
			
			handleChange(event) {
					//Update values of inputs
				 AuthActions.userInfoChange(event, this.props.index);
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
			<div>
				<h1>{user.firstname} {user.lastname}</h1>
				<UserEdit 
						user={user} 
						handleChange={this.handleChange} 
						error={this.props.error}
						success={this.props.success}
						/>
			</div>
    );
  }
}