import React from 'react';
import {Link} from 'react-router';
import ListActions from '../../actions/ListActions';
import moment from 'moment'
//COMPONENTS
import {IntlProvider, FormattedDate} from 'react-intl';
import { Button } from 'reactstrap';
import FeaturedDay from './featuredDay';
import Tabs from '../tabs';
import Loading from '../blocks/loading';


export default class FeaturePage extends React.Component {
    constructor(props) {
        super(props);
		
		//Get the next 14 dates
		let dates = []
		for (var i=0; i < 14; i++) {
			let d = moment().add(i, 'days').startOf('day');
			dates.push(d)
		}
		
		this.state = {
			dates: dates
		}
    }

    componentDidMount() {
		ListActions.featureAdmin(14)
    }

    render() {
        
        let days = []
        
        for (var i=0; i < 14; i++) {
            let label = <Button outline color={this.props.features[i] && this.props.features[i]._id? 'success' : 'danger'}>
                            {moment(this.state.dates[i]).format('ddd, MMM DD')}
                        </Button>

            days.push(<FeaturedDay 
                            key={i}
                            dayNumber={i} 
                            date={this.state.dates[i]} 
                            user={this.props.user} 
                            feature={this.props.features[i] || {}} 
                            error={this.props.error.feature} 
                            success={this.props.success} label={label} />);
        }
        
        return ( 
            <div className = "featureAdmin">
              <h2>Featured Listings</h2>
              <Link className="pastfeatures" to="/features">Past Features</Link>
              {this.props.loading.features 
                    ? <Loading />
                    :<Tabs>{days}</Tabs>
              }
            </div>
        );
    }
}