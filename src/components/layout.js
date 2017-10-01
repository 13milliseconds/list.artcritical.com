import React from 'react';
import { IndexLink, Link } from 'react-router';
import ListStore from '../stores/ListStore';
import AuthActions from '../actions/AuthActions';
import ListActions from '../actions/ListActions';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = ListStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    
    componentWillMount() {
        // Before the component mounts, check for an existing user session
        AuthActions.checkSession();
      }
    
    componentDidMount() {
        ListStore.listen(this.onChange);
        // Get my list
        ListActions.getMylist();
    }

    componentWillUnmount() {
        ListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }
    

  render() {
      
      const { user } = this.state;
      const renderLogin = () => <Link to={'/login'} activeClassName="active">Login</Link>;
      const renderGreeting = name => <div><Link to={'/account'} activeClassName="active">Admin</Link><span>Welcome, {user.name}</span></div>;
      
    return (
      <div className="app-container">
        <header>
            <h1>Welcome to the List</h1>
            <IndexLink to={'/'} activeClassName="active">All</IndexLink>
            <Link to={'/current'} activeClassName="active">Current</Link>
            <Link to={'/ataglance'} activeClassName="active">At a Glance</Link>
            <Link to={'/events'} activeClassName="active">Events</Link>
            <Link to={'/mylist'} activeClassName="active">my list ({this.state.mylist.length})</Link>
            { user.isLoggedIn ? renderGreeting(name) : renderLogin() }
        </header>
        <div className="app-content">
            {React.cloneElement(this.props.children, this.state)}
        </div>
        <footer>
          <p>
            This is a first version of the new list using <strong>React</strong> and <strong>Express</strong>.
          </p>
        </footer>
      </div>
    );
  }
}