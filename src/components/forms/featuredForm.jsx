import React from 'react';
import ToggleButton from 'react-toggle-button';
import ListActions from '../../actions/ListActions';
//Components
import ThumbnailInput from './ThumbnailInput';



export default class ListingForm extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
      }
    
    handleChange (event) {
        ListActions.featureInfoChange(event);
    }
    
    render() {
        

        
        return ( 
            <div id="listingForm">
                <label>Thumbnail</label>
                <ThumbnailInput image={this.props.list.image} /> 
                
                <label>Description</label>
                 <div className="formSection">
                  <textarea name="text" type="text" value={this.props.text} onChange={this.handleChange} />
                </div>
                
                <button onClick={this.props.handleSubmit}>Submit</button>
                
            </div>
        );
    }
}