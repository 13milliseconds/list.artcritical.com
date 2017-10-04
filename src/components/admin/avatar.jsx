import React from 'react';
import ImageUpload from '../forms/imageUpload';
import ImagesActions from '../../actions/ImagesActions';

export default class Avatar extends React.Component {
    
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
        
        ImagesActions.handleAvatarUpload(file[0]);
    }
    
        
    render() {
        const isUploaded = this.props.image.length > 0
        const fullURL = "http://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg"
        
        let avatarRender = isUploaded || this.state.isUploading ? 
            <div className={isUploaded? 'avatar loaded' : 'avatar loading'}>
                <img src={isUploaded? fullURL : this.state.uploadedFile.preview}/>
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