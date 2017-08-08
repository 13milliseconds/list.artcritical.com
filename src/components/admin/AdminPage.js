import React from 'react';
import {IndexLink, Link} from 'react-router';


export default class IndexPage extends React.Component {

    render() {
        
        return ( 
            <div className = "admin">
                <header>
                    <h2>Admin page</h2>
                    <IndexLink to={'/admin'} activeClassName="active">New Listing</IndexLink>
                    <Link to={'/admin/edit'} activeClassName="active">Edit Listing</Link>
                    <Link to={'/admin/account'} activeClassName="active">Account</Link>
                </header>
                <div className="admin-content">{this.props.children}</div>
            </div>
        );
    }
}