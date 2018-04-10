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
                            <div>
                                <p>An intro paragraph about why you should register.</p>
                                <LogInForm 
                                    loading={this.props.loading.login} 
                                    error={this.props.error} />
                            </div>
        return ( 
                <div className="myListwrap">
                    {myListRender}
                </div>
        );
    }
}