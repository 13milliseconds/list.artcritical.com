import React from 'react';
import {Link} from 'react-router';
import Listing from './listing';
import ListStore from '../stores/ListStore';
import ListActions from '../actions/ListActions';


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
        
        
        let thelist = this.state.allListings.map((listing) => {
          return (
              <Listing {...listing} />
          )
        });
        
        
        return ( 
            <div className = "home">
                <h2>Landing page</h2>
                {thelist}
            </div>
        );
    }
}