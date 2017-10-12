import React from 'react';
import Dropzone from 'react-dropzone';

export default class ImageUpload extends React.Component {
    
    constructor(props) {
        super(props);   
    }
    
    render() {
        const inlineStyles = {
            width: '100%', 
            height: '50px',
            border: '2px dotted blue',
            borderRadius: '10px'
        }
    return (
        <Dropzone
            activeClassName='formSection'
            style={inlineStyles}
              multiple={false}
              accept="image/*"
              onDrop={this.props.onImageDrop}>
              <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
    );
  }
}