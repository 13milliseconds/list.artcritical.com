import React from 'react';
import AuthActions from '../actions/AuthActions';
//COMPONENTS
import UserList from './mylist/userList';
import LogInForm from './login/LogInForm';
import Helmet from './blocks/Helmet'

export default class MyListPage extends React.Component {
    constructor(props) {
        super(props);
    }
	
	componentWillMount(){
        AuthActions.getUserMylist(this.props.params.slug);
    }

    render() {
        let fullname = this.props.currentUser.mylist 
                        ? this.props.currentUser.firstname + ' ' + this.props.currentUser.lastname + "'s List"
                        : 'The List'
        let myListRender = this.props.currentUser.mylist ?
                            <UserList {...this.props} user={this.props.currentUser}/>
                            :
                            <div>No such user.</div>
        return ( 
                <div className="myListwrap">
                <Helmet
                    title={fullname}
                />
                    {myListRender}
                </div>
        );
    }
}