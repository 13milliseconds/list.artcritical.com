import React from 'react';
import Dropzone from 'react-dropzone';

export default class ImageUpload extends React.Component {
    
    constructor(props) {
        super(props);   
    }
    
    render() {
      
    return (
        <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.props.onImageDrop}>
              <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
    );
  }
}