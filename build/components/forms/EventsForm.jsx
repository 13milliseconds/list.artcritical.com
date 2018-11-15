import React from 'react';
import ListActions from '../../actions/ListActions'
import EventActions from '../../actions/EventActions'
//Components
import DateSingle from './formDateSingle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ConfirmModal from './confirmModal'
import {Input} from 'reactstrap';

export default class EventsForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            deleteModal: false,
            eventToDelete: '',
            error: '',
            success: false
        }

        this.addEvent = this.addEvent.bind(this)
        this.onChange = this.onChange.bind(this)
        this.removeEvent = this.removeEvent.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
      }

    toggleModal(modalName) {
        this.setState({
            [modalName]: !this.state[modalName]
        })
    }

    //Delete the listing
    handleDelete() {
        var id = this.props.events[this.state.eventToDelete]._id
        console.log('deleting ' + id)
        EventActions.deleteEvent(id)
        ListActions.removeEvent(this.state.eventToDelete)
        this.setState({
            success: true,
            eventToDelete: '',
        })
        var that = this
        setTimeout(() => {
            that.setState({
                deleteModal: false,
                success: false
            })
        }, 1000)
    }

    onChange(e){
            //Update values of inputs
            ListActions.eventsInfoChange(e);
            this.props.onChange();
    }

    addEvent() {
        ListActions.addEvent()
    }

    removeEvent(index) {
        if (this.props.events[index]._id){
            console.log('Deleting an event')
            this.setState({
                eventToDelete: index,
                deleteModal: true
            })
        } else {
            ListActions.removeEvent(index)
        }
    }
        
    render() {

        let eventsList = events => events.map((event, index) => {
            return <div className="event" key={index}>
                <div className="eventInfo">
                    <Input type="select"
                        name="type"
                        value={event && event.type}
                        data-index={index}
                        onChange={this.onChange} >
                        <option value="reception">Reception</option>
                        <option value="closing">Closing</option>
                        <option value="other">Other</option>
                    </Input>
                    <DateSingle event={index} startDate={event && event.date} onDatesChange={this.onChange}/>
                    {event && event.type === "other" &&
                        <input 
                        type="text" 
                        name="name"
                        placeholder="Name"
                        data-index={index}
                        value={event && event.name}
                        onChange={this.onChange} />
                    }
                    <Input 
                        type="textarea"
                        name="description" 
                        value={event && event.description} 
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

            {this.state.deleteModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.handleDelete}
                                                        name="deleteModal"
                                                        textTitle="Delete"
                                                        textAction="delete this Listing"
                                                        textConfirm="Deleted!"
                                                        error={this.state.error}
                                                        success={this.state.success}/>}
            </div>
        )
  }
}