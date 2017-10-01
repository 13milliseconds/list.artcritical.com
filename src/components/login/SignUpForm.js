import React from 'react';
import Display from '../../actions/displayActions';
import ToggleButton from 'react-toggle-button';
import validator from 'validator';
import axios from 'axios';
import { browserHistory } from 'react-router'


class SignUpForm extends React.Component {

    constructor(props) {
        super(props);
        
         this.state = {
              name: '',
              email: '',
              password1: '',
              password2: '',
             isValid: {
                name: true,
                email: true,
                password1: true,
                password2: true
              },
             errorMessage: {
                name: '',
                email: '',
                password1: '',
                password2: ''
             }
        };
        
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

      _validateName(value) {
        const valid = validator.isLength(value.trim(), 1, 50);
          const errorMessage = this.state.errorMessage
          
          if (valid) {
            errorMessage.name = ''
            this.setState({errorMessage: errorMessage})
        } else {
            errorMessage.name = 'Please enter a name.'
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

    
      _validate(name, email, password1, password2) {
        this.setState({
          isValid: {
            name: this._validateName(name),
            email: this._validateEmail(email),
            password1: this._validatePassword1(password1),
            password2: this._validatePassword2(password1, password2)
          }
        });
      }
    
    _updateUser(){
        
        var {name, email, password1, password2} = this.state;
        
        
            var updatedUser = {
              name: name,
              email: email,
              password: password1
            }

            // in a real app, you'd send this user obj to an action handler to update store
            console.log('updated user:', updatedUser);
        
        axios.post('/auth/signup', {
            name: name,
            email: email,
            password: password1
          })
          .then(function (response, error) {
            console.log('Response');
            if (!error) {
                browserHistory.push('/admin')
                console.log('New user connected')
            } else {
                console.log(error)
            }
          })
          .catch(function (error) {
            
          });
        
    }
    
    _areValid(name, email, password1, password2) {
    var result = false;
        
    if (this._validateName(name)
      && this._validateEmail(email) 
      && this._validatePassword1(password1) 
      && this._validatePassword2(password1, password2)) {
      
      result = true;
    }
    return result;
  }
  
  _sanitizeValue(value) {
    return value.trim();
  }

  handleSaveClick(event) {
      
    event.preventDefault()
      
    var {name, email, password1, password2} = this.state;
    
    this._validate(name, email, password1, password2);
    
    if (this._areValid(name, email, password1, password2)) {
        this._updateUser()
    }
      
  }
  
  render() {
    return (
      <form>

        <div>
          <input type='text'
                 name='name'
                 value={this.state.name}
                 className={this._getInputStyleName(this.state.isValid.name)}
                 placeholder='Name'
                 onChange={this.handleChange}
                 />
                 <span>{this.state.errorMessage.name}</span>
        </div>
        <div>
          <input type='text'
                 name='email'
                 value={this.state.email}
                 className={this._getInputStyleName(this.state.isValid.email)}
                 placeholder='Email'
                 onChange={this.handleChange}
                 />
                 <span>{this.state.errorMessage.email}</span>
        </div>
        <div>
          <input type='password'
                 name='password1'
                 value={this.state.password1}
                 className={this._getInputStyleName(this.state.isValid.password1)}
                 placeholder='Password'
                 onChange={this.handleChange}
                 />
                 <span>{this.state.errorMessage.password1}</span>
        </div>
        <div>
          <input type='password'
                 name='password2'
                 value={this.state.password2}
                 className={this._getInputStyleName(this.state.isValid.password2)}
                 placeholder='Confirm Password'
                 onChange={this.handleChange}
                 />
                 <span>{this.state.errorMessage.password2}</span>
        </div>

        <div className='button-container'>
             <input type="submit" value="Submit" onClick={this.handleSaveClick} />
        </div>
      </form>
    );
  }
};

export default SignUpForm

