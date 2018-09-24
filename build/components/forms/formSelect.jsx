import React from 'react';
import { Async } from 'react-select';

export default class formSelect extends React.Component {
    
    constructor(props) {
        super(props);
      }

    renderOption(option){
        return <div>
            {option.label} <br />
            <span style={{color: 'grey', fontSize: '.8em'}}>{option.dates}</span>
        </div>

    }

    render() {

        return (
            <Async 
                name="venue"
                placeholder="Search"
                value={this.props.value}  
                loadOptions={this.props.getOptions}
                onChange={this.props.handleSelectChange}
                optionRenderer={this.props.optionRenderer ? this.props.optionRenderer : this.renderOption}
            />
         

        );
  }
}