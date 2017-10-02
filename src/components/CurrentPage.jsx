import React from 'react';
import {Link} from 'react-router';
import ListStore from '../stores/ListStore';
import ListActions from '../actions/ListActions';
import Display from '../actions/displayActions';
//COMPONENTS
import Listing from './listing.jsx';


export default class CurrentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ListStore.listen(this.onChange);
        ListActions.getCurrent();
    }

    componentWillUnmount() {
        ListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let nh = ''
        let thelist = this.state.currentListings.map((listing) => {
            let newNh = listing.venue.neighborhood;
            if ( newNh !== nh) {
                nh = newNh
                newNh = Display.displayCity(nh)
                return (
                    <div key={listing._id}>
                        <h2>{newNh}</h2>
                        <Listing {...listing} mylist = {this.props.mylist}/>
                    </div>
                )
            } else {
                return (
                  <Listing {...listing} key={listing._id} mylist = {this.props.mylist}/>
              )   
            }
        });
        
        return ( 
            <div className = "home">
                <h2>Current</h2>
                <div className = "listingsWrap">
                    {thelist}
                </div>
            </div>
        );
    }
}