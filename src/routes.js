import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import CurrentPage from './components/CurrentPage';
import GlancePage from './components/GlancePage';
import EventsPage from './components/EventsPage';
import ErrorPage from './components/ErrorPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="current" component={CurrentPage}/>
    <Route path="ataglance" component={GlancePage}/>
    <Route path="events" component={EventsPage}/>
    <Route path="*" component={ErrorPage}/>
  </Route>
);

export default routes;