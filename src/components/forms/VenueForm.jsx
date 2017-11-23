import React from 'react';
import ToggleButton from 'react-toggle-button';
import ListActions from '../../actions/ListActions';
//Components



export default class VenueForm extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
      }
    
    handleChange (event) {
        //Update values of inputs
        ListActions.venueInfoChange(event);
    }
    
    render() {
        let deleteButton = this.props.handleDelete?
                <button className="delete" onClick={this.props.handleDelete}>Delete</button>
            :
                null

        
        return ( 
            <div id="listingForm">
               
                <label>Name</label>
                <div className="formSection">
                  <input name="name" placeholder="Event name" type="text" value={this.props.name} onChange={this.handleChange} />
                </div>  
                
                <label>Name</label>
                <div className="formSection">
                  <input name="address" placeholder="address" type="text" value={this.props.address} onChange={this.handleChange} />
                </div>
                
                <label>Website</label>
                <div className="formSection">
                  <input name="website" placeholder="Website" type="text" value={this.props.website} onChange={this.handleChange} />
                </div>
                
                
                <button onClick={this.props.handleSubmit}>Submit</button>
                {this.props.loading && <div className='loading'>loading</div>}
                {this.props.success && <div className='success'>Saved!</div>}
                {this.props.error.general && <div className='error'>{this.props.error.general}</div>}
                {deleteButton}
                
            </div>
        );
    }
}