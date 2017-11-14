import React from 'react';
import MyList from './mylist/myList';
import LogInForm from './login/LogInForm';
import AuthActions from '../actions/AuthActions';
//COMPONENTS
import { Link } from 'react-router';

export default class MyListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let myListRender = this.props.user.isLoggedIn ?
                            <MyList {...this.props} />
                            :
                            <LogInForm loginFunction={AuthActions.attemptLogIn} loading={this.props.isLoggingIn} />
        return ( 
                <div className="myListwrap">
                    <h2>my list</h2>
                    {myListRender}
                </div>
        );
    }
}