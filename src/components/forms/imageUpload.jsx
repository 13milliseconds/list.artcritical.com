import React from 'react';
import Dropzone from 'react-dropzone';

export default class ImageUpload extends React.Component {
    
    constructor(props) {
		super(props)
		this.state = {
		  dropzoneActive: false
		}
	}
	
	onAvatarClick(){
		console.log('clicked')
	}
	
	onDragEnter(){
		this.setState({
		  dropzoneActive: true
		});
	}
	onDragLeave(){
		this.setState({
      		dropzoneActive: false
    	});
	}
    
    render() {
        const inlineStyles = {
            width: '200px', 
            height: '200px',
            border: '2px dotted red',
            borderRadius: '50%'
        }
    return (
        <Dropzone
            activeClassName='formSection'
            style={inlineStyles}
              multiple={false}
              accept="image/*"
              onDrop={this.props.onImageDrop}
			onDragEnter={this.onDragEnter.bind(this)}
			onDragLeave={this.onDragLeave.bind(this)}
			onClick={this.onAvatarClick}>
			{ this.state.dropzoneActive && <div className="dragged">Drop files...</div> }
              <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
    );
  }
}