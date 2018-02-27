import React from 'react';
//Components
import ImageBlock from './imageBlock'
import DateBlock from './DateBlock'


export default class UserCard extends React.Component {
        
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
				<p>{user.firstname} {user.lastname} - {userAccess(user.userAccess)}</p>
				<p>MyList: {user.mylist.length}</p>
			</div>
		</div>
    );
  }
}