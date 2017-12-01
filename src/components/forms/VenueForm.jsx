import React from 'react';
import ToggleButton from 'react-toggle-button';
import ListActions from '../../actions/ListActions';
//Components
import NeighborhoodSelect from './NeighborhoodSelect'

var MapboxClient = require('mapbox');
var client = new MapboxClient(process.env.MapboxAccessToken);


export default class VenueForm extends React.Component {

    constructor(props) {
        super(props)
		this.state = {
			fullAdress: null
		}

        this.handleChange = this.handleChange.bind(this)
      }
    
    handleChange (event) {
        //Update values of inputs
        ListActions.venueInfoChange(event.target)
    }
		
	componentWillMount(){
		//Define the full address
        this.props.address 
				? this.setState({
					fullAdress: this.props.address + ' ' + this.props.city + ', ' + this.props.state + ' ' + this.props.zipcode
				})
				: null
	}
		
	componentWillUpdate(nextProps, nextState){
		const nextFullAdress = nextProps.address
								? nextProps.address + ' ' + nextProps.city + ', ' + nextProps.state + ' ' + nextProps.zipcode
								: null
		if (nextFullAdress !== this.state.fullAdress && nextFullAdress !== null) {
			
			this.setState({
				fullAdress: nextFullAdress
			})
			this.calculateCoords(nextFullAdress)
		}
	}
	
	calculateCoords(fullAdress){
		client.geocodeForward(fullAdress, function(err, data, res) {
			if (data.features[0]){
				const newCoords = data.features[0].center
				ListActions.coordinatesChange(newCoords)	
			}
		})
	}
    
    render() {
		
		let coordinates = this.props.coordinates || {}
        
        if (this.state.fullAdress && !coordinates) {
            this.calculateCoords(this.state.fullAdress);
        }
        
        return ( 
            <div id="venueForm">
               
                <label>Name</label>
                <div className="formSection">
                  <input name="name" placeholder="Name" type="text" value={this.props.name} onChange={this.handleChange} />
                </div> 
                
                <label>Slug</label>
                <div className="formSection">
                  <input disabled={true} name="slug" type="text" value={this.props.slug} onChange={this.handleChange} />
                </div> 
                
                <label>Address</label>
                <div className="formSection">
                  <input name="address" placeholder="Address" type="text" value={this.props.address} onChange={this.handleChange} />
                </div>
                
                <label>City</label>
                <div className="formSection">
                  <input name="city" placeholder="City" type="text" value={this.props.city} onChange={this.handleChange} />
                </div>
                
                <label>Neighborhood</label>
                <div className="formSection">
                  <NeighborhoodSelect selected={this.props.neighborhood} onChange={this.handleChange}/>
                </div>
				
				<label>State</label>
                <div className="formSection">
                  <input name="state" placeholder="State" type="text" value={this.props.state} onChange={this.handleChange} />
                </div>
				
				<label>Zipcode</label>
                <div className="formSection">
                  <input name="zipcode" placeholder="Zipcode" type="number" value={this.props.zipcode} onChange={this.handleChange} />
                </div>
                
                <label>Coordinates</label>
                <div className="formSection">
                    <input name="lat" type="text" value={coordinates.lat} onChange={this.handleChange} />
                    <input name="long" type="text" value={coordinates.long} onChange={this.handleChange} />
                </div>
                
                <label>Website</label>
                <div className="formSection">
                  <input name="website" placeholder="Website" type="text" value={this.props.website} onChange={this.handleChange} />
                </div>
                
                
                <button onClick={this.props.handleSubmit}>{this.props._id ? 'Update' : 'Save'}</button>
                {this.props.loading && 
                    <div className='loading'>loading</div>
                }
                {this.props.success && 
                    <div className='success'>Saved!</div>
                }
                {this.props.error.general && 
                    <div className='error'>{this.props.error.general}</div>
                }
                { (this.props.handleDelete && this.props._id) ?
					<button className="delete" onClick={this.props.handleDelete}>Delete</button>
				:
					null
				}
                
            </div>
        );
    }
}