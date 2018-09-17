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
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlusCircle from '@fortawesome/fontawesome-pro-light/faPlusCircle'
import faGlassMartini from '@fortawesome/fontawesome-pro-light/faGlassMartini'
import faTimes from '@fortawesome/fontawesome-pro-light/faTimes'
import faEdit from '@fortawesome/fontawesome-pro-light/faEdit'
import faCalendar from '@fortawesome/fontawesome-pro-light/faCalendar'
import faTrash from '@fortawesome/fontawesome-pro-light/faTrash'
import faMap from '@fortawesome/fontawesome-pro-light/faMap'
import faExternalLinkSquare from '@fortawesome/fontawesome-pro-light/faExternalLinkSquare'
import faMapMarkerAlt from '@fortawesome/fontawesome-pro-light/faMapMarkerAlt'
import faBars from '@fortawesome/fontawesome-pro-light/faBars'
import faPencilAlt from '@fortawesome/fontawesome-pro-light/faPencilAlt'
import faListUl from '@fortawesome/fontawesome-pro-light/faListUl'
import faTh from '@fortawesome/fontawesome-pro-light/faTh'
import faLink from '@fortawesome/fontawesome-pro-light/faLink'
import faSpinnerThird from '@fortawesome/fontawesome-pro-light/faSpinnerThird'
import faSearch from '@fortawesome/fontawesome-pro-light/faSearch'
import faInfoCircle from '@fortawesome/fontawesome-pro-light/faInfoCircle'
import faPlus from '@fortawesome/fontawesome-pro-regular/faPlus'
import faMinus from '@fortawesome/fontawesome-pro-regular/faMinus'
import faPhone from '@fortawesome/fontawesome-pro-regular/faPhone'
import faStar from '@fortawesome/fontawesome-pro-solid/faStar'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'


fontawesome.library.add(faBars, faListUl, faExternalLinkSquare, faTh, faMap, faCalendar, faPlusCircle, faPlusCircle, faMapMarkerAlt, faPlus, faMinus, faSpinnerThird, faGlassMartini, faStar, faTimes, faFacebook, faInfoCircle, faSearch, faEdit, faTrash, faPhone, faLink, faPencilAlt)


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
        ReactGA.initialize('UA-74357159-12');
    }

    componentDidMount() {
        ListStore.listen(this.onChange);
        ReactGA.pageview(window.location.pathname);

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
                    link="https://list.artcritical.com"
                    ogType="website"
                    ogTitle="The List - artcritical"
                    ogUrl="https://list.artcritical.com"
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