import React from 'react'
import ToggleButton from 'react-toggle-button'
import ListActions from '../../actions/ListActions'
import {browserHistory} from 'react-router';
//Components
import DateRange from './formDateRange'
import DateSingle from './formDateSingle'
import Select from './formSelect'
import ThumbnailInput from './ThumbnailInput'



export default class ListingForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            event: this.props.event,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
      }
    
    handleChange (event) {
        //Update values of inputs
        ListActions.listingInfoChange(event);
    }
    
    //Search as the user types in select box
    handleSelectChange (data) {
        if (data) {
            if (data.label == data.value) {
                // Create a new venue
				ListActions.venueInfoChange({
					name: 'name', 
					value: data.value
				})
				browserHistory.push('/account/editvenue');
            } else {
                //Fetch all the venue info
                ListActions.getVenueInfo(data.value);
            }    
        } else {
            ListActions.resetVenue();
        }   
    }
    
    render() {
        
        //how ot get option for select element
        const getOptions = (input) => {
            if (input){
                return fetch('/venues/find/' + input)
                .then((response) => {
                  return response.json();
                }).then((json) => {
                  return { options: json };
                });   
            } else {
                return Promise.resolve({ options: [] });
            }
        }
        
        let venueData = { value: this.props.venue._id, label: this.props.venue.name}
        
        let deleteButton = this.props.handleDelete?
                <button className="delete" onClick={this.props.handleDelete}>Delete</button>
            :
                null

        
        return ( 
            <div id="listingForm">
               
                <label>Name</label>
                 <div className="formSection">
                  <input name="name" placeholder="Event name" type="text" value={this.props.name} onChange={this.handleChange} />
                    </div>
                
                <label>Venue</label>
                 <div className="formSection">
                  <Select value={venueData} handleSelectChange={this.handleSelectChange} getOptions={getOptions} />
                    </div>
                
                
                <label>Event</label>
                <div className="formSection">
                <ToggleButton
                  value={this.props.event}
                  onToggle={(value) => {
                    this.handleChange({'event': value})
                  }} />
                </div>
                  
                <label> Dates </label>
                <div className="formSection">
                   {this.props.event ? //If an event
                        <DateSingle startDate={this.props.start} onDatesChange={this.handleChange}/>
                        : // If not an event
                        <DateRange startDate={this.props.start} endDate={this.props.end} onDatesChange={this.handleChange}/>
                   }
                </div>  
                
                
                <label>Description</label>
                 <div className="formSection">
                  <textarea name="description" type="text" value={this.props.description} onChange={this.handleChange} />
                </div>
                
                <label>Thumbnail</label>
                <ThumbnailInput {...this.props} /> 
                
                <button onClick={this.props.handleSubmit}>Submit</button>
                {this.props.loading && 
                    <div className='loading'>loading</div>
                }
                {this.props.success && 
                    <div className='success'>Saved!</div>
                }
                {this.props.error.general && 
                    <div className='error'>{this.props.error.savelisting.general}</div>
                }
                {deleteButton}
                
            </div>
        );
    }
}