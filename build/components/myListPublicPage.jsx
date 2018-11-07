import React from 'react';
import AuthActions from '../actions/AuthActions';
//COMPONENTS
import UserList from './mylist/userList';
import Helmet from './blocks/Helmet'

export default class MyListPage extends React.Component {
    constructor(props) {
        super(props);
    }
	
	componentWillMount(){
        AuthActions.getUserMylist(this.props.params.slug);
    }

    render() {
        let fullname = this.props.currentUser 
                        ? this.props.currentUser.firstname + ' ' + this.props.currentUser.lastname + "'s List"
                        : 'The List'

        //Get the user's avatar
        let fullURL = ''
        
        if (user.avatar) {
            fullURL = "https://res.cloudinary.com/artcritical/image/upload/" + user.avatar + ".jpg";
        } else if (user.facebook){
            fullURL = "https://graph.facebook.com/" + user.facebook.id + "/picture?type=large";
        }

        let myListRender = this.props.currentUser.mylist ?
                            <UserList {...this.props}/>
                            :
                            <div>No such user.</div>
        return ( 
                <div className="myListwrap">
                <Helmet
                    title={fullname}
                    ogDescription={"A personalized list of upcoming shows and events."}
                    ogImage={fullURL}
                />
                    {myListRender}
                </div>
        );
    }
}