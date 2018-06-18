import React from 'react';
import Display from '../../actions/displayActions';
import ListActions from '../../actions/ListActions';
//Components
import VenueBlock from '../blocks/VenueBlock';
import Select from '../forms/formSelect';
import ListingForm from '../forms/ListingForm';



export default class ListingEdit extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            formDisplay: false,
        }

        this.handleSelectChange = this.handleSelectChange.bind(this);        
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
            <div>
                <h3>Edit Listing</h3>
                <div id="ListingList">
                        <Select value={{
                            value: this.props.listingEdit._id, 
                            label: this.props.listingEdit.name}
                        } 
                        handleSelectChange={this.handleSelectChange} 
                        getOptions={getOptions} 
                        />
                </div>
                <div id="ListingInfo">
                    <div className="medium">
                        {this.props.listingEdit.venue &&
                            <VenueBlock listings={[this.props.listingEdit]} user=""/>
                        }
                    </div>
                </div>
                <div className="listingForm">
                    {this.state.formDisplay && 
                        <ListingForm 
                            listing={this.props.listingEdit} 
                            error={this.props.error.updatelisting} 
                            loading={this.props.loading.updatelisting}
                            success={this.props.success}
                            allArtists={this.props.allArtists}/>
                    }
                </div>
            </div>
        );
    }
}