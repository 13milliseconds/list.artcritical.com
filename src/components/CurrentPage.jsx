import React from 'react';
import {Link} from 'react-router';
import ListActions from '../actions/ListActions';
//COMPONENTS
import NeighborhoodNav from './blocks/neighborhoodNav'
import ListingsPerNeighbor from './blocks/listingsPerNeighbor'
import Loading from './blocks/loading'


export default class CurrentPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //If the current listings are not loaded, load em
        this.props.currentListings.length === 0 && ListActions.getCurrent()
        //This goes through all listing and matches them with venues if the venue name exists (only when importing from old artcritical)
        //ListActions.getAll()
    }

    render() {

        return ( 
            <div className="current mainList">
				<div className="left-col">
					<NeighborhoodNav />
					<p>See all future listings: <Link to={'/future'} activeClassName="active">Future</Link></p>
				</div>
                <div className={this.props.view + " listingsWrap main-col"}>
                    <ListingsPerNeighbor listings={this.props.currentListings} user={this.props.user}/>
                    {this.props.loading.current && <Loading />}
                </div>
				<div className="right-col">
					<img src="/images/ad-long.jpg" />
				</div>
            </div>
        );
    }
}