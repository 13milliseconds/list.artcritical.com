import React from 'react';
import {IntlProvider, FormattedDate} from 'react-intl';


export default class Listing extends React.Component {
        
    render() {
        
    var end
    if (this.props.event !== true && this.props.end !== '') {
        end = <span>to <FormattedDate value={this.props.end} format="short" /></span>;
    }
      
      
    return (
        <IntlProvider locale="en">
      <div className = "listing">
        <p>{this.props.name} {this.props.venue.name && ' at ' }<span className="venueName">{this.props.venue.name}</span></p>
        <p>{this.props.start !== '' && <FormattedDate value={this.props.start} format="narrow" /> } {end}
        </p>
        <p>{this.props.description}</p>
        <p>{this.props.venue.address}</p>
        <p>{this.props.neighborhood}</p>
      </div>
        </IntlProvider>
    );
  }
}