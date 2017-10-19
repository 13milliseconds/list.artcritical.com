import React from 'react';
//COMPONENTS
import {Link} from 'react-router';
import DateBlock from '../blocks/DateBlock';

//Find today's date
let today = new Date();
today.setHours(0, 0, 0, 0);

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
        this.props.listings.length == 0 && this.setState({ old: true})
        //Check if it has a current listing
        if (!this.state.old) {
            this.props.listings.map(function (listing) {
                
            let listingStart = new Date(listing.start)
            let listingEnd = new Date(listing.end)
            
            if (listingEnd > today && listingStart < today){
                this.setState({
                    currentListings: this.state.currentListings.concat(listing)
                })
                this.setState({
                    expired: false
                })
            }
            if (listingStart > today){
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
        }
        
    }
        
    render() {
        
        let classNames = ['venue']
        this.state.old && classNames.push('old')
        this.state.expired && classNames.push('expired')
        this.state.upcoming && classNames.push('upcoming')
        
        let currentListings = (listings) => listings.map((listing, index) =>
                {
            return <div className="venueListing" key='index'>{listing.name} - Expires <DateBlock date={listing.end} /></div>
        })
          
    return (
      <div className={classNames.join(' ')} id={this.props._id}>
        <Link to={"/venue/" + this.props._id}>{this.props.name}</Link>
            {currentListings(this.state.currentListings)}
            {this.state.nextDate && <div>Upcoming show: <DateBlock date={this.state.nextDate}/></div>}
      </div>
    );
  }
}