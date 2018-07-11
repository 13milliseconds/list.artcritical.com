import React from 'react';
import ListActions from '../actions/ListActions';
import moment from "moment"

//COMPONENTS
import {IntlProvider, FormattedDate} from 'react-intl';
import DayPage from './DayPage';
import Tabs from './tabs.jsx'; 


export default class GlancePage extends React.Component {
    constructor(props) {
        super(props);
		
		//Get the next 7 dates
		let dates = []
		for (var i=0; i < 7; i++) {
            let d = moment().add(i, 'days').startOf('day')
			dates.push(d)
		}
		
		this.state = {
			dates: dates
		}
    }
	
	componentWillMount() {
        ListActions.featureLoad(7);
        ListActions.getGlance();
	}

    render() {
        
        let daysDisplay = listings => {
            let days = []
            for (var i=0; i < 7; i++) {
                let label = <IntlProvider locale="en"><FormattedDate value={this.state.dates[i]} weekday="long" day="numeric" month="short" /></IntlProvider>
                days.push(<DayPage 
                              key={i} 
                              {...this.props}
                              feature={this.props.features[i]? this.props.features[i] : {}} 
                              glanceListings={listings} 
                              label={label} 
                              date={this.state.dates[i]} />)
            }
            return days
        }
        
        return ( 
            <div className = "glance">
                    <h1>Week at a Glance</h1>
                    <Tabs>
                        {daysDisplay(this.props.glanceListings)}
                    </Tabs>
            </div>
        );
    }
}