import React from 'react';
import {IndexLink, Link} from 'react-router';
// Components
import LogInForm from '../login/LogInForm.jsx';


export default class IndexPage extends React.Component {

    render() {
		console.log(this.props.user)
        let adminRender = this.props.user.isLoggedIn ?
            <div className = "admin cf">
                <header>
                    <h2>Admin</h2>
                    <IndexLink to={'/admin'} activeClassName="active">Account</IndexLink>
                    <Link to={'/admin/newlisting'} activeClassName="active">New Listing</Link>
                    <Link to={'/admin/editlisting'} activeClassName="active">Edit Listing</Link>
                    <Link to={'/admin/editvenue'} activeClassName="active">Edit Venue</Link>
					<Link to={'/admin/venuesadmin'} activeClassName="active">All Venues</Link>
                    <Link to={'/admin/featured'} activeClassName="active">Featured Listings</Link>
                </header>
                <div className="admin-content">{React.cloneElement(this.props.children, this.props)}</div>
            </div>
            :
            <div>
                <LogInForm loading={this.props.isLoggingIn} />
            </div>
        
        return ( 
            <div>
              {adminRender}
            </div>
        );
    }
}