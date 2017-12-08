import alt from '../alt';
import Promise from 'bluebird';

let offset = 0;

class ListActions {
    constructor() {
        this.generateActions(
            'getCurrentAttempt',
            'getCurrentSuccess',
            'getCurrentFail',
            'getFutureAttempt',
            'getFutureSuccess',
            'getFutureFail',
            'getAllSuccess',
            'getAllFail',
            'getEventsSuccess',
            'getEventsFail',
            'getGlanceSuccess',
            'getGlanceFail',
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
            'getCoordSuccess'
        );
    }
    
    
    async getCurrent () {
        
        this.getCurrentAttempt();
        
        await fetch(
          process.env.BASE_URI + '/list/currentlistings/' + offset,
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
            } else {
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
          process.env.BASE_URI + '/list/futurelistings/' + offset,
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
                    url: process.env.BASE_URI + '/list/alllistings'
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
                    url: process.env.BASE_URI + '/list/eventslistings'
                })
                .done((data) => {
                    this.getEventsSuccess(data)
                })
                .fail((jqXhr) => {
                    this.getEventsFail(jqXhr)
                });
        };
    }

    getGlance() {
        return dispatch => {
            $.ajax({
                    url: process.env.BASE_URI + '/list/glancelistings'
                })
                .done((data) => {
                    this.getGlanceSuccess(data)
                })
                .fail((jqXhr) => {
                    this.getGlanceFail(jqXhr)
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
          process.env.BASE_URI + '/list/add',
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
            this.listingEditReset();
            return true;
        })
        .catch((error) => {
            this.saveListingFailure(error);
        });
        
    }
    
    async deleteListing(oldListing) {

        await fetch(
          process.env.BASE_URI + '/list/delete/' + oldListing,
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
          process.env.BASE_URI + '/list/update',
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
            this.listingEditReset();
            return true;
        })
        .catch((error) => {
            this.updateListingFailure(error);
        });
        
    }
    
    getListingInfo(id, i){
		console.log('Getting the info');
        return dispatch => {
            dispatch();
            $.ajax({
                    url: process.env.BASE_URI + '/list/getinfo/' + id
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
        await fetch(
          process.env.BASE_URI + '/list/feature',
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
			console.log(json);
            this.updateFeatureSuccess(json);
            return true;
        })
        .catch((error) => {
            this.updateFeatureFailure(error);
        });
    }
    
    featureReset(){
        return true;
    }
    
    async featureLoad(days){
        
        await fetch(
          process.env.BASE_URI + '/list/findfeatures/' + days,
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
          process.env.BASE_URI + '/venues/getinfo/' + id,
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
          process.env.BASE_URI + '/venues/getfullinfo/' + id,
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
			console.log(json)
            this.getVenueFullInfoSuccess(json)
            return true;
        })
        .catch((error) => {
            this.getVenueFullInfoFailure(error)
        });
    }
    
    async getVenueListings(id){
        await fetch(
          process.env.BASE_URI + '/venues/getlistings/' + id,
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
                    url: process.env.BASE_URI + '/venues/getadmin/'+ neighborhood
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
          process.env.BASE_URI + '/venues/update',
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
            this.updateVenueSuccess(json);
            this.venueEditReset();
            return true;
        })
        .catch((error) => {
            this.updateVenueFailure(error);
        });
    }
	
	async saveVenue(newVenue){
		
		this.saveVenueAttempt();

        await fetch(
          process.env.BASE_URI + '/venues/add',
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
			this.venueEditReset();
            this.saveVenueSuccess(json);
            return true;
        })
        .catch((error) => {
            this.saveVenueFailure(error);
        });
		
	}
	
	async deleteVenue(oldVenue) {

        await fetch(
          process.env.BASE_URI + '/venues/delete/' + oldVenue ,
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
    
}

export default alt.createActions(ListActions);