import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';



const CLOUDINARY_UPLOAD_PRESET = 'fdzteigx';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/artcritical/image/upload';

export default class ImageUpload extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
          uploadedFileCloudinaryUrl: '',
            uploadedFile: {},
            isUploading: false, 
            isUploaded: false
        };
        
        this.onImageDrop = this.onImageDrop.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
    }
    
    onImageDrop(file) {
        this.setState({
            uploadedFile: file[0],
            isUploading: true
        });
        
        console.log(file);
        
        this.handleImageUpload(file[0]);
    }
    
    handleImageUpload(file){
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }

          if (response.body.secure_url !== '') {
              console.log(response.body.secure_url);
            this.setState({
                uploadedFileCloudinaryUrl: response.body.secure_url,
                isUploaded: true
            });
          }
        });
    }
        
    render() {
        const isUploading = this.state.isUploading
        const isUploaded = this.state.isUploaded
        
        let uploadRender = !isUploading ? 
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            :
            <div className={isUploaded? 'loaded' : 'loading'}>
                <img src={isUploaded? this.state.uploadedFileCloudinaryUrl : this.state.uploadedFile.preview}/>
            </div>
      
    return (
        <div>
            {uploadRender}
        </div>
    );
  }
}