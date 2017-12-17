import React from 'react';
import ListStore from '../stores/ListStore';
import AuthActions from '../actions/AuthActions';
import ListActions from '../actions/ListActions';
// Components
import { IndexLink, Link } from 'react-router';
import SizeSelector from './blocks/sizeSelector';


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
    }

    componentWillUnmount() {
        ListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }
    

  render() {
      
      const { user } = this.state;
      const name = user.name;
      const mylistNum = user.mylist.length;
      
    return (
      <div className="app-container">
        <header className="mainHeader">
            <h1>Everything happening in the art world in New York City and its surroundings.</h1>
			<nav>
            <IndexLink to={'/'} activeClassName="active">Week at a Glance</IndexLink>
            <Link to={'/current'} activeClassName="active">Current</Link>
            <Link to={'/events'} activeClassName="active">Events</Link>
			<div className="accountOptions">
            <Link to={'/mylist'} activeClassName="active">My List { mylistNum > 0 && '('+mylistNum+')'}</Link>
			{ user.isLoggedIn && <Link to={'/account'} activeClassName="active">Account</Link>}
			{ user.isLoggedIn 	? <a onClick={AuthActions.attemptLogOut}>Log Out</a> 
								: <Link to={'/login'} activeClassName="active">Login</Link>}
			</div>
			{ user.isLoggedIn && <Link to={'/admin'} activeClassName="active">Admin</Link>}
			</nav>
			<SizeSelector view={this.state.view} />
        </header>
        <div className="app-content">
            { //Give the current state as props to the children elements
				React.cloneElement(this.props.children, this.state)}
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