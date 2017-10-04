import React from 'react';
import ToggleButton from 'react-toggle-button';
//Components
import Listing from '../listing';
import DateRange from './formDateRange';
import DateSingle from './formDateSingle';
import Select from './formSelect';
import ThumbnailInput from './ThumbnailInput';
import Display from '../../actions/displayActions';



export default class ListingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            startDate: null,
            endDate: null,
            venue: { label: '', value: '' },
            description: '',
            venueInfo : {address: ''},
            event: false
        };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetListState = this.resetListState.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    resetListState () {
        this.setState({
            name: '',
            startDate: '',
            endDate: '',
            venue: { label: '', value: '' },
            description: '',
            venueInfo : {}
        });
    }
    
    //Update values of inputs
    handleChange (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }
    
    //Search as the user types in select box
    handleSelectChange (data) {
        this.setState({
            venue: { 
                label: data.label, 
                value: data.value
            }
            });
        if (data.label == data.value) {
            // Create a new venue
            
        } else {
            //Fetch all the venue info
            return fetch('/venues/getinfo/' + data.value)
            .then((response) => {
              return response.json();
            }).then((json) => {
              this.setState({
                venueInfo: json[0]
                });
            });
        }
    }
    
    
    
    // Add the listing to the database
    handleSubmit(event) {
        let newEvent = {
            name: this.state.name,
            start: this.state.startDate,
            end: this.state.endDate,
            description: this.state.description,
            neighborhood: this.state.venueInfo.neighborhood,
            venue: this.state.venue.value,
            image: this.props.image
        }
        Display.saveListing(newEvent)
        this.resetListState()
        event.preventDefault();
      }
    
    //Handle change of Dates
    onDatesChange(value){
        this.setState(value)
    }
    
    render() {
        
        //how ot get option for select element
        const getOptions = (input) => {
          return fetch('/venues/find/' + input)
            .then((response) => {
              return response.json();
            }).then((json) => {
              return { options: json };
            });
        }
        
        
        let listing = {
            name: this.state.name,
            start: this.state.startDate,
            end: this.state.endDate,
            venue: {
                _id: this.state.venue.value,
                name: this.state.venue.label,
                address: this.state.venueInfo.address
            },
            description: this.state.description,
            neighborhood: this.state.venueInfo.neighborhood,
            event: this.state.event,
            image: this.props.image
        }

        
        return ( 
            <div>
            <div id="newlistingForm">
            <h2>New Event</h2>
            <form onSubmit={this.handleSubmit}>
               
                <label>Name</label>
                 <div className="formSection">
                  <input name="name" placeholder="Event name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>
                
                <label>Venue</label>
                 <div className="formSection">
                  <Select value={this.state.venue} handleSelectChange={this.handleSelectChange} getOptions={getOptions} />
                    </div>
                
                
                <label>Event</label>
                <div className="formSection">
                <ToggleButton
                  value={ this.state.event || false }
                  onToggle={(value) => {
                    this.setState({
                      event: !value,
                    })
                  }} />
                </div>
                  
                <label> Dates </label>
                <div className="formSection">
                   {this.state.event ? //If an event
                        <DateSingle startDate={this.state.startDate} endDate={this.state.endDate}  onDatesChange={this.onDatesChange}/>
                        : // If not an event
                        <DateRange startDate={this.state.startDate} endDate={this.state.endDate} onDatesChange={this.onDatesChange}/>
                   }
                </div>  
                
                
                <label>Description</label>
                 <div className="formSection">
                  <textarea name="description" type="text" value={this.state.description} onChange={this.handleChange} />
                </div>
                
                <label>Thumbnail</label>
                <ThumbnailInput {...this.props} />
                
                <input type="submit" value="Submit" />
                
            </form>
            </div>
            <div id="newlistingDemo">
            <h2>Listing Preview</h2>
            <Listing {...listing} />
            </div>
            </div>
        );
    }
}