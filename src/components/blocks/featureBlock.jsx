import React from 'react';
import {IntlProvider, FormattedDate} from 'react-intl';
//COMPONENTS
import ImageBlock from './imageBlock';

export default class FeatureBlock extends React.Component {
    
    render() {
        const feature = this.props.feature
        const venue = this.props.feature.venue ? this.props.feature.venue : {}
        const listing = this.props.feature.list ? this.props.feature.list : {}
        
        let start = listing.start?
                    <IntlProvider locale="en">
                        <FormattedDate value={listing.start} day="numeric" month="short" />
                    </IntlProvider>
            : ''
        let end = listing.end?
                    <IntlProvider locale="en">
                        <FormattedDate value={listing.end} day="numeric" month="short" />
                    </IntlProvider>
            : ''
                    
      
    return (
        <div className="feature-wrap">
            <h2>Featured item</h2>
            {listing.image? <ImageBlock image={listing.image} classes="feature" /> : ''}
            <h3>{listing.name} at {venue.name}</h3>
            {start}{end? ' to ' : ''}{end}
            <p>{feature.text}</p>
        </div>
    );
  }
}