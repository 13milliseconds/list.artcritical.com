import React from 'react';
import AuthActions from '../../actions/AuthActions';
//COMPONENTS
import Date from '../blocks/DateBlock.jsx';

export default class Listing extends React.Component {
    
    constructor(props) {
        super(props);
        
        // Function binding
        this.addToList = this.addToList.bind(this);
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
            <div className="moreInfo">
                <p>{mylisting.description}</p>
                <p>{mylisting.receptionnotes}</p>
            </div>
        </div>
        <div className="listingClose">
            <i className="fal fa-plus-circle" aria-hidden="true"></i>
            <i className="fal fa-minus-circle" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}