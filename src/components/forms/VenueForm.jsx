import React from 'react';
import ListActions from '../../actions/ListActions';
//COMPONENTS
import ConfirmModal from './confirmModal'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Date from '../blocks/DateBlock.jsx';
import NeighborhoodSelect from './NeighborhoodSelect'

var MapboxClient = require('mapbox');
var client = new MapboxClient(process.env.MapboxAccessToken);


export default class VenueForm extends React.Component {

    constructor(props) {
        super(props)
		this.state = {
			fullAdress: null,
            event: this.props.event,
            updatevisible: false,
            deletevisible: false,
            createvisible: false,
            wasChanged: false 
		}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onConfirm = this.onConfirm.bind(this)
        this.onDeleteConfirm = this.onDeleteConfirm.bind(this)
      }
    
    handleChange (event) {
        //Update values of inputs
        ListActions.venueInfoChange(event.target);
        this.setState({
            wasChanged:true
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let venue = this.props

        //Make sure that the listing copies the venue's neighborhood

        if (this.props._id){
            //Edit the current listing
            ListActions.updateVenue(venue)
            this.setState({ 
                updatevisible: false
            })
        } 
      }


    onConfirm(event) {
        event.preventDefault();
        this.setState({ 
            updatevisible: true
        })
    }

    onDeleteConfirm(event) {
        event.preventDefault();
        this.setState({ 
            deletevisible: true
        });
    }


		
	componentWillMount(){
        //Define the full address
        this.props.address1 
				? this.setState({
                    fullAdress: this.props.address1
                                + (this.props.address2? ' ' + this.props.address2 : '')
                                + (this.props.city? ' ' + this.props.city : '')
                                + (this.props.state? ', ' + this.props.state : '')
                                + (this.props.zipcode? ' ' + this.props.zipcode : '')
				})
				: null
	}
		
	componentWillUpdate(nextProps, nextState){
		const nextFullAdress = nextProps.address1
                                ? nextProps.address1
                                    + (nextProps.address2? ' ' + nextProps.address2 : '')
                                    + (nextProps.city? ' ' + nextProps.city : '')
                                    + (nextProps.state? ', ' + nextProps.state : '') 
                                    + (nextProps.zipcode? ' ' + nextProps.zipcode : '')
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

         let deleteButton = this.props._id &&
                <Button className="delete" color="danger" onClick={this.onDeleteConfirm}>Delete</Button>
		
		let coordinates = this.props.coordinates || {}
        
        if (this.state.fullAdress && !coordinates.lat) {
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
                          <Input name="address1" placeholder="Line 1" type="text" value={this.props.address1} onChange={this.handleChange} />
                          <Input name="address2" placeholder="Line 2" type="text" value={this.props.address2} onChange={this.handleChange} />
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
                            {this.props._id ? <Button onClick={this.onConfirm} disabled={!this.state.wasChanged}>Update</Button> : <Button onClick={this.onCreateConfirm}>Create</Button>}
                            {deleteButton}
                    </FormGroup>
                    {this.state.updatevisible && <ConfirmModal 
                                                        modalVisible={this.state.updatevisible}
                                                        handleSubmit={this.handleSubmit}
                                                        textTitle="Update"
                                                        textAction="save this Listing"
                                                        textConfirm="Saved!"
                                                        error={this.props.error.general}
                                                        success={this.props.success.updatelisting}/>}
                       {this.state.createvisible && <ConfirmModal 
                                                        modalVisible={this.state.createvisible}
                                                        handleSubmit={this.handleSubmit}
                                                        textTitle="Create"
                                                        textAction="create this Listing"
                                                        textConfirm="Created!"
                                                        error={this.props.error.general}
                                                        success={this.props.success.savelisting}/>}
                        {this.state.deletevisible && <ConfirmModal 
                                                        modalVisible={this.state.deletevisible}
                                                        handleSubmit={this.handleDelete}
                                                        textTitle="Delete"
                                                        textAction="delete this Listing"
                                                        textConfirm="Deleted!"
                                                        error={this.props.error.general}
                                                        success={this.props.success.deletelisting}/>} 
                </Form>      

            </div>
        );
    }
}