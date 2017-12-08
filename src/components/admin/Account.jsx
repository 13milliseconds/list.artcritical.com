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
                <div className="formSection">
                    <input name="name" placeholder="Your Name" type="text" value={this.props.user.name} onChange={this.handleChange} />
                </div>
                
                <label>Email</label>
                <div className="formSection">
                    <input name="email" placeholder="Your Email" type="text" value={this.props.user.local.username} onChange={this.handleChange} />
                </div>
                
                <label>Profile Picture</label>
                <div className="formSection">
                    <Avatar {...this.props.user}/>
                </div>
                
                <button onClick={this.saveChanges}>Save</button>
                {this.props.loading.updateuser? 'saving...' : ''}
                {this.props.success.updateuser || ''}
                {this.props.error.updateuser || ''}
            </div>
        );
    }
}