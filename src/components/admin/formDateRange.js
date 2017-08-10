import React from 'react';
import { DateRangePicker } from 'react-dates';

export default class DateRange extends React.Component {
    
    constructor(props) {
        super(props);
         this.state = {
            focusedInput: ''
        };
      }
    
        
    render() {

        return (

           <DateRangePicker
              startDate={this.props.startDate} 
              endDate={this.props.endDate} 
              isOutsideRange={() => false}
              onDatesChange={({startDate, endDate}) => this.props.onDatesChange({startDate, endDate})} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />

        );
  }
}