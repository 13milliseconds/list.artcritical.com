import React from 'react';
import ReactDOM from 'react-dom';
import ListStore from '../stores/ListStore';
import AuthActions from '../actions/AuthActions';
import ListActions from '../actions/ListActions';

// Components
import { IndexLink, Link } from 'react-router';
import SizeSelector from './blocks/sizeSelector';
import Hamburger from './blocks/Hamburger';
import Helmet from './blocks/Helmet'

//Sidebar
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas'
import ListingForm from './forms/ListingForm';

//FontAwesome
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlusCircle from '@fortawesome/fontawesome-pro-light/faPlusCircle'
import faMinusCircle from '@fortawesome/fontawesome-pro-light/faMinusCircle'
import faGlassMartini from '@fortawesome/fontawesome-pro-light/faGlassMartini'
import faTimes from '@fortawesome/fontawesome-pro-light/faTimes'
import faEdit from '@fortawesome/fontawesome-pro-light/faEdit'
import faTrash from '@fortawesome/fontawesome-pro-light/faTrash'
import faBars from '@fortawesome/fontawesome-pro-light/faBars'
import faPencilAlt from '@fortawesome/fontawesome-pro-light/faPencilAlt'
import faListUl from '@fortawesome/fontawesome-pro-light/faListUl'
import faTh from '@fortawesome/fontawesome-pro-light/faTh'
import faLink from '@fortawesome/fontawesome-pro-light/faLink'
import faInfoCircle from '@fortawesome/fontawesome-pro-light/faInfoCircle'
import faPlus from '@fortawesome/fontawesome-pro-regular/faPlus'
import faMinus from '@fortawesome/fontawesome-pro-regular/faMinus'
import faPhone from '@fortawesome/fontawesome-pro-regular/faPhone'
import faStar from '@fortawesome/fontawesome-pro-solid/faStar'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'


fontawesome.library.add(faBars, faListUl, faTh, faPlusCircle, faPlusCircle, faPlus, faMinus, faGlassMartini, faStar, faTimes, faFacebook, faInfoCircle, faEdit, faTrash, faPhone, faLink, faPencilAlt)


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

    toggleMenu() {
        ListActions.toggleMenu()
    }

    toggleAdminMenu() {
        ListActions.toggleSideBar()
    }


    render() {

        const { user } = this.state;
        const name = user.name;
        const mylistNum = user.mylist.length;
        const connectedClass = user.isLoggedIn && ' connected'
        var currentLocation = this.props.location.pathname.slice(1).replace("/", "-")

        const renderLogin = () => <Link to={'/login'} activeClassName="active">Login</Link>;
        const renderGreeting = name => <div><Link to={'/account'} activeClassName="active">Account</Link><button onClick={AuthActions.attemptLogOut}>Log Out</button></div>;
        return (
            <div className={currentLocation + connectedClass + " app-container"}>
                <Helmet
                    title="The List"
                    link="https://list.artcritical.com"
                />
                <header className={"mainHeader" + (this.state.menuActive ? ' active' : '')}>
                    <div className="mainLogo">
                        <a href="http://artcritical.com">
			                <img src="/images/artcritical-toplogo.png" />
                        </a>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">The List</a>
                                <ul className="submenu">
                                    <li><IndexLink onClick={this.toggleMenu} to={'/'} activeClassName="active">Week at a Glance</IndexLink></li>
                                    <li><Link onClick={this.toggleMenu} to={'/current'} activeClassName="active">Current</Link></li>
                                    <li><Link onClick={this.toggleMenu} to={'/events'} activeClassName="active">Events</Link></li>
                                    <li><Link onClick={this.toggleMenu} to={'/map'} activeClassName="active">Map</Link></li>
                                    <li className="accountOptions">
                                        <Link onClick={this.toggleMenu} to={'/mylist'} activeClassName="active">My List {mylistNum > 0 && '(' + mylistNum + ')'}</Link>
                                        {user.isLoggedIn && 
                                            <ul className="submenu">
                                                <Link onClick={this.toggleMenu} to={'/account'} activeClassName="active">Account</Link>
                                                <a onClick={AuthActions.attemptLogOut}>Log Out</a>
                                            </ul>
                                        }
                                    </li>
                                    {user.isLoggedIn &&  <li><Link onClick={this.toggleMenu} to={'/admin'} activeClassName="active">Admin</Link></li>}
                                </ul>
                            </li>
                            <li><a href="http://www.artcritical.com">Magazine</a></li>
                            <li><a href="http://www.artcritical.com/category/departments/the-review-panel/">The Review Panel</a></li>
                        </ul>
                    </nav>
                    <SizeSelector view={this.state.view} />
                </header>
                <Hamburger active={this.state.menuActive} />
                <OffCanvas width={500} transitionDuration={300} isMenuOpened={this.state.sidebarOpen} position={"right"} className={"fullCanvas"}>
                    <OffCanvasBody className={"app-content cf"}>
                        { //Give the current state as props to the children elements
                            React.cloneElement(this.props.children, this.state)}
                    </OffCanvasBody>
                    <OffCanvasMenu className={"sideMenu"}>
                        <a className="close" onClick={this.toggleAdminMenu}><FontAwesomeIcon icon={['fal', 'times']} /></a>
                        {this.state.sidebarOpen &&
                            <div>
                                <h3>Edit Listing</h3>
                            <ListingForm
                                listing={this.state.listingEdit}
                                error={this.state.error.updatelisting}
                                loading={this.state.loading.updatelisting}
                                success={this.state.success} />
                                </div>
                        }
                        <div className="overlay"></div>
                    </OffCanvasMenu>
                </OffCanvas>
                <footer>
                    <p>"artcritical," "artcritical.com" and "The Review Panel" ©2018 artcritical, LLC 2003-2010</p>
                </footer>
            </div>
        );
    }
}