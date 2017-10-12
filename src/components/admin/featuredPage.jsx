import React from 'react';
import {Link} from 'react-router';
import ListActions from '../../actions/ListActions';
//COMPONENTS
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
            days.push(<FeaturedDay key={d} feature={this.props.feature} error={this.props.error.feature} label={d} />);
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