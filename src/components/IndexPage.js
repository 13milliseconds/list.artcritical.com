import React from 'react';
import {Link} from 'react-router';
import Listing from './listing';
import ListStore from '../stores/ListStore';
import ListActions from '../actions/ListActions';
import Display from '../actions/displayActions';


export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ListStore.listen(this.onChange);
        ListActions.getAll();
    }

    componentWillUnmount() {
        ListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        
        
        let nh = ''
        let thelist = this.state.allListings.map((listing) => {
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
                <h2>Landing page</h2>
                {thelist}
            </div>
        );
    }
}