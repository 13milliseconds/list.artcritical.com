import React from 'react';
import ImagesActions from '../../actions/ImagesActions';
//Components
import ImageUpload from '../forms/imageUpload';

export default class Thumbnail extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            isUploading: false,
            resetThumbnail: false
        };
        
        this.onImageDrop = this.onImageDrop.bind(this)
        this.resetThumbnail = this.resetThumbnail.bind(this)
        
    }
    
    onImageDrop(accepted, rejected) {
        if (accepted.length){
            this.setState({
                uploadedFile: accepted[0],
                isUploading: true
            });
            this.props.onChange && this.props.onChange()
            
            ImagesActions.handleThumbnailUpload(accepted[0], this.props.number);

            this.setState({
                resetThumbnail: false
            })
        } else {
            console.log('Wrong file type!')
        }
        
    }

    resetThumbnail(){
        this.setState({
            resetThumbnail: true
        })
    }
    
        
    render() {
        
        let isUploaded = this.props.image ? true : false
        
        let avatarRender = (isUploaded || this.state.isUploading) && !this.state.resetThumbnail ? 
            <div className={isUploaded? 'picture loaded' : 'picture loading'} onClick={this.resetThumbnail}>
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