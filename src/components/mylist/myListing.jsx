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
        
    var end
    if (this.props.event !== true && this.props.end) {
        end = <span>to <Date date={this.props.end} /></span>;
    }
        
        const image = this.props.image? "https://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg" : 'https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg'
        const style = {backgroundImage: 'url(' + image + ')'}
      
      
    return (
      <div  className = 'listing notselected' 
            id={this.props._id} key={this.props._id}>
        <div className="listingAdd">
            <div className="addButton" style={style}>
               <span>{this.props.number}</span>
            </div>
        </div>
        <div className = "listingContent">
            <div className="header">
                <p>{this.props.name}{this.props.venue._id !== '' && ' at ' }<a className="venueName" href={"/venue/" + this.props.venue._id}>{this.props.venue.name}</a></p>
                <p>{this.props.start && <Date date={this.props.start} /> } {end}  - {this.props.venue.address}{(this.props.venue.address !== '' && this.props.venue.city !== '') && ', ' }{this.props.venue.city}</p>
				{!this.props.public &&
                	<a onClick={(e) => this.addToList(e, this.props)} className="delete">Remove this listing</a>
				}
            </div>
            <div className="moreInfo">
                <p>{this.props.description}</p>
                <p>{this.props.receptionnotes}</p>
            </div>
        </div>
        <div className="listingClose">
            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
            <i className="fa fa-minus-square-o" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}