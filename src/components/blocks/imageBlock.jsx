import React from 'react';

export default class imageBlock extends React.Component {
    
    render() {
        let fullURL = "http://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg";
      
    return (
        <img src={fullURL} className={this.props.classes}/>
    );
  }
}