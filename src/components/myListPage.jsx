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
                            <div className="popupList">
                                <div>
                                    <h2>Register</h2>
                                    <p>Sign in to start adding shows to your list.</p>
                                    <LogInForm 
                                        loading={this.props.loading.login} 
                                        error={this.props.error} />
                                </div>
                            </div>
        return ( 
                <div className="myListwrap">
                    {myListRender}
                </div>
        );
    }
}