import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
            <h1> Welcome to the List</h1>
            <IndexLink to={'/'} activeClassName="active">All</IndexLink>
            <Link to={'/current'} activeClassName="active">Current</Link>
            <Link to={'/ataglance'} activeClassName="active">At a Glance</Link>
            <Link to={'/events'} activeClassName="active">Events</Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is a first version of the new list using <strong>React</strong> and <strong>Express</strong>.
          </p>
        </footer>
      </div>
    );
  }
}