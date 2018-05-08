import React from 'react';
import moment from 'moment';
//Components
import { DayPickerSingleDateController as ReactDayPicker } from 'react-dates';

const now = moment()

export default class DayPicker extends React.Component {
    
    constructor(props) {
        super(props);
         this.state = {
            focusedInput: null,
            prevDisabled: true,
            datePicked: now
        }

        this.isDayHighlighted = this.isDayHighlighted.bind(this)
      }

    isDayHighlighted(day, eventDays){
        var highlight = false
        eventDays.map(event => {
            if (moment(event.start).isSame(day, 'day')){
                highlight = true
            }
        })

        return highlight
    }

    onDateChange(date){
        this.setState({
            datePicked: date,
        })
        this.props.scrollToDate(date)
    }
        
    render() {

        return (
            <div>
            {this.props.events.length > 0 &&
           <ReactDayPicker
                hideKeyboardShortcutsPanel
                numberOfMonths={1}
                date={this.state.datePicked}
                isOutsideRange={day => !this.isDayHighlighted(day, this.props.events)}
                isDayHighlighted={day => this.isDayHighlighted(day, this.props.events)}
                onDateChange={(date) => this.onDateChange(date)}
                //focusedInput={this.state.focusedInput}
                //onFocusChange={focusedInput => this.setState({ focusedInput })}
            />
        }
        </div>

        );
  }
}