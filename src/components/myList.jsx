import React from 'react';
import Listing from './listing.jsx';

export default class MyList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return ( 
                <div className="myList">
                    <p>Items in your list: <strong>{this.props.mylist.length}</strong></p>
                    {
                        this.props.mylist.map((listing) => (
                            <Listing {...listing} key={listing._id} mylist={this.props.mylist}/>
                        ))
                    }
                </div>
        );
    }
}