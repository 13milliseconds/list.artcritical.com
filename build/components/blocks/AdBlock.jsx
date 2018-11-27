import React from 'react'
import AdActions from '../../actions/AdActions'

export default class AdBlock extends React.Component {

    componentWillMount(){
        if (this.props.ads.length < 1)
            AdActions.getAds()
    }
        
    render() {
        const ads = this.props.ads && this.props.ads.map(ad => {
            if (ad.locations.includes(this.props.location)) {
                const image = "https://res.cloudinary.com/artcritical/image/upload/" + ad.image + ".jpg"
                const mobileImage = "https://res.cloudinary.com/artcritical/image/upload/" + ad.mobileImage + ".jpg"

                return <a href={ad.link} target="_blank" key={ad._id}>
                            <img className="desktopImage" src={image} />
                            {ad.mobileImage && <img className="mobileImage" src={mobileImage} />}
                        </a>
            } else {
                return false
            }
        })
        
        return (
            <div className="ad">
                {ads}
            </div>
        );
    }
} 