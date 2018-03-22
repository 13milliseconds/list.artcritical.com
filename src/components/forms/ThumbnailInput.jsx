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
    
    onImageDrop(accepted, rejected) {
        console.log(accepted, rejected)
        if (accepted.length){
            this.setState({
                uploadedFile: accepted[0],
                isUploading: true
            });
            
            ImagesActions.handleThumbnailUpload(accepted[0], this.props.number);
        } else {
            console.log('Wrong file type!')
        }
        
    }
    
        
    render() {
        
        let isUploaded = false
        if (this.props.image) { isUploaded = this.props.image.length > 0 }
        
        let avatarRender = isUploaded || this.state.isUploading ? 
            <div className={isUploaded? 'avatar loaded' : 'avatar loading'}>
                <img src={isUploaded? "http://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg" : this.state.uploadedFile.preview}/>
            </div>
            :
            <ImageUpload onImageDrop={this.onImageDrop}/>
            
      
    return (
        <div className="formSection">
            {avatarRender}
        </div>
    );
  }
}