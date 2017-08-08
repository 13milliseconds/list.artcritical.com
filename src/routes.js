import React from 'react'
import {Router, Route, IndexRoute } from 'react-router'
import Layout from './components/layout';
import IndexPage from './components/IndexPage';
import CurrentPage from './components/CurrentPage';
import GlancePage from './components/GlancePage';
import EventsPage from './components/EventsPage';
//Admin Components
import AdminPage from './components/admin/AdminPage';
import NewListing from './components/admin/NewListing';
import EditListings from './components/admin/EditListings';
import Account from './components/admin/Account';
// Error Components
import ErrorPage from './components/ErrorPage';

const routes = (
      <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
        <Route path="current" component={CurrentPage}/>
        <Route path="ataglance" component={GlancePage}/>
        <Route path="events" component={EventsPage}/>
        <Route path="admin" component={AdminPage}>
            <IndexRoute component={NewListing}/>
            <Route path="edit" component={EditListings}/>
            <Route path="account" component={Account}/>
        </Route>
        <Route path="*" component={ErrorPage}/>
      </Route>
);

export default routes;