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
                placeholder="Search"
                value={this.props.value}  
                loadOptions={this.props.getOptions} 
                onChange={this.props.handleSelectChange} 
            />
         

        );
  }
}