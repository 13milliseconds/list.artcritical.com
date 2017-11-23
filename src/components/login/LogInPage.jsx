import React from 'react';
import {Link, browserHistory} from 'react-router';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
//COMPONENTS
import LogInForm from './LogInForm.jsx';

export default class LogInPage extends React.Component {
    
    constructor(props) {
        super(props);
      }

    render() {
        
        const loggedIn = this.props.user.isLoggedIn
        const Router = this.context.router

        if (loggedIn) {
            setTimeout(function() {
                Router.push('/');
            }, 0);
        }
        
        return ( 
            <div className = "admin">
                <header>
                    <h2>Login</h2>
                </header>
                <div className="admin-content">
                <LogInForm loading={this.props.isLoggingIn} />
            </div>
                Need to sign up? <Link to={'/signup'} activeClassName="active">Sign Up</Link>
            </div>
        );
    }
}

LogInPage.contextTypes = {
  router: PropTypes.object.isRequired
};