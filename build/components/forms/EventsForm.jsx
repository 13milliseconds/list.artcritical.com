import React from 'react';
import ListActions from '../../actions/ListActions'
//Components
import DateSingle from './formDateSingle'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {Input} from 'reactstrap';

export default class EventsForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.addEvent = this.addEvent.bind(this)
        this.onChange = this.onChange.bind(this)
      }

    onChange(e){
            //Update values of inputs
            ListActions.eventsInfoChange(e);
            this.props.onChange();
            console.log(this.props.events)
    }

    addEvent() {
        ListActions.addEvent()
    }

    removeEvent(index) {
        ListActions.removeEvent(index)
    }
        
    render() {

        let eventsList = events => events.map((event, index) => {
            return <div className="event" key={index}>
                <div className="eventInfo">
                    <Input type="select"
                        name="type"
                        value={event.type}
                        defaultValue="reception"
                        data-index={index}
                        onChange={this.onChange} >
                        <option value="reception">Reception</option>
                        <option value="closing">Closing</option>
                        <option value="other">Other</option>
                    </Input>
                    <DateSingle event={index} startDate={event.date} onDatesChange={this.onChange}/>
                    {event.type === "other" &&
                        <input 
                        type="text" 
                        name="name"
                        data-index={index}
                        value={event.name}
                        onChange={this.onChange} />
                    }
                    <Input 
                        type="textarea"
                        name="description" 
                        value={event.description} 
                        data-index={index}
                        onChange={this.onChange} />
                </div>
                <div className="moreOrLess">
                    <a className="iconLink" onClick={e => this.removeEvent(index)}><FontAwesomeIcon icon={["fal", "minus-circle"]}/></a>
                    {index === (events.length - 1) && 
                        <a className="iconLink" onClick={this.addEvent}><FontAwesomeIcon icon={["fal", "plus-circle"]}/></a>
                    }
                </div>
            </div>
        })

        return (
            <div className="eventsform">
            <div className="eventsWrap">
            {this.props.events.length > 0
                ? eventsList(this.props.events)
                : <a className="iconLink" onClick={this.addEvent}><FontAwesomeIcon icon={["fal", "plus-circle"]}/></a>
            }
            </div>
            </div>
        )
  }
}