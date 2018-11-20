import React from 'react';
import {Link} from 'react-router';
import ListActions from '../actions/ListActions';
//COMPONENTS
import NeighborhoodNav from './blocks/neighborhoodNav'
import ListingsPerNeighbor from './blocks/listingsPerNeighbor'
import Loading from './blocks/loading'
import DownloadCSV from './blocks/DownloadCSV'

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
                    <h1>Future Exhibitions</h1>
					<NeighborhoodNav />
					<p>See <Link to={'/current'} activeClassName="active">Current Exhibitions</Link>.</p>
                    {this.props.user && this.props.user.userAccess > 1 &&
                        <DownloadCSV download={this.props.futureListings} name="current" />
                    }
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