import React from 'react';
import {Link} from 'react-router';
import ListStore from '../stores/ListStore';
import Listing from './listing';
import ListActions from '../actions/ListActions';
import Display from '../actions/displayActions';


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
                    <div>
                        <h2>{newNh}</h2>
                        <Listing {...listing} />
                    </div>
                )
            } else {
                return (
                  <Listing {...listing} />
              )   
            }
        });
        
        return ( 
            <div className = "home">
                <h2>Current</h2>
                {thelist}
            </div>
        );
    }
}