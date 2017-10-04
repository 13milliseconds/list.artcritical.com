import React from 'react';
import Avatar from './avatar';
import AuthActions from '../../actions/AuthActions';

var updateTimer;

export default class IndexPage extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            name: this.props.user.name,
            updating: false
        }
        
        //Function Binding
        this.handleChange = this.handleChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }
    
    
    componentWillReceiveProps(nextProps){
        console.log(nextProps.user);
        console.log(this.props.user);
        
        if(JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)){
            console.log(nextProps.user);
        }
    }

    
    //Update values of inputs
    handleChange (event) {
        AuthActions.userInfoChange(event);
    }
    
    saveChanges(){
        AuthActions.updateUser(this.props.user)
    }

    render() {
        
        return ( 
            <div className = "account">
                <h3>Your Account</h3>
                <label>Name</label>
                <input name="name" placeholder="Your Name" type="text" value={this.props.user.name} onChange={this.handleChange} />
                
                <p>Email: {this.props.user.email}</p>
                <Avatar image={this.props.user.avatar}/>
                <button onClick={this.saveChanges}>Save</button>
            </div>
        );
    }
}