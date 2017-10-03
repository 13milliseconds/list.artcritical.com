import React from 'react';

export default class FacebookButton extends React.Component {

    render() {
        
        return ( 
                <a className="facebookbutton" href="/auth/facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    Login with Facebook
                </a>
        );
    }
}