import alt from '../alt';

import { BASE_URI } from '../../env';

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
        );
    }
    
    
    async getCurrent () {
        
        this.getCurrentAttempt();
        
        await fetch(
          BASE_URI + '/list/currentlistings/' + offset,
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
          BASE_URI + '/list/futurelistings/' + offset,
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
                    url: BASE_URI + '/list/alllistings'
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
                    url: BASE_URI + '/list/eventslistings'
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
            BASE_URI + '/list/glancelistings',
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
            this.getGlanceSuccess(data)
              return true;
          })
          .catch((error) => {
            this.getGlanceFail(error)
          });
    }

    getLatestListings() {
        return dispatch => {
            $.ajax({
                    url: BASE_URI + '/list/latestlistings'
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
    // When new coordinates are fetched automatically
    coordinatesChange(coord){
        return coord;
    }
    
    async saveListing(newListing) {
        
        this.saveListingAttempt();

        await fetch(
          BASE_URI + '/list/add',
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
            this.saveListingSuccess(json);
            return true;
        })
        .catch((error) => {
            this.saveListingFailure(error);
        });
        
    }
    
    async deleteListing(oldListing) {

        await fetch(
          BASE_URI + '/list/delete/' + oldListing,
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
			this.listingEditReset();
            return true;
        })
        .catch((error) => {
            this.deleteListingFailure(error);
        });
        
    }
    
    async updateListing(newInfo) {
        
        this.updateListingAttempt();

        await fetch(
          BASE_URI + '/list/update',
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
            this.updateListingSuccess(json);
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
                    url: BASE_URI + '/list/getinfo/' + id
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
          BASE_URI + '/list/feature',
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
    
    async featureLoad(days){

        this.featureLoadAttempt.defer()
        
        await fetch(
          BASE_URI + '/list/findfeatures/' + days,
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
    
    async getVenueInfo(id){
        await fetch(
          BASE_URI + '/venues/getinfo/' + id,
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
          BASE_URI + '/venues/getfullinfo/' + id,
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
          BASE_URI + '/venues/getlistings/' + id,
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
    
    getVenuesAdmin(neighborhood) {
        this.getVenuesAdminAttempt();
        return dispatch => {
            dispatch();
            $.ajax({
                    url: BASE_URI + '/venues/getadmin/'+ neighborhood
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
          BASE_URI + '/venues/update',
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
            this.updateVenueSuccess(info);
            return true;
        })
        .catch((error) => {
            this.updateVenueFailure(error);
        });
    }
	
	async saveVenue(newVenue){
		
		this.saveVenueAttempt();

        await fetch(
          BASE_URI + '/venues/add',
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
            this.saveVenueSuccess(json);
            return true;
        })
        .catch((error) => {
            this.saveVenueFailure(error);
        });
		
	}
	
	async deleteVenue(oldVenue) {

        await fetch(
          BASE_URI + '/venues/delete/' + oldVenue ,
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
		return;
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