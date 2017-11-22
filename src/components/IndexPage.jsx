import React from 'react';
import {Link} from 'react-router';
//ACTIONS
import ListActions from '../actions/ListActions';
import AuthActions from '../actions/AuthActions';
import Display from '../actions/displayActions';
//COMPONENTS
import Listing from './listing.jsx';


export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Get all listings
        ListActions.getAll();
    }

    render() {
        let nh = ''
        let thelist = mylist => this.props.allListings.map((listing) => {
            let newNh = listing.neighborhood;
            
            if ( newNh !== nh) {
                nh = newNh
                newNh = Display.displayCity(nh)
                return (
                    <div key={listing._id}>
                        <h2>{newNh}</h2>
                        <Listing 
                            {...listing} 
                            user={this.props.user}
                            addToList={(e) => this.addToList(e, listing)}
                            />
                    </div>
                )
            } else {
                return (
                  <Listing 
                      {...listing}
                        key={listing._id}
                      mylist = {mylist}
                      />
              )   
            }
        });
        
        
        return ( 
            <div className = "home">
                <h2>Landing page</h2>
                <div className = "listingsWrap">
                    {thelist(this.props.mylist)}
                </div>
            </div>
        );
    }
}