import React from 'react';
import ToggleButton from 'react-toggle-button';
import ListActions from '../../actions/ListActions';
//Components
import ThumbnailInput from './ThumbnailInput';



export default class ListingForm extends React.Component {

    constructor(props) {
        super(props);
      }
    
    
    render() {
        

        
        return ( 
            <div id="listingForm">
                <label>Thumbnail</label>
                <ThumbnailInput image={this.props.list && this.props.list.image} number={this.props.number} /> 
                
                <label>Description</label>
                 <div className="formSection">
                  <textarea name="text" type="text" value={this.props.text} onChange={this.props.handleChange} />
                </div>
                
                <button onClick={this.props.handleSubmit}>Submit</button>
                
            </div>
        );
    }
}