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
        this.name = '';
        this.id = '';
        this.isLoggedIn = false;
        this.isLoggingIn = false;
        this.email = '';
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
        this.name = '';
        this.id = '';
        this.isLoggedIn = false;
        this.isLoggingIn = false;
        this.email = '';
    }
    onLoginSuccess(action){
        this.name = action.local.name;
        this.id = action._id;
        this.isLoggedIn = true;
        this.isLoggingIn = false;
        this.email = action.local.email;
        //Redirect to index
        this.loginRedirect = true;
    }
    
    // CHECK SESSION
    onSessionCheckFailure() {
        this.name = '';
        this.id = '';
        this.isLoggedIn = false;
        this.isLoggingIn = false;
        this.email = '';
    }
    onSessionCheckSuccess(action){
        this.name = action.local.name;
        this.id = action._id;
        this.isLoggedIn = true;
        this.isLoggingIn = false;
        this.email = action.local.email;
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