import React from 'react';
import {IndexLink, Link} from 'react-router';
// Components
import LogInForm from '../login/LogInForm.jsx';
import UserPage from '../user/UserPage';
// import UserPanel from '../'


export default class AdminPage extends React.Component {

    render() {
		
        const superAdmin = 3
        const admin = 2
        const editor = 1
        const subscriber = 0

        let adminRender = this.props.user.isLoggedIn && this.props.user.userAccess >= 2 ?
				<nav>
                    <IndexLink to={'/admin'} activeClassName="active">Listings</IndexLink>
                    <Link to={'/admin/venues'} activeClassName="active">Venues</Link>
                    <Link to={'/admin/venuesadmin'} activeClassName="active">Overview</Link>
                    <Link to={'/admin/featured'} activeClassName="active">Featured Calendar</Link>
					<Link to={'/admin/users'} activeClassName="active">User Admin</Link>
                    <Link to={'/admin/review'} activeClassName="active">Review Events</Link>
				</nav>
            : this.props.user.isLoggedIn && this.props.user.userAccess === editor ? 
				<nav>
                    <IndexLink to={'/admin'} activeClassName="active">Listings</IndexLink>
                    <Link to={'/admin/venues'} activeClassName="active">Venues</Link>
                    <Link to={'/admin/venuesadmin'} activeClassName="active">Overview</Link>
                    <Link to={'/admin/featured'} activeClassName="active">Featured Calendar</Link>
				</nav>
            :  	<div>
					<header>
						<h2>Admin</h2>
						<p>You do not have the necessary privileges to access this page.</p>
					</header>
				</div>
        
		
        return ( 
            <div className = "admin cf">
                <header>
                    <h2>Account page</h2>
              {adminRender}
            </header>
				{this.props.user.isLoggedIn && this.props.user.userAccess > 0 &&
                <div className="admin-content">{React.cloneElement(this.props.children, this.props)}</div>
				 }
            </div>
        );
    }
}