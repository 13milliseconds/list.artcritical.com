import React from 'react';
import AuthActions from '../../actions/AuthActions';
import ListActions from '../../actions/ListActions';
import moment from 'moment'
//COMPONENTS
import {Link} from 'react-router'
import {Tooltip, Popover, PopoverTitle, PopoverContent} from 'reactstrap'
import Date from './DateBlock.jsx'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Listing extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            fullInfo: false,
            tooltipOpen: false,
            fullEvents: false
        }
        
        // Function binding
        this._revealInfo = this._revealInfo.bind(this)
        this._revealEvents = this._revealEvents.bind(this)
        this.addToList = this.addToList.bind(this)
        this.toggleTooltip = this.toggleTooltip.bind(this)
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
        ListActions.editListing(listing)
        ListActions.toggleSideBar()
    }

    _revealInfo(){
        this.setState({
            fullInfo: !this.state.fullInfo
        })
    }

    _revealEvents(){
        this.setState({
            fullEvents: !this.state.fullEvents
        })
    }

    eventsDisplay(events){
        return events.map((event, index) => {
            return <div className="event" key={index}>
                    <FontAwesomeIcon icon={['fal', 'glass-martini']}/> {event.name} {this.props.start && <Date date={event.date} /> } {event.description && '- ' + event.description}
            </div>
        })

    }

    toggleTooltip() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
      }
        
    render() {

        let listing = this.props.listing

        //let closeIcon = this.state.fullInfo ? ["fal", "minus-circle"] : ["fal", "plus-circle"]
        let eventsPresence = listing.events &&
                                listing.events.length > 0 ? true : false
        
    //Display date according to type of listing and view
    var dateDisplay
        
    listing.event == true && this.props.dateView !== "nodate"
        ? dateDisplay = listing.start && <span className="date"><Date date={listing.start} /></span>
        : this.props.dateView == "current"
            ? dateDisplay = <span className="date">Until <Date date={listing.end}/></span>
            : this.props.dateView == "nodate"
                ? dateDisplay = ''
                : dateDisplay = <div className="date">{listing.start && <Date date={listing.start} /> }{listing.end && <span> to <Date date={listing.end} /></span>}</div>
        
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

        const image = listing.image? "https://res.cloudinary.com/artcritical/image/upload/" + listing.image + ".jpg" : 'https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg'
        const style = {backgroundImage: 'url(' + image + ')'}

        let popoverInfoID = "info-" + listing._id
        let popoverEventsID = "events-" + listing._id
      
      
    return (
        <div className = {"listing " + (this.state.fullInfo ? 'active ' : '') + (mylistIndex > 0 ? 'selected' : 'notselected') }>
        {this.props.user._id &&
            <div className="listingAdd">
                {this.props.mylisting 
                    ? 
                    <span   onClick={this.props.mapMouseEnter} >
                            {this.props.number}
                    </span>
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
                        {listing.artists.length > 0 && <span className="artists">{isGroupShow ? <span id={id} className="groupShow">Group Show</span> : artists}: </span>}
                        {listing.name} </div>

                    {dateDisplay}

                    {this.props.dateView == "current" && moment(listing.start).isSame(moment(), 'day') && <div className="opening"> Opening Today </div>}
                    {this.props.dateView == "current" && moment(listing.end).isSame(moment(), 'day') && <div className="closing"> Closing Today </div>}

                    <span className="icons">
                        {listing.description && <FontAwesomeIcon id={popoverInfoID} onClick={this._revealInfo} icon={['fal', 'info-circle']}/>}
                        {eventsPresence && <span className="events"><FontAwesomeIcon icon={['fal', 'glass-martini']} id={popoverEventsID} onClick={this._revealEvents}/></span>}
                        {listing.popularity >= 5 && <span className="popular"><FontAwesomeIcon icon={['fas', 'star']}/></span>}
                    </span>

                    <div className="listingActions">
                        {this.props.mylisting && //If you are seeing this on your myList page
                        <a onClick={(e) => this.addToList(e, listing)} className="delete"><FontAwesomeIcon icon={['fal', 'trash']}/></a> }
                        {this.props.user.userAccess > 0 && //If you are seeing this as an editor
                        <a onClick={(e) => this._editListing(listing)} className="edit"><FontAwesomeIcon icon={['fal', 'edit']}/></a> }
                    </div>
                    
                </div>
                {listing.description && 
                <Popover placement="top" isOpen={this.state.fullInfo} target={popoverInfoID} toggle={this._revealInfo}>
                    <PopoverTitle>More Info</PopoverTitle>
                    <PopoverContent>{listing.description}</PopoverContent>
                </Popover>
                }
                {eventsPresence && 
                <Popover placement="top" isOpen={this.state.fullEvents} target={popoverEventsID} toggle={this._revealEvents}>
                    <PopoverTitle>Events</PopoverTitle>
                    <PopoverContent>{this.eventsDisplay(listing.events)}</PopoverContent>
                </Popover>
                }
                {isGroupShow && //Tooltip displaying all the artists' names
                <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target={id} toggle={this.toggleTooltip}>{artists}</Tooltip>
                }
            </div>
        </div>
    );
  }
}