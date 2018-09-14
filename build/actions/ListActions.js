import alt from '../alt';

let offset = 0;

class ListActions {
    constructor() {
        this.generateActions(
            'getCurrentAttempt',
            'getCurrentSuccess',
            'getCurrentFail',
            'currentNotLoaded',
            'currentLoaded',
            'getFutureAttempt',
            'getFutureSuccess',
            'getFutureFail',
            'getAllSuccess',
            'getAllFail',
            'getEventsAttempt',
            'getEventsSuccess',
            'getEventsFail',
            'getGlanceAttempt',
            'getGlanceSuccess',
            'getGlanceFail',
            'getLatestListingsSuccess',
            'getLatestListingsFail',
            'getListingInfoSuccess',
            'getListingInfoFailure',
            'getVenueInfoSuccess',
            'getVenueInfoFailure',
            'getVenueFullInfoSuccess',
            'getVenueFullInfoFailure',
            'saveListingSuccess',
            'saveListingFailure',
            'saveListingAttempt',
			'saveVenueSuccess',
            'saveVenueFailure',
            'saveVenueAttempt',
            'updateListingSuccess',
            'updateListingFailure',
            'updateListingAttempt',
            'updateVenueAttempt',
            'updateVenueSuccess',
            'updateVenueFailure',
            'updateFeatureSuccess',
            'updateFeatureFailure',
            'featureLoadAttempt',
            'featureLoadSuccess',
            'featureLoadFailure',
            'featureAdminAttempt',
            'featureAdminSuccess',
            'featureAdminFailure',
            'deleteListingSuccess',
            'deleteListingFailure',
			'deleteVenueSuccess',
            'deleteVenueFailure',
            'getVenueListingsSuccess',
            'getVenueListingsFailure',
            'getVenuesAdminSuccess',
            'getVenuesAdminFailure',
            'getVenuesAdminAttempt',
            'getCoordFailure',
            'getCoordSuccess',
            'deleteFeatureSuccess',
            'deleteFeatureFailure'
        )
    }
    
    
    async getCurrent () {
        
        this.getCurrentAttempt();
        
        await fetch(
          '/list/currentlistings/' + offset,
          {
            method: 'GET',
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((data) => {
            this.getCurrentSuccess(data)
            if (data[0]){
                offset = offset + 1
                this.getCurrent()
                this.currentNotLoaded()
            } else {
                this.currentLoaded()
                console.log('done loading current shows!')
                offset = 0
            }
        })
        .catch((jqXhr) => {
            this.getCurrentFail(jqXhr)
        });
    }
    
    async getFuture () {
        
        this.getFutureAttempt();
        
        await fetch(
          '/list/futurelistings/' + offset,
          {
            method: 'GET',
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((data) => {
            this.getFutureSuccess(data)
            if (data[0]){
                offset = offset + 1
                this.getFuture()
            } else {
                offset = 0
            }
        })
        .catch((jqXhr) => {
            this.getFutureFail(jqXhr)
        });
    }

    getAll() {
        return dispatch => {
            dispatch();
            $.ajax({
                    url: '/list/alllistings'
                })
                .done((data) => {
                    this.getAllSuccess(data)
                })
                .fail((jqXhr) => {
                    this.getAllFail(jqXhr)
                });
        };
    }

    getEvents() {
        return dispatch => {
            dispatch();
            $.ajax({
                    url: '/list/eventslistings'
                })
                .done((data) => {
                    this.getEventsSuccess(data)
                })
                .fail((jqXhr) => {
                    this.getEventsFail(jqXhr)
                });
        };
    }

    async getGlance() {

        this.getGlanceAttempt();

        await fetch(
            '/list/glancelistings',
            {
              method: 'GET',
              credentials: 'same-origin',
            },
          )
          .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            return null;
          })
          .then((data) => {
            data
                ? this.getGlanceSuccess(data)
                : this.getGlanceFail()
                return true;
          })
          .catch((error) => {
            this.getGlanceFail(error)
          });
    }

    getLatestListings() {
        return dispatch => {
            $.ajax({
                    url: '/list/latestlistings'
                })
                .done((data) => {
                    this.getLatestListingsSuccess(data)
                })
                .fail((error) => {
                    this.getLatestListingsFail(error)
                });
        };
    }
    
    listingEditReset() {
        return true;
    }
    venueEditReset() {
        return true;
    }
    
    // When new listing info is entered
    listingInfoChange(event){
        return event;
    }
     // When new listing info is entered
     listingDuplicate(){
        return true;
    }
    // When new feature info is entered
    featureInfoChange(event, i){
        return {event, i};
    }
    // When new feature info is entered
    venueInfoChange(info){
        return info;
    }
     venueDuplicate(){
        return true;
    }
    // When new coordinates are fetched automatically
    coordinatesChange(coord){
        return coord;
    }
    
    async saveListing(newListing) {
        
        this.saveListingAttempt();

        await fetch(
          '/list/add',
          {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(newListing),
            headers: {
              'Content-Type': 'application/json',
            }
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            json
                ? this.saveListingSuccess(json)
                : this.saveListingFailure()
            return true;
        })
        .catch((error) => {
            this.saveListingFailure(error);
        });
        
    }
    
    async deleteListing(oldListing) {

        await fetch(
          '/list/delete/' + oldListing,
			{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            this.deleteListingSuccess(json);
			//this.listingEditReset();
            return true;
        })
        .catch((error) => {
            this.deleteListingFailure(error);
        });
        
    }
    
    async updateListing(newInfo) {
        
        this.updateListingAttempt();

        await fetch(
          '/list/update',
          {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(newInfo),
            headers: {
              'Content-Type': 'application/json',
            }
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            json
                ? this.updateListingSuccess(json)
                : this.updateListingFailure()

            return true;
        })
        .catch((error) => {
            this.updateListingFailure(error);
        });
        
    }

    //When you want to edit a specific listing, and are being redirected to the listing Edit page
    editListing(listing){
        return listing;
    }
    
    getListingInfo(id, i){
		console.log('Getting the info');
        return dispatch => {
            dispatch();
            $.ajax({
                    url: '/list/getinfo/' + id
                })
                .done((data) => {
                    this.getListingInfoSuccess({data, i})
                })
                .fail((jqXhr) => {
                    this.getListingInfoFailure(jqXhr)
                });
        };
    }
    
    // Update or save a featured article
    async updateFeature (data) {

        console.log('Update feature', data)

        await fetch(
          '/list/feature',
          {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            }
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            this.updateFeatureSuccess(json);
            return true;
        })
        .catch((error) => {
            this.updateFeatureFailure(error);
        });
    }
    
    featureReset(day){
        return day;
    }

    async deleteFeature(featureID, dayNumber) {

        await fetch(
          '/list/deletefeature/' + featureID,
			{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            this.deleteFeatureSuccess(json);
			this.featureReset(dayNumber);
            return true;
        })
        .catch((error) => {
            this.deleteFeatureFailure(error);
        });
        
    }
    
    async featureLoad(days){

        this.featureLoadAttempt.defer()
        
        await fetch(
          '/list/findcurrentfeatures',
          {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            }
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            this.featureLoadSuccess({json, days});
            return true;
        })
        .catch((error) => {
            this.featureLoadFailure(error);
        });
    }
    async featureAdmin(days){

        this.featureAdminAttempt.defer()
        
        await fetch(
          '/list/findfeatures',
          {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            }
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            this.featureAdminSuccess({json, days});
            return true;
        })
        .catch((error) => {
            this.featureAdminFailure(error);
        });
    }
    
    async getVenueInfo(id){
        await fetch(
          '/venues/getinfo/' + id,
          {
            method: 'GET',
            credentials: 'same-origin',
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            this.getVenueInfoSuccess(json)
            return true;
        })
        .catch((error) => {
            this.getVenueInfoFailure(error)
        });
    }
    
    async getVenueFullInfo(id){
        await fetch(
          '/venues/getfullinfo/' + id,
          {
            method: 'GET',
            credentials: 'same-origin',
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            this.getVenueFullInfoSuccess(json)
            return true;
        })
        .catch((error) => {
            this.getVenueFullInfoFailure(error)
        });
    }
    
    async getVenueListings(id){
        await fetch(
          '/venues/getlistings/' + id,
          {
            method: 'GET',
            credentials: 'same-origin',
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            this.getVenueListingsSuccess(json)
            return true;
        })
        .catch((error) => {
            this.getVenueListingsFailure(error)
        });
    }
    
    resetVenue(){
        return true;
    }
    
    sizeChange(size){
        return size;
    }
    
    //OVERVIEW
    getVenuesAdmin(neighborhood) {
        this.getVenuesAdminAttempt();
        return dispatch => {
            dispatch();
            $.ajax({
                    url: '/venues/getadmin/'+ neighborhood
                })
                .done((data) => {
                        this.getVenuesAdminSuccess(data)
                })
                .fail((jqXhr) => {
                    this.getVenuesAdminFailure(jqXhr)
                });
        };
    }
    
    async updateVenue(info){
        
        this.updateVenueAttempt();

        await fetch(
          '/venues/update',
          {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(info),
            headers: {
              'Content-Type': 'application/json',
            }
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            json
                ? this.updateVenueSuccess(json)
                : this.updateVenueFailure()
            return true;
        })
        .catch((error) => {
            this.updateVenueFailure(error);
        });
    }
	
	async saveVenue(newVenue){
		
		this.saveVenueAttempt();

        await fetch(
          '/venues/add',
          {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(newVenue),
            headers: {
              'Content-Type': 'application/json',
            }
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            json
                ? this.saveVenueSuccess(json)
                : this.saveVenueFailure()
            return true;
        })
        .catch((error) => {
            this.saveVenueFailure(error);
        });
		
	}
	
	async deleteVenue(oldVenue) {

        await fetch(
          '/venues/delete/' + oldVenue ,
			{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            }
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            this.venueEditReset();
            this.deleteVenueSuccess(json);
            return true;
        })
        .catch((error) => {
            this.deleteVenueFailure(error);
        });
        
    }
	
	adminReset(){
		return true;
    }

    ////////////////////
    //EVENTS
    ////////////////////
    
    addEvent(){
        return true;
    }

    removeEvent(index){
        return index;
    }

    eventsInfoChange(event){
        return event;
    }

    /////////////////
    // SIDEBAR
    //////////////////
    toggleSideBar(){
        return true;
    }

     /////////////////
    // Menu
    //////////////////
    toggleMenu(){
        return true;
    }
    
}

export default alt.createActions(ListActions);