import React from 'react';
import AuthActions from '../../actions/AuthActions';
//Components
import AccountForm from '../forms/AccountForm';
import LogInForm from '../login/LogInForm';

var updateTimer;

export default class AccountPage extends React.Component {
    

    render() {
		
		let accountRender = this.props.user.isLoggedIn ?
                            <AccountForm {...this.props} />
                            :
                            <div>
                                <p>You need to be registered to access this page.</p>
                                <LogInForm 
                                    loading={this.props.loading.login} 
                                    error={this.props.error} />
                            </div>
        
        return ( 
            <div className = "account">
                <h3>Your Account</h3>
                {accountRender}
            </div>
        );
    }
}