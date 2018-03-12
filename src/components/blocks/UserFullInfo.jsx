import React from 'react';
//Components
import ImageBlock from './imageBlock'
import DateBlock from './DateBlock'




export default class UserFullInfo extends React.Component {
        
    render() {
		
		let user = this.props.user
		
		let userAccess = accessCode => ({
			3: 'Super Admin',
			2: 'Admin',
			1: 'Editor',
			0 : 'Subscriber'
		})[accessCode]
        
    return (
        <div className="infoWrap">
			<div className="image">
				<ImageBlock image={user.avatar} />
			</div>
			
			<div className="info">
			
				<p>{user.firstname} {user.lastname} - <a href={ "mailto:" + user.local.username}>{user.local.username}</a> - {userAccess(user.userAccess)}</p>
				<p>MyList: {user.mylist.length}{user.createdOn &&  <span> - Created On <DateBlock date={user.createdOn} /></span>}{user.lastConnection &&  <span> - Last Connection: <DateBlock date={user.lastConnection} /></span>}</p>
			</div>
		</div>
    );
  }
}