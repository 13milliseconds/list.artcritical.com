import React from 'react';
import ListActions from '../../actions/ListActions';

//COMPONENTS
import VenueBlock from '../blocks/VenueBlock.jsx';


export default class ReviewPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        ListActions.getLatestListings();
    }

    render() {
        //let futureListings = this.props.futureListings
        let thelistings = futureListings => futureListings.map(function(listing, index){
            //console.log(moment(listing['start']).format().slice(0,10))
            return (
                <VenueBlock key={index} listings={[listing]} user={this.props.user}/>
            )

        }, this)

    	return(
    		<div>
	    		<h4>Review</h4>
	    		<div className={this.props.view}>
                        {thelistings(this.props.latestListings)}
	            </div>
            </div>
    	)
    }
}