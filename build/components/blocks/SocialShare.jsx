import React from 'react';
import {FacebookShareButton, TwitterShareButton} from 'react-share';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class SocialShare extends React.Component {
        
    render() {

        var shareUrl = this.props.shareUrl ? this.props.shareUrl : window.location.href

    return (
        <div className="share-buttons">
            Share
            <FacebookShareButton url={shareUrl} children={<FontAwesomeIcon icon={['fab', 'facebook']}/>}/>
            <TwitterShareButton url={shareUrl} children={<FontAwesomeIcon icon={['fab', 'twitter']}/>}/>
        </div>
    );
  }
}