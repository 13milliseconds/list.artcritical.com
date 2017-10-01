import React from 'react';
import {Link, browserHistory} from 'react-router';
import LogInForm from './LogInForm';
import AuthActions from '../../actions/AuthActions';
import ListActions from '../../actions/ListActions';
import { Redirect } from 'react-router-dom';

export default class LogInPage extends React.Component {
    
    constructor(props) {
        super(props);
      }

    render() {
        
        const redirect = this.props.loginRedirect

        if (redirect) {
            browserHistory.push('/');
        }
        
        return ( 
            <div className = "admin">
                <header>
                    <h2>Login</h2>
                </header>
                <div className="admin-content">
                <LogInForm loginFunction={AuthActions.attemptLogIn} />
            </div>
                Need to sign up? <Link to={'/signup'} activeClassName="active">Sign Up</Link>
            </div>
        );
    }
}