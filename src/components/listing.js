import React from 'react';
import Date from './date';


export default class Listing extends React.Component {
        
    render() {
        
    var end
    if (this.props.event !== true && this.props.end !== '') {
        end = <span>to <Date date={this.props.end} /></span>;
    }
      
      
    return (
      <div className = "listing" id={this.props._id}>
        <div className="listingAdd">
            <div className="addButton" onClick={this.props.addToList}></div>
        </div>
        <div className = "listingContent">
            <div className="header">
                <p>{this.props.name} {this.props.venue._id !== '' && ' at ' }<span className="venueName">{this.props.venue.name}</span></p>
                <p>{this.props.start !== '' && <Date date={this.props.start} /> } {end} </p>
            </div>
            <div className="moreInfo">
                <p>{this.props.venue.address}{(this.props.venue.address !== '' && this.props.venue.city !== '') && ', ' }{this.props.venue.city}</p>
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