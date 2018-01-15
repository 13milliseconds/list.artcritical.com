import React from 'react';

export default class facebookShare extends React.Component {
        
    render() {
        
    return (
        <div 	className="fb-share-button" 
				data-href={window.location.href}
				data-layout="button_count" 
				data-size="large" >
		</div>
    );
  }
}