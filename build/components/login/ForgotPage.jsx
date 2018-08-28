import React from 'react';
//COMPONENTS
import ForgotForm from './ForgotForm';

export default class ForgotPage extends React.Component {
    
    constructor(props) {
        super(props);
      }

    render() {

        return ( 
            <div className = "ResetPage">
                    <h2>Reset Password</h2>
                    {this.props.error.resetUser && <div>{this.props.error.resetUser}</div>}
                    <ForgotForm 
                        loading={this.props.loading.forgot}
                        error={this.props.error.forgot}
                        success={this.props.success.forgot} />
            </div>
        );
    }
}