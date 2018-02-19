import React from 'react';
import { AsyncCreatable } from 'react-select';

export default class formSelect extends React.Component {
    
    constructor(props) {
        super(props);
      }
        
    render() {

        return (
            <AsyncCreatable 
                name="venue" 
                value={this.props.value}  
                loadOptions={this.props.getOptions} 
                onChange={this.props.handleSelectChange} 
            />
         

        );
  }
}