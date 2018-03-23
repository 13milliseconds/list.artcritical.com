import React from 'react';
import Display from '../../actions/displayActions';
import ListActions from '../../actions/ListActions';
//Components
import Select from '../forms/formSelect';
import FeaturedForm from '../forms/featuredForm';
import FeatureBlock from '../blocks/featureBlock';


export default class FeaturedDay extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleChange = this.handleChange.bind(this)
      }
    
    componentWillUnmount(){
        ListActions.featureReset();
    }
	
	componentWillReceiveProps(nextProps){
		
	}
    
    
    // Add the listing to the database
    handleSubmit(event) {
        const id = this.props.feature._id || null
        let newFeature = {
            _id:    id,
            date:   this.props.date,
            text:   this.props.feature.text,
            list:   this.props.feature.list._id,
			venue:  this.props.feature.list.venue._id
        }
        let newThumbnail = {
            _id:    this.props.feature.list._id,
            image:  this.props.feature.list.image
        }
        ListActions.updateFeature(newFeature)
        ListActions.updateListing(newThumbnail, this.props.dayNumber)
      }
	
	handleChange (event) {
        ListActions.featureInfoChange(event, this.props.dayNumber);
    }
    
    handleSelectChange (data) {
        if (data.value){
            //Fetch all the listing info
            ListActions.getListingInfo(data.value, this.props.dayNumber); 
        }
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
        
        return ( 
            <div>
                <div className="column-2of3">
                    <Select value={{label: list.name, value: list._id}} handleSelectChange={this.handleSelectChange} getOptions={getOptions} />
                    <FeaturedForm {...this.props.feature} number={this.props.dayNumber} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
                <div className="column-1of3">
                    {this.props.feature.list ? <FeatureBlock feature={this.props.feature} user={this.props.user} /> : this.props.error }
                </div>
            </div>
        );
    }
}