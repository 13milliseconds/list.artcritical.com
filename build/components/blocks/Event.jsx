import React from 'react';
//import AuthActions from '../../actions/AuthActions';
import ListActions from '../../actions/ListActions';
import EventActions from '../../actions/EventActions';
//import moment from 'moment'
//COMPONENTS
import {Link} from 'react-router'
import {Collapse, Card, CardTitle, CardBlock} from 'reactstrap'
import Date from './DateBlock.jsx'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ListingNameDisplay from './ListingNameDisplay'

export default class Event extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            fullInfo: false,
            fullEvents: false,
            canToggle: true
        }
        
        // Function binding
        this._revealInfo = this._revealInfo.bind(this)
        //this.addToList = this.addToList.bind(this)
    }
    
    //Function to add a listing to the personal list
    /* addToList(e, listing){
        if (this.props.user._id){
            //Select this listing
            var thislisting = $(e.target).closest('.listing');

            //Add or remove the listing to the user's list
            AuthActions.addToUserList(listing);

            thislisting.toggleClass('selected');
        }
    } */

    _editEvent(event){
        EventActions.editEvent(event)
        ListActions.toggleSideBar()
    }

    _revealInfo(){
        this.setState({
            fullInfo: !this.state.fullInfo
        })
    }
        
    render() {

        let event = this.props.event

        let address = event.venue && <span className="address">{event.venue.address1} {event.venue.address2}{event.venue.city !== '' && ', ' }{event.venue.city}</span>
        
        let fullDates = <span className="date"><Date date={event.date}/></span>

        let name = event.list   ? event.type == "closing"
                                    ? <span>Closing Reception: <ListingNameDisplay {...event.list} artists={event.artists} /></span>
                                    : event.type == "reception"
                                        ? <span>Opening Reception: <ListingNameDisplay {...event.list} artists={event.artists} /></span>
                                        : <span>{event.name && event.name + ': '}<ListingNameDisplay {...event.list} artists={event.artists} /></span>
                                : event.name

        
        
        // Check if the listing is in mylist
        /* let mylistIndex = 0
        if (this.props.user.mylist) {
            mylistIndex = this.props.user.mylist.filter(function(v) {
                return v._id === event._id
            }).length;   
        } */

        //let mylistingIcon = mylistIndex > 0 ? ["far", "minus"] : ["far", "plus"]

        //Thumbnail
        //const image = listing.image? "https://res.cloudinary.com/artcritical/image/upload/" + listing.image + ".jpg" : 'https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg'
        //const style = {backgroundImage: 'url(' + image + ')'}
      
      
    return (
        <div className="venue">
            <div className="venueInfo">
                <Link className="venueName" to={"/venue/" + event.venue.slug}>{event.venue.name}</Link>
            </div>
        <div className = {"event " + (this.state.fullInfo ? 'active ' : '') }>
            {/*this.props.user._id &&
                <div className="listingAdd">
                    {this.props.mylisting 
                    ? <span>{this.props.number}</span>
                    :
                    <div className="addButton" onClick={(e) => this.addToList(e, listing)} style={style}>
                        {this.props.user._id && <FontAwesomeIcon icon={mylistingIcon} />}
                    </div>
                    }
                </div>
            */} 
            <div className = "listingContent">
                <div className="header cf">

                    <div className="title">{ name } </div>

                    {fullDates}

                    <span className="icons">
                        <FontAwesomeIcon onClick={this._revealInfo} icon={['fal', 'info-circle']}/>
                        {this.props.onMap && <FontAwesomeIcon onClick={this.props.mapMouseEnter} icon={['fal', 'search']}/>}
                    </span>

                    <div className="listingActions">
                        {/*this.props.mylisting && //If you are seeing this on your myList page
                        <a onClick={(e) => this.addToList(e, event)} className="delete"><FontAwesomeIcon icon={['fal', 'trash']}/></a> */}
                        {this.props.user.userAccess > 0 && //If you are seeing this as an editor
                        <a onClick={(e) => this._editEvent(event)} className="edit"><FontAwesomeIcon icon={['fal', 'edit']}/></a> }
                    </div>
                    
                </div>

                <Collapse isOpen={this.state.fullInfo}>
                    <Card>
                        <CardTitle>Information</CardTitle>
                        <CardBlock>
                            {event.description && <div className="notes"><h3>Notes</h3> {event.description}</div>}
                            {fullDates}
                            <div className="venueFullInfo">
                                <Link className="venueName" to={"/venue/" + event.venue.slug}>{event.venue.name}</Link><br/>
                                {address}
                            </div>
                        </CardBlock>
                    </Card>
                </Collapse>
            </div>
        </div>
        </div>
    );
  }
}