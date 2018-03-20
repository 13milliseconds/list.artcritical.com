import React from 'react';
import ListActions from '../../actions/ListActions'
//Components
import DateSingle from './formDateSingle'

export default class EventsForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.addEvent = this.addEvent.bind(this)
      }

    onChange(e){
            console.log(e)
            //Update values of inputs
            ListActions.eventsInfoChange(e);
    }

    addEvent(e) {
        e.preventDefault()
        ListActions.addEvent()
    }
        
    render() {

        let eventsList = events => events.map((event, index) => {
            return <div className="event" key={index}>
                    <select
                        name="type"
                        value={event.type? event.type : "no-value"}
                        data-index={index}
                        onChange={this.onChange} >
                        <option value="opening">Opening</option>
                        <option value="closing">Closing</option>
                        <option value="other">Other</option>
                    </select>
                    {event.type === "other" &&
                        <input 
                        type="text" 
                        name="name"
                        data-index={index}
                        value={event.name}
                        onChange={this.onChange} />
                    }
                    <DateSingle event={index} startDate={event.date} onDatesChange={this.onChange}/>
                    <textarea 
                        name="description" 
                        value={event.description}
                        data-index={index}
                        onChange={this.onChange}>
                    </textarea>
            </div>
        })

        return (
            <div className="eventsform">
            <div className="eventsWrap">
            {this.props.events.length > 0
                ? eventsList(this.props.events)
                : "No event"
            }
            </div>
            <button onClick={this.addEvent}>Add Event</button>
            </div>
        )
  }
}