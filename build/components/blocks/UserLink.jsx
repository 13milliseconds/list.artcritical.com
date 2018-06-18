import React from 'react';
//COMPONENTS
import {Popover, PopoverTitle, PopoverContent, Button} from 'reactstrap'
import {Link} from 'react-router';


export default class UserLink extends React.Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this)
        this.state = {
        popoverOpen: false
        }
    }
    
    toggle() {
    this.setState({
        popoverOpen: !this.state.popoverOpen
    })
    }
        
    render() {
		
        let user = this.props.user

        //Get the user's avatar
        let fullURL = ''
        let hasAvatar = false
        
        if (user.avatar) {
            hasAvatar = true
            fullURL = "https://res.cloudinary.com/artcritical/image/upload/" + user.avatar + ".jpg";
        } else if (user.facebook){
            hasAvatar = true
            fullURL = "https://graph.facebook.com/" + user.facebook.id + "/picture?type=large";
        }
        
        return (
            <span className="userLink">
                <a  onClick={this.toggle} 
                    id={'Popover-' + user._id}
                    target="_blank">
                    {user.firstname} {user.lastname}
                </a>
                <Popover placement="top" target={'Popover-' + user._id} toggle={this.toggle} isOpen={this.state.popoverOpen}>
                    <PopoverTitle>{hasAvatar && <img className="avatar" src={fullURL}/>} {user.firstname} {user.lastname}</PopoverTitle>
                    <PopoverContent>
                        {user.bio}
                        <Link to={'/mylist/' + user.slug}>
                            <Button>Profile</Button>
                        </Link>
                    </PopoverContent>
                </Popover>
            </span>
        )
  }
}