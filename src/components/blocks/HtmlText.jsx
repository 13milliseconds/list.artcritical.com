import React from 'react';

export default class htmlText extends React.Component {
    
    render() {
      
    return (
        <div dangerouslySetInnerHTML={{__html: this.props.content}} />
    );
  }
}
