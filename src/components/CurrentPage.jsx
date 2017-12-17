import React from 'react';
import {Link} from 'react-router';
import ListActions from '../actions/ListActions';
import Display from '../actions/displayActions';
//COMPONENTS
import Listing from './listing.jsx';
import NeighborhoodNav from './blocks/neighborhoodNav'


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
        
        let neighborhood = (name,num) => (<h2 id={num}>{name}</h2>)
        
        let thelistRender = currentListings => currentListings.map((listing, index) => {
            
            let result = <Listing key={index} {...listing} user={this.props.user} dateView="current"/>
                
            newSecondaryNH = listing.venue.neighborhood;
            
            if ( newSecondaryNH !== secondaryNH) {
                
                //Add the result to the next export and reset the render
                var contentRender = <div key={index} className="neighborhood">{renderExport}</div>
                var newExport = [title, contentRender]
                renderExport = []; 
                
                // Update neighborhood
                secondaryNH = newSecondaryNH
                newSecondaryNH = Display.displayNeighborhood(secondaryNH)
                title = neighborhood(newSecondaryNH, listing.venue.neighborhood)
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
            <div className="current mainList">
				<div className="left-col">
					<NeighborhoodNav />
					<p>See all future listings: <Link to={'/future'} activeClassName="active">Future</Link></p>
				</div>
                <div className={this.props.view + " listingsWrap main-col"}>
                    {thelistRender(this.props.currentListings)}
                    {this.props.loading.current && <div className="loading">Loading...</div>}
                </div>
				<div className="right-col">
					<img src="/images/ad-long.jpg" />
				</div>
            </div>
        );
    }
}