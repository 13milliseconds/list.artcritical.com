import React from 'react';
import {Link} from 'react-router';
import ListActions from '../actions/ListActions';
import Display from '../actions/displayActions';
//COMPONENTS
import Listing from './listing.jsx';


export default class CurrentPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        ListActions.getCurrent();
    }

    render() {
        let mainNH = ''
        let secondaryNH = ''
        let newMainNH = ''
        let newSecondaryNH = ''
        
        let city = (name) => (<h1>{name}</h1>)
        let neighborhood = (name) => (<h2>{name}</h2>)
        
        let thelistRender = currentListings => currentListings.map((listing) => {
            
            newSecondaryNH = listing.venue.neighborhood;
            
            if ( newSecondaryNH !== secondaryNH) {
                // Update neighborhood
                secondaryNH = newSecondaryNH
                newSecondaryNH = Display.displayNeighborhood(secondaryNH)
                newMainNH = Display.displayCity(secondaryNH)
                if (newMainNH !== mainNH) {
                    mainNH = newMainNH
                    // Removed the city(blah), to be replaced with an anchor
                    return (
                        <div key={listing._id}>
                            {neighborhood(newSecondaryNH)}
                            <Listing {...listing} mylist = {this.props.mylist}/>
                        </div>
                    )    
                } else{
                    return (
                        <div key={listing._id}>
                            {neighborhood(newSecondaryNH)}
                            <Listing {...listing} mylist = {this.props.mylist}/>
                        </div>
                    ) 
                }
                
                
            } else {
                return (
                  <Listing {...listing} key={listing._id} mylist = {this.props.mylist}/>
              )   
            }
        });
        
        return ( 
            <div className = "home">
                <h2>Current</h2>
                <div className = "listingsWrap">
                    {thelistRender(this.props.currentListings)}
                    {this.props.loading.current? 'Loading...': ''}
                </div>
            </div>
        );
    }
}