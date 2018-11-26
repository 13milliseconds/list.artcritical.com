import React from 'react'
import {Route, IndexRoute, browserHistory } from 'react-router'
import Layout from './components/layout'
import CurrentPage from './components/CurrentPage'
import FuturePage from './components/FuturePage'
import GlancePage from './components/GlancePage'
import CurrentMap from './components/CurrentMap'
import EventsPage from './components/EventsPage'
import VenuePage from './components/venues/VenuePage'
//Signin Components
import SignUpPage from './components/login/SignUpPage'
import LogInPage from './components/login/LogInPage'
import ResetPage from './components/login/ResetPage'
import ForgotPage from './components/login/ForgotPage'
import MyListPage from './components/myListPage'
import MyListPublicPage from './components/myListPublicPage'
import AuthSuccess from './components/login/AuthSuccess'
//Admin Components
import AdminPage from './components/admin/AdminPage'
import EditListing from './components/admin/EditListing'
import EditEvents from './components/admin/EditEvents'
import EditVenue from './components/admin/EditVenue'
import SingleFeature from './components/SingleFeature'
import FeaturedListings from './components/admin/featuredPage'
import PastFeaturedListings from './components/PastFeaturedPage'
import OverviewPage from './components/admin/OverviewPage'
import UsersPage from './components/admin/UsersPage'
import ReviewPage from './components/admin/ReviewPage'
import AdsPage from './components/admin/AdsPage'
import Account from './components/admin/Account'
// Error Components
import ErrorPage from './components/ErrorPage'

const routes = (
      <Route path="/" component={Layout} history={browserHistory}>
        <IndexRoute component={GlancePage}/>
        <Route path="current" component={CurrentPage}/>
        <Route path="future" component={FuturePage}/>
        <Route path="events" component={EventsPage}/>
		<Route path="map" component={CurrentMap}/>
        <Route path="signup" component={SignUpPage}/>
        <Route path="mylist" component={MyListPage}/>
		<Route path="mylist/:slug" component={MyListPublicPage}/>
        <Route path="login" component={LogInPage}/>
        <Route path="reset/:token" component={ResetPage}/>
        <Route path="forgot" component={ForgotPage}/>
        <Route path="venue/:slug" component={VenuePage}/>
        <Route path="features" component={PastFeaturedListings}/>
        <Route path="features/:date" component={SingleFeature}/>
		<Route path="account" component={Account}/>
        <Route path="admin" component={AdminPage}>
            <IndexRoute component={OverviewPage}/>
            <Route path="listings" component={EditListing}/>
            <Route path="events" component={EditEvents}/>
            <Route path="venues" component={EditVenue}/>
            <Route path="featured" component={FeaturedListings}/>
			<Route path="review" component={ReviewPage}/>
			<Route path="users" component={UsersPage}/>
            <Route path="ads" component={AdsPage}/>
        </Route>
        <Route path="auth/facebook/success" component={AuthSuccess} />
        <Route path="*" component={ErrorPage}/>
      </Route>
);

export default routes;