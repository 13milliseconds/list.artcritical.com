import React from 'react';
import ListActions from '../../actions/ListActions';
//COMPONENTS
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

            let listing = feature.list

            if (listing && listing._id) {
                let type = feature.type
                let event = feature.event
                const venue = feature.venue ? feature.venue : {}

                let title = type === 'event'
                ? event.name
                : listing.title ? listing.title : <ListingNameDisplay {...listing} />
                
                let featureDay = feature.date
                    ? moment.utc(feature.date).format('MMM DD')
                    : ''

                return <div className="feature" key={feature._id}>
                            <div className="image" style={{backgroundImage: 'url("https://res.cloudinary.com/artcritical/image/upload/' + listing.image + '.jpg")'}}></div>
                            <h4><Link to={'features/' + moment.utc(feature.date).format('MMDDYY')}>{title} at {venue.name}</Link></h4>
                            <h5>{featureDay}</h5>
                        </div>
            } else {
                return false
            }
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