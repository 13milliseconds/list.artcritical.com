import React from 'react';
import EventActions from '../../actions/EventActions';
//Components
import Select from '../forms/formSelect';
import EventForm from '../forms/EventForm';
import { Button } from 'reactstrap'



export default class EventEdit extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            formDisplay: false,
        }

        //Function Binding
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.onCreateNew = this.onCreateNew.bind(this)   
      }
    
    componentWillUnmount(){
        EventActions.eventEditReset();
    }
    
    handleSelectChange (data) {
        if (data){
            this.setState({
                formDisplay: true
            })
            //Fetch all the venue info
            EventActions.getEventInfo(data.value);	
        } else {
			//Reset
            EventActions.eventEditReset();
            this.setState({
                formDisplay: false
            })
		}
    }

    onCreateNew(){
        EventActions.eventEditReset();
        this.setState({
            formDisplay: true
        })
    }
    
    render() {
        
        //how to get option for select element
        const getOptions = (input) => {
            if (input) {
                return fetch('/event/find/' + input)
                .then((response) => {
                  return response.json();
                }).then((json) => {
                  return { options: json };
                });   
            } else {
                return Promise.resolve({ options: [] });
            }
        }

        //Have a select value only if editing an existing event
        let selectValue = this.props.eventEdit._id && {
                                                        value: this.props.eventEdit._id, 
                                                        label: this.props.eventEdit.name
                                                    }
        
        return ( 
            <div className="eventEdit">
                <h3>Create or Edit Events</h3>
                <div className="editHeader">
                        <Button onClick={this.onCreateNew}>New</Button>
                        <div className="search">
                            <Select value={selectValue}
                                    handleSelectChange={this.handleSelectChange} 
                                    getOptions={getOptions} />
                        </div>
                </div>
                {this.state.formDisplay && 
                    <EventForm 
                        event={this.props.eventEdit} 
                        error={this.props.error} 
                        success={this.props.success}
                        allArtists={this.props.allArtists}/>
                }
            </div>
        );
    }
}