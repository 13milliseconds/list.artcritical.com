import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class LogInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        // Function binding
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
    //Update values of inputs
    handleChange (event) {
        const target = event.target
        const value = target.value
        const name = target.name
        
        this.setState({[name]: value})
    }
    
    
    // Add the listing to the database
    handleSubmit() {
        const { loginFunction } = this.props;
        const formData = this.state;
        loginFunction(formData);
      }
    
    
    render() {
        
        return ( 
            <form>
                <FormGroup>
                <Label>Email</Label>
                  <Input 
                      name="username" 
                      placeholder="Email" 
                      type="text" 
                      value={this.state.username} 
                      onChange={this.handleChange} 
                      />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input 
                        name="password" 
                        placeholder="Password" 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        />
                </FormGroup>

                <Button onClick={this.handleSubmit}>Log In</Button>
                
            </form>
        );
    }
}