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
        this.toggleMenu = this.toggleMenu.bind(this)
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

    toggleMenu(){
        this.setState({
            menuActive: !this.state.menuActive,
            hamburgerActive: !this.state.hamburgerActive
        })
    }
    

  render() {
      const { user } = this.state;
      const name = user.name;
      const mylistNum = user.mylist.length;
      
      const renderLogin = () => <Link to={'/login'} activeClassName="active">Login</Link>;
      const renderGreeting = name => <div><Link to={'/account'} activeClassName="active">Account</Link><button onClick={AuthActions.attemptLogOut}>Log Out</button></div>;
    return (
      <div className="app-container">
        <div className="hamburger" onClick={this.toggleMenu}><i className={"fal " + (this.state.hamburgerActive ? "fa-close" : "fa-bars")}></i></div>
        <header className={"mainHeader" + (this.state.menuActive? ' active' : '')}>
			<nav onClick={this.toggleMenu}>
            <IndexLink to={'/'} activeClassName="active">Week at a Glance</IndexLink>
            <Link to={'/current'} activeClassName="active">Current</Link>
            <Link to={'/events'} activeClassName="active">Events</Link>
			<Link to={'/map'} activeClassName="active">Map</Link>
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