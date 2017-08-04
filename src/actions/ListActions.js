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
            'getGlanceFail'
        );
    }

    getCurrent() {
        $.ajax({
                url: '/currentlistings'
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
                url: '/alllistings'
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
                url: '/eventslistings'
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
                url: '/glancelistings'
            })
            .done((data) => {
                this.getGlanceSuccess(data)
            })
            .fail((jqXhr) => {
                this.getGlanceFail(jqXhr)
            });
    }
}

export default alt.createActions(ListActions);