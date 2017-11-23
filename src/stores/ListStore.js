import alt from '../alt';
import ListActions from '../actions/ListActions';
import AuthActions from '../actions/AuthActions';
import ImagesActions from '../actions/ImagesActions';
import toastr from 'toastr';

class ListStore {
    constructor() {
        this.bindActions(ListActions);
        this.bindActions(AuthActions);
        this.bindActions(ImagesActions);
        //Display settings
        this.view = 'medium';
        //List states
        this.currentListings = [];
        this.futureListings = [];
        this.allListings = [];
        this.eventsListings = [];
        this.glanceListings = [];
        // Auth states
        this.user = {};
        this.user.name = '';
        this.user.id = '';
        this.user.isLoggedIn = false;
        this.user.isLoggingIn = false;
        this.user.email = '';
        this.user.avatar = '';
        this.user.facebook = {};
        this.user.mylist = [];
        // Image State
        this.isUploaded = false;
        this.uploadedFileCloudinaryUrl = '';
        this.listingEdit = {},
        this.listingEdit.image = ''
        //New listing states
        this.listingEdit = {};
        this.listingEdit._id = '';
        this.listingEdit.name = '';
        this.listingEdit.description = '';
        this.listingEdit.text = '';
        this.listingEdit.event = false;
        this.listingEdit.venue = {};
        this.listingEdit.venue._id = '';
        this.listingEdit.venue.address = '';
        //New venue states
        this.venueEdit = {};
        this.venueEdit._id = '';
        this.venueEdit.name = '';
        // Featured listings
        this.feature = {};
        this.feature.text = '';
        this.feature.list = {};
        this.feature.venue = {};
        //Venues
        this.allVenues = [];
        this.venue = {};
        this.venue.currentListings = [];
        this.venue.upcomingListings = [];
        this.venue.pastListings = [];
        //Loadings
        this.loading = {};
        this.loading.login = false;
        this.loading.register = false;
        this.loading.updateuser = false;
        this.loading.updatelisting = false;
        this.loading.current = false;
        this.loading.future = false;
        this.loading.allVenues = false;
        //Error Messages
        this.error = {};
        this.error.feature = '';
        this.error.updateuser = '';
        this.error.updatelisting = {};
        this.error.savelisting = {};
        //Success
        this.success = {};
        this.success.updateuser = false;
        this.success.updatelisting = false;
        this.success.savelisting = false;
    }
    
    //List Reducers
    onGetCurrentAttempt(){
        this.loading.current = true;
    }
    onGetCurrentSuccess(data) {
        this.loading.current = false;
        this.currentListings = this.currentListings.concat(data);
    }
    onGetFutureAttempt(){
        this.loading.future = true;
    }
    onGetFutureSuccess(data) {
        this.loading.future = false;
        this.futureListings = this.futureListings.concat(data);
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
        this.loading.current = false;
        // Handle multiple response formats, fallback to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
    onGetFutureFail(jqXhr) {
        this.loading.future = false;
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
    
    //Listing size change
    onSizeChange(size){
        this.view = size;
    }
    
    // Reset listing edit
    onListingEditReset(){
        this.listingEdit = {
            image: '',
            name: '',
            _id: '',
            description: '',
            text: '',
            venue: {},
            end: null,
            start: null
        };
    }
    onVenueEditReset(){
        this.venueEdit = {
            _id: '',
            name: '',
            address: '',
            website: '',
        };
    }
    
    // Get listing info
    onGetListingInfoSuccess(data){
        this.listingEdit = data;
        this.feature.list = data;
    }
    onGetListingInfoFailure(jqXhr){
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
    
    // Get venue info
    onGetVenueFullInfoSuccess(data){
        this.listingEdit.venue = data.venue;
        this.venue = data.venue;
        this.venue.currentListings = data.currentListings;
        this.venue.upcomingListings = data.upcomingListings;
        this.venue.pastListings = data.pastListings;
        
        /*const today = new Date();
        
        this.venue.listings.map(function(listing){
            if (listing.start > today){
                console.log('upcoming');
            } else if (listing.end < today){
                console.log('past');
            } else {
                console.log('present');
            }
        });*/
        
    }
    // Get venue info
    onGetVenueInfoSuccess(data){
        this.venueEdit = data;
    }
    onGetVenueFullInfoFailure(jqXhr){
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
    onGetVenueInfoFailure(jqXhr){
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
    onUpdateVenue(info){
        this.venue.coordinates = {
            lat: info[1],
            long: info[0]
        }
    }
    onUpdateVenueAttempt(){
        console.log('Updating Venue');
    }
    onUpdateVenueSuccess(data){
        console.log('Updating Venue', data);
    }
    onUpdateVenueFailure(){
        console.log('Error Updating Venue');
    }
    
    onGetVenueListingsSuccess(data){
        this.venue.listings = data;
    }
    onGetVenueListingsFailure(error){
        console.log(error);
    }
    onGetVenuesAdminAttempt(){
        this.loading.allVenues = true;
    }
    onGetVenuesAdminSuccess(data){
        this.loading.allVenues = false;
        this.allVenues = this.allVenues.concat(data);
    }
    onGetVenuesAdminFailure(error){
        console.log(error);
    }
    
    //Reset the venue in the form
    onResetVenue() {
        this.listingEdit.venue = {
            _id: '',
            address: '',
        }
    }
    
    //Save a new listing
    onSaveListingAttempt(){
        this.loading.savelisting = true;       
    }
    onSaveListingSuccess(data){
        console.log('Saved: ', data);   
        this.loading.savelisting = false; 
        this.success.savelisting = true; 
    }
    onSaveListingFailure(err){
        console.log('Error: ', err);
        this.loading.savelisting = false; 
        this.error.savelisting.general = 'Error while saving changes'; 
    }
    
    
    //Update a listing
    onUpdateListingAttempt(){
        this.loading.updatelisting = true;
    }
    onUpdateListingSuccess(data){
        this.loading.updatelisting = false; 
        this.success.updatelisting = true; 
        var that = this;
        setTimeout(() => {
            that.success.updatelisting = false;
        }, 1000);
    }
    onUpdateListingFailure(err){
        this.loading.updatelisting = false; 
        this.error.updatelisting.general = 'Error while saving changes'; 
        console.log('Error: ', err);
    }
    
    //Update a listing
    onDeleteListingSuccess(data){
        console.log('Deleted: ', data);        
    }
    onDeleteListingFailure(err){
        console.log('Error: ', err);
    }
    
    //Update info on listing page
    onListingInfoChange (info){
        if (info.target) {
            const value = info.target.value;
            const name = info.target.name;   
            this.listingEdit[name] = value;
        } else if (info.startDate) {
            this.listingEdit.start = info.startDate;
            if (info.endDate){
                this.listingEdit.end = info.endDate;
            }
       } else {
           this.listingEdit.event = !info.event;  
            console.log(this.listingEdit.event);
        }
    }
    
    //Update info on feature page
    onFeatureInfoChange (info){
            const value = info.target.value;
            const name = info.target.name;   
            this.feature[name] = value;
    }
    
    //Update info on venue page
    onVenueInfoChange (info){
            const value = info.target.value;
            const name = info.target.name;   
            this.venueEdit[name] = value;
    }
    
    //FEATURED
    onupdateFeatureSuccess(data){
        console.log(data);
    }
    onupdateFeatureFailure(error){
        console.log(error);
    }
    onFeatureReset(){
        this.feature= {};
        this.feature.text = '';
        this.feature.list = {};
        this.feature.venue = {};
    }
    onFeatureLoadSuccess(data) {
        if (data){
            this.feature = data;
            this.listingEdit._id = data.list._id;
            this.listingEdit.name = data.list.name;
            this.listingEdit.text = data.text;
            this.listingEdit.image = data.list.image;
            this.listingEdit.venue._id = data.venue._id;
            this.error.feature = "";
        } else {
            this.error.feature = "No Feature selected today";
        }
    }
    onFeatureLoadFailure(error) {
        console.log("Feature load error: ", error);
        this.feature= {};
        this.feature.text = '';
        this.feature.list = {};
        this.feature.venue = {};
    }
    
    // Auth Reducers
    
    // LOGIN ATTEMPT
    onLoginAttempt(){
        this.isLoggingIn = true;
        this.loginRedirect = false;
    }
    onLoginFailure(error){
        console.log('Login error: ', error);
        this.user.name = '';
        this.user.id = '';
        this.user.isLoggedIn = false;
        this.user.isLoggingIn = false;
        this.user.email = '';
    }
    onLoginSuccess(action){
        this.user = action;
        this.user.isLoggedIn = true;
        this.user.isLoggingIn = false;
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
        this.user.name = user.name;
        this.user.id = user._id;
        this.user.facebook = {
            id: user.facebook.id,
            token: user.facebook.token
        };
        this.user.isLoggedIn = true;
    }
    
    //UPDATE USER
    onUpdateUserAttempt(){
        this.loading.updateuser = true;
        this.success.updateuser = '';
        this.error.updateuser = '';
    }
    onUpdateUserSuccess(data){
        console.log('Success!');
        this.loading.updateuser = false;
        this.success.updateuser = 'Saved!';
    }
    onUpdateUserFailure(error){
        console.log('Error!');
        this.loading.updateuser = false;
        this.error.updateuser = 'Error Saving';
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
        this.user.mylist = [];
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
        this.user = action;
        this.user.isLoggedIn = true;
        this.user.isLoggingIn = false;
    }
    
    // ADD TO MYLIST
    onAddToMyListSuccess(response){
        this.user.mylist = response;
    }
    onAddToMyListFailure(error){
        console.log(error);
    }
    
    // GET MYLIST
    onGetMylistSuccess(data) {
        this.user.mylist = data;
    }
    onGetMylistFailure(jqXhr) {
        // Handle multiple response formats, fallback to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
    // REORDER MYLIST
    onReorderMyListAttempt(data){
        this.user.mylist = data;
    }
    onReorderMyListSuccess(data){
        console.log('saved!');  
        console.log(data)
    }
    onReorderMyListFailure(){
        console.log('problem!');
    }
    
    // INFO CHANGE ON ACCOUNT PAGE
    onUserInfoChange (event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.user[name] = value;
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
        this.listingEdit.image = image.public_id;
        this.feature.list.image = image.public_id;
    }
    onThumbnailUploadFailure(err){
        console.log('Error: ', err);
    }
}

export default alt.createStore(ListStore);