import React from 'react'
import {Router, Route, IndexRoute, browserHistory } from 'react-router'
import Layout from './components/layout';
import CurrentPage from './components/CurrentPage';
import FuturePage from './components/FuturePage';
import GlancePage from './components/GlancePage';
import EventsPage from './components/EventsPage';
import VenuePage from './components/venues/VenuePage';
//Signin Components
import SignUpPage from './components/login/SignUpPage';
import LogInPage from './components/login/LogInPage';
import MyListPage from './components/myListPage';
import MyListPublicPage from './components/myListPublicPage';
//Admin Components
import AdminPage from './components/admin/AdminPage';
import NewListing from './components/admin/NewListing';
import EditListing from './components/admin/EditListing';
import EditVenue from './components/admin/EditVenue';
import FeaturedListings from './components/admin/featuredPage';
import VenuesPage from './components/admin/VenuesPage';
import UsersPage from './components/admin/UsersPage';
import Account from './components/admin/Account';
// Error Components
import ErrorPage from './components/ErrorPage';

const routes = (
      <Route path="/" component={Layout} history={browserHistory}>
        <IndexRoute component={GlancePage}/>
        <Route path="current" component={CurrentPage}/>
        <Route path="future" component={FuturePage}/>
        <Route path="events" component={EventsPage}/>
        <Route path="signup" component={SignUpPage}/>
        <Route path="mylist" component={MyListPage}/>
		<Route path="mylist/:slug" component={MyListPublicPage}/>
        <Route path="login" component={LogInPage}/>
        <Route path="venue/:slug" component={VenuePage}/>
		<Route path="account" component={Account}/>
        <Route path="admin" component={AdminPage}>
            <IndexRoute component={EditListing}/>
            //<Route path="listings" component={EditListing}/>
            //<Route path="newlisting" component={NewListing}/>
            <Route path="venues" component={EditVenue}/>
            <Route path="featured" component={FeaturedListings}/>
			<Route path="venuesadmin" component={VenuesPage}/>
			<Route path="users" component={UsersPage}/>
        </Route>
        <Route path="*" component={ErrorPage}/>
      </Route>
);

export default routes;