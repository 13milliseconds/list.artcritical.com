import React from 'react';
import Listing from './listing';

export default class MyList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return ( 
                <div className="myList">
                    <h2>my list</h2>
                    <p>Items in your list: <strong>{this.props.mylist.length}</strong></p>
                    {
                        this.props.mylist.map((listing) => (
                            <Listing {...listing} mylist={this.props.mylist}/>
                        ))
                    }
                </div>
        );
    }
}