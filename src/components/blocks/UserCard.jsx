import React from 'react';
//Components
import ImageBlock from './imageBlock'
import DateBlock from './DateBlock'
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';


export default class UserCard extends React.Component {

	constructor (props){
        super(props);

    	this.state = { collapse: false };
    }


    render() {
		
		let user = this.props.user;
		
		let userAccess = accessCode => ({
			3: 'Super Admin',
			2: 'Admin',
			1: 'Editor',
			0 : 'Subscriber'
		})[accessCode]

		let avatar = user.avatar
							? "https://res.cloudinary.com/artcritical/image/upload/" + user.avatar + ".jpg"
							: "https://qph.fs.quoracdn.net/main-qimg-87001d2ce810c2f48c97032cbc905939"

        
    return (
		<Card>
				<div className="avatarWrap">
        	<div className="avatar" style={{backgroundImage: "url(" + avatar + ")"}} alt="avatar" ></div>
				</div>
        <CardBlock>
					<CardTitle>{user.firstname} {user.lastname}</CardTitle>
					<CardSubtitle>{userAccess(user.userAccess)}</CardSubtitle>
					<Button color="primary" onClick={() => this.props.infoReveal(this.props.index)}>More Info</Button>
        </CardBlock>
      </Card>
    );
  }
}