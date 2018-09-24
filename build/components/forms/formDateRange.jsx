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
              startDate={this.props.startDate ? moment(this.props.startDate) : ''} 
              endDate={this.props.endDate ? moment(this.props.endDate) : ''} 
              isOutsideRange={() => false}
              onDatesChange={({startDate, endDate}) => this.props.onDatesChange({startDate, endDate})} 
              focusedInput={this.state.focusedInput} 
              onFocusChange={focusedInput => this.setState({ focusedInput })} 
              orientation={this.props.vertical ? 'vertical' : 'horizontal'}
              verticalHeight={390}
            />

        );
  }
}