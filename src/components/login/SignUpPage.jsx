import React from 'react';
import {Link} from 'react-router';
import SignUpForm from './SignUpForm.jsx';


export default class SignUpPage extends React.Component {

    render() {
        
        return ( 
            <div className="SignIn">
                <div className="signupForm">
                    <h2>Sign Up</h2>
                    <p>Register now and start adding shows to your list!</p>
                    <SignUpForm {...this.props} />
                    <p>Already have an account? <Link to={'/login'} activeClassName="active">Log In</Link></p>
                </div>
            </div>
        );
    }
}