import React from 'react';
import {IndexLink, Link} from 'react-router';


export default class IndexPage extends React.Component {

    render() {
        let adminRender = this.props.user.isLoggedIn ?
            <div className = "admin cf">
                <header>
                    <h2>Account page</h2>
                    <IndexLink to={'/account'} activeClassName="active">Account</IndexLink>
                    <Link to={'/account/newlisting'} activeClassName="active">New Listing</Link>
                    <Link to={'/account/edit'} activeClassName="active">Edit Listing</Link>
                    <Link to={'/account/featured'} activeClassName="active">Featured Listings</Link>
                </header>
                <div className="admin-content">{React.cloneElement(this.props.children, this.props)}</div>
            </div>
            :
            <div>
                <p>Please login to have access to your account</p>
                <Link to={'/login'} activeClassName="active">Login</Link>
            </div>
        
        return ( 
            <div>
              {adminRender}
            </div>
        );
    }
}