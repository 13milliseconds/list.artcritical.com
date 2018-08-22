import React from 'react';
//COMPONENTS
import {Link} from 'react-router';
import DateBlock from '../blocks/DateBlock';
import moment from 'moment'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

//Find today's date
let today = moment()

export default class VenueItem extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            expired: true,
            soon: false,
            archived: false,
            old: false,
            upcoming: false,
            currentListings: [],
            expiredDate: '',
            nextListing: ''
        }
        
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount(){
        //Check if it has been used recently and is not disabled
        this.props.listings
			? this.props.listings.length == 0 && this.setState({ old: true})
            : this.setState({ old: true})
        this.props.disabled 
            && this.setState({ old: true, expired: true})
        //Check if it has a current listing
        if (!this.props.disabled && this.props.listings) {
            var allCurrent = []
            this.props.listings.map(function (listing, index) {
                let listingStart = moment(listing.start)
                let listingEnd = moment(listing.end)
                
                if (listingEnd.isSameOrAfter(today, 'day') && listingStart.isSameOrBefore(today, 'day')){
                    allCurrent.push(listing)
                    this.setState({
                        expired: false
                    })
                }
                if (listingStart.isAfter(today, 'day')){
                    this.setState({
                        upcoming: true
                    })
                    if (!this.state.nextListing || moment(this.state.nextListing.start) <  listingStart){
                        this.setState({
                            nextListing: listing
                        })
                    }
                    
                }
            }, this);   

            this.setState({
                currentListings: allCurrent
            })
        }
        
    }
        
    render() {

        
        let classNames = ['venue']
        this.state.old && classNames.push('old')
        this.state.expired && classNames.push('expired') 
        this.state.upcoming && classNames.push('upcoming')

        let nextListing = this.state.nextListing
        
        let currentListings = (listings) => listings.map((listing) =>
                {
            return <div className="venueListing" key={listing._id}>{listing.name} - Expires <DateBlock date={listing.end} /></div>
        })
          
    return (
      <div className={classNames.join(' ')} id={this.props._id}>
        <Link to={"/venue/" + this.props.slug}>{this.props.name}</Link> 
        {this.props.website &&
            <a href={this.props.website} target="_blank"><FontAwesomeIcon icon={['fal', 'external-link-square']} /></a>}

            {!this.state.old && currentListings(this.state.currentListings)}
            {nextListing && <div>Upcoming: {nextListing.name} - Starting <DateBlock date={nextListing.start}/></div>}
      </div>
    );
  }
}