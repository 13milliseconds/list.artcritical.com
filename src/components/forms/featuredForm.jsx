import React from 'react';
import ToggleButton from 'react-toggle-button';
import ListActions from '../../actions/ListActions';
//Components
import ThumbnailInput from './ThumbnailInput';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class ListingForm extends React.Component {

    constructor(props) {
        super(props);
      }
    
    
    render() {
        

        
        return ( 
            <div id="listingForm">
                <Form>
                    <FormGroup check>
                    <Label>Thumbnail</Label>
                    <ThumbnailInput image={this.props.list && this.props.list.image} number={this.props.number} /> 
                    </FormGroup>
                    
                    <FormGroup check>
                    <Label>Description</Label>
                     <div className="formSection">
                      <textarea name="text" type="text" value={this.props.text} onChange={this.props.handleChange} />
                    </div>
                    </FormGroup>
                </Form>
                
                <button onClick={this.props.handleSubmit}>Submit</button>
                
            </div>
        );
    }
}