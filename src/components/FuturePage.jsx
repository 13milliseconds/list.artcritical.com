import React from 'react';
import {Link} from 'react-router';
import ListActions from '../actions/ListActions';
//COMPONENTS
import NeighborhoodNav from './blocks/neighborhoodNav'
import ListingsPerNeighbor from './blocks/listingsPerNeighbor'
import Loading from './blocks/loading'

export default class FuturePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        ListActions.getFuture();
    }

    render() {
        
        return ( 
            <div className = "future mainList">
                <div className="left-col">
					<NeighborhoodNav />
					<p>See all current listings: <Link to={'/current'} activeClassName="active">Future</Link></p>
				</div>
                <div className={this.props.view + " listingsWrap main-col"}>
                    <ListingsPerNeighbor listings={this.props.futureListings} user={this.props.user} />
                    {this.props.loading.future && <Loading />}
                </div>
				<div className="right-col">
				<img src="/images/ad-long.jpg" />
				</div>
            </div>
        );
    }
}