import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

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
                    <FontAwesomeIcon icon={['fab', 'facebook']}/>
                    Login with Facebook
                </a>
        );
    }
}