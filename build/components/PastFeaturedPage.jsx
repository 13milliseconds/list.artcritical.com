import React from 'react';
import ListActions from '../actions/ListActions';
//COMPONENTS
import Loading from './blocks/loading';
import moment from 'moment'
import ListingNameDisplay from './blocks/ListingNameDisplay'
import ImageBlock from './blocks/imageBlock';
import {Link} from 'react-router';


export default class FeaturePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //if (this.props.allFeatures.length === 0){
            ListActions.featureAdmin()
        //}
    }

    render() {
    
        let archiveSection = false
        let allFeatures = features => features.map((feature, index) => {

            let listing = feature.list ? feature.list : feature.archive ? feature.archive : {}
            let event = feature.event

            let archiveTitle = ''
            if (!archiveSection && feature.archive) {
                archiveTitle = <h1>Archive</h1> 
                archiveSection = true
            }

            if (listing || event) {
                let type = feature.type
                const venue = feature.venue ? feature.venue : {}

                let title = type === 'event'
                ? event.name
                : listing.title ? listing.title : <ListingNameDisplay {...listing} />
                
                let featureDay = feature.date
                    ? moment.utc(feature.date).format('ddd, MMM DD YYYY')
                    : ''

                return [archiveTitle, <div className={feature.archive ? "archive feature" : "feature"} key={feature._id}>
                            <div className="img">
                                {listing && listing.image && <ImageBlock image={listing.image} />}
                                {event && event.image && <ImageBlock image={event.image} />}
                            </div>
                            <div className="text">
                                <h4><Link to={'features/' + moment.utc(feature.date).format('MMDDYY')}>{title} at {venue.name}</Link></h4>
                                <h5>{featureDay}</h5>
                            </div>
                        </div>]
            } else {
                return false
            }
        })
        
        return ( 
            <div className = "allFeatures">
              <h2>Featured Listings</h2>
              <div className="featuresWrap">
                {this.props.loading.features
                        ? <Loading />
                        : allFeatures(this.props.allFeatures)
                }
              </div>
            </div>
        );
    }
}