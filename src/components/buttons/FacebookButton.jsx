import React from 'react';

export default class FacebookButton extends React.Component {

    openFBAuth(){
        const url = '/auth/facebook';
        const name = '_blank';
        const specs = 'width=600,height=400';
        window.open(url, name, specs);
    }

    render() {
        
        return ( 
                <a className="facebookbutton" onClick={this.openFBAuth}>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    Login with Facebook
                </a>
        );
    }
}