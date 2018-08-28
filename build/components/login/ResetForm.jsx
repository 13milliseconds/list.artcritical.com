import React from 'react';
import validator from 'validator';
import PropTypes from 'prop-types';
import AuthActions from '../../actions/AuthActions';

import { Alert, Button, Form, FormGroup, Input } from 'reactstrap';

export default class SignUpForm extends React.Component {

    constructor(props) {
        super(props);
        
         this.state = {
            password1: '',
            password2: '',
             isValid: {
                password1: true,
                password2: true,
             },
             errorMessage: {
                password1: '',
                password2: '',
             }
        };
        
        // Function Binding
        this.handleChange = this.handleChange.bind(this)
        this.handleSaveClick = this.handleSaveClick.bind(this)
        this._validatePassword1 = this._validatePassword1.bind(this)
        this._validatePassword2 = this._validatePassword2.bind(this)
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
    _validatePassword1(value) {
        const valid = validator.isLength(value.trim(), 5, 50);
        const errorMessage = this.state.errorMessage
       
        if (valid) {
            errorMessage.password1 = ''
            this.setState({errorMessage: errorMessage})
        } else {
            errorMessage.password1 = 'Please enter a password. 5 characters min.'
            this.setState({errorMessage: errorMessage})
        }
        return valid
      }
    
    _validatePassword2(password1, password2) {
        const pwValid = this._validatePassword1(this.state.password1)
        const valid = (validator.equals(password1, password2));
        const errorMessage = this.state.errorMessage
        
        //Check if password is valid
        if (pwValid){
            //Check if passwords match
            if (valid) {
                errorMessage.password2 = ''
                this.setState({errorMessage: errorMessage})
            } else {
                errorMessage.password2 = 'Passwords need to match'
                this.setState({errorMessage: errorMessage})
            }
            
            return valid
            
        } else {
            return pwValid
        }
      }

  handleSaveClick(event) {
      
    event.preventDefault()
      
    var {password1, password2} = this.state;
    
    if (this._validatePassword1(password1) && this._validatePassword2(password1, password2)) {
        AuthActions.resetPassword(password1, this.props.token)
    }
      
  }
  
  render() {
      
    return (
        <div className="resetForm">
            <Form>
                <FormGroup check>
                    <Input type='password'
                        name='password1'
                        placeholder="New Password"
                        value={this.state.password1}
                        className={this._getInputStyleName(this.state.password1.isValid)}
                        onChange={this.handleChange}
                        />
                        {this.state.errorMessage.password1 && <Alert color="danger">{this.state.errorMessage.password1}</Alert>}
                    <Input type='password'
                        name='password2'
                        placeholder="Re-type your new Password"
                        value={this.state.password2}
                        className={this._getInputStyleName(this.state.password2.isValid)}
                        onChange={this.handleChange}
                        />
                        {this.state.errorMessage.password2 && <Alert color="danger">{this.state.errorMessage.password2}</Alert>}
                        {this.props.error && <Alert color="danger">{this.state.errorMessage.password2}</Alert>}
                        {this.props.success && <Alert color="success">{this.props.success}</Alert>}
                </FormGroup>

                <Button type="submit" value="Submit" onClick={this.handleSaveClick}>Reset</Button>
            </Form>
            </div>
    )
  }
}

