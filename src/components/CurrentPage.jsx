import React from 'react';
import {Link} from 'react-router';
import ListActions from '../actions/ListActions';
import Display from '../actions/displayActions';
//COMPONENTS
import Listing from './listing.jsx';
import SizeSelector from './blocks/sizeSelector';


export default class CurrentPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        ListActions.getCurrent();
    }

    render() {
        let secondaryNH = ''
        let newSecondaryNH = ''
        let renderExport = []
        let title = ''
        let num = this.props.currentListings.length - 1
        
        let neighborhood = (name) => (<h2>{name}</h2>)
        
        let thelistRender = currentListings => currentListings.map((listing, index) => {
            
            let result = <Listing key={listing._id} {...listing} mylist = {this.props.user.mylist}/>
                
            newSecondaryNH = listing.venue.neighborhood;
            
            if ( newSecondaryNH !== secondaryNH) {
                
                //Add the result to the next export and reset the render
                var contentRender = <div key={index} className="neighborhood">{renderExport}</div>
                var newExport = [title, contentRender]
                renderExport = [];
                
                // Update neighborhood
                secondaryNH = newSecondaryNH
                newSecondaryNH = Display.displayNeighborhood(secondaryNH)
                title = neighborhood(newSecondaryNH)
                renderExport.push(result)
                
                // Export the last neighborhood
                return newExport
            } 
            
            renderExport.push(result)
            if (num == index){
                var contentRender = <div key={index} className="neighborhood">{renderExport}</div>
                var newExport = [title, contentRender]
                return newExport
            }
            return true;
        });
        
        return ( 
            <div className = "home">
                <h2>Current</h2>
                <SizeSelector view={this.props.view} />
                <div className={this.props.view + " listingsWrap"}>
                    {thelistRender(this.props.currentListings)}
                    {this.props.loading.current && <div className="loading">Loading...</div>}
                </div>
            </div>
        );
    }
}