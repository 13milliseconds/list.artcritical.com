import React from 'react';
import {IndexLink, Link} from 'react-router';
// Components
import LogInForm from '../login/LogInForm.jsx';
import Helmet from '../blocks/Helmet'


export default class AdminPage extends React.Component {

    render() {

        let allowAccess = this.props.user.isLoggedIn && this.props.user.userAccess > 0 ? true : false
		
        return ( 
            <div className = "adminWrap cf">
                <Helmet title="Admin"/>
                <div className="left-col">
                    <h2>Admin</h2>
                    {allowAccess &&
                        <nav>
                            <ul>
                                <li><IndexLink to={'/admin'} activeClassName="active">Overview</IndexLink></li>
                                <li><Link to={'/admin/listings'} activeClassName="active">Listings</Link></li>
                                <li><Link to={'/admin/venues'} activeClassName="active">Venues</Link></li>
                                <li><Link to={'/admin/featured'} activeClassName="active">Featured Calendar</Link></li>
                                <li><Link to={'/admin/review'} activeClassName="active">Review</Link></li>
                                {this.props.user.userAccess >=1 && <li><Link to={'/admin/users'} activeClassName="active">All Users</Link></li>}
                            </ul>
                        </nav>
                    }
                </div>
				{allowAccess 
                    ? <div className="admin-content">{React.cloneElement(this.props.children, this.props)}</div>
                    : <LogInForm loading={this.props.loading.login} error={this.props.error} />
				 }
            </div>
        );
    }
}