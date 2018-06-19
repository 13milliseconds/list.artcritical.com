import React from 'react';
import { Async } from 'react-select';

export default class formSelect extends React.Component {
    
    constructor(props) {
        super(props);
      }
        
    render() {

        return (
            <Async 
                name="venue"
                placeholder="Select venue"
                value={this.props.value}  
                loadOptions={this.props.getOptions} 
                onChange={this.props.handleSelectChange} 
            />
         

        );
  }
}