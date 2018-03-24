import React from 'react';
import AuthActions from '../actions/AuthActions';
import ListActions from '../actions/ListActions';
//COMPONENTS
import {Link } from 'react-router';
import Date from './blocks/DateBlock.jsx';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Listing extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            fullInfo: false
        }
        
        // Function binding
        this._revealInfo = this._revealInfo.bind(this)
        this.addToList = this.addToList.bind(this)
    }
    
    //Function to add a listing to the personal list
    addToList(e, listing){
        if (this.props.user._id){
            //Select this listing
            var thislisting = $(e.target).closest('.listing');

            //Add or remove the listing to the user's list
            console.log(listing)
            AuthActions.addToUserList(listing);

            thislisting.toggleClass('selected');
        }
    }

    _editListing(listing){
        console.log("let's edit", listing)
        ListActions.editListing(listing)

    }

    _revealInfo(){
        this.setState({
            fullInfo: !this.state.fullInfo
        })
    }

    eventsDisplay(events){
        return events.map((event, index) => {
            return <div className="event" key={index}>
                    <i className="fal fa-glass-martini"></i> {event.name} {this.props.start && <Date date={event.date} /> } {event.description && '- ' + event.description}
            </div>
        })

    }
        
    render() {

        let listing = this.props.listing

        let closeIcon = this.state.fullInfo ? ["fal", "minus-circle"] : ["fal", "plus-circle"]
        let eventsPresence = listing.events.length > 0
        
    //Display date according to type of listing and view
    var dateDisplay
    let address = <span>{listing.venue.address1} {listing.venue.address1}{(listing.venue.address1 !== '' && listing.venue.city !== '') && ', ' }{listing.venue.city}</span>
        
    if (listing.event == true) {
        dateDisplay = <p>{listing.start && <Date date={listing.start} /> } - {address}</p>
    } else {
        if (this.props.dateView == "current") {
            dateDisplay = <p>Until <Date date={listing.end}/> - {address}</p>
        } else {
            dateDisplay = <p>{listing.start && <Date date={listing.start} /> }{listing.end && <span> to <Date date={listing.end} /></span>} - {address}</p>
        }
    }
        
        const id = listing._id;
        // Check if the listing is in mylist
        let mylistIndex = 0;
        if (this.props.user.mylist) {
            mylistIndex = this.props.user.mylist.filter(function(v) {
                return v._id === id;
            }).length;   
        }
        
        const image = listing.image? "https://res.cloudinary.com/artcritical/image/upload/" + listing.image + ".jpg" : 'https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg'
        const style = {backgroundImage: 'url(' + image + ')'}
      
      
    return (
        <div className = {"listing " + (this.state.fullInfo ? 'active ' : '') + (mylistIndex > 0 ? 'selected' : 'notselected') } id={id}>
            <div className="listingAdd">
                {this.props.mylisting ? 
                    <span>{this.props.number}</span>
                   :
                   <div className={this.props.user._id? "addButton active" : "addButton" } onClick={(e) => this.addToList(e, listing)} style={style}>
                        {this.props.user._id && <i className = {mylistIndex > 0 ? 'fal fa-minus' : 'fal fa-plus' } aria-hidden="true"></i>}
                    </div>
                }
                {eventsPresence && <span className="events"><FontAwesomeIcon icon={['fal', 'glass-martini']}/></span>}
                {listing.popularity >= 5 && <span className="popular"><FontAwesomeIcon icon={['fas', 'star']}/></span>}
            </div>
            <div className = "listingContent">
                <div className="header">
                    <p>{listing.name}{listing.venue._id !== '' && ' at ' }<a className="venueName" href={"/venue/" + listing.venue.slug}>{listing.venue.name}</a></p>
                    {dateDisplay}
                    {this.props.mylisting && //If you are seeing this on your myList page
                	<a onClick={(e) => this.addToList(e, listing)} className="delete">Remove</a>
                    }
                    {this.props.user.userAccess > 0 && //If you are seeing this as an editor
                    <Link to={'/admin'} onClick={(e) => this._editListing(listing)}>Edit</Link>
				    }
                </div>
                {this.state.fullInfo &&
                    <div className="moreInfo">
                        <p>{listing.description}</p>
                        {listing.events && <div className="events">
                            {this.eventsDisplay(listing.events)}
                        </div>}
                    </div>
                }
            </div>

            <div className="listingClose">
            {(listing.description || eventsPresence) &&
                    <FontAwesomeIcon icon={closeIcon} onClick={this._revealInfo}/>
            }
            </div>
        </div>
    );
  }
}