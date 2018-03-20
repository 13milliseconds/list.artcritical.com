import React from 'react';
import AuthActions from '../actions/AuthActions';
//COMPONENTS
import Date from './blocks/DateBlock.jsx';

export default class Listing extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            fullInfo: false
        }
        
        // Function binding
        this.revealInfo = this.revealInfo.bind(this)
        this.addToList = this.addToList.bind(this)
    }
    
    //Function to add a listing to the personal list
    addToList(e, listing){
        if (this.props.user._id){
			console.log('Adding to list of ', this.props.user.name);
            //Select this listing
            var thislisting = $(e.target).closest('.listing');

            //Add or remove the listing to the user's list
            AuthActions.addToUserList(listing);

            thislisting.toggleClass('selected');
        }
    }

    revealInfo(){
        console.log('Show me the stuff')
        const newReveal = !this.state.fullInfo
        this.setState({
            fullInfo: newReveal
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
        
    //Display date according to type of listing and view
    var dateDisplay
    let address = <span>{this.props.venue.address1} {this.props.venue.address1}{(this.props.venue.address1 !== '' && this.props.venue.city !== '') && ', ' }{this.props.venue.city}</span>
        
    if (this.props.event == true) {
        dateDisplay = <p>{this.props.start && <Date date={this.props.start} /> } - {address}</p>
    } else {
        if (this.props.dateView == "current") {
            dateDisplay = <p>Until <Date date={this.props.end}/> - {address}</p>
        } else {
            dateDisplay = <p>{this.props.start && <Date date={this.props.start} /> }{this.props.end && <span> to <Date date={this.props.end} /></span>} - {address}</p>
        }
    }
        
        const id = this.props._id;
        // Check if the listing is in mylist
        let mylistIndex = 0;
        if (this.props.user.mylist) {
            mylistIndex = this.props.user.mylist.filter(function(v) {
                return v._id === id;
            }).length;   
        }
        
        const image = this.props.image? "https://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg" : 'https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg'
        const style = {backgroundImage: 'url(' + image + ')'}
      
      
    return (
        <div className = {"listing " + (this.state.fullInfo && 'active ') + (mylistIndex > 0 ? 'selected' : 'notselected') } id={this.props._id}>
            <div className="listingAdd">
                <div className={this.props.user._id? "addButton active" : "addButton" } onClick={(e) => this.addToList(e, this.props)} style={style}>
                    {this.props.user._id && <i className = {mylistIndex > 0 ? 'fa fa-minus' : 'fa fa-plus' } aria-hidden="true"></i>}
                </div>
            </div>
            <div className = "listingContent">
                <div className="header">
                    <p>{this.props.name}{this.props.venue._id !== '' && ' at ' }<a className="venueName" href={"/venue/" + this.props.venue.slug}>{this.props.venue.name}</a></p>
                    {this.props.popularity >= 5 && <div className="popular">Popular</div>}
                    {dateDisplay}
                    {this.props.events && <div className="events">
                        {this.eventsDisplay(this.props.events)}
                    </div>}
                </div>
                {this.state.fullInfo &&
                    <div className="moreInfo">
                        <p>{this.props.description}</p>
                        <p>{this.props.receptionnotes}</p>
                    </div>
                }
            </div>
            {this.props.description || this.props.receptionnotes ? 
            <div className="listingClose" onClick={this.revealInfo}>
            {this.state.fullInfo? <div><i  className="fal fa-minus-square"></i></div> : <div><i  className="fal fa-plus-square"></i></div>}
            </div>
                    :
                <div className="listingClose"></div>
            }
        </div>
    );
  }
}