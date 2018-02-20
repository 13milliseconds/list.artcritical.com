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

        let adminRender = this.props.user.isLoggedIn && this.props.user.userAccess === superAdmin ?
				<nav>
                    <IndexLink to={'/admin'} activeClassName="active">Listings</IndexLink>
                    <Link to={'/admin/venues'} activeClassName="active">Venues</Link>
                    <Link to={'/admin/venuesadmin'} activeClassName="active">Overview</Link>
                    <Link to={'/admin/featured'} activeClassName="active">Featured Calendar</Link>
				</nav>
            : this.props.user.isLoggedIn && this.props.user.userAccess === admin ? 
				<nav>
                    <IndexLink to={'/admin'} activeClassName="active">Listings</IndexLink>
                    <Link to={'/admin/venues'} activeClassName="active">Venues</Link>
                    <Link to={'/admin/venuesadmin'} activeClassName="active">Overview</Link>
                    <Link to={'/admin/featured'} activeClassName="active">Featured Calendar</Link>
				</nav>
            : this.props.user.isLoggedIn && this.props.user.userAccess === editor ? 
				<nav>
                    <IndexLink to={'/admin'} activeClassName="active">Listings</IndexLink>
                    <Link to={'/admin/venues'} activeClassName="active">Venues</Link>
                    <Link to={'/admin/venuesadmin'} activeClassName="active">Overview</Link>
                    <Link to={'/admin/featured'} activeClassName="active">Featured Calendar</Link>
				</nav>
            :  <div>
                <header>
                    <h2>Admin</h2>
                    <p>Please login to have access to your account.</p>
                </header>
                <LogInForm loading={this.props.isLoggingIn} />
            </div>
        

   


     //    let adminRender = this.props.user.isLoggedIn && thisthing ?
     //        <div className = "admin cf">
     //            <header>
     //                <h2>Account page</h2>
     //                <IndexLink to={'/account'} activeClassName="active">Account</IndexLink>
     //                <Link to={'/account/newlisting'} activeClassName="active">New Listing</Link>
     //                <Link to={'/account/editlisting'} activeClassName="active">Edit Listing</Link>
     //                <Link to={'/account/editvenue'} activeClassName="active">Edit Venue</Link>
					// <Link to={'/account/venuesadmin'} activeClassName="active">All Venues</Link>
     //                <Link to={'/account/featured'} activeClassName="active">Featured Listings</Link>
     //            </header>
     //            <div className="admin-content">{React.cloneElement(this.props.children, this.props)}</div>

     //        </div>
     //        :
     //        <div>
     //            <header>
     //                <h2>Admin</h2>
     //                <p>Please login to have access to your account.</p>
     //            </header>
     //            <LogInForm loading={this.props.isLoggingIn} />
     //        </div>
        
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