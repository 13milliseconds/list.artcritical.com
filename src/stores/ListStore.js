import alt from '../alt';
import ListActions from '../actions/ListActions';
import AuthActions from '../actions/AuthActions';

class ListStore {
    constructor() {
        this.bindActions(ListActions);
        this.bindActions(AuthActions);
        //List states
        this.currentListings = [];
        this.allListings = [];
        this.eventsListings = [];
        this.glanceListings = [];
        this.mylist = [];
        // Auth states
        this.user = {};
        this.user.name = '';
        this.user.id = '';
        this.user.isLoggedIn = false;
        this.user.isLoggingIn = false;
        this.user.email = '';
    }
    
    //List Reducers

    onGetCurrentSuccess(data) {
        this.currentListings = data;
    }
    onGetAllSuccess(data) {
        this.allListings = data;
    }
    onGetEventsSuccess(data) {
        this.eventsListings = data;
    }
    onGetGlanceSuccess(data) {
        this.glanceListings = data;
    }


    onGetCurrentFail(jqXhr) {
        // Handle multiple response formats, fallback to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
    onGetAllFail(jqXhr) {
        // Handle multiple response formats, fallback to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
    onGetEventsFail(jqXhr) {
        // Handle multiple response formats, fallback to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
    onGetGlanceFail(jqXhr) {
        // Handle multiple response formats, fallback to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
    
    // Auth Reducers
    
    // LOGIN ATTEMPT
    onLoginAttempt(){
        this.isLoggingIn = true;
        this.loginRedirect = false;
    }
    onLoginFailure(error){
        console.log(error);
        this.user.name = '';
        this.user.id = '';
        this.user.isLoggedIn = false;
        this.user.isLoggingIn = false;
        this.user.email = '';
    }
    onLoginSuccess(action){
        this.user.name = action.local.name;
        this.user.id = action._id;
        this.user.isLoggedIn = true;
        this.user.isLoggingIn = false;
        this.user.email = action.local.email;
    }
    
    // REGISTER ATTEMPT
    onRegisterAttempt(){
        this.isRegistering = true;
    }
    onRegisterFailure(error){
        console.log(error);
        this.user.name = '';
        this.user.id = '';
        this.user.email = '';
        this.isRegistering = false;
    }
    onRegisterSuccess(action){
        this.user.name = action.local.name;
        this.user.id = action._id;
        this.user.email = action.local.email;
        this.isRegistering = false;
        this.user.isLoggedIn = true;
    }
    
    //Facebook Login
    onFacebookLogin(user){
        console.log("Logged in via Facebook");
        this.user.name = user.facebook.name;
        this.user.id = user._id;
        this.user.isLoggedIn = true;
    }
    
    // LOGOUT ATTEMPT
    onLogoutFailure(error){
        console.log("Failed to log out");
        console.log(error);
    }
    onLogoutSuccess(action){
        console.log("Logged out");
        this.user.name = '';
        this.user.id = '';
        this.user.isLoggedIn = false;
        this.user.isLoggingIn = false;
        this.user.email = '';
        this.mylist = [];
    }
    
    // CHECK SESSION
    onSessionCheckFailure() {
        this.user.name = '';
        this.user.id = '';
        this.user.isLoggedIn = false;
        this.user.isLoggingIn = false;
        this.user.email = '';
    }
    onSessionCheckSuccess(action){
        this.user.id = action._id;
        this.user.isLoggedIn = true;
        this.user.isLoggingIn = false;
        if (action.local){
            this.user.name = action.local.name;
        }
        if (action.facebook){
            this.user.name = action.facebook.name;
        }
    }
    
    // ADD TO MYLIST
    onAddToMyListSuccess(response){
        this.mylist = response;
    }
    onAddToMyListFailure(error){
        console.log(error);
    }
    
    // GET MYLIST
    onGetMylistSuccess(data) {
        this.mylist = data;
    }
    onGetMylistFailure(jqXhr) {
        // Handle multiple response formats, fallback to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
}

export default alt.createStore(ListStore);