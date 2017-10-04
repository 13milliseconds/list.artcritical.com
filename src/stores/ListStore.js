import alt from '../alt';
import ListActions from '../actions/ListActions';
import AuthActions from '../actions/AuthActions';
import ImagesActions from '../actions/ImagesActions';

class ListStore {
    constructor() {
        this.bindActions(ListActions);
        this.bindActions(AuthActions);
        this.bindActions(ImagesActions);
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
        this.user.avatar = '';
        // Image State
        this.isUploaded = false;
        this.uploadedFileCloudinaryUrl = '';
        this.listingEdit = {},
        this.listingEdit.image = ''
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
        console.log('User conneced: ', action);
        this.user.email = action.local.username;
        this.user.name = action.local.name;
        this.user.id = action._id;
        this.user.isLoggedIn = true;
        this.user.isLoggingIn = false;
        this.user.avatar = action.avatar;
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
        this.user.email = action.local.username;
        this.user.avatar = action.avatar;
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
        this.user.avatar = action.avatar;
        if (action.local){
            this.user.name = action.local.name;
            this.user.email = action.local.username;
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
    
    // INFO CHANGE ON ACCOUNT PAGE
    onUserInfoChange (event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.user[name] = value;
    }
    // UPDATE USER INFO
    onUpdateUserSuccess () {
        console.log('Update Success');
    }
    onUpdateUserFailure () {
        console.log('Update Failure');
    }
    
    // UPLOAD AN AVATAR
    onImageUploadSuccess(image){
        this.isUploaded = true;
        this.user.avatar = image.public_id;
    }
    onImageUploadFailure(err){
        console.log('Error: ', err);
    }
    // UPLOAD A THUMBNAIL
    onThumbnailUploadSuccess(image){
        this.isUploaded = true;
        console.log(image);
        this.listingEdit.image = image.public_id;
    }
    onThumbnailUploadFailure(err){
        console.log('Error: ', err);
    }
}

export default alt.createStore(ListStore);