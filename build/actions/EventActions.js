import alt from '../alt';

let offset = 0;

class EventActions {
    constructor() {
        this.generateActions(
            'getAllSuccess',
            'getAllFail',
            'getEventsAttempt',
            'getEventsSuccess',
            'getEventsFail',
            'getLatestEventsSuccess',
            'getLatestEventsFail',
            'getEventInfoSuccess',
            'getEventInfoFailure',
            'saveEventSuccess',
            'saveEventFailure',
            'saveEventAttempt',
            'updateEventSuccess',
            'updateEventFailure',
            'updateEventAttempt',
            'deleteEventSuccess',
            'deleteEventFailure',
        );
    }

    getAll() {
        return dispatch => {
            dispatch();
            $.ajax({
                    url: '/event/allevents'
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
                    url: '/event/upcoming'
                })
                .done((data) => {
                    this.getEventsSuccess(data)
                })
                .fail((jqXhr) => {
                    this.getEventsFail(jqXhr)
                });
        };
    }


    getLatestEvents() {
        return dispatch => {
            dispatch();
            $.ajax({
                    url: '/event/latestevents'
                })
                .done((data) => {
                    this.getLatestEventsSuccess(data)
                })
                .fail((error) => {
                    this.getLatestEventsFail(error)
                });
        };
    }
    
    eventEditReset() {
        return true;
    }

    
    // When new event info is entered
    eventInfoChange(event){
        return event;
    }
     // When new event info is entered
     eventDuplicate(){
        return true;
    }
    
    async saveEvent(newEvent) {
        
        this.saveEventAttempt();

        await fetch(
          '/event/add',
          {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(newEvent),
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
                ? this.saveEventSuccess(json)
                : this.saveEventFailure()
            return true;
        })
        .catch((error) => {
            this.saveEventFailure(error);
        });
        
    }
    
    async deleteEvent(oldEvent) {

        await fetch(
          '/event/delete/' + oldEvent,
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
            this.deleteEventSuccess(json);
            return true;
        })
        .catch((error) => {
            this.deleteEventFailure(error);
        });
        
    }
    
    async updateEvent(newInfo) {
        
        this.updateEventAttempt();

        await fetch(
          '/event/update',
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
                ? this.updateEventSuccess(json)
                : this.updateEventFailure()

            return true;
        })
        .catch((error) => {
            this.updateEventFailure(error);
        });
        
    }

    //When you want to edit a specific event, and are being redirected to the event Edit page
    editEvent(event){
        return event;
    }
    
    getEventInfo(id){
		console.log('Getting the info for ' + id);
        return dispatch => {
            dispatch();
            $.ajax({
                    url: '/event/getinfo/' + id
                })
                .done((data) => {
                    this.getEventInfoSuccess(data)
                })
                .fail((jqXhr) => {
                    this.getEventInfoFailure(jqXhr)
                });
        };
    }
	
    
}

export default alt.createActions(EventActions);