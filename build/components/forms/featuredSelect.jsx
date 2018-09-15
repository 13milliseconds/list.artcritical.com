import React from 'react';
import ListActions from '../../actions/ListActions'
import EventActions from '../../actions/EventActions'
//Components
import Select from './formSelect';
import FeaturedForm from './featuredForm';


export default class FeaturedSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleListingChange = this.handleListingChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onTextChange = this.onTextChange.bind(this)
      }
    
    
    // Add the listing to the database
    handleSubmit() {
        let newFeature = this.props.feature
        newFeature._id = this.props.feature._id || null
        newFeature.date = this.props.date
        newFeature.text = this.state.text
        newFeature.venue = this.props.feature.type === 'event'
            ? this.props.feature.event.venue._id
            : this.props.feature.list.venue._id

        ListActions.updateFeature(newFeature)
      }

      handleDelete() {
        ListActions.deleteFeature(this.props.feature._id, this.props.dayNumber)
      }
	
	handleChange (event) {
        ListActions.featureInfoChange(event, this.props.dayNumber);
    }
    
    handleListingChange (data) {
        if (data) {

            this.setState({
                type: data.type
            })

            data.value && data.type === 'event' 
                ? EventActions.getEventInfo(data.value, this.props.dayNumber)
                : ListActions.getListingInfo(data.value, this.props.dayNumber)
        } else {
            ListActions.featureReset(this.props.dayNumber)
        }
    }

    onTextChange(newText){
        this.setState({
            text: newText
        })
    }
    
    render() {
		
        let featureItem = this.props.feature.type == 'event'
                    ? this.props.feature.event ? this.props.feature.event : {name: '', _id:''}
                    : this.props.feature.list ? this.props.feature.list : {name: '', _id:''}
        
        //how to get option for select element
        const getAllOptions = (input) => {
          return fetch('/list/findall/' + input)
            .then((response) => {
              return response.json();
            }).then((json) => {
              return { options: json };
            });
        }
        
        return ( 
            <div className="featureFormWrap">
                    <Select value={{label: featureItem.name, value: featureItem._id}} handleSelectChange={this.handleListingChange} getOptions={getAllOptions} />
                    {(this.props.feature.list || this.props.feature.event) &&
                        <FeaturedForm {...this.props.feature} 
                            number={this.props.dayNumber} 
                            handleChange={this.handleChange} 
                            handleDelete={this.handleDelete}
                            handleSubmit={this.handleSubmit} 
                            onTextChange={this.onTextChange}
                            error={this.props.error}
                            success={this.props.success}/>
                    }
            </div>
        );
    }
}