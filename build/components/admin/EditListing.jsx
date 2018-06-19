import React from 'react';
import ListActions from '../../actions/ListActions';
//Components
import VenueBlock from '../blocks/VenueBlock';
import Select from '../forms/formSelect';
import ListingForm from '../forms/ListingForm';
import { Button } from 'reactstrap'



export default class ListingEdit extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            formDisplay: false,
        }

        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.onCreateNew = this.onCreateNew.bind(this)   
      }
    
    componentWillUnmount(){
        ListActions.listingEditReset();
    }
    
    handleSelectChange (data) {
        if (data){
            this.setState({
                formDisplay: true
            })
			if (data.label == data.value) {
				//New Listing
				ListActions.listingInfoChange({target:{
					name: 'name',
					value: data.value
				}})
			} else {
				//Fetch all the venue info
            	ListActions.getListingInfo(data.value);	
			}
        } else {
			//Reset
            ListActions.listingEditReset();
            this.setState({
                formDisplay: false
            })
		}
    }

    onCreateNew(){
        ListActions.listingEditReset();
        this.setState({
            formDisplay: true
        })
    }
    
    render() {
        
        //how to get option for select element
        const getOptions = (input) => {
            if (input) {
                return fetch('/list/find/' + input)
                .then((response) => {
                  return response.json();
                }).then((json) => {
                  return { options: json };
                });   
            } else {
                return Promise.resolve({ options: [] });
            }
        }
        
        return ( 
            <div className="listingEdit">
                <h3>Create or Edit Listings</h3>
                <div id="ListingList">
                        <Button onClick={this.onCreateNew}>New</Button>
                        <Select value={{
                            value: this.props.listingEdit._id, 
                            label: this.props.listingEdit.name}
                        } 
                        handleSelectChange={this.handleSelectChange} 
                        getOptions={getOptions} 
                        />
                </div>
                {this.state.formDisplay && 
                    <ListingForm 
                        listing={this.props.listingEdit} 
                        error={this.props.error.updatelisting} 
                        loading={this.props.loading.updatelisting}
                        success={this.props.success}
                        allArtists={this.props.allArtists}/>
                }
            </div>
        );
    }
}