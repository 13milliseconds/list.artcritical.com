import React from 'react';
import Display from '../../actions/displayActions';
import ToggleButton from 'react-toggle-button';
import validator from 'validator';
import PropTypes from 'prop-types';
import AuthActions from '../../actions/AuthActions';

import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUpForm extends React.Component {

    constructor(props) {
        super(props);
        
         this.state = {
              firstname: '',
			  lastname: '',
              email: '',
              password1: '',
              password2: '',
             isValid: {
                firstname: true,
				lastname: true,
                email: true,
                password1: true,
                password2: true
              },
             errorMessage: {
                firstname: '',
				lastname: '',
                email: '',
                password1: '',
                password2: ''
             }
        };
        
        // Function Binding
        this.handleChange = this.handleChange.bind(this)
        this.handleSaveClick = this.handleSaveClick.bind(this)
        this._validateTerms = this._validateTerms.bind(this)
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
        const errorMessage = this.state.errorMessage
        
        if (valid) {
            errorMessage.email = ''
            this.setState({errorMessage: errorMessage})
        } else {
            errorMessage.email = 'Please enter a valid email address'
            this.setState({errorMessage: errorMessage})
        }
        return valid
      }

      _validateFirstName(value) {
        const valid = validator.isLength(value.trim(), 1, 50);
          const errorMessage = this.state.errorMessage
          
          if (valid) {
            errorMessage.firstname = ''
            this.setState({errorMessage: errorMessage})
        } else {
            errorMessage.firstname = 'Please enter a first name.'
            this.setState({errorMessage: errorMessage})
        }
        return valid
      }
	
	_validateLastName(value) {
        const valid = validator.isLength(value.trim(), 1, 50);
          const errorMessage = this.state.errorMessage
          
          if (valid) {
            errorMessage.lastname = ''
            this.setState({errorMessage: errorMessage})
        } else {
            errorMessage.lastname = 'Please enter a last name.'
            this.setState({errorMessage: errorMessage})
        }
        return valid
      }
    
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

      _validateTerms(value) {
        const errorMessage = this.state.errorMessage
          
        if (value) {
            errorMessage.terms = ''
            this.setState({errorMessage: errorMessage})
        } else {
            errorMessage.terms = 'Please accept the terms.'
            this.setState({errorMessage: errorMessage})
        }
        return value
      }

    
      _validate(firstname, lastname, email, password1, password2, terms) {
        this.setState({
          isValid: {
            firstname: this._validateFirstName(firstname),
			lastname: this._validateLastName(lastname),
            email: this._validateEmail(email),
            password1: this._validatePassword1(password1),
            password2: this._validatePassword2(password1, password2),
            terms: this._validateTerms(terms)
          }
        })
      }
    
    _areValid(firstname, lastname, email, password1, password2, terms) {
    var result = false;
        
    if (this._validateFirstName(firstname)
		&& this._validateLastName(lastname)
        && this._validateEmail(email) 
        && this._validatePassword1(password1) 
        && this._validatePassword2(password1, password2)
        && terms) {
      
      result = true;
    }
    return result;
  }
  
  _sanitizeValue(value) {
    return value.trim();
  }

  handleSaveClick(event) {
      
    event.preventDefault()
      
    var {firstname, lastname, email, password1, password2, terms, newsletter} = this.state;
    
    this._validate(firstname, lastname, email, password1, password2, terms); 
    
    if (this._areValid(firstname, lastname, email, password1, password2, terms)) {
        var newUser = {
              firstname: firstname,
			  lastname: lastname,
              username: email,
              password: password1,
              subscribed: newsletter
            }
        AuthActions.attemptRegister(newUser)
    }
      
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
            <Form>
                <FormGroup check>
                <Input type='text'
                        name='firstname'
                        placeholder="First Name"
                        value={this.state.firstname}
                        className={this._getInputStyleName(this.state.isValid.firstname)}
                        onChange={this.handleChange}
                        />
                        {this.state.errorMessage.firstname && <Alert color="danger">{this.state.errorMessage.firstname}</Alert>}
                </FormGroup>
                    
                <FormGroup check>
                <Input type='text'
                        name='lastname'
                        placeholder="Last Name"
                        value={this.state.lastname}
                        className={this._getInputStyleName(this.state.isValid.lastname)}
                        onChange={this.handleChange}
                        />
                        {this.state.errorMessage.lastname && <Alert color="danger">{this.state.errorMessage.lastname}</Alert>}
                </FormGroup>
                    
                <FormGroup check>
                <Input type='email'
                        name='email'
                        placeholder="Email"
                        value={this.state.email}
                        className={this._getInputStyleName(this.state.isValid.email)}
                        onChange={this.handleChange}
                        />
                        {this.state.errorMessage.email && <Alert color="danger">{this.state.errorMessage.email}</Alert>}
                </FormGroup>
                <FormGroup check>
                <Input type='password'
                        name='password1'
                        placeholder="Password"
                        value={this.state.password1}
                        className={this._getInputStyleName(this.state.isValid.password1)}
                        onChange={this.handleChange}
                        />
                        {this.state.errorMessage.password1 && <Alert color="danger">{this.state.errorMessage.password1}</Alert>}
                </FormGroup>
                <FormGroup check>
                <Input type='password'
                        name='password2'
                        placeholder="Confirm Password"
                        value={this.state.password2}
                        className={this._getInputStyleName(this.state.isValid.password2)}
                        onChange={this.handleChange}
                        />
                        {this.state.errorMessage.password2 && <Alert color="danger">{this.state.errorMessage.password2}</Alert>}
                </FormGroup>

                <FormGroup check>
                    <Input type="checkbox" 
                            name="terms"
                            onChange={this.handleChange}/> I accept the Terms and Conditions.
                           {this.state.errorMessage.terms && <Alert color="danger">{this.state.errorMessage.terms}</Alert>}
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" 
                            name="newsletter"
                            onChange={this.handleChange}/> I'd like to subscribe to the artcritical newsletter.
                </FormGroup>

                <Button type="submit" value="Submit" onClick={this.handleSaveClick}>Submit</Button>
            </Form>
    );
  }
};

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpForm

