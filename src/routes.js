import React from 'react'
import {Router, Route, IndexRoute } from 'react-router'
import Layout from './components/layout';
import IndexPage from './components/IndexPage';
import CurrentPage from './components/CurrentPage';
import FuturePage from './components/FuturePage';
import GlancePage from './components/GlancePage';
import EventsPage from './components/EventsPage';
import VenuePage from './components/venues/VenuePage';
//Signin Components
import SignUpPage from './components/login/SignUpPage';
import LogInPage from './components/login/LogInPage';
import MyListPage from './components/myListPage';
//Admin Components
import AdminPage from './components/admin/AdminPage';
import NewListing from './components/admin/NewListing';
import EditListing from './components/admin/EditListing';
import EditVenue from './components/admin/EditVenue';
import FeaturedListings from './components/admin/featuredPage';
import VenuesPage from './components/admin/VenuesPage';
import Account from './components/admin/Account';
// Error Components
import ErrorPage from './components/ErrorPage';

const routes = (
      <Route path="/" component={Layout}>
        <IndexRoute component={GlancePage}/>
        <Route path="current" component={CurrentPage}/>
        <Route path="future" component={FuturePage}/>
        <Route path="events" component={EventsPage}/>
        <Route path="signup" component={SignUpPage}/>
        <Route path="mylist" component={MyListPage}/>
        <Route path="login" component={LogInPage}/>
        <Route path="venue/:id" component={VenuePage}/>
        <Route path="venuesadmin" component={VenuesPage}/>
        <Route path="account" component={AdminPage}>
            <IndexRoute component={Account}/>
            <Route path="editlisting" component={EditListing}/>
            <Route path="newlisting" component={NewListing}/>
            <Route path="editvenue" component={EditVenue}/>
            <Route path="featured" component={FeaturedListings}/>
        </Route>
        <Route path="*" component={ErrorPage}/>
      </Route>
);

export default routes;