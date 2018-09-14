import React from 'react';
import ListActions from '../../actions/ListActions'
import EventActions from '../../actions/EventActions'
//Components
import {Input} from 'reactstrap'
import Select from '../forms/formSelect';
import FeaturedForm from '../forms/featuredForm';
import FeatureBlock from '../blocks/featureBlock';


export default class FeaturedDay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleListingChange = this.handleListingChange.bind(this)
        this.handleEventChange = this.handleEventChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onTextChange = this.onTextChange.bind(this)
      }
    
    
    // Add the listing to the database
    handleSubmit() {
        const id = this.props.feature._id || null
        let newFeature = {
            _id:    id,
            date:   this.props.date,
            text:   this.state.text,
            list:   this.props.feature.list,
			venue:  this.props.feature.list.venue._id
        }
        ListActions.updateFeature(newFeature)
      }
	
	handleChange (event) {
        ListActions.featureInfoChange(event, this.props.dayNumber);
    }
    typeChange(event){
        console.log(event.target)
    }
    
    handleListingChange (data) {
        data
            ? data.value && ListActions.getListingInfo(data.value, this.props.dayNumber)
            : ListActions.featureReset(this.props.dayNumber)
    }
    handleEventChange (data) {
        data
            ? data.value && EventActions.getEventInfo(data.value, this.props.dayNumber)
            : ListActions.featureReset(this.props.dayNumber)
    }

    onTextChange(newText){
        this.setState({
            text: newText
        })
    }
    
    render() {
		
		let list = this.props.feature.list ? this.props.feature.list : {name: '', _id:''}
        
        //how to get option for select element
        const getOptions = (input) => {
          return fetch('/list/find/' + input)
            .then((response) => {
              return response.json();
            }).then((json) => {
              return { options: json };
            });
        }
        const getEventOptions = (input) => {
            return fetch('/event/find/' + input)
              .then((response) => {
                return response.json();
              }).then((json) => {
                return { options: json };
              });
          }
        
        return ( 
            <div>
                <div className="featureFormWrap">
                <Input type="select" name='featureType' id='featureType' onChange={this.typeChange} >
                    <option value='listing'>listing</option>
                    <option  value='event'>event</option>
                </Input>
                {this.props.feature.type === 'event' 
                    ? <Select value={{label: list.name, value: list._id}} handleSelectChange={this.handleEventChange} getOptions={getEventOptions} />
                    : <Select value={{label: list.name, value: list._id}} handleSelectChange={this.handleListingChange} getOptions={getOptions} />
                }
                    {this.props.feature.list &&
                        <FeaturedForm {...this.props.feature} 
                            number={this.props.dayNumber} 
                            handleChange={this.handleChange} 
                            handleSubmit={this.handleSubmit} 
                            onTextChange={this.onTextChange}
                            error={this.props.error}
                            success={this.props.success}/>
                    }
                </div>
                <div className="preview">
                <h4>Preview</h4>
                    { this.props.feature.list && <FeatureBlock feature={this.props.feature} user={this.props.user}/> }
                </div>
            </div>
        );
    }
}