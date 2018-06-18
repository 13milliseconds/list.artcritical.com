import React from 'react';

export default class imageBlock extends React.Component {
    
    render() {
        let fullURL = this.props.image 
							? "https://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg"
							: "https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg"
      
    return (
        <img src={fullURL} className={this.props.classes}/>
    );
  }
}