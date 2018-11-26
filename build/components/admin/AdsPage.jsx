import React from 'react'
// Components
import AdForm from '../forms/AdForm'
import AdActions from '../../actions/AdActions'
import AdAdminBlock from '../blocks/AdAdminBlock'


export default class AdsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        AdActions.getAll();
    }

    _resetEdit(){
        AdActions.adEditReset()
    }

    render() {
        
        let allAds = this.props.allAds.map(ad => {
            return <AdAdminBlock key={ad._id} ad={ad} editing={this.props.adEdit._id}/>
        })
      
        return ( 
            <div className="adsAdmin">
                <div className="wrap">
                    <div className="allAds">
                        <div className={this.props.adEdit._id ? "ad new" : "ad new editing"} onClick={this._resetEdit}>
                            New Ad
                        </div>
                        {allAds}
                    </div>
                    <div className="adsForm">
                        <AdForm 
                        ad={this.props.adEdit}
                        success={this.props.success.ads}
                        error={this.props.error.ads}
                        loading={this.props.loading.ads}
                    />
                    </div>
                </div>
            </div>
        );
    }
}