import React from 'react';
//COMPONENTS
import {Link} from 'react-router';
import DateBlock from '../blocks/DateBlock';
import moment from 'moment'

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
            nextDate: ''
        }
        
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount(){
        //Check if it has been used recently
        this.props.listings 
			? this.props.listings.length == 0 && this.setState({ old: true})
			: this.setState({ old: true})
        //Check if it has a current listing
        if (!this.state.old && this.props.listings) {
            var allCurrent = []
            this.props.listings.map(function (listing, index) {
                console.log('Listing #' + index)
                let listingStart = moment(listing.start)
                let listingEnd = moment(listing.end)
                
                if (listingEnd.isSameOrAfter(today, 'day') && listingStart.isSameOrBefore(today, 'day')){
                    allCurrent.push(listing)
                    console.log('Current')
                    console.log(allCurrent)
                    this.setState({
                        expired: false
                    })
                }
                if (listingStart.isAfter(today, 'day')){
                    this.setState({
                        upcoming: true
                    })
                    if (!this.state.nextDate || this.state.nextDate <  listingStart){
                        this.setState({
                            nextDate: listingStart
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
        
        let currentListings = (listings) => listings.map((listing) =>
                {
            return <div className="venueListing" key={listing._id}>{listing.name} - Expires <DateBlock date={listing.end} /></div>
        })
          
    return (
      <div className={classNames.join(' ')} id={this.props._id}>
        <Link to={"/venue/" + this.props.slug}>{this.props.name}</Link>
            {!this.state.old && currentListings(this.state.currentListings)}
            {this.state.nextDate && <div>Upcoming show: <DateBlock date={this.state.nextDate}/></div>}
      </div>
    );
  }
}