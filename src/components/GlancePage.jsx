import React from 'react';
import {Link} from 'react-router';
import ListStore from '../stores/ListStore';
import ListActions from '../actions/ListActions';
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
		ListActions.featureLoad(7);
	}

    componentDidMount() {
        ListActions.getGlance();
    }

    render() {
        
        let thelist = this.props.glanceListings
        
        let days = [];
        
        for (var i=0; i < 7; i++) {
            let label = <IntlProvider locale="en"><FormattedDate value={this.state.dates[i]} weekday="long" day="numeric" month="short" /></IntlProvider>
            days.push(<DayPage 
						  key={i} 
						  feature={this.props.features[i]? this.props.features[i] : {}} 
						  glanceListings={thelist} 
						  user={this.props.user} 
						  label={label} 
						  date={this.state.dates[i]} 
						  view={this.props.view} />);
        }
        
        return ( 
            <div className = "glance">
                <Tabs>
                    {days}
                </Tabs>
            </div>
        );
    }
}