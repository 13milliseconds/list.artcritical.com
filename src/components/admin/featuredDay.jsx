import React from 'react';
import Display from '../../actions/displayActions';
import ListActions from '../../actions/ListActions';
//Components
import Select from '../forms/formSelect';
import FeaturedForm from '../forms/featuredForm';
import FeatureBlock from '../blocks/featureBlock';


export default class ListingEdit extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
      }
    
    componentWillMount(){
        ListActions.featureLoad({date: this.props.label});
    }
    
    componentWillUnmount(){
        ListActions.featureReset();
    }
    
    
    // Add the listing to the database
    handleSubmit(event) {
        const id = this.props.feature._id ? this.props.feature._id : null
        let newFeature = {
            _id:    id,
            date:   this.props.label,
            text:   this.props.feature.text,
            list:   this.props.feature.list._id,
            venue:  this.props.feature.list.venue._id
        }
        let newThumbnail = {
            _id:    this.props.feature.list._id,
            image:  this.props.feature.list.image
        }
        ListActions.updateFeature(newFeature)
        ListActions.updateListing(newThumbnail)
      }
    
    handleSelectChange (data) {
        if (data.value){
            //Fetch all the listing info
            ListActions.getListingInfo(data.value);
        }
    }
    
    render() {
        
        //how ot get option for select element
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
                    <Select value={{label: this.props.feature.list.name, value: this.props.feature.list._id}} handleSelectChange={this.handleSelectChange} getOptions={getOptions} />
                    <FeaturedForm {...this.props.feature}  handleSubmit={this.handleSubmit} />
                </div>
                <div className="column-1of3">
                    {this.props.error ? this.props.error : <FeatureBlock feature={this.props.feature}/>}
                </div>
            </div>
        );
    }
}