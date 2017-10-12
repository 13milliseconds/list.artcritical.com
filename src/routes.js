import React from 'react'
import {Router, Route, IndexRoute } from 'react-router'
import Layout from './components/layout';
import IndexPage from './components/IndexPage';
import CurrentPage from './components/CurrentPage';
import GlancePage from './components/GlancePage';
import EventsPage from './components/EventsPage';
//Signin Components
import SignUpPage from './components/login/SignUpPage';
import LogInPage from './components/login/LogInPage';
import MyListPage from './components/myListPage';
//Admin Components
import AdminPage from './components/admin/AdminPage';
import NewListing from './components/admin/NewListing';
import EditListings from './components/admin/EditListings';
import FeaturedListings from './components/admin/featuredPage';
import Account from './components/admin/Account';
// Error Components
import ErrorPage from './components/ErrorPage';

const routes = (
      <Route path="/" component={Layout}>
        <IndexRoute component={GlancePage}/>
        <Route path="current" component={CurrentPage}/>
        <Route path="events" component={EventsPage}/>
        <Route path="signup" component={SignUpPage}/>
        <Route path="mylist" component={MyListPage}/>
        <Route path="login" component={LogInPage}/>
        <Route path="account" component={AdminPage}>
            <IndexRoute component={Account}/>
            <Route path="edit" component={EditListings}/>
            <Route path="newlisting" component={NewListing}/>
            <Route path="featured" component={FeaturedListings}/>
        </Route>
        <Route path="*" component={ErrorPage}/>
      </Route>
);

export default routes;