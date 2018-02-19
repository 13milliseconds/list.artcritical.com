import React from 'react';
import ListActions from '../../actions/ListActions';
//COMPONENTS
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Date from '../blocks/DateBlock.jsx';
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
               <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <div className="formSection">
                          <Input name="name" placeholder="Name" type="text" value={this.props.name} onChange={this.handleChange} />
                        </div> 
                    </FormGroup>
                    
                    <FormGroup>
                        <Label>Slug</Label>
                        <div className="formSection">
                          <Input disabled={true} name="slug" type="text" value={this.props.slug} onChange={this.handleChange} />
                        </div> 
                    </FormGroup>

                    <FormGroup>
                        <Label>Address</Label>
                        <div className="formSection">
                          <Input name="address" placeholder="Address" type="text" value={this.props.address} onChange={this.handleChange} />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label>City</Label>
                        <div className="formSection">
                          <Input name="city" placeholder="City" type="text" value={this.props.city} onChange={this.handleChange} />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label>Neighborhood</Label>
                        <div className="formSection">
                          <NeighborhoodSelect selected={this.props.neighborhood} onChange={this.handleChange}/>
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label>State</Label>
                        <div className="formSection">
                          <Input name="state" placeholder="State" type="text" value={this.props.state} onChange={this.handleChange} />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label>Zipcode</Label>
                        <div className="formSection">
                          <Input name="zipcode" placeholder="Zipcode" type="number" value={this.props.zipcode} onChange={this.handleChange} />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label>Coordinates</Label>
                        <div className="formSection">
                            <Input name="lat" type="text" value={coordinates.lat} onChange={this.handleChange} />
                            <Input name="long" type="text" value={coordinates.long} onChange={this.handleChange} />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label>Website</Label>
                        <div className="formSection">
                          <Input name="website" placeholder="Website" type="text" value={this.props.website} onChange={this.handleChange} />
                        </div>
                    </FormGroup>
				   
				   {this.props.updated_by
				   		?(this.props.created_at === this.props.updated_at) 
							? 
					   		<p> Created on <Date date = {this.props.updated_at}/> by {this.props.updated_by.name}.</p>
							:
					   		<p> Updated on <Date date = {this.props.updated_at}/> by {this.props.updated_by.name}.</p>
				   		: ''
				   	}

                    <FormGroup>
                        <Button onClick={this.props.handleSubmit}>{this.props._id ? 'Update' : 'Create'}</Button>
                            {this.props.loading && 
                                <div className='loading'>loading</div>
                            }
                            {this.props.success.updatevenue && 
                                <div className='success'>Saved!</div>
                            }
							{this.props.success.deleted && 
                                <div className='deleted'>Deleted!</div>
                            }
                            {this.props.error.general && 
                                <div className='error'>{this.props.error.general}</div>
                            }
                            { (this.props.handleDelete && this.props._id) ?
                                <Button className="delete" onClick={this.props.handleDelete}>Delete</Button>
                            :
                                null
                            }
                    </FormGroup>     
                </Form>      
            </div>
        );
    }
}