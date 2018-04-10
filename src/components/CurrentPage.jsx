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
        //If the current listings are not loaded, load em
		this.props.currentListings.length === 0 && ListActions.getCurrent()
    }

    render() {
        let secondaryNH = ''
        let newSecondaryNH = ''
        let renderExport = []
        let title = ''
        let num = this.props.currentListings.length - 1
        
        let thelistRender = currentListings => currentListings.map((listing, index) => {
            
            let result = <Listing key={index} listing={listing} user={this.props.user} dateView="current"/>
                
            newSecondaryNH = listing.venue.neighborhood;
            
            //If the new neighborhood is different
            if ( newSecondaryNH !== secondaryNH) {
                
                //Add the result to the next export and reset the render
                var contentRender = <div key={index} id={secondaryNH} className="neighborhood">{title}{renderExport}</div>
                renderExport = []; 
                
                // Update neighborhood
                secondaryNH = newSecondaryNH
                newSecondaryNH = Display.displayNeighborhood(secondaryNH)
                title = <h2>{newSecondaryNH}</h2>
                renderExport.push(result)
                
                // Export the last neighborhood
                return contentRender
            } 
            
            renderExport.push(result)
            if (num == index){
                var contentRender = <div key={index} className="neighborhood">{title}{renderExport}</div>
                return contentRender
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
					<p>There are currently {this.props.currentListings.length} art shows open.</p>
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