import React from 'react';
//Components
import FeaturedSelect from '../forms/featuredSelect';
import FeatureBlock from '../blocks/featureBlock';


export default class FeaturedDay extends React.Component {

    constructor(props) {
        super(props);
      }
    
    render() {
        
        return ( 
            <div>
                <FeaturedSelect {...this.props}/>
                <div className="preview">
                <h4>Preview</h4>
                    { (this.props.feature.list || this.props.feature.event) && <FeatureBlock feature={this.props.feature} user={this.props.user}/> }
                </div>
            </div>
        );
    }
}