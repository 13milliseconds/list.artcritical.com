import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

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
                date={this.props.startDate ? moment(this.props.startDate) : null}  
                onDateChange={date => this.props.onDatesChange({date, index: this.props.event})} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            />

        );
  }
}