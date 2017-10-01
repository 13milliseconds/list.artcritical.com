import alt from '../alt';

class ListActions {
    constructor() {
        this.generateActions(
            'getCurrentSuccess',
            'getCurrentFail',
            'getAllSuccess',
            'getAllFail',
            'getEventsSuccess',
            'getEventsFail',
            'getGlanceSuccess',
            'getGlanceFail',
            'getMylistSuccess',
            'getMylistFailure'
        );
    }

    getCurrent() {
        $.ajax({
                url: '/list/currentlistings'
            })
            .done((data) => {
                this.getCurrentSuccess(data)
            })
            .fail((jqXhr) => {
                this.getCurrentFail(jqXhr)
            });
    }

    getAll() {
        $.ajax({
                url: '/list/alllistings'
            })
            .done((data) => {
                this.getAllSuccess(data)
            })
            .fail((jqXhr) => {
                this.getAllFail(jqXhr)
            });
    }

    getEvents() {
        $.ajax({
                url: '/list/eventslistings'
            })
            .done((data) => {
                this.getEventsSuccess(data)
            })
            .fail((jqXhr) => {
                this.getEventsFail(jqXhr)
            });
    }

    getGlance() {
        $.ajax({
                url: '/list/glancelistings'
            })
            .done((data) => {
                this.getGlanceSuccess(data)
            })
            .fail((jqXhr) => {
                this.getGlanceFail(jqXhr)
            });
    }
    
    getMylist() {
        console.log('Getting mylist');
        $.ajax({
                url: '/auth/getmylist'
            })
            .done((data) => {
                console.log('Got mylist');
                this.getMylistSuccess(data)
            })
            .fail((jqXhr) => {
                console.log('Failed to get mylist');
                this.getMylistFailure(jqXhr)
            });
    }
}

export default alt.createActions(ListActions);