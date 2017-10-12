import alt from '../alt';
import "isomorphic-fetch";
import request from 'superagent';

class ImagesActions {
    constructor() {
        this.generateActions(
            'avatarUploadFailure', 
            'avatarUploadSuccess',
            'thumbnailUploadSuccess',
            'thumbnailUploadFailure',
        );
    }
    
    handleAvatarUpload(file){
        console.log('Image Uploading');
        const CLOUDINARY_UPLOAD_PRESET = 'Avatar';
        const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/artcritical/image/upload';
        
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

        upload.end((err, response) => {
          if (err) {
              console.log('Error uploading');
            this.avatarUploadFailure(err);
          }

          if (response.body.secure_url !== '') {
              console.log('Image Uploaded');
              this.avatarUploadSuccess(response.body);
          }
        });
    }
    
    handleThumbnailUpload(file){
        console.log('Image Uploading');
        const CLOUDINARY_UPLOAD_PRESET = 'Listing';
        const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/artcritical/image/upload';
        
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

        upload.end((err, response) => {
          if (err) {
              console.log('Error uploading');
            this.thumbnailUploadFailure(err);
          }

          if (response.body.secure_url !== '') {
              console.log('Image Uploaded');
              this.thumbnailUploadSuccess(response.body);
          }
        });
    }
}

export default alt.createActions(ImagesActions);

