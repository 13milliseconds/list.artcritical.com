import React from 'react';
import {Link} from 'react-router';
import ListActions from '../../actions/ListActions';
//COMPONENTS
import {IntlProvider, FormattedDate} from 'react-intl';
import FeaturedDay from './featuredDay';
import Tabs from '../tabs';


export default class GlancePage extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        ListActions.getGlance();
    }


    render() {
        
        let days = [];
        let today = new Date();
        today.setHours(0,0,0,0)
        
        for (var i=0; i < 7; i++) {
            let d = new Date();
            d.setHours(0,0,0,0);
            d.setDate(today.getDate() + i );
            let label = <IntlProvider locale="en"><FormattedDate value={d} weekday="long" day="numeric" month="short" /></IntlProvider>
            days.push(<FeaturedDay key={d} date={d} feature={this.props.feature} error={this.props.error.feature} label={label} />);
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