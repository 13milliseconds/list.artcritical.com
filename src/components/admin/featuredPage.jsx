import React from 'react';
import {Link} from 'react-router';
import ListActions from '../../actions/ListActions';
//COMPONENTS
import {IntlProvider, FormattedDate} from 'react-intl';
import { Button } from 'reactstrap';
import FeaturedDay from './featuredDay';
import Tabs from '../tabs';


export default class FeaturePage extends React.Component {
    constructor(props) {
        super(props);
		
		//Get the next 14 dates
		let dates = []
		for (var i=0; i < 14; i++) {
			let d = new Date();
			d.setHours(0,0,0,0)
            d.setDate(d.getDate() + i );
			dates.push(d)
		}
		
		this.state = {
			dates: dates
		}
    }

    componentWillMount() {
		ListActions.featureLoad(14);
    }

    render() {
        
        let days = []
        
        for (var i=0; i < 14; i++) {
            let label = <Button outline color={this.props.features[i] && this.props.features[i]._id? 'success' : 'danger'}><IntlProvider locale="en"><FormattedDate value={this.state.dates[i]} weekday="short" day="numeric" month="short" /></IntlProvider></Button>
            days.push(<FeaturedDay key={i} dayNumber={i} date={this.state.dates[i]} user={this.props.user} feature={this.props.features[i] || {}} error={this.props.error.feature} success={this.props.success.feature} label={label} />);
        }
        
        return ( 
            <div className = "glance">
              <h2>Featured Listings</h2>
                <Tabs>
                    {days}
                </Tabs>
            </div>
        );
    }
}