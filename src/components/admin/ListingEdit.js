import React from 'react';
import Listing from '../listing';
import Select from './formSelect';
import Display from '../../actions/displayActions';



export default class ListingEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listing: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
    // Add the listing to the database
    handleSubmit(event) {
        
      }
    
    handleSelectChange () {
        
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
            <div id="ListingList">
            <form onSubmit={this.handleSubmit}>
                  <Select value={this.state.listing} handleSelectChange={this.handleSelectChange} getOptions={getOptions} />
                <input type="submit" value="Submit" />
            </form>
            </div>
            <div id="ListingInfo">
            </div>
            </div>
        );
    }
}