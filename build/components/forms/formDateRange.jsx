import React from 'react';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

export default class DateRange extends React.Component {
    
    constructor(props) {
        super(props);
         this.state = {
            focusedInput: null
        };
      }
    
        
    render() {

        return (

           <DateRangePicker
              startDate={this.props.startDate ? moment(this.props.startDate) : null} 
              endDate={this.props.endDate ? moment(this.props.endDate) : null} 
              isOutsideRange={() => false}
              onDatesChange={({startDate, endDate}) => this.props.onDatesChange({startDate, endDate})} 
              focusedInput={this.state.focusedInput} 
              onFocusChange={focusedInput => this.setState({ focusedInput })} 
            />

        );
  }
}