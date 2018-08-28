import React from 'react';
//COMPONENTS
import ResetForm from './ResetForm';
import Loading from '../blocks/loading'
import AuthActions from '../../actions/AuthActions';

export default class ResetPage extends React.Component {
    
    constructor(props) {
        super(props);
        
      }

    componentWillMount(){
        AuthActions.certifyReset(this.props.params.token)
    }

    render() {

        if (!this.props.resetUser && !this.props.loading.certifyReset) {
            this.props.history.push('/forgot')
        }

        return ( 
            <div className = "ResetPage">
                    <h2>Reset Password</h2>
                    {!this.props.loading.certifyReset && this.props.resetUser
                        ? <ResetForm 
                                token={this.props.params.token}
                                loading={this.props.loading.reset} 
                                error={this.props.error.reset}
                                success={this.props.success.reset} />
                        : <Loading />
                    }
            </div>
        );
    }
}