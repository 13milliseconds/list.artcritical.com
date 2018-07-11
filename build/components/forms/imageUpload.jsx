import React from 'react';
import Dropzone from 'react-dropzone';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

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
            className="imageDrop"
            multiple={false}
            accept="image/*"
            onDrop={(accepted, rejected) => this.props.onImageDrop(accepted, rejected)}
			onDragEnter={this.onDragEnter.bind(this)}
			onDragLeave={this.onDragLeave.bind(this)}
			onClick={this.onAvatarClick}>
			{ this.state.dropzoneActive && <div className="dragged">Drop files...</div> }
              <p><FontAwesomeIcon icon={['far', 'plus']} /></p>
        </Dropzone>
    );
  }
}