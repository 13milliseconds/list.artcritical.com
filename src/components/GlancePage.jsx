import React from 'react';
import {Link} from 'react-router';
import ListStore from '../stores/ListStore';
import ListActions from '../actions/ListActions';
//COMPONENTS
import {IntlProvider, FormattedDate} from 'react-intl';
import DayPage from './daypage.jsx';
import Tabs from './tabs.jsx'; 


export default class GlancePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        ListActions.getGlance();
    }


    render() {
        
        let thelist = this.props.glanceListings
        
        let days = [];
        let today = new Date();
        today.setHours(0,0,0,0)
        
        for (var i=0; i < 7; i++) {
            let d = new Date();
            d.setHours(0,0,0,0);
            d.setDate(today.getDate() + i );
            let label = <IntlProvider locale="en"><FormattedDate value={d} weekday="long" day="numeric" month="short" /></IntlProvider>
            days.push(<DayPage key={d} feature={this.props.feature} glanceListings={thelist} mylist={this.props.mylist} label={label} date={d} />);
        }
        
        return ( 
            <div className = "glance">
              <h2>At a Glance</h2>
                <Tabs>
                    {days}
                </Tabs>
            </div>
        );
    }
}