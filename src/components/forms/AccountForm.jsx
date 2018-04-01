import React from 'react';
import AuthActions from '../../actions/AuthActions';
//Components
import Avatar from '../admin/avatar';

var updateTimer;

export default class AccountForm extends React.Component {
    
    constructor(props){
        super(props);
        
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
    
    saveChanges(event){
        event.preventDefault();
        AuthActions.updateUser(this.props.user)
    }

    render() {
        
        return ( 
            <div className = "accountform">
                <form onSubmit={this.saveChanges}>
                    <label>First Name</label>
                    <div className="formSection">
                        <input name="firstname" placeholder="Your First Name" type="text" value={this.props.user.firstname} onChange={this.handleChange} />
                    </div>
    				
    				<label>Last Name</label>
                    <div className="formSection">
                        <input name="lastname" placeholder="Your Last Name" type="text" value={this.props.user.lastname} onChange={this.handleChange} />
                    </div>
                    
                    <label>Email</label>
                    <div className="formSection">
                        <input name="email" placeholder="Your Email" type="text" value={this.props.user.local.username} onChange={this.handleChange} />
                    </div>
    				
    				<h3>This text will appear on your <a href={location.protocol + '//' + location.host + '/mylist/' + this.props.user.slug} target="_blank">public page</a>.</h3>
                    
                    <label>Profile Picture</label>
                    <div className="formSection">
                        <Avatar {...this.props.user}/>
                    </div>
    				
    				<label>Bio</label>
                    <div className="formSection">
    					<textarea name="bio" 
    						placeholder="Your Bio" 
    						type="text" 
    						value={this.props.user.bio} 
    						onChange={this.handleChange}
    						rows="4" 
    						cols="50"></textarea>
                    </div>
    				
    				<label>Website</label>
                    <div className="formSection">
                        <input name="website" placeholder="Your Website" type="text" value={this.props.user.website} onChange={this.handleChange} />
                    </div>
                    
                    <button type="submit">Save</button>
                    {this.props.loading.updateuser? 'saving...' : ''}
                    {this.props.success.updateuser || ''}
                    {this.props.error.updateuser || ''}
                 </form>
            </div>

        );
    }
}