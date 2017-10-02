import React from 'react';
import {Link} from 'react-router';
import ListStore from '../stores/ListStore';
import ListActions from '../actions/ListActions';
//COMPONENTS
import DayPage from './daypage.jsx';
import Tabs from './tabs.jsx';


export default class GlancePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ListStore.listen(this.onChange);
        ListActions.getGlance();
    }

    componentWillUnmount() {
        ListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        
        let thelist = this.state.glanceListings
        
        let days = [];
        let today = new Date();
        today.setHours(0,0,0,0)
        
        for (var i=0; i < 7; i++) {
            let d = new Date();
            d.setHours(0,0,0,0);
            d.setDate(today.getDate() + i );
            days.push(<DayPage key={d} glanceListings={thelist} mylist={this.props.mylist} label={d} />);
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