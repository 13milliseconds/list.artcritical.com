/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(16);

var _alt2 = _interopRequireDefault(_alt);

var _bluebird = __webpack_require__(33);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var offset = 0;

var ListActions = function () {
    function ListActions() {
        _classCallCheck(this, ListActions);

        this.generateActions('getCurrentAttempt', 'getCurrentSuccess', 'getCurrentFail', 'getFutureAttempt', 'getFutureSuccess', 'getFutureFail', 'getAllSuccess', 'getAllFail', 'getEventsSuccess', 'getEventsFail', 'getGlanceSuccess', 'getGlanceFail', 'getLatestListingsSuccess', 'getLatestListingsFail', 'getListingInfoSuccess', 'getListingInfoFailure', 'getVenueInfoSuccess', 'getVenueInfoFailure', 'getVenueFullInfoSuccess', 'getVenueFullInfoFailure', 'saveListingSuccess', 'saveListingFailure', 'saveListingAttempt', 'saveVenueSuccess', 'saveVenueFailure', 'saveVenueAttempt', 'updateListingSuccess', 'updateListingFailure', 'updateListingAttempt', 'updateVenueAttempt', 'updateVenueSuccess', 'updateVenueFailure', 'updateFeatureSuccess', 'updateFeatureFailure', 'featureLoadSuccess', 'featureLoadFailure', 'deleteListingSuccess', 'deleteListingFailure', 'deleteVenueSuccess', 'deleteVenueFailure', 'getVenueListingsSuccess', 'getVenueListingsFailure', 'getVenuesAdminSuccess', 'getVenuesAdminFailure', 'getVenuesAdminAttempt', 'getCoordFailure', 'getCoordSuccess');
    }

    _createClass(ListActions, [{
        key: 'getCurrent',
        value: async function getCurrent() {
            var _this = this;

            this.getCurrentAttempt();

            await fetch(process.env.BASE_URI + '/list/currentlistings/' + offset, {
                method: 'GET'
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (data) {
                _this.getCurrentSuccess(data);
                if (data[0]) {
                    offset = offset + 1;
                    _this.getCurrent();
                } else {
                    offset = 0;
                }
            }).catch(function (jqXhr) {
                _this.getCurrentFail(jqXhr);
            });
        }
    }, {
        key: 'getFuture',
        value: async function getFuture() {
            var _this2 = this;

            this.getFutureAttempt();

            await fetch(process.env.BASE_URI + '/list/futurelistings/' + offset, {
                method: 'GET'
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (data) {
                _this2.getFutureSuccess(data);
                if (data[0]) {
                    offset = offset + 1;
                    _this2.getFuture();
                } else {
                    offset = 0;
                }
            }).catch(function (jqXhr) {
                _this2.getFutureFail(jqXhr);
            });
        }
    }, {
        key: 'getAll',
        value: function getAll() {
            var _this3 = this;

            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: process.env.BASE_URI + '/list/alllistings'
                }).done(function (data) {
                    _this3.getAllSuccess(data);
                }).fail(function (jqXhr) {
                    _this3.getAllFail(jqXhr);
                });
            };
        }
    }, {
        key: 'getEvents',
        value: function getEvents() {
            var _this4 = this;

            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: process.env.BASE_URI + '/list/eventslistings'
                }).done(function (data) {
                    _this4.getEventsSuccess(data);
                }).fail(function (jqXhr) {
                    _this4.getEventsFail(jqXhr);
                });
            };
        }
    }, {
        key: 'getGlance',
        value: function getGlance() {
            var _this5 = this;

            return function (dispatch) {
                $.ajax({
                    url: process.env.BASE_URI + '/list/glancelistings'
                }).done(function (data) {
                    _this5.getGlanceSuccess(data);
                }).fail(function (jqXhr) {
                    _this5.getGlanceFail(jqXhr);
                });
            };
        }
    }, {
        key: 'getLatestListings',
        value: function getLatestListings() {
            var _this6 = this;

            return function (dispatch) {
                $.ajax({
                    url: process.env.BASE_URI + '/list/latestlistings'
                }).done(function (data) {
                    _this6.getLatestListingsSuccess(data);
                }).fail(function (error) {
                    _this6.getLatestListingsFail(error);
                });
            };
        }
    }, {
        key: 'listingEditReset',
        value: function listingEditReset() {
            return true;
        }
    }, {
        key: 'venueEditReset',
        value: function venueEditReset() {
            return true;
        }

        // When new listing info is entered

    }, {
        key: 'listingInfoChange',
        value: function listingInfoChange(event) {
            return event;
        }
        // When new listing info is entered

    }, {
        key: 'listingDuplicate',
        value: function listingDuplicate() {
            return true;
        }
        // When new feature info is entered

    }, {
        key: 'featureInfoChange',
        value: function featureInfoChange(event, i) {
            return { event: event, i: i };
        }
        // When new feature info is entered

    }, {
        key: 'venueInfoChange',
        value: function venueInfoChange(info) {
            return info;
        }
        // When new coordinates are fetched automatically

    }, {
        key: 'coordinatesChange',
        value: function coordinatesChange(coord) {
            return coord;
        }
    }, {
        key: 'saveListing',
        value: async function saveListing(newListing) {
            var _this7 = this;

            this.saveListingAttempt();

            await fetch(process.env.BASE_URI + '/list/add', {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify(newListing),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this7.saveListingSuccess(json);
                _this7.listingEditReset();
                return true;
            }).catch(function (error) {
                _this7.saveListingFailure(error);
            });
        }
    }, {
        key: 'deleteListing',
        value: async function deleteListing(oldListing) {
            var _this8 = this;

            await fetch(process.env.BASE_URI + '/list/delete/' + oldListing, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this8.deleteListingSuccess(json);
                _this8.listingEditReset();
                return true;
            }).catch(function (error) {
                _this8.deleteListingFailure(error);
            });
        }
    }, {
        key: 'updateListing',
        value: async function updateListing(newInfo) {
            var _this9 = this;

            console.log('updating ', newInfo);

            this.updateListingAttempt();

            await fetch(process.env.BASE_URI + '/list/update', {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify(newInfo),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this9.updateListingSuccess(json);
                _this9.listingEditReset();
                return true;
            }).catch(function (error) {
                _this9.updateListingFailure(error);
            });
        }

        //When you want to edit a specific listing, and are being redirected to the listing Edit page

    }, {
        key: 'editListing',
        value: function editListing(listing) {
            return listing;
        }
    }, {
        key: 'getListingInfo',
        value: function getListingInfo(id, i) {
            var _this10 = this;

            console.log('Getting the info');
            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: process.env.BASE_URI + '/list/getinfo/' + id
                }).done(function (data) {
                    _this10.getListingInfoSuccess({ data: data, i: i });
                }).fail(function (jqXhr) {
                    _this10.getListingInfoFailure(jqXhr);
                });
            };
        }

        // Update or save a featured article

    }, {
        key: 'updateFeature',
        value: async function updateFeature(data) {
            var _this11 = this;

            await fetch(process.env.BASE_URI + '/list/feature', {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this11.updateFeatureSuccess(json);
                return true;
            }).catch(function (error) {
                _this11.updateFeatureFailure(error);
            });
        }
    }, {
        key: 'featureReset',
        value: function featureReset() {
            return true;
        }
    }, {
        key: 'featureLoad',
        value: async function featureLoad(days) {
            var _this12 = this;

            await fetch(process.env.BASE_URI + '/list/findfeatures/' + days, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this12.featureLoadSuccess({ json: json, days: days });
                return true;
            }).catch(function (error) {
                _this12.featureLoadFailure(error);
            });
        }
    }, {
        key: 'getVenueInfo',
        value: async function getVenueInfo(id) {
            var _this13 = this;

            await fetch(process.env.BASE_URI + '/venues/getinfo/' + id, {
                method: 'GET',
                credentials: 'same-origin'
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this13.getVenueInfoSuccess(json);
                return true;
            }).catch(function (error) {
                _this13.getVenueInfoFailure(error);
            });
        }
    }, {
        key: 'getVenueFullInfo',
        value: async function getVenueFullInfo(id) {
            var _this14 = this;

            await fetch(process.env.BASE_URI + '/venues/getfullinfo/' + id, {
                method: 'GET',
                credentials: 'same-origin'
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this14.getVenueFullInfoSuccess(json);
                return true;
            }).catch(function (error) {
                _this14.getVenueFullInfoFailure(error);
            });
        }
    }, {
        key: 'getVenueListings',
        value: async function getVenueListings(id) {
            var _this15 = this;

            await fetch(process.env.BASE_URI + '/venues/getlistings/' + id, {
                method: 'GET',
                credentials: 'same-origin'
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this15.getVenueListingsSuccess(json);
                return true;
            }).catch(function (error) {
                _this15.getVenueListingsFailure(error);
            });
        }
    }, {
        key: 'resetVenue',
        value: function resetVenue() {
            return true;
        }
    }, {
        key: 'sizeChange',
        value: function sizeChange(size) {
            return size;
        }
    }, {
        key: 'getVenuesAdmin',
        value: function getVenuesAdmin(neighborhood) {
            var _this16 = this;

            this.getVenuesAdminAttempt();
            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: process.env.BASE_URI + '/venues/getadmin/' + neighborhood
                }).done(function (data) {
                    _this16.getVenuesAdminSuccess(data);
                }).fail(function (jqXhr) {
                    _this16.getVenuesAdminFailure(jqXhr);
                });
            };
        }
    }, {
        key: 'updateVenue',
        value: async function updateVenue(info) {
            var _this17 = this;

            this.updateVenueAttempt();

            await fetch(process.env.BASE_URI + '/venues/update', {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify(info),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this17.updateVenueSuccess(json);
                _this17.venueEditReset();
                return true;
            }).catch(function (error) {
                _this17.updateVenueFailure(error);
            });
        }
    }, {
        key: 'saveVenue',
        value: async function saveVenue(newVenue) {
            var _this18 = this;

            this.saveVenueAttempt();

            await fetch(process.env.BASE_URI + '/venues/add', {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify(newVenue),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this18.venueEditReset();
                _this18.saveVenueSuccess(json);
                return true;
            }).catch(function (error) {
                _this18.saveVenueFailure(error);
            });
        }
    }, {
        key: 'deleteVenue',
        value: async function deleteVenue(oldVenue) {
            var _this19 = this;

            await fetch(process.env.BASE_URI + '/venues/delete/' + oldVenue, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this19.deleteVenueSuccess(json);
                return true;
            }).catch(function (error) {
                _this19.deleteVenueFailure(error);
            });
        }
    }, {
        key: 'adminReset',
        value: function adminReset() {
            return;
        }

        ////////////////////
        //EVENTS
        ////////////////////

    }, {
        key: 'addEvent',
        value: function addEvent() {
            return true;
        }
    }, {
        key: 'removeEvent',
        value: function removeEvent(index) {
            return index;
        }
    }, {
        key: 'eventsInfoChange',
        value: function eventsInfoChange(event) {
            return event;
        }

        /////////////////
        // SIDEBAR
        //////////////////

    }, {
        key: 'toggleSideBar',
        value: function toggleSideBar() {
            return true;
        }
    }]);

    return ListActions;
}();

exports.default = _alt2.default.createActions(ListActions);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(16);

var _alt2 = _interopRequireDefault(_alt);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthActions = function () {
  function AuthActions() {
    _classCallCheck(this, AuthActions);

    this.generateActions('sessionCheckFailure', 'sessionCheckSuccess', 'addToMyListSuccess', 'addToMyListFailure', 'loginAttempt', 'loginFailure', 'loginSuccess', 'logoutSuccess', 'logoutFailure', 'registerAttempt', 'registerSuccess', 'registerFailure', 'updateUserSuccess', 'updateUserFailure', 'updateUserAttempt', 'getMylistSuccess', 'getMylistFailure', 'reorderMyListSuccess', 'reorderMyListFailure', 'getUserMylistSuccess', 'getUserMylistFailure', 'getAllUserAttempt', 'getAllUserSuccess', 'getAllUserFailure');
  }

  _createClass(AuthActions, [{
    key: 'attemptLogIn',
    value: async function attemptLogIn(userData) {
      var _this = this;

      this.loginAttempt();

      await fetch(process.env.BASE_URI + '/auth/login', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      }).then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      }).then(function (json) {
        if (json) {
          console.log(json);
          _this.loginSuccess(json);
        } else {
          _this.loginFailure(new Error('Authentication Failed'));
        }
      }).catch(function (error) {
        _this.loginFailure(new Error(error));
      });
    }
  }, {
    key: 'attemptLogOut',
    value: async function attemptLogOut() {
      var _this2 = this;

      await fetch(process.env.BASE_URI + '/auth/logout', {
        method: 'GET',
        credentials: 'same-origin'
      }).then(function (response) {
        if (response.status === 200) {
          return _this2.logoutSuccess();
          return true;
        }
        return _this2.logoutFailure('Error: ${response.status}');
        return true;
      }).catch(function (error) {
        _this2.logoutFailure(error);
        return true;
      });
    }
  }, {
    key: 'facebookLogin',
    value: function facebookLogin(user) {
      return user;
    }
  }, {
    key: 'attemptRegister',
    value: async function attemptRegister(registerData) {
      var _this3 = this;

      this.registerAttempt();

      await fetch(process.env.BASE_URI + '/auth/signup', {
        method: 'POST',
        body: JSON.stringify(registerData),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      }).then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      }).then(function (json) {
        if (json) {
          _this3.registerSuccess(json);
        } else {
          _this3.registerFailure(new Error('Registration Failed'));
        }
      }).catch(function (error) {
        _this3.registerFailure(new Error(error));
      });
    }
  }, {
    key: 'getMylist',
    value: async function getMylist() {
      var _this4 = this;

      console.log('Get MyList');
      await fetch(process.env.BASE_URI + '/auth/getmylist', {
        method: 'GET',
        credentials: 'same-origin'
      }).then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      }).then(function (data) {
        if (data) {
          _this4.getMylistSuccess(data);
          return true;
        }
        _this4.getMylistFailure(data.error);
        return true;
      }).catch(function (error) {
        _this4.getMylistFailure(error);
        return true;
      });
    }
  }, {
    key: 'getUserMylist',
    value: async function getUserMylist(user_slug) {
      var _this5 = this;

      await fetch(process.env.BASE_URI + '/auth/getusermylist/' + user_slug, {
        method: 'GET',
        credentials: 'same-origin'
      }).then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      }).then(function (data) {
        if (data) {
          _this5.getUserMylistSuccess(data);
          return true;
        }
        _this5.getUserMylistFailure(data.error);
        return true;
      }).catch(function (error) {
        _this5.getUserMylistFailure(error);
        return true;
      });
    }
  }, {
    key: 'checkSession',
    value: async function checkSession() {
      var _this6 = this;

      console.log('Check Session');
      await fetch(process.env.BASE_URI + '/auth/checksession', {
        method: 'GET',
        credentials: 'same-origin'
      }).then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      }).then(function (json) {
        if (json._id) {
          _this6.sessionCheckSuccess(json);
          return true;
        }
        _this6.sessionCheckFailure(json.error);
        return true;
      }).catch(function (error) {
        _this6.sessionCheckFailure(error);
        return true;
      });
    }
  }, {
    key: 'addToUserList',
    value: async function addToUserList(listing) {
      var _this7 = this;

      var newListing = listing;
      delete newListing.zoomLevels;

      //Upload the ID to the user profile
      await fetch(process.env.BASE_URI + '/auth/addtolist', {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(listing),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      }).then(function (json) {
        _this7.addToMyListSuccess(json);
        return true;
      }).catch(function (error) {
        _this7.addToMyListFailure(error);
        return true;
      });
    }
  }, {
    key: 'reorderMyList',
    value: async function reorderMyList(newList) {
      var _this8 = this;

      this.reorderMyListAttempt(newList);

      await fetch(process.env.BASE_URI + '/auth/updatemylist', {
        body: JSON.stringify(newList),
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      }).then(function (json) {
        _this8.reorderMyListSuccess(json);
        return true;
      }).catch(function (error) {
        _this8.reorderMyListFailure(error);
        return true;
      });
    }
  }, {
    key: 'reorderMyListAttempt',
    value: function reorderMyListAttempt(newList) {
      return newList;
    }
  }, {
    key: 'updateUser',
    value: async function updateUser(newUserInfo) {
      var _this9 = this;

      console.log(newUserInfo);

      this.updateUserAttempt();

      await fetch(process.env.BASE_URI + '/auth/updateuser', {
        body: JSON.stringify(newUserInfo),
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      }).then(function (json) {
        _this9.updateUserSuccess(json);
        return true;
      }).catch(function (error) {
        _this9.updateUserFailure(error);
        return true;
      });
    }
  }, {
    key: 'getAllUsers',
    value: async function getAllUsers() {
      var _this10 = this;

      console.log("Getting all Users");

      this.getAllUserAttempt();

      await fetch(process.env.BASE_URI + '/auth/getallusers', {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      }).then(function (json) {
        _this10.getAllUserSuccess(json);
        return true;
      }).catch(function (error) {
        _this10.getAllUserFailure(error);
        return true;
      });
    }

    // When a user type new info in the account page

  }, {
    key: 'userInfoChange',
    value: function userInfoChange(event, index) {
      return { event: event, index: index };
    }
  }]);

  return AuthActions;
}();

exports.default = _alt2.default.createActions(AuthActions);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactRouter = __webpack_require__(3);

var _DateBlock = __webpack_require__(6);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _reactFontawesome = __webpack_require__(23);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var Listing = function (_React$Component) {
    _inherits(Listing, _React$Component);

    function Listing(props) {
        _classCallCheck(this, Listing);

        var _this = _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this, props));

        _this.state = {
            fullInfo: false

            // Function binding
        };_this._revealInfo = _this._revealInfo.bind(_this);
        _this.addToList = _this.addToList.bind(_this);
        return _this;
    }

    //Function to add a listing to the personal list


    _createClass(Listing, [{
        key: 'addToList',
        value: function addToList(e, listing) {
            if (this.props.user._id) {
                //Select this listing
                var thislisting = $(e.target).closest('.listing');

                //Add or remove the listing to the user's list
                console.log(listing);
                _AuthActions2.default.addToUserList(listing);

                thislisting.toggleClass('selected');
            }
        }
    }, {
        key: '_editListing',
        value: function _editListing(listing) {
            _ListActions2.default.editListing(listing);
            _ListActions2.default.toggleSideBar();
        }
    }, {
        key: '_revealInfo',
        value: function _revealInfo() {
            this.setState({
                fullInfo: !this.state.fullInfo
            });
        }
    }, {
        key: 'eventsDisplay',
        value: function eventsDisplay(events) {
            var _this2 = this;

            return events.map(function (event, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'event', key: index },
                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'glass-martini'] }),
                    ' ',
                    event.name,
                    ' ',
                    _this2.props.start && _react2.default.createElement(_DateBlock2.default, { date: event.date }),
                    ' ',
                    event.description && '- ' + event.description
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var listing = this.props.listing;

            var closeIcon = this.state.fullInfo ? ["fal", "minus-circle"] : ["fal", "plus-circle"];
            var eventsPresence = listing.events && listing.events.length > 0 ? true : false;

            //Display date according to type of listing and view
            var dateDisplay;
            var address = _react2.default.createElement(
                'span',
                null,
                listing.venue.address1,
                ' ',
                listing.venue.address2,
                listing.venue.address2 !== '' && listing.venue.city !== '' && ', ',
                listing.venue.city
            );

            if (listing.event == true) {
                dateDisplay = _react2.default.createElement(
                    'p',
                    null,
                    listing.start && _react2.default.createElement(_DateBlock2.default, { date: listing.start }),
                    ' - ',
                    address
                );
            } else {
                if (this.props.dateView == "current") {
                    dateDisplay = _react2.default.createElement(
                        'p',
                        null,
                        'Until ',
                        _react2.default.createElement(_DateBlock2.default, { date: listing.end }),
                        ' - ',
                        address
                    );
                } else {
                    dateDisplay = _react2.default.createElement(
                        'p',
                        null,
                        listing.start && _react2.default.createElement(_DateBlock2.default, { date: listing.start }),
                        listing.end && _react2.default.createElement(
                            'span',
                            null,
                            ' to ',
                            _react2.default.createElement(_DateBlock2.default, { date: listing.end })
                        ),
                        ' - ',
                        address
                    );
                }
            }

            var id = listing._id;
            // Check if the listing is in mylist
            var mylistIndex = 0;
            if (this.props.user.mylist) {
                mylistIndex = this.props.user.mylist.filter(function (v) {
                    return v._id === id;
                }).length;
            }
            var mylistingIcon = mylistIndex > 0 ? ["far", "minus"] : ["far", "plus"];

            var image = listing.image ? "https://res.cloudinary.com/artcritical/image/upload/" + listing.image + ".jpg" : 'https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg';
            var style = { backgroundImage: 'url(' + image + ')' };

            return _react2.default.createElement(
                'div',
                { className: "listing " + (this.state.fullInfo ? 'active ' : '') + (mylistIndex > 0 ? 'selected' : 'notselected'), id: id },
                _react2.default.createElement(
                    'div',
                    { className: 'listingAdd' },
                    this.props.mylisting ? _react2.default.createElement(
                        'span',
                        null,
                        this.props.number
                    ) : _react2.default.createElement(
                        'div',
                        { className: this.props.user._id ? "addButton active" : "addButton", onClick: function onClick(e) {
                                return _this3.addToList(e, listing);
                            }, style: style },
                        this.props.user._id && _react2.default.createElement(_reactFontawesome2.default, { icon: mylistingIcon })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'listingContent' },
                    _react2.default.createElement(
                        'div',
                        { className: 'header' },
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                'span',
                                { className: 'title' },
                                listing.name
                            ),
                            listing.venue._id !== '' && ' at ',
                            _react2.default.createElement(
                                'a',
                                { className: 'venueName', href: "/venue/" + listing.venue.slug },
                                listing.venue.name
                            )
                        ),
                        dateDisplay,
                        _react2.default.createElement(
                            'div',
                            { className: 'icons' },
                            eventsPresence && _react2.default.createElement(
                                'span',
                                { className: 'events' },
                                _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'glass-martini'] })
                            ),
                            listing.popularity >= 5 && _react2.default.createElement(
                                'span',
                                { className: 'popular' },
                                _react2.default.createElement(_reactFontawesome2.default, { icon: ['fas', 'star'] })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'listingActions' },
                            this.props.mylisting && //If you are seeing this on your myList page
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        return _this3.addToList(e, listing);
                                    }, className: 'delete' },
                                'Remove'
                            ),
                            this.props.user.userAccess > 0 && //If you are seeing this as an editor
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        return _this3._editListing(listing);
                                    }, className: 'edit' },
                                'Edit'
                            )
                        )
                    ),
                    this.state.fullInfo && _react2.default.createElement(
                        'div',
                        { className: 'moreInfo' },
                        _react2.default.createElement(
                            'p',
                            null,
                            listing.description
                        ),
                        listing.events && _react2.default.createElement(
                            'div',
                            { className: 'events' },
                            this.eventsDisplay(listing.events)
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'listingClose' },
                    (listing.description || eventsPresence) && _react2.default.createElement(_reactFontawesome2.default, { icon: closeIcon, onClick: this._revealInfo })
                )
            );
        }
    }]);

    return Listing;
}(_react2.default.Component);

exports.default = Listing;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Date = function (_React$Component) {
    _inherits(Date, _React$Component);

    function Date() {
        _classCallCheck(this, Date);

        return _possibleConstructorReturn(this, (Date.__proto__ || Object.getPrototypeOf(Date)).apply(this, arguments));
    }

    _createClass(Date, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                _reactIntl.IntlProvider,
                { locale: 'en' },
                _react2.default.createElement(_reactIntl.FormattedDate, { value: this.props.date, month: 'long', day: 'numeric' })
            );
        }
    }]);

    return Date;
}(_react2.default.Component);

exports.default = Date;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    displayCity: function displayCity($numero) {
        if ($numero < "20" && $numero >= "10") {
            return "Tribeca";
        } else if ($numero < "30" && $numero >= "20") {

            return "Lower East Side";
        } else if ($numero < "60" && $numero >= "30") {

            return "Soho & Noho & East Village";
        } else if ($numero < "170" && $numero >= "60") {

            return "West Village & Chelsea";
        } else if ($numero < "220" && $numero >= "170") {

            return "Midtown & Uptown & Harlem";
        } else if ($numero < "270" && $numero >= "220") {

            return "Brooklyn";
        } else if ($numero < "300" && $numero >= "270") {

            return "Queens & Bronx & Staten Island";
        } else if ($numero < "310" && $numero >= "300") {

            return "Long Island";
        } else if ($numero < "320" && $numero >= "310") {

            return "Upstate New York";
        } else if ($numero < "330" && $numero >= "320") {

            return "New Jersey";
        } else if ($numero < "370" && $numero >= "330") {

            return "Philadelphia";
        } else {
            return "";
        }
    },
    displayCityNum: function displayCityNum($num) {
        var allCities = [10, 20, 30, 60, 170, 220, 270, 300, 310, 320, 330];
        var winner = void 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = allCities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var itt = _step.value;

                var diff = $num - itt;
                if (diff > 0) {
                    winner = itt;
                } else if (diff == 0) {
                    return itt;
                } else {
                    return winner;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },
    displayNeighborhood: function displayNeighborhood($numero) {

        if ($numero < "20" && $numero >= "10") {
            return "Tribeca and below";
        } else if ($numero < "30" && $numero >= "20") {
            return "Lower East Side";
        } else if ($numero < "40" && $numero >= "30") {
            return "Soho";
        } else if ($numero < "60" && $numero >= "40") {
            return "Noho/East Village";
        } else if ($numero < "70" && $numero >= "60") {
            return "West Village";
        } else if ($numero < "80" && $numero >= "70") {
            return "19th St and below";
        } else if ($numero < "90" && $numero >= "80") {
            return "20th St and nearby";
        } else if ($numero < "100" && $numero >= "90") {
            return "21st St and nearby";
        } else if ($numero < "110" && $numero >= "100") {
            return "22nd St and nearby";
        } else if ($numero < "120" && $numero >= "110") {
            return "23rd St and nearby";
        } else if ($numero < "130" && $numero >= "120") {
            return "24th St and nearby";
        } else if ($numero < "140" && $numero >= "130") {
            return "25th St and nearby";
        } else if ($numero < "150" && $numero >= "140") {
            return "26th St and nearby";
        } else if ($numero < "160" && $numero >= "150") {
            return "27th St and above";
        } else if ($numero < "170" && $numero >= "160") {
            return "Flatiron/Gramercy Park";
        } else if ($numero < "180" && $numero >= "170") {
            return "Midtown";
        } else if ($numero < "190" && $numero >= "180") {
            return "57th Street and nearby";
        } else if ($numero < "200" && $numero >= "190") {
            return "Upper East Side";
        } else if ($numero < "210" && $numero >= "200") {
            return "Upper West Side";
        } else if ($numero < "220" && $numero >= "210") {
            return "Harlem";
        } else if ($numero < "230" && $numero >= "220") {
            return "Brooklyn South";
        } else if ($numero < "235" && $numero >= "230") {
            return "Dumbo/Downtown";
        } else if ($numero < "240" && $numero >= "235") {
            return "Fort Greene";
        } else if ($numero < "250" && $numero >= "240") {
            return "Bushwick/Bed-stuy";
        } else if ($numero < "260" && $numero >= "250") {
            return "Williamsburg / Greenpoint";
        } else if ($numero < "270" && $numero >= "260") {
            return "Brooklyn (Other)";
        } else if ($numero < "272" && $numero >= "270") {
            return "Ridgewood";
        } else if ($numero < "274" && $numero >= "272") {
            return "Long Island City/Astoria";
        } else if ($numero < "280" && $numero >= "274") {
            return "Queens (Other)";
        } else if ($numero < "290" && $numero >= "280") {
            return "The Bronx";
        } else if ($numero < "300" && $numero >= "290") {
            return "Staten Island";
        } else if ($numero < "310" && $numero >= "300") {
            return "Long Island";
        } else if ($numero < "320" && $numero >= "310") {
            return "Upstate New York";
        } else if ($numero < "330" && $numero >= "320") {
            return "New Jersey";
        } else if ($numero < "340" && $numero >= "330") {
            return "Philadelphia";
        } else if ($numero < "350" && $numero >= "340") {
            return "Old City";
        } else if ($numero < "360" && $numero >= "350") {
            return "West Philadelphia";
        } else if ($numero < "370" && $numero >= "360") {
            return "North Philadelphia";
        } else {
            return "Other";
        }
    }

};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function (_React$Component) {
  _inherits(Loading, _React$Component);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
  }

  _createClass(Loading, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "loading" },
        "Loading..."
      );
    }
  }]);

  return Loading;
}(_react2.default.Component);

exports.default = Loading;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _validator = __webpack_require__(43);

var _validator2 = _interopRequireDefault(_validator);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _reactstrap = __webpack_require__(4);

var _reactRouter = __webpack_require__(3);

var _FacebookButton = __webpack_require__(109);

var _FacebookButton2 = _interopRequireDefault(_FacebookButton);

var _loading = __webpack_require__(13);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var LogInForm = function (_React$Component) {
    _inherits(LogInForm, _React$Component);

    function LogInForm(props) {
        _classCallCheck(this, LogInForm);

        var _this = _possibleConstructorReturn(this, (LogInForm.__proto__ || Object.getPrototypeOf(LogInForm)).call(this, props));

        _this.state = {
            username: '',
            password: '',
            errorMessage: {},
            isValid: {}
        };

        // Function binding
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this._validateEmail = _this._validateEmail.bind(_this);
        _this._validatePassword = _this._validatePassword.bind(_this);
        _this._validate = _this._validate.bind(_this);
        _this._areValid = _this._areValid.bind(_this);
        return _this;
    }

    //Update values of inputs


    _createClass(LogInForm, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var target = event.target;
            var value = target.value;
            var name = target.name;

            this.setState(_defineProperty({}, name, value));
        }

        //Validators

    }, {
        key: '_validateEmail',
        value: function _validateEmail(value) {
            var valid = _validator2.default.isEmail(value);
            var errorMessage = this.state.errorMessage;

            if (valid) {
                errorMessage.email = '';
                this.setState({ errorMessage: errorMessage });
            } else {
                errorMessage.email = 'Please enter a valid email address';
                this.setState({ errorMessage: errorMessage });
            }
            return valid;
        }
    }, {
        key: '_validatePassword',
        value: function _validatePassword(value) {
            var valid = _validator2.default.isLength(value.trim(), 5, 50);
            var errorMessage = this.state.errorMessage;

            if (valid) {
                errorMessage.password = '';
                this.setState({ errorMessage: errorMessage });
            } else {
                errorMessage.password = 'Please enter a password. 5 characters min.';
                this.setState({ errorMessage: errorMessage });
            }
            return valid;
        }
    }, {
        key: '_validate',
        value: function _validate(email, password) {
            this.setState({
                isValid: {
                    email: this._validateEmail(email),
                    password: this._validatePassword(password)
                }
            });
        }
    }, {
        key: '_areValid',
        value: function _areValid(email, password) {
            var result = false;

            if (this._validateEmail(email) && this._validatePassword(password)) {

                result = true;
            }
            return result;
        }

        // Add the listing to the database

    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {

            event.preventDefault();

            var _state = this.state,
                username = _state.username,
                password = _state.password;

            this._validate(username, password);

            if (this._areValid(username, password)) {

                var formData = {
                    username: this.state.username,
                    password: this.state.password
                };

                _AuthActions2.default.attemptLogIn(formData);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'loginForm' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Sign-In'
                ),
                _react2.default.createElement(
                    _reactstrap.Form,
                    { onSubmit: this.handleSubmit },
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(_reactstrap.Input, {
                            name: 'username',
                            placeholder: 'Email',
                            type: 'text',
                            value: this.state.username,
                            onChange: this.handleChange
                        }),
                        this.state.errorMessage.email && _react2.default.createElement(
                            'div',
                            { className: 'alert alert-danger' },
                            this.state.errorMessage.email
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(_reactstrap.Input, {
                            name: 'password',
                            placeholder: 'Password',
                            type: 'password',
                            value: this.state.password,
                            onChange: this.handleChange
                        }),
                        this.state.errorMessage.password && _react2.default.createElement(
                            'div',
                            { className: 'alert alert-danger' },
                            this.state.errorMessage.password
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.Button,
                        null,
                        'Log In'
                    ),
                    this.props.loading && _react2.default.createElement(_loading2.default, null),
                    this.props.error.login && _react2.default.createElement(
                        'div',
                        { className: 'alert alert-danger' },
                        this.props.error.login
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Don\'t have an account? ',
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/signup', activeClassName: 'active' },
                            'Register'
                        )
                    )
                ),
                _react2.default.createElement(_FacebookButton2.default, null)
            );
        }
    }]);

    return LogInForm;
}(_react2.default.Component);

exports.default = LogInForm;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = __webpack_require__(62);

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(16);

var _alt2 = _interopRequireDefault(_alt);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ImagesActions = __webpack_require__(22);

var _ImagesActions2 = _interopRequireDefault(_ImagesActions);

var _toastr = __webpack_require__(73);

var _toastr2 = _interopRequireDefault(_toastr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListStore = function () {
    function ListStore() {
        _classCallCheck(this, ListStore);

        this.bindActions(_ListActions2.default);
        this.bindActions(_AuthActions2.default);
        this.bindActions(_ImagesActions2.default);
        //Display settings
        this.view = 'medium';
        //List states
        this.currentListings = [];
        this.futureListings = [];
        this.allListings = [];
        this.eventsListings = [];
        this.glanceListings = [];
        this.latestListings = [];
        // Auth states
        this.user = {};
        this.user.isLoggedIn = false;
        this.user.facebook = {};
        this.user.local = {};
        this.user.mylist = [];
        this.currentUser = {};
        this.user.userAccess = 0;
        this.allUsers = [];
        //SideBar states
        this.sidebarOpen = false;
        // Image State
        this.isUploaded = false;
        this.uploadedFileCloudinaryUrl = '';
        this.listingEdit = {}, this.listingEdit.image = '';
        //New listing states
        this.listingEdit = {};
        this.listingEdit._id = '';
        this.listingEdit.name = '';
        this.listingEdit.description = '';
        this.listingEdit.text = '';
        this.listingEdit.event = false;
        this.listingEdit.events = [];
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
        this.venue.likeList = 0;
        this.venue.currentListings = [];
        this.venue.upcomingListings = [];
        this.venue.pastListings = [];
        //Loadings
        this.loading = {};
        this.loading.login = false;
        this.loading.register = false;
        this.loading.updateuser = false;
        this.loading.updatelisting = false;
        this.loading.deletelisting = false;
        this.loading.updatevenue = false;
        this.loading.deletevenue = false;
        this.loading.savelisting = false;
        this.loading.savevenue = false;
        this.loading.current = false;
        this.loading.future = false;
        this.loading.allVenues = false;
        //Error Messages
        this.error = {};
        this.error.feature = '';
        this.error.login = '';
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
        this.success.deletelisting = false;
        this.success.deletevenue = false;
        this.success.savelisting = false;
        this.success.savevenue = false;
    }

    //List Reducers


    _createClass(ListStore, [{
        key: 'onGetCurrentAttempt',
        value: function onGetCurrentAttempt() {
            this.loading.current = true;
        }
    }, {
        key: 'onGetCurrentSuccess',
        value: function onGetCurrentSuccess(data) {
            this.loading.current = false;
            this.currentListings = this.currentListings.concat(data);
        }
    }, {
        key: 'onGetFutureAttempt',
        value: function onGetFutureAttempt() {
            this.loading.future = true;
        }
    }, {
        key: 'onGetFutureSuccess',
        value: function onGetFutureSuccess(data) {
            this.loading.future = false;
            this.futureListings = this.futureListings.concat(data);
            console.log(data);
        }
    }, {
        key: 'onGetAllSuccess',
        value: function onGetAllSuccess(data) {
            this.allListings = data;
        }
    }, {
        key: 'onGetEventsSuccess',
        value: function onGetEventsSuccess(data) {
            this.eventsListings = data;
        }
    }, {
        key: 'onGetGlanceSuccess',
        value: function onGetGlanceSuccess(data) {
            this.glanceListings = data;
        }
    }, {
        key: 'getLatestListingsSuccess',
        value: function getLatestListingsSuccess(data) {
            this.latestListings = data;
        }
    }, {
        key: 'getLatestListingsFail',
        value: function getLatestListingsFail(error) {
            console.log(error);
        }
    }, {
        key: 'onGetCurrentFail',
        value: function onGetCurrentFail(jqXhr) {
            this.loading.current = false;
            // Handle multiple response formats, fallback to HTTP status code number.
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }, {
        key: 'onGetFutureFail',
        value: function onGetFutureFail(jqXhr) {
            this.loading.future = false;
            // Handle multiple response formats, fallback to HTTP status code number.
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }, {
        key: 'onGetAllFail',
        value: function onGetAllFail(jqXhr) {
            // Handle multiple response formats, fallback to HTTP status code number.
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }, {
        key: 'onGetEventsFail',
        value: function onGetEventsFail(jqXhr) {
            // Handle multiple response formats, fallback to HTTP status code number.
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }, {
        key: 'onGetGlanceFail',
        value: function onGetGlanceFail(jqXhr) {
            // Handle multiple response formats, fallback to HTTP status code number.
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }

        //Listing size change

    }, {
        key: 'onSizeChange',
        value: function onSizeChange(size) {
            this.view = size;
        }

        // Reset listing edit

    }, {
        key: 'onListingEditReset',
        value: function onListingEditReset() {
            this.listingEdit = {
                name: '',
                description: '',
                venue: {},
                events: []
            };
        }

        //Load a specific listing into listing edit

    }, {
        key: 'onEditListing',
        value: function onEditListing(listing) {
            this.listingEdit = listing;
        }
    }, {
        key: 'onAdminReset',
        value: function onAdminReset() {
            //Reset the Venue Admin
            this.allVenues = [];
            //Reset the Listing Edit
            this.listingEdit = {
                image: '',
                name: '',
                _id: '',
                description: '',
                text: '',
                events: [],
                venue: {},
                end: null,
                start: null
            };
            //Reset the Venue Edit
        }
    }, {
        key: 'onVenueEditReset',
        value: function onVenueEditReset() {
            this.venueEdit = {
                coordinates: {}
                // Reset messages
            };this.success.updatevenue = false;
            this.loading.updatevenue = false;
            this.error.updatevenue = {
                general: ''
            };
        }

        // Get listing info

    }, {
        key: 'onGetListingInfoSuccess',
        value: function onGetListingInfoSuccess(info) {
            console.log('Listing info loaded', info);
            this.listingEdit = info.data;
            if (!this.listingEdit.events) {
                this.listingEdit.events = [];
            }
            // Need to explain this
            if (info.i) {
                console.log('Feature listing');
                this.features[info.i].list = info.data;
                console.log(this.features[info.i].list);
            }
        }
    }, {
        key: 'onGetListingInfoFailure',
        value: function onGetListingInfoFailure(jqXhr) {
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }

        // Get venue info

    }, {
        key: 'onGetVenueFullInfoSuccess',
        value: function onGetVenueFullInfoSuccess(data) {
            this.listingEdit.venue = data.venue;
            this.venue = data.venue;
            this.venue.currentListings = data.currentListings;
            this.venue.upcomingListings = data.upcomingListings;
            this.venue.pastListings = data.pastListings;
        }
        // Get venue info

    }, {
        key: 'onGetVenueInfoSuccess',
        value: function onGetVenueInfoSuccess(data) {
            this.listingEdit.venue = data;
            this.venueEdit = data;
            //Create a slug automatically if there is none
            if (!data.slug) {
                this.venueEdit.slug = data.name.replace(/\s+/g, '-').toLowerCase();
            }
        }
    }, {
        key: 'onGetVenueFullInfoFailure',
        value: function onGetVenueFullInfoFailure(jqXhr) {
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }, {
        key: 'onGetVenueInfoFailure',
        value: function onGetVenueInfoFailure(jqXhr) {
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
        //Add a venue

    }, {
        key: 'onSaveVenueAttempt',
        value: function onSaveVenueAttempt() {
            this.loading.updatevenue = true;
        }
    }, {
        key: 'onSaveVenueSuccess',
        value: function onSaveVenueSuccess(data) {
            this.loading.updatevenue = false;
            this.success.updatevenue = true;
        }
    }, {
        key: 'onSaveVenueFailure',
        value: function onSaveVenueFailure(err) {
            console.log('Error: ', err);
            this.loading.updatevenue = false;
            this.error.updatevenue.general = 'Error while saving changes';
        }
        // Update a venue

    }, {
        key: 'onUpdateVenue',
        value: function onUpdateVenue(info) {
            this.venue.coordinates = {
                lat: info[1],
                long: info[0]
            };
        }
    }, {
        key: 'onUpdateVenueAttempt',
        value: function onUpdateVenueAttempt() {
            this.loading.updatevenue = true;
        }
    }, {
        key: 'onUpdateVenueSuccess',
        value: function onUpdateVenueSuccess(data) {
            this.loading.updatevenue = false;
            this.success.updatevenue = true;
        }
    }, {
        key: 'onUpdateVenueFailure',
        value: function onUpdateVenueFailure(error) {
            this.loading.updatevenue = false;
            this.error.updatevenue.general = error;
        }

        //Delete a Venue

    }, {
        key: 'onDeleteVenueAttempt',
        value: function onDeleteVenueAttempt() {
            this.loading.deletevenue = true;
            this.success.deletevenue = false;
        }
    }, {
        key: 'onDeleteVenueSuccess',
        value: function onDeleteVenueSuccess(data) {
            console.log('Deleted');
            this.loading.deletevenue = false;
            this.success.deletevenue = true;
        }
    }, {
        key: 'onDeleteVenueFailure',
        value: function onDeleteVenueFailure(err) {
            console.log('Error deleting: ', err);
            this.loading.deletevenue = false;
        }
    }, {
        key: 'onGetVenueListingsSuccess',
        value: function onGetVenueListingsSuccess(data) {
            this.venue.listings = data;
        }
    }, {
        key: 'onGetVenueListingsFailure',
        value: function onGetVenueListingsFailure(error) {
            console.log(error);
        }
    }, {
        key: 'onGetVenuesAdminAttempt',
        value: function onGetVenuesAdminAttempt() {
            this.allVenues = [];
            this.loading.allVenues = true;
        }
    }, {
        key: 'onGetVenuesAdminSuccess',
        value: function onGetVenuesAdminSuccess(data) {
            this.loading.allVenues = false;
            //this.allVenues = this.allVenues.concat(data);
            this.allVenues = data;
        }
    }, {
        key: 'onGetVenuesAdminFailure',
        value: function onGetVenuesAdminFailure(error) {
            console.log(error);
        }

        //Reset the venue in the form

    }, {
        key: 'onResetVenue',
        value: function onResetVenue() {
            this.listingEdit.venue = {
                _id: '',
                address: ''
            };
        }

        //Save a new listing

    }, {
        key: 'onSaveListingAttempt',
        value: function onSaveListingAttempt() {
            this.loading.savelisting = true;
        }
    }, {
        key: 'onSaveListingSuccess',
        value: function onSaveListingSuccess(data) {
            console.log('Saved: ', data);
            this.loading.savelisting = false;
            this.success.savelisting = true;
        }
    }, {
        key: 'onSaveListingFailure',
        value: function onSaveListingFailure(err) {
            console.log('Error: ', err);
            this.loading.savelisting = false;
            this.error.savelisting.general = 'Error while saving changes';
        }

        //Update a listing

    }, {
        key: 'onUpdateListingAttempt',
        value: function onUpdateListingAttempt() {
            this.loading.updatelisting = true;
        }
    }, {
        key: 'onUpdateListingSuccess',
        value: function onUpdateListingSuccess(data) {
            this.loading.updatelisting = false;
            this.success.updatelisting = true;
            this.sidebarOpen = false;
            var that = this;
            setTimeout(function () {
                that.success.updatelisting = false;
            }, 1000);
        }
    }, {
        key: 'onUpdateListingFailure',
        value: function onUpdateListingFailure(err) {
            this.loading.updatelisting = false;
            this.error.updatelisting.general = 'Error while saving changes';
            console.log('Error: ', err);
        }

        //Update a listing

    }, {
        key: 'onDeleteListingSuccess',
        value: function onDeleteListingSuccess(data) {
            console.log('Deleted');
            //Reset the listing data
            this.success.deletelisting = true;
            this.listingEdit = {
                venue: {}
            };
        }
    }, {
        key: 'onDeleteListingFailure',
        value: function onDeleteListingFailure(err) {
            console.log('Error: ', err);
            this.error.deletelisting = 'Error deleting listing';
        }

        //Update info on listing page

    }, {
        key: 'onListingInfoChange',
        value: function onListingInfoChange(info) {
            if (info.target) {
                var value = info.target.value;
                var name = info.target.name;
                this.listingEdit[name] = value;
            } else if (info.startDate) {
                this.listingEdit.start = info.startDate;
                if (info.endDate) {
                    this.listingEdit.end = info.endDate;
                }
            } else if (info.date) {
                this.listingEdit.start = info.date;
            } else {
                this.listingEdit.event = !info.event;
            }
        }

        //Duplicate the current listing

    }, {
        key: 'onListingDuplicate',
        value: function onListingDuplicate() {
            this.listingEdit._id = '';
        }

        //Update info on feature page

    }, {
        key: 'onFeatureInfoChange',
        value: function onFeatureInfoChange(data) {
            var value = data.event.target.value;
            var name = data.event.target.name;
            this.features[data.i][name] = value;
        }

        //Update info on venue page

    }, {
        key: 'onVenueInfoChange',
        value: function onVenueInfoChange(info) {
            var value = info.value;
            var name = info.name;
            if (name === 'lat') {
                this.venueEdit.coordinates.lat = parseFloat(value);
            } else if (name === 'long') {
                this.venueEdit.coordinates.long = parseFloat(value);
            } else {
                this.venueEdit[name] = value;
            }
            //Keep the slug synced with the name
            this.venueEdit.slug = this.venueEdit.name.replace(/\s+/g, '-').toLowerCase();
        }
        //Update coordinates on venue page

    }, {
        key: 'onCoordinatesChange',
        value: function onCoordinatesChange(coord) {
            this.venueEdit.coordinates = {
                lat: coord[1],
                long: coord[0]
            };
        }

        //FEATURED

    }, {
        key: 'onupdateFeatureSuccess',
        value: function (_onupdateFeatureSuccess) {
            function onupdateFeatureSuccess(_x) {
                return _onupdateFeatureSuccess.apply(this, arguments);
            }

            onupdateFeatureSuccess.toString = function () {
                return _onupdateFeatureSuccess.toString();
            };

            return onupdateFeatureSuccess;
        }(function (data) {
            console.log(onupdateFeatureSuccess, data);
        })
    }, {
        key: 'onupdateFeatureFailure',
        value: function onupdateFeatureFailure(error) {
            console.log(error);
        }
    }, {
        key: 'onFeatureReset',
        value: function onFeatureReset() {
            this.feature = {};
        }
    }, {
        key: 'onFeatureLoadSuccess',
        value: function onFeatureLoadSuccess(data) {
            var _this = this;

            if (data.json) {
                var i;
                var i;

                (function () {
                    // Match all features with a day of the next week
                    var features = [];
                    var dates = [];
                    for (i = 0; i < data.days; i++) {
                        var d = new Date();
                        d.setHours(0, 0, 0, 0);
                        d.setDate(d.getDate() + i);
                        dates.push(d);
                    }
                    //Find element in features whose date == d
                    //For each day of the week
                    for (i = 0; i < data.days; i++) {
                        var tempFeature = null;
                        // Go through all the features
                        data.json.map(function (feature) {
                            // Format the feature's date
                            var tempDate = new Date(feature.date);
                            tempDate.setHours(0, 0, 0, 0);
                            // Check if it matches
                            if (tempDate.getTime() == dates[i].getTime()) {
                                tempFeature = feature;
                            }
                        });
                        if (tempFeature) {
                            features.push(tempFeature);
                            tempFeature = null;
                        } else {
                            features.push({});
                        }
                    }
                    _this.features = features;
                })();
            } else {
                this.error.feature = "No Features";
            }
        }
    }, {
        key: 'onFeatureLoadFailure',
        value: function onFeatureLoadFailure(error) {
            console.log("Feature load error: ", error);
            this.features = [];
        }
    }, {
        key: 'onFeatureEdit',
        value: function onFeatureEdit(featureEdit) {
            this.feature = featureEdit;
        }

        // Auth Reducers

        // LOGIN ATTEMPT

    }, {
        key: 'onLoginAttempt',
        value: function onLoginAttempt() {
            this.loginRedirect = false;
            this.loading.login = true;
            this.error.login = '';
        }
    }, {
        key: 'onLoginFailure',
        value: function onLoginFailure(error) {
            console.log('Login error: ', error);
            this.error.login = 'Wrong username or password.';
            this.loading.login = false;
        }
    }, {
        key: 'onLoginSuccess',
        value: function onLoginSuccess(json) {
            console.log('Logged in: ', json);
            this.user = json;
            this.user.isLoggedIn = true;
            this.user.userAccess = 3;
            this.loading.login = false;
        }

        // REGISTER ATTEMPT

    }, {
        key: 'onRegisterAttempt',
        value: function onRegisterAttempt() {
            console.log('onRegisterAttempt');
            this.isRegistering = true;
        }
    }, {
        key: 'onRegisterFailure',
        value: function onRegisterFailure(error) {
            console.log(error);
            this.user.firstname = '';
            this.user.lastname = '';
            this.user._id = '';
            this.user.local.username = '';
            this.isRegistering = false;
        }
    }, {
        key: 'onRegisterSuccess',
        value: function onRegisterSuccess(user) {
            console.log('Logged in: ', user);
            this.user = user;
            this.user.isLoggedIn = true;
            this.isRegistering = false;
        }

        //Facebook Login

    }, {
        key: 'onFacebookLogin',
        value: function onFacebookLogin(user) {
            console.log("Logged in via Facebook");
            this.user = user;
            this.isRegistering = false;
            this.user.isLoggedIn = true;
        }

        //UPDATE USER

    }, {
        key: 'onUpdateUserAttempt',
        value: function onUpdateUserAttempt() {
            this.loading.updateuser = true;
            this.success.updateuser = '';
            this.error.updateuser = '';
        }
    }, {
        key: 'onUpdateUserSuccess',
        value: function onUpdateUserSuccess(data) {
            console.log('Success!', 'woo');
            this.loading.updateuser = false;
            this.success.updateuser = 'Saved!';
        }
    }, {
        key: 'onUpdateUserFailure',
        value: function onUpdateUserFailure(error) {
            console.log('Failed Updating User', error);
            this.loading.updateuser = false;
            this.error.updateuser = 'Error Saving';
        }

        //USERS ADMIN PAGE

    }, {
        key: 'onGetAllUserAttempt',
        value: function onGetAllUserAttempt() {
            console.log('Attempting to get all users');
            this.loading.allUsers = true;
        }
    }, {
        key: 'onGetAllUserFailure',
        value: function onGetAllUserFailure(error) {
            console.log('Failed to get all users', error);
            this.allUsers = [];
            this.loading.allUsers = false;
        }
    }, {
        key: 'onGetAllUserSuccess',
        value: function onGetAllUserSuccess(users) {
            console.log('Managed to get all users');
            this.loading.allUsers = false;
            this.allUsers = users;
        }

        // LOGOUT ATTEMPT

    }, {
        key: 'onLogoutFailure',
        value: function onLogoutFailure(error) {
            console.log("Failed to log out");
            console.log(error);
        }
    }, {
        key: 'onLogoutSuccess',
        value: function onLogoutSuccess(action) {
            console.log("Logged out");
            this.user = {};
            this.user.local = {};
            this.user.facebook = {};
            this.user.mylist = [];
            this.user.isLoggedIn = false;
        }

        // CHECK SESSION

    }, {
        key: 'onSessionCheckFailure',
        value: function onSessionCheckFailure() {
            this.user = {};
            this.user.local = {};
            this.user.facebook = {};
            this.user.mylist = [];
            this.user.isLoggedIn = false;
        }
    }, {
        key: 'onSessionCheckSuccess',
        value: function onSessionCheckSuccess(action) {
            this.user = action;
            if (!this.user.local) {
                this.user.local = {};
            }
            if (!this.user.facebook) {
                this.user.facebook = {};
            }
            this.user.isLoggedIn = true;
        }

        // ADD TO MYLIST

    }, {
        key: 'onAddToMyListSuccess',
        value: function onAddToMyListSuccess(data) {
            console.log('Added to the list');
            if (data) {
                this.user.mylist = data;
            } else {
                this.user.mylist = [];
            }
        }
    }, {
        key: 'onAddToMyListFailure',
        value: function onAddToMyListFailure(error) {
            console.log('Error adding to the list', this.user);
            console.log(error);
        }

        // GET MYLIST

    }, {
        key: 'onGetMylistSuccess',
        value: function onGetMylistSuccess(data) {
            console.log('onGetMylistSuccess');
            if (data) {
                this.user.mylist = data;
            } else {
                this.user.mylist = [];
            }
        }
    }, {
        key: 'onGetMylistFailure',
        value: function onGetMylistFailure(jqXhr) {
            // Handle multiple response formats, fallback to HTTP status code number.
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
        //Get a user's list

    }, {
        key: 'onGetUserMylistSuccess',
        value: function onGetUserMylistSuccess(data) {
            console.log('onGetUserMylistSuccess');
            this.currentUser = data;
        }
    }, {
        key: 'onGetUserMylistFailure',
        value: function onGetUserMylistFailure(jqXhr) {
            // Handle multiple response formats, fallback to HTTP status code number.
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
        // REORDER MYLIST

    }, {
        key: 'onReorderMyListAttempt',
        value: function onReorderMyListAttempt(data) {
            this.user.mylist = data;
        }
    }, {
        key: 'onReorderMyListSuccess',
        value: function onReorderMyListSuccess(data) {
            console.log('saved!');
        }
    }, {
        key: 'onReorderMyListFailure',
        value: function onReorderMyListFailure() {
            console.log('problem!');
        }

        // INFO CHANGE ON ACCOUNT PAGE

    }, {
        key: 'onUserInfoChange',
        value: function onUserInfoChange(data) {
            var target = data.event.target;
            var value = target.value;
            var name = target.name;
            if (data.index == null) {
                //Means we're in the account edit page
                if (name == "email") {
                    this.user.local.username = value;
                } else {
                    this.user[name] = value;
                }
            } else {
                //Means we're in the user admin page
                if (name == "email") {
                    this.allUsers[data.index].username = value;
                } else {
                    this.allUsers[data.index][name] = value;
                }
            }
        }

        // UPLOAD AN AVATAR

    }, {
        key: 'onAvatarUploadSuccess',
        value: function onAvatarUploadSuccess(image) {
            this.isUploaded = true;
            this.user.avatar = image.public_id;
        }
    }, {
        key: 'onAvatarUploadFailure',
        value: function onAvatarUploadFailure(err) {
            console.log('Error: ', err);
        }
        // UPLOAD A THUMBNAIL

    }, {
        key: 'onThumbnailUploadSuccess',
        value: function onThumbnailUploadSuccess(data) {
            this.isUploaded = true;
            this.listingEdit.image = data.image.public_id;
            if (data.i) {
                this.features[data.i].list.image = data.image.public_id;
            }
        }
    }, {
        key: 'onThumbnailUploadFailure',
        value: function onThumbnailUploadFailure(err) {
            console.log('Error: ', err);
        }

        //EVENTS

    }, {
        key: 'onAddEvent',
        value: function onAddEvent() {
            this.listingEdit.events.push({
                name: "",
                description: "",
                type: "",
                date: ""
            });
        }
    }, {
        key: 'onRemoveEvent',
        value: function onRemoveEvent(index) {
            this.listingEdit.events.splice(index, 1);
        }
    }, {
        key: 'onEventsInfoChange',
        value: function onEventsInfoChange(event) {
            if (event.target) {
                var type = event.target.name;
                var index = event.target.dataset.index;
                this.listingEdit.events[index][type] = event.target.value;
            } else if (event.date) {
                this.listingEdit.events[event.index].date = event.date;
            }
        }

        //Sidebar

    }, {
        key: 'onToggleSideBar',
        value: function onToggleSideBar() {
            this.sidebarOpen = !this.sidebarOpen;
        }
    }]);

    return ListStore;
}();

exports.default = _alt2.default.createStore(ListStore);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectorBlock = function (_React$Component) {
    _inherits(SelectorBlock, _React$Component);

    function SelectorBlock(props) {
        _classCallCheck(this, SelectorBlock);

        var _this = _possibleConstructorReturn(this, (SelectorBlock.__proto__ || Object.getPrototypeOf(SelectorBlock)).call(this, props));

        _this.viewChange = _this.viewChange.bind(_this);
        _this.componentWillMount = _this.componentWillMount.bind(_this);
        return _this;
    }

    _createClass(SelectorBlock, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.view;
        }
    }, {
        key: 'viewChange',
        value: function viewChange(e) {
            var size = $(e.target).data('size');
            _ListActions2.default.sizeChange(size);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'selectorBlock' },
                _react2.default.createElement('i', { className: this.props.view == 'small' ? 'active fa fa-bars' : 'fa fa-bars',
                    'data-size': 'small',
                    'aria-hidden': 'true',
                    onClick: this.viewChange }),
                _react2.default.createElement('i', { className: this.props.view == 'medium' ? 'active fa fa-list' : 'fa fa-list',
                    'data-size': 'medium',
                    'aria-hidden': 'true',
                    onClick: this.viewChange }),
                _react2.default.createElement('i', { className: this.props.view == 'large' ? 'active fa fa-th' : 'fa fa-th',
                    'data-size': 'large',
                    'aria-hidden': 'true',
                    onClick: this.viewChange })
            );
        }
    }]);

    return SelectorBlock;
}(_react2.default.Component);

exports.default = SelectorBlock;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSelect = __webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formSelect = function (_React$Component) {
    _inherits(formSelect, _React$Component);

    function formSelect(props) {
        _classCallCheck(this, formSelect);

        return _possibleConstructorReturn(this, (formSelect.__proto__ || Object.getPrototypeOf(formSelect)).call(this, props));
    }

    _createClass(formSelect, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_reactSelect.AsyncCreatable, {
                name: 'venue',
                value: this.props.value,
                loadOptions: this.props.getOptions,
                onChange: this.props.handleSelectChange
            });
        }
    }]);

    return formSelect;
}(_react2.default.Component);

exports.default = formSelect;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(16);

var _alt2 = _interopRequireDefault(_alt);

__webpack_require__(30);

var _superagent = __webpack_require__(72);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImagesActions = function () {
    function ImagesActions() {
        _classCallCheck(this, ImagesActions);

        this.generateActions('avatarUploadFailure', 'avatarUploadSuccess', 'thumbnailUploadSuccess', 'thumbnailUploadFailure');
    }

    _createClass(ImagesActions, [{
        key: 'handleAvatarUpload',
        value: function handleAvatarUpload(file) {
            var _this = this;

            console.log('Image Uploading');
            var CLOUDINARY_UPLOAD_PRESET = 'Avatar';
            var CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/artcritical/image/upload';

            var upload = _superagent2.default.post(CLOUDINARY_UPLOAD_URL).field('upload_preset', CLOUDINARY_UPLOAD_PRESET).field('file', file);

            upload.end(function (err, response) {
                if (err) {
                    console.log('Error uploading');
                    _this.avatarUploadFailure(err);
                }

                if (response.body.secure_url !== '') {
                    console.log('Image Uploaded');
                    console.log(response.body);
                    _this.avatarUploadSuccess(response.body);
                }
            });
        }
    }, {
        key: 'handleThumbnailUpload',
        value: function handleThumbnailUpload(file, i) {
            var _this2 = this;

            console.log('Image Uploading');
            var CLOUDINARY_UPLOAD_PRESET = 'Listing';
            var CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/artcritical/image/upload';

            var upload = _superagent2.default.post(CLOUDINARY_UPLOAD_URL).field('upload_preset', CLOUDINARY_UPLOAD_PRESET).field('file', file);

            upload.end(function (err, response) {
                if (err) {
                    console.log('Error uploading');
                    _this2.thumbnailUploadFailure(err);
                }

                if (response.body.secure_url !== '') {
                    var image = response.body;
                    _this2.thumbnailUploadSuccess({ image: image, i: i });
                }
            });
        }
    }]);

    return ImagesActions;
}();

exports.default = _alt2.default.createActions(ImagesActions);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);




var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var humps = createCommonjsModule(function (module) {
// =========
// = humps =
// =========
// Underscore-to-camelCase converter (and vice versa)
// for strings and object keys

// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.


(function(global) {

  var _processKeys = function(convert, obj, options) {
    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
      return obj;
    }

    var output,
        i = 0,
        l = 0;

    if(_isArray(obj)) {
      output = [];
      for(l=obj.length; i<l; i++) {
        output.push(_processKeys(convert, obj[i], options));
      }
    }
    else {
      output = {};
      for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
          output[convert(key, options)] = _processKeys(convert, obj[key], options);
        }
      }
    }
    return output;
  };

  // String conversion methods

  var separateWords = function(string, options) {
    options = options || {};
    var separator = options.separator || '_';
    var split = options.split || /(?=[A-Z])/;

    return string.split(split).join(separator);
  };

  var camelize = function(string) {
    if (_isNumerical(string)) {
      return string;
    }
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.substr(0, 1).toLowerCase() + string.substr(1);
  };

  var pascalize = function(string) {
    var camelized = camelize(string);
    // Ensure 1st char is always uppercase
    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
  };

  var decamelize = function(string, options) {
    return separateWords(string, options).toLowerCase();
  };

  // Utilities
  // Taken from Underscore.js

  var toString = Object.prototype.toString;

  var _isFunction = function(obj) {
    return typeof(obj) === 'function';
  };
  var _isObject = function(obj) {
    return obj === Object(obj);
  };
  var _isArray = function(obj) {
    return toString.call(obj) == '[object Array]';
  };
  var _isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };
  var _isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };
  var _isBoolean = function(obj) {
    return toString.call(obj) == '[object Boolean]';
  };

  // Performant way to determine if obj coerces to a number
  var _isNumerical = function(obj) {
    obj = obj - 0;
    return obj === obj;
  };

  // Sets up function which handles processing keys
  // allowing the convert function to be modified by a callback
  var _processor = function(convert, options) {
    var callback = options && 'process' in options ? options.process : options;

    if(typeof(callback) !== 'function') {
      return convert;
    }

    return function(string, options) {
      return callback(string, convert, options);
    }
  };

  var humps = {
    camelize: camelize,
    decamelize: decamelize,
    pascalize: pascalize,
    depascalize: decamelize,
    camelizeKeys: function(object, options) {
      return _processKeys(_processor(camelize, options), object);
    },
    decamelizeKeys: function(object, options) {
      return _processKeys(_processor(decamelize, options), object, options);
    },
    pascalizeKeys: function(object, options) {
      return _processKeys(_processor(pascalize, options), object);
    },
    depascalizeKeys: function () {
      return this.decamelizeKeys.apply(this, arguments);
    }
  };

  if (false) {
    undefined(humps);
  } else if ('object' !== 'undefined' && module.exports) {
    module.exports = humps;
  } else {
    global.humps = humps;
  }

})(commonjsGlobal);
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();













var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};













var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};





















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = humps.camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();

    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;

    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var children = (element.children || []).map(convert.bind(null, createElement));

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;
      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;
      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[humps.camelize(key)] = val;
        }
    }

    return acc;
  }, { attrs: {} });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === undefined ? {} : _extraProps$style,
      remaining = objectWithoutProperties(extraProps, ['style']);


  mixins.attrs['style'] = _extends({}, mixins.attrs['style'], existingStyle);

  return createElement.apply(undefined, [element.tag, _extends({}, mixins.attrs, remaining)].concat(toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = process.env.NODE_ENV === 'production';
} catch (e) {}

var log = function () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
};

function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
}

function classList(props) {
  var _classes;

  var classes = (_classes = {
    'fa-spin': props.spin,
    'fa-pulse': props.pulse,
    'fa-fw': props.fixedWidth,
    'fa-border': props.border,
    'fa-li': props.listItem,
    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
  }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), _classes);

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

function normalizeIconArgs(icon) {
  if (icon === null) {
    return null;
  }

  if ((typeof icon === 'undefined' ? 'undefined' : _typeof(icon)) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  }

  if (Array.isArray(icon) && icon.length === 2) {
    return { prefix: icon[0], iconName: icon[1] };
  }

  if (typeof icon === 'string') {
    return { prefix: 'fas', iconName: icon };
  }
}

function FontAwesomeIcon$1(props) {
  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className;


  var icon = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(toConsumableArray(classList(props)), toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].parse.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));

  var renderedIcon = __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].icon(icon, _extends({}, classes, transform, mask, {
    symbol: symbol
  }));

  if (!renderedIcon) {
    log('Could not find icon', icon);
    return null;
  }

  var abstract = renderedIcon.abstract;

  var convertCurry = convert.bind(null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement);
  var extraProps = {};

  Object.keys(props).forEach(function (key) {
    if (!FontAwesomeIcon$1.defaultProps.hasOwnProperty(key)) extraProps[key] = props[key];
  });

  return convertCurry(abstract[0], extraProps);
}

FontAwesomeIcon$1.propTypes = {
  border: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  mask: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),

  fixedWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  flip: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['horizontal', 'vertical', 'both']),

  icon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),

  listItem: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  pull: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['right', 'left']),

  pulse: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  rotation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([90, 180, 270]),

  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),

  spin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  symbol: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),

  transform: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object])
};

FontAwesomeIcon$1.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  name: '',
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  transform: null
};

__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].noAuto();

/* harmony default export */ __webpack_exports__["default"] = (FontAwesomeIcon$1);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactToggleButton = __webpack_require__(25);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactRouter = __webpack_require__(3);

var _reactstrap = __webpack_require__(4);

var _formDateRange = __webpack_require__(82);

var _formDateRange2 = _interopRequireDefault(_formDateRange);

var _formDateSingle = __webpack_require__(35);

var _formDateSingle2 = _interopRequireDefault(_formDateSingle);

var _DateBlock = __webpack_require__(6);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _formSelect = __webpack_require__(20);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _ThumbnailInput = __webpack_require__(36);

var _ThumbnailInput2 = _interopRequireDefault(_ThumbnailInput);

var _EventsForm = __webpack_require__(85);

var _EventsForm2 = _interopRequireDefault(_EventsForm);

var _confirmModal = __webpack_require__(86);

var _confirmModal2 = _interopRequireDefault(_confirmModal);

var _UserLink = __webpack_require__(87);

var _UserLink2 = _interopRequireDefault(_UserLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Components


var ListingForm = function (_React$Component) {
    _inherits(ListingForm, _React$Component);

    function ListingForm(props) {
        _classCallCheck(this, ListingForm);

        var _this = _possibleConstructorReturn(this, (ListingForm.__proto__ || Object.getPrototypeOf(ListingForm)).call(this, props));

        _this.state = {
            event: _this.props.event,
            updatevisible: false,
            deletevisible: false,
            createvisible: false,
            wasChanged: false //check if any change was made to the listing
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        _this.onConfirm = _this.onConfirm.bind(_this);
        _this.onDeleteConfirm = _this.onDeleteConfirm.bind(_this);
        _this.onCreateConfirm = _this.onCreateConfirm.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.onEventsChange = _this.onEventsChange.bind(_this);
        return _this;
    }

    // Add the listing to the database


    _createClass(ListingForm, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var newListing = this.props.listing;

            //Make sure that the listing copies the venue's neighborhood
            console.log(newListing.venue.neighborhood);
            newListing.neighborhood = newListing.venue.neighborhood;

            //Check and save only events that have a date
            var allEvents = [];
            newListing.events.map(function (event) {
                if (event.date) {
                    allEvents.push(event);
                }
            });
            newListing.events = allEvents;

            if (this.props.listing._id) {
                //Edit the current listing
                _ListActions2.default.updateListing(newListing);
                this.setState({
                    updatevisible: false
                });
            } else {
                //Create a new Listing
                delete newListing._id;
                _ListActions2.default.saveListing(newListing);
                this.setState({
                    createvisible: false
                });
            }
        }

        //If events are edited

    }, {
        key: 'onEventsChange',
        value: function onEventsChange() {
            this.setState({
                wasChanged: true
            });
        }

        //Delete the listing

    }, {
        key: 'handleDelete',
        value: function handleDelete() {
            _ListActions2.default.deleteListing(this.props.listing._id);
            this.setState({
                deletevisible: false
            });
        }

        //confirm alert

    }, {
        key: 'onConfirm',
        value: function onConfirm(event) {
            event.preventDefault();
            this.setState({
                updatevisible: true
            });
        }

        //Duplicate

    }, {
        key: 'onDuplicate',
        value: function onDuplicate(event) {
            event.preventDefault();
            _ListActions2.default.listingDuplicate();
        }

        //confirm alert

    }, {
        key: 'onDeleteConfirm',
        value: function onDeleteConfirm(event) {
            event.preventDefault();
            this.setState({
                deletevisible: true
            });
        }
    }, {
        key: 'onCreateConfirm',
        value: function onCreateConfirm(event) {
            event.preventDefault();
            this.setState({
                createvisible: true
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            //Update values of inputs
            _ListActions2.default.listingInfoChange(event);
            this.setState({
                wasChanged: true
            });
        }

        //Search as the user types in select box

    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            if (data) {
                if (data.label == data.value) {
                    // Create a new venue
                    _ListActions2.default.venueInfoChange({
                        name: 'name',
                        value: data.value
                    });
                    _reactRouter.browserHistory.push('/admin/venues');
                } else {
                    //Fetch all the venue info
                    _ListActions2.default.getVenueInfo(data.value);
                }
            } else {
                _ListActions2.default.resetVenue();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var listing = this.props.listing;

            //how to get option for select element
            var getOptions = function getOptions(input) {
                if (input) {
                    return fetch('/venues/find/' + input).then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        return { options: json };
                    });
                } else {
                    return Promise.resolve({ options: [] });
                }
            };

            var venueData = { value: listing.venue._id, label: listing.venue.name

                // If the listing exists, offer to delete it
            };var deleteButton = this.props.listing._id && _react2.default.createElement(
                _reactstrap.Button,
                { className: 'delete', color: 'danger', onClick: this.onDeleteConfirm },
                'Delete'
            );

            return _react2.default.createElement(
                'div',
                { id: 'listingForm' },
                !listing._id && _react2.default.createElement(
                    _reactstrap.Alert,
                    { color: 'primary' },
                    'This is a draft listing.'
                ),
                _react2.default.createElement(
                    _reactstrap.Form,
                    null,
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Name'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { name: 'name', placeholder: 'Event name', type: 'text', value: listing.name, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Venue'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_formSelect2.default, { value: venueData, handleSelectChange: this.handleSelectChange, getOptions: getOptions })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Event'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactToggleButton2.default, {
                                value: listing.event,
                                onToggle: function onToggle(value) {
                                    _this2.handleChange({ 'event': value });
                                } })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            ' Dates '
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            listing.event ? //If an event
                            _react2.default.createElement(_formDateSingle2.default, { startDate: listing.start, onDatesChange: this.handleChange }) : // If not an event
                            _react2.default.createElement(_formDateRange2.default, { startDate: listing.start, endDate: listing.end, onDatesChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Description'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { type: 'textarea', name: 'description', value: listing.description, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Events'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_EventsForm2.default, { events: listing.events ? listing.events : [], onChange: this.onEventsChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Thumbnail'
                        ),
                        _react2.default.createElement(_ThumbnailInput2.default, listing)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'byline' },
                        listing.updated_by && _react2.default.createElement(
                            'p',
                            null,
                            'Edited by ',
                            _react2.default.createElement(_UserLink2.default, { user: listing.updated_by }),
                            ' on ',
                            _react2.default.createElement(_DateBlock2.default, { date: listing.updated_at })
                        ),
                        listing.created_at && _react2.default.createElement(
                            'p',
                            null,
                            'Created on ',
                            _react2.default.createElement(_DateBlock2.default, { date: listing.created_at })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        listing._id ? _react2.default.createElement(
                            _reactstrap.Button,
                            { onClick: this.onConfirm, disabled: !this.state.wasChanged },
                            'Update'
                        ) : _react2.default.createElement(
                            _reactstrap.Button,
                            { onClick: this.onCreateConfirm },
                            'Create'
                        ),
                        deleteButton,
                        listing._id && _react2.default.createElement(
                            _reactstrap.Button,
                            { onClick: this.onDuplicate },
                            'Duplicate'
                        )
                    )
                ),
                this.state.updatevisible && _react2.default.createElement(_confirmModal2.default, {
                    modalVisible: this.state.updatevisible,
                    handleSubmit: this.handleSubmit,
                    textTitle: 'Update',
                    textAction: 'save this Listing',
                    textConfirm: 'Saved!',
                    error: this.props.error.general,
                    success: this.props.success.updatelisting }),
                this.state.createvisible && _react2.default.createElement(_confirmModal2.default, {
                    modalVisible: this.state.createvisible,
                    handleSubmit: this.handleSubmit,
                    textTitle: 'Create',
                    textAction: 'create this Listing',
                    textConfirm: 'Created!',
                    error: this.props.error.general,
                    success: this.props.success.savelisting }),
                this.state.deletevisible && _react2.default.createElement(_confirmModal2.default, {
                    modalVisible: this.state.deletevisible,
                    handleSubmit: this.handleDelete,
                    textTitle: 'Delete',
                    textAction: 'delete this Listing',
                    textConfirm: 'Deleted!',
                    error: this.props.error.general,
                    success: this.props.success.deletelisting })
            );
        }
    }]);

    return ListingForm;
}(_react2.default.Component);

exports.default = ListingForm;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-toggle-button");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-dates");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imageBlock = function (_React$Component) {
    _inherits(imageBlock, _React$Component);

    function imageBlock() {
        _classCallCheck(this, imageBlock);

        return _possibleConstructorReturn(this, (imageBlock.__proto__ || Object.getPrototypeOf(imageBlock)).apply(this, arguments));
    }

    _createClass(imageBlock, [{
        key: "render",
        value: function render() {
            var fullURL = this.props.image ? "https://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg" : "https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg";

            return _react2.default.createElement("img", { src: fullURL, className: this.props.classes });
        }
    }]);

    return imageBlock;
}(_react2.default.Component);

exports.default = imageBlock;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

        _this.state = {
            selected: props.selected
        };
        return _this;
    }

    _createClass(Tabs, [{
        key: 'handleClick',
        value: function handleClick(index, event) {
            event.preventDefault();
            this.setState({
                selected: index
            });
        }
    }, {
        key: '_renderTitles',
        value: function _renderTitles() {

            function labels(child, index) {
                var activeClass = this.state.selected === index ? 'active' : '';
                return _react2.default.createElement(
                    'li',
                    { key: index },
                    _react2.default.createElement(
                        'a',
                        { href: '#',
                            className: activeClass,
                            onClick: this.handleClick.bind(this, index) },
                        child.props.label
                    )
                );
            }

            return _react2.default.createElement(
                'ul',
                { className: 'tabs__labels' },
                this.props.children.map(labels.bind(this))
            );
        }
    }, {
        key: '_renderContent',
        value: function _renderContent() {
            return _react2.default.createElement(
                'div',
                { className: 'tabs__content' },
                ' ',
                this.props.children[this.state.selected],
                ' '
            );
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'tabs' },
                this._renderTitles(),
                this._renderContent()
            );
        }
    }]);

    return Tabs;
}(_react2.default.Component);

exports.default = Tabs;


Tabs.defaultProps = {
    selected: 0
};

Tabs.propTypes = {
    selected: _propTypes2.default.number,
    children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.element])
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;
var bcrypt = __webpack_require__(29); // encripts password

// Create the Listings table ==================================

var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    slug: String,
    local: {
        username: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        username: String
    },
    userAccess: Number,
    avatar: String,
    bio: String,
    website: String,
    createdOn: { type: Date, default: Date.now },
    lastConnection: { type: Date },
    mylist: [{ type: String, ref: 'List' }]
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

//compile the model

module.exports = mongoose.model('User', userSchema);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7);

// Create the Listings table ==================================

var venueSchema = mongoose.Schema({
    name: String,
    slug: String,
    website: String,
    phone: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zipcode: Number,
    neighborhood: Number,
    coordinates: {
        lat: Number,
        long: Number
    },
    userList: Number,
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    },
    updated_by: {
        type: String,
        ref: 'User'
    }
});

//compile the model
module.exports = mongoose.model('Venue', venueSchema);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
/*!
 * Font Awesome Free 5.0.9 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER$1 = null;
var _PERFORMANCE = { mark: noop, measure: noop };

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER$1 = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER$1;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';

var PRODUCTION = function () {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e) {
    return false;
  }
}();

var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];

var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return n + 'x';
})).concat(oneToTwenty.map(function (n) {
  return 'w-' + n;
}));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var initial = WINDOW.FontAwesomeConfig || {};
var initialKeys = Object.keys(initial);

var _default = _extends({
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}, initial);

if (!_default.autoReplaceSvg) _default.observeMutations = false;

var config$1 = _extends({}, _default);

WINDOW.FontAwesomeConfig = config$1;

function update(newConfig) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$asNewDefault = params.asNewDefault,
      asNewDefault = _params$asNewDefault === undefined ? false : _params$asNewDefault;

  var validKeys = Object.keys(config$1);
  var ok = asNewDefault ? function (k) {
    return ~validKeys.indexOf(k) && !~initialKeys.indexOf(k);
  } : function (k) {
    return ~validKeys.indexOf(k);
  };

  Object.keys(newConfig).forEach(function (configKey) {
    if (ok(configKey)) config$1[configKey] = newConfig[configKey];
  });
}

function auto(value) {
  update({
    autoReplaceSvg: value,
    observeMutations: value
  });
}

var w = WINDOW || {};

if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];
var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);

  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

var domready = function (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
};

var d = UNITS_IN_GRID;

var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function bunker(fn) {
  try {
    fn();
  } catch (e) {
    if (!PRODUCTION) {
      throw e;
    }
  }
}

function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;

  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();
    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);

  return css;
}

var _uniqueId = 0;

function nextUniqueId() {
  _uniqueId++;

  return _uniqueId;
}

function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}

function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}

function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}

function htmlEscape(str) {
  return ('' + str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + (attributeName + '="' + htmlEscape(attributes[attributeName]) + '" ');
  }, '').trim();
}

function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + (styleName + ': ' + styles[styleName] + ';');
  }, '');
}

function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;

  var outer = {
    transform: 'translate(' + containerWidth / 2 + ' 256)'
  };
  var innerTranslate = 'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
  var innerScale = 'scale(' + transform.size / 16 * (transform.flipX ? -1 : 1) + ', ' + transform.size / 16 * (transform.flipY ? -1 : 1) + ') ';
  var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
  var inner = {
    transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate
  };
  var path = {
    transform: 'translate(' + iconWidth / 2 * -1 + ' -256)'
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}

function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === undefined ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === undefined ? false : _ref2$startCentered;

  var val = '';

  if (startCentered && IS_IE) {
    val += 'translate(' + (transform.x / d - width / 2) + 'em, ' + (transform.y / d - height / 2) + 'em) ';
  } else if (startCentered) {
    val += 'translate(calc(-50% + ' + transform.x / d + 'em), calc(-50% + ' + transform.y / d + 'em)) ';
  } else {
    val += 'translate(' + transform.x / d + 'em, ' + transform.y / d + 'em) ';
  }

  val += 'scale(' + transform.size / d * (transform.flipX ? -1 : 1) + ', ' + transform.size / d * (transform.flipY ? -1 : 1) + ') ';
  val += 'rotate(' + transform.rotate + 'deg) ';

  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

var makeIconMasking = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;


  var trans = transformForSvg({ transform: transform, containerWidth: maskWidth, iconWidth: mainWidth });

  var maskRect = {
    tag: 'rect',
    attributes: _extends({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroup = {
    tag: 'g',
    attributes: _extends({}, trans.inner),
    children: [{ tag: 'path', attributes: _extends({}, mainPath.attributes, trans.path, { fill: 'black' }) }]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _extends({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = 'mask-' + nextUniqueId();
  var clipId = 'clip-' + nextUniqueId();
  var maskTag = {
    tag: 'mask',
    attributes: _extends({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{ tag: 'clipPath', attributes: { id: clipId }, children: [maskPath] }, maskTag]
  };

  children.push(defs, { tag: 'rect', attributes: _extends({ fill: 'currentColor', 'clip-path': 'url(#' + clipId + ')', mask: 'url(#' + maskId + ')' }, ALL_SPACE) });

  return {
    children: children,
    attributes: attributes
  };
};

var makeIconStandard = function (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({ transform: transform, containerWidth: main.width, iconWidth: main.width });
    children.push({
      tag: 'g',
      attributes: _extends({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _extends({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _extends({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
};

var asIcon = function (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;

    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_extends({}, styles, {
      'transform-origin': offset.x + transform.x / 16 + 'em ' + (offset.y + transform.y / 16) + 'em'
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
};

var asSymbol = function (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;

  var id = symbol === true ? prefix + '-' + config$1.familyPrefix + '-' + iconName : symbol;

  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _extends({}, attributes, { id: id }),
      children: children
    }]
  }];
};

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === undefined ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = 'fa-w-' + Math.ceil(width / height * 16);
  var attrClass = [config$1.replacementClass, iconName ? config$1.familyPrefix + '-' + iconName : '', widthClass].concat(extra.classes).join(' ');

  var content = {
    children: [],
    attributes: _extends({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': '0 0 ' + width + ' ' + height
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({ tag: 'title', attributes: { id: content.attributes['aria-labelledby'] || 'title-' + nextUniqueId() }, children: [title] });

  var args = _extends({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}

function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === undefined ? false : _params$watchable2;


  var attributes = _extends({}, extra.attributes, title ? { 'title': title } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _extends({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({ transform: transform, startCentered: true, width: width, height: height });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];

  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [title] });
  }

  return val;
}

var noop$2 = function noop() {};
var p = config$1.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : { mark: noop$2, measure: noop$2 };
var preamble = 'FA "5.0.9"';

var begin = function begin(name) {
  p.mark(preamble + ' ' + name + ' begins');
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark(preamble + ' ' + name + ' ends');
  p.measure(preamble + ' ' + name, preamble + ' ' + name + ' begins', preamble + ' ' + name + ' ends');
};

var perf = { begin: begin, end: end };

'use strict';

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
var bindInternal4 = function bindInternal4 (func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

'use strict';



/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
var reduce = function fastReduceObject (subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, key, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

var styles$2 = namespace.styles;
var shims = namespace.shims;


var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};

var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles$2, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    acc[icon[3]] = iconName;

    return acc;
  });

  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];

    acc[iconName] = iconName;

    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });

    return acc;
  });

  var hasRegular = 'far' in styles$2;

  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = { prefix: prefix, iconName: iconName };

    return acc;
  }, {});
};

build();

function byUnicode(prefix, unicode) {
  return _byUnicode[prefix][unicode];
}

function byLigature(prefix, ligature) {
  return _byLigature[prefix][ligature];
}

function byOldName(name) {
  return _byOldName[name] || { prefix: null, iconName: null };
}

var styles$1 = namespace.styles;


var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return { prefix: null, iconName: null, rest: [] };
};

function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config$1.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};

      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config$1.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;


  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return '<' + tag + ' ' + joinAttributes(attributes) + '>' + children.map(toHtml).join('') + '</' + tag + '>';
  }
}

var noop$1 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;

  return typeof i2svg === 'string';
}

function getMutator() {
  if (config$1.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config$1.autoReplaceSvg];

  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config$1.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? '<!-- ' + node.outerHTML + ' -->' : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];

    // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement
    if (~classArray(node).indexOf(config$1.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp(config$1.familyPrefix + '-.*');

    delete abstract[0].attributes.style;

    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config$1.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, { toNode: [], toSvg: [] });

    abstract[0].attributes.class = splitClasses.toSvg.join(' ');

    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$1;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = WINDOW.requestAnimationFrame || function (op) {
      return op();
    };

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');

      mutations.map(mutator);

      mark();

      callbackFunction();
    });
  }
}

var disabled = false;

function disableObservation(operation) {
  disabled = true;
  operation();
  disabled = false;
}

var mo = null;

function observe(options) {
  if (!MUTATION_OBSERVER) return;

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback;


  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;

    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config$1.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config$1.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });

  if (!IS_DOM) return;

  mo.observe(DOCUMENT.getElementsByTagName('body')[0], {
    childList: true, attributes: true, characterData: true, subtree: true
  });
}

function disconnect() {
  if (!mo) return;

  mo.disconnect();
}

var styleParser = function (node) {
  var style = node.getAttribute('style');

  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

var classParser = function (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';

  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;
        case 'shrink':
          acc.size = acc.size - rest;
          break;
        case 'left':
          acc.x = acc.x - rest;
          break;
        case 'right':
          acc.x = acc.x + rest;
          break;
        case 'up':
          acc.y = acc.y - rest;
          break;
        case 'down':
          acc.y = acc.y + rest;
          break;
        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};

var transformParser = function (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
};

var symbolParser = function (node) {
  var symbol = node.getAttribute('data-fa-symbol');

  return symbol === null ? false : symbol === '' ? true : symbol;
};

var attributesParser = function (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});

  var title = node.getAttribute('title');

  if (config$1.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
    } else {
      extraAttributes['aria-hidden'] = 'true';
    }
  }

  return extraAttributes;
};

var maskParser = function (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
};

function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);

  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}

MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = { fill: 'currentColor' };
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};
var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});
var DOT = {
  tag: 'circle',
  attributes: _extends({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, ANIMATION_BASE, { attributeName: 'r', values: '28;14;28;28;14;28;' }) }, { tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;1;1;0;1;' }) }]
};
var QUESTION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '1;0;0;0;0;1;' }) }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _extends({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{ tag: 'animate', attributes: _extends({}, OPACITY_ANIMATE, { values: '0;0;1;1;0;0;' }) }]
};

var missing = { tag: 'g', children: [RING, DOT, QUESTION, EXCLAMATION] };

var styles = namespace.styles;

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands)/;
var STYLE_TO_PREFIX = {
  'Solid': 'fas',
  'Regular': 'far',
  'Light': 'fal',
  'Brands': 'fab'
};

function findIcon(iconName, prefix) {
  var val = {
    found: false,
    width: 512,
    height: 512,
    icon: missing
  };

  if (iconName && prefix && styles[prefix] && styles[prefix][iconName]) {
    var icon = styles[prefix][iconName];
    var width = icon[0];
    var height = icon[1];
    var vectorData = icon.slice(4);

    val = {
      found: true,
      width: width,
      height: height,
      icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
    };
  } else if (iconName && prefix && !config$1.showMissingIcons) {
    throw new MissingIcon('Icon is missing for prefix ' + prefix + ' with icon name ' + iconName);
  }

  return val;
}

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;


  return [node, makeInlineSvgAbstract({
    icons: {
      main: findIcon(iconName, prefix),
      mask: findIcon(mask.iconName, mask.prefix)
    },
    prefix: prefix,
    iconName: iconName,
    transform: transform,
    symbol: symbol,
    mask: mask,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;


  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config$1.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return [node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })];
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function remove(node) {
  if (typeof node.remove === 'function') {
    node.remove();
  } else if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;

  var end = perf.begin('searchPseudoElements');

  disableObservation(function () {
    toArray(root.querySelectorAll('*')).forEach(function (node) {
      [':before', ':after'].forEach(function (pos) {
        var styles = WINDOW.getComputedStyle(node, pos);
        var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
        var children = toArray(node.children);
        var pseudoElement = children.filter(function (c) {
          return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === pos;
        })[0];

        if (pseudoElement) {
          if (pseudoElement.nextSibling && pseudoElement.nextSibling.textContent.indexOf(DATA_FA_PSEUDO_ELEMENT) > -1) {
            remove(pseudoElement.nextSibling);
          }
          remove(pseudoElement);
          pseudoElement = null;
        }

        if (fontFamily && !pseudoElement) {
          var content = styles.getPropertyValue('content');
          var i = DOCUMENT.createElement('i');
          i.setAttribute('class', '' + STYLE_TO_PREFIX[fontFamily[1]]);
          i.setAttribute(DATA_FA_PSEUDO_ELEMENT, pos);
          i.innerText = content.length === 3 ? content.substr(1, 1) : content;
          if (pos === ':before') {
            node.insertBefore(i, node.firstChild);
          } else {
            node.appendChild(i);
          }
        }
      });
    });
  });

  end();
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!IS_DOM) return;

  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove(HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix);
  };
  var prefixes = Object.keys(styles);
  var prefixesDomQuery = ['.' + LAYERS_TEXT_CLASSNAME + ':not([' + DATA_FA_I2SVG + '])'].concat(prefixes.map(function (p) {
    return '.' + p + ':not([' + DATA_FA_I2SVG + '])';
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = toArray(root.querySelectorAll(prefixesDomQuery));

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');

  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);

  mark();

  perform(mutations, function () {
    hclAdd('active');
    hclAdd('complete');
    hclRemove('pending');

    if (typeof callback === 'function') callback();
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var mutation = generateMutation(node);

  if (mutation) {
    perform([mutation], callback);
  }
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n";

var css = function () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config$1.familyPrefix;
  var rc = config$1.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
    var rPatt = new RegExp('\\.' + drc, 'g');

    s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
  }

  return s;
};

function define(prefix, icons) {
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    define('fa', icons);
  }
}

var Library = function () {
  function Library() {
    classCallCheck(this, Library);

    this.definitions = {};
  }

  createClass(Library, [{
    key: 'add',
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});

      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _extends({}, _this.definitions[key] || {}, additions[key]);
        define(key, additions[key]);
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: '_pullDefinitions',
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? { 0: definition } : definition;

      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;


        if (!additions[prefix]) additions[prefix] = {};

        additions[prefix][iconName] = icon;
      });

      return additions;
    }
  }]);
  return Library;
}();

function prepIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var vectorData = icon.slice(4);

  return {
    found: true,
    width: width,
    height: height,
    icon: { tag: 'path', attributes: { fill: 'currentColor', d: vectorData[0] } }
  };
}

var _cssInserted = false;

function ensureCss() {
  if (!config$1.autoAddCss) {
    return;
  }

  if (!_cssInserted) {
    insertCss(css());
  }

  _cssInserted = true;
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });

  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });

  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;

      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });

  return val;
}

function findIconDefinition(params) {
  var _params$prefix = params.prefix,
      prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
      iconName = params.iconName;


  if (!iconName) return;

  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});

    var mask = params.mask;


    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _extends({}, params, { mask: mask }));
  };
}

var library = new Library();

var noAuto = function noAuto() {
  auto(false);
  disconnect();
};

var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();

      var _params$node = params.node,
          node = _params$node === undefined ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === undefined ? function () {} : _params$callback;


      if (config$1.searchPseudoElements) {
        searchPseudoElements(node);
      }

      onTree(node, callback);
    }
  },

  css: css,

  insertCss: function insertCss$$1() {
    insertCss(css());
  }
};

var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};

var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === undefined ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === undefined ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === undefined ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === undefined ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === undefined ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === undefined ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === undefined ? {} : _params$styles;


  if (!iconDefinition) return;

  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;


  return apiObject(_extends({ type: 'icon' }, iconDefinition), function () {
    ensureCss();

    if (config$1.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = config$1.replacementClass + '-title-' + nextUniqueId();
      } else {
        attributes['aria-hidden'] = 'true';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: prepIcon(icon),
        mask: mask ? prepIcon(mask.icon) : { found: false, width: null, height: null, icon: {} }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _extends({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});

var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === undefined ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === undefined ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === undefined ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === undefined ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === undefined ? {} : _params$styles2;


  return apiObject({ type: 'text', content: content }, function () {
    ensureCss();

    return makeLayersTextAbstract({
      content: content,
      transform: _extends({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: [config$1.familyPrefix + '-layers-text'].concat(toConsumableArray(classes))
      }
    });
  });
};

var layer = function layer(assembler) {
  return apiObject({ type: 'layer' }, function () {
    ensureCss();

    var children = [];

    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });

    return [{
      tag: 'span',
      attributes: { class: config$1.familyPrefix + '-layers' },
      children: children
    }];
  });
};

var api$1 = {
  noAuto: noAuto,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  layer: layer
};

var autoReplace = function autoReplace() {
  if (IS_DOM && config$1.autoReplaceSvg) api$1.dom.i2svg({ node: DOCUMENT });
};

function bootstrap() {
  if (IS_BROWSER) {
    if (!WINDOW.FontAwesome) {
      WINDOW.FontAwesome = api$1;
    }

    domready(function () {
      if (Object.keys(namespace.styles).length > 0) {
        autoReplace();
      }

      if (config$1.observeMutations && typeof MutationObserver === 'function') {
        observe({
          treeCallback: onTree,
          nodeCallback: onNode,
          pseudoElementsCallback: searchPseudoElements
        });
      }
    });
  }

  namespace.hooks = _extends({}, namespace.hooks, {

    addPack: function addPack(prefix, icons) {
      namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, icons);

      build();
      autoReplace();
    },

    addShims: function addShims(shims) {
      var _namespace$shims;

      (_namespace$shims = namespace.shims).push.apply(_namespace$shims, toConsumableArray(shims));

      build();
      autoReplace();
    }
  });
}

Object.defineProperty(api$1, 'config', {
  get: function get() {
    return config$1;
  },

  set: function set(newConfig) {
    update(newConfig);
  }
});

if (IS_DOM) bunker(bootstrap);

var config = api$1.config;


/* harmony default export */ __webpack_exports__["default"] = (api$1);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDates = __webpack_require__(26);

var _moment = __webpack_require__(11);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateSingle = function (_React$Component) {
    _inherits(DateSingle, _React$Component);

    function DateSingle(props) {
        _classCallCheck(this, DateSingle);

        var _this = _possibleConstructorReturn(this, (DateSingle.__proto__ || Object.getPrototypeOf(DateSingle)).call(this, props));

        _this.state = {
            focusedInput: ''
        };
        return _this;
    }

    _createClass(DateSingle, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_reactDates.SingleDatePicker, {
                id: 'startDate',
                isOutsideRange: function isOutsideRange() {
                    return false;
                },
                date: this.props.startDate ? (0, _moment2.default)(this.props.startDate) : null,
                onDateChange: function onDateChange(date) {
                    return _this2.props.onDatesChange({ date: date, index: _this2.props.event });
                } // PropTypes.func.isRequired
                , focused: this.state.focused // PropTypes.bool
                , onFocusChange: function onFocusChange(_ref) {
                    var focused = _ref.focused;
                    return _this2.setState({ focused: focused });
                } // PropTypes.func.isRequired
            });
        }
    }]);

    return DateSingle;
}(_react2.default.Component);

exports.default = DateSingle;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _imageUpload = __webpack_require__(37);

var _imageUpload2 = _interopRequireDefault(_imageUpload);

var _ImagesActions = __webpack_require__(22);

var _ImagesActions2 = _interopRequireDefault(_ImagesActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thumbnail = function (_React$Component) {
    _inherits(Thumbnail, _React$Component);

    function Thumbnail(props) {
        _classCallCheck(this, Thumbnail);

        var _this = _possibleConstructorReturn(this, (Thumbnail.__proto__ || Object.getPrototypeOf(Thumbnail)).call(this, props));

        _this.state = {
            isUploading: false
        };

        _this.onImageDrop = _this.onImageDrop.bind(_this);

        return _this;
    }

    _createClass(Thumbnail, [{
        key: 'onImageDrop',
        value: function onImageDrop(accepted, rejected) {
            console.log(accepted, rejected);
            if (accepted.length) {
                this.setState({
                    uploadedFile: accepted[0],
                    isUploading: true
                });

                _ImagesActions2.default.handleThumbnailUpload(accepted[0], this.props.number);
            } else {
                console.log('Wrong file type!');
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var isUploaded = false;
            if (this.props.image) {
                isUploaded = this.props.image.length > 0;
            }

            var avatarRender = isUploaded || this.state.isUploading ? _react2.default.createElement(
                'div',
                { className: isUploaded ? 'avatar loaded' : 'avatar loading' },
                _react2.default.createElement('img', { src: isUploaded ? "http://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg" : this.state.uploadedFile.preview })
            ) : _react2.default.createElement(_imageUpload2.default, { onImageDrop: this.onImageDrop });

            return _react2.default.createElement(
                'div',
                { className: 'formSection' },
                avatarRender
            );
        }
    }]);

    return Thumbnail;
}(_react2.default.Component);

exports.default = Thumbnail;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = __webpack_require__(84);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageUpload = function (_React$Component) {
    _inherits(ImageUpload, _React$Component);

    function ImageUpload(props) {
        _classCallCheck(this, ImageUpload);

        var _this = _possibleConstructorReturn(this, (ImageUpload.__proto__ || Object.getPrototypeOf(ImageUpload)).call(this, props));

        _this.state = {
            dropzoneActive: false
        };
        return _this;
    }

    _createClass(ImageUpload, [{
        key: 'onAvatarClick',
        value: function onAvatarClick() {
            console.log('clicked');
        }
    }, {
        key: 'onDragEnter',
        value: function onDragEnter() {
            this.setState({
                dropzoneActive: true
            });
        }
    }, {
        key: 'onDragLeave',
        value: function onDragLeave() {
            this.setState({
                dropzoneActive: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var inlineStyles = {
                width: '200px',
                height: '200px',
                border: '2px dotted red',
                borderRadius: '50%'
            };
            return _react2.default.createElement(
                _reactDropzone2.default,
                {
                    activeClassName: 'formSection',
                    className: 'imageDrop',
                    multiple: false,
                    accept: 'image/*',
                    onDrop: function onDrop(accepted, rejected) {
                        return _this2.props.onImageDrop(accepted, rejected);
                    },
                    onDragEnter: this.onDragEnter.bind(this),
                    onDragLeave: this.onDragLeave.bind(this),
                    onClick: this.onAvatarClick },
                this.state.dropzoneActive && _react2.default.createElement(
                    'div',
                    { className: 'dragged' },
                    'Drop files...'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Drop an image or click to select a file to upload.'
                )
            );
        }
    }]);

    return ImageUpload;
}(_react2.default.Component);

exports.default = ImageUpload;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoodNav = function (_React$Component) {
  _inherits(HoodNav, _React$Component);

  function HoodNav() {
    _classCallCheck(this, HoodNav);

    return _possibleConstructorReturn(this, (HoodNav.__proto__ || Object.getPrototypeOf(HoodNav)).apply(this, arguments));
  }

  _createClass(HoodNav, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "ul",
        { className: "hoodNav" },
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#10" },
            "Tribeca"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#20" },
            "Lower East Side"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#30" },
            "Soho & Noho & East Village"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#60" },
            "West Village & Chelsea"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#170" },
            "Midtown & Uptown & Harlem"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#220" },
            "Brooklyn"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#270" },
            "Queens & Bronx & Staten Island"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#300" },
            "Upstate New York"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#320" },
            "New Jersey"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#330" },
            "Philadelphia"
          )
        )
      );
    }
  }]);

  return HoodNav;
}(_react2.default.Component);

exports.default = HoodNav;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(8);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _listing = __webpack_require__(5);

var _listing2 = _interopRequireDefault(_listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var ListingsPerNeighbor = function (_React$Component) {
    _inherits(ListingsPerNeighbor, _React$Component);

    function ListingsPerNeighbor(props) {
        _classCallCheck(this, ListingsPerNeighbor);

        return _possibleConstructorReturn(this, (ListingsPerNeighbor.__proto__ || Object.getPrototypeOf(ListingsPerNeighbor)).call(this, props));
    }

    _createClass(ListingsPerNeighbor, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var secondaryNH = '';
            var newSecondaryNH = '';
            var city = '';
            var newCity = '';
            var renderExport = [];
            var neighborExport = [];
            var title = '';
            var cityID = '0';
            var cityChange = false;
            var num = this.props.listings.length - 1;

            var thelistRender = function thelistRender(listings) {
                return listings.map(function (listing, index) {

                    var result = _react2.default.createElement(_listing2.default, { listing: listing, user: _this2.props.user, dateView: 'current' });

                    newSecondaryNH = listing.venue.neighborhood;
                    newCity = _displayActions2.default.displayCity(listing.venue.neighborhood);

                    //Define the new city ID
                    if (cityChange) {
                        cityID = _displayActions2.default.displayCityNum(secondaryNH);
                        cityChange = false;
                    }

                    //If the new neighborhood is different
                    if (newSecondaryNH !== secondaryNH) {

                        //Add the result to the next export and reset the render
                        var contentRender = _react2.default.createElement(
                            'div',
                            { className: 'neighborhood' },
                            title,
                            renderExport
                        );
                        renderExport = [];

                        // Update neighborhood
                        secondaryNH = newSecondaryNH;
                        newSecondaryNH = _displayActions2.default.displayNeighborhood(secondaryNH);
                        title = _react2.default.createElement(
                            'h2',
                            null,
                            newSecondaryNH
                        );

                        //Add listing to next batch
                        renderExport.push(result);

                        //Add last neighborhood to the current City
                        neighborExport.push(contentRender);

                        if (newCity !== city) {

                            city = newCity;
                            cityChange = true;

                            // Create the last city
                            var cityRender = neighborExport.length > 0 && _react2.default.createElement(
                                'div',
                                { key: index, id: cityID, className: 'city' },
                                neighborExport
                            );
                            neighborExport = [];

                            if (num == index) {

                                contentRender = _react2.default.createElement(
                                    'div',
                                    { className: 'neighborhood' },
                                    title,
                                    renderExport
                                );

                                //Add last neighborhood to the current City
                                neighborExport = _react2.default.createElement(
                                    'div',
                                    { key: index + 1, id: cityID, className: 'city' },
                                    contentRender
                                );

                                cityRender = [cityRender];
                                cityRender.push(neighborExport);

                                return cityRender;
                            }

                            // Export the last city
                            return cityRender;
                        }
                    } else {
                        renderExport.push(result);

                        if (num == index) {

                            var contentRender = _react2.default.createElement(
                                'div',
                                { className: 'neighborhood' },
                                title,
                                renderExport
                            );

                            //Add last neighborhood to the current City
                            neighborExport.push(contentRender);

                            var cityRender = neighborExport.length > 0 && _react2.default.createElement(
                                'div',
                                { key: index, id: cityID, className: 'city' },
                                neighborExport
                            );
                            return cityRender;
                        }
                    }
                    return true;
                });
            };

            return _react2.default.createElement(
                'div',
                null,
                thelistRender(this.props.listings)
            );
        }
    }]);

    return ListingsPerNeighbor;
}(_react2.default.Component);

exports.default = ListingsPerNeighbor;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _reactIntl = __webpack_require__(12);

var _imageBlock = __webpack_require__(27);

var _imageBlock2 = _interopRequireDefault(_imageBlock);

var _jquery = __webpack_require__(92);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var FeatureBlock = function (_React$Component) {
    _inherits(FeatureBlock, _React$Component);

    function FeatureBlock(props) {
        _classCallCheck(this, FeatureBlock);

        var _this = _possibleConstructorReturn(this, (FeatureBlock.__proto__ || Object.getPrototypeOf(FeatureBlock)).call(this, props));

        _this.state = {
            inList: false

            // Function binding
        };_this.addToList = _this.addToList.bind(_this);
        _this.componentWillMount = _this.componentWillMount.bind(_this);
        return _this;
    }

    _createClass(FeatureBlock, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var self = this;
            if (this.props.feature.list) {
                this.props.user.mylist.forEach(function (listing) {
                    if (listing._id == self.props.feature.list._id) {
                        self.setState({
                            inList: true
                        });
                    }
                });
            }
        }

        //Function to add a listing to the personal list

    }, {
        key: 'addToList',
        value: function addToList(e, listing) {

            //Add or remove the listing to the user's list
            _AuthActions2.default.addToUserList(listing);
            //Toggle the className
            if (this.state.inList == false) {
                this.setState({ inList: true });
            } else {
                this.setState({ inList: false });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var feature = this.props.feature;
            var venue = this.props.feature.venue ? this.props.feature.venue : {};
            var listing = this.props.feature.list ? this.props.feature.list : {};

            var start = listing.start ? _react2.default.createElement(
                _reactIntl.IntlProvider,
                { locale: 'en' },
                _react2.default.createElement(_reactIntl.FormattedDate, { value: listing.start, day: 'numeric', month: 'short' })
            ) : '';
            var end = listing.end ? _react2.default.createElement(
                _reactIntl.IntlProvider,
                { locale: 'en' },
                _react2.default.createElement(_reactIntl.FormattedDate, { value: listing.end, day: 'numeric', month: 'short' })
            ) : '';

            return _react2.default.createElement(
                'div',
                { className: 'feature-wrap' },
                _react2.default.createElement(
                    'h4',
                    null,
                    'Featured item'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'image' },
                    listing.image ? _react2.default.createElement(_imageBlock2.default, { image: listing.image, classes: 'feature' }) : ''
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        listing.name,
                        ' at ',
                        _react2.default.createElement(
                            'a',
                            { className: 'venueName', href: "/venue/" + venue.slug },
                            venue.name
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        feature.text
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'dates' },
                        start,
                        end ? ' to ' : '',
                        end
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'address' },
                        venue.address1,
                        ' ',
                        venue.address2,
                        ', ',
                        venue.city
                    ),
                    this.props.user._id ? this.state.inList ? _react2.default.createElement(
                        'a',
                        { className: 'button inList', onClick: function onClick(e) {
                                return _this2.addToList(e, listing);
                            } },
                        'Remove from your list'
                    ) : _react2.default.createElement(
                        'a',
                        { className: 'button', onClick: function onClick(e) {
                                return _this2.addToList(e, listing);
                            } },
                        'Add to your list'
                    ) : ''
                )
            );
        }
    }]);

    return FeatureBlock;
}(_react2.default.Component);

exports.default = FeatureBlock;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("d3-ease");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _googleMapReact = __webpack_require__(101);

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _singleMarker = __webpack_require__(102);

var _singleMarker2 = _interopRequireDefault(_singleMarker);

var _reactMapGl = __webpack_require__(14);

var _reactMapGl2 = _interopRequireDefault(_reactMapGl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENT


var MapBlock = function (_React$Component) {
    _inherits(MapBlock, _React$Component);

    function MapBlock(props) {
        _classCallCheck(this, MapBlock);

        var _this = _possibleConstructorReturn(this, (MapBlock.__proto__ || Object.getPrototypeOf(MapBlock)).call(this, props));

        _this.state = {
            viewport: {
                zoom: 12,
                mapboxApiAccessToken: process.env.MapboxAccessToken,
                bearing: 0,
                pitch: 0,
                width: 500,
                height: 500
            }
        };

        _this.updateViewport = _this.updateViewport.bind(_this);
        _this.componentDidMount = _this.componentDidMount.bind(_this);
        return _this;
    }

    _createClass(MapBlock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Create variable to change property
            var newViewport = this.state.viewport;
            newViewport.width = _reactDom2.default.findDOMNode(this).offsetWidth;
            //Update state
            this.setState({
                viewport: newViewport
            });
        }
    }, {
        key: 'updateViewport',
        value: function updateViewport(v) {
            this.setState({
                viewport: v
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'mapWrap' },
                this.props.coordinates && _react2.default.createElement(
                    _reactMapGl2.default,
                    _extends({}, this.state.viewport, {
                        latitude: this.props.coordinates.lat ? this.props.coordinates.lat : 40.7263098,
                        longitude: this.props.coordinates.long ? this.props.coordinates.long : -73.9940454,
                        onViewportChange: this.updateViewport
                    }),
                    this.props.coordinates.lat && _react2.default.createElement(
                        _reactMapGl.Marker,
                        {
                            latitude: this.props.coordinates.lat,
                            longitude: this.props.coordinates.long,
                            anchor: 'bottom'
                        },
                        _react2.default.createElement(_singleMarker2.default, null)
                    )
                )
            );
        }
    }]);

    return MapBlock;
}(_react2.default.Component);

exports.default = MapBlock;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("react-reorder");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MarkerDisplay = __webpack_require__(113);

var _MarkerDisplay2 = _interopRequireDefault(_MarkerDisplay);

var _reactMapGl = __webpack_require__(14);

var _reactMapGl2 = _interopRequireDefault(_reactMapGl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENT


var num = 0;

var MyMap = function (_React$Component) {
    _inherits(MyMap, _React$Component);

    function MyMap(props) {
        _classCallCheck(this, MyMap);

        var _this = _possibleConstructorReturn(this, (MyMap.__proto__ || Object.getPrototypeOf(MyMap)).call(this, props));

        _this.mapMarkers = _this.mapMarkers.bind(_this);
        return _this;
    }

    _createClass(MyMap, [{
        key: 'mapMarkers',
        value: function mapMarkers(allListings) {
            var _this2 = this;

            if (allListings) {
                return allListings.map(function (listing, index, done) {

                    num = num + 1;
                    var thisNum = num;

                    if (listing.venue) {
                        var newMarker = _react2.default.createElement(
                            _reactMapGl.Marker,
                            { key: listing._id,
                                latitude: listing.venue.coordinates.lat,
                                longitude: listing.venue.coordinates.long,
                                anchor: 'bottom',
                                onMouseEnter: _this2.props.onHover.bind(_this2, listing),
                                onMouseLeave: _this2.props.onLeave.bind(_this2, listing),
                                className: listing._id == _this2.props.listingHover ? 'active' : ''
                            },
                            _react2.default.createElement(_MarkerDisplay2.default, {
                                className: listing._id,
                                listing: listing,
                                num: index + 1 })
                        );

                        return newMarker;
                    }
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                viewport = _props.viewport,
                updateViewport = _props.updateViewport;

            return _react2.default.createElement(
                'div',
                { className: 'mapWrap', ref: 'theMap' },
                _react2.default.createElement(
                    _reactMapGl2.default,
                    _extends({}, viewport, {
                        onViewportChange: updateViewport
                    }),
                    this.mapMarkers(this.props.markers)
                )
            );
        }
    }]);

    return MyMap;
}(_react2.default.Component);

exports.default = MyMap;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var facebookShare = function (_React$Component) {
    _inherits(facebookShare, _React$Component);

    function facebookShare() {
        _classCallCheck(this, facebookShare);

        return _possibleConstructorReturn(this, (facebookShare.__proto__ || Object.getPrototypeOf(facebookShare)).apply(this, arguments));
    }

    _createClass(facebookShare, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement("div", { className: "fb-share-button",
                "data-href": this.props.url,
                "data-layout": "button_count",
                "data-size": "large" });
        }
    }]);

    return facebookShare;
}(_react2.default.Component);

exports.default = facebookShare;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NeighborhoodSelect = function (_React$Component) {
    _inherits(NeighborhoodSelect, _React$Component);

    function NeighborhoodSelect(props) {
        _classCallCheck(this, NeighborhoodSelect);

        return _possibleConstructorReturn(this, (NeighborhoodSelect.__proto__ || Object.getPrototypeOf(NeighborhoodSelect)).call(this, props));
    }

    _createClass(NeighborhoodSelect, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactstrap.Input,
                { type: 'select', name: 'neighborhood',
                    value: this.props.selected ? this.props.selected : "no-value",
                    onChange: this.props.onChange },
                _react2.default.createElement(
                    'option',
                    { value: 'no-value', disabled: true },
                    'Neighborhood'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '10' },
                    'Tribeca and below'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '20' },
                    'Lower East Side'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '30' },
                    'Soho'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '40' },
                    'Noho/East Village'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '60' },
                    'West Village'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '70' },
                    '19th St and below'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '80' },
                    '20th St and nearby'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '90' },
                    '21st St and nearby'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '100' },
                    '22nd St and nearby'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '110' },
                    '23rd St and nearby'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '120' },
                    '24th St and nearby'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '130' },
                    '25th St and nearby'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '140' },
                    '26th St and nearby'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '150' },
                    '27th St and above'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '160' },
                    'Flatiron/Gramercy Park'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '170' },
                    'Midtown'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '180' },
                    '57th Street and nearby'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '190' },
                    'Upper East Side'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '200' },
                    'Upper West Side'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '210' },
                    'Harlem'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '220' },
                    'Brooklyn South'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '230' },
                    'Dumbo/Downtown'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '235' },
                    'Fort Greene'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '240' },
                    'Bushwick/Bed-stuy'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '250' },
                    'Williamsburg / Greenpoint'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '260' },
                    'Brooklyn (Other)'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '270' },
                    'Ridgewood'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '272' },
                    'Long Island City/Astoria'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '274' },
                    'Queens (Other)'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '280' },
                    'The Bronx'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '290' },
                    'Staten Island'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '300' },
                    'Long Island'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '310' },
                    'Upstate New York'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '320' },
                    'New Jersey'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '330' },
                    'Philadelphia'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '340' },
                    'Old City'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '350' },
                    'West Philadelphia'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '360' },
                    'North Philadelphia'
                ),
                _react2.default.createElement(
                    'option',
                    { value: '370' },
                    'Other'
                )
            );
        }
    }]);

    return NeighborhoodSelect;
}(_react2.default.Component);

exports.default = NeighborhoodSelect;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorPage = function (_React$Component) {
    _inherits(ErrorPage, _React$Component);

    function ErrorPage(props) {
        _classCallCheck(this, ErrorPage);

        return _possibleConstructorReturn(this, (ErrorPage.__proto__ || Object.getPrototypeOf(ErrorPage)).call(this, props));
    }

    _createClass(ErrorPage, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "404" },
                "Error 404!"
            );
        }
    }]);

    return ErrorPage;
}(_react2.default.Component);

exports.default = ErrorPage;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var express = __webpack_require__(9);
var path = __webpack_require__(51);
var favicon = __webpack_require__(52);
var logger = __webpack_require__(53);
var cookieParser = __webpack_require__(54);
var bodyParser = __webpack_require__(55);
var http = __webpack_require__(56);
var debug = __webpack_require__(57)('artcritical-list:server');

var expressValidator = __webpack_require__(58);

//Authentification
var passport = __webpack_require__(21);
var flash = __webpack_require__(59);
var session = __webpack_require__(60);
var bcrypt = __webpack_require__(29); // encripts password

// Get the User model
__webpack_require__(61)(passport);

var app = express();

// MongoDB
var mongoose = __webpack_require__(7);
var url = process.env.MONGOLAB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(url, { useMongoClient: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('We are in!');
});

// Import the Mongoose models
var List = __webpack_require__(65);
var Archive = __webpack_require__(66);
var Venue = __webpack_require__(32);
var User = __webpack_require__(31);
var Feature = __webpack_require__(67);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

//Create sessions
var maxAge = 7 * 24 * 3600 * 1000;
app.use(session({
  secret: 'woot',
  cookie: { maxAge: maxAge },
  resave: false,
  saveUninitialized: true
}));

//start authentitification
app.use(passport.initialize());
app.use(passport.session());

//Setup flash messages
app.use(flash());
app.use(function (req, res, next) {
  res.locals.message = req.flash();
  next();
});

// Make our db accessible to our router
app.use(function (req, res, next) {
  req.list = List;
  req.archive = Archive;
  req.venue = Venue;
  req.userlist = User;
  req.feature = Feature;
  next();
});

var index = __webpack_require__(68);
var venues = __webpack_require__(140);
var listings = __webpack_require__(141);
var auth = __webpack_require__(142);

app.use('/venues', venues);
app.use('/list', listings);
app.use('/auth', auth);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
/* WEBPACK VAR INJECTION */}.call(exports, "src"))

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// config/passport.js

// load all the things we need
var LocalStrategy = __webpack_require__(63).Strategy;
var FacebookStrategy = __webpack_require__(64).Strategy;


// load up the user model
var User = __webpack_require__(31);
var Venue = __webpack_require__(32);

// expose this function to our app using module.exports
module.exports = function (passport) {

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id).populate('mylist').exec(function (err, user) {
      //Populate the mylist venues
      User.populate(user, {
        path: 'mylist.venue',
        model: Venue
      }, function (err, fullUser) {

        //found user
        return done(null, fullUser);
      });
    });
  });

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-signup', new LocalStrategy({
    passReqToCallback: true // allows us to pass back the entire request to the callback
  }, function (req, username, password, done) {
    console.log('Passport Signup Initialization');
    // asynchronous
    // User.findOne wont fire unless data is sent back
    process.nextTick(function () {

      // find a user whose email is the same as the forms email
      // we are checking to see if the user trying to login already exists
      User.findOne({ 'local.username': username }).exec(function (err, user) {
        // if there are any errors, return the error
        if (err) return done(err);
        console.log('Error: ' + err);

        // check to see if theres already a user with that email
        if (user) {
          console.log('That email is already taken.');
          return done(null, false, { message: 'That email is already taken.' });
        } else {
          var checkSlug = function checkSlug() {
            console.log('Start checking');
            User.findOne({ 'slug': newUser.slug }).exec(function (err, user) {
              if (user) {
                console.log('Slug already exist');
                count = count + 1;
                newUser.slug = ogSlug + count;
                console.log(newUser.slug);
                checkSlug();
              } else {
                console.log('Slug is unique');
                // save the user
                newUser.save(function (err) {
                  if (err) throw err;
                  return done(null, newUser);
                });
              }
            });
          };

          console.log("New User..");
          // create the user
          var newUser = new User();

          // set the user's local credentials
          newUser.firstname = req.body.firstname;
          newUser.lastname = req.body.lastname;
          newUser.slug = req.body.firstname.replace(/\s+/g, '').toLowerCase() + req.body.lastname.replace(/\s+/g, '').toLowerCase();
          newUser.local.username = req.body.username;
          newUser.userAccess = 1;
          newUser.local.password = newUser.generateHash(password);
          newUser.facebook = {};

          //Check if slug already exist
          var count = 0;
          var ogSlug = newUser.slug;
          ;
          checkSlug();
        }
      });
    });
  }));

  // Generates hash using bCrypt
  var createHash = function createHash(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  };

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-login', new LocalStrategy(function (username, password, done) {
    User.findOne({ 'local.username': username }).populate('mylist').exec(function (err, user) {
      if (err) {
        console.log('Incorrect Something');
        return done(err);
      }
      if (!user) {
        console.log('Incorrect Username');
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        console.log('Incorrect Password');
        return done(null, false, { message: 'Incorrect password.' });
      }
      //Define today's date
      var today = new Date(),
          newList = [];
      today.setHours(0, 0, 0, 0);

      //Check that all listings are present
      user.mylist.forEach(function (listing) {
        if (listing.end >= today) {
          newList.push(listing);
        }
      });

      //Replace the list with only current ones
      user.mylist = newList;

      //Populate the mylist venues
      User.populate(user, {
        path: 'mylist.venue',
        model: Venue
      }, function (err, fullUser) {
        //found user
        return done(null, fullUser);
      });
    });
  }));

  // =========================================================================
  // FACEBOOK LOGIN =============================================================
  // =========================================================================

  passport.use(new FacebookStrategy({
    clientID: "1154923567943109",
    clientSecret: "9ab1f837eabcc53aafadc9657eb65f19",
    callbackURL: process.env.BASE_URI + "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'email']
  }, function (accessToken, refreshToken, profile, done) {

    //check user table for anyone with a facebook ID of profile.id
    User.findOne({ 'facebook.id': profile.id }).populate('mylist').exec(function (err, user) {
      if (err) {
        console.log("Error", err);
        return done(err);
      }
      //No user was found
      if (!user) {

        console.log("New user", user);
        // create the user
        var newUser = new User();

        // set the user's local credentials
        newUser.firstname = profile.givenName;
        newUser.lastname = profile.familyName;
        newUser.slug = profile.displayName.replace(/\s+/g, '').toLowerCase();
        newUser.userAccess = 1;
        newUser.facebook.id = profile.id;
        newUser.facebook.token = accessToken;
        newUser.local.username = '';
        newUser.local.password = '';

        //Check if slug already exist
        var count = 0;
        var ogSlug = newUser.slug;
        var checkSlug = function checkSlug() {
          User.findOne({ 'slug': newUser.slug }).exec(function (err, user) {
            if (user) {
              count = count + 1;
              newUser.slug = ogSlug + count;
              checkSlug();
            } else {
              // save the user
              newUser.save(function (err) {
                if (err) console.log(err);
                console.log(newUser);
                _AuthActions2.default.facebookLogin(newUser);
                return done(err, newUser);
              });
            }
          });
        };
        checkSlug();
      } else {

        //Populate the mylist venues
        User.populate(user, {
          path: 'mylist.venue',
          model: Venue
        }, function (err, fullUser) {

          //found user
          _AuthActions2.default.facebookLogin(fullUser);
          return done(err, fullUser);
        });
      }
    });
  }));
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("alt");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

// Create the Listings table ==================================

var eventSchema = new Schema({
    name: String,
    type: String,
    date: { type: Date },
    description: String
});

var listingSchema = mongoose.Schema({
    name: String,
    start: Date,
    end: Date,
    description: String,
    venue: {
        type: String,
        ref: 'Venue'
    },
    event: Boolean,
    image: String,
    thumb: String,
    popularity: Number,
    neighborhood: Number,
    created_at: Date,
    updated_at: Date,
    updated_by: {
        type: String,
        ref: 'User'
    },
    events: [eventSchema]
});

//compile the model
module.exports = mongoose.model('List', listingSchema);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

// Create the Archive table ==================================

//This is where we'll store the past listings

var eventSchema = new Schema({
    name: String,
    type: String,
    date: { type: Date },
    description: String
});

var archiveSchema = mongoose.Schema({
    name: String,
    start: Date,
    end: Date,
    description: String,
    venue: {
        type: String,
        ref: 'Venue'
    },
    event: Boolean,
    image: String,
    popularity: Number,
    events: [eventSchema]
});

//compile the model

module.exports = mongoose.model('Archive', archiveSchema);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7);

// Create the Listings table ==================================

var featureSchema = mongoose.Schema({
    date: Date,
    text: String,
    list: {
        ref: 'List',
        type: String
    },
    venue: {
        ref: 'Venue',
        type: String
    }
});

//compile the model

module.exports = mongoose.model('Feature', featureSchema);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(69);

var _reactRouter = __webpack_require__(3);

var _routes = __webpack_require__(70);

var _routes2 = _interopRequireDefault(_routes);

var _ErrorPage = __webpack_require__(49);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(9);
var router = express.Router();
var JSX = __webpack_require__(138).install();
var passport = __webpack_require__(21);
// we'll use this to render our app to an html string

// and these to match the url to routes and then render

var history = __webpack_require__(139);
var historyObj = history.createMemoryHistory();

// Check if user is connected
function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next(null);
  }
  res.redirect('/');
}

router.get('*', function (req, res) {
  var location = historyObj.createLocation(req.path);
  if (req.user) {}
  (0, _reactRouter.match)({
    routes: _routes2.default,
    location: location
  }, function (err, redirectLocation, renderProps) {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (err) {
      console.log(err);
      next(err);
      // res.send(500, error.message);
    } else if (renderProps === null) {
      res.status(404).send('Not found');
    } else {
      var markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
      res.render('index', { markup: markup, user: req.user });
    }
  });
});

module.exports = router;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _layout = __webpack_require__(71);

var _layout2 = _interopRequireDefault(_layout);

var _CurrentPage = __webpack_require__(88);

var _CurrentPage2 = _interopRequireDefault(_CurrentPage);

var _FuturePage = __webpack_require__(89);

var _FuturePage2 = _interopRequireDefault(_FuturePage);

var _GlancePage = __webpack_require__(90);

var _GlancePage2 = _interopRequireDefault(_GlancePage);

var _CurrentMap = __webpack_require__(93);

var _CurrentMap2 = _interopRequireDefault(_CurrentMap);

var _EventsPage = __webpack_require__(98);

var _EventsPage2 = _interopRequireDefault(_EventsPage);

var _VenuePage = __webpack_require__(100);

var _VenuePage2 = _interopRequireDefault(_VenuePage);

var _SignUpPage = __webpack_require__(105);

var _SignUpPage2 = _interopRequireDefault(_SignUpPage);

var _LogInPage = __webpack_require__(107);

var _LogInPage2 = _interopRequireDefault(_LogInPage);

var _myListPage = __webpack_require__(110);

var _myListPage2 = _interopRequireDefault(_myListPage);

var _myListPublicPage = __webpack_require__(114);

var _myListPublicPage2 = _interopRequireDefault(_myListPublicPage);

var _AuthSuccess = __webpack_require__(117);

var _AuthSuccess2 = _interopRequireDefault(_AuthSuccess);

var _AdminPage = __webpack_require__(118);

var _AdminPage2 = _interopRequireDefault(_AdminPage);

var _NewListing = __webpack_require__(120);

var _NewListing2 = _interopRequireDefault(_NewListing);

var _EditListing = __webpack_require__(121);

var _EditListing2 = _interopRequireDefault(_EditListing);

var _EditVenue = __webpack_require__(122);

var _EditVenue2 = _interopRequireDefault(_EditVenue);

var _featuredPage = __webpack_require__(125);

var _featuredPage2 = _interopRequireDefault(_featuredPage);

var _VenuesPage = __webpack_require__(128);

var _VenuesPage2 = _interopRequireDefault(_VenuesPage);

var _UsersPage = __webpack_require__(130);

var _UsersPage2 = _interopRequireDefault(_UsersPage);

var _ReviewPage = __webpack_require__(134);

var _ReviewPage2 = _interopRequireDefault(_ReviewPage);

var _Account = __webpack_require__(135);

var _Account2 = _interopRequireDefault(_Account);

var _ErrorPage = __webpack_require__(49);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Admin Components
var routes = _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _layout2.default, history: _reactRouter.browserHistory },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _GlancePage2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'current', component: _CurrentPage2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'future', component: _FuturePage2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'events', component: _EventsPage2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'map', component: _CurrentMap2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'signup', component: _SignUpPage2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'mylist', component: _myListPage2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'mylist/:slug', component: _myListPublicPage2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _LogInPage2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'venue/:slug', component: _VenuePage2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'account', component: _Account2.default }),
      _react2.default.createElement(
            _reactRouter.Route,
            { path: 'admin', component: _AdminPage2.default },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: _EditListing2.default }),
            '//',
            _react2.default.createElement(_reactRouter.Route, { path: 'listings', component: _EditListing2.default }),
            '//',
            _react2.default.createElement(_reactRouter.Route, { path: 'newlisting', component: _NewListing2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'venues', component: _EditVenue2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'featured', component: _featuredPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'venuesadmin', component: _VenuesPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'users', component: _UsersPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'review', component: _ReviewPage2.default })
      ),
      _react2.default.createElement(_reactRouter.Route, { path: 'auth/facebook/success', component: _AuthSuccess2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '*', component: _ErrorPage2.default })
);
// Error Components

//Signin Components
exports.default = routes;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ListStore = __webpack_require__(17);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactRouter = __webpack_require__(3);

var _sizeSelector = __webpack_require__(18);

var _sizeSelector2 = _interopRequireDefault(_sizeSelector);

var _fontawesome = __webpack_require__(34);

var _fontawesome2 = _interopRequireDefault(_fontawesome);

var _reactFontawesome = __webpack_require__(23);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _faPlusCircle = __webpack_require__(74);

var _faPlusCircle2 = _interopRequireDefault(_faPlusCircle);

var _faMinusCircle = __webpack_require__(75);

var _faMinusCircle2 = _interopRequireDefault(_faMinusCircle);

var _faGlassMartini = __webpack_require__(76);

var _faGlassMartini2 = _interopRequireDefault(_faGlassMartini);

var _faTimes = __webpack_require__(77);

var _faTimes2 = _interopRequireDefault(_faTimes);

var _faPlus = __webpack_require__(78);

var _faPlus2 = _interopRequireDefault(_faPlus);

var _faMinus = __webpack_require__(79);

var _faMinus2 = _interopRequireDefault(_faMinus);

var _faStar = __webpack_require__(80);

var _faStar2 = _interopRequireDefault(_faStar);

var _reactOffcanvas = __webpack_require__(81);

var _ListingForm = __webpack_require__(24);

var _ListingForm2 = _interopRequireDefault(_ListingForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Components


//FontAwesome


_fontawesome2.default.library.add(_faPlusCircle2.default, _faPlusCircle2.default, _faPlus2.default, _faMinus2.default, _faGlassMartini2.default, _faStar2.default, _faTimes2.default);

//Sidebar

var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout(props) {
        _classCallCheck(this, Layout);

        var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

        _this.state = _ListStore2.default.getState();

        _this.onChange = _this.onChange.bind(_this);
        _this.toggleMenu = _this.toggleMenu.bind(_this);
        return _this;
    }

    _createClass(Layout, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // Before the component mounts, check for an existing user session
            _AuthActions2.default.checkSession();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ListStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'toggleMenu',
        value: function toggleMenu() {
            _ListActions2.default.toggleSideBar();
        }
    }, {
        key: 'render',
        value: function render() {
            var user = this.state.user;

            var name = user.name;
            var mylistNum = user.mylist.length;
            var connectedClass = user.isLoggedIn && ' connected';
            var currentLocation = this.props.location.pathname.slice(1).replace("/", "-");

            var renderLogin = function renderLogin() {
                return _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/login', activeClassName: 'active' },
                    'Login'
                );
            };
            var renderGreeting = function renderGreeting(name) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/account', activeClassName: 'active' },
                        'Account'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: _AuthActions2.default.attemptLogOut },
                        'Log Out'
                    )
                );
            };
            return _react2.default.createElement(
                'div',
                { className: currentLocation + connectedClass + " app-container" },
                _react2.default.createElement(
                    'div',
                    { className: 'hamburger', onClick: this.toggleMenu },
                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'glass-martini'] })
                ),
                _react2.default.createElement(
                    'header',
                    { className: "mainHeader" + (this.state.menuActive ? ' active' : '') },
                    _react2.default.createElement(
                        'nav',
                        null,
                        _react2.default.createElement(
                            _reactRouter.IndexLink,
                            { to: '/', activeClassName: 'active' },
                            'Week at a Glance'
                        ),
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/current', activeClassName: 'active' },
                            'Current'
                        ),
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/events', activeClassName: 'active' },
                            'Events'
                        ),
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/map', activeClassName: 'active' },
                            'Map'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'accountOptions' },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/mylist', activeClassName: 'active' },
                                'My List ',
                                mylistNum > 0 && '(' + mylistNum + ')'
                            ),
                            user.isLoggedIn && _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/account', activeClassName: 'active' },
                                'Account'
                            ),
                            user.isLoggedIn && _react2.default.createElement(
                                'a',
                                { onClick: _AuthActions2.default.attemptLogOut },
                                'Log Out'
                            )
                        ),
                        user.isLoggedIn && _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/admin', activeClassName: 'active' },
                            'Admin'
                        )
                    ),
                    _react2.default.createElement(_sizeSelector2.default, { view: this.state.view })
                ),
                _react2.default.createElement(
                    _reactOffcanvas.OffCanvas,
                    { width: 500, transitionDuration: 300, isMenuOpened: this.state.sidebarOpen, position: "right", className: "fullCanvas" },
                    _react2.default.createElement(
                        _reactOffcanvas.OffCanvasBody,
                        { className: "app-content" },
                        //Give the current state as props to the children elements
                        _react2.default.cloneElement(this.props.children, this.state)
                    ),
                    _react2.default.createElement(
                        _reactOffcanvas.OffCanvasMenu,
                        { className: "sideMenu" },
                        _react2.default.createElement(
                            'a',
                            { onClick: this.toggleMenu },
                            _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'times'] })
                        ),
                        _react2.default.createElement(_ListingForm2.default, {
                            listing: this.state.listingEdit,
                            error: this.state.error.updatelisting,
                            loading: this.state.loading.updatelisting,
                            success: this.state.success }),
                        _react2.default.createElement('div', { className: 'overlay' })
                    )
                ),
                _react2.default.createElement(
                    'footer',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'This is a first version of the new list using ',
                        _react2.default.createElement(
                            'strong',
                            null,
                            'React'
                        ),
                        ' and ',
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Express'
                        ),
                        '.'
                    )
                )
            );
        }
    }]);

    return Layout;
}(_react2.default.Component);

exports.default = Layout;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("toastr");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'plus-circle', icon: [512, 512, [], "f055", "M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"] };

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'minus-circle', icon: [512, 512, [], "f056", "M140 274c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v12c0 6.6-5.4 12-12 12H140zm364-18c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"] };

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'glass-martini', icon: [512, 512, [], "f000", "M508 26.6C517.1 16.3 509.7 0 496 0H16C2.3 0-5.1 16.3 4 26.6L240 294v186H122c-14.4 0-26 11.6-26 26 0 3.3 2.7 6 6 6h308c3.3 0 6-2.7 6-6 0-14.4-11.6-26-26-26H272V294L508 26.6zM460.5 32L256 263.8 51.5 32h409z"] };

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'times', icon: [384, 512, [], "f00d", "M217.5 256l137.2-137.2c4.7-4.7 4.7-12.3 0-17l-8.5-8.5c-4.7-4.7-12.3-4.7-17 0L192 230.5 54.8 93.4c-4.7-4.7-12.3-4.7-17 0l-8.5 8.5c-4.7 4.7-4.7 12.3 0 17L166.5 256 29.4 393.2c-4.7 4.7-4.7 12.3 0 17l8.5 8.5c4.7 4.7 12.3 4.7 17 0L192 281.5l137.2 137.2c4.7 4.7 12.3 4.7 17 0l8.5-8.5c4.7-4.7 4.7-12.3 0-17L217.5 256z"] };

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = { prefix: 'far', iconName: 'plus', icon: [448, 512, [], "f067", "M436 228H252V44c0-6.6-5.4-12-12-12h-32c-6.6 0-12 5.4-12 12v184H12c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h184v184c0 6.6 5.4 12 12 12h32c6.6 0 12-5.4 12-12V284h184c6.6 0 12-5.4 12-12v-32c0-6.6-5.4-12-12-12z"] };

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = { prefix: 'far', iconName: 'minus', icon: [448, 512, [], "f068", "M436 284c6.6 0 12-5.4 12-12v-32c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h424z"] };

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'star', icon: [576, 512, [], "f005", "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"] };

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("react-offcanvas");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDates = __webpack_require__(26);

var _moment = __webpack_require__(11);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateRange = function (_React$Component) {
    _inherits(DateRange, _React$Component);

    function DateRange(props) {
        _classCallCheck(this, DateRange);

        var _this = _possibleConstructorReturn(this, (DateRange.__proto__ || Object.getPrototypeOf(DateRange)).call(this, props));

        _this.state = {
            focusedInput: null
        };
        return _this;
    }

    _createClass(DateRange, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_reactDates.DateRangePicker, {
                startDate: this.props.startDate ? (0, _moment2.default)(this.props.startDate) : null,
                endDate: this.props.endDate ? (0, _moment2.default)(this.props.endDate) : null,
                isOutsideRange: function isOutsideRange() {
                    return false;
                },
                onDatesChange: function onDatesChange(_ref) {
                    var startDate = _ref.startDate,
                        endDate = _ref.endDate;
                    return _this2.props.onDatesChange({ startDate: startDate, endDate: endDate });
                },
                focusedInput: this.state.focusedInput,
                onFocusChange: function onFocusChange(focusedInput) {
                    return _this2.setState({ focusedInput: focusedInput });
                }
            });
        }
    }]);

    return DateRange;
}(_react2.default.Component);

exports.default = DateRange;

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _formDateSingle = __webpack_require__(35);

var _formDateSingle2 = _interopRequireDefault(_formDateSingle);

var _reactFontawesome = __webpack_require__(23);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var EventsForm = function (_React$Component) {
    _inherits(EventsForm, _React$Component);

    function EventsForm(props) {
        _classCallCheck(this, EventsForm);

        var _this = _possibleConstructorReturn(this, (EventsForm.__proto__ || Object.getPrototypeOf(EventsForm)).call(this, props));

        _this.addEvent = _this.addEvent.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(EventsForm, [{
        key: 'onChange',
        value: function onChange(e) {
            //Update values of inputs
            _ListActions2.default.eventsInfoChange(e);
            this.props.onChange();
        }
    }, {
        key: 'addEvent',
        value: function addEvent() {
            _ListActions2.default.addEvent();
        }
    }, {
        key: 'removeEvent',
        value: function removeEvent(index) {
            _ListActions2.default.removeEvent(index);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var eventsList = function eventsList(events) {
                return events.map(function (event, index) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'event', key: index },
                        _react2.default.createElement(
                            'div',
                            { className: 'eventInfo' },
                            _react2.default.createElement(
                                'select',
                                {
                                    name: 'type',
                                    value: event.type ? event.type : "no-value",
                                    'data-index': index,
                                    onChange: _this2.onChange },
                                _react2.default.createElement(
                                    'option',
                                    { value: 'opening' },
                                    'Opening'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: 'closing' },
                                    'Closing'
                                ),
                                _react2.default.createElement(
                                    'option',
                                    { value: 'other' },
                                    'Other'
                                )
                            ),
                            _react2.default.createElement(_formDateSingle2.default, { event: index, startDate: event.date, onDatesChange: _this2.onChange }),
                            event.type === "other" && _react2.default.createElement('input', {
                                type: 'text',
                                name: 'name',
                                'data-index': index,
                                value: event.name,
                                onChange: _this2.onChange }),
                            _react2.default.createElement('textarea', {
                                name: 'description',
                                value: event.description,
                                'data-index': index,
                                onChange: _this2.onChange })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'moreOrLess' },
                            _react2.default.createElement(
                                'a',
                                { className: 'iconLink', onClick: function onClick(e) {
                                        return _this2.removeEvent(index);
                                    } },
                                _react2.default.createElement(_reactFontawesome2.default, { icon: ["fal", "minus-circle"] })
                            ),
                            index === events.length - 1 && _react2.default.createElement(
                                'a',
                                { className: 'iconLink', onClick: _this2.addEvent },
                                _react2.default.createElement(_reactFontawesome2.default, { icon: ["fal", "plus-circle"] })
                            )
                        )
                    );
                });
            };

            return _react2.default.createElement(
                'div',
                { className: 'eventsform' },
                _react2.default.createElement(
                    'div',
                    { className: 'eventsWrap' },
                    this.props.events.length > 0 ? eventsList(this.props.events) : _react2.default.createElement(
                        'a',
                        { className: 'iconLink', onClick: this.addEvent },
                        _react2.default.createElement(_reactFontawesome2.default, { icon: ["fal", "plus-circle"] })
                    )
                )
            );
        }
    }]);

    return EventsForm;
}(_react2.default.Component);

exports.default = EventsForm;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateModal = function (_React$Component) {
    _inherits(UpdateModal, _React$Component);

    function UpdateModal(props) {
        _classCallCheck(this, UpdateModal);

        var _this = _possibleConstructorReturn(this, (UpdateModal.__proto__ || Object.getPrototypeOf(UpdateModal)).call(this, props));

        _this.state = {
            modalVisible: _this.props.modalVisible
        };

        _this.toggle = _this.toggle.bind(_this);
        _this.componentWillReceiveProps = _this.componentWillReceiveProps.bind(_this);
        return _this;
    }

    _createClass(UpdateModal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setState({
                modalVisible: this.props.modalVisible
            });
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.setState({
                modalVisible: !this.state.modalVisible
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactstrap.Modal,
                { isOpen: this.state.modalVisible },
                _react2.default.createElement(
                    _reactstrap.ModalHeader,
                    null,
                    this.props.textTitle
                ),
                _react2.default.createElement(
                    _reactstrap.ModalBody,
                    null,
                    !this.props.loading && !this.props.success && !this.props.error ? "Press Confirm to " + this.props.textAction + ". Press Cancel to go back." : null,
                    this.props.loading && _react2.default.createElement(
                        'div',
                        { className: 'loading' },
                        'loading'
                    ),
                    this.props.success && _react2.default.createElement(
                        'div',
                        { className: 'success' },
                        this.props.textConfirm
                    ),
                    this.props.error && _react2.default.createElement(
                        'div',
                        { className: 'error' },
                        'Please Try Again'
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.ModalFooter,
                    null,
                    !this.props.success ? _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'primary', onClick: this.props.handleSubmit },
                            'Confirm'
                        ),
                        _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'primary', onClick: this.toggle },
                            'Cancel'
                        )
                    ) : _react2.default.createElement(
                        _reactstrap.Button,
                        { color: 'success', onClick: this.toggle },
                        'Close'
                    )
                )
            );
        }
    }]);

    return UpdateModal;
}(_react2.default.Component);

exports.default = UpdateModal;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var UserLink = function (_React$Component) {
    _inherits(UserLink, _React$Component);

    function UserLink(props) {
        _classCallCheck(this, UserLink);

        var _this = _possibleConstructorReturn(this, (UserLink.__proto__ || Object.getPrototypeOf(UserLink)).call(this, props));

        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            popoverOpen: false
        };
        return _this;
    }

    _createClass(UserLink, [{
        key: 'toggle',
        value: function toggle() {
            this.setState({
                popoverOpen: !this.state.popoverOpen
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var user = this.props.user;

            //Get the user's avatar
            var fullURL = '';
            var hasAvatar = false;

            if (user.avatar) {
                hasAvatar = true;
                fullURL = "https://res.cloudinary.com/artcritical/image/upload/" + user.avatar + ".jpg";
            } else if (user.facebook) {
                hasAvatar = true;
                fullURL = "https://graph.facebook.com/" + user.facebook.id + "/picture?type=large";
            }

            return _react2.default.createElement(
                'span',
                { className: 'userLink' },
                _react2.default.createElement(
                    'a',
                    { onClick: this.toggle,
                        id: 'Popover-' + user._id,
                        target: '_blank' },
                    user.firstname,
                    ' ',
                    user.lastname
                ),
                _react2.default.createElement(
                    _reactstrap.Popover,
                    { placement: 'top', target: 'Popover-' + user._id, toggle: this.toggle, isOpen: this.state.popoverOpen },
                    _react2.default.createElement(
                        _reactstrap.PopoverTitle,
                        null,
                        hasAvatar && _react2.default.createElement('img', { className: 'avatar', src: fullURL }),
                        ' ',
                        user.firstname,
                        ' ',
                        user.lastname
                    ),
                    _react2.default.createElement(
                        _reactstrap.PopoverContent,
                        null,
                        user.bio
                    )
                )
            );
        }
    }]);

    return UserLink;
}(_react2.default.Component);

exports.default = UserLink;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _neighborhoodNav = __webpack_require__(38);

var _neighborhoodNav2 = _interopRequireDefault(_neighborhoodNav);

var _listingsPerNeighbor = __webpack_require__(39);

var _listingsPerNeighbor2 = _interopRequireDefault(_listingsPerNeighbor);

var _loading = __webpack_require__(13);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var CurrentPage = function (_React$Component) {
    _inherits(CurrentPage, _React$Component);

    function CurrentPage(props) {
        _classCallCheck(this, CurrentPage);

        return _possibleConstructorReturn(this, (CurrentPage.__proto__ || Object.getPrototypeOf(CurrentPage)).call(this, props));
    }

    _createClass(CurrentPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //If the current listings are not loaded, load em
            this.props.currentListings.length === 0 && _ListActions2.default.getCurrent();
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'current mainList' },
                _react2.default.createElement(
                    'div',
                    { className: 'left-col' },
                    _react2.default.createElement(_neighborhoodNav2.default, null),
                    _react2.default.createElement(
                        'p',
                        null,
                        'See all future listings: ',
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/future', activeClassName: 'active' },
                            'Future'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.props.view + " listingsWrap main-col" },
                    _react2.default.createElement(
                        'p',
                        null,
                        'There are currently ',
                        this.props.currentListings.length,
                        ' art shows open.'
                    ),
                    _react2.default.createElement(_listingsPerNeighbor2.default, { listings: this.props.currentListings, user: this.props.user }),
                    this.props.loading.current && _react2.default.createElement(_loading2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'right-col' },
                    _react2.default.createElement('img', { src: '/images/ad-long.jpg' })
                )
            );
        }
    }]);

    return CurrentPage;
}(_react2.default.Component);

exports.default = CurrentPage;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _neighborhoodNav = __webpack_require__(38);

var _neighborhoodNav2 = _interopRequireDefault(_neighborhoodNav);

var _listingsPerNeighbor = __webpack_require__(39);

var _listingsPerNeighbor2 = _interopRequireDefault(_listingsPerNeighbor);

var _loading = __webpack_require__(13);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var FuturePage = function (_React$Component) {
    _inherits(FuturePage, _React$Component);

    function FuturePage(props) {
        _classCallCheck(this, FuturePage);

        return _possibleConstructorReturn(this, (FuturePage.__proto__ || Object.getPrototypeOf(FuturePage)).call(this, props));
    }

    _createClass(FuturePage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ListActions2.default.getFuture();
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'future mainList' },
                _react2.default.createElement(
                    'div',
                    { className: 'left-col' },
                    _react2.default.createElement(_neighborhoodNav2.default, null),
                    _react2.default.createElement(
                        'p',
                        null,
                        'See all current listings: ',
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/current', activeClassName: 'active' },
                            'Future'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.props.view + " listingsWrap main-col" },
                    _react2.default.createElement(_listingsPerNeighbor2.default, { listings: this.props.futureListings, user: this.props.user }),
                    this.props.loading.future && _react2.default.createElement(_loading2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'right-col' },
                    _react2.default.createElement('img', { src: '/images/ad-long.jpg' })
                )
            );
        }
    }]);

    return FuturePage;
}(_react2.default.Component);

exports.default = FuturePage;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _ListStore = __webpack_require__(17);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactIntl = __webpack_require__(12);

var _daypage = __webpack_require__(91);

var _daypage2 = _interopRequireDefault(_daypage);

var _tabs = __webpack_require__(28);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var GlancePage = function (_React$Component) {
    _inherits(GlancePage, _React$Component);

    function GlancePage(props) {
        _classCallCheck(this, GlancePage);

        //Get the next 7 dates
        var _this = _possibleConstructorReturn(this, (GlancePage.__proto__ || Object.getPrototypeOf(GlancePage)).call(this, props));

        var dates = [];
        for (var i = 0; i < 7; i++) {
            var d = new Date();
            d.setHours(0, 0, 0, 0);
            d.setDate(d.getDate() + i);
            dates.push(d);
        }

        _this.state = {
            dates: dates
        };
        return _this;
    }

    _createClass(GlancePage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _ListActions2.default.featureLoad(7);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ListActions2.default.getGlance();
        }
    }, {
        key: 'render',
        value: function render() {

            var thelist = this.props.glanceListings;

            var days = [];

            for (var i = 0; i < 7; i++) {
                var label = _react2.default.createElement(
                    _reactIntl.IntlProvider,
                    { locale: 'en' },
                    _react2.default.createElement(_reactIntl.FormattedDate, { value: this.state.dates[i], weekday: 'long', day: 'numeric', month: 'short' })
                );
                days.push(_react2.default.createElement(_daypage2.default, {
                    key: i,
                    feature: this.props.features[i] ? this.props.features[i] : {},
                    glanceListings: thelist,
                    user: this.props.user,
                    label: label,
                    date: this.state.dates[i],
                    view: this.props.view }));
            }

            return _react2.default.createElement(
                'div',
                { className: 'glance' },
                _react2.default.createElement(
                    _tabs2.default,
                    null,
                    days
                )
            );
        }
    }]);

    return GlancePage;
}(_react2.default.Component);

exports.default = GlancePage;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(12);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _moment = __webpack_require__(11);

var _moment2 = _interopRequireDefault(_moment);

var _listing = __webpack_require__(5);

var _listing2 = _interopRequireDefault(_listing);

var _featureBlock = __webpack_require__(40);

var _featureBlock2 = _interopRequireDefault(_featureBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var DayPage = function (_React$Component) {
    _inherits(DayPage, _React$Component);

    function DayPage(props) {
        _classCallCheck(this, DayPage);

        var _this = _possibleConstructorReturn(this, (DayPage.__proto__ || Object.getPrototypeOf(DayPage)).call(this, props));

        _this.state = {
            date: (0, _moment2.default)(_this.props.date).format().slice(0, 10),
            openings: [],
            events: [],
            closings: []
        };
        return _this;
    }

    _createClass(DayPage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _ListActions2.default.featureReset();
            _ListActions2.default.featureLoad({ date: this.props.date });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var events = [];
            var openings = [];
            var closings = [];

            nextProps.glanceListings.map(function (listing) {
                // Check if it is an event
                if (listing.event == true) {
                    // it IS an event
                    if ((0, _moment2.default)(listing.start).format().slice(0, 10) == _this2.state.date) {
                        events.push(_react2.default.createElement(_listing2.default, { listing: listing, key: listing._id, user: _this2.props.user }));
                    }
                } else {
                    //not an event
                    //Check if it starts on this day
                    if ((0, _moment2.default)(listing.start).format().slice(0, 10) == _this2.state.date) {
                        openings.push(_react2.default.createElement(_listing2.default, { listing: listing, key: listing._id, user: _this2.props.user, dateView: 'current' }));
                    }
                    //Check if it ends on this day
                    if ((0, _moment2.default)(listing.end).format().slice(0, 10) == _this2.state.date) {
                        closings.push(_react2.default.createElement(_listing2.default, { listing: listing, key: listing._id, user: _this2.props.user }));
                    }
                }

                _this2.setState({
                    openings: openings,
                    events: events,
                    closings: closings
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'day' },
                _react2.default.createElement(
                    'div',
                    { className: this.props.view + " listingsWrap" },
                    this.state.openings.length > 0 && _react2.default.createElement(
                        'h3',
                        null,
                        'Openings'
                    ),
                    this.state.openings,
                    this.state.events.length > 0 && _react2.default.createElement(
                        'h3',
                        null,
                        'Events'
                    ),
                    this.state.events,
                    this.state.closings.length > 0 && _react2.default.createElement(
                        'h3',
                        null,
                        'Closing'
                    ),
                    this.state.closings,
                    this.state.closings.length + this.state.events.length + this.state.openings.length == 0 && _react2.default.createElement(
                        'h4',
                        null,
                        'Nothing happening today!'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'featuredSection' },
                    _react2.default.createElement(_featureBlock2.default, { feature: this.props.feature, user: this.props.user })
                )
            );
        }
    }]);

    return DayPage;
}(_react2.default.Component);

exports.default = DayPage;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactMapGl = __webpack_require__(14);

var _reactMapGl2 = _interopRequireDefault(_reactMapGl);

var _MapCluster = __webpack_require__(94);

var _MapCluster2 = _interopRequireDefault(_MapCluster);

var _listing = __webpack_require__(5);

var _listing2 = _interopRequireDefault(_listing);

var _d3Request = __webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var d3 = __webpack_require__(41);

var CurrentMap = function (_React$Component) {
	_inherits(CurrentMap, _React$Component);

	function CurrentMap(props) {
		_classCallCheck(this, CurrentMap);

		var _this = _possibleConstructorReturn(this, (CurrentMap.__proto__ || Object.getPrototypeOf(CurrentMap)).call(this, props));

		_this.state = {
			viewport: {
				latitude: _this.props.center.lat,
				longitude: _this.props.center.lng,
				zoom: _this.props.zoom,
				mapboxApiAccessToken: _this.props.token,
				bearing: 0,
				pitch: 0,
				width: 0,
				height: 0,
				transitionDuration: _this.props.transitionDuration,
				transitionInterpolator: _this.props.transitionInterpolator,
				transitionEasing: _this.props.transitionEasing
			},
			hoverPosition: [0, 0]

			//Getting the cluster icons
		};(0, _d3Request.json)('javascripts/location-icon-mapping.json', function (error, response) {
			if (!error) {
				_this.setState({ iconMapping: response });
			}
		});

		_this.componentDidMount = _this.componentDidMount.bind(_this);
		_this._goToNYC = _this._goToNYC.bind(_this);
		_this._goToPhil = _this._goToPhil.bind(_this);
		_this._onViewportChange = _this._onViewportChange.bind(_this);
		_this._onHover = _this._onHover.bind(_this);
		_this._onClick = _this._onClick.bind(_this);
		_this._resizeMap = _this._resizeMap.bind(_this);
		return _this;
	}

	_createClass(CurrentMap, [{
		key: 'componentDidMount',
		value: function componentDidMount() {

			//Resize the map in the background
			this._resizeMap();
			window.addEventListener("resize", this._resizeMap);

			//If the current listings are not loaded, load em
			this.props.currentListings.length === 0 && _ListActions2.default.getCurrent();
		}
	}, {
		key: '_resizeMap',
		value: function _resizeMap() {
			console.log('window: ', window);
			// Create variable to change property
			var viewport = _extends({}, this.state.viewport, {
				width: window.innerWidth, //ReactDOM.findDOMNode(this).offsetWidth
				height: window.innerHeight
				//Update state
			});this.setState({
				viewport: viewport
			});
		}
	}, {
		key: '_onViewportChange',
		value: function _onViewportChange(viewport) {
			this.setState({ viewport: viewport });
		}
	}, {
		key: '_goToNYC',
		value: function _goToNYC() {
			var viewport = _extends({}, this.state.viewport, {
				longitude: this.props.center.lng,
				latitude: this.props.center.lat,
				zoom: this.props.zoom,
				transitionDuration: this.props.transitionDuration,
				transitionInterpolator: this.props.transitionInterpolator,
				transitionEasing: this.props.transitionEasing
			});
			this.setState({ viewport: viewport });
		}
	}, {
		key: '_goToPhil',
		value: function _goToPhil() {
			var viewport = _extends({}, this.state.viewport, {
				longitude: -75.2581144,
				latitude: 40.0026767,
				zoom: this.props.zoom,
				transitionDuration: this.props.transitionDuration,
				transitionInterpolator: this.props.transitionInterpolator,
				transitionEasing: this.props.transitionEasing
			});
			this.setState({ viewport: viewport });
		}
	}, {
		key: '_onHover',
		value: function _onHover(el) {
			this.setState({
				hoverListings: el.object,
				hoverPosition: el.pixel
			});
		}
	}, {
		key: '_onClick',
		value: function _onClick(el) {
			//When clicked, the state gets the list of events
			this.setState({
				browseListings: el.object.zoomLevels[Math.round(this.state.viewport.zoom)].points
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var displayListings = function displayListings(listings) {
				return listings.map(function (listing, index) {
					return _react2.default.createElement(_listing2.default, { key: index, listing: listing, user: _this2.props.user, dateView: 'current' });
				});
			};

			var showLabels = function showLabels(listings) {
				return listings.map(function (listing, index) {
					return _react2.default.createElement(
						'div',
						{ key: index },
						listing.name
					);
				});
			};

			var labelStyles = {
				left: this.state.hoverPosition[0],
				top: this.state.hoverPosition[1]
			};

			return _react2.default.createElement(
				'div',
				{ className: 'currentMap' },
				_react2.default.createElement(
					'div',
					{ className: 'mapWrap' },
					_react2.default.createElement(
						_reactMapGl2.default,
						_extends({}, this.state.viewport, {
							onViewportChange: this._onViewportChange
						}),
						_react2.default.createElement(_MapCluster2.default, {
							viewport: this.state.viewport,
							data: this.props.currentListings,
							iconAtlas: 'images/location-icon-atlas.png',
							iconMapping: this.state.iconMapping,
							showCluster: true,
							onHover: this._onHover,
							onClick: this._onClick
						})
					),
					this.state.hoverListings && _react2.default.createElement(
						'div',
						{ className: 'label', style: labelStyles },
						showLabels(this.state.hoverListings.zoomLevels[Math.round(this.state.viewport.zoom)].points)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: this.props.view + " list" },
					this.state.browseListings ? displayListings(this.state.browseListings) : _react2.default.createElement(
						'div',
						{ className: 'intro' },
						_react2.default.createElement(
							'h2',
							null,
							'Welcome to the artcritical map'
						),
						_react2.default.createElement(
							'p',
							null,
							'Click on markers to explore all the shows currently open in New York City and beyond.'
						),
						this.props.loading.current && _react2.default.createElement(
							'div',
							{ className: 'loading' },
							'Loading...'
						),
						_react2.default.createElement(
							'p',
							null,
							'There are currently ',
							this.props.currentListings.length,
							' shows open in NYC and around.'
						),
						_react2.default.createElement(
							'div',
							{ className: 'cityJump' },
							_react2.default.createElement(
								'button',
								{ onClick: this._goToNYC },
								'New York City'
							),
							_react2.default.createElement(
								'button',
								{ onClick: this._goToPhil },
								'Philadelphia'
							)
						)
					)
				)
			);
		}
	}]);

	return CurrentMap;
}(_react2.default.Component);

exports.default = CurrentMap;


CurrentMap.defaultProps = {
	center: { lat: 40.7238556, lng: -73.9221523 },
	zoom: 11,
	token: process.env.MapboxAccessToken,
	transitionDuration: 1000,
	transitionInterpolator: new _reactMapGl.FlyToInterpolator(),
	transitionEasing: d3.easeCubic
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _deck = __webpack_require__(95);

var _deck2 = _interopRequireDefault(_deck);

var _rbush = __webpack_require__(96);

var _rbush2 = _interopRequireDefault(_rbush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Based on https://github.com/uber/deck.gl/blob/5.1-release/examples/icon/deckgl-overlay.js

var ICON_SIZE = 60;

function getIconName(size) {
  if (size === 0) {
    return '';
  }
  if (size < 10) {
    return 'marker-' + size;
  }
  if (size < 100) {
    return 'marker-' + Math.floor(size / 10) + '0';
  }
  return 'marker-100';
}

function getIconSize(size) {
  return Math.min(100, size) / 100 * 0.5 + 0.8;
}

var DeckGLOverlay = function (_Component) {
  _inherits(DeckGLOverlay, _Component);

  function DeckGLOverlay(props) {
    _classCallCheck(this, DeckGLOverlay);

    // build spatial index
    var _this = _possibleConstructorReturn(this, (DeckGLOverlay.__proto__ || Object.getPrototypeOf(DeckGLOverlay)).call(this, props));

    _this._tree = (0, _rbush2.default)(9, ['.x', '.y', '.x', '.y']);
    _this.state = {
      points: [],
      x: 0,
      y: 0,
      hoveredItems: null,
      expanded: false,
      windowSize: 0
    };

    _this._updateCluster(props);
    _this.componentDidMount = _this.componentDidMount.bind(_this);
    return _this;
  }

  _createClass(DeckGLOverlay, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var viewport = nextProps.viewport;

      var oldViewport = this.props.viewport;

      if (nextProps.data !== this.props.data || viewport.width !== oldViewport.width || viewport.height !== oldViewport.height) {
        this._updateCluster(nextProps);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        windowSize: window.devicePixelRatio
      });
    }

    // Compute icon clusters
    // We use the projected positions instead of longitude and latitude to build
    // the spatial index, because this particular dataset is distributed all over
    // the world, we can't use some fixed deltaLon and deltaLat

  }, {
    key: '_updateCluster',
    value: function _updateCluster(_ref) {
      var data = _ref.data,
          viewport = _ref.viewport;

      if (!data) {
        return;
      }

      var tree = this._tree;

      var transform = new _deck.WebMercatorViewport({
        viewport: viewport,
        zoom: 0
      });

      data.forEach(function (p) {
        var coordinates = [p.venue.coordinates.lat, p.venue.coordinates.long];
        var screenCoords = transform.project(coordinates);
        p.x = screenCoords[0];
        p.y = screenCoords[1];
        p.zoomLevels = [];
      });

      tree.clear();
      tree.load(data);

      var _loop = function _loop(z) {
        var radius = ICON_SIZE / 2 / Math.pow(2, z);

        data.forEach(function (p) {
          if (p.zoomLevels[z] === undefined) {
            // this point does not belong to a cluster
            var x = p.x,
                y = p.y;

            // find all points within radius that do not belong to a cluster

            var neighbors = tree.search({
              minX: x - radius,
              minY: y - radius,
              maxX: x + radius,
              maxY: y + radius
            }).filter(function (neighbor) {
              return neighbor.zoomLevels[z] === undefined;
            });

            // only show the center point at this zoom level
            neighbors.forEach(function (neighbor) {
              if (neighbor === p) {
                p.zoomLevels[z] = {
                  icon: getIconName(neighbors.length),
                  size: getIconSize(neighbors.length),
                  points: neighbors
                };
              } else {
                neighbor.zoomLevels[z] = null;
              }
            });
          }
        });
      };

      for (var z = 0; z <= 20; z++) {
        _loop(z);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          viewport = _props.viewport,
          data = _props.data,
          iconAtlas = _props.iconAtlas,
          iconMapping = _props.iconMapping,
          showCluster = _props.showCluster;


      if (!data || !iconMapping) {
        return null;
      }

      var z = Math.floor(viewport.zoom);
      var size = showCluster ? 1 : Math.min(Math.pow(1.5, viewport.zoom - 10), 1);
      var updateTrigger = z * showCluster;

      var layer = [new _deck.IconLayer({
        id: 'icon',
        data: data,
        pickable: this.props.onHover || this.props.onClick,
        iconAtlas: iconAtlas,
        iconMapping: iconMapping,
        sizeScale: ICON_SIZE * size * this.state.windowSize,
        getPosition: function getPosition(d) {
          return [d.venue.coordinates.long, d.venue.coordinates.lat, 0];
        },
        getIcon: function getIcon(d) {
          return showCluster ? d.zoomLevels[z] && d.zoomLevels[z].icon : 'marker';
        },
        getSize: function getSize(d) {
          return showCluster ? d.zoomLevels[z] && d.zoomLevels[z].size : 1;
        },
        onHover: this.props.onHover,
        onClick: this.props.onClick,
        updateTriggers: {
          getIcon: updateTrigger,
          getSize: updateTrigger
        }
      })];

      return _react2.default.createElement(_deck2.default, _extends({}, viewport, { layers: layer }));
    }
  }]);

  return DeckGLOverlay;
}(_react.Component);

exports.default = DeckGLOverlay;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("deck.gl");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("rbush");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("d3-request");

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _ListStore = __webpack_require__(17);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _listing = __webpack_require__(5);

var _listing2 = _interopRequireDefault(_listing);

var _DateBlock = __webpack_require__(6);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _sizeSelector = __webpack_require__(18);

var _sizeSelector2 = _interopRequireDefault(_sizeSelector);

var _DayPicker = __webpack_require__(99);

var _DayPicker2 = _interopRequireDefault(_DayPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var EventsPage = function (_React$Component) {
    _inherits(EventsPage, _React$Component);

    function EventsPage(props) {
        _classCallCheck(this, EventsPage);

        return _possibleConstructorReturn(this, (EventsPage.__proto__ || Object.getPrototypeOf(EventsPage)).call(this, props));
    }

    _createClass(EventsPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ListActions2.default.getEvents();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var oldDate = void 0;
            var thelist = this.props.eventsListings.map(function (listing) {
                var newDate = listing.start;
                if (newDate !== oldDate) {
                    oldDate = newDate;
                    return _react2.default.createElement(
                        'div',
                        { key: listing._id },
                        _react2.default.createElement(
                            'h2',
                            null,
                            _react2.default.createElement(_DateBlock2.default, { date: newDate })
                        ),
                        _react2.default.createElement(_listing2.default, { listing: listing, user: _this2.props.user })
                    );
                } else {
                    return _react2.default.createElement(_listing2.default, { listing: listing, key: listing._id, user: _this2.props.user });
                }
            });

            return _react2.default.createElement(
                'div',
                { className: 'events mainList' },
                _react2.default.createElement(
                    'div',
                    { className: 'left-col' },
                    _react2.default.createElement(_DayPicker2.default, { events: this.props.eventsListings })
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.props.view + " listingsWrap main-col" },
                    this.props.eventsListings.length ? thelist : "No Future Events"
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'right-col' },
                    'Ads'
                )
            );
        }
    }]);

    return EventsPage;
}(_react2.default.Component);

exports.default = EventsPage;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(11);

var _moment2 = _interopRequireDefault(_moment);

var _reactDates = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var now = (0, _moment2.default)();

var DayPicker = function (_React$Component) {
    _inherits(DayPicker, _React$Component);

    function DayPicker(props) {
        _classCallCheck(this, DayPicker);

        var _this = _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).call(this, props));

        _this.state = {
            focusedInput: null,
            prevDisabled: true,
            datePicked: now
        };

        _this.isDayHighlighted = _this.isDayHighlighted.bind(_this);
        return _this;
    }

    _createClass(DayPicker, [{
        key: 'isDayHighlighted',
        value: function isDayHighlighted(day, eventDays) {
            var highlight = false;
            eventDays.map(function (event) {
                if ((0, _moment2.default)(event.start).isSame(day)) {
                    highlight = true;
                }
            });

            return highlight;
        }
    }, {
        key: 'onDateChange',
        value: function onDateChange(date) {
            console.log('startDate ', date);
            this.setState({
                datePicked: date
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                this.props.events.length > 0 && _react2.default.createElement(_reactDates.DayPickerSingleDateController, {
                    hideKeyboardShortcutsPanel: true,
                    numberOfMonths: 1,
                    date: this.state.datePicked,
                    isOutsideRange: function isOutsideRange(day) {
                        return !_this2.isDayHighlighted(day, _this2.props.events);
                    },
                    isDayHighlighted: function isDayHighlighted(day) {
                        return _this2.isDayHighlighted(day, _this2.props.events);
                    },
                    onDateChange: function onDateChange(date) {
                        return _this2.onDateChange(date);
                    }
                    //focusedInput={this.state.focusedInput}
                    //onFocusChange={focusedInput => this.setState({ focusedInput })}
                })
            );
        }
    }]);

    return DayPicker;
}(_react2.default.Component);

exports.default = DayPicker;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _mapBlock = __webpack_require__(42);

var _mapBlock2 = _interopRequireDefault(_mapBlock);

var _VenueListings = __webpack_require__(103);

var _VenueListings2 = _interopRequireDefault(_VenueListings);

var _VenueContent = __webpack_require__(104);

var _VenueContent2 = _interopRequireDefault(_VenueContent);

var _tabs = __webpack_require__(28);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var VenuePage = function (_React$Component) {
    _inherits(VenuePage, _React$Component);

    function VenuePage(props) {
        _classCallCheck(this, VenuePage);

        var _this = _possibleConstructorReturn(this, (VenuePage.__proto__ || Object.getPrototypeOf(VenuePage)).call(this, props));

        _this.componentWillMount = _this.componentWillMount.bind(_this);
        return _this;
    }

    _createClass(VenuePage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log('made it to the venue page');
            _ListActions2.default.getVenueFullInfo(this.props.params.slug);
        }
    }, {
        key: 'render',
        value: function render() {

            // Get coordinates
            var fullAdress = this.props.venue.address ? this.props.venue.address + ' ' + this.props.venue.city : null;
            var venueId = this.props.venue ? this.props.venue._id : '';

            console.log(fullAdress);

            if (fullAdress && !this.props.venue.coordinates) {
                client.geocodeForward(fullAdress, function (err, data, res) {
                    var newCoords = data.features[0].center;
                    _ListActions2.default.updateVenue(newCoords, venueId);
                });
            }

            return _react2.default.createElement(
                'div',
                { className: 'venuePage' },
                _react2.default.createElement(_VenueContent2.default, { venue: this.props.venue }),
                this.props.venue.coordinates && _react2.default.createElement(_mapBlock2.default, this.props.venue),
                _react2.default.createElement(
                    'div',
                    { className: 'listingsWrap' },
                    _react2.default.createElement(
                        _tabs2.default,
                        null,
                        _react2.default.createElement(_VenueListings2.default, { view: this.props.view, listings: this.props.venue.currentListings, user: this.props.user, label: 'Current Shows' }),
                        _react2.default.createElement(_VenueListings2.default, { view: this.props.view, listings: this.props.venue.upcomingListings, user: this.props.user, label: 'Upcoming Shows' }),
                        _react2.default.createElement(_VenueListings2.default, { view: this.props.view, listings: this.props.venue.pastListings, user: this.props.user, label: 'Past Shows' })
                    )
                )
            );
        }
    }]);

    return VenuePage;
}(_react2.default.Component);

exports.default = VenuePage;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleMarker = function (_React$Component) {
  _inherits(SingleMarker, _React$Component);

  function SingleMarker() {
    _classCallCheck(this, SingleMarker);

    return _possibleConstructorReturn(this, (SingleMarker.__proto__ || Object.getPrototypeOf(SingleMarker)).apply(this, arguments));
  }

  _createClass(SingleMarker, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: "marker" });
    }
  }]);

  return SingleMarker;
}(_react2.default.Component);

exports.default = SingleMarker;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _listing = __webpack_require__(5);

var _listing2 = _interopRequireDefault(_listing);

var _sizeSelector = __webpack_require__(18);

var _sizeSelector2 = _interopRequireDefault(_sizeSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Components


var VenueListings = function (_React$Component) {
    _inherits(VenueListings, _React$Component);

    function VenueListings(props) {
        _classCallCheck(this, VenueListings);

        return _possibleConstructorReturn(this, (VenueListings.__proto__ || Object.getPrototypeOf(VenueListings)).call(this, props));
    }

    _createClass(VenueListings, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var listingsRender = function listingsRender(listings) {
                return listings.map(function (listing) {
                    return _react2.default.createElement(_listing2.default, { listing: listing, user: _this2.props.user, key: listing._id });
                });
            };

            return _react2.default.createElement(
                'div',
                { className: 'venueListings' },
                _react2.default.createElement(_sizeSelector2.default, { view: this.props.view }),
                _react2.default.createElement(
                    'div',
                    { className: this.props.view + " listingsWrap" },
                    this.props.listings ? listingsRender(this.props.listings) : 'No Listings'
                )
            );
        }
    }]);

    return VenueListings;
}(_react2.default.Component);

exports.default = VenueListings;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VenuePage = function (_React$Component) {
    _inherits(VenuePage, _React$Component);

    function VenuePage(props) {
        _classCallCheck(this, VenuePage);

        return _possibleConstructorReturn(this, (VenuePage.__proto__ || Object.getPrototypeOf(VenuePage)).call(this, props));
    }

    _createClass(VenuePage, [{
        key: "render",
        value: function render() {
            console.log(this.props.venue);
            var venue = this.props.venue;
            console.log(venue.likeList);

            return _react2.default.createElement(
                "div",
                { className: "infoWrap" },
                _react2.default.createElement(
                    "h2",
                    null,
                    venue.name
                ),
                _react2.default.createElement(
                    "section",
                    null,
                    venue.address1,
                    " ",
                    venue.address2,
                    _react2.default.createElement("br", null),
                    venue.city
                ),
                _react2.default.createElement(
                    "section",
                    null,
                    venue.phone && _react2.default.createElement(
                        "div",
                        { className: "phone" },
                        venue.phone
                    ),
                    venue.website && _react2.default.createElement(
                        "a",
                        { className: "website", target: "_blank", href: venue.website },
                        venue.website
                    )
                ),
                _react2.default.createElement(
                    "section",
                    null,
                    "Represent this gallery? Contact us at ",
                    _react2.default.createElement(
                        "a",
                        { href: "mailto:hello@artcritical.com" },
                        "hello@artcritical.com"
                    ),
                    " to get access to this page."
                )
            );
        }
    }]);

    return VenuePage;
}(_react2.default.Component);

exports.default = VenuePage;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _SignUpForm = __webpack_require__(106);

var _SignUpForm2 = _interopRequireDefault(_SignUpForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogInPage = function (_React$Component) {
    _inherits(LogInPage, _React$Component);

    function LogInPage() {
        _classCallCheck(this, LogInPage);

        return _possibleConstructorReturn(this, (LogInPage.__proto__ || Object.getPrototypeOf(LogInPage)).apply(this, arguments));
    }

    _createClass(LogInPage, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'admin' },
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Sign Up'
                    )
                ),
                _react2.default.createElement(_SignUpForm2.default, this.props),
                'Already signed up? ',
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/login', activeClassName: 'active' },
                    'Log In'
                )
            );
        }
    }]);

    return LogInPage;
}(_react2.default.Component);

exports.default = LogInPage;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(8);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _reactToggleButton = __webpack_require__(25);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _validator = __webpack_require__(43);

var _validator2 = _interopRequireDefault(_validator);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUpForm = function (_React$Component) {
    _inherits(SignUpForm, _React$Component);

    function SignUpForm(props) {
        _classCallCheck(this, SignUpForm);

        var _this = _possibleConstructorReturn(this, (SignUpForm.__proto__ || Object.getPrototypeOf(SignUpForm)).call(this, props));

        _this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password1: '',
            password2: '',
            isValid: {
                firstname: true,
                lastname: true,
                email: true,
                password1: true,
                password2: true
            },
            errorMessage: {
                firstname: '',
                lastname: '',
                email: '',
                password1: '',
                password2: ''
            }
        };

        // Function Binding
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSaveClick = _this.handleSaveClick.bind(_this);
        return _this;
    }

    _createClass(SignUpForm, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var target = event.target;
            var name = target.name;
            var value = target.value;

            this.setState(_defineProperty({}, name, value));
        }

        //Check if valid and updates state

    }, {
        key: '_getInputStyleName',
        value: function _getInputStyleName(isValid) {
            return isValid ? 'valid' : 'invalid';
        }

        //VALIDATORS

    }, {
        key: '_validateEmail',
        value: function _validateEmail(value) {
            var valid = _validator2.default.isEmail(value);
            var errorMessage = this.state.errorMessage;

            if (valid) {
                errorMessage.email = '';
                this.setState({ errorMessage: errorMessage });
            } else {
                errorMessage.email = 'Please enter a valid email address';
                this.setState({ errorMessage: errorMessage });
            }
            return valid;
        }
    }, {
        key: '_validateFirstName',
        value: function _validateFirstName(value) {
            var valid = _validator2.default.isLength(value.trim(), 1, 50);
            var errorMessage = this.state.errorMessage;

            if (valid) {
                errorMessage.name = '';
                this.setState({ errorMessage: errorMessage });
            } else {
                errorMessage.name = 'Please enter a first name.';
                this.setState({ errorMessage: errorMessage });
            }
            return valid;
        }
    }, {
        key: '_validateLastName',
        value: function _validateLastName(value) {
            var valid = _validator2.default.isLength(value.trim(), 1, 50);
            var errorMessage = this.state.errorMessage;

            if (valid) {
                errorMessage.name = '';
                this.setState({ errorMessage: errorMessage });
            } else {
                errorMessage.name = 'Please enter a last name.';
                this.setState({ errorMessage: errorMessage });
            }
            return valid;
        }
    }, {
        key: '_validatePassword1',
        value: function _validatePassword1(value) {
            var valid = _validator2.default.isLength(value.trim(), 5, 50);
            var errorMessage = this.state.errorMessage;

            if (valid) {
                errorMessage.password1 = '';
                this.setState({ errorMessage: errorMessage });
            } else {
                errorMessage.password1 = 'Please enter a password. 5 characters min.';
                this.setState({ errorMessage: errorMessage });
            }
            return valid;
        }
    }, {
        key: '_validatePassword2',
        value: function _validatePassword2(password1, password2) {
            var pwValid = this._validatePassword1(this.state.password1);
            var valid = _validator2.default.equals(password1, password2);
            var errorMessage = this.state.errorMessage;

            //Check if password is valid
            if (pwValid) {
                //Check if passwords match
                if (valid) {
                    errorMessage.password2 = '';
                    this.setState({ errorMessage: errorMessage });
                } else {
                    errorMessage.password2 = 'Passwords need to match';
                    this.setState({ errorMessage: errorMessage });
                }

                return valid;
            } else {
                return pwValid;
            }
        }
    }, {
        key: '_validate',
        value: function _validate(firstname, lastname, email, password1, password2) {
            this.setState({
                isValid: {
                    firstname: this._validateFirstName(firstname),
                    lastname: this._validateLastName(lastname),
                    email: this._validateEmail(email),
                    password1: this._validatePassword1(password1),
                    password2: this._validatePassword2(password1, password2)
                }
            });
        }
    }, {
        key: '_areValid',
        value: function _areValid(firstname, lastname, email, password1, password2) {
            var result = false;

            if (this._validateFirstName(firstname) && this._validateLastName(lastname) && this._validateEmail(email) && this._validatePassword1(password1) && this._validatePassword2(password1, password2)) {

                result = true;
            }
            return result;
        }
    }, {
        key: '_sanitizeValue',
        value: function _sanitizeValue(value) {
            return value.trim();
        }
    }, {
        key: 'handleSaveClick',
        value: function handleSaveClick(event) {

            event.preventDefault();

            var _state = this.state,
                firstname = _state.firstname,
                lastname = _state.lastname,
                email = _state.email,
                password1 = _state.password1,
                password2 = _state.password2;


            this._validate(firstname, lastname, email, password1, password2);

            if (this._areValid(firstname, lastname, email, password1, password2)) {
                var newUser = {
                    firstname: firstname,
                    lastname: lastname,
                    username: email,
                    password: password1
                };
                _AuthActions2.default.attemptRegister(newUser);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var loggedIn = this.props.user.isLoggedIn;
            var Router = this.context.router;

            if (loggedIn) {
                setTimeout(function () {
                    Router.push('/');
                }, 0);
            }

            return _react2.default.createElement(
                _reactstrap.Form,
                null,
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { check: true },
                    _react2.default.createElement(
                        _reactstrap.Label,
                        null,
                        'First Name'
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'text',
                        name: 'firstname',
                        value: this.state.firstname,
                        className: this._getInputStyleName(this.state.isValid.firstname),
                        onChange: this.handleChange
                    }),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.errorMessage.firstname
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { check: true },
                    _react2.default.createElement(
                        _reactstrap.Label,
                        null,
                        'Last Name'
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'text',
                        name: 'lastname',
                        value: this.state.lastname,
                        className: this._getInputStyleName(this.state.isValid.lastname),
                        onChange: this.handleChange
                    }),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.errorMessage.lastname
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { check: true },
                    _react2.default.createElement(
                        _reactstrap.Label,
                        null,
                        'Email'
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'text',
                        name: 'email',
                        value: this.state.email,
                        className: this._getInputStyleName(this.state.isValid.email),
                        onChange: this.handleChange
                    }),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.errorMessage.email
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { check: true },
                    _react2.default.createElement(
                        _reactstrap.Label,
                        null,
                        'Enter Password'
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'password',
                        name: 'password1',
                        value: this.state.password1,
                        className: this._getInputStyleName(this.state.isValid.password1),
                        onChange: this.handleChange
                    }),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.errorMessage.password1
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { check: true },
                    _react2.default.createElement(
                        _reactstrap.Label,
                        null,
                        'Confirm Password'
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'password',
                        name: 'password2',
                        value: this.state.password2,
                        className: this._getInputStyleName(this.state.isValid.password2),
                        onChange: this.handleChange
                    }),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.errorMessage.password2
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Button,
                    { type: 'submit', value: 'Submit', onClick: this.handleSaveClick },
                    'Submit'
                )
            );
        }
    }]);

    return SignUpForm;
}(_react2.default.Component);

;

SignUpForm.contextTypes = {
    router: _propTypes2.default.object.isRequired
};

exports.default = SignUpForm;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(108);

var _propTypes = __webpack_require__(19);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LogInForm = __webpack_require__(15);

var _LogInForm2 = _interopRequireDefault(_LogInForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var LogInPage = function (_React$Component) {
    _inherits(LogInPage, _React$Component);

    function LogInPage(props) {
        _classCallCheck(this, LogInPage);

        return _possibleConstructorReturn(this, (LogInPage.__proto__ || Object.getPrototypeOf(LogInPage)).call(this, props));
    }

    _createClass(LogInPage, [{
        key: 'render',
        value: function render() {

            var loggedIn = this.props.user.isLoggedIn;
            var Router = this.context.router;

            if (loggedIn) {
                setTimeout(function () {
                    Router.push('/');
                }, 0);
            }

            return _react2.default.createElement(
                'div',
                { className: 'admin' },
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Login'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'admin-content' },
                    _react2.default.createElement(_LogInForm2.default, {
                        loading: this.props.loading.login,
                        error: this.props.error })
                )
            );
        }
    }]);

    return LogInPage;
}(_react2.default.Component);

exports.default = LogInPage;


LogInPage.contextTypes = {
    router: _propTypes2.default.object.isRequired
};

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FacebookButton = function (_React$Component) {
    _inherits(FacebookButton, _React$Component);

    function FacebookButton() {
        _classCallCheck(this, FacebookButton);

        return _possibleConstructorReturn(this, (FacebookButton.__proto__ || Object.getPrototypeOf(FacebookButton)).apply(this, arguments));
    }

    _createClass(FacebookButton, [{
        key: 'openFBAuth',
        value: function openFBAuth() {
            var url = '/auth/facebook';
            var name = '_blank';
            var specs = 'width=600,height=400';
            window.open(url, name, specs);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'a',
                { className: 'facebookbutton', onClick: this.openFBAuth },
                _react2.default.createElement('i', { className: 'fa fa-facebook', 'aria-hidden': 'true' }),
                'Login with Facebook'
            );
        }
    }]);

    return FacebookButton;
}(_react2.default.Component);

exports.default = FacebookButton;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _myList = __webpack_require__(111);

var _myList2 = _interopRequireDefault(_myList);

var _LogInForm = __webpack_require__(15);

var _LogInForm2 = _interopRequireDefault(_LogInForm);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _reactRouter = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var MyListPage = function (_React$Component) {
    _inherits(MyListPage, _React$Component);

    function MyListPage(props) {
        _classCallCheck(this, MyListPage);

        return _possibleConstructorReturn(this, (MyListPage.__proto__ || Object.getPrototypeOf(MyListPage)).call(this, props));
    }

    _createClass(MyListPage, [{
        key: 'render',
        value: function render() {
            var myListRender = this.props.user.isLoggedIn ? _react2.default.createElement(_myList2.default, this.props) : _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'An intro paragraph about why you should register.'
                ),
                _react2.default.createElement(_LogInForm2.default, {
                    loading: this.props.loading.login,
                    error: this.props.error })
            );
            return _react2.default.createElement(
                'div',
                { className: 'myListwrap' },
                myListRender
            );
        }
    }]);

    return MyListPage;
}(_react2.default.Component);

exports.default = MyListPage;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactMapGl = __webpack_require__(14);

var _myListings = __webpack_require__(112);

var _myListings2 = _interopRequireDefault(_myListings);

var _myMap = __webpack_require__(45);

var _myMap2 = _interopRequireDefault(_myMap);

var _facebookShare = __webpack_require__(46);

var _facebookShare2 = _interopRequireDefault(_facebookShare);

var _reactReorder = __webpack_require__(44);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var async = __webpack_require__(47);
// Components


var d3 = __webpack_require__(41);

var MyList = function (_React$Component) {
    _inherits(MyList, _React$Component);

    function MyList(props) {
        _classCallCheck(this, MyList);

        var _this = _possibleConstructorReturn(this, (MyList.__proto__ || Object.getPrototypeOf(MyList)).call(this, props));

        _this.state = {
            listingHover: '',
            publicUrl: '',
            markers: [],
            viewport: {
                latitude: _this.props.center.lat,
                longitude: _this.props.center.lng,
                zoom: _this.props.zoom,
                mapboxApiAccessToken: _this.props.token,
                bearing: 0,
                pitch: 0,
                width: 0,
                height: 0
            }
        };

        _this.onReorder = _this.onReorder.bind(_this);
        _this._onHover = _this._onHover.bind(_this);
        _this._onLeave = _this._onLeave.bind(_this);
        _this.findCoord = _this.findCoord.bind(_this);
        _this._updateViewport = _this._updateViewport.bind(_this);
        _this._updateDimensions = _this._updateDimensions.bind(_this);
        _this.componentWillMount = _this.componentWillMount.bind(_this);
        _this.componentDidMount = _this.componentDidMount.bind(_this);
        return _this;
    }

    _createClass(MyList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            async.map(this.props.user.mylist, this.findCoord, function (err, results) {
                // results is now an array
                this.setState({
                    markers: results
                });
            }.bind(this));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            //Update state
            this.setState({
                publicUrl: window.location.href + '/' + this.props.user.slug
            });
            //Resize the map
            this._updateDimensions();
            window.addEventListener("resize", this._updateDimensions);
        }
    }, {
        key: '_updateDimensions',
        value: function _updateDimensions() {
            var viewport = _extends({}, this.state.viewport, {
                width: document.getElementsByClassName("mapWrap")[0].offsetWidth,
                height: document.getElementsByClassName("mapWrap")[0].offsetHeight
            });
            this.setState({
                viewport: viewport
            });
        }
    }, {
        key: '_onHover',
        value: function _onHover(listing) {
            var viewport = _extends({}, this.state.viewport, {
                longitude: listing.venue.coordinates.long,
                latitude: listing.venue.coordinates.lat,
                zoom: 14,
                transitionDuration: this.props.transitionDuration,
                transitionInterpolator: this.props.transitionInterpolator,
                transitionEasing: this.props.transitionEasing
                //Find the right marker
            });this.setState({
                viewport: viewport,
                listingHover: listing._id
            });
        }
    }, {
        key: '_onLeave',
        value: function _onLeave() {
            // Create variable to change property
            var viewport = _extends({}, this.state.viewport, {
                longitude: this.props.center.lng,
                latitude: this.props.center.lat,
                zoom: this.props.zoom,
                transitionDuration: this.props.transitionDuration,
                transitionInterpolator: this.props.transitionInterpolator,
                transitionEasing: this.props.transitionEasing

                //Reset markers
            });this.setState({
                viewport: viewport,
                listingHover: ''
            });
        }
    }, {
        key: 'onReorder',
        value: function onReorder(event, fromIndex, toIndex, fromId, toId) {
            var newOrder = (0, _reactReorder.reorder)(this.props.user.mylist, fromIndex, toIndex);
            _AuthActions2.default.reorderMyList(newOrder);
            this.setState({
                markers: newOrder
            });
        }
    }, {
        key: 'findCoord',
        value: function findCoord(listing, done) {
            if (listing.venue !== null && _typeof(listing.venue) === 'object') {
                //If venue is an object
                if (!listing.venue.coordinates && listing.venue.address) {
                    // Get coordinates
                    var fullAddress = listing.venue.address + ' ' + listing.venue.city;
                    client.geocodeForward(fullAddress, {}).then(function (res) {
                        var newCoords = {
                            lat: res.entity.features[0].center[1],
                            long: res.entity.features[0].center[0]
                        };
                        listing.venue.coordinates = newCoords;
                        //Save the coordinates in the database for next time
                        _ListActions2.default.updateVenue(listing.venue);
                        console.log(listing);
                        //Callback function
                        done({}, listing);
                    }).catch(function (err) {
                        console.log('Geocodding error: ', err);
                    });
                } else {
                    //Callback function
                    done({}, listing);
                }
            }
        }
    }, {
        key: '_updateViewport',
        value: function _updateViewport(v) {
            this.setState({
                viewport: v
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'myList' },
                _react2.default.createElement(
                    'div',
                    { className: 'listInfo cf' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'My List'
                    ),
                    _react2.default.createElement(
                        'a',
                        { target: '_blank', href: window.location.href + '/' + this.props.user.slug },
                        'Public page'
                    ),
                    _react2.default.createElement(_facebookShare2.default, { url: this.state.publicUrl }),
                    this.props.user.mylist && this.props.user.mylist.length > 0 ? _react2.default.createElement(_myListings2.default, {
                        user: this.props.user,
                        view: this.props.view,
                        onHover: this._onHover,
                        onLeave: this._onLeave,
                        onReorder: this.onReorder,
                        listingHover: this.state.listingHover }) : _react2.default.createElement(
                        'div',
                        { className: 'popupList' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'h2',
                                null,
                                'You don\'t have any show in your list yet!'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Add some listings to your list to enjoy this page.'
                            ),
                            _react2.default.createElement(
                                _reactstrap.Button,
                                { href: '/current' },
                                'Explore all shows'
                            )
                        )
                    )
                ),
                _react2.default.createElement(_myMap2.default, {
                    markers: this.state.markers,
                    viewport: this.state.viewport,
                    updateViewport: this._updateViewport,
                    listingHover: this.state.listingHover,
                    onHover: this._onHover,
                    onLeave: this._onLeave
                })
            );
        }
    }]);

    return MyList;
}(_react2.default.Component);

exports.default = MyList;


MyList.defaultProps = {
    center: { lat: 40.7238556, lng: -73.9221523 },
    zoom: 11,
    token: process.env.MapboxAccessToken,
    transitionDuration: 1000,
    transitionInterpolator: new _reactMapGl.FlyToInterpolator(),
    transitionEasing: d3.easeCubic
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _listing = __webpack_require__(5);

var _listing2 = _interopRequireDefault(_listing);

var _reactReorder = __webpack_require__(44);

var _reactReorder2 = _interopRequireDefault(_reactReorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Components


var MyListings = function (_React$Component) {
    _inherits(MyListings, _React$Component);

    function MyListings(props) {
        _classCallCheck(this, MyListings);

        return _possibleConstructorReturn(this, (MyListings.__proto__ || Object.getPrototypeOf(MyListings)).call(this, props));
    }

    _createClass(MyListings, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: this.props.view + " listingsWrap" },
                _react2.default.createElement(
                    _reactReorder2.default,
                    {
                        reorderId: 'my-list',
                        draggedClassName: 'dragged',
                        lock: 'horizontal',
                        holdTime: 10,
                        disabled: false,
                        onReorder: this.props.onReorder.bind(this)
                    },
                    this.props.user.mylist.map(function (listing, index) {
                        return _react2.default.createElement(
                            'div',
                            {
                                key: listing._id,
                                className: listing._id == _this2.props.listingHover && 'active',
                                onMouseEnter: _this2.props.onHover.bind(_this2, listing),
                                onMouseLeave: _this2.props.onLeave.bind(_this2, listing)
                            },
                            _react2.default.createElement(_listing2.default, {
                                listing: listing, number: index + 1,
                                user: _this2.props.user, mylisting: true })
                        );
                    })
                )
            );
        }
    }]);

    return MyListings;
}(_react2.default.Component);

exports.default = MyListings;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Marker = function (_React$Component) {
    _inherits(Marker, _React$Component);

    function Marker(props) {
        _classCallCheck(this, Marker);

        return _possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).call(this, props));
    }

    _createClass(Marker, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "marker", "data-id": this.props.listing._id },
                this.props.num
            );
        }
    }]);

    return Marker;
}(_react2.default.Component);

exports.default = Marker;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _userList = __webpack_require__(115);

var _userList2 = _interopRequireDefault(_userList);

var _LogInForm = __webpack_require__(15);

var _LogInForm2 = _interopRequireDefault(_LogInForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var MyListPage = function (_React$Component) {
    _inherits(MyListPage, _React$Component);

    function MyListPage(props) {
        _classCallCheck(this, MyListPage);

        return _possibleConstructorReturn(this, (MyListPage.__proto__ || Object.getPrototypeOf(MyListPage)).call(this, props));
    }

    _createClass(MyListPage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _AuthActions2.default.getUserMylist(this.props.params.slug);
        }
    }, {
        key: 'render',
        value: function render() {
            var myListRender = this.props.currentUser.mylist ? _react2.default.createElement(_userList2.default, _extends({}, this.props, { user: this.props.currentUser })) : _react2.default.createElement(
                'div',
                null,
                'No such user.'
            );
            return _react2.default.createElement(
                'div',
                { className: 'myListwrap' },
                myListRender
            );
        }
    }]);

    return MyListPage;
}(_react2.default.Component);

exports.default = MyListPage;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactMapGl = __webpack_require__(14);

var _userListings = __webpack_require__(116);

var _userListings2 = _interopRequireDefault(_userListings);

var _myMap = __webpack_require__(45);

var _myMap2 = _interopRequireDefault(_myMap);

var _facebookShare = __webpack_require__(46);

var _facebookShare2 = _interopRequireDefault(_facebookShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var async = __webpack_require__(47);
// Components

var UserList = function (_React$Component) {
    _inherits(UserList, _React$Component);

    function UserList(props) {
        _classCallCheck(this, UserList);

        var _this = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, props));

        _this.state = {
            listingHover: '',
            url: '',
            markers: [],
            viewport: {
                latitude: _this.props.center.lat,
                longitude: _this.props.center.lng,
                zoom: _this.props.zoom,
                mapboxApiAccessToken: _this.props.token,
                bearing: 0,
                pitch: 0,
                width: 0,
                height: 500
            }
        };

        _this._goToViewport = _this._goToViewport.bind(_this);
        _this.findCoord = _this.findCoord.bind(_this);
        _this.onHover = _this.onHover.bind(_this);
        _this.onLeave = _this.onLeave.bind(_this);
        _this.updateViewport = _this.updateViewport.bind(_this);
        _this.componentWillMount = _this.componentWillMount.bind(_this);
        _this.componentDidMount = _this.componentDidMount.bind(_this);
        return _this;
    }

    _createClass(UserList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            async.map(this.props.user.mylist, this.findCoord, function (err, results) {
                // results is now an array
                this.setState({
                    markers: results
                });
            }.bind(this));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Create variable to change property
            var newViewport = this.state.viewport;
            newViewport.width = _reactDom2.default.findDOMNode(this).offsetWidth / 2;
            //Update state
            this.setState({
                viewport: newViewport,
                url: window.location.href
            });
        }
    }, {
        key: 'onHover',
        value: function onHover(listing) {
            this._goToViewport(listing.venue.coordinates.lat, listing.venue.coordinates.long);
            //Find the right marker
            this.setState({
                listingHover: listing._id
            });
        }
    }, {
        key: 'onLeave',
        value: function onLeave() {
            // Create variable to change property
            var newViewport = this.state.viewport;
            newViewport.lat = this.props.center.lat;
            newViewport.lng = this.props.center.lng;
            newViewport.zoom = this.props.zoom;
            //Reset markers
            this.setState({
                listingHover: '',
                viewport: newViewport
            });
        }
    }, {
        key: 'findCoord',
        value: function findCoord(listing, done) {
            if (listing.venue !== null && _typeof(listing.venue) === 'object') {
                //If venue is an object
                if (!listing.venue.coordinates && listing.venue.address) {
                    // Get coordinates
                    var fullAddress = listing.venue.address + ' ' + listing.venue.city;
                    client.geocodeForward(fullAddress, {}).then(function (res) {
                        var newCoords = {
                            lat: res.entity.features[0].center[1],
                            long: res.entity.features[0].center[0]
                        };
                        listing.venue.coordinates = newCoords;
                        //Save the coordinates in the database for next time
                        _ListActions2.default.updateVenue(listing.venue);
                        console.log(listing);
                        //Callback function
                        done({}, listing);
                    }).catch(function (err) {
                        console.log('Geocodding error: ', err);
                    });
                } else {
                    //Callback function
                    done({}, listing);
                }
            }
        }
    }, {
        key: '_goToViewport',
        value: function _goToViewport(latitude, longitude) {
            this.updateViewport({
                longitude: longitude,
                latitude: latitude,
                zoom: 14,
                width: this.state.viewport.width,
                height: this.state.viewport.height,
                transitionInterpolator: _reactMapGl.experimental.viewportFlyToInterpolator,
                transitionDuration: 3000
            });
        }
    }, {
        key: 'updateViewport',
        value: function updateViewport(v) {
            this.setState({
                viewport: v
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var fullURL = '';
            var hasAvatar = false;

            if (this.props.user.avatar) {
                hasAvatar = true;
                fullURL = "https://res.cloudinary.com/artcritical/image/upload/" + this.props.user.avatar + ".jpg";
            } else if (this.props.user.facebook) {
                hasAvatar = true;
                fullURL = "https://graph.facebook.com/" + this.props.user.facebook.id + "/picture?type=large";
            }

            var name = this.props.user.lastname ? this.props.user.firstname + " " + this.props.user.lastname : this.props.user.firstname;

            return _react2.default.createElement(
                'div',
                { className: 'myList' },
                _react2.default.createElement(
                    'div',
                    { className: 'listInfo cf' },
                    hasAvatar && _react2.default.createElement('img', { className: 'avatar', src: fullURL }),
                    _react2.default.createElement(
                        'h2',
                        null,
                        name,
                        '\'s List'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'bio' },
                        this.props.user.bio
                    ),
                    this.props.user.website && _react2.default.createElement(
                        'a',
                        { className: 'button',
                            href: this.props.user.website,
                            target: '_blank' },
                        'Website'
                    ),
                    _react2.default.createElement(_facebookShare2.default, { url: this.state.url })
                ),
                _react2.default.createElement(_myMap2.default, {
                    markers: this.state.markers,
                    viewport: this.state.viewport,
                    updateViewport: this.updateViewport,
                    listingHover: this.state.listingHover,
                    onHover: this.onHover,
                    onLeave: this.onLeave
                }),
                this.props.user.mylist ? _react2.default.createElement(_userListings2.default, {
                    user: this.props.user,
                    view: this.props.view,
                    listingHover: this.state.listingHover,
                    onHover: this.onHover,
                    onLeave: this.onLeave
                }) : null
            );
        }
    }]);

    return UserList;
}(_react2.default.Component);

exports.default = UserList;


UserList.defaultProps = {
    center: { lat: 40.7238556, lng: -73.9221523 },
    zoom: 11,
    token: process.env.MapboxAccessToken
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _listing = __webpack_require__(5);

var _listing2 = _interopRequireDefault(_listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Components


//

var UserListings = function (_React$Component) {
    _inherits(UserListings, _React$Component);

    function UserListings(props) {
        _classCallCheck(this, UserListings);

        return _possibleConstructorReturn(this, (UserListings.__proto__ || Object.getPrototypeOf(UserListings)).call(this, props));
    }

    _createClass(UserListings, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: this.props.view + " listingsWrap" },
                this.props.user.mylist.map(function (listing, index) {
                    return _react2.default.createElement(
                        'div',
                        { key: listing._id,
                            className: listing._id == _this2.props.listingHover && 'active',
                            onMouseEnter: _this2.props.onHover.bind(_this2, listing),
                            onMouseLeave: _this2.props.onLeave.bind(_this2, listing)
                        },
                        _react2.default.createElement(_listing2.default, { listing: listing,
                            number: index + 1,
                            user: _this2.props.user,
                            'public': true })
                    );
                })
            );
        }
    }]);

    return UserListings;
}(_react2.default.Component);

exports.default = UserListings;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthSuccess = function (_Component) {
  _inherits(AuthSuccess, _Component);

  function AuthSuccess() {
    _classCallCheck(this, AuthSuccess);

    return _possibleConstructorReturn(this, (AuthSuccess.__proto__ || Object.getPrototypeOf(AuthSuccess)).apply(this, arguments));
  }

  _createClass(AuthSuccess, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var url = '/mylist';
      window.opener.open(url, '_self');
      window.opener.focus();
      window.close();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'AUTH SUCCESS!'
      );
    }
  }]);

  return AuthSuccess;
}(_react.Component);

exports.default = AuthSuccess;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _LogInForm = __webpack_require__(15);

var _LogInForm2 = _interopRequireDefault(_LogInForm);

var _UserPage = __webpack_require__(119);

var _UserPage2 = _interopRequireDefault(_UserPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Components


// import UserPanel from '../'


var AdminPage = function (_React$Component) {
    _inherits(AdminPage, _React$Component);

    function AdminPage() {
        _classCallCheck(this, AdminPage);

        return _possibleConstructorReturn(this, (AdminPage.__proto__ || Object.getPrototypeOf(AdminPage)).apply(this, arguments));
    }

    _createClass(AdminPage, [{
        key: 'render',
        value: function render() {

            var superAdmin = 3;
            var admin = 2;
            var editor = 1;
            var subscriber = 0;

            var adminRender = this.props.user.isLoggedIn && this.props.user.userAccess >= 2 ? _react2.default.createElement(
                'nav',
                null,
                _react2.default.createElement(
                    _reactRouter.IndexLink,
                    { to: '/admin', activeClassName: 'active' },
                    'Listings'
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/admin/venues', activeClassName: 'active' },
                    'Venues'
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/admin/venuesadmin', activeClassName: 'active' },
                    'Overview'
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/admin/featured', activeClassName: 'active' },
                    'Featured Calendar'
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/admin/users', activeClassName: 'active' },
                    'User Admin'
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/admin/review', activeClassName: 'active' },
                    'Review Events'
                )
            ) : this.props.user.isLoggedIn && this.props.user.userAccess === editor ? _react2.default.createElement(
                'nav',
                null,
                _react2.default.createElement(
                    _reactRouter.IndexLink,
                    { to: '/admin', activeClassName: 'active' },
                    'Listings'
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/admin/venues', activeClassName: 'active' },
                    'Venues'
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/admin/venuesadmin', activeClassName: 'active' },
                    'Overview'
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/admin/featured', activeClassName: 'active' },
                    'Featured Calendar'
                )
            ) : _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Admin'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'You do not have the necessary privileges to access this page.'
                    ),
                    _react2.default.createElement(_LogInForm2.default, {
                        loading: this.props.loading.login,
                        error: this.props.error })
                )
            );

            return _react2.default.createElement(
                'div',
                { className: 'admin cf' },
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Account page'
                    ),
                    adminRender
                ),
                this.props.user.isLoggedIn && this.props.user.userAccess > 0 && _react2.default.createElement(
                    'div',
                    { className: 'admin-content' },
                    _react2.default.cloneElement(this.props.children, this.props)
                )
            );
        }
    }]);

    return AdminPage;
}(_react2.default.Component);

exports.default = AdminPage;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserPage = function (_React$Component) {
	_inherits(UserPage, _React$Component);

	function UserPage() {
		_classCallCheck(this, UserPage);

		return _possibleConstructorReturn(this, (UserPage.__proto__ || Object.getPrototypeOf(UserPage)).apply(this, arguments));
	}

	_createClass(UserPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'h1',
				null,
				'User Page'
			);
		}
	}]);

	return UserPage;
}(_react2.default.Component);

exports.default = UserPage;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _ListingForm = __webpack_require__(24);

var _ListingForm2 = _interopRequireDefault(_ListingForm);

var _listing = __webpack_require__(5);

var _listing2 = _interopRequireDefault(_listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var NewListing = function (_React$Component) {
    _inherits(NewListing, _React$Component);

    function NewListing(props) {
        _classCallCheck(this, NewListing);

        var _this = _possibleConstructorReturn(this, (NewListing.__proto__ || Object.getPrototypeOf(NewListing)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(NewListing, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ListActions2.default.listingEditReset();
        }

        // Add the listing to the database

    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var newListing = _extends({}, listingEdit, {
                venue: this.props.listingEdit.venue._id,
                neighborhood: this.props.listingEdit.venue.neighborhood
            });
            _ListActions2.default.saveListing(newListing);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'new' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'New Event'
                    ),
                    _react2.default.createElement(_ListingForm2.default, _extends({}, this.props.listingEdit, {
                        handleSubmit: this.handleSubmit,
                        error: this.props.error.savelisting,
                        loading: this.props.loading.savelisting,
                        success: this.props.success.savelisting })),
                    _react2.default.createElement(
                        'div',
                        { id: 'newlistingDemo' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'Listing Preview'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'medium listingsWrap' },
                            _react2.default.createElement(_listing2.default, { listing: this.props.listingEdit, user: '' })
                        )
                    )
                )
            );
        }
    }]);

    return NewListing;
}(_react2.default.Component);

exports.default = NewListing;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(8);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _listing = __webpack_require__(5);

var _listing2 = _interopRequireDefault(_listing);

var _formSelect = __webpack_require__(20);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _ListingForm = __webpack_require__(24);

var _ListingForm2 = _interopRequireDefault(_ListingForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var ListingEdit = function (_React$Component) {
    _inherits(ListingEdit, _React$Component);

    function ListingEdit(props) {
        _classCallCheck(this, ListingEdit);

        var _this = _possibleConstructorReturn(this, (ListingEdit.__proto__ || Object.getPrototypeOf(ListingEdit)).call(this, props));

        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        return _this;
    }

    _createClass(ListingEdit, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ListActions2.default.listingEditReset();
        }
    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            if (data) {
                if (data.label == data.value) {
                    //New Listing
                    _ListActions2.default.listingInfoChange({ target: {
                            name: 'name',
                            value: data.value
                        } });
                } else {
                    //Fetch all the venue info
                    _ListActions2.default.getListingInfo(data.value);
                }
            } else {
                //Reset
                _ListActions2.default.listingEditReset();
            }
        }
    }, {
        key: 'render',
        value: function render() {

            //how to get option for select element
            var getOptions = function getOptions(input) {
                if (input) {
                    return fetch('/list/find/' + input).then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        return { options: json };
                    });
                } else {
                    return Promise.resolve({ options: [] });
                }
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    'Edit Listing'
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'ListingList' },
                    _react2.default.createElement(_formSelect2.default, { value: {
                            value: this.props.listingEdit._id,
                            label: this.props.listingEdit.name },
                        handleSelectChange: this.handleSelectChange,
                        getOptions: getOptions
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'ListingInfo' },
                    _react2.default.createElement(
                        'div',
                        { className: 'medium' },
                        _react2.default.createElement(_listing2.default, { listing: this.props.listingEdit, user: '' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'listingForm' },
                    _react2.default.createElement(_ListingForm2.default, {
                        listing: this.props.listingEdit,
                        error: this.props.error.updatelisting,
                        loading: this.props.loading.updatelisting,
                        success: this.props.success })
                )
            );
        }
    }]);

    return ListingEdit;
}(_react2.default.Component);

exports.default = ListingEdit;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(8);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _listing = __webpack_require__(5);

var _listing2 = _interopRequireDefault(_listing);

var _formSelect = __webpack_require__(20);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _VenueForm = __webpack_require__(123);

var _VenueForm2 = _interopRequireDefault(_VenueForm);

var _mapBlock = __webpack_require__(42);

var _mapBlock2 = _interopRequireDefault(_mapBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var VenueEdit = function (_React$Component) {
    _inherits(VenueEdit, _React$Component);

    function VenueEdit(props) {
        _classCallCheck(this, VenueEdit);

        var _this = _possibleConstructorReturn(this, (VenueEdit.__proto__ || Object.getPrototypeOf(VenueEdit)).call(this, props));

        _this.state = {
            formDisplay: false
        };

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        _this.handleDelete = _this.handleDelete.bind(_this);
        return _this;
    }

    _createClass(VenueEdit, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ListActions2.default.venueEditReset();
        }

        // Add the listing to the database

    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            if (this.props.venueEdit._id) {
                _ListActions2.default.updateVenue(this.props.venueEdit);
            } else {
                var newVenue = this.props.venueEdit;
                delete newVenue._id;
                _ListActions2.default.saveVenue(newVenue);
            }
            this.setState({
                formDisplay: false
            });
        }

        //Delete the listing

    }, {
        key: 'handleDelete',
        value: function handleDelete() {
            _ListActions2.default.deleteVenue(this.props.venueEdit._id);
            //Reset the form
            _ListActions2.default.venueEditReset();
            this.setState({
                formDisplay: false
            });
        }
    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            if (data) {
                this.setState({
                    formDisplay: true
                });
                if (data.label == data.value) {
                    console.log('New Venue');
                    //New Venue
                    _ListActions2.default.venueInfoChange({
                        name: 'name',
                        value: data.value
                    });
                } else {
                    //Update venue
                    _ListActions2.default.getVenueInfo(data.value);
                }
            } else {
                // If the reset form button is pressed
                _ListActions2.default.venueEditReset();
                this.setState({
                    formDisplay: false
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            //Get option for select element
            var getOptions = function getOptions(input) {
                if (input) {
                    return fetch('/venues/find/' + input).then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        return { options: json };
                    });
                } else {
                    return Promise.resolve({ options: [] });
                }
            };

            return _react2.default.createElement(
                'div',
                { className: 'editVenue cf' },
                _react2.default.createElement(
                    'h3',
                    null,
                    'Edit Venue'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'd-1of2' },
                    _react2.default.createElement(
                        'div',
                        { className: 'venueList' },
                        _react2.default.createElement(
                            'form',
                            { onSubmit: this.handleSubmit },
                            _react2.default.createElement(_formSelect2.default, {
                                value: { value: this.props.venueEdit._id, label: this.props.venueEdit.name },
                                handleSelectChange: this.handleSelectChange,
                                getOptions: getOptions })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'listingForm' },
                        this.state.formDisplay && _react2.default.createElement(_VenueForm2.default, _extends({}, this.props.venueEdit, {
                            handleSubmit: this.handleSubmit,
                            handleDelete: this.handleDelete,
                            newVenue: this.props._id == '' || this.props._id == null && this.props.name !== '',
                            error: this.props.error.updatevenue,
                            loading: this.props.loading.updatevenue || this.props.loading.deletevenue,
                            success: this.props.success }))
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'd-1of2' },
                    _react2.default.createElement(_mapBlock2.default, this.props.venueEdit)
                )
            );
        }
    }]);

    return VenueEdit;
}(_react2.default.Component);

exports.default = VenueEdit;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactstrap = __webpack_require__(4);

var _DateBlock = __webpack_require__(6);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _NeighborhoodSelect = __webpack_require__(48);

var _NeighborhoodSelect2 = _interopRequireDefault(_NeighborhoodSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var MapboxClient = __webpack_require__(124);
var client = new MapboxClient(process.env.MapboxAccessToken);

var VenueForm = function (_React$Component) {
    _inherits(VenueForm, _React$Component);

    function VenueForm(props) {
        _classCallCheck(this, VenueForm);

        var _this = _possibleConstructorReturn(this, (VenueForm.__proto__ || Object.getPrototypeOf(VenueForm)).call(this, props));

        _this.state = {
            fullAdress: null
        };

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(VenueForm, [{
        key: 'handleChange',
        value: function handleChange(event) {
            //Update values of inputs
            _ListActions2.default.venueInfoChange(event.target);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            //Define the full address
            this.props.address ? this.setState({
                fullAdress: this.props.address + ' ' + this.props.city + ', ' + this.props.state + ' ' + this.props.zipcode
            }) : null;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            var nextFullAdress = nextProps.address ? nextProps.address + ' ' + nextProps.city + ', ' + nextProps.state + ' ' + nextProps.zipcode : null;
            if (nextFullAdress !== this.state.fullAdress && nextFullAdress !== null) {

                this.setState({
                    fullAdress: nextFullAdress
                });
                this.calculateCoords(nextFullAdress);
            }
        }
    }, {
        key: 'calculateCoords',
        value: function calculateCoords(fullAdress) {
            client.geocodeForward(fullAdress, function (err, data, res) {
                if (data.features[0]) {
                    var newCoords = data.features[0].center;
                    _ListActions2.default.coordinatesChange(newCoords);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var coordinates = this.props.coordinates || {};

            if (this.state.fullAdress && !coordinates) {
                this.calculateCoords(this.state.fullAdress);
            }

            return _react2.default.createElement(
                'div',
                { id: 'venueForm' },
                _react2.default.createElement(
                    _reactstrap.Form,
                    null,
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Name'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { name: 'name', placeholder: 'Name', type: 'text', value: this.props.name, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Slug'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { disabled: true, name: 'slug', type: 'text', value: this.props.slug, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Address'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { name: 'address', placeholder: 'Address', type: 'text', value: this.props.address, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'City'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { name: 'city', placeholder: 'City', type: 'text', value: this.props.city, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Neighborhood'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_NeighborhoodSelect2.default, { selected: this.props.neighborhood, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'State'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { name: 'state', placeholder: 'State', type: 'text', value: this.props.state, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Zipcode'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { name: 'zipcode', placeholder: 'Zipcode', type: 'number', value: this.props.zipcode, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Coordinates'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { name: 'lat', type: 'text', value: coordinates.lat, onChange: this.handleChange }),
                            _react2.default.createElement(_reactstrap.Input, { name: 'long', type: 'text', value: coordinates.long, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Website'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { name: 'website', placeholder: 'Website', type: 'text', value: this.props.website, onChange: this.handleChange })
                        )
                    ),
                    this.props.updated_by ? this.props.created_at === this.props.updated_at ? _react2.default.createElement(
                        'p',
                        null,
                        ' Created on ',
                        _react2.default.createElement(_DateBlock2.default, { date: this.props.updated_at }),
                        ' by ',
                        this.props.updated_by.name,
                        '.'
                    ) : _react2.default.createElement(
                        'p',
                        null,
                        ' Updated on ',
                        _react2.default.createElement(_DateBlock2.default, { date: this.props.updated_at }),
                        ' by ',
                        this.props.updated_by.name,
                        '.'
                    ) : '',
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Button,
                            { onClick: this.props.handleSubmit },
                            this.props._id ? 'Update' : 'Create'
                        ),
                        this.props.loading && _react2.default.createElement(
                            'div',
                            { className: 'loading' },
                            'loading'
                        ),
                        this.props.success.updatevenue && _react2.default.createElement(
                            'div',
                            { className: 'success' },
                            'Saved!'
                        ),
                        this.props.success.deleted && _react2.default.createElement(
                            'div',
                            { className: 'deleted' },
                            'Deleted!'
                        ),
                        this.props.error.general && _react2.default.createElement(
                            'div',
                            { className: 'error' },
                            this.props.error.general
                        ),
                        this.props.handleDelete && this.props._id ? _react2.default.createElement(
                            _reactstrap.Button,
                            { className: 'delete', onClick: this.props.handleDelete },
                            'Delete'
                        ) : null
                    )
                )
            );
        }
    }]);

    return VenueForm;
}(_react2.default.Component);

exports.default = VenueForm;

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("mapbox");

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactIntl = __webpack_require__(12);

var _featuredDay = __webpack_require__(126);

var _featuredDay2 = _interopRequireDefault(_featuredDay);

var _tabs = __webpack_require__(28);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var FeaturePage = function (_React$Component) {
    _inherits(FeaturePage, _React$Component);

    function FeaturePage(props) {
        _classCallCheck(this, FeaturePage);

        //Get the next 14 dates
        var _this = _possibleConstructorReturn(this, (FeaturePage.__proto__ || Object.getPrototypeOf(FeaturePage)).call(this, props));

        var dates = [];
        for (var i = 0; i < 14; i++) {
            var d = new Date();
            d.setHours(0, 0, 0, 0);
            d.setDate(d.getDate() + i);
            dates.push(d);
        }

        _this.state = {
            dates: dates
        };
        return _this;
    }

    _createClass(FeaturePage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _ListActions2.default.featureLoad(14);
        }
    }, {
        key: 'render',
        value: function render() {

            var days = [];

            for (var i = 0; i < 14; i++) {
                var label = _react2.default.createElement(
                    _reactIntl.IntlProvider,
                    { locale: 'en' },
                    _react2.default.createElement(_reactIntl.FormattedDate, { value: this.state.dates[i], weekday: 'long', day: 'numeric', month: 'short' })
                );
                days.push(_react2.default.createElement(_featuredDay2.default, { key: i, dayNumber: i, date: this.state.dates[i], user: this.props.user, feature: this.props.features[i] || {}, error: this.props.error.feature, label: label }));
            }

            return _react2.default.createElement(
                'div',
                { className: 'glance' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Featured Listings'
                ),
                _react2.default.createElement(
                    _tabs2.default,
                    null,
                    days
                )
            );
        }
    }]);

    return FeaturePage;
}(_react2.default.Component);

exports.default = FeaturePage;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(8);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _formSelect = __webpack_require__(20);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _featuredForm = __webpack_require__(127);

var _featuredForm2 = _interopRequireDefault(_featuredForm);

var _featureBlock = __webpack_require__(40);

var _featureBlock2 = _interopRequireDefault(_featureBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var FeaturedDay = function (_React$Component) {
    _inherits(FeaturedDay, _React$Component);

    function FeaturedDay(props) {
        _classCallCheck(this, FeaturedDay);

        var _this = _possibleConstructorReturn(this, (FeaturedDay.__proto__ || Object.getPrototypeOf(FeaturedDay)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(FeaturedDay, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ListActions2.default.featureReset();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}

        // Add the listing to the database

    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var id = this.props.feature._id || null;
            var newFeature = {
                _id: id,
                date: this.props.date,
                text: this.props.feature.text,
                list: this.props.feature.list._id,
                venue: this.props.feature.list.venue._id
            };
            var newThumbnail = {
                _id: this.props.feature.list._id,
                image: this.props.feature.list.image
            };
            _ListActions2.default.updateFeature(newFeature);
            _ListActions2.default.updateListing(newThumbnail, this.props.dayNumber);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            _ListActions2.default.featureInfoChange(event, this.props.dayNumber);
        }
    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            if (data.value) {
                //Fetch all the listing info
                _ListActions2.default.getListingInfo(data.value, this.props.dayNumber);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var list = this.props.feature.list ? this.props.feature.list : { name: '', _id: ''

                //how to get option for select element
            };var getOptions = function getOptions(input) {
                return fetch('/list/find/' + input).then(function (response) {
                    return response.json();
                }).then(function (json) {
                    return { options: json };
                });
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'column-2of3' },
                    _react2.default.createElement(_formSelect2.default, { value: { label: list.name, value: list._id }, handleSelectChange: this.handleSelectChange, getOptions: getOptions }),
                    _react2.default.createElement(_featuredForm2.default, _extends({}, this.props.feature, { number: this.props.dayNumber, handleChange: this.handleChange, handleSubmit: this.handleSubmit }))
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'column-1of3' },
                    this.props.feature.list ? _react2.default.createElement(_featureBlock2.default, { feature: this.props.feature, user: this.props.user }) : this.props.error
                )
            );
        }
    }]);

    return FeaturedDay;
}(_react2.default.Component);

exports.default = FeaturedDay;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactToggleButton = __webpack_require__(25);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _ThumbnailInput = __webpack_require__(36);

var _ThumbnailInput2 = _interopRequireDefault(_ThumbnailInput);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var ListingForm = function (_React$Component) {
    _inherits(ListingForm, _React$Component);

    function ListingForm(props) {
        _classCallCheck(this, ListingForm);

        return _possibleConstructorReturn(this, (ListingForm.__proto__ || Object.getPrototypeOf(ListingForm)).call(this, props));
    }

    _createClass(ListingForm, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'featuredForm' },
                _react2.default.createElement(
                    _reactstrap.Form,
                    null,
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Thumbnail'
                        ),
                        _react2.default.createElement(_ThumbnailInput2.default, { image: this.props.list && this.props.list.image, number: this.props.number })
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Description'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement('textarea', { name: 'text', type: 'text', value: this.props.text, onChange: this.props.handleChange })
                        )
                    )
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.props.handleSubmit },
                    'Submit'
                )
            );
        }
    }]);

    return ListingForm;
}(_react2.default.Component);

exports.default = ListingForm;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _displayActions = __webpack_require__(8);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _VenueItem = __webpack_require__(129);

var _VenueItem2 = _interopRequireDefault(_VenueItem);

var _NeighborhoodSelect = __webpack_require__(48);

var _NeighborhoodSelect2 = _interopRequireDefault(_NeighborhoodSelect);

var _loading = __webpack_require__(13);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Components


var VenuesPage = function (_React$Component) {
    _inherits(VenuesPage, _React$Component);

    function VenuesPage(props) {
        _classCallCheck(this, VenuesPage);

        var _this = _possibleConstructorReturn(this, (VenuesPage.__proto__ || Object.getPrototypeOf(VenuesPage)).call(this, props));

        _this.state = {
            venueAdminNeighborhood: ''
        };

        _this.onSelectChange = _this.onSelectChange.bind(_this);
        return _this;
    }

    _createClass(VenuesPage, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ListActions2.default.adminReset();
        }
    }, {
        key: 'onSelectChange',
        value: function onSelectChange(event) {
            this.setState({
                venueAdminNeighborhood: event.target.value
            });

            _ListActions2.default.getVenuesAdmin(event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var secondaryNH = '';
            var newSecondaryNH = '';
            var renderExport = [];
            var title = '';
            var num = this.props.allVenues.length - 1;

            var neighborhood = function neighborhood(name) {
                return _react2.default.createElement(
                    'h2',
                    null,
                    name
                );
            };

            var theVenuesRender = function theVenuesRender(venues) {
                return venues.map(function (venue, index) {

                    var result = _react2.default.createElement(_VenueItem2.default, _extends({ key: venue._id }, venue));

                    newSecondaryNH = venue.neighborhood;

                    if (newSecondaryNH !== secondaryNH) {

                        //Add the result to the next export and reset the render
                        var contentRender = _react2.default.createElement(
                            'div',
                            { key: index, className: 'neighborhood' },
                            renderExport
                        );
                        var newExport = [title, contentRender];
                        renderExport = [];

                        // Update neighborhood
                        secondaryNH = newSecondaryNH;
                        newSecondaryNH = _displayActions2.default.displayNeighborhood(secondaryNH);
                        title = neighborhood(newSecondaryNH);
                        renderExport.push(result);

                        // Export the last neighborhood
                        return newExport;
                    }

                    renderExport.push(result);
                    if (num == index) {
                        var contentRender = _react2.default.createElement(
                            'div',
                            { key: index, className: 'neighborhood' },
                            renderExport
                        );
                        var newExport = [title, contentRender];
                        return newExport;
                    }
                    return true;
                });
            };

            return _react2.default.createElement(
                'div',
                { className: 'venuesWrap' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Venues'
                ),
                _react2.default.createElement(_NeighborhoodSelect2.default, {
                    selected: this.state.venueAdminNeighborhood,
                    onChange: this.onSelectChange
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'allVenues' },
                    this.props.loading.allVenues && _react2.default.createElement(_loading2.default, null),
                    theVenuesRender(this.props.allVenues)
                )
            );
        }
    }]);

    return VenuesPage;
}(_react2.default.Component);

exports.default = VenuesPage;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _DateBlock = __webpack_require__(6);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


//Find today's date
var today = new Date();
today.setHours(0, 0, 0, 0);

var VenueItem = function (_React$Component) {
    _inherits(VenueItem, _React$Component);

    function VenueItem(props) {
        _classCallCheck(this, VenueItem);

        var _this = _possibleConstructorReturn(this, (VenueItem.__proto__ || Object.getPrototypeOf(VenueItem)).call(this, props));

        _this.state = {
            expired: true,
            soon: false,
            archived: false,
            old: false,
            upcoming: false,
            currentListings: [],
            expiredDate: '',
            nextDate: ''
        };

        _this.componentDidMount = _this.componentDidMount.bind(_this);
        return _this;
    }

    _createClass(VenueItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //Check if it has been used recently
            this.props.listings ? this.props.listings.length == 0 && this.setState({ old: true }) : this.setState({ old: true });
            //Check if it has a current listing
            if (!this.state.old && this.props.listings) {
                this.props.listings.map(function (listing) {

                    var listingStart = new Date(listing.start);
                    var listingEnd = new Date(listing.end);

                    if (listingEnd > today && listingStart < today) {
                        this.setState({
                            currentListings: this.state.currentListings.concat(listing)
                        });
                        this.setState({
                            expired: false
                        });
                    }
                    if (listingStart > today) {
                        this.setState({
                            upcoming: true
                        });
                        if (!this.state.nextDate || this.state.nextDate < listingStart) {
                            this.setState({
                                nextDate: listingStart
                            });
                        }
                    }
                }, this);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var classNames = ['venue'];
            this.state.old && classNames.push('old');
            this.state.expired && classNames.push('expired');
            this.state.upcoming && classNames.push('upcoming');

            var currentListings = function currentListings(listings) {
                return listings.map(function (listing, index) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'venueListing', key: 'index' },
                        listing.name,
                        ' - Expires ',
                        _react2.default.createElement(_DateBlock2.default, { date: listing.end })
                    );
                });
            };

            return _react2.default.createElement(
                'div',
                { className: classNames.join(' '), id: this.props._id },
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: "/venue/" + this.props.slug },
                    this.props.name
                ),
                currentListings(this.state.currentListings),
                this.state.nextDate && _react2.default.createElement(
                    'div',
                    null,
                    'Upcoming show: ',
                    _react2.default.createElement(_DateBlock2.default, { date: this.state.nextDate })
                )
            );
        }
    }]);

    return VenueItem;
}(_react2.default.Component);

exports.default = VenueItem;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _loading = __webpack_require__(13);

var _loading2 = _interopRequireDefault(_loading);

var _UserCard = __webpack_require__(131);

var _UserCard2 = _interopRequireDefault(_UserCard);

var _UserFullInfo = __webpack_require__(133);

var _UserFullInfo2 = _interopRequireDefault(_UserFullInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Components


var UsersPage = function (_React$Component) {
    _inherits(UsersPage, _React$Component);

    function UsersPage(props) {
        _classCallCheck(this, UsersPage);

        return _possibleConstructorReturn(this, (UsersPage.__proto__ || Object.getPrototypeOf(UsersPage)).call(this, props));
    }

    _createClass(UsersPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AuthActions2.default.getAllUsers();
        }
    }, {
        key: 'render',
        value: function render() {

            var usersRender = function usersRender(users) {
                return users.map(function (user, index) {
                    return _react2.default.createElement(_UserCard2.default, { key: index, index: index, user: user });
                });
            };

            console.log('Current User: ', this.props.user);

            return _react2.default.createElement(
                'div',
                { className: 'usersWrap' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Users'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'allUsers' },
                    this.props.loading.allUsers && _react2.default.createElement(_loading2.default, null),
                    usersRender(this.props.allUsers)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'allInfo' },
                    Object.keys(this.props.currentUser).length > 0 && _react2.default.createElement(_UserFullInfo2.default, { userCard: this.props.user })
                )
            );
        }
    }]);

    return UsersPage;
}(_react2.default.Component);

exports.default = UsersPage;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _imageBlock = __webpack_require__(27);

var _imageBlock2 = _interopRequireDefault(_imageBlock);

var _DateBlock = __webpack_require__(6);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _UserEdit = __webpack_require__(132);

var _UserEdit2 = _interopRequireDefault(_UserEdit);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var UserCard = function (_React$Component) {
    _inherits(UserCard, _React$Component);

    function UserCard(props) {
        _classCallCheck(this, UserCard);

        var _this = _possibleConstructorReturn(this, (UserCard.__proto__ || Object.getPrototypeOf(UserCard)).call(this, props));

        _this.state = { collapse: false };

        _this.saveChanges = _this.saveChanges.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.toggleForm = _this.toggleForm.bind(_this);
        return _this;
    }

    _createClass(UserCard, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)) {
                console.log(nextProps.user);
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            //Update values of inputs
            _AuthActions2.default.userInfoChange(event, this.props.index);
        }
    }, {
        key: 'saveChanges',
        value: function saveChanges(event) {
            event.preventDefault();
            _AuthActions2.default.updateUser(this.props.user);
        }
    }, {
        key: 'toggleForm',
        value: function toggleForm() {
            this.setState({ collapse: !this.state.collapse });
        }
    }, {
        key: 'render',
        value: function render() {

            var user = this.props.user;
            var userAccess = function userAccess(accessCode) {
                return {
                    3: 'Super Admin',
                    2: 'Admin',
                    1: 'Editor',
                    0: 'Subscriber'
                }[accessCode];
            };

            return _react2.default.createElement(
                'div',
                { className: 'user' },
                _react2.default.createElement(
                    'div',
                    { className: 'image' },
                    _react2.default.createElement(_imageBlock2.default, { image: user.avatar })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        user['firstname'] + ' ' + user['lastname']
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        user.local.username
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        userAccess([this.props.user.userAccess])
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                        _reactstrap.Button,
                        { color: 'primary', onClick: this.toggleForm },
                        this.state.collapse ? 'Close' : 'Edit'
                    ),
                    _react2.default.createElement(
                        _reactstrap.Collapse,
                        { isOpen: this.state.collapse },
                        _react2.default.createElement(_UserEdit2.default, {
                            user: user,
                            handleChange: this.handleChange,
                            saveChanges: this.saveChanges
                        })
                    )
                )
            );
        }
    }]);

    return UserCard;
}(_react2.default.Component);

exports.default = UserCard;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserEdit = function (_React$Component) {
	_inherits(UserEdit, _React$Component);

	function UserEdit(props) {
		_classCallCheck(this, UserEdit);

		return _possibleConstructorReturn(this, (UserEdit.__proto__ || Object.getPrototypeOf(UserEdit)).call(this, props));
	}

	_createClass(UserEdit, [{
		key: 'render',
		value: function render() {
			var user = this.props.user;
			return _react2.default.createElement(
				_reactstrap.Form,
				{ onSubmit: this.saveChanges },
				_react2.default.createElement(
					_reactstrap.Label,
					null,
					'First Name'
				),
				_react2.default.createElement(
					'div',
					{ className: 'formSection' },
					_react2.default.createElement(_reactstrap.Input, { name: 'firstname', placeholder: 'Your First Name', type: 'text', onChange: this.handleChange, value: user.firstname })
				),
				_react2.default.createElement(
					_reactstrap.Label,
					null,
					'Last Name'
				),
				_react2.default.createElement(
					'div',
					{ className: 'formSection' },
					_react2.default.createElement(_reactstrap.Input, { name: 'lastname', placeholder: 'Your Last Name', type: 'text', onChange: this.handleChange, value: user.lastname })
				),
				_react2.default.createElement(
					_reactstrap.Label,
					null,
					'Email'
				),
				_react2.default.createElement(
					'div',
					{ className: 'formSection' },
					_react2.default.createElement(_reactstrap.Input, { name: 'email', placeholder: 'Your Email', type: 'email', onChange: this.handleChange, value: user.local.username })
				),
				_react2.default.createElement(
					_reactstrap.Label,
					{ 'for': 'exampleSelect' },
					'User Role'
				),
				_react2.default.createElement(
					_reactstrap.Input,
					{ type: 'select', name: 'userAccess', onChange: this.handleChange, value: user.userAccess },
					_react2.default.createElement(
						'option',
						{ value: 3 },
						'SuperAdmin'
					),
					_react2.default.createElement(
						'option',
						{ value: 1 },
						'Editor'
					),
					_react2.default.createElement(
						'option',
						{ value: 2 },
						'Admin'
					),
					_react2.default.createElement(
						'option',
						{ value: 0 },
						'Subscriber'
					)
				),
				_react2.default.createElement(
					_reactstrap.Button,
					{ type: 'submit' },
					'Submit Changes'
				)
			);
		}
	}]);

	return UserEdit;
}(_react2.default.Component);

exports.default = UserEdit;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _imageBlock = __webpack_require__(27);

var _imageBlock2 = _interopRequireDefault(_imageBlock);

var _DateBlock = __webpack_require__(6);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var UserFullInfo = function (_React$Component) {
	_inherits(UserFullInfo, _React$Component);

	function UserFullInfo() {
		_classCallCheck(this, UserFullInfo);

		return _possibleConstructorReturn(this, (UserFullInfo.__proto__ || Object.getPrototypeOf(UserFullInfo)).apply(this, arguments));
	}

	_createClass(UserFullInfo, [{
		key: 'render',
		value: function render() {

			var user = this.props.user;

			var userAccess = function userAccess(accessCode) {
				return {
					3: 'Super Admin',
					2: 'Admin',
					1: 'Editor',
					0: 'Subscriber'
				}[accessCode];
			};

			return _react2.default.createElement(
				'div',
				{ className: 'infoWrap' },
				_react2.default.createElement(
					'div',
					{ className: 'image' },
					_react2.default.createElement(_imageBlock2.default, { image: user.avatar })
				),
				_react2.default.createElement(
					'div',
					{ className: 'info' },
					_react2.default.createElement(
						'p',
						null,
						user.firstname,
						' ',
						user.lastname,
						' - ',
						_react2.default.createElement(
							'a',
							{ href: "mailto:" + user.local.username },
							user.local.username
						),
						' - ',
						userAccess(user.userAccess)
					),
					_react2.default.createElement(
						'p',
						null,
						'MyList: ',
						user.mylist.length,
						user.createdOn && _react2.default.createElement(
							'span',
							null,
							' - Created On ',
							_react2.default.createElement(_DateBlock2.default, { date: user.createdOn })
						),
						user.lastConnection && _react2.default.createElement(
							'span',
							null,
							' - Last Connection: ',
							_react2.default.createElement(_DateBlock2.default, { date: user.lastConnection })
						)
					)
				)
			);
		}
	}]);

	return UserFullInfo;
}(_react2.default.Component);

exports.default = UserFullInfo;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListStore = __webpack_require__(17);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _moment = __webpack_require__(11);

var _moment2 = _interopRequireDefault(_moment);

var _listing = __webpack_require__(5);

var _listing2 = _interopRequireDefault(_listing);

var _DateBlock = __webpack_require__(6);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _sizeSelector = __webpack_require__(18);

var _sizeSelector2 = _interopRequireDefault(_sizeSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//COMPONENTS


var ReviewPage = function (_React$Component) {
    _inherits(ReviewPage, _React$Component);

    function ReviewPage(props) {
        _classCallCheck(this, ReviewPage);

        return _possibleConstructorReturn(this, (ReviewPage.__proto__ || Object.getPrototypeOf(ReviewPage)).call(this, props));
    }

    _createClass(ReviewPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ListActions2.default.getLatestListings();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            //let futureListings = this.props.futureListings
            var thelistings = function thelistings(futureListings) {
                return futureListings.map(function (listing, index) {
                    //console.log(moment(listing['start']).format().slice(0,10))
                    return _react2.default.createElement(_listing2.default, { key: index, listing: listing, user: this.props.user });
                }, _this2);
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h4',
                    null,
                    'Review New Listings'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'medium' },
                    thelistings(this.props.latestListings)
                )
            );
        }
    }]);

    return ReviewPage;
}(_react2.default.Component);

exports.default = ReviewPage;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _AccountForm = __webpack_require__(136);

var _AccountForm2 = _interopRequireDefault(_AccountForm);

var _LogInForm = __webpack_require__(15);

var _LogInForm2 = _interopRequireDefault(_LogInForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var updateTimer;

var AccountPage = function (_React$Component) {
    _inherits(AccountPage, _React$Component);

    function AccountPage() {
        _classCallCheck(this, AccountPage);

        return _possibleConstructorReturn(this, (AccountPage.__proto__ || Object.getPrototypeOf(AccountPage)).apply(this, arguments));
    }

    _createClass(AccountPage, [{
        key: 'render',
        value: function render() {

            var accountRender = this.props.user.isLoggedIn ? _react2.default.createElement(_AccountForm2.default, this.props) : _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'You need to be registered to access this page.'
                ),
                _react2.default.createElement(_LogInForm2.default, {
                    loading: this.props.loading.login,
                    error: this.props.error })
            );

            return _react2.default.createElement(
                'div',
                { className: 'account' },
                _react2.default.createElement(
                    'h3',
                    null,
                    'Your Account'
                ),
                accountRender
            );
        }
    }]);

    return AccountPage;
}(_react2.default.Component);

exports.default = AccountPage;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthActions = __webpack_require__(2);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _avatar = __webpack_require__(137);

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var updateTimer;

var AccountForm = function (_React$Component) {
    _inherits(AccountForm, _React$Component);

    function AccountForm(props) {
        _classCallCheck(this, AccountForm);

        //Function Binding
        var _this = _possibleConstructorReturn(this, (AccountForm.__proto__ || Object.getPrototypeOf(AccountForm)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.saveChanges = _this.saveChanges.bind(_this);
        return _this;
    }

    _createClass(AccountForm, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)) {
                console.log(nextProps.user);
            }
        }

        //Update values of inputs

    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            _AuthActions2.default.userInfoChange(event);
        }
    }, {
        key: 'saveChanges',
        value: function saveChanges(event) {
            event.preventDefault();
            _AuthActions2.default.updateUser(this.props.user);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'accountform' },
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.saveChanges },
                    _react2.default.createElement(
                        'label',
                        null,
                        'First Name'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'formSection' },
                        _react2.default.createElement('input', { name: 'firstname', placeholder: 'Your First Name', type: 'text', value: this.props.user.firstname, onChange: this.handleChange })
                    ),
                    _react2.default.createElement(
                        'label',
                        null,
                        'Last Name'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'formSection' },
                        _react2.default.createElement('input', { name: 'lastname', placeholder: 'Your Last Name', type: 'text', value: this.props.user.lastname, onChange: this.handleChange })
                    ),
                    _react2.default.createElement(
                        'label',
                        null,
                        'Email'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'formSection' },
                        _react2.default.createElement('input', { name: 'email', placeholder: 'Your Email', type: 'text', value: this.props.user.local.username, onChange: this.handleChange })
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'This text will appear on your ',
                        _react2.default.createElement(
                            'a',
                            { href: location.protocol + '//' + location.host + '/mylist/' + this.props.user.slug, target: '_blank' },
                            'public page'
                        ),
                        '.'
                    ),
                    _react2.default.createElement(
                        'label',
                        null,
                        'Profile Picture'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'formSection' },
                        _react2.default.createElement(_avatar2.default, this.props.user)
                    ),
                    _react2.default.createElement(
                        'label',
                        null,
                        'Bio'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'formSection' },
                        _react2.default.createElement('textarea', { name: 'bio',
                            placeholder: 'Your Bio',
                            type: 'text',
                            value: this.props.user.bio,
                            onChange: this.handleChange,
                            rows: '4',
                            cols: '50' })
                    ),
                    _react2.default.createElement(
                        'label',
                        null,
                        'Website'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'formSection' },
                        _react2.default.createElement('input', { name: 'website', placeholder: 'Your Website', type: 'text', value: this.props.user.website, onChange: this.handleChange })
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit' },
                        'Save'
                    ),
                    this.props.loading.updateuser ? 'saving...' : '',
                    this.props.success.updateuser || '',
                    this.props.error.updateuser || ''
                )
            );
        }
    }]);

    return AccountForm;
}(_react2.default.Component);

exports.default = AccountForm;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ImagesActions = __webpack_require__(22);

var _ImagesActions2 = _interopRequireDefault(_ImagesActions);

var _imageUpload = __webpack_require__(37);

var _imageUpload2 = _interopRequireDefault(_imageUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var Avatar = function (_React$Component) {
    _inherits(Avatar, _React$Component);

    function Avatar(props) {
        _classCallCheck(this, Avatar);

        var _this = _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, props));

        _this.state = {
            isUploading: false,
            isUploaded: false,
            resetAvatar: false
        };

        _this.onImageDrop = _this.onImageDrop.bind(_this);
        _this.changeAvatar = _this.changeAvatar.bind(_this);

        return _this;
    }

    _createClass(Avatar, [{
        key: 'onImageDrop',
        value: function onImageDrop(file) {
            this.setState({
                uploadedFile: file[0],
                isUploading: true,
                resetAvatar: false
            });

            _ImagesActions2.default.handleAvatarUpload(file[0]);
        }
    }, {
        key: 'changeAvatar',
        value: function changeAvatar() {
            this.setState({
                resetAvatar: true,
                isUploaded: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var fullURL = '';
            var isUploaded = false;

            if (this.props.avatar) {
                isUploaded = true;
                fullURL = "http://res.cloudinary.com/artcritical/image/upload/" + this.props.avatar + ".jpg";
            } else if (this.props.facebook) {
                isUploaded = true;
                fullURL = "http://graph.facebook.com/" + this.props.facebook.id + "/picture?type=large";
            }

            var avatarRender = (isUploaded || this.state.isUploading) && !this.state.resetAvatar ? _react2.default.createElement(
                'div',
                { className: isUploaded ? 'avatar loaded' : 'avatar loading', onClick: this.changeAvatar },
                _react2.default.createElement(
                    'div',
                    { className: 'delete' },
                    'Delete'
                ),
                _react2.default.createElement('img', { src: isUploaded ? fullURL : this.state.uploadedFile.preview })
            ) : _react2.default.createElement(_imageUpload2.default, { onImageDrop: this.onImageDrop });

            return _react2.default.createElement(
                'div',
                null,
                avatarRender
            );
        }
    }]);

    return Avatar;
}(_react2.default.Component);

exports.default = Avatar;

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = require("node-jsx");

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(9);
var router = express.Router();
var Promise = __webpack_require__(33);

/* GET All Venues */
router.get('/', function (req, res, next) {
    var Venue = req.venue;

    Venue.find().sort('name').exec(function (e, docs) {
        res.json(docs);
    });
});

/* GET info for one venue */
router.get('/getadmin/:neighborhood', function (req, res, next) {
    var Venue = req.venue;
    var List = req.list;

    Venue.find({ neighborhood: req.params.neighborhood }).sort('name').exec().then(function (venues) {
        return Promise.map(venues, function (venue) {
            // Promise.map awaits for returned promises as well.
            return List.find({ venue: venue._id }).exec().then(function (current) {
                var newvenue = {};
                newvenue = venue.toObject();
                newvenue['listings'] = current;
                return newvenue;
            });
        });
    }).then(function (result) {
        console.log('Result');
        res.json(result);
    });
});

/////////////////////////////
/*  GET  a set of venues  */
////////////////////////////

router.get('/find/:venue_id', function (req, res, next) {
    var Venue = req.venue;

    var regexp = new RegExp(req.params.venue_id, "i");
    Venue.find({ name: regexp }, function (err, venue) {
        if (err) res.send(err);
        var venues = [];
        venue.map(function (thevenue) {
            venues.push({
                value: thevenue._id,
                label: thevenue.name
            });
        });

        res.json(venues);
    });
});

//#######################
// GET ONE venue simple info 
//#######################
router.get('/getinfo/:venue_id', function (req, res, next) {
    var Venue = req.venue;

    Venue.findOne({ _id: req.params.venue_id }).populate('updated_by').exec(function (e, docs) {
        if (e) res.send(e);

        res.json(docs);
    });
});

//#######################
/* GET the full info for one venue */
//#######################

router.get('/getfullinfo/:venue_slug', function (req, res, next) {
    var Venue = req.venue;
    var List = req.list;

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    Venue.findOne({ slug: req.params.venue_slug }, function (err, venue) {
        if (err) res.send(err);

        if (venue) {
            List.find({ venue: venue._id }).where('start').lte(today).where('end').gte(today).populate('venue').exec(function (e, current) {

                List.find({ venue: venue._id }).where('start').gte(today).limit(4).populate('venue').exec(function (e, upcoming) {

                    List.find({ venue: venue._id }).where('end').lte(today).sort('-end').limit(4).populate('venue').exec(function (e, past) {
                        var data = {
                            venue: venue,
                            currentListings: current,
                            upcomingListings: upcoming,
                            pastListings: past
                        };
                        res.json(data);
                    });
                });
            });
        } else {
            res.send('No such venue');
        }
    });
});

//#######################
/* GET current listings for one venue */
//#######################

router.get('/getlistings/:venue_id', function (req, res, next) {
    var List = req.list;

    List.find({ venue: req.params.venue_id }).exec(function (e, docs) {
        res.json(docs);
    });
});

/*//#######################
 * POST a new venue.
 */ //#######################

router.post('/add', function (req, res) {
    var Venue = req.venue;

    // Define a new entry
    var newvenue = new Venue(req.body);

    // Save when and who created it
    var now = new Date();
    newvenue.created_at = now;
    newvenue.updated_at = now;
    newvenue.updated_by = req.user._id;

    // Save this new entry
    newvenue.save(function (err, newvenue) {
        res.send(err !== null && {
            msg: err
        });
    });
});

//#######################
// DELETE a venue.
//#######################

router.post('/delete/:venue_id', function (req, res) {
    var Venue = req.venue;

    console.log("Deleting one venue", req.params.venue_id);

    var venueToDelete = req.params.venue_id;
    console.log(venueToDelete);

    Venue.remove({
        '_id': venueToDelete
    }, function (err) {
        res.send(err !== null && {
            msg: 'error: ' + err
        });
    });
});

//########################
// UPDATE a new venue.
//########################

router.post('/update', function (req, res) {
    var Venue = req.venue;

    // define a new entry
    var thevenue = new Venue(req.body);

    // Save when and who created it
    var now = new Date();
    thevenue.updated_at = now;
    thevenue.updated_by = req.user._id;

    Venue.update({
        _id: thevenue._id
    }, {
        $set: thevenue
    }, function (err, newvenue) {
        if (err) res.send(err);
        res.json(newvenue);
    });
});

//########################
/* GET info for one venue */
//########################

router.get('/:venue_id', function (req, res, next) {
    var Venue = req.venue;

    Venue.find({ _id: req.params.venue_id }, function (err, venue) {
        if (err) res.send(err);

        res.json(venue);
    });
});

module.exports = router;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(9);
var router = express.Router();
var mongoose = __webpack_require__(7);

//#######################
// GET ALL listings ===================
//#######################

router.get('/alllistings', function (req, res) {
    var List = req.list;
    var Venue = req.venue;

    List.find().sort('neighborhood').limit(50).populate('venue').exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
// GET currentlist to display.
//#######################

router.get('/currentlistings/:offset_ratio', function (req, res) {
    var List = req.list,
        Venue = req.venue;

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    //Count how many times we've fetched listings
    var offset_ratio = parseInt(req.params.offset_ratio) * 100;

    List.find().where('start').lte(today).where('end').gte(today).where('event').ne(true).where('venue').ne('').sort('neighborhood').skip(offset_ratio).limit(100).populate('venue').populate('updated_by').exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
// GET future list to display.
//#######################

router.get('/futurelistings/:offset_ratio', function (req, res) {
    var List = req.list,
        Venue = req.venue;

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    //Count how many times we've fetched listings
    var offset_ratio = parseInt(req.params.offset_ratio) * 30;

    List.find().where('start').gte(today).where('event').ne(true).where('venue').ne('').sort('neighborhood').skip(offset_ratio).limit(30).populate('venue').exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
// GET GLANCE list to display.
//#######################

router.get('/glancelistings', function (req, res) {
    var List = req.list,
        Venue = req.venue;

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var inaWeek = new Date();
    inaWeek.setDate(inaWeek.getDate() + 7);
    inaWeek.setHours(0, 0, 0, 0);

    List.find({
        $or: [{
            start: {
                $gte: today,
                $lt: inaWeek
            }
        }, {
            end: {
                $gte: today,
                $lt: inaWeek
            }
        }]
    }, {}).where('venue').ne('').sort('neighborhood').populate('venue').exec(function (e, docs) {
        if (e) res.send(e);

        res.json(docs);
    });
});

//#######################
// GET EVENTS list to display.
//#######################

router.get('/eventslistings', function (req, res) {
    var List = req.list;

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    List.find().where('start').gte(today).where('event').equals(true).where('venue').ne('').sort('start').populate('venue').exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
// GET LATEST LISTINGS to review
//#######################

router.get('/latestlistings', function (req, res) {
    var List = req.list;

    List.find().where('venue').ne('').where('updated_at').ne('').sort('updated_at').limit(20).populate('venue').exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
/* FIND listings based on text */
//#######################

router.get('/find/:regex_input', function (req, res, next) {
    var List = req.list;

    var regexp = new RegExp(req.params.regex_input, "i");

    List.find({ name: regexp }).where('venue').ne('').exec(function (err, listings) {
        if (err) res.send(err);

        var results = [];
        listings.map(function (thelisting) {
            results.push({
                value: thelisting._id,
                label: thelisting.name
            });
        });

        res.json(results);
    });
});

//#######################
// GET ONE listing 
//#######################
router.get('/getinfo/:listing_id', function (req, res, next) {
    var List = req.list;

    List.findOne({
        _id: req.params.listing_id
    }).where('venue').ne('').populate('venue').populate('updated_by').exec(function (e, docs) {
        if (e) res.send(e);
        res.json(docs);
    });
});

//############################
// POST a new listing.
//############################

router.post('/add', function (req, res) {
    var List = req.list;

    // define a new entry
    var newlisting = new List(req.body);

    // Save when and who created it
    var now = new Date();
    newlisting.created_at = now;
    newlisting.updated_at = now;
    newlisting.updated_by = req.user._id;

    //Save this new entry
    newlisting.save(function (err, newlisting) {
        res.send(err === null ? {
            data: newlisting
        } : {
            msg: err
        });
    });
});

//#######################
// UPDATE a listing.
//#######################

router.post('/update', function (req, res) {
    var List = req.list;

    console.log("Update one listing");

    // define a new entry
    var thelisting = new List(req.body);

    // Save when and who created it
    var now = new Date();
    thelisting.updated_at = now;
    thelisting.updated_by = req.user._id;

    List.update({
        _id: thelisting._id
    }, {
        $set: thelisting
    }, function (err, newlisting) {
        res.send(err === null ? {
            msg: ''
        } : {
            msg: err
        });
    });
});

//#######################
// UPDATE a featured article
//#######################

router.post('/feature', function (req, res) {
    var Feature = req.feature;

    if (req.body._id) {

        //Update feature

        var theFeature = new Feature(req.body);

        Feature.update({
            _id: theFeature._id
        }, {
            $set: theFeature
        }, function (err, newFeature) {
            res.send(err === null ? { msg: '' } : { msg: err });
        });
    } else {
        // New feature

        var theFeature = new Feature(req.body);

        //Save this new entry
        theFeature.save(function (err, newFeature) {
            res.send(err === null ? { data: newFeature } : { msg: err });
        });
    }
});

//#######################
// FIND a featured article
//#######################

router.post('/findfeatures/:days', function (req, res) {
    var Feature = req.feature;

    console.log("Find all features");

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var inaWeek = new Date();
    inaWeek.setDate(inaWeek.getDate() + req.params.days);
    inaWeek.setHours(0, 0, 0, 0);

    Feature.find({
        date: {
            $gte: today,
            $lt: inaWeek
        }
    }).populate('list').populate('venue').exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
// DELETE a listing.
//#######################

router.post('/delete/:listing_id', function (req, res) {
    var List = req.list;

    console.log("Deleting one listing", req.params.listing_id);

    var listingToDelete = req.params.listing_id;
    List.remove({
        '_id': listingToDelete
    }, function (err) {
        res.send(err === null ? {
            msg: ''
        } : {
            msg: 'error: ' + err
        });
    });
});

module.exports = router;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(9);
var router = express.Router();
var passport = __webpack_require__(21);

//###################################
// SIGNUP
//###################################

router.post('/signup', async function (req, res) {
    passport.authenticate('local-signup')(req, res, function () {
        // If logged in, we should have user info to send back
        if (req.user) {
            passport.authenticate('local-login')(req, res, function () {
                console.log('Logged in.');
                // If logged in, we should have user info to send back

                if (req.user) {
                    return res.send(JSON.stringify(req.user));
                }

                // Otherwise return an error
                return res.send(JSON.stringify({
                    error: 'There was an error logging in'
                }));
            });
        } else {
            // Otherwise return an error
            return res.send(JSON.stringify({
                error: 'There was an error logging in'
            }));
        }
    });
});

//###################################
// LOGIN
//###################################

router.post('/login', async function (req, res) {
    passport.authenticate('local-login')(req, res, function () {
        var Userlist = req.userlist;
        // If logged in, we should have user info to send back
        if (req.user) {

            console.log('Logged in', req.user.slug);

            var now = new Date();
            var newInfo = { lastConnection: now };
            var update = { $set: newInfo };

            Userlist.update({ _id: req.user._id }, update, { upsert: true }, function (err, updatedUser) {
                console.log(updatedUser);
                return res.send(err === null ? JSON.stringify(req.user) : {
                    error: err
                });
            });

            //return res.send(JSON.stringify(req.user));
        } else {

            // Otherwise return an error
            return res.send(JSON.stringify({
                error: 'There was an error logging in'
            }));
        }
    });
});

//###################################
// FACEBOOK LOGIN
//###################################

router.get('/facebook', passport.authenticate('facebook', { display: 'popup' }));

router.get('/facebook/callback', function (req, res) {

    passport.authenticate('facebook', { failureRedirect: '/login' }, function (err, user, info) {
        if (err) {
            return err;
        }
        // Successful authentication, redirect home.
        if (!user) {
            var message = "Invalid credentials";
            // response.redirect('/login');
            return res.render('login', {
                message: info.message,
                userLoggedIn: null
            });
        }
        req.logIn(user, function (err) {
            if (err) {
                return err;
            }
            req.session.user = user;
            res.redirect('/auth/facebook/success');
            //res.redirect('/');
        });
    })(req, res);
});

//###################################
// LOGOUT
//###################################

router.get('/logout', function (req, res) {
    req.logout();
    req.session.destroy(function (err) {
        return res.send(JSON.stringify(req.user));
    });
});

/*//###################################
 * UPDATE the user's list
 */ //###################################

router.post('/addtolist', function (req, res) {
    var Userlist = req.userlist;
    var List = req.list;

    //CHECK IF USER IS CONNECTED
    if (req.user) {

        // define variables
        var userID = req.user._id;

        Userlist.findById(userID, function (err, user) {

            if (err) return handleError(err);

            // Check if listing is already in the list
            var IndexOfListing = user.mylist.indexOf(req.body._id);
            if (IndexOfListing == -1) {

                //add listing to mylist
                user.mylist.push(req.body);
                //add a popularity point to the listing
                List.findById(req.body, function (err, listing) {
                    listing.popularity = listing.popularity ? listing.popularity + 1 : 1;
                    listing.save(function (err, updatedListing) {
                        console.log('Saved the popularity: ', updatedListing.popularity);
                    });
                });
            } else {

                // Remove from the list
                user.mylist.splice(IndexOfListing, 1);
                //subsctract a popularity point to the listing
                List.findById(req.body, function (err, listing) {
                    listing.popularity = listing.popularity ? listing.popularity - 1 : 0;
                    listing.save(function (err, updatedListing) {
                        console.log('Saved the popularity: ', updatedListing.popularity);
                    });
                });
            }

            // Save user with new listing
            user.save(function (err, updatedUser) {
                if (err) return handleError(err);
                List.find({
                    '_id': { $in: updatedUser.mylist }
                }).sort('neighborhood').populate('venue').exec(function (e, docs) {
                    return res.send(JSON.stringify(docs));
                });
            });
        });
    } else {
        return handleError('No defined user');
    };
});

/*//###################################
 * REORDER the user's list
 */ //###################################

router.post('/updatemylist', function (req, res) {
    var Userlist = req.userlist;
    var List = req.list;

    //CHECK IF USER IS CONNECTED
    if (req.user) {

        // define variables
        var userID = req.user._id;
        var newListings = req.body;

        Userlist.findById(userID, function (err, user) {

            if (err) return handleError(err);

            //Replace listings in mylist
            user.mylist = req.body;
            console.log(user.mylist);

            // Save user with new listing
            user.save(function (err, updatedUser) {
                if (err) return handleError(err);

                return res.send(JSON.stringify(updatedUser));
            });
        });
    };
});

//###################################
// GET all listings from my list
// (not used anymore)
//###################################

router.get('/getmylist', function (req, res) {
    var List = req.list;
    var Venue = req.venue;

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    //CHECK IF USER IS CONNECTED
    if (req.user) {
        var theirList = req.user.mylist;

        List.find().where('_id').in(theirList).where('end').gte(today).populate('venue').exec(function (e, docs) {
            res.json(docs);
        });
    } else {
        var docs = [];
        res.json(docs);
    }
});

//###################################
// GET all listings from a list
//###################################

router.get('/getusermylist/:user_slug', function (req, res) {
    var Userlist = req.userlist;
    var Venue = req.venue;

    Userlist.findOne({ 'slug': req.params.user_slug }).populate('mylist').exec(function (e, user) {
        //Populate the mylist venues
        Userlist.populate(user, {
            path: 'mylist.venue',
            model: Venue
        }, function (err, fullUser) {
            //found user
            res.json(fullUser);
        });
    });
});

//###################################
// GET to check session
//###################################

router.get('/checksession', function (req, res) {
    var User = req.user;
    var Userlist = req.userlist;

    if (User) {
        res.send(JSON.stringify(User));
    } else {
        res.send({ error: 'No user connected' });
    }
});

//###################################
// GET USER INFO 
//###################################
router.get('/user', function (req, res) {
    var User = req.user;
});

//###################################
// UPDATE USER INFO 
//###################################
router.post('/updateuser', function (req, res) {
    var Userlist = req.userlist;
    var User = req.user;

    var newInfo = req.body;

    console.log('New user info: ', newInfo);
    var update = { $set: newInfo };

    Userlist.update({ _id: newInfo._id }, update, { upsert: true }, function (err, updatedUser) {
        console.log('boom', updatedUser, newInfo._id);
        res.send(err === null ? {
            newuser: updatedUser
        } : {
            msg: err
        });
    });
});

router.get('/getallusers', function (req, res) {
    var Userlist = req.userlist;

    console.log('auth/getallusers');
    Userlist.find().sort('createdOn').limit(50).populate('mylist').exec(function (e, docs) {
        res.json(docs);
    });
});

module.exports = router;

/***/ })
/******/ ]);
//# sourceMappingURL=server.bundle.js.map