import React from 'react';
import ImagesActions from '../../actions/ImagesActions';
//COMPONENTS
import ImageUpload from '../forms/imageUpload';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Avatar extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isUploading: false,
            isUploaded: false,
            resetAvatar: false
        };
        
        this.onImageDrop = this.onImageDrop.bind(this);
        this.changeAvatar = this.changeAvatar.bind(this);
        
    }
    
    onImageDrop(file) {
        this.setState({
            uploadedFile: file[0],
            isUploading: true,
            resetAvatar: false
        });
        
        ImagesActions.handleAvatarUpload(file[0]);
    }
    
    changeAvatar () {
        this.setState({
                resetAvatar: true,
				isUploaded: false
            })
    }
    
        
    render() {
        let fullURL = ''
        let isUploaded = false
        
        if (this.props.avatar) {
            isUploaded = true
            fullURL = "http://res.cloudinary.com/artcritical/image/upload/" + this.props.avatar + ".jpg";
        } else if (this.props.facebook){
            isUploaded = true
            fullURL = "http://graph.facebook.com/" + this.props.facebook.id + "/picture?type=large";
        }
        
        let avatarRender = (isUploaded || this.state.isUploading) && !this.state.resetAvatar ? 
            <div className={isUploaded? 'avatar loaded' : 'avatar loading'} onClick={this.changeAvatar}>
				<div className="delete"><FontAwesomeIcon icon={['fal', 'times']} /></div>
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