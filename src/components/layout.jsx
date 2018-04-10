import React from 'react';
import ReactDOM from 'react-dom';
import ListStore from '../stores/ListStore';
import AuthActions from '../actions/AuthActions';
import ListActions from '../actions/ListActions';
// Components
import { IndexLink, Link } from 'react-router';
import SizeSelector from './blocks/sizeSelector';

//FontAwesome
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlusCircle from '@fortawesome/fontawesome-pro-light/faPlusCircle'
import faMinusCircle from '@fortawesome/fontawesome-pro-light/faMinusCircle'
import faGlassMartini from '@fortawesome/fontawesome-pro-light/faGlassMartini'
import faTimes from '@fortawesome/fontawesome-pro-light/faTimes'
import faPlus from '@fortawesome/fontawesome-pro-regular/faPlus'
import faMinus from '@fortawesome/fontawesome-pro-regular/faMinus'
import faStar from '@fortawesome/fontawesome-pro-solid/faStar'
 
fontawesome.library.add(faPlusCircle, faPlusCircle, faPlus, faMinus, faGlassMartini, faStar, faTimes)

//Sidebar
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas'
import ListingForm from './forms/ListingForm';


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
        ListActions.toggleSideBar()
    }
    

  render() {
      const { user } = this.state;
      const name = user.name;
      const mylistNum = user.mylist.length;
      var currentLocation = this.props.location.pathname.slice(1).replace("/", "-")
      
      const renderLogin = () => <Link to={'/login'} activeClassName="active">Login</Link>;
      const renderGreeting = name => <div><Link to={'/account'} activeClassName="active">Account</Link><button onClick={AuthActions.attemptLogOut}>Log Out</button></div>;
    return (
      <div className={currentLocation + " app-container"}>
        <div className="hamburger" onClick={this.toggleMenu}><FontAwesomeIcon icon={['fal', 'glass-martini']}/></div>
        <header className={"mainHeader" + (this.state.menuActive? ' active' : '')}>
			<nav>
            <IndexLink to={'/'} activeClassName="active">Week at a Glance</IndexLink>
            <Link to={'/current'} activeClassName="active">Current</Link>
            <Link to={'/events'} activeClassName="active">Events</Link>
			<Link to={'/map'} activeClassName="active">Map</Link>
			<div className="accountOptions">
            <Link to={'/mylist'} activeClassName="active">My List { mylistNum > 0 && '('+mylistNum+')'}</Link>
			{ user.isLoggedIn && <Link to={'/account'} activeClassName="active">Account</Link>}
			{ user.isLoggedIn && <a onClick={AuthActions.attemptLogOut}>Log Out</a>}
			</div>
			{ user.isLoggedIn && <Link to={'/admin'} activeClassName="active">Admin</Link>}
			</nav>
			<SizeSelector view={this.state.view} />
        </header>
        <OffCanvas width={500} transitionDuration={300} isMenuOpened={this.state.sidebarOpen} position={"right"} className={"fullCanvas"}>
            <OffCanvasBody className={"app-content"}>
                { //Give the current state as props to the children elements
                React.cloneElement(this.props.children, this.state)}
            </OffCanvasBody>
            <OffCanvasMenu className={"sideMenu"}>
                    <a onClick={this.toggleMenu}><FontAwesomeIcon icon={['fal', 'times']}/></a>
                <ListingForm 
                            listing={this.state.listingEdit} 
                            error={this.state.error.updatelisting} 
                            loading={this.state.loading.updatelisting}
                            success={this.state.success}/>
                <div className="overlay"></div>
            </OffCanvasMenu>
        </OffCanvas>
        <footer>
          <p>
            This is a first version of the new list using <strong>React</strong> and <strong>Express</strong>.
          </p>
        </footer>
      </div>
    );
  }
}