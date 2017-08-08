import React from 'react';
import { SingleDatePicker } from 'react-dates';

export default class DateSingle extends React.Component {
    
    constructor(props) {
        super(props);
         this.state = {
            focusedInput: ''
        };
      }
        
    render() {

        return (

           <SingleDatePicker
               id="startDate"
               isOutsideRange={() => false}
              date={this.props.startDate} 
              onDateChange={startDate => this.props.onDatesChange(startDate)} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            />

        );
  }
}