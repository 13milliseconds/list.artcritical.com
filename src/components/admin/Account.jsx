import React from 'react';


export default class IndexPage extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        
        return ( 
            <div className = "account">
                <h3>Your Account</h3>
                <p>Name: {this.props.user.name}</p>
                <p>Email: {this.props.user.username}</p>
            </div>
        );
    }
}