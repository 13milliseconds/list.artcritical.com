import React from 'react';
import AuthActions from '../../actions/AuthActions';
//COMPONENTS
import Date from '../blocks/DateBlock.jsx';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Listing extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            fullInfo: false
        }
        
        // Function binding
        this.addToList = this.addToList.bind(this)
        this._revealInfo = this._revealInfo.bind(this)
    }

    //Function to reveal the listing's info
    _revealInfo(){
        this.setState({
            fullInfo: !this.state.fullInfo
        })
    }
    
    //Function to add a listing to the personal list
    addToList(e, listing){
        //Select this listing
        var thislisting = $(e.target).closest('.listing');
        
        //Add or remove the listing to the user's list
        AuthActions.addToUserList(listing);
        
        if (thislisting.hasClass('selected')){
            
            //Close the currently open tab
            $(thislisting).removeClass('selected');
            
        } else {
            
            //Open this listing
            $(thislisting).addClass('selected');
            
        }

        
    }
        
    render() {

        let mylisting = this.props.listing
        let closeIcon = this.state.fullInfo ? ["fal", "minus-circle"] : ["fal", "plus-circle"]
        
    var end
    if (mylisting.event !== true && mylisting.end) {
        end = <span>to <Date date={mylisting.end} /></span>;
    }
        
        const image = mylisting.image? "https://res.cloudinary.com/artcritical/image/upload/" + mylisting.image + ".jpg" : 'https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg'
        const style = {backgroundImage: 'url(' + image + ')'}
      
      
    return (
      <div  className = 'listing notselected' 
            id={mylisting._id} key={mylisting._id}>
        <div className="listingAdd">
            <div className="addButton" style={style}>
               <span>{this.props.number}</span>
            </div>
        </div>
        <div className = "listingContent">
            <div className="header">
                <p>{mylisting.name}{mylisting.venue._id !== '' && ' at ' }<a className="venueName" href={"/venue/" + mylisting.venue.slug}>{mylisting.venue.name}</a></p>
                <p>{mylisting.start && <Date date={mylisting.start} /> } {end}  - {mylisting.venue.address1}
					{(mylisting.venue.address !== '' && mylisting.venue.city !== '') && ', ' }{mylisting.venue.city}
				</p>
				{!this.props.public &&
                	<a onClick={(e) => this.addToList(e, mylisting)} className="delete">Remove this listing</a>
				}
            </div>
            {this.state.fullInfo &&
                <div className="moreInfo">
                    <p>{mylisting.description}</p>
                </div>
            }
        </div>
        <div className="listingClose">
            {(listing.description || listing.events) &&
                <FontAwesomeIcon icon={closeIcon} onClick={this._revealInfo}/>
            }
        </div>
      </div>
    );
  }
}