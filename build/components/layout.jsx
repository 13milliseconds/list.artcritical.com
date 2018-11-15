import React from 'react';
import ListStore from '../stores/ListStore';
import AuthActions from '../actions/AuthActions';
import ListActions from '../actions/ListActions';

// Components
import { IndexLink, Link } from 'react-router';
import SizeSelector from './blocks/sizeSelector';
import Hamburger from './blocks/Hamburger';
import Helmet from './blocks/Helmet'

//React Dates initialization
import 'react-dates/initialize';

//Sidebar
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas'
import ListingForm from './forms/ListingForm';
import EventForm from './forms/EventForm';

//Google Analytics
import ReactGA from 'react-ga';

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faInfoCircle, faGlassMartini, faPlusCircle, faSearch, faSpinnerThird, faTimes, faLink, faEdit, faTh, faListUl, faCalendar, faPencilAlt, faBars, faMapMarkerAlt, faExternalLinkSquare, faMap, faTrash} from '@fortawesome/pro-light-svg-icons'
import {faEnvelope, faPhone, faMinus, faPlus} from '@fortawesome/pro-regular-svg-icons'
import { faStar } from '@fortawesome/pro-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'


library.add(faBars, faListUl, faTwitter, faExternalLinkSquare, faTh, faMap, faEnvelope, faCalendar, faPlusCircle, faPlusCircle, faMapMarkerAlt, faPlus, faMinus, faSpinnerThird, faGlassMartini, faStar, faTimes, faFacebook, faInfoCircle, faSearch, faEdit, faTrash, faPhone, faLink, faPencilAlt)


export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = ListStore.getState();

        this.onChange = this.onChange.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentWillMount() {
        // Before the component mounts, check for an existing user session
        AuthActions.checkSession();
        ReactGA.initialize('UA-74357159-12');
    }

    componentDidMount() {
        ListStore.listen(this.onChange);
        ReactGA.pageview(window.location.pathname);

        this.setState({
            url: window.location.href
        })
    }

    componentWillUnmount() {
        ListStore.unlisten(this.onChange);
    }

    componentWillReceiveProps(nextProps) {
        const currentPage = this.props.location.pathname;
        const nextPage = nextProps.location.pathname;
  
        if (currentPage !== nextPage) {
            ReactGA.pageview(nextPage);
        }
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
        const mylistNum = user.mylist.length;
        const connectedClass = user.isLoggedIn ? ' connected' : ''
        var currentLocation = this.props.location.pathname.slice(1).replace("/", "-")

        //admin access
        let allowAccess = user.isLoggedIn && user.userAccess > 0 ? true : false


        return (
            <div className={currentLocation + "Page app-container " + connectedClass}>
                <Helmet
                    title="The List"
                    link={"https://list.artcritical.com" + this.props.location.pathname}
                    ogUrl={"https://list.artcritical.com" + this.props.location.pathname}
                    ogType="website"
                    ogTitle="The List - artcritical"
                    ogDescription="Explore art exhibitions in New York City and beyond. Create your personal lists. See. Share."
                    ogImage="/images/facebook-share.jpg"
                />
                <header className={"mainHeader" + (this.state.menuActive ? ' active' : '')}>
                    <div className="mainLogo">
                        <a href="http://artcritical.com">
			                <h1>artcritical</h1>
                            <h2>the online magazine of art and ideas</h2>
                        </a>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">The List</a>
                                <ul className="submenu">
                                    <li><IndexLink onClick={this.toggleMenu} to={'/'} activeClassName="active">Week at a Glance</IndexLink></li>
                                    <li><Link onClick={this.toggleMenu} to={'/current'} activeClassName="active">All Shows</Link></li>
                                    <li><Link onClick={this.toggleMenu} to={'/events'} activeClassName="active">Talks/Events</Link></li>
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
                                    {allowAccess && <li><Link onClick={this.toggleMenu} to={'/admin'} activeClassName="active">Admin</Link></li>}
                                </ul>
                            </li>
                            <li><a href="http://www.artcritical.com">Magazine</a></li>
                            <li><a href="http://www.artcritical.com/category/departments/the-review-panel/">The Review Panel</a></li>
                        </ul>
                    </nav>
                    <SizeSelector view={this.state.view} />
                </header>
                <div className="mobileMenu">
                    <nav>
                        <ul>
                            <li><IndexLink to={'/'} activeClassName="active">
                                <FontAwesomeIcon icon={['fal', 'calendar']} />Week</IndexLink></li>
                            <li><Link to={'/current'} activeClassName="active">
                                <FontAwesomeIcon icon={['fal', 'list-ul']} />All</Link></li>
                            <li><Link to={'/events'} activeClassName="active">
                                <FontAwesomeIcon icon={['fal', 'glass-martini']} />Events</Link></li>
                            <li><Link to={'/map'} activeClassName="active">
                                <FontAwesomeIcon icon={['fal', 'map']} />Map</Link></li>
                            <li><Link  to={'/mylist'} activeClassName="active">
                                <FontAwesomeIcon icon={['fal', 'map-marker-alt']} />My List</Link></li>
                        </ul>
                    </nav>
                </div>
                <Hamburger active={this.state.menuActive} />
                <OffCanvas width={500} transitionDuration={300} isMenuOpened={this.state.sidebarOpen} position={"right"} className={"fullCanvas"}>
                    <OffCanvasBody className={"app-content cf"}>
                        { //Give the current state as props to the children elements
                            React.cloneElement(this.props.children, this.state)}
                    </OffCanvasBody>
                    <OffCanvasMenu className={"sideMenu"}>
                        <a className="close" onClick={this.toggleAdminMenu}><FontAwesomeIcon icon={['fal', 'times']} /></a>
                        {typeof this.state.listingEdit._id === "string" &&
                            <div>
                                <h3>Edit Listing</h3>
                            <ListingForm
                                listing={this.state.listingEdit}
                                error={this.state.error}
                                loading={this.state.loading}
                                success={this.state.success}
                                dateVertical={true} />
                                </div>
                        }
                        {typeof this.state.eventEdit._id === "string" &&
                            <div>
                                <h3>Edit Event</h3>
                            <EventForm
                                event={this.state.eventEdit}
                                error={this.state.error}
                                loading={this.state.loading}
                                success={this.state.success} />
                                </div>
                        }
                        <div className="overlay"></div>
                    </OffCanvasMenu>
                </OffCanvas>
                <footer>
                    <p>"artcritical," "artcritical.com" and "The Review Panel" ©2018 artcritical, LLC 2003-2018</p>
                </footer>
            </div>
        );
    }
}