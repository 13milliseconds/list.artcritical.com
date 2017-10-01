import React from 'react';
import {IndexLink, Link} from 'react-router';


export default class IndexPage extends React.Component {

    render() {
        
        return ( 
            <div className = "admin">
                <header>
                    <h2>Admin page</h2>
                    <IndexLink to={'/account'} activeClassName="active">Account</IndexLink>
                    <Link to={'/account/newlisting'} activeClassName="active">New Listing</Link>
                    <Link to={'/account/edit'} activeClassName="active">Edit Listing</Link>
                </header>
                <div className="admin-content">{React.cloneElement(this.props.children, this.props)}</div>
            </div>
        );
    }
}