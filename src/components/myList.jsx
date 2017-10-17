import React from 'react';
// Components
import Listing from './listing';
import MyMap from './mylist/myMap';

export default class MyList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return ( 
                <div className="myList">
                    <MyMap items={this.props.mylist} />
                    <div className="listing-wrap">
                    {
                        this.props.mylist.map((listing) => (
                            <Listing {...listing} key={listing._id} mylist={this.props.mylist}/>
                        ))
                    }
                    </div>
                </div>
        );
    }
}