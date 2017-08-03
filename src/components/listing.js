import React from 'react';
import {IntlProvider, FormattedDate} from 'react-intl';


export default class Listing extends React.Component {
        
    render() {
      
      
    return (
        <IntlProvider locale="en">
      <div className = "listing">
        <p>{this.props.name} at {this.props.venue.name}</p>
        <p>
            <FormattedDate value={this.props.start} format="narrow" /> to <FormattedDate value={this.props.end} format="short" />
        </p>
        <p>{this.props.description}</p>
        <p>{this.props.venue.address}, {this.props.venue.city}</p>
        <p>{this.props.neighborhood}</p>
      </div>
        </IntlProvider>
    );
  }
}