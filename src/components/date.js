import React from 'react';
import {IntlProvider, FormattedDate} from 'react-intl';


export default class Date extends React.Component {
        
    render() {
      
    return (
        <IntlProvider locale="en"><FormattedDate value={this.props.date} month="long" day="numeric" /></IntlProvider>
    );
  }
}