import React from 'react';
import ImageUpload from '../forms/imageUpload';
import ImagesActions from '../../actions/ImagesActions';

export default class Thumbnail extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            isUploading: false
        };
        
        this.onImageDrop = this.onImageDrop.bind(this);
        
    }
    
    onImageDrop(file) {
        this.setState({
            uploadedFile: file[0],
            isUploading: true
        });
        
        ImagesActions.handleThumbnailUpload(file[0]);
    }
    
        
    render() {
        const isUploaded = this.props.image.length > 0
        
        let avatarRender = isUploaded || this.state.isUploading ? 
            <div className={isUploaded? 'avatar loaded' : 'avatar loading'}>
                <img src={isUploaded? this.props.image : this.state.uploadedFile.preview}/>
            </div>
            :
            <ImageUpload onImageDrop={this.onImageDrop}/>
            
      
    return (
        <div>
            {avatarRender}
        </div>
    );
  }
}