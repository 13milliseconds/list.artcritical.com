import React from 'react'
import AdActions from '../../actions/AdActions'

export default class AdAdminBlock extends React.Component {

    constructor(props) {
        super(props);

        this.editThisAd = this.editThisAd.bind(this)
    }

    editThisAd(){
        AdActions.editThisAd(this.props.ad)
    }

    cancelEdit(){
        AdActions.adEditReset()
    }
        
    render() {

        const ad = this.props.ad
        const editing = ad._id === this.props.editing

        const image = "https://res.cloudinary.com/artcritical/image/upload/" + ad.image + ".jpg"

        const locations = ad.locations.split(',').map(location => {
            return <h6 key={location}>{location}</h6>
        })
        
    return (
        <div className={editing ? "ad editing" : "ad"} onClick={editing ? this.cancelEdit : this.editThisAd}>
            <h3>{ad.name}</h3>
            {locations}
            <img className="desktopImage" src={image} />
        </div>
    );
  }
} 