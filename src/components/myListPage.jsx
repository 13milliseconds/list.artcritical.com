import React from 'react';
import MyList from './myList.jsx';
//COMPONENTS
import { Link } from 'react-router';

export default class MyListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let myListRender = this.props.user.isLoggedIn ?
                            <MyList {...this.props} />
                            :
                            <div>
                                <p>Please register to create your own list</p>
                                <Link to={'/signup'} activeClassName="active">Register</Link>
                            </div>
        return ( 
                <div className="myListwrap">
                    <h2>my list</h2>
                    {myListRender}
                </div>
        );
    }
}