import React from 'react';
import ListActions from '../../actions/ListActions';
//COMPONENTS
import {IntlProvider, FormattedDate} from 'react-intl';
import Loading from '../blocks/loading';
import moment from 'moment'
import ListingNameDisplay from '../blocks/ListingNameDisplay'
import {Link} from 'react-router';


export default class FeaturePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.allFeatures.length === 0){
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
            
            let featureDay = feature.date
                ?<IntlProvider locale="en">
                    <FormattedDate value={feature.date} day="numeric" month="short" />
                </IntlProvider>
                : ''

            return <div className="feature" key={feature._id}>
                    <h3>{featureDay}</h3>
                    <div className="image" style={{backgroundImage: 'url("https://res.cloudinary.com/artcritical/image/upload/' + listing.image + '.jpg")'}}></div>
                    <h4>{title} at {venue.name}</h4>
                    <Link to={'features/' + moment(feature.date).format('MMDDYY')}>Read More</Link>
            </div>
        })
        
        return ( 
            <div className = "allFeatures">
              <h2>Past Features</h2>
              {this.props.loading.features
                    ? <Loading />
                    : allFeatures(this.props.allFeatures)
              }

            </div>
        );
    }
}