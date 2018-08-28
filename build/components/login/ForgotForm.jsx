import React from 'react';
import validator from 'validator';
import PropTypes from 'prop-types';
import AuthActions from '../../actions/AuthActions';

import { Alert, Button, Form, FormGroup, Input } from 'reactstrap';

export default class SignUpForm extends React.Component {

    constructor(props) {
        super(props);
        
         this.state = {
              email: '',
             isValid: true,
             errorMessage: '',
        };
        
        // Function Binding
        this.handleChange = this.handleChange.bind(this)
        this.handleSaveClick = this.handleSaveClick.bind(this)
      }
    
    
    handleChange(event){
        let target = event.target
        let name = target.name
        let value = target.value
        
        this.setState({[name] : value})
    }
    
    //Check if valid and updates state
    _getInputStyleName(isValid) {
        return isValid ? 'valid' : 'invalid';
    }
    
    //VALIDATORS
    _validateEmail(value) {
        const valid = validator.isEmail(value)
        let errorMessage = ''
        
        if (valid) {
            this.setState({errorMessage: errorMessage})
        } else {
            errorMessage = 'Please enter a valid email address'
            this.setState({errorMessage: errorMessage})
        }
        return valid
      }

  handleSaveClick(event) {
      
    event.preventDefault()
      
    var {email} = this.state;
    
    if (this._validateEmail(email)) {
        AuthActions.forgotPassword(email)
    }
      
  }
  
  render() {
      
    return (
        <div className="resetForm">
            <Form>
                <FormGroup check>
                <Input type='email'
                        name='email'
                        placeholder="Email"
                        value={this.state.email}
                        className={this._getInputStyleName(this.state.isValid)}
                        onChange={this.handleChange}
                        />
                        {this.state.errorMessage && <Alert color="danger">{this.state.errorMessage}</Alert>}
                        {this.props.error && <Alert color="danger">{this.props.error}</Alert>}
                        {this.props.success && <Alert color="success">{this.props.success}</Alert>}
                </FormGroup>

                <Button type="submit" value="Submit" onClick={this.handleSaveClick}>Reset</Button>
            </Form>
            </div>
    )
  }
}

