import React from 'react';
import ListActions from '../../actions/ListActions';
//COMPONENTS
import {IntlProvider, FormattedDate} from 'react-intl';
import HtmlText from '../blocks/HtmlText' 
import Loading from '../blocks/loading';
import ListingNameDisplay from '../blocks/ListingNameDisplay'


export default class FeaturePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.allFeatures.length >= 0){
            ListActions.featureAdmin()
        }
    }

    render() {
    
        var allFeatures = features => features.map((feature, index) => {

            let type = feature.type
            let event = feature.event
            let listing = feature.list ? feature.list : {}
            const venue = feature.venue ? feature.venue : {}

            let title = type === 'event'
            ? event.name
            : listing.title ? listing.title : <ListingNameDisplay {...listing} />

            let description = type === 'event'
                ? event.description
                : listing.description
            
            let featureDay = feature.date
                ?<IntlProvider locale="en">
                    <FormattedDate value={feature.date} day="numeric" month="short" />
                </IntlProvider>
                : ''

            let date = type === 'event' && event.date
                    ?<IntlProvider locale="en">
                        <FormattedDate value={event.date} day="numeric" month="short" />
                    </IntlProvider>
                    : ''
            let start = type != 'event' && listing.start
                ? <IntlProvider locale="en">
                        <FormattedDate value={listing.start} day="numeric" month="short" />
                    </IntlProvider>
                : ''
            let end = type != 'event' && listing.end
                ? <IntlProvider locale="en">
                        <FormattedDate value={listing.end} day="numeric" month="short" />
                    </IntlProvider>
                : ''

            return <div className="feature">
                    
                    <h2>{featureDay}: {title}</h2>
                    <HtmlText content={feature.text} />
                    {description && 
                        <div className="notes">
                            <h6>Notes</h6>
                            {description}
                        </div>
                    }
                    <div className="dates">{date}{start}{end? ' to ' : ''}{end}</div>
                    <div className="address">{venue.address1} {venue.address2}, {venue.city}</div>
            </div>
        })
        
        return ( 
            <div className = "pastFeatureAdmin">
              <h2>Past Features</h2>
              {this.props.loading.features
                    ? <Loading />
                    : allFeatures(this.props.allFeatures)
              }
            </div>
        );
    }
}