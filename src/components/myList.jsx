import React from 'react';
import AuthActions from '../actions/AuthActions';
// Components
import Listing from './listing';
import MyMap from './mylist/myMap';
import SizeSelector from './blocks/sizeSelector';

export default class MyList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount(){
        AuthActions.getMylist();
    }

    render() {
        
        return ( 
                <div className="myList">
                    <MyMap items={this.props.user.mylist} />
                    <SizeSelector view={this.props.view} />
                    <div className={this.props.view + " listingsWrap"}>

                    {
                        this.props.user.mylist.map((listing) => (
                            <Listing {...listing} key={listing._id} mylist={this.props.user.mylist}/>
                        ))
                    }
                    </div>
                </div>
        );
    }
}