import React from 'react';
import AuthActions from '../../actions/AuthActions';
import ListActions from '../../actions/ListActions';
import moment from 'moment'
//COMPONENTS
import {Link} from 'react-router'
import {Collapse, Card, CardTitle, CardBlock} from 'reactstrap'
import Date from './DateBlock.jsx'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Listing extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            fullInfo: false,
            fullEvents: false,
            canToggle: true
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
            AuthActions.addToUserList(listing);

            thislisting.toggleClass('selected');
        }
    }

    _editListing(listing){
        ListActions.editListing(listing)
        ListActions.toggleSideBar()
    }

    _revealInfo(){
        this.setState({
            fullInfo: !this.state.fullInfo
        })
    }

    eventsDisplay(events){
        return events.map((event, index) => {
            return <div className="listingEvent" key={index}>
                    <span className="type">{event.type}</span>: <Date date={event.date} /> - {event.description ? event.description : "8pm"}
            </div>
        })

    }
        
    render() {

        let listing = this.props.listing

        let address = <span className="address">{listing.venue.address1} {listing.venue.address2}{listing.venue.city !== '' && ', ' }{listing.venue.city}</span>

        //let closeIcon = this.state.fullInfo ? ["fal", "minus-circle"] : ["fal", "plus-circle"]
        let eventsPresence = listing.events &&
                                listing.events.length > 0 ? true : false
        
    //Display date according to type of listing and view
    var dateDisplay
    let fullDates = <div className="date">{listing.start && <Date date={listing.start} /> }{listing.end && <span> to <Date date={listing.end} /></span>}</div>
        
    listing.event == true && this.props.dateView !== "nodate"
        ? dateDisplay = listing.start && <span className="date"><Date date={listing.start} /></span>
        : this.props.dateView == "current"
            ? dateDisplay = <span className="date">Until <Date date={listing.end}/></span>
            : this.props.dateView == "nodate"
                ? dateDisplay = ''
                : dateDisplay = fullDates
        
        const id = listing._id;
        // Check if the listing is in mylist
        let mylistIndex = 0;
        if (this.props.user.mylist) {
            mylistIndex = this.props.user.mylist.filter(function(v) {
                return v._id === id;
            }).length;   
        }
        let mylistingIcon = mylistIndex > 0 ? ["far", "minus"] : ["far", "plus"]

        let isGroupShow = listing.artists.length > 3 ? true : false
        let artists = listing.artists.map((artist, index) => {
            return <span key={index} className="artist" >{artist.name}</span>
        })

        //Thumbnail
        const image = listing.image? "https://res.cloudinary.com/artcritical/image/upload/" + listing.image + ".jpg" : 'https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg'
        const style = {backgroundImage: 'url(' + image + ')'}

        //Defining the name
        let artistPresent = listing.artists.length > 0 ? true : false
      
      
    return (
        <div className = {"listing " + (this.state.fullInfo ? 'active ' : '') + (mylistIndex > 0 ? 'selected' : 'notselected') }>
        {this.props.user._id &&
            <div className="listingAdd">
                {this.props.mylisting 
                    ? 
                    <span>{this.props.number}</span>
                   :
                    <div className="addButton" onClick={(e) => this.addToList(e, listing)} style={style}>
                        {this.props.user._id && <FontAwesomeIcon icon={mylistingIcon} />}
                    </div>
                }
            </div>
        }
            <div className = "listingContent">
                <div className="header cf">

                    <div className="title">
                        { artistPresent && <span className="artists">{isGroupShow ? 'Group Show' : artists}</span>}
                        { artistPresent && listing.name && ": "}
                        { listing.name } </div>

                    {dateDisplay}

                    {this.props.dateView == "current" && moment(listing.start).isSame(moment(), 'day') && <div className="opening"> Opening Today </div>}
                    {this.props.dateView == "current" && moment(listing.end).isSame(moment(), 'day') && <div className="closing"> Closing Today </div>}

                    <span className="icons">
                        <FontAwesomeIcon onClick={this._revealInfo} icon={['fal', 'info-circle']}/>
                        {this.props.onMap && <FontAwesomeIcon onClick={this.props.mapMouseEnter} icon={['fal', 'search']}/>}
                        {listing.review && <a alt="Review" target="_blank" href={listing.review}><FontAwesomeIcon icon={['fal', 'pencil-alt']}/></a>}
                        {eventsPresence && <FontAwesomeIcon icon={['fal', 'glass-martini']} onClick={this._revealInfo}/>}
                        {listing.popularity >= 5 && <span className="popular"><FontAwesomeIcon icon={['fas', 'star']}/></span>}
                    </span>

                    <div className="listingActions">
                        {this.props.mylisting && //If you are seeing this on your myList page
                        <a onClick={(e) => this.addToList(e, listing)} className="delete"><FontAwesomeIcon icon={['fal', 'trash']}/></a> }
                        {this.props.user.userAccess > 0 && //If you are seeing this as an editor
                        <a onClick={(e) => this._editListing(listing)} className="edit"><FontAwesomeIcon icon={['fal', 'edit']}/></a> }
                    </div>
                    
                </div>
                <Collapse isOpen={this.state.fullInfo}>
                    <Card>
                        <CardTitle>Information</CardTitle>
                        <CardBlock>
                            {isGroupShow && <div className="artists"><h3>Artists</h3> {artists}</div>}
                            {listing.description && <div className="notes"><h3>Notes</h3> {listing.description}</div>}
                            {eventsPresence && <div className="events"><h3>Events</h3> {this.eventsDisplay(listing.events)}</div>}
                            {fullDates}
                            <div className="venueFullInfo">
                                <Link className="venueName" to={"/venue/" + listing.venue.slug}>{listing.venue.name}</Link><br/>
                                {address}
                            </div>
                        </CardBlock>
                    </Card>
                </Collapse>
            </div>
        </div>
    );
  }
}