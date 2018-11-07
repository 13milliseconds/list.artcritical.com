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
        let fullURL = this.props.currentUser 
            ? this.props.currentUser.avatar
                ?  "https://res.cloudinary.com/artcritical/image/upload/" + this.props.currentUser.avatar + ".jpg"
                : this.props.currentUser.facebook 
                    ? "https://graph.facebook.com/" + this.props.currentUser.facebook.id + "/picture?type=large"
                    : ''
            : ''

        let myListRender = this.props.currentUser._id ?
                            <UserList {...this.props}/>
                            :
                            <div>No such user.</div>
        return ( 
                <div className="myListwrap">
                <Helmet
                    title={fullname}
                    ogTitle={fullname + ' - artcritical'}
                    ogDescription={"A personalized list of upcoming shows and events."}
                    ogImage={fullURL}
                />
                    {myListRender}
                </div>
        );
    }
}