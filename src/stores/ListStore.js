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
        this.venueEdit = {
			coordinates: {}
		};
        // Featured listings
		this.features = [];
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
        this.loading.updatevenue = false;
        this.loading.savelisting = false;
        this.loading.savevenue = false;
        this.loading.current = false;
        this.loading.future = false;
        this.loading.allVenues = false;
        //Error Messages
        this.error = {};
        this.error.feature = '';
        this.error.updateuser = '';
        this.error.updatelisting = {};
        this.error.updatevenue = {};
        this.error.savelisting = {};
        this.error.savevenue = {};
        //Success
        this.success = {};
        this.success.updateuser = false;
        this.success.updatelisting = false;
        this.success.updatevenue = false;
        this.success.savelisting = false;
        this.success.savevenue = false;
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
	
	onAdminReset(){
		//Reset the Venue Admin
		this.allVenues = [];
		//Reset the Listing Edit
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
		//Reset the Venue Edit
	}
	
    onVenueEditReset(){
        this.venueEdit = {
            coordinates: {}
        }
		// Reset messages
		this.success.updatevenue = false;
		this.loading.updatevenue = false;
		this.error.updatevenue = {
			general: ''
		};
		
    }
    
    // Get listing info
    onGetListingInfoSuccess(info){
		console.log('Listing info loaded', info);
        this.listingEdit = info.data;
		if (info.i !== null){
			console.log('Feature listing');
			this.features[info.i].list = info.data;
			console.log(this.features[info.i].list);
		}
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
    }
    // Get venue info
    onGetVenueInfoSuccess(data){
		this.listingEdit.venue = data;
		this.venueEdit = data;
		//Create a slug automatically if there is none
		if(!data.slug){
            this.venueEdit.slug = data.name.replace(/\s+/g, '-').toLowerCase();
                      }
    }
    onGetVenueFullInfoFailure(jqXhr){
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
    onGetVenueInfoFailure(jqXhr){
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
	//Add a venue
    onSaveVenueAttempt(){
        this.loading.updatevenue = true;       
    }
    onSaveVenueSuccess(data){
        this.loading.updatevenue = false; 
        this.success.updatevenue = true;
    }
    onSaveVenueFailure(err){
        console.log('Error: ', err);
        this.loading.updatevenue = false; 
        this.error.updatevenue.general = 'Error while saving changes'; 
    }
	// Update a venue
    onUpdateVenue(info){
        this.venue.coordinates = {
            lat: info[1],
            long: info[0]
        }
    }
    onUpdateVenueAttempt(){
        this.loading.updatevenue = true;
    }
    onUpdateVenueSuccess(data){
        this.loading.updatevenue = false;
        this.success.updatevenue = true;
    }
    onUpdateVenueFailure(error){
        this.loading.updatevenue = false;
        this.error.updatevenue.general = error;
    }
	
	//Delete a Venue
    onDeleteVenueSuccess(data){
        console.log('Deleted');
    }
    onDeleteVenueFailure(err){
        console.log('Error: ', err);
    }
    
    onGetVenueListingsSuccess(data){
        this.venue.listings = data;
    }
    onGetVenueListingsFailure(error){
        console.log(error);
    }
    onGetVenuesAdminAttempt(){
		this.allVenues = [];
        this.loading.allVenues = true;
    }
    onGetVenuesAdminSuccess(data){
        this.loading.allVenues = false;
        //this.allVenues = this.allVenues.concat(data);
		this.allVenues = data;
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
        console.log('Deleted');        
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
		} else if (info.date) {
            this.listingEdit.start = info.date;
       } else {
           this.listingEdit.event = !info.event;  
        }
    }
    
    //Update info on feature page
    onFeatureInfoChange (data){
            const value = data.event.target.value;
            const name = data.event.target.name;   
            this.features[data.i][name] = value;
    }
    
    //Update info on venue page
    onVenueInfoChange (info){
            const value = info.value;
            const name = info.name;  
        if (name === 'lat'){
            this.venueEdit.coordinates.lat = parseFloat(value);       
        } else if (name === 'long'){
            this.venueEdit.coordinates.long = parseFloat(value);       
        } else {
            this.venueEdit[name] = value;
        }
		//Keep the slug synced with the name
		this.venueEdit.slug = this.venueEdit.name.replace(/\s+/g, '-').toLowerCase();
    }
    //Update coordinates on venue page
    onCoordinatesChange (coord){
            this.venueEdit.coordinates = {
                lat: coord[1],
                long: coord[0]
            };
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
    }
    onFeatureLoadSuccess(data) {
        if (data.json){
			// Match all features with a day of the next week
			let features = []
			let dates = []
			for (var i=0; i < data.days; i++) {
				let d = new Date();
				d.setHours(0,0,0,0)
				d.setDate(d.getDate() + i );
				dates.push(d)
			}
			//Find element in features whose date == d
				//For each day of the week
				for (var i=0; i < data.days; i++) { 
					let tempFeature = null
					// Go through all the features
					data.json.map(feature => { 
						// Format the feature's date
						let tempDate = new Date(feature.date);
						tempDate.setHours(0,0,0,0)
						// Check if it matches
						if (tempDate.getTime() == dates[i].getTime()){
							tempFeature = feature
						}
					})
					if (tempFeature){
						features.push(tempFeature)
						tempFeature = null
					} else {
						features.push({})
					}
				}
            this.features = features;
        } else {
            this.error.feature = "No Features";
        }
    }
    onFeatureLoadFailure(error) {
        console.log("Feature load error: ", error);
        this.features= [];
    }
	onFeatureEdit(featureEdit){
		this.feature = featureEdit;
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
    }
    onReorderMyListFailure(){
        console.log('problem!');
    }
    
    // INFO CHANGE ON ACCOUNT PAGE
    onUserInfoChange (event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
		if (name == "email"){
			this.user.local.username = value;
		} else {
			this.user[name] = value;	
		}
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
    onThumbnailUploadSuccess(data){
        this.isUploaded = true;
        this.listingEdit.image = data.image.public_id;
		if (data.i){
			this.features[data.i].list.image = data.image.public_id;	
		}
    }
    onThumbnailUploadFailure(err){
        console.log('Error: ', err);
    }
}

export default alt.createStore(ListStore);