import React from 'react';
import {Link} from 'react-router';
import ListActions from '../actions/ListActions';
//COMPONENTS
import Helmet from './blocks/Helmet'
import NeighborhoodNav from './blocks/neighborhoodNav'
import ListingsPerNeighbor from './blocks/listingsPerNeighbor'
import Loading from './blocks/loading'
import DownloadCSV from './blocks/DownloadCSV'
import AdBlock from './blocks/AdBlock'


export default class CurrentPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //If the current listings are not loaded, load em
        !this.props.currentLoaded && ListActions.getCurrent()
        //This goes through all listing and matches them with venues if the venue name exists (only when importing from old artcritical)
        //ListActions.getAll()
    }

    render() {

        return ( 
            <div className="current mainList">
                <Helmet
                    title="Current"
                    link="https://list.artcritical.com/current"
                />

				<div className="left-col">
                    <h1>Current Exhibitions</h1>
					<NeighborhoodNav />
					<p>See <Link to={'/future'} activeClassName="active">Future Exhibitions</Link>.</p>
                    {this.props.user && this.props.user.userAccess > 1 &&
                        <DownloadCSV listings={this.props.currentListings} name="current" />
                    }
				</div>

                <div className={this.props.view + " listingsWrap main-col"}>
                    <ListingsPerNeighbor listings={this.props.currentListings} user={this.props.user} dateView="current" />
                    {this.props.loading.current && <Loading />}
                </div>

				<div className="right-col">
					<AdBlock location="current" ads={this.props.ads} />
				</div>
            </div>
        );
    }
}