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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
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

var _alt = __webpack_require__(15);

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var offset = 0;

var ListActions = function () {
    function ListActions() {
        _classCallCheck(this, ListActions);

        this.generateActions('getCurrentAttempt', 'getCurrentSuccess', 'getCurrentFail', 'currentNotLoaded', 'currentLoaded', 'getFutureAttempt', 'getFutureSuccess', 'getFutureFail', 'getAllSuccess', 'getAllFail', 'getEventsAttempt', 'getEventsSuccess', 'getEventsFail', 'getGlanceAttempt', 'getGlanceSuccess', 'getGlanceFail', 'getLatestListingsSuccess', 'getLatestListingsFail', 'getListingInfoSuccess', 'getListingInfoFailure', 'getVenueInfoSuccess', 'getVenueInfoFailure', 'getVenueFullInfoSuccess', 'getVenueFullInfoFailure', 'saveListingSuccess', 'saveListingFailure', 'saveListingAttempt', 'saveVenueSuccess', 'saveVenueFailure', 'saveVenueAttempt', 'updateListingSuccess', 'updateListingFailure', 'updateListingAttempt', 'updateVenueAttempt', 'updateVenueSuccess', 'updateVenueFailure', 'updateFeatureSuccess', 'updateFeatureFailure', 'featureLoadAttempt', 'featureLoadSuccess', 'featureLoadFailure', 'featureAdminAttempt', 'featureAdminSuccess', 'featureAdminFailure', 'deleteListingSuccess', 'deleteListingFailure', 'deleteVenueSuccess', 'deleteVenueFailure', 'getVenueListingsSuccess', 'getVenueListingsFailure', 'getVenuesAdminSuccess', 'getVenuesAdminFailure', 'getVenuesAdminAttempt', 'getCoordFailure', 'getCoordSuccess');
    }

    _createClass(ListActions, [{
        key: 'getCurrent',
        value: async function getCurrent() {
            var _this = this;

            this.getCurrentAttempt();

            await fetch('/list/currentlistings/' + offset, {
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
                    _this.currentNotLoaded();
                } else {
                    _this.currentLoaded();
                    console.log('done loading current shows!');
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

            await fetch('/list/futurelistings/' + offset, {
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
                    url: '/list/alllistings'
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
                    url: '/list/eventslistings'
                }).done(function (data) {
                    _this4.getEventsSuccess(data);
                }).fail(function (jqXhr) {
                    _this4.getEventsFail(jqXhr);
                });
            };
        }
    }, {
        key: 'getGlance',
        value: async function getGlance() {
            var _this5 = this;

            this.getGlanceAttempt();

            await fetch('/list/glancelistings', {
                method: 'GET',
                credentials: 'same-origin'
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (data) {
                data ? _this5.getGlanceSuccess(data) : _this5.getGlanceFail();
                return true;
            }).catch(function (error) {
                _this5.getGlanceFail(error);
            });
        }
    }, {
        key: 'getLatestListings',
        value: function getLatestListings() {
            var _this6 = this;

            return function (dispatch) {
                $.ajax({
                    url: '/list/latestlistings'
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
    }, {
        key: 'venueDuplicate',
        value: function venueDuplicate() {
            return true;
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

            await fetch('/list/add', {
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
                json ? _this7.saveListingSuccess(json) : _this7.saveListingFailure();
                return true;
            }).catch(function (error) {
                _this7.saveListingFailure(error);
            });
        }
    }, {
        key: 'deleteListing',
        value: async function deleteListing(oldListing) {
            var _this8 = this;

            await fetch('/list/delete/' + oldListing, {
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
                //this.listingEditReset();
                return true;
            }).catch(function (error) {
                _this8.deleteListingFailure(error);
            });
        }
    }, {
        key: 'updateListing',
        value: async function updateListing(newInfo) {
            var _this9 = this;

            this.updateListingAttempt();

            await fetch('/list/update', {
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
                json ? _this9.updateListingSuccess(json) : _this9.updateListingFailure();

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
                    url: '/list/getinfo/' + id
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

            console.log('Update feature', data);

            await fetch('/list/feature', {
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
        value: function featureReset(day) {
            return day;
        }
    }, {
        key: 'featureLoad',
        value: async function featureLoad(days) {
            var _this12 = this;

            this.featureLoadAttempt.defer();

            await fetch('/list/findcurrentfeatures', {
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
        key: 'featureAdmin',
        value: async function featureAdmin(days) {
            var _this13 = this;

            this.featureAdminAttempt.defer();

            await fetch('/list/findfeatures', {
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
                _this13.featureAdminSuccess({ json: json, days: days });
                return true;
            }).catch(function (error) {
                _this13.featureAdminFailure(error);
            });
        }
    }, {
        key: 'getVenueInfo',
        value: async function getVenueInfo(id) {
            var _this14 = this;

            await fetch('/venues/getinfo/' + id, {
                method: 'GET',
                credentials: 'same-origin'
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this14.getVenueInfoSuccess(json);
                return true;
            }).catch(function (error) {
                _this14.getVenueInfoFailure(error);
            });
        }
    }, {
        key: 'getVenueFullInfo',
        value: async function getVenueFullInfo(id) {
            var _this15 = this;

            await fetch('/venues/getfullinfo/' + id, {
                method: 'GET',
                credentials: 'same-origin'
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this15.getVenueFullInfoSuccess(json);
                return true;
            }).catch(function (error) {
                _this15.getVenueFullInfoFailure(error);
            });
        }
    }, {
        key: 'getVenueListings',
        value: async function getVenueListings(id) {
            var _this16 = this;

            await fetch('/venues/getlistings/' + id, {
                method: 'GET',
                credentials: 'same-origin'
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this16.getVenueListingsSuccess(json);
                return true;
            }).catch(function (error) {
                _this16.getVenueListingsFailure(error);
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
            var _this17 = this;

            this.getVenuesAdminAttempt();
            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: '/venues/getadmin/' + neighborhood
                }).done(function (data) {
                    _this17.getVenuesAdminSuccess(data);
                }).fail(function (jqXhr) {
                    _this17.getVenuesAdminFailure(jqXhr);
                });
            };
        }
    }, {
        key: 'updateVenue',
        value: async function updateVenue(info) {
            var _this18 = this;

            this.updateVenueAttempt();

            await fetch('/venues/update', {
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
                json ? _this18.updateVenueSuccess(json) : _this18.updateVenueFailure();
                return true;
            }).catch(function (error) {
                _this18.updateVenueFailure(error);
            });
        }
    }, {
        key: 'saveVenue',
        value: async function saveVenue(newVenue) {
            var _this19 = this;

            this.saveVenueAttempt();

            await fetch('/venues/add', {
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
                json ? _this19.saveVenueSuccess(json) : _this19.saveVenueFailure();
                return true;
            }).catch(function (error) {
                _this19.saveVenueFailure(error);
            });
        }
    }, {
        key: 'deleteVenue',
        value: async function deleteVenue(oldVenue) {
            var _this20 = this;

            await fetch('/venues/delete/' + oldVenue, {
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
                _this20.venueEditReset();
                _this20.deleteVenueSuccess(json);
                return true;
            }).catch(function (error) {
                _this20.deleteVenueFailure(error);
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

        /////////////////
        // Menu
        //////////////////

    }, {
        key: 'toggleMenu',
        value: function toggleMenu() {
            return true;
        }
    }]);

    return ListActions;
}();

exports.default = _alt2.default.createActions(ListActions);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(15);

var _alt2 = _interopRequireDefault(_alt);

__webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthActions = function () {
  function AuthActions() {
    _classCallCheck(this, AuthActions);

    this.generateActions('sessionCheckFailure', 'sessionCheckSuccess', 'addToMyListSuccess', 'addToMyListFailure', 'loginAttempt', 'loginFailure', 'loginSuccess', 'logoutSuccess', 'logoutFailure', 'registerAttempt', 'registerSuccess', 'registerFailure', 'updateUserSuccess', 'updateUserFailure', 'updateUserAttempt', 'deleteUserSuccess', 'deleteUserFailure', 'deleteUserAttempt', 'getMylistSuccess', 'getMylistFailure', 'reorderMyListSuccess', 'reorderMyListFailure', 'getUserMylistSuccess', 'getUserMylistFailure', 'getAllUserAttempt', 'getAllUserSuccess', 'getAllUserFailure', 'forgotPasswordAttempt', 'forgotPasswordSuccess', 'forgotPasswordFailure', 'resetPasswordAttempt', 'resetPasswordSuccess', 'resetPasswordFailure', 'certifyPasswordAttempt', 'certifyPasswordSuccess', 'certifyPasswordFailure');
  }

  _createClass(AuthActions, [{
    key: 'attemptLogIn',
    value: async function attemptLogIn(userData) {
      var _this = this;

      this.loginAttempt();

      await fetch('/auth/login', {
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

      await fetch('/auth/logout', {
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

      await fetch('/auth/signup', {
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
      await fetch('/auth/getmylist', {
        method: 'GET',
        credentials: 'same-origin'
      }).then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      }).then(function (data) {
        if (data) {
          _this4.getMylistSuccess(data.list);
          var newUser = data.user;
          newUser.mylist = data.list;
          _this4.updateUser(newUser);
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

      await fetch('/auth/getusermylist/' + user_slug, {
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
      await fetch('/auth/checksession', {
        method: 'GET',
        credentials: 'same-origin'
      }).then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      }).then(function (json) {
        if (json._id) {
          console.log(json);
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
      await fetch('/auth/addtolist', {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(listing),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        console.log(response);
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

      await fetch('/auth/updatemylist', {
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

      console.log('Updating ', newUserInfo);

      this.updateUserAttempt();

      await fetch('/auth/updateuser', {
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
        console.log(json);
        _this9.updateUserSuccess(json);
        return true;
      }).catch(function (error) {
        _this9.updateUserFailure(error);
        return true;
      });
    }
  }, {
    key: 'deleteUser',
    value: async function deleteUser(user) {
      var _this10 = this;

      this.deleteUserAttempt();

      await fetch('/auth/deleteuser', {
        body: JSON.stringify(user),
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
        _this10.deleteUserSuccess(json);
        return true;
      }).catch(function (error) {
        _this10.deleteUserFailure(error);
        return true;
      });
    }
  }, {
    key: 'getAllUsers',
    value: async function getAllUsers() {
      var _this11 = this;

      console.log("Getting all Users");

      this.getAllUserAttempt.defer();

      await fetch('/auth/getallusers', {
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
        _this11.getAllUserSuccess(json);
        return true;
      }).catch(function (error) {
        _this11.getAllUserFailure(error);
        return true;
      });
    }
  }, {
    key: 'forgotPassword',
    value: async function forgotPassword(email) {
      var _this12 = this;

      console.log("Sending an email");

      this.forgotPasswordAttempt.defer();

      await fetch('/auth/forgot', {
        method: 'POST',
        body: JSON.stringify({ email: email }),
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
        _this12.forgotPasswordSuccess(json);
        return true;
      }).catch(function (error) {
        _this12.forgotPasswordFailure(error);
        return true;
      });
    }
  }, {
    key: 'certifyReset',
    value: async function certifyReset(token) {
      var _this13 = this;

      console.log("Checking the token");

      this.certifyPasswordAttempt();

      await fetch('/auth/resettoken', {
        method: 'POST',
        body: JSON.stringify({ token: token }),
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
        json ? _this13.certifyPasswordSuccess(json) : _this13.certifyPasswordFailure();
        return true;
      }).catch(function (error) {
        _this13.certifyPasswordFailure();
        return true;
      });
    }
  }, {
    key: 'resetPassword',
    value: async function resetPassword(password, token) {
      var _this14 = this;

      console.log("Resetting the password");

      this.resetPasswordAttempt();

      await fetch('/auth/reset', {
        method: 'POST',
        body: JSON.stringify({ password: password, token: token }),
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
        json ? _this14.resetPasswordSuccess(json) : _this14.resetPasswordFailure();
        return true;
      }).catch(function (error) {
        _this14.resetPasswordFailure();
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(25);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(210);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelmetBlock = function (_React$Component) {
    _inherits(HelmetBlock, _React$Component);

    function HelmetBlock(props) {
        _classCallCheck(this, HelmetBlock);

        return _possibleConstructorReturn(this, (HelmetBlock.__proto__ || Object.getPrototypeOf(HelmetBlock)).call(this, props));
    }

    _createClass(HelmetBlock, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                this.props.title && _react2.default.createElement(
                    'title',
                    null,
                    this.props.title,
                    ' - artcritical'
                ),
                this.props.link && _react2.default.createElement('link', { rel: 'canonical', href: this.props.link }),
                this.props.ogType && _react2.default.createElement('meta', { property: 'og:type', content: this.props.ogType }),
                this.props.ogUrl && _react2.default.createElement('meta', { property: 'og:url', content: this.props.ogUrl }),
                this.props.ogTitle && _react2.default.createElement('meta', { property: 'og:title', content: this.props.ogTitle }),
                this.props.ogDescription && _react2.default.createElement('meta', { property: 'og:description', content: this.props.ogDescription }),
                this.props.ogImage && _react2.default.createElement('meta', { property: 'og:image', content: this.props.ogImage })
            );
        }
    }]);

    return HelmetBlock;
}(_react2.default.Component);

exports.default = HelmetBlock;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'loading' },
        _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'spinner-third'], spin: true })
      );
    }
  }]);

  return Loading;
}(_react2.default.Component);

exports.default = Loading;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _Listing = __webpack_require__(149);

var _Listing2 = _interopRequireDefault(_Listing);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var VenueBlock = function (_React$Component) {
    _inherits(VenueBlock, _React$Component);

    function VenueBlock(props) {
        _classCallCheck(this, VenueBlock);

        return _possibleConstructorReturn(this, (VenueBlock.__proto__ || Object.getPrototypeOf(VenueBlock)).call(this, props));
    }

    _createClass(VenueBlock, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var listing = this.props.listings[0];
            var allowAccess = this.props.user.isLoggedIn && this.props.user.userAccess > 0 ? true : false;

            //display the listings
            var displayListings = function displayListings(listings) {
                return listings.map(function (currentListing, index) {
                    return _react2.default.createElement(_Listing2.default, _extends({}, _this2.props, { listing: currentListing, key: index }));
                });
            };

            return _react2.default.createElement(
                'div',
                { className: 'venue' },
                _react2.default.createElement(
                    'div',
                    { className: 'venueInfo' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'venueName', to: "/venue/" + listing.venue.slug },
                        listing.venue.name
                    ),
                    listing.venue.website && allowAccess && _react2.default.createElement(
                        'a',
                        { href: listing.venue.website, target: '_blank', className: 'external' },
                        ' ',
                        _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'external-link-square'] })
                    )
                ),
                displayListings(this.props.listings)
            );
        }
    }]);

    return VenueBlock;
}(_react2.default.Component);

exports.default = VenueBlock;

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

var _reactstrap = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateModal = function (_React$Component) {
    _inherits(UpdateModal, _React$Component);

    function UpdateModal(props) {
        _classCallCheck(this, UpdateModal);

        var _this = _possibleConstructorReturn(this, (UpdateModal.__proto__ || Object.getPrototypeOf(UpdateModal)).call(this, props));

        _this.componentDidUpdate = _this.componentDidUpdate.bind(_this);
        return _this;
    }

    _createClass(UpdateModal, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.props.success && setTimeout(function () {
                this.props.toggle(this.props.name);
            }.bind(this), 1000);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactstrap.Modal,
                { isOpen: true, backdrop: true },
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
                        'Technical problem. Please Try Again.'
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.ModalFooter,
                    null,
                    !this.props.success && _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'primary', onClick: this.props.handleSubmit },
                            'Confirm'
                        ),
                        _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'primary', onClick: function onClick() {
                                    return _this2.props.toggle(_this2.props.name);
                                } },
                            'Cancel'
                        )
                    )
                )
            );
        }
    }]);

    return UpdateModal;
}(_react2.default.Component);

exports.default = UpdateModal;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(15);

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var offset = 0;

var EventActions = function () {
    function EventActions() {
        _classCallCheck(this, EventActions);

        this.generateActions('getAllSuccess', 'getAllFail', 'getEventsAttempt', 'getEventsSuccess', 'getEventsFail', 'getLatestEventsSuccess', 'getLatestEventsFail', 'getEventInfoSuccess', 'getEventInfoFailure', 'saveEventSuccess', 'saveEventFailure', 'saveEventAttempt', 'updateEventSuccess', 'updateEventFailure', 'updateEventAttempt', 'deleteEventSuccess', 'deleteEventFailure');
    }

    _createClass(EventActions, [{
        key: 'getAll',
        value: function getAll() {
            var _this = this;

            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: '/event/allevents'
                }).done(function (data) {
                    _this.getAllSuccess(data);
                }).fail(function (jqXhr) {
                    _this.getAllFail(jqXhr);
                });
            };
        }
    }, {
        key: 'getEvents',
        value: function getEvents() {
            var _this2 = this;

            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: '/event/upcoming'
                }).done(function (data) {
                    _this2.getEventsSuccess(data);
                }).fail(function (jqXhr) {
                    _this2.getEventsFail(jqXhr);
                });
            };
        }
    }, {
        key: 'getLatestEvents',
        value: function getLatestEvents() {
            var _this3 = this;

            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: '/event/latestevents'
                }).done(function (data) {
                    _this3.getLatestEventsSuccess(data);
                }).fail(function (error) {
                    _this3.getLatestEventsFail(error);
                });
            };
        }
    }, {
        key: 'eventEditReset',
        value: function eventEditReset() {
            return true;
        }

        // When new event info is entered

    }, {
        key: 'eventInfoChange',
        value: function eventInfoChange(event) {
            return event;
        }
        // When new event info is entered

    }, {
        key: 'eventDuplicate',
        value: function eventDuplicate() {
            return true;
        }
    }, {
        key: 'saveEvent',
        value: async function saveEvent(newEvent) {
            var _this4 = this;

            this.saveEventAttempt();

            await fetch('/event/add', {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify(newEvent),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                json ? _this4.saveEventSuccess(json) : _this4.saveEventFailure();
                return true;
            }).catch(function (error) {
                _this4.saveEventFailure(error);
            });
        }
    }, {
        key: 'deleteEvent',
        value: async function deleteEvent(oldEvent) {
            var _this5 = this;

            await fetch('/event/delete/' + oldEvent, {
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
                _this5.deleteEventSuccess(json);
                return true;
            }).catch(function (error) {
                _this5.deleteEventFailure(error);
            });
        }
    }, {
        key: 'updateEvent',
        value: async function updateEvent(newInfo) {
            var _this6 = this;

            this.updateEventAttempt();

            await fetch('/event/update', {
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
                json ? _this6.updateEventSuccess(json) : _this6.updateEventFailure();

                return true;
            }).catch(function (error) {
                _this6.updateEventFailure(error);
            });
        }

        //When you want to edit a specific event, and are being redirected to the event Edit page

    }, {
        key: 'editEvent',
        value: function editEvent(event) {
            return event;
        }
    }, {
        key: 'getEventInfo',
        value: function getEventInfo(id) {
            var _this7 = this;

            console.log('Getting the info for ' + id);
            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: '/event/getinfo/' + id
                }).done(function (data) {
                    _this7.getEventInfoSuccess(data);
                }).fail(function (jqXhr) {
                    _this7.getEventInfoFailure(jqXhr);
                });
            };
        }
    }]);

    return EventActions;
}();

exports.default = _alt2.default.createActions(EventActions);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = __webpack_require__(191);

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSelect = __webpack_require__(213);

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

            return _react2.default.createElement(_reactSelect.Async, {
                name: 'venue',
                placeholder: 'Search',
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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Deep cloning helper for objects
 */
module.exports = function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dependencies
 */
const convertKeys = __webpack_require__(27);
const strToCamelCase = __webpack_require__(125);

/**
 * Convert object keys to camel case
 */
module.exports = function toCamelCase(obj, ignored) {
  return convertKeys(obj, strToCamelCase, ignored);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dependencies
 */
const convertKeys = __webpack_require__(27);
const strToSnakeCase = __webpack_require__(126);

/**
 * Convert object keys to snake case
 */
module.exports = function toSnakeCase(obj, ignored) {
  return convertKeys(obj, strToSnakeCase, ignored);
};


/***/ }),
/* 23 */
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

var ListingNameDisplay = function (_React$Component) {
    _inherits(ListingNameDisplay, _React$Component);

    function ListingNameDisplay() {
        _classCallCheck(this, ListingNameDisplay);

        return _possibleConstructorReturn(this, (ListingNameDisplay.__proto__ || Object.getPrototypeOf(ListingNameDisplay)).apply(this, arguments));
    }

    _createClass(ListingNameDisplay, [{
        key: 'render',
        value: function render() {

            var listing = this.props;
            var artistPresent = listing.artists && listing.artists.length > 0 && true;
            var isGroupShow = listing.artists && listing.artists.length > 3 ? true : false;

            var artistBlock = '';
            if (listing.artists) {
                var i;
                for (i = 0; i < listing.artists.length; i++) {
                    var comma = i < listing.artists.length - 1 ? ', ' : '';
                    artistBlock = artistBlock + listing.artists[i].name + comma;
                }
            }

            return _react2.default.createElement(
                'div',
                { className: 'title' },
                isGroupShow ? 'Group Show' : artistBlock,
                artistPresent && listing.name ? ': ' : '',
                listing.name
            );
        }
    }]);

    return ListingNameDisplay;
}(_react2.default.Component);

exports.default = ListingNameDisplay;

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

var _validator = __webpack_require__(19);

var _validator2 = _interopRequireDefault(_validator);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _reactstrap = __webpack_require__(2);

var _reactRouter = __webpack_require__(4);

var _FacebookButton = __webpack_require__(156);

var _FacebookButton2 = _interopRequireDefault(_FacebookButton);

var _loading = __webpack_require__(10);

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
                _react2.default.createElement(_FacebookButton2.default, null),
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
                    this.props.loading && _react2.default.createElement(_loading2.default, null),
                    this.props.error.login && _react2.default.createElement(
                        _reactstrap.Alert,
                        { color: 'danger' },
                        this.props.error.login
                    ),
                    _react2.default.createElement(
                        _reactstrap.Button,
                        null,
                        'Log In'
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
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/forgot', activeClassName: 'active' },
                            'Forgot your password?'
                        )
                    )
                )
            );
        }
    }]);

    return LogInForm;
}(_react2.default.Component);

exports.default = LogInForm;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dependencies
 */
const splitNameEmail = __webpack_require__(45);

/**
 * Email address class
 */
class EmailAddress {

	/**
	 * Constructor
	 */
  constructor(data) {

    //Construct from data
    if (data) {
      this.fromData(data);
    }
  }

  /**
   * From data
   */
  fromData(data) {

    //String given
    if (typeof data === 'string') {
      const [name, email] = splitNameEmail(data);
      data = {name, email};
    }

    //Expecting object
    if (typeof data !== 'object') {
      throw new Error('Expecting object or string for EmailAddress data');
    }

    //Extract name and email
    const {name, email} = data;

    //Set
    this.setEmail(email);
    this.setName(name);
  }

  /**
   * Set name
   */
  setName(name) {
    if (typeof name === 'undefined') {
      return;
    }
    if (typeof name !== 'string') {
      throw new Error('String expected for `name`');
    }
    this.name = name;
  }

  /**
   * Set email (mandatory)
   */
  setEmail(email) {
    if (typeof email === 'undefined') {
      throw new Error('Must provide `email`');
    }
    if (typeof email !== 'string') {
      throw new Error('String expected for `email`');
    }
    this.email = email;
  }

	/**
	 * To JSON
	 */
  toJSON() {

    //Get properties
    const {email, name} = this;

    //Initialize with mandatory properties
    const json = {email};

    //Add name if present
    if (name !== '') {
      json.name = name;
    }

    //Return
    return json;
  }

  /**************************************************************************
   * Static helpers
   ***/

  /**
   * Create an EmailAddress instance from given data
   */
  static create(data) {

    //Array?
    if (Array.isArray(data)) {
      return data
        .filter(item => !!item)
        .map(item => this.create(item));
    }

    //Already instance of EmailAddress class?
    if (data instanceof EmailAddress) {
      return data;
    }

    //Create instance
    return new EmailAddress(data);
  }
}

//Export class
module.exports = EmailAddress;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Helper to convert an object's keys
 */
module.exports = function convertKeys(obj, converter, ignored) {

  //Validate
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Non object passed to convertKeys: ' + obj);
  }

  //Ignore arrays
  if (Array.isArray(obj)) {
    return obj;
  }

  //Ensure array for ignored values
  if (!Array.isArray(ignored)) {
    ignored = [];
  }

  //Process all properties
  for (const key in obj) {
    //istanbul ignore else
    if (obj.hasOwnProperty(key)) {

      //Convert key to snake case
      const converted = converter(key);

      //Recursive for child objects, unless ignored
      //The ignored check checks both variants of the key
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (!ignored.includes(key) && !ignored.includes(converted)) {
          obj[key] = convertKeys(obj[key], converter, ignored);
        }
      }

      //Convert key to snake case and set if needed
      if (converted !== key) {
        obj[converted] = obj[key];
        delete obj[key];
      }
    }
  }

  //Return object
  return obj;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(15);

var _alt2 = _interopRequireDefault(_alt);

__webpack_require__(70);

var _superagent = __webpack_require__(216);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

var _reactRouter = __webpack_require__(4);

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
                        user.bio,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/mylist/' + user.slug },
                            _react2.default.createElement(
                                _reactstrap.Button,
                                null,
                                'Profile'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return UserLink;
}(_react2.default.Component);

exports.default = UserLink;

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ImagesActions = __webpack_require__(28);

var _ImagesActions2 = _interopRequireDefault(_ImagesActions);

var _imageUpload = __webpack_require__(65);

var _imageUpload2 = _interopRequireDefault(_imageUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var Thumbnail = function (_React$Component) {
    _inherits(Thumbnail, _React$Component);

    function Thumbnail(props) {
        _classCallCheck(this, Thumbnail);

        var _this = _possibleConstructorReturn(this, (Thumbnail.__proto__ || Object.getPrototypeOf(Thumbnail)).call(this, props));

        _this.state = {
            isUploading: false,
            resetThumbnail: false
        };

        _this.onImageDrop = _this.onImageDrop.bind(_this);
        _this.resetThumbnail = _this.resetThumbnail.bind(_this);

        return _this;
    }

    _createClass(Thumbnail, [{
        key: 'onImageDrop',
        value: function onImageDrop(accepted, rejected) {
            if (accepted.length) {
                this.setState({
                    uploadedFile: accepted[0],
                    isUploading: true
                });
                this.props.onChange && this.props.onChange();

                _ImagesActions2.default.handleThumbnailUpload(accepted[0], this.props.number);

                this.setState({
                    resetThumbnail: false
                });
            } else {
                console.log('Wrong file type!');
            }
        }
    }, {
        key: 'resetThumbnail',
        value: function resetThumbnail() {
            this.setState({
                resetThumbnail: true
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var isUploaded = this.props.image ? true : false;

            var avatarRender = (isUploaded || this.state.isUploading) && !this.state.resetThumbnail ? _react2.default.createElement(
                'div',
                { className: isUploaded ? 'picture loaded' : 'picture loading', onClick: this.resetThumbnail },
                _react2.default.createElement('img', { src: isUploaded ? "https://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg" : this.state.uploadedFile.preview })
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


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
        key: 'handleSelectChange',
        value: function handleSelectChange(event) {
            console.log(event);
            this.setState({
                selected: event.target.value
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
        key: '_renderSelect',
        value: function _renderSelect() {

            function labels(child, index) {
                return _react2.default.createElement(
                    'option',
                    { key: index,
                        selected: this.state.selected === index,
                        value: index },
                    child.props.label
                );
            }

            return _react2.default.createElement(
                'div',
                { className: 'tabs__select' },
                _react2.default.createElement(
                    _reactstrap.Input,
                    { type: 'select',
                        onChange: this.handleSelectChange.bind(this) },
                    this.props.children.map(labels.bind(this))
                )
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
                this._renderSelect(),
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
/* 33 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("d3-ease");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("draft-js-plugins-editor");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("react-dates");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-toggle-button");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;
var bcrypt = __webpack_require__(192); // encripts password

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
    subscribed: Boolean,
    createdOn: { type: Date, default: Date.now },
    lastConnection: { type: Date },
    mylist: [{ type: String, ref: 'List' }],
    resetPasswordToken: String,
    resetPasswordExpires: Date
}, {
    //Options
    usePushEach: true,
    versionKey: false
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

//compile the model

module.exports = {
    user: mongoose.model('User', userSchema),
    userTrash: mongoose.model('UserTrash', userSchema)
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mongoose = __webpack_require__(7);

// Create the Listings table ==================================

var venueSchema = mongoose.Schema(_defineProperty({
    name: String,
    slug: String,
    popup: Boolean,
    disabled: Boolean,
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
    },
    email: String
}, 'phone', String));

//compile the model
module.exports = mongoose.model('Venue', venueSchema);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 41 */
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
 * Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
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
var preamble = 'FA "5.0.13"';

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dependencies
 */
const http = __webpack_require__(215);
const pkg = __webpack_require__(117);
const {
  helpers: {
    mergeData,
  },
  classes: {
    ResponseError,
  },
} = __webpack_require__(47);

/**
 * Sendgrid REST Client
 */
class Client {

  /**
   * Constructor
   */
  constructor() {

    //API key
    this.apiKey = '';

    //Default headers
    this.defaultHeaders = {
      'Accept': 'application/json',
      'User-agent': 'sendgrid/' + pkg.version + ';nodejs',
    };

    //Empty default request
    this.defaultRequest = {
      json: true,
      baseUrl: 'https://api.sendgrid.com/',
      url: '',
      method: 'GET',
      headers: {},
    };
  }

  /**
   * Set API key
   */
  setApiKey(apiKey) {
    this.apiKey = apiKey;
  }

  /**
   * Set default header
   */
  setDefaultHeader(key, value) {
    this.defaultHeaders[key] = value;
    return this;
  }

  /**
   * Set default request
   */
  setDefaultRequest(key, value) {
    this.defaultRequest[key] = value;
    return this;
  }

  /**
   * Create headers for request
   */
  createHeaders(data) {

    //Merge data with default headers
    const headers = mergeData(this.defaultHeaders, data);

    //Add API key, but don't overwrite if header already set
    if (typeof headers.Authorization === 'undefined' && this.apiKey) {
      headers.Authorization = 'Bearer ' + this.apiKey;
    }

    //Return
    return headers;
  }

  /**
   * Create request
   */
  createRequest(data) {

    //Keep URL parameter consistent
    if (data.uri) {
      data.url = data.uri;
      delete data.uri;
    }

    //Merge data with empty request
    const request = mergeData(this.defaultRequest, data);

    //Add headers
    request.headers = this.createHeaders(request.headers);
    return request;
  }

  /**
   * Do a request
   */
  request(data, cb) {

    //Create request
    const request = this.createRequest(data);

    //Perform request
    const promise = new Promise((resolve, reject) => {
      http(request, (error, response, body) => {

        //Request error
        if (error) {
          return reject(error);
        }

        //Response error
        if (response.statusCode >= 400) {
          return reject(new ResponseError(response));
        }

        //Successful response
        resolve([response, body]);
      });
    });

    // Throw and error incase function not passed
    if (cb && typeof cb !== 'function') {
      throw new Error('Callback passed is not a function.');
    }

    //Execute callback if provided
    if (cb) {
      promise
        .then(result => cb(null, result))
        .catch(error => cb(error, null));
    }

    //Return promise
    return promise;
  }
}

//Export class
module.exports = Client;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dependencies
 */
const EmailAddress = __webpack_require__(26);
const toCamelCase = __webpack_require__(21);
const toSnakeCase = __webpack_require__(22);
const deepClone = __webpack_require__(20);
const merge = __webpack_require__(198);
const wrapSubstitutions = __webpack_require__(46);

/**
 * Personalization class
 */
class Personalization {

  /**
   * Constructor
   */
  constructor(data) {

    //Init array and object placeholders
    this.to = [];
    this.cc = [];
    this.bcc = [];
    this.headers = {};
    this.customArgs = {};
    this.substitutions = {};
    this.substitutionWrappers = ['{{', '}}'];
    this.dynamicTemplateData = {};

    //Build from data if given
    if (data) {
      this.fromData(data);
    }
  }

  /**
   * From data
   */
  fromData(data) {

    //Expecting object
    if (typeof data !== 'object') {
      throw new Error('Expecting object for Mail data');
    }

    //Convert to camel case to make it workable, making a copy to prevent
    //changes to the original objects
    data = deepClone(data);
    data = toCamelCase(data, ['substitutions', 'dynamicTemplateData', 'customArgs', 'headers']);

    //Extract properties from data
    const {
      to, cc, bcc, subject, headers, customArgs, sendAt,
      substitutions, substitutionWrappers, dynamicTemplateData,
    } = data;

    //Set data
    this.setTo(to);
    this.setCc(cc);
    this.setBcc(bcc);
    this.setSubject(subject);
    this.setHeaders(headers);
    this.setSubstitutions(substitutions);
    this.setSubstitutionWrappers(substitutionWrappers);
    this.setCustomArgs(customArgs);
    this.setDynamicTemplateData(dynamicTemplateData);
    this.setSendAt(sendAt);
  }

  /**
   * Set subject
   */
  setSubject(subject) {
    if (typeof subject === 'undefined') {
      return;
    }
    if (typeof subject !== 'string') {
      throw new Error('String expected for `subject`');
    }
    this.subject = subject;
  }

  /**
   * Set send at
   */
  setSendAt(sendAt) {
    if (typeof sendAt === 'undefined') {
      return;
    }
    if (!Number.isInteger(sendAt)) {
      throw new Error('Integer expected for `sendAt`');
    }
    this.sendAt = sendAt;
  }

  /**
   * Set to
   */
  setTo(to) {
    if (typeof to === 'undefined') {
      return;
    }
    if (!Array.isArray(to)) {
      to = [to];
    }
    this.to = EmailAddress.create(to);
  }

  /**
   * Add a single to
   */
  addTo(to) {
    if (typeof to === 'undefined') {
      return;
    }
    this.to.push(EmailAddress.create(to));
  }

  /**
   * Set cc
   */
  setCc(cc) {
    if (typeof cc === 'undefined') {
      return;
    }
    if (!Array.isArray(cc)) {
      cc = [cc];
    }
    this.cc = EmailAddress.create(cc);
  }

  /**
   * Add a single cc
   */
  addCc(cc) {
    if (typeof cc === 'undefined') {
      return;
    }
    this.cc.push(EmailAddress.create(cc));
  }

  /**
   * Set bcc
   */
  setBcc(bcc) {
    if (typeof bcc === 'undefined') {
      return;
    }
    if (!Array.isArray(bcc)) {
      bcc = [bcc];
    }
    this.bcc = EmailAddress.create(bcc);
  }

  /**
   * Add a single bcc
   */
  addBcc(bcc) {
    if (typeof bcc === 'undefined') {
      return;
    }
    this.bcc.push(EmailAddress.create(bcc));
  }

  /**
   * Set headers
   */
  setHeaders(headers) {
    if (typeof headers === 'undefined') {
      return;
    }
    if (typeof headers !== 'object' || headers === null) {
      throw new Error('Object expected for `headers`');
    }
    this.headers = headers;
  }

  /**
   * Add a header
   */
  addHeader(key, value) {
    if (typeof key !== 'string') {
      throw new Error('String expected for header key');
    }
    if (typeof value !== 'string') {
      throw new Error('String expected for header value');
    }
    this.headers[key] = value;
  }

  /**
   * Set custom args
   */
  setCustomArgs(customArgs) {
    if (typeof customArgs === 'undefined') {
      return;
    }
    if (typeof customArgs !== 'object' || customArgs === null) {
      throw new Error('Object expected for `customArgs`');
    }
    this.customArgs = customArgs;
  }

  /**
   * Add a custom arg
   */
  addCustomArg(key, value) {
    if (typeof key !== 'string') {
      throw new Error('String expected for custom arg key');
    }
    if (typeof value !== 'string') {
      throw new Error('String expected for custom arg value');
    }
    this.customArgs[key] = value;
  }

  /**
   * Set substitutions
   */
  setSubstitutions(substitutions) {
    if (typeof substitutions === 'undefined') {
      return;
    }
    if (typeof substitutions !== 'object') {
      throw new Error('Object expected for `substitutions`');
    }
    this.substitutions = substitutions;
  }

  /**
   * Add a substitution
   */
  addSubstitution(key, value) {
    if (typeof key !== 'string') {
      throw new Error('String expected for substitution key');
    }
    if (typeof value !== 'string' && typeof value !== 'number') {
      throw new Error('String or Number expected for substitution value');
    }
    this.substitutions[key] = value;
  }

  /**
   * Reverse merge substitutions, preserving existing ones
   */
  reverseMergeSubstitutions(substitutions) {
    if (typeof substitutions === 'undefined' || substitutions === null) {
      return;
    }
    if (typeof substitutions !== 'object') {
      throw new Error(
        'Object expected for `substitutions` in reverseMergeSubstitutions'
      );
    }
    this.substitutions = Object.assign({}, substitutions, this.substitutions);
  }

  /**
   * Set substitution wrappers
   */
  setSubstitutionWrappers(wrappers) {
    if (typeof wrappers === 'undefined' || wrappers === null) {
      return;
    }

    if (!Array.isArray(wrappers) || wrappers.length !== 2) {
      throw new Error(
        'Array expected with two elements for `substitutionWrappers`'
      );
    }
    this.substitutionWrappers = wrappers;
  }

  /**
   * Reverse merge dynamic template data, preserving existing ones
   */
  deepMergeDynamicTemplateData(dynamicTemplateData) {
    if (typeof dynamicTemplateData === 'undefined' || dynamicTemplateData === null) {
      return;
    }
    if (typeof dynamicTemplateData !== 'object') {
      throw new Error(
        'Object expected for `dynamicTemplateData` in deepMergeDynamicTemplateData'
      );
    }
    this.dynamicTemplateData = merge(dynamicTemplateData, this.dynamicTemplateData);
  }

  /**
   * Set dynamic template data
   */
  setDynamicTemplateData(dynamicTemplateData) {
    if (typeof dynamicTemplateData === 'undefined') {
      return;
    }
    if (typeof dynamicTemplateData !== 'object') {
      throw new Error('Object expected for `dynamicTemplateData`');
    }
    this.dynamicTemplateData = dynamicTemplateData;
  }

  /**
   * To JSON
   */
  toJSON() {

    //Get data from self
    const {
      to, cc, bcc, subject, headers, customArgs, sendAt,
      substitutions, substitutionWrappers, dynamicTemplateData,
    } = this;

    //Initialize with mandatory values
    const json = {to};

    //Arrays
    if (Array.isArray(cc) && cc.length > 0) {
      json.cc = cc;
    }
    if (Array.isArray(bcc) && bcc.length > 0) {
      json.bcc = bcc;
    }

    //Objects
    if (Object.keys(headers).length > 0) {
      json.headers = headers;
    }
    if (substitutions && Object.keys(substitutions).length > 0) {
      const [left, right] = substitutionWrappers;
      json.substitutions = wrapSubstitutions(substitutions, left, right);
    }
    if (Object.keys(customArgs).length > 0) {
      json.customArgs = customArgs;
    }

    if (dynamicTemplateData && Object.keys(dynamicTemplateData).length > 0) {
      json.dynamicTemplateData = dynamicTemplateData;
    }

    //Simple properties
    if (typeof subject !== 'undefined') {
      json.subject = subject;
    }
    if (typeof sendAt !== 'undefined') {
      json.sendAt = sendAt;
    }

    //Return as snake cased object
    return toSnakeCase(json, ['substitutions', 'dynamicTemplateData', 'customArgs', 'headers']);
  }
}

//Export class
module.exports = Personalization;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Helper to convert an array of objects to JSON
 */
module.exports = function arrayToJSON(arr) {
  return arr.map(item => {
    if (typeof item === 'object' && item !== null && typeof item.toJSON === 'function') {
      return item.toJSON();
    }
    return item;
  });
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Split name and email address from string
 */
module.exports = function splitNameEmail(str) {

  //If no email bracket present, return as is
  if (str.indexOf('<') === -1) {
    return ['', str];
  }

  //Split into name and email
  let [name, email] = str.split('<');

  //Trim and fix up
  name = name.trim();
  email = email.replace('>', '').trim();

  //Return as array
  return [name, email];
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Wrap substitutions
 */
module.exports = function wrap(substitutions, left = '{{', right = '}}') {

  //Process arrays
  if (Array.isArray(substitutions)) {
    return substitutions.map(subs => wrap(subs, left, right));
  }

  //Initialize new wrapped object
  const wrapped = {};

  //Map substitutions and ensure string for value
  for (const key in substitutions) {
    //istanbul ignore else
    if (substitutions.hasOwnProperty(key)) {
      wrapped[left + key + right] = String(substitutions[key]);
    }
  }

  //Return wrapped substitutions
  return wrapped;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Load support assets
 */
const classes = __webpack_require__(120);
const helpers = __webpack_require__(123);

/**
 * Export
 */
module.exports = {classes, helpers};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dependencies
 */
const {Client} = __webpack_require__(116);
const {classes: {Mail}} = __webpack_require__(47);

/**
 * Mail service class
 */
class MailService {

  /**
   * Constructor
   */
  constructor() {

    //Set client and initialize substitution wrappers
    this.setClient(new Client());
    this.setSubstitutionWrappers('{{', '}}');
  }

  /**
   * Set client
   */
  setClient(client) {
    this.client = client;
  }

  /**
   * API key pass through for convenience
   */
  setApiKey(apiKey) {
    this.client.setApiKey(apiKey);
  }

  /**
   * Set substitution wrappers
   */
  setSubstitutionWrappers(left, right) {
    if (typeof left === 'undefined' || typeof right === 'undefined') {
      throw new Error('Must provide both left and right side wrappers');
    }
    if (!Array.isArray(this.substitutionWrappers)) {
      this.substitutionWrappers = [];
    }
    this.substitutionWrappers[0] = left;
    this.substitutionWrappers[1] = right;
  }

  /**
   * Send email
   */
  send(data, isMultiple = false, cb) {

    //Callback as second parameter
    if (typeof isMultiple === 'function') {
      cb = isMultiple;
      isMultiple = false;
    }

    //Array? Send in parallel
    if (Array.isArray(data)) {

      //Create promise
      const promise = Promise.all(data.map(item => {
        return this.send(item, isMultiple);
      }));

      //Execute callback if provided
      if (cb) {
        promise
          .then(result => cb(null, result))
          .catch(error => cb(error, null));
      }

      //Return promise
      return promise;
    }

    //Send mail
    try {

      //Append multiple flag to data if not set
      if (typeof data.isMultiple === 'undefined') {
        data.isMultiple = isMultiple;
      }

      //Append global substitution wrappers if not set in data
      if (typeof data.substitutionWrappers === 'undefined') {
        data.substitutionWrappers = this.substitutionWrappers;
      }

      //Create Mail instance from data and get JSON body for request
      const mail = Mail.create(data);
      const body = mail.toJSON();

      //Create request
      const request = {
        method: 'POST',
        url: '/v3/mail/send',
        body,
      };

      //Send
      return this.client.request(request, cb);
    }

    //Catch sync errors
    catch (error) {

      //Pass to callback if provided
      if (cb) {
        cb(error, null);
      }

      //Reject promise
      return Promise.reject(error);
    }
  }

  /**
   * Send multiple emails (shortcut)
   */
  sendMultiple(data, cb) {
    return this.send(data, true, cb);
  }
}

//Export class
module.exports = MailService;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(15);

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArtistsActions = function () {
    function ArtistsActions() {
        _classCallCheck(this, ArtistsActions);

        this.generateActions('getAllArtistsSuggestionsAttempt', 'getAllArtistsSuggestionsSuccess', 'getAllArtistsSuggestionsFailure');
    }

    _createClass(ArtistsActions, [{
        key: 'getAllArtistsSuggestions',
        value: async function getAllArtistsSuggestions() {
            var _this = this;

            console.log('in ArtistActions');

            this.getAllArtistsSuggestionsAttempt.defer();

            await fetch('/artist/allartists', {
                method: 'GET'
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (data) {
                _this.getAllArtistsSuggestionsSuccess(data);
            }).catch(function (error) {
                _this.getAllArtistsSuggestionsFailure(error);
            });
        }
    }]);

    return ArtistsActions;
}();

exports.default = _alt2.default.createActions(ArtistsActions);

/***/ }),
/* 50 */
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
/* 51 */
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

var _EventActions = __webpack_require__(14);

var _EventActions2 = _interopRequireDefault(_EventActions);

var _reactRouter = __webpack_require__(4);

var _reactstrap = __webpack_require__(2);

var _DateBlock = __webpack_require__(8);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _ListingNameDisplay = __webpack_require__(23);

var _ListingNameDisplay2 = _interopRequireDefault(_ListingNameDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import AuthActions from '../../actions/AuthActions';

//import moment from 'moment'
//COMPONENTS


var Event = function (_React$Component) {
    _inherits(Event, _React$Component);

    function Event(props) {
        _classCallCheck(this, Event);

        var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));

        _this.state = {
            fullInfo: false,
            fullEvents: false,
            canToggle: true

            // Function binding
        };_this._revealInfo = _this._revealInfo.bind(_this);
        //this.addToList = this.addToList.bind(this)
        return _this;
    }

    //Function to add a listing to the personal list
    /* addToList(e, listing){
        if (this.props.user._id){
            //Select this listing
            var thislisting = $(e.target).closest('.listing');
             //Add or remove the listing to the user's list
            AuthActions.addToUserList(listing);
             thislisting.toggleClass('selected');
        }
    } */

    _createClass(Event, [{
        key: '_editEvent',
        value: function _editEvent(event) {
            event.type === 'reception' ? _ListActions2.default.getListingInfo(event.list._id) : _EventActions2.default.editEvent(event);
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
        key: 'render',
        value: function render() {
            var _this2 = this;

            var event = this.props.event;

            var address = event.venue && _react2.default.createElement(
                'span',
                { className: 'address' },
                event.venue.address1,
                ' ',
                event.venue.address2,
                event.venue.city !== '' && ', ',
                event.venue.city
            );

            var fullDates = _react2.default.createElement(
                'span',
                { className: 'date' },
                _react2.default.createElement(_DateBlock2.default, { date: event.date })
            );

            var name = event.list ? event.type == "closing" ? _react2.default.createElement(
                'span',
                null,
                'Closing Reception: ',
                _react2.default.createElement(_ListingNameDisplay2.default, _extends({}, event.list, { artists: event.artists }))
            ) : event.type == "reception" ? _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(_ListingNameDisplay2.default, _extends({}, event.list, { artists: event.artists }))
            ) : _react2.default.createElement(
                'span',
                null,
                event.name && event.name + ': ',
                _react2.default.createElement(_ListingNameDisplay2.default, _extends({}, event.list, { artists: event.artists }))
            ) : event.name;

            // Check if the listing is in mylist
            /* let mylistIndex = 0
            if (this.props.user.mylist) {
                mylistIndex = this.props.user.mylist.filter(function(v) {
                    return v._id === event._id
                }).length;   
            } */

            //let mylistingIcon = mylistIndex > 0 ? ["far", "minus"] : ["far", "plus"]

            //Thumbnail
            //const image = listing.image? "https://res.cloudinary.com/artcritical/image/upload/" + listing.image + ".jpg" : 'https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg'
            //const style = {backgroundImage: 'url(' + image + ')'}


            return _react2.default.createElement(
                'div',
                { className: 'venue' },
                _react2.default.createElement(
                    'div',
                    { className: 'venueInfo' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'venueName', to: "/venue/" + event.venue.slug },
                        event.venue.name
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: "event " + (this.state.fullInfo ? 'active ' : '') },
                    _react2.default.createElement(
                        'div',
                        { className: 'listingContent' },
                        _react2.default.createElement(
                            'div',
                            { className: 'header cf' },
                            _react2.default.createElement(
                                'div',
                                { className: 'title' },
                                name,
                                ' '
                            ),
                            fullDates,
                            _react2.default.createElement(
                                'span',
                                { className: 'icons' },
                                _react2.default.createElement(_reactFontawesome2.default, { onClick: this._revealInfo, icon: ['fal', 'info-circle'] }),
                                this.props.onMap && _react2.default.createElement(_reactFontawesome2.default, { onClick: this.props.mapMouseEnter, icon: ['fal', 'search'] })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'listingActions' },
                                this.props.user.userAccess > 0 && //If you are seeing this as an editor
                                _react2.default.createElement(
                                    'a',
                                    { onClick: function onClick(e) {
                                            return _this2._editEvent(event);
                                        }, className: 'edit' },
                                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'edit'] })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactstrap.Collapse,
                            { isOpen: this.state.fullInfo },
                            _react2.default.createElement(
                                _reactstrap.Card,
                                null,
                                _react2.default.createElement(
                                    _reactstrap.CardTitle,
                                    null,
                                    'Information'
                                ),
                                _react2.default.createElement(
                                    _reactstrap.CardBlock,
                                    null,
                                    event.description && _react2.default.createElement(
                                        'div',
                                        { className: 'notes' },
                                        _react2.default.createElement(
                                            'h3',
                                            null,
                                            'Notes'
                                        ),
                                        ' ',
                                        event.description
                                    ),
                                    fullDates,
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'venueFullInfo' },
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { className: 'venueName', to: "/venue/" + event.venue.slug },
                                            event.venue.name
                                        ),
                                        _react2.default.createElement('br', null),
                                        address
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Event;
}(_react2.default.Component);

exports.default = Event;

/***/ }),
/* 52 */
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

var htmlText = function (_React$Component) {
  _inherits(htmlText, _React$Component);

  function htmlText() {
    _classCallCheck(this, htmlText);

    return _possibleConstructorReturn(this, (htmlText.__proto__ || Object.getPrototypeOf(htmlText)).apply(this, arguments));
  }

  _createClass(htmlText, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content } });
    }
  }]);

  return htmlText;
}(_react2.default.Component);

exports.default = htmlText;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _VenueBlock = __webpack_require__(12);

var _VenueBlock2 = _interopRequireDefault(_VenueBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var VenueList = function (_React$Component) {
    _inherits(VenueList, _React$Component);

    function VenueList(props) {
        _classCallCheck(this, VenueList);

        return _possibleConstructorReturn(this, (VenueList.__proto__ || Object.getPrototypeOf(VenueList)).call(this, props));
    }

    _createClass(VenueList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var currentVenue = '';
            var listingsExport = [];

            //Render listings inside a neighborhood div
            var thelistRender = function thelistRender(listings) {
                return listings.map(function (listing, index) {
                    if (index == 0) {
                        //If it is the first listing
                        listingsExport.push(listing);
                        currentVenue = listing.venue._id;
                        return true;
                    }
                    if (index == _this2.props.listings.length - 1) {
                        //If it is the last listing
                        if (currentVenue !== listing.venue._id) {
                            return [_react2.default.createElement(_VenueBlock2.default, _extends({ key: listing._id }, _this2.props, { listings: listingsExport })), _react2.default.createElement(_VenueBlock2.default, _extends({ key: index }, _this2.props, { listings: [listing] }))];
                        } else {
                            listingsExport.push(listing);
                            return _react2.default.createElement(_VenueBlock2.default, _extends({ key: listing._id }, _this2.props, { listings: listingsExport }));
                        }
                    }
                    if (currentVenue !== listing.venue._id) {
                        //New venue
                        currentVenue = listing.venue._id;

                        //Transfer the export to delete it securely
                        var thisExport = listingsExport;
                        listingsExport = [listing];

                        return _react2.default.createElement(_VenueBlock2.default, _extends({ key: listing._id }, _this2.props, { listings: thisExport }));
                    } else {
                        //Same venue
                        listingsExport.push(listing);
                        currentVenue = listing.venue._id;
                        return true;
                    }
                });
            };

            return _react2.default.createElement(
                'div',
                { className: 'venuesWrap' },
                this.props.listings.length == 1 ? _react2.default.createElement(_VenueBlock2.default, this.props) : thelistRender(this.props.listings)
            );
        }
    }]);

    return VenueList;
}(_react2.default.Component);

exports.default = VenueList;

/***/ }),
/* 54 */
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _reactIntl = __webpack_require__(25);

var _imageBlock = __webpack_require__(30);

var _imageBlock2 = _interopRequireDefault(_imageBlock);

var _HtmlText = __webpack_require__(52);

var _HtmlText2 = _interopRequireDefault(_HtmlText);

var _Helmet = __webpack_require__(9);

var _Helmet2 = _interopRequireDefault(_Helmet);

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
            var StrippedDescription = feature.text && feature.text.replace(/(<([^>]+)>)/ig, "");

            return _react2.default.createElement(
                'div',
                { className: 'feature-wrap' },
                _react2.default.createElement(
                    'h5',
                    null,
                    'Featured'
                ),
                _react2.default.createElement(_Helmet2.default, {
                    ogTitle: listing.name + " at " + venue.name,
                    ogDescription: StrippedDescription,
                    ogImage: "https://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg"
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'picture' },
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
                    _react2.default.createElement(_HtmlText2.default, { content: feature.text }),
                    listing.description && _react2.default.createElement(
                        'div',
                        { className: 'notes' },
                        _react2.default.createElement(
                            'h6',
                            null,
                            'Notes'
                        ),
                        listing.description
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
                    ) : '',
                    _react2.default.createElement(
                        'div',
                        { className: 'shareWrap' },
                        _react2.default.createElement('div', { className: 'fb-share-button',
                            'data-href': 'https://list.artcritical.com',
                            'data-layout': 'button_count' })
                    )
                )
            );
        }
    }]);

    return FeatureBlock;
}(_react2.default.Component);

exports.default = FeatureBlock;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(50);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _ListingsNeighborhood = __webpack_require__(150);

var _ListingsNeighborhood2 = _interopRequireDefault(_ListingsNeighborhood);

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
            var renderListings = [];
            var neighborExport = [];
            var title = '';
            var cityID = '0';
            var cityChange = false;
            var num = this.props.listings.length - 1;

            var thelistRender = function thelistRender(listings) {
                return listings.map(function (listing, index) {
                    if (listing) {
                        listing.key = listing._id;

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
                            var contentRender = _react2.default.createElement(_ListingsNeighborhood2.default, _extends({ key: listing._id }, _this2.props, { listings: renderListings, title: title }));
                            renderListings = [];

                            // Update neighborhood
                            secondaryNH = newSecondaryNH;
                            newSecondaryNH = _displayActions2.default.displayNeighborhood(secondaryNH);
                            title = newSecondaryNH;

                            //Add listing to next batch
                            renderListings.push(listing);

                            //Add last neighborhood to the current City
                            neighborExport.push(contentRender);

                            if (newCity !== city) {

                                // Create the last city
                                var cityRender = neighborExport.length > 0 && _react2.default.createElement(
                                    'div',
                                    { key: listing._id, id: 'city' + cityID, className: 'city' },
                                    neighborExport
                                );
                                neighborExport = [];

                                //Update city
                                city = newCity;
                                cityChange = true;

                                if (num == index) {
                                    //If this is the last listing, we need to include it in the export
                                    //Add last neighborhood to the current City
                                    neighborExport = _react2.default.createElement(
                                        'div',
                                        { key: listing._id, id: 'city' + (cityID + 1), className: 'city' },
                                        _react2.default.createElement(_ListingsNeighborhood2.default, _extends({}, _this2.props, { listings: renderListings, title: title }))
                                    );

                                    cityRender = [cityRender]; //Make cityRender a table so we can add a second <div>
                                    cityRender.push(neighborExport);

                                    return cityRender;
                                }

                                // Export the last city
                                if (index !== 1) {
                                    return cityRender;
                                }
                            }
                        } else {
                            renderListings.push(listing);

                            if (num == index) {

                                var contentRender = _react2.default.createElement(_ListingsNeighborhood2.default, _extends({ key: listing._id }, _this2.props, { listings: renderListings, title: title }));

                                //Add last neighborhood to the current City
                                neighborExport.push(contentRender);

                                var cityRender = neighborExport.length > 0 && _react2.default.createElement(
                                    'div',
                                    { key: listing._id, id: 'city' + cityID, className: 'city' },
                                    neighborExport
                                );
                                return cityRender;
                            }
                        }
                    }
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(71);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _googleMapReact = __webpack_require__(200);

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _singleMarker = __webpack_require__(155);

var _singleMarker2 = _interopRequireDefault(_singleMarker);

var _reactMapGl = __webpack_require__(18);

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
        _this._resizeMap = _this._resizeMap.bind(_this);
        return _this;
    }

    _createClass(MapBlock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //Resize the map in the background
            this._resizeMap();
            window.addEventListener("resize", this._resizeMap);
        }
    }, {
        key: '_resizeMap',
        value: function _resizeMap() {
            // Create variable to change property
            var viewport = _extends({}, this.state.viewport, {
                width: this.refs.mapWrap.offsetWidth,
                height: this.refs.mapWrap.offsetHeight
                //Update state
            });this.setState({
                viewport: viewport
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
                { className: 'map', ref: 'mapWrap' },
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoodNav = function (_React$Component) {
  _inherits(HoodNav, _React$Component);

  function HoodNav(props) {
    _classCallCheck(this, HoodNav);

    var _this = _possibleConstructorReturn(this, (HoodNav.__proto__ || Object.getPrototypeOf(HoodNav)).call(this, props));

    _this.scrollTo = _this.scrollTo.bind(_this);
    return _this;
  }

  _createClass(HoodNav, [{
    key: 'scrollTo',
    value: function scrollTo(e) {
      document.getElementById(e.target.value).scrollIntoView();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'hoodNav' },
        _react2.default.createElement(
          'h3',
          null,
          'Jump to a neighborhood'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#city10' },
              'Tribeca'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#city20' },
              'Lower East Side'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#city30' },
              'Soho & Noho & East Village'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#city60' },
              'West Village & Chelsea'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#city170' },
              'Midtown & Uptown & Harlem'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#city220' },
              'Brooklyn'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#city270' },
              'Queens & Bronx & Staten Island'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#city300' },
              'Long Island'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#city310' },
              'Upstate New York'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#city320' },
              'New Jersey'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#city330' },
              'Philadelphia'
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Input,
          { type: 'select', name: 'select', onChange: this.scrollTo },
          _react2.default.createElement(
            'option',
            { value: 'city10' },
            'Tribeca'
          ),
          _react2.default.createElement(
            'option',
            { value: 'city20' },
            'Lower East Side'
          ),
          _react2.default.createElement(
            'option',
            { value: 'city30' },
            'Soho & Noho & East Village'
          ),
          _react2.default.createElement(
            'option',
            { value: 'city60' },
            'West Village & Chelsea'
          ),
          _react2.default.createElement(
            'option',
            { value: 'city170' },
            'Midtown & Uptown & Harlem'
          ),
          _react2.default.createElement(
            'option',
            { value: 'city220' },
            'Brooklyn'
          ),
          _react2.default.createElement(
            'option',
            { value: 'city270' },
            'Queens & Bronx & Staten Island'
          ),
          _react2.default.createElement(
            'option',
            { value: 'city300' },
            'Long Island'
          ),
          _react2.default.createElement(
            'option',
            { value: 'city310' },
            'Upstate New York'
          ),
          _react2.default.createElement(
            'option',
            { value: 'city320' },
            'New Jersey'
          ),
          _react2.default.createElement(
            'option',
            { value: 'city330' },
            'Philadelphia'
          )
        )
      );
    }
  }]);

  return HoodNav;
}(_react2.default.Component);

exports.default = HoodNav;

/***/ }),
/* 59 */
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

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var SizeSelector = function (_React$Component) {
    _inherits(SizeSelector, _React$Component);

    function SizeSelector(props) {
        _classCallCheck(this, SizeSelector);

        var _this = _possibleConstructorReturn(this, (SizeSelector.__proto__ || Object.getPrototypeOf(SizeSelector)).call(this, props));

        _this.viewChange = _this.viewChange.bind(_this);
        return _this;
    }

    _createClass(SizeSelector, [{
        key: 'viewChange',
        value: function viewChange(e) {
            var size = $(e.target).data('size');
            console.log(e.target, size);
            _ListActions2.default.sizeChange(size);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'SizeSelector' },
                _react2.default.createElement(
                    'span',
                    { onClick: this.viewChange,
                        className: this.props.view == 'condensed' && 'active',
                        'data-size': 'condensed' },
                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'bars'] })
                ),
                _react2.default.createElement(
                    'span',
                    { onClick: this.viewChange,
                        'data-size': 'medium',
                        className: this.props.view == 'medium' && 'active' },
                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'bars'] })
                ),
                _react2.default.createElement(
                    'span',
                    { onClick: this.viewChange,
                        'data-size': 'large',
                        className: this.props.view == 'large' && 'active' },
                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'th'] })
                )
            );
        }
    }]);

    return SizeSelector;
}(_react2.default.Component);

exports.default = SizeSelector;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EventActions = __webpack_require__(14);

var _EventActions2 = _interopRequireDefault(_EventActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactstrap = __webpack_require__(2);

var _formDateSingle = __webpack_require__(64);

var _formDateSingle2 = _interopRequireDefault(_formDateSingle);

var _DateBlock = __webpack_require__(8);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _formSelect = __webpack_require__(16);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _ThumbnailInput = __webpack_require__(31);

var _ThumbnailInput2 = _interopRequireDefault(_ThumbnailInput);

var _confirmModal = __webpack_require__(13);

var _confirmModal2 = _interopRequireDefault(_confirmModal);

var _UserLink = __webpack_require__(29);

var _UserLink2 = _interopRequireDefault(_UserLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Components


var EventForm = function (_React$Component) {
    _inherits(EventForm, _React$Component);

    function EventForm(props) {
        _classCallCheck(this, EventForm);

        var _this = _possibleConstructorReturn(this, (EventForm.__proto__ || Object.getPrototypeOf(EventForm)).call(this, props));

        _this.state = {
            event: _this.props.event,
            updateModal: false,
            deleteModal: false,
            createModal: false,
            wasChanged: false, //check if any change was made to the event
            errorMessages: {}
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        _this.onConfirm = _this.onConfirm.bind(_this);
        _this.onDeleteConfirm = _this.onDeleteConfirm.bind(_this);
        _this.onCreateConfirm = _this.onCreateConfirm.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.onThumbChange = _this.onThumbChange.bind(_this);
        _this.toggleModal = _this.toggleModal.bind(_this);
        _this._validateVenue = _this._validateVenue.bind(_this);
        _this._validateDate = _this._validateDates.bind(_this);
        _this._validateName = _this._validateName.bind(_this);
        _this._validateAll = _this._validateAll.bind(_this);
        return _this;
    }

    _createClass(EventForm, [{
        key: 'toggleModal',
        value: function toggleModal(modalName) {
            this.setState(_defineProperty({}, modalName, !this.state[modalName]));
        }

        // Add the event to the database

    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            var newEvent = this.props.event;

            if (this.props.event._id) {
                //Edit the current event
                _EventActions2.default.updateEvent(newEvent);
            } else {
                //Create a new Event
                delete newEvent._id;
                _EventActions2.default.saveEvent(newEvent);
            }
        }

        //If thumbnail are edited

    }, {
        key: 'onThumbChange',
        value: function onThumbChange() {
            this.setState({
                wasChanged: true
            });
        }

        //Delete the event

    }, {
        key: 'handleDelete',
        value: function handleDelete() {
            _EventActions2.default.deleteEvent(this.props.event._id);
        }

        //confirm alert

    }, {
        key: 'onConfirm',
        value: function onConfirm(event) {
            event.preventDefault();
            if (this._validateAll()) {

                this.setState({
                    updateModal: true
                });
            }
        }

        //Duplicate

    }, {
        key: 'onDuplicate',
        value: function onDuplicate(event) {
            event.preventDefault();
            _EventActions2.default.eventDuplicate();
        }

        //confirm alert

    }, {
        key: 'onDeleteConfirm',
        value: function onDeleteConfirm(event) {
            event.preventDefault();
            this.setState({
                deleteModal: true
            });
        }
    }, {
        key: 'onCreateConfirm',
        value: function onCreateConfirm(event) {
            event.preventDefault();

            if (this._validateAll()) {

                this.setState({
                    createModal: true
                });
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            //Update values of inputs
            _EventActions2.default.eventInfoChange(event);
            this.setState({
                wasChanged: true
            });
        }
    }, {
        key: '_validateAll',
        value: function _validateAll() {
            var validVenue = this._validateVenue();
            var validDate = this._validateDate();
            var validName = this._validateName();

            var result = validVenue && validName && validDate ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.general = result ? '' : 'Please review the error messages above.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
        }

        //Validate the venue

    }, {
        key: '_validateVenue',
        value: function _validateVenue() {
            var result = this.props.event.venue._id ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.venue = result ? '' : 'Please enter a venue.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
        }
    }, {
        key: '_validateName',
        value: function _validateName() {
            var result = this.props.event.name ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.name = result ? '' : 'Please enter a name or an artist.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
        }
    }, {
        key: '_validateDates',
        value: function _validateDates() {
            var result = this.props.event.date ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.date = result ? '' : 'A date need to be defined.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
        }

        //Search as the user types in select box

    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            this.setState({
                wasChanged: true
            });
            if (data) {
                _ListActions2.default.getVenueInfo(data.value);
            } else {
                _ListActions2.default.resetVenue();
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var event = this.props.event;

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

            var venueData = event.venue._id && { value: event.venue._id, label: event.venue.name

                // If the event exists, offer to delete it
            };var deleteButton = event._id && _react2.default.createElement(
                _reactstrap.Button,
                { className: 'delete', color: 'danger', onClick: this.onDeleteConfirm },
                'Delete'
            );

            return _react2.default.createElement(
                'div',
                { id: 'eventForm' },
                !event._id && _react2.default.createElement(
                    _reactstrap.Alert,
                    { color: 'primary' },
                    'This is a draft event.'
                ),
                _react2.default.createElement(
                    _reactstrap.Form,
                    null,
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'group-venue' },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Venue'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_formSelect2.default, { value: venueData, handleSelectChange: this.handleSelectChange, getOptions: getOptions }),
                            this.state.errorMessages.venue && _react2.default.createElement(
                                _reactstrap.Alert,
                                { color: 'danger' },
                                this.state.errorMessages.venue
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'group-name' },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Name'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { name: 'name', placeholder: 'Event name', type: 'text', value: event.name ? event.name : '', onChange: this.handleChange }),
                            this.state.errorMessages.name && _react2.default.createElement(
                                _reactstrap.Alert,
                                { color: 'danger' },
                                this.state.errorMessages.name
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'group-dates' },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            ' Date '
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_formDateSingle2.default, { startDate: event.date ? event.date : null, onDatesChange: this.handleChange }),
                            this.state.errorMessages.date && _react2.default.createElement(
                                _reactstrap.Alert,
                                { color: 'danger' },
                                this.state.errorMessages.date
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'group-description' },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Description'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { type: 'textarea', name: 'description', value: event.description ? event.description : '', onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'group-thumbnail' },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Thumbnail'
                        ),
                        _react2.default.createElement(_ThumbnailInput2.default, _extends({}, event, { onChange: this.onThumbChange }))
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'byline' },
                        event.updated_by && _react2.default.createElement(
                            'p',
                            null,
                            'Edited by ',
                            _react2.default.createElement(_UserLink2.default, { user: event.updated_by }),
                            ' on ',
                            _react2.default.createElement(_DateBlock2.default, { date: event.updated_at })
                        ),
                        event.created_at && _react2.default.createElement(
                            'p',
                            null,
                            'Created on ',
                            _react2.default.createElement(_DateBlock2.default, { date: event.created_at })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { className: 'group-buttons' },
                        this.state.errorMessages.general && _react2.default.createElement(
                            _reactstrap.Alert,
                            { color: 'danger' },
                            this.state.errorMessages.general
                        ),
                        event._id ? _react2.default.createElement(
                            _reactstrap.Button,
                            { onClick: this.onConfirm, disabled: !this.state.wasChanged },
                            'Update'
                        ) : _react2.default.createElement(
                            _reactstrap.Button,
                            { onClick: this.onCreateConfirm },
                            'Create'
                        ),
                        deleteButton,
                        event._id && _react2.default.createElement(
                            _reactstrap.Button,
                            { onClick: this.onDuplicate },
                            'Duplicate'
                        )
                    )
                ),
                this.state.updateModal && _react2.default.createElement(_confirmModal2.default, {
                    toggle: this.toggleModal,
                    handleSubmit: this.handleSubmit,
                    name: 'updateModal',
                    textTitle: 'Update',
                    textAction: 'save this Event',
                    textConfirm: 'Saved!',
                    error: this.props.error.updateEvent,
                    success: this.props.success.updateEvent }),
                this.state.createModal && _react2.default.createElement(_confirmModal2.default, {
                    toggle: this.toggleModal,
                    handleSubmit: this.handleSubmit,
                    name: 'createModal',
                    textTitle: 'Create',
                    textAction: 'create this Event',
                    textConfirm: 'Created!',
                    error: this.props.error.saveEvent,
                    success: this.props.success.saveEvent }),
                this.state.deleteModal && _react2.default.createElement(_confirmModal2.default, {
                    toggle: this.toggleModal,
                    handleSubmit: this.handleDelete,
                    name: 'deleteModal',
                    textTitle: 'Delete',
                    textAction: 'delete this Event',
                    textConfirm: 'Deleted!',
                    error: this.props.error.deleteEvent,
                    success: this.props.success.deleteEvent })
            );
        }
    }]);

    return EventForm;
}(_react2.default.Component);

exports.default = EventForm;

/***/ }),
/* 61 */
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

var _reactRouter = __webpack_require__(4);

var _reactstrap = __webpack_require__(2);

var _formDateRange = __webpack_require__(164);

var _formDateRange2 = _interopRequireDefault(_formDateRange);

var _DateBlock = __webpack_require__(8);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _formSelect = __webpack_require__(16);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _ThumbnailInput = __webpack_require__(31);

var _ThumbnailInput2 = _interopRequireDefault(_ThumbnailInput);

var _EventsForm = __webpack_require__(160);

var _EventsForm2 = _interopRequireDefault(_EventsForm);

var _confirmModal = __webpack_require__(13);

var _confirmModal2 = _interopRequireDefault(_confirmModal);

var _UserLink = __webpack_require__(29);

var _UserLink2 = _interopRequireDefault(_UserLink);

var _ArtistTags = __webpack_require__(158);

var _ArtistTags2 = _interopRequireDefault(_ArtistTags);

var _ListingNameDisplay = __webpack_require__(23);

var _ListingNameDisplay2 = _interopRequireDefault(_ListingNameDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
            updateModal: false,
            deleteModal: false,
            createModal: false,
            wasChanged: false, //check if any change was made to the listing
            errorMessages: {}
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleArtistsChange = _this.handleArtistsChange.bind(_this);
        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        _this.onConfirm = _this.onConfirm.bind(_this);
        _this.onDeleteConfirm = _this.onDeleteConfirm.bind(_this);
        _this.onCreateConfirm = _this.onCreateConfirm.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.onEventsChange = _this.onEventsChange.bind(_this);
        _this.onThumbChange = _this.onThumbChange.bind(_this);
        _this.toggleModal = _this.toggleModal.bind(_this);
        _this._validateVenue = _this._validateVenue.bind(_this);
        _this._validateDates = _this._validateDates.bind(_this);
        _this._validateName = _this._validateName.bind(_this);
        _this._validateAll = _this._validateAll.bind(_this);
        return _this;
    }

    _createClass(ListingForm, [{
        key: 'toggleModal',
        value: function toggleModal(modalName) {
            this.setState(_defineProperty({}, modalName, !this.state[modalName]));
        }

        // Add the listing to the database

    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            var newListing = this.props.listing;

            //Make sure that the listing copies the venue's neighborhood
            newListing.neighborhood = newListing.venue.neighborhood;

            //Check and save only events that have a date
            var allEvents = [];
            newListing.relatedEvents.map(function (event) {
                if (event.date) {
                    allEvents.push(event);
                }
            });
            newListing.relatedEvents = allEvents;

            if (this.props.listing._id) {
                //Edit the current listing
                _ListActions2.default.updateListing(newListing);
            } else {
                //Create a new Listing
                delete newListing._id;
                _ListActions2.default.saveListing(newListing);
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

        //If thumbnail are edited

    }, {
        key: 'onThumbChange',
        value: function onThumbChange() {
            this.setState({
                wasChanged: true
            });
        }

        //Delete the listing

    }, {
        key: 'handleDelete',
        value: function handleDelete() {
            _ListActions2.default.deleteListing(this.props.listing._id);
        }

        // Create/Update confirm alert

    }, {
        key: 'onConfirm',
        value: function onConfirm(event) {
            event.preventDefault();
            if (this._validateAll()) {

                this.setState({
                    updateModal: true
                });
            }
        }

        //Duplicate

    }, {
        key: 'onDuplicate',
        value: function onDuplicate(event) {
            event.preventDefault();
            _ListActions2.default.listingDuplicate();
        }

        //Delete confirm alert

    }, {
        key: 'onDeleteConfirm',
        value: function onDeleteConfirm(event) {
            event.preventDefault();
            this.setState({
                deleteModal: true
            });
        }
    }, {
        key: 'onCreateConfirm',
        value: function onCreateConfirm(event) {
            event.preventDefault();
            if (this._validateAll()) {
                this.setState({
                    createModal: true
                });
            }
        }
    }, {
        key: '_validateAll',
        value: function _validateAll() {
            var validVenue = this._validateVenue();
            var validDates = this._validateDates();
            var validName = this._validateName();

            var result = validVenue && validName && validDates ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.general = result ? '' : 'Please review the error messages above.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
        }

        //Validate the venue

    }, {
        key: '_validateVenue',
        value: function _validateVenue() {
            var result = this.props.listing.venue._id ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.venue = result ? '' : 'Please enter a venue.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
        }
    }, {
        key: '_validateName',
        value: function _validateName() {
            var result = this.props.listing.name || this.props.listing.artists && this.props.listing.artists.length > 0 ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.name = result ? '' : 'Please enter a name or an artist.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
        }
    }, {
        key: '_validateDates',
        value: function _validateDates() {
            var result = this.props.listing.start && this.props.listing.end ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.dates = result ? '' : 'Both dates need to be defined.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
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
    }, {
        key: 'handleArtistsChange',
        value: function handleArtistsChange(artists) {
            //Update values of inputs
            _ListActions2.default.listingInfoChange({ target: { name: 'artists', value: artists } });
            this.setState({
                wasChanged: true
            });
        }

        //Search as the user types in select box

    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            this.setState({
                wasChanged: true
            });
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
            var _React$createElement;

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

            var venueData = listing.venue._id && { value: listing.venue._id, label: listing.venue.name

                // If the listing exists, offer to delete it
            };var deleteButton = listing._id && _react2.default.createElement(
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
                        { check: true, className: 'group-venue' },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Venue'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_formSelect2.default, { value: venueData, handleSelectChange: this.handleSelectChange, getOptions: getOptions }),
                            _react2.default.createElement(
                                'div',
                                { className: 'info' },
                                listing.venue._id && listing.venue.address1 + ' ' + listing.venue.address2 + ' ' + listing.venue.city
                            ),
                            this.state.errorMessages.venue && _react2.default.createElement(
                                _reactstrap.Alert,
                                { color: 'danger' },
                                this.state.errorMessages.venue
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'group-artists' },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Artists'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_ArtistTags2.default, { allArtists: this.props.allArtists, onChange: this.handleArtistsChange, value: listing.artists })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'group-name' },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Show Title'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { name: 'name', placeholder: 'Event name', type: 'text', value: listing.name, onChange: this.handleChange }),
                            this.state.errorMessages.name && _react2.default.createElement(
                                _reactstrap.Alert,
                                { color: 'danger' },
                                this.state.errorMessages.name
                            ),
                            _react2.default.createElement(_ListingNameDisplay2.default, listing)
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'group-dates' },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            ' Dates '
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_formDateRange2.default, { startDate: listing.start, endDate: listing.end, onDatesChange: this.handleChange }),
                            this.state.errorMessages.dates && _react2.default.createElement(
                                _reactstrap.Alert,
                                { color: 'danger' },
                                this.state.errorMessages.dates
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'group-description' },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Notes'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { type: 'textarea', name: 'description', value: listing.description, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'group-review' },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Review Link'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, (_React$createElement = { type: 'url', name: 'review', placeholder: 'Link' }, _defineProperty(_React$createElement, 'type', 'text'), _defineProperty(_React$createElement, 'value', listing.review), _defineProperty(_React$createElement, 'onChange', this.handleChange), _React$createElement))
                        )
                    ),
                    !listing.event && _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'group-events' },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Related Events'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_EventsForm2.default, { events: listing.relatedEvents ? listing.relatedEvents : [], onChange: this.onEventsChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'group-thumbnail' },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Thumbnail'
                        ),
                        _react2.default.createElement(_ThumbnailInput2.default, _extends({}, listing, { onChange: this.onThumbChange }))
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
                        { className: 'group-buttons' },
                        this.state.errorMessages.general && _react2.default.createElement(
                            _reactstrap.Alert,
                            { color: 'danger' },
                            this.state.errorMessages.general
                        ),
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
                this.state.updateModal && _react2.default.createElement(_confirmModal2.default, {
                    toggle: this.toggleModal,
                    handleSubmit: this.handleSubmit,
                    name: 'updateModal',
                    textTitle: 'Update',
                    textAction: 'save this Listing',
                    textConfirm: 'Saved!',
                    error: this.props.error.general,
                    success: this.props.success.updatelisting }),
                this.state.createModal && _react2.default.createElement(_confirmModal2.default, {
                    toggle: this.toggleModal,
                    handleSubmit: this.handleSubmit,
                    name: 'createModal',
                    textTitle: 'Create',
                    textAction: 'create this Listing',
                    textConfirm: 'Created!',
                    error: this.props.error.savelisting,
                    success: this.props.success.savelisting }),
                this.state.deleteModal && _react2.default.createElement(_confirmModal2.default, {
                    toggle: this.toggleModal,
                    handleSubmit: this.handleDelete,
                    name: 'deleteModal',
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(71);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _draftJsPluginsEditor = __webpack_require__(35);

var _draftJsPluginsEditor2 = _interopRequireDefault(_draftJsPluginsEditor);

var _draftJsInlineToolbarPlugin = __webpack_require__(199);

var _draftJsInlineToolbarPlugin2 = _interopRequireDefault(_draftJsInlineToolbarPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//let html = stateToHTML(contentState);
//let contentState = stateFromHTML(html);

var inlineToolbarPlugin = (0, _draftJsInlineToolbarPlugin2.default)();
var InlineToolbar = inlineToolbarPlugin.InlineToolbar;

var plugins = [inlineToolbarPlugin];

var MyEditor = function (_React$Component) {
    _inherits(MyEditor, _React$Component);

    function MyEditor(props) {
        _classCallCheck(this, MyEditor);

        return _possibleConstructorReturn(this, (MyEditor.__proto__ || Object.getPrototypeOf(MyEditor)).call(this, props));
    }

    _createClass(MyEditor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            __webpack_require__(188);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_draftJsPluginsEditor2.default, {
                    editorState: this.props.editorState,
                    onChange: this.props.onEditorChange,
                    plugins: plugins,
                    ref: function ref(element) {
                        _this2.editor = element;
                    }
                }),
                _react2.default.createElement(InlineToolbar, null)
            );
        }
    }]);

    return MyEditor;
}(_react2.default.Component);

exports.default = MyEditor;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(2);

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
                {
                    type: 'select',
                    name: 'neighborhood',
                    disabled: this.props.disabled,
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDates = __webpack_require__(36);

var _moment = __webpack_require__(6);

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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = __webpack_require__(208);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

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
                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['far', 'plus'] })
                )
            );
        }
    }]);

    return ImageUpload;
}(_react2.default.Component);

exports.default = ImageUpload;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MarkerDisplay = __webpack_require__(152);

var _MarkerDisplay2 = _interopRequireDefault(_MarkerDisplay);

var _reactMapGl = __webpack_require__(18);

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
/* 67 */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("draft-js-export-html");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("draft-js-import-html");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-reorder");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// config/passport.js

// load all the things we need
var LocalStrategy = __webpack_require__(204).Strategy;
var FacebookStrategy = __webpack_require__(203).Strategy;


// load up the user model
var UserModels = __webpack_require__(38);
var User = UserModels.user;
var Venue = __webpack_require__(39);

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
        if (err) {
          console.log(err);
          return done(null, err);
        }
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
          newUser.userAccess = 0;
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
    callbackURL: "https://list.artcritical.com/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'email', 'first_name', 'last_name']
  }, function (accessToken, refreshToken, profile, done) {

    //check user table for anyone with a facebook ID of profile.id
    User.findOne({ 'facebook.id': profile.id }).populate('mylist').exec(function (err, user) {
      if (err) {
        console.log("Error", err);
        return done(err);
      }
      //No user was found
      if (!user) {

        // create the user
        var newUser = new User();

        // set the user's local credentials
        newUser.firstname = profile.name.givenName;
        newUser.lastname = profile.name.familyName;
        newUser.slug = profile.displayName.replace(/\s+/g, '').toLowerCase();
        newUser.userAccess = 0;
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

// Create the Artist table ==================================

var artistSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    created_at: Date,
    updated_at: Date,
    updated_by: {
        type: String,
        ref: 'User'
    }
});

//compile the model
module.exports = {
    artist: mongoose.model('Artist', artistSchema),
    trash: mongoose.model('ArtistTrash', artistSchema)
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7);

// Create the Listings table ==================================

var eventSchema = mongoose.Schema({
    name: String,
    date: Date,
    description: String,
    type: String,
    venue: {
        type: String,
        ref: 'Venue'
    },
    list: {
        type: String,
        ref: 'List'
    },
    artists: [{
        type: String,
        ref: 'Artist'
    }],
    image: String,
    popularity: Number,
    created_at: Date,
    updated_at: Date,
    updated_by: {
        type: String,
        ref: 'User'
    }
});

//compile the model
module.exports = {
    event: mongoose.model('Event', eventSchema),
    trash: mongoose.model('EventTrash', eventSchema),
    archive: mongoose.model('EventArchive', eventSchema)
};

/***/ }),
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7);

// Create the Listings table ==================================

var listingSchema = mongoose.Schema({
    name: String,
    artists: [{
        type: String,
        ref: 'Artist'
    }],
    start: Date,
    end: Date,
    description: String,
    blurb: String,
    venue: {
        type: String,
        ref: 'Venue'
    },
    event: Boolean,
    image: String,
    thumb: String,
    popularity: Number,
    neighborhood: Number,
    review: String,
    created_at: Date,
    updated_at: Date,
    updated_by: {
        type: String,
        ref: 'User'
    },
    relatedEvents: [{
        type: String,
        ref: 'Event'
    }]
});

//compile the model
module.exports = {
    list: mongoose.model('List', listingSchema),
    trash: mongoose.model('Trash', listingSchema),
    archive: mongoose.model('Archive', listingSchema)
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(11);
var router = express.Router();

//#######################
// GET ALL Artists ===================
//#######################

router.get('/allartists', function (req, res) {
    var Artists = req.artists;

    Artists.find().exec(function (e, docs) {
        res.json(docs);
    });
});

//############################
// POST a new artist
//############################

router.post('/add', function (req, res) {
    var Artists = req.artists;

    // define a new entry
    var newartist = req.body;

    // Save when and who created it
    var now = new Date();
    newartist.created_at = now;
    newartist.updated_at = now;
    newartist.updated_by = req.user._id;

    console.log(newartist);

    newartist = new Artists(newartist);

    //Save this new entry
    newartist.save(function (err, newartist) {
        res.send(err === null ? {
            data: newartist
        } : {
            msg: err
        });
    });
});

module.exports = router;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _async = __webpack_require__(33);

var _async2 = _interopRequireDefault(_async);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(11);
var router = express.Router();
var passport = __webpack_require__(40);
var mongoose = __webpack_require__(7);
var crypto = __webpack_require__(195);
var sgMail = __webpack_require__(127);


var handleError = function handleError(string) {
    return { msg: string };
};

//###################################
// SIGNUP
//###################################

router.post('/signup', async function (req, res) {
    passport.authenticate('local-signup')(req, res, function () {
        // If logged in, we should have user info to send back
        if (req.user) {
            passport.authenticate('local-login')(req, res, function () {
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

            var now = (0, _moment2.default)();
            var newInfo = { lastConnection: now };
            var update = { $set: newInfo };

            Userlist.update({ _id: req.user._id }, update, { upsert: true }, function (err, updatedUser) {
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

//###################################
// FORGOT THE PASSWORD
//###################################

router.post('/forgot', function (req, res) {

    var Userlist = req.userlist;

    _async2.default.waterfall([function (done) {
        crypto.randomBytes(20, function (err, buf) {
            var token = buf.toString('hex');
            done(err, token);
        });
    }, function (token, done) {
        Userlist.findOne({ 'local.username': req.body.email }, function (err, user) {
            if (!user) {
                console.log('error', 'No account with that email address exists.');
                return res.redirect('/reset');
            }

            user.resetPasswordToken = token;
            user.resetPasswordExpires = (0, _moment2.default)().add(1, 'hours');

            user.save(function (err) {
                done(err, token, user);
            });
        });
    }, function (token, user, done) {

        // using SendGrid's v3 Node.js Library
        // https://github.com/sendgrid/sendgrid-nodejs

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        var msg = {
            to: user.local.username,
            from: 'hello@artcritical.com',
            subject: 'Password Reset',
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account at artcritical.\n\n' + 'Please click on the following link, or paste this into your browser to complete the process:\n\n' + 'http://' + req.headers.host + '/reset/' + token + '\n\n' + 'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            //html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };

        sgMail.send(msg);

        done();
    }], function (err) {
        if (err) return next(err);
        return res.json({ result: true });
    });
});

/*//###################################
 * Check the Reset TOKEN
 */ //###################################

router.post('/resettoken', function (req, res) {
    var Userlist = req.userlist;

    Userlist.findOne({ resetPasswordToken: req.body.token, resetPasswordExpires: { $gt: (0, _moment2.default)() } }, function (err, user) {
        return res.json(user);
    });
});

/*//###################################
* RESET the password
*/ //###################################

router.post('/reset', function (req, res) {

    var Userlist = req.userlist;

    console.log(req.body);

    _async2.default.waterfall([function (done) {
        Userlist.findOne({ resetPasswordToken: req.body.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
            if (!user) {
                console.log('No User');
                return res.json({ err: 'No User Found' });
            }

            user.local.password = user.generateHash(req.body.password);
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;

            user.save(function (err, newUser) {
                done(err, newUser);
            });
        });
    }, function (user, done) {

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        var msg = {
            to: user.local.username,
            from: 'hello@artcritical.com',
            subject: 'Your password has been changed',
            text: 'Hello,\n\n' + 'This is a confirmation that the password for your account ' + user.local.username + ' has just been changed.\n'
        };

        sgMail.send(msg);

        done();
    }], function (err) {
        return res.json({ err: '' });
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

    //CHECK IF USER IS CONNECTED
    if (req.user) {

        // define variables
        var userID = req.user._id;

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

    //Find today's date
    var today = (0, _moment2.default)().startOf('day');

    //CHECK IF USER IS CONNECTED
    if (req.user) {
        List.find().where('_id').in(req.user.mylist).where('end').gte(today).populate('venue').populate('relatedEvents').populate('artists').exec(function (e, docs) {
            res.json({ list: docs, user: req.user });
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

    console.log('auth/updateuser');
    var Userlist = req.userlist;

    var newInfo = req.body;

    Userlist.findOne({ _id: newInfo._id }, function (err, user) {
        if (user) {

            //If the password is changed
            if (newInfo.password1) {
                console.log('Hasing the password ' + newInfo.password1);
                newInfo.local.password = user.generateHash(newInfo.password1);
                console.log('Result: ' + newInfo.local.password);
            }

            console.log('New user info: ', newInfo);

            Userlist.update({ _id: newInfo._id }, { $set: newInfo }, { upsert: true }, function (err, updatedUser) {
                console.log('boom', updatedUser, newInfo._id);
                res.send(err === null ? {
                    newuser: updatedUser
                } : {
                    msg: err
                });
            });
        } else {
            res.send('No User Found');
        }
    });
});

//###################################
// DELETE USER 
//###################################
router.post('/deleteuser', function (req, res) {

    console.log('auth/deleteuser');
    var Userlist = req.userlist;
    var UserTrash = req.usertrash;

    var id = req.body;

    Userlist.findOne({ _id: id }, function (err, result) {

        if (result) {
            var swap = new UserTrash(result);
            swap._id = mongoose.Types.ObjectId();
            swap.isNew = true;

            swap.save(function (err, newtrash) {
                res.send(err === null ? {
                    data: newtrash
                } : {
                    msg: err
                });
            });

            result.remove();
        } else {
            res.send('No User Found');
        }
    });
});

//###################################
// GET ALL USERS
//###################################

router.get('/getallusers', function (req, res) {
    var Userlist = req.userlist;

    console.log('auth/getallusers');
    Userlist.find().sort('createdOn').limit(50).populate('mylist').exec(function (e, docs) {
        res.json(docs);
    });
});

module.exports = router;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(11);
var router = express.Router();
var mongoose = __webpack_require__(7);

//#######################
// GET ALL UPCOMING EVENTS
//#######################

router.get('/upcoming', function (req, res) {
    var Event = req.event;

    //Find today's date
    var today = (0, _moment2.default)().startOf('day');

    Event.find().where('date').gte(today).where('venue').exists().where('type').ne('reception').sort('date').populate('venue').populate('list').populate('artists').exec(function (e, docs) {
        console.log(docs);
        res.json(docs);
    });
});

//#######################
/* FIND listings based on text */
//#######################

router.get('/find/:regex_input', function (req, res, next) {
    var Event = req.event;

    var regexp = new RegExp(req.params.regex_input, "i");

    Event.find({ name: regexp }).exec(function (err, listings) {
        if (err) res.send(err);

        var results = [];
        listings.map(function (theevent) {
            results.push({
                value: theevent._id,
                label: theevent.name
            });
        });

        res.json(results);
    });
});

//#######################
// GET ONE listing 
//#######################
router.get('/getinfo/:id', function (req, res, next) {
    var Event = req.event;

    Event.findOne({
        _id: req.params.id
    }).where('venue').ne('').populate('venue').populate('updated_by').exec(function (e, docs) {
        if (e) res.send(e);
        res.json(docs);
    });
});

//############################
// POST a new event.
//############################

router.post('/add', function (req, res) {
    var Event = req.event;

    // define a new entry
    var newevent = req.body;

    // Save when and who created it
    var now = (0, _moment2.default)();
    newevent.created_at = now;
    newevent.updated_at = now;
    newevent.updated_by = req.user._id;

    newevent = new Event(newevent);

    //Save this new entry
    newevent.save(function (err, savedEvent) {
        res.send(err === null ? savedEvent : { msg: err });
    });
});

//#######################
// UPDATE a listing.
//#######################

router.post('/update', function (req, res) {
    var Event = req.event;

    // define a new entry
    var theevent = req.body;

    // Save when and who updated it
    var now = (0, _moment2.default)();
    theevent.updated_at = now;
    theevent.updated_by = req.user._id;

    theevent = new Event(theevent);

    Event.update({
        _id: theevent._id
    }, {
        $set: theevent
    }, function (err, data) {
        console.log('success: ', data);
        res.send(err === null ? {
            msg: ''
        } : {
            msg: err
        });
    });
});

//#######################
// DELETE an event.
//#######################

router.post('/delete/:event_id', function (req, res) {
    var Event = req.event;
    var EventTrash = req.eventTrash;

    var eventToDelete = req.params.event_id;

    Event.findOne({ _id: eventToDelete }, function (err, result) {

        var swap = new EventTrash(result);
        swap._id = mongoose.Types.ObjectId();
        swap.isNew = true;

        swap.save(function (err, newevent) {
            res.send(err === null ? {
                data: newevent
            } : {
                msg: err
            });
        });

        result.remove();
    });
});

module.exports = router;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(207);

var _reactRouter = __webpack_require__(4);

var _routes = __webpack_require__(184);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(11);
var router = express.Router();
// we'll use this to render our app to an html string

// and these to match the url to routes and then render

var history = __webpack_require__(201);
var historyObj = history.createMemoryHistory();

// Check if user is connected
/* function isAuth(req, res, next) {
  if (req.isAuthenticated()) { return next(null); }
  res.redirect('/')
} */

router.get('*', function (req, res) {
  var location = historyObj.createLocation(req.path);
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(11);
var router = express.Router();
var mongoose = __webpack_require__(7);

//#######################
// GET ALL listings ===================
//#######################

router.get('/alllistings', function (req, res) {
    var List = req.list;
    var Venue = req.venue;

    List.find().exec(function (e, docs) {
        docs.map(function (listing) {
            Venue.findOne({ name: listing.venue }).exec(function (e, venue) {
                if (venue) {
                    console.log('Found!');
                    listing.venue = venue._id;
                    List.update({
                        _id: listing._id
                    }, {
                        $set: listing
                    }, function (err, newlisting) {
                        console.log(err);
                    });
                }
            });
        });
        res.json(docs);
    });
});

//#######################
// GET currentlist to display.
//#######################

router.get('/currentlistings/:offset_ratio', function (req, res) {
    var List = req.list;

    //Find today's date
    var start = (0, _moment2.default)().startOf('day');
    var end = (0, _moment2.default)().endOf('day');

    //Count how many times we've fetched listings
    var offset_ratio = parseInt(req.params.offset_ratio) * 500;

    List.find().where('start').lte(end).where('end').gte(start).where('event').ne(true).where('venue').ne('').skip(offset_ratio).limit(500).sort({ neighborhood: 1, venue: 1 }).populate('venue').populate('artists').populate('relatedEvents').populate('updated_by').exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
// GET future list to display.
//#######################

router.get('/futurelistings/:offset_ratio', function (req, res) {
    var List = req.list;

    //Find today's date
    var today = (0, _moment2.default)().endOf('day');

    //Count how many times we've fetched listings
    var offset_ratio = parseInt(req.params.offset_ratio) * 100;

    List.find().where('start').gt(today).where('event').ne(true).where('venue').ne('').sort('neighborhood').skip(offset_ratio).limit(100).populate('venue').populate('artists').populate('relatedEvents').populate('updated_by').exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
// GET GLANCE list to display.
//#######################

router.get('/glancelistings', function (req, res) {
    var List = req.list;
    var Event = req.event;

    //Find today's date
    var today = (0, _moment2.default)().startOf('day');
    var inaWeek = (0, _moment2.default)().add(7, 'days').endOf('day');

    List.find({
        end: {
            $gte: today,
            $lte: inaWeek
        }
    }, {}).exists('venue').where('event').ne(true).sort('neighborhood').populate('venue').populate('artists').populate('relatedEvents').populate('updated_by').exec(function (e, listings) {
        if (e) {
            console.log('Error: ', e);
            res.send(e);
        } else Event.find({ date: { $gte: today, $lte: inaWeek } }, {}).populate('venue').populate('list').populate('artists').exec(function (e, events) {
            var docs = { listings: listings, events: events };
            res.json(docs);
        });
    });
});

//#######################
// GET LATEST LISTINGS to review
//#######################

router.get('/latestlistings', function (req, res) {
    var List = req.list;

    List.find().where('venue').ne('').where('updated_at').ne('').sort({ updated_at: -1 }).limit(20).populate('venue').populate('artists').populate('relatedEvents').exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
/* FIND listings based on text */
//#######################

router.get('/find/:regex_input', function (req, res, next) {
    var List = req.list;

    var regexp = new RegExp(req.params.regex_input, "i");

    List.find({ name: regexp }).populate('artists').exec(function (err, listings) {
        if (err) res.send(err);

        var results = [];
        listings.map(function (thelisting) {
            var artists = thelisting.artists && thelisting.artists.length <= 3 ? thelisting.artists.map(function (artist, index) {
                var comma = index < thelisting.artists.length - 1 ? ', ' : '';return artist.name + comma;
            }) : '';
            var colon = thelisting.artists.length && thelisting.name ? ': ' : '';
            var groupShow = thelisting.artists && thelisting.artists.length > 3 ? "Group Show" : '';
            results.push({
                value: thelisting._id,
                label: artists + groupShow + colon + thelisting.name
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
    var Event = req.event;

    List.findOne({
        _id: req.params.listing_id
    }).where('venue').ne('').populate('venue').populate('artists').populate('relatedEvents').populate('updated_by').exec(function (e, listing) {
        if (e) res.send(e);
        Event.find({ list: listing._id }).exec(function (e, docs) {
            var fullListing = listing;
            fullListing.relatedEvents = docs;
            res.json(fullListing);
        });
        //res.json(docs);
    });
});

//############################
// POST a new listing.
//############################

router.post('/add', function (req, res) {
    var List = req.list;
    var Artists = req.artists;
    var Event = req.event;

    // define a new entry
    var newlisting = req.body;

    // Save when and who created it
    var now = new _moment2.default();
    newlisting.created_at = now;
    newlisting.updated_at = now;
    newlisting.updated_by = req.user._id;

    //SAVE ALL THE ARTISTS
    var artistsfn = function saveArtists(artist) {
        // Save artist async
        if (artist._id) {
            return artist._id;
        } else {
            var newArtist = new Artists(artist);
            return new Promise(function (resolve) {
                newArtist.save(function (err, newArtist) {
                    resolve(newArtist._id);
                });
            });
        }
    };

    var saving = newlisting.artists.map(artistsfn); // run the function over all items

    var savedArtists = Promise.all(saving); // pass array of promises

    savedArtists.then(function (data) {

        newlisting.artists = data;

        //SAVE ALL THE EVENTS
        var eventsfn = function saveEvents(event) {
            // Save artist async

            var newEvent = event;
            newEvent.venue = newlisting.venue._id;
            newEvent.list = newlisting._id;
            newEvent.artists = newlisting.artists;
            var readyEvent = new Event(newEvent);

            return new Promise(function (resolve) {
                readyEvent.save(function (err, savedEvent) {
                    resolve(savedEvent._id);
                });
            });
        };

        var savingEvents = newlisting.relatedEvents.map(eventsfn); // run the function over all items

        var savedEvents = Promise.all(savingEvents); // pass array of promises

        savedEvents.then(function (data) {

            newlisting.relatedEvents = data;
            newlisting = new List(newlisting);

            //Save this new entry
            newlisting.save(function (err, newlisting) {
                res.send(err === null ? newlisting : { msg: err });
            });
        });
    });
});

//#######################
// UPDATE a listing.
//#######################

router.post('/update', function (req, res) {
    var List = req.list;
    var Artists = req.artists;
    var Event = req.event;

    // define a new entry
    var thelisting = req.body;

    // Save when and who updated it
    var now = (0, _moment2.default)();
    thelisting.updated_at = now;
    thelisting.updated_by = req.user._id;

    //SAVE ALL THE ARTISTS
    var artistsfn = function saveArtists(artist) {
        // Save artist async
        if (artist._id) {
            return artist._id;
        } else {
            var newArtist = new Artists(artist);
            return new Promise(function (resolve) {
                newArtist.save(function (err, newArtist) {
                    resolve(newArtist._id);
                });
            });
        }
    };

    var saving = thelisting.artists.map(artistsfn); // run the function over all items

    var savedArtists = Promise.all(saving); // pass array of promises

    savedArtists.then(function (data) {

        thelisting.artists = data;

        //SAVE ALL THE EVENTS
        var eventsfn = function saveEvents(event) {
            // Save artist async
            if (event._id) {

                var newEvent = event;
                newEvent.venue = thelisting.venue._id;
                newEvent.list = thelisting._id;
                newEvent.artists = thelisting.artists;

                return new Promise(function (resolve) {
                    Event.update({
                        _id: event._id
                    }, {
                        $set: newEvent
                    }, function (err, savedEvent) {
                        console.log(savedEvent);
                        resolve(savedEvent._id);
                    });
                });
            } else {
                var _newEvent = event;
                _newEvent.venue = thelisting.venue._id;
                _newEvent.list = thelisting._id;
                _newEvent.artists = thelisting.artists;
                var readyEvent = new Event(_newEvent);

                return new Promise(function (resolve) {
                    readyEvent.save(function (err, savedEvent) {
                        resolve(savedEvent._id);
                    });
                });
            }
        };

        var savingEvents = thelisting.relatedEvents.map(eventsfn); // run the function over all items

        var savedEvents = Promise.all(savingEvents); // pass array of promises

        savedEvents.then(function (data) {

            thelisting.relatedEvents = data;
            thelisting = new List(thelisting);

            List.update({
                _id: thelisting._id
            }, {
                $set: thelisting
            }, function (err, newlisting) {
                console.log(newlisting);
                res.send(err === null ? {
                    msg: ''
                } : {
                    msg: err
                });
            });
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
// FIND all featured articles
//#######################

router.post('/findfeatures', function (req, res) {
    var Feature = req.feature;

    console.log("Find all features");

    Feature.find().populate('list').populate('venue').exec(function (e, docs) {
        res.json(docs);
    });
});

//#######################
// FIND the current featured article
//#######################

router.post('/findcurrentfeatures', function (req, res) {
    var Feature = req.feature;

    console.log("Find all current features");

    Feature.find().populate('list').populate('venue').exec(function (e, docs) {

        var now = (0, _moment2.default)();
        var currentFeatures = [];

        //Check that all listings are current or future
        docs.map(function (feature) {
            feature.list && feature.list.end && (0, _moment2.default)(feature.list.end).isSameOrAfter(now, 'day') && currentFeatures.push(feature);
        });

        //Return the current feature listings
        console.log('Returned ' + currentFeatures.length + ' features');
        res.json(currentFeatures);
    });
});

//#######################
// DELETE a listing.
//#######################

router.post('/delete/:listing_id', function (req, res) {
    var List = req.list;
    var Trash = req.trash;

    console.log("Deleting one listing", req.params.listing_id);

    var listingToDelete = req.params.listing_id;

    List.findOne({ _id: listingToDelete }, function (err, result) {

        var swap = new Trash(result);
        swap._id = mongoose.Types.ObjectId();
        swap.isNew = true;

        swap.save(function (err, newlisting) {
            res.send(err === null ? {
                data: newlisting
            } : {
                msg: err
            });
        });

        result.remove();
    });
});

module.exports = router;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(11);
var router = express.Router();
var Promise = __webpack_require__(193);

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

router.get('/find/:regex', function (req, res, next) {
    var Venue = req.venue;

    var regexp = new RegExp(req.params.regex, "i");
    Venue.find({
        name: regexp
    }, function (err, venue) {
        if (err) res.send(err);
        var venues = [];
        venue.map(function (thevenue) {
            var name = thevenue.disabled ? 'DORMANT - ' + thevenue.name : thevenue.name;
            venues.push({
                value: thevenue._id,
                label: name
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
        console.log(docs);
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
    var today = (0, _moment2.default)().startOf('day');

    Venue.findOne({ slug: req.params.venue_slug }, function (err, venue) {
        if (err) res.send(err);

        if (venue) {
            List.find({ venue: venue._id }).where('start').lte(today).where('end').gte(today).populate('venue').populate('artists').populate('relatedEvents').exec(function (e, current) {

                List.find({ venue: venue._id }).where('start').gte(today).limit(4).populate('venue').populate('artists').populate('relatedEvents').exec(function (e, upcoming) {

                    List.find({ venue: venue._id }).where('end').lte(today).sort('-end').limit(4).populate('venue').populate('artists').populate('relatedEvents').exec(function (e, past) {
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
    var now = (0, _moment2.default)();
    newvenue.created_at = now;
    newvenue.updated_at = now;
    newvenue.updated_by = req.user._id;

    // Save this new entry
    newvenue.save(function (err, newvenue) {
        res.json(newvenue);
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
// UPDATE a venue.
//########################

router.post('/update', function (req, res) {
    var Venue = req.venue;

    // define a new entry
    var thevenue = new Venue(req.body);

    // Save when and who created it
    var now = (0, _moment2.default)();
    thevenue.updated_at = now;
    thevenue.updated_by = req.user._id;

    Venue.findOneAndUpdate({
        _id: thevenue._id
    }, {
        $set: thevenue
    }, { new: true }, //Sends back the new updated document
    function (err, data) {
        if (err) res.send(err);
        res.json(data);
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
/* 84 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("prerender-node");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fab', iconName: 'facebook', icon: [448, 512, [], "f09a", "M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"] };

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'bars', icon: [448, 512, [], "f0c9", "M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"] };

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'calendar', icon: [448, 512, [], "f133", "M400 64h-48V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H128V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM48 96h352c8.822 0 16 7.178 16 16v48H32v-48c0-8.822 7.178-16 16-16zm352 384H48c-8.822 0-16-7.178-16-16V192h384v272c0 8.822-7.178 16-16 16z"] };

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'edit', icon: [576, 512, [], "f044", "M417.8 315.5l20-20c3.8-3.8 10.2-1.1 10.2 4.2V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h292.3c5.3 0 8 6.5 4.2 10.2l-20 20c-1.1 1.1-2.7 1.8-4.2 1.8H48c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V319.7c0-1.6.6-3.1 1.8-4.2zm145.9-191.2L251.2 436.8l-99.9 11.1c-13.4 1.5-24.7-9.8-23.2-23.2l11.1-99.9L451.7 12.3c16.4-16.4 43-16.4 59.4 0l52.6 52.6c16.4 16.4 16.4 43 0 59.4zm-93.6 48.4L403.4 106 169.8 339.5l-8.3 75.1 75.1-8.3 233.5-233.6zm71-85.2l-52.6-52.6c-3.8-3.8-10.2-4-14.1 0L426 83.3l66.7 66.7 48.4-48.4c3.9-3.8 3.9-10.2 0-14.1z"] };

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'external-link-square', icon: [448, 512, [], "f14c", "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm16 400c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v352zM99.515 374.828c-4.686-4.686-4.686-12.284 0-16.971l195.15-195.15-.707-.707-89.958.342c-6.627 0-12-5.373-12-12v-9.999c0-6.628 5.372-12 12-12L340 128c6.627 0 12 5.372 12 12l-.343 136c0 6.627-5.373 12-12 12h-9.999c-6.627 0-12-5.373-12-12l.342-89.958-.707-.707-195.15 195.15c-4.686 4.686-12.284 4.686-16.971 0l-5.657-5.657z"] };

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'glass-martini', icon: [512, 512, [], "f000", "M508 26.6C517.1 16.3 509.7 0 496 0H16C2.3 0-5.1 16.3 4 26.6L240 294v186H122c-14.4 0-26 11.6-26 26 0 3.3 2.7 6 6 6h308c3.3 0 6-2.7 6-6 0-14.4-11.6-26-26-26H272V294L508 26.6zM460.5 32L256 263.8 51.5 32h409z"] };

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'info-circle', icon: [512, 512, [], "f05a", "M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"] };

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'link', icon: [512, 512, [], "f0c1", "M301.148 394.702l-79.2 79.19c-50.778 50.799-133.037 50.824-183.84 0-50.799-50.778-50.824-133.037 0-183.84l79.19-79.2a132.833 132.833 0 0 1 3.532-3.403c7.55-7.005 19.795-2.004 20.208 8.286.193 4.807.598 9.607 1.216 14.384.481 3.717-.746 7.447-3.397 10.096-16.48 16.469-75.142 75.128-75.3 75.286-36.738 36.759-36.731 96.188 0 132.94 36.759 36.738 96.188 36.731 132.94 0l79.2-79.2.36-.36c36.301-36.672 36.14-96.07-.37-132.58-8.214-8.214-17.577-14.58-27.585-19.109-4.566-2.066-7.426-6.667-7.134-11.67a62.197 62.197 0 0 1 2.826-15.259c2.103-6.601 9.531-9.961 15.919-7.28 15.073 6.324 29.187 15.62 41.435 27.868 50.688 50.689 50.679 133.17 0 183.851zm-90.296-93.554c12.248 12.248 26.362 21.544 41.435 27.868 6.388 2.68 13.816-.68 15.919-7.28a62.197 62.197 0 0 0 2.826-15.259c.292-5.003-2.569-9.604-7.134-11.67-10.008-4.528-19.371-10.894-27.585-19.109-36.51-36.51-36.671-95.908-.37-132.58l.36-.36 79.2-79.2c36.752-36.731 96.181-36.738 132.94 0 36.731 36.752 36.738 96.181 0 132.94-.157.157-58.819 58.817-75.3 75.286-2.651 2.65-3.878 6.379-3.397 10.096a163.156 163.156 0 0 1 1.216 14.384c.413 10.291 12.659 15.291 20.208 8.286a131.324 131.324 0 0 0 3.532-3.403l79.19-79.2c50.824-50.803 50.799-133.062 0-183.84-50.802-50.824-133.062-50.799-183.84 0l-79.2 79.19c-50.679 50.682-50.688 133.163 0 183.851z"] };

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'list-ul', icon: [512, 512, [], "f0ca", "M506 114H134a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h372a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm6 154v-24a6 6 0 0 0-6-6H134a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6zm0 160v-24a6 6 0 0 0-6-6H134a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6zM48 60c-19.882 0-36 16.118-36 36s16.118 36 36 36 36-16.118 36-36-16.118-36-36-36zm0 160c-19.882 0-36 16.118-36 36s16.118 36 36 36 36-16.118 36-36-16.118-36-36-36zm0 160c-19.882 0-36 16.118-36 36s16.118 36 36 36 36-16.118 36-36-16.118-36-36-36z"] };

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'map', icon: [576, 512, [], "f279", "M531.004 34.78L397.62 94.04 184.791 33.231a31.997 31.997 0 0 0-21.788 1.527l-144 64A32 32 0 0 0 0 128v319.978c0 23.291 23.994 38.577 44.996 29.242l133.384-59.26 212.829 60.808a31.997 31.997 0 0 0 21.788-1.527l144-64A31.997 31.997 0 0 0 576 384V64.022c0-23.291-23.994-38.577-44.996-29.242zM192 68.571l192 54.857v320l-192-54.857v-320zM32 448V128l128-56.889v320L32 448zm512-64l-128 56.889v-320L544 64v320z"] };

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'map-marker-alt', icon: [384, 512, [], "f3c5", "M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"] };

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'pencil-alt', icon: [512, 512, [], "f303", "M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zM164.686 347.313c6.249 6.249 16.379 6.248 22.627 0L368 166.627l30.059 30.059L174 420.745V386h-48v-48H91.255l224.059-224.059L345.373 144 164.686 324.687c-6.249 6.248-6.249 16.378 0 22.626zm-38.539 121.285l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"] };

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'plus-circle', icon: [512, 512, [], "f055", "M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"] };

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'search', icon: [512, 512, [], "f002", "M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"] };

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'spinner-third', icon: [512, 512, [], "f3f4", "M460.115 373.846l-6.941-4.008c-5.546-3.202-7.564-10.177-4.661-15.886 32.971-64.838 31.167-142.731-5.415-205.954-36.504-63.356-103.118-103.876-175.8-107.701C260.952 39.963 256 34.676 256 28.321v-8.012c0-6.904 5.808-12.337 12.703-11.982 83.552 4.306 160.157 50.861 202.106 123.67 42.069 72.703 44.083 162.322 6.034 236.838-3.14 6.149-10.75 8.462-16.728 5.011z"] };

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'th', icon: [512, 512, [], "f00a", "M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm320-16v106.667H192V64h128zm160 245.333H352V202.667h128v106.666zm-160 0H192V202.667h128v106.666zM32 202.667h128v106.667H32V202.667zM160 64v106.667H32V80c0-8.837 7.163-16 16-16h112zM32 432v-90.667h128V448H48c-8.837 0-16-7.163-16-16zm160 16V341.333h128V448H192zm160 0V341.333h128V432c0 8.837-7.163 16-16 16H352zm128-277.333H352V64h112c8.837 0 16 7.163 16 16v90.667z"] };

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'times', icon: [320, 512, [], "f00d", "M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"] };

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fal', iconName: 'trash', icon: [512, 512, [], "f1f8", "M368 64l-33.6-44.8C325.3 7.1 311.1 0 296 0h-80c-15.1 0-29.3 7.1-38.4 19.2L144 64H40c-13.3 0-24 10.7-24 24v2c0 3.3 2.7 6 6 6h20.9l33.2 372.3C78.3 493 99 512 123.9 512h264.2c24.9 0 45.6-19 47.8-43.7L469.1 96H490c3.3 0 6-2.7 6-6v-2c0-13.3-10.7-24-24-24H368zM216 32h80c5 0 9.8 2.4 12.8 6.4L328 64H184l19.2-25.6c3-4 7.8-6.4 12.8-6.4zm188 433.4c-.7 8.3-7.6 14.6-15.9 14.6H123.9c-8.3 0-15.2-6.3-15.9-14.6L75 96h362l-33 369.4z"] };

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = { prefix: 'far', iconName: 'minus', icon: [384, 512, [], "f068", "M368 224H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"] };

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = { prefix: 'far', iconName: 'phone', icon: [512, 512, [], "f095", "M476.5 22.9L382.3 1.2c-21.6-5-43.6 6.2-52.3 26.6l-43.5 101.5c-8 18.6-2.6 40.6 13.1 53.4l40 32.7C311 267.8 267.8 311 215.4 339.5l-32.7-40c-12.8-15.7-34.8-21.1-53.4-13.1L27.7 329.9c-20.4 8.7-31.5 30.7-26.6 52.3l21.7 94.2c4.8 20.9 23.2 35.5 44.6 35.5C312.3 512 512 313.7 512 67.5c0-21.4-14.6-39.8-35.5-44.6zM69.3 464l-20.9-90.7 98.2-42.1 55.7 68.1c98.8-46.4 150.6-98 197-197l-68.1-55.7 42.1-98.2L464 69.3C463 286.9 286.9 463 69.3 464z"] };

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = { prefix: 'far', iconName: 'plus', icon: [384, 512, [], "f067", "M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"] };

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = { prefix: 'fas', iconName: 'star', icon: [576, 512, [], "f005", "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"] };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const client = __webpack_require__(118);
const Client = __webpack_require__(42);

module.exports = client;
module.exports.Client = Client;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = {"_from":"@sendgrid/client@^6.3.0","_id":"@sendgrid/client@6.3.0","_inBundle":false,"_integrity":"sha512-fTy8vRpA9Whtf8ULQr/0vkSZaQvGQ97rY5N5PrevKRtugJMsJqFMKO0pwzEWeqITSg71aMMTj57QTgw3SjZvnQ==","_location":"/@sendgrid/client","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"@sendgrid/client@^6.3.0","name":"@sendgrid/client","escapedName":"@sendgrid%2fclient","scope":"@sendgrid","rawSpec":"^6.3.0","saveSpec":null,"fetchSpec":"^6.3.0"},"_requiredBy":["/@sendgrid/mail"],"_resolved":"https://registry.npmjs.org/@sendgrid/client/-/client-6.3.0.tgz","_shasum":"25c34b11bec392ab43ca7e52fb35e4105fb00901","_spec":"@sendgrid/client@^6.3.0","_where":"/Users/francoishuyghe/Sites/artcritical-list/node_modules/@sendgrid/mail","author":{"name":"SendGrid","email":"dx@sendgrid.com","url":"sendgrid.com"},"bugs":{"url":"https://github.com/sendgrid/sendgrid-nodejs/issues"},"bundleDependencies":false,"contributors":[{"name":"Kyle Partridge","email":"kyle.partridge@sendgrid.com"},{"name":"David Tomberlin","email":"david.tomberlin@sendgrid.com"},{"name":"Swift","email":"swift@sendgrid.com"},{"name":"Brandon West","email":"brandon.west@sendgrid.com"},{"name":"Scott Motte","email":"scott.motte@sendgrid.com"},{"name":"Robert Acosta","email":"robert.acosta@sendgrid.com"},{"name":"Elmer Thomas","email":"elmer.thomas@sendgrid.com"},{"name":"Adam Reis","email":"adam@reis.nz"}],"dependencies":{"@sendgrid/helpers":"^6.3.0","@types/request":"^2.0.3","request":"^2.81.0"},"deprecated":false,"description":"SendGrid NodeJS API client","engines":{"node":">=6.0.0"},"homepage":"https://sendgrid.com","license":"MIT","main":"index.js","name":"@sendgrid/client","publishConfig":{"access":"public"},"repository":{"type":"git","url":"git://github.com/sendgrid/sendgrid-nodejs.git"},"tags":["http","rest","api","mail","sendgrid"],"version":"6.3.0"}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dependencies
 */
const Client = __webpack_require__(42);

//Export singleton instance
module.exports = new Client();


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dependencies
 */
const toCamelCase = __webpack_require__(21);
const toSnakeCase = __webpack_require__(22);
const deepClone = __webpack_require__(20);

/**
 * Attachment class
 */
class Attachment {

	/**
	 * Constructor
	 */
  constructor(data) {

    //Create from data
    if (data) {
      this.fromData(data);
    }
  }

  /**
   * From data
   */
  fromData(data) {

    //Expecting object
    if (typeof data !== 'object') {
      throw new Error('Expecting object for Mail data');
    }

    //Convert to camel case to make it workable, making a copy to prevent
    //changes to the original objects
    data = deepClone(data);
    data = toCamelCase(data);

    //Extract properties from data
    const {content, filename, type, disposition, contentId} = data;

    //Set data
    this.setContent(content);
    this.setFilename(filename);
    this.setType(type);
    this.setDisposition(disposition);
    this.setContentId(contentId);
  }

  /**
   * Set content
   */
  setContent(content) {
    if (typeof content === 'undefined') {
      return;
    }
    if (typeof content !== 'string') {
      throw new Error('String expected for `content`');
    }
    this.content = content;
  }

  /**
   * Set filename
   */
  setFilename(filename) {
    if (typeof filename === 'undefined') {
      return;
    }
    if (filename && typeof filename !== 'string') {
      throw new Error('String expected for `filename`');
    }
    this.filename = filename;
  }

  /**
   * Set type
   */
  setType(type) {
    if (typeof type === 'undefined') {
      return;
    }
    if (typeof type !== 'string') {
      throw new Error('String expected for `type`');
    }
    this.type = type;
  }

  /**
   * Set disposition
   */
  setDisposition(disposition) {
    if (typeof disposition === 'undefined') {
      return;
    }
    if (typeof disposition !== 'string') {
      throw new Error('String expected for `disposition`');
    }
    this.disposition = disposition;
  }

  /**
   * Set content ID
   */
  setContentId(contentId) {
    if (typeof contentId === 'undefined') {
      return;
    }
    if (typeof contentId !== 'string') {
      throw new Error('String expected for `contentId`');
    }
    this.contentId = contentId;
  }

	/**
	 * To JSON
	 */
  toJSON() {

    //Extract properties from self
    const {content, filename, type, disposition, contentId} = this;

    //Initialize with mandatory properties
    const json = {content, filename};

    //Add whatever else we have
    if (typeof type !== 'undefined') {
      json.type = type;
    }
    if (typeof disposition !== 'undefined') {
      json.disposition = disposition;
    }
    if (typeof contentId !== 'undefined') {
      json.contentId = contentId;
    }

    //Return
    return toSnakeCase(json);
  }
}

//Export class
module.exports = Attachment;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose classes
 */
const Attachment = __webpack_require__(119);
const EmailAddress = __webpack_require__(26);
const Mail = __webpack_require__(121);
const Personalization = __webpack_require__(43);
const ResponseError = __webpack_require__(122);

/**
 * Export
 */
module.exports = {
  Attachment,
  EmailAddress,
  Mail,
  Personalization,
  ResponseError,
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dependencies
 */
const EmailAddress = __webpack_require__(26);
const Personalization = __webpack_require__(43);
const toCamelCase = __webpack_require__(21);
const toSnakeCase = __webpack_require__(22);
const deepClone = __webpack_require__(20);
const arrayToJSON = __webpack_require__(44);

/**
 * Mail class
 */
class Mail {

  /**
   * Constructor
   */
  constructor(data) {

    //Initialize array and object properties
    this.isDynamic = false;
    this.personalizations = [];
    this.attachments = [];
    this.content = [];
    this.categories = [];
    this.headers = {};
    this.sections = {};
    this.customArgs = {};
    this.trackingSettings = {};
    this.mailSettings = {};
    this.asm = {};

    //Helper properties
    this.substitutions = null;
    this.substitutionWrappers = null;
    this.dynamicTemplateData = null;

    //Process data if given
    if (data) {
      this.fromData(data);
    }
  }

  /**
   * Build from data
   */
  fromData(data) {

    //Expecting object
    if (typeof data !== 'object') {
      throw new Error('Expecting object for Mail data');
    }

    //Convert to camel case to make it workable, making a copy to prevent
    //changes to the original objects
    data = deepClone(data);
    data = toCamelCase(data, ['substitutions', 'dynamicTemplateData', 'customArgs', 'headers', 'sections']);

    //Extract properties from data
    const {
      to, from, replyTo, cc, bcc, sendAt, subject, text, html, content,
      templateId, personalizations, attachments, ipPoolName, batchId,
      sections, headers, categories, category, customArgs, asm, mailSettings,
      trackingSettings, substitutions, substitutionWrappers, dynamicTemplateData, isMultiple,
    } = data;

    //Set data
    this.setFrom(from);
    this.setReplyTo(replyTo);
    this.setSubject(subject);
    this.setSendAt(sendAt);
    this.setTemplateId(templateId);
    this.setBatchId(batchId);
    this.setIpPoolName(ipPoolName);
    this.setAttachments(attachments);
    this.setContent(content);
    this.setSections(sections);
    this.setHeaders(headers);
    this.setCategories(category);
    this.setCategories(categories);
    this.setCustomArgs(customArgs);
    this.setAsm(asm);
    this.setMailSettings(mailSettings);
    this.setTrackingSettings(trackingSettings);

    if (this.isDynamic) {
      this.setDynamicTemplateData(dynamicTemplateData)
    } else {
      this.setSubstitutions(substitutions);
      this.setSubstitutionWrappers(substitutionWrappers);
    }

    //Add contents from text/html properties
    this.addTextContent(text);
    this.addHtmlContent(html);

    //Using "to" property for personalizations
    if (personalizations) {
      this.setPersonalizations(personalizations);
    }

    //Multiple individual emails
    else if (isMultiple && Array.isArray(to)) {
      to.forEach(to => this.addTo(to, cc, bcc));
    }

    //Single email (possibly with multiple recipients in the to field)
    else {
      this.addTo(to, cc, bcc);
    }
  }

  /**
   * Set from email
   */
  setFrom(from) {
    if (typeof from === 'undefined') {
      return;
    }
    this.from = EmailAddress.create(from);
  }

  /**
   * Set reply to
   */
  setReplyTo(replyTo) {
    if (typeof replyTo === 'undefined') {
      return;
    }
    this.replyTo = EmailAddress.create(replyTo);
  }

  /**
   * Set subject
   */
  setSubject(subject) {
    if (typeof subject === 'undefined') {
      return;
    }
    if (typeof subject !== 'string') {
      throw new Error('String expected for `subject`');
    }
    this.subject = subject;
  }

  /**
   * Set send at
   */
  setSendAt(sendAt) {
    if (typeof sendAt === 'undefined') {
      return;
    }
    if (!Number.isInteger(sendAt)) {
      throw new Error('Integer expected for `sendAt`');
    }
    this.sendAt = sendAt;
  }

  /**
   * Set template ID, also checks if the template is dynamic or legacy
   */
  setTemplateId(templateId) {
    if (typeof templateId === 'undefined') {
      return;
    }
    if (typeof templateId !== 'string') {
      throw new Error('String expected for `templateId`');
    }

    if (templateId.indexOf('d-') === 0) {
      this.isDynamic = true;
    }

    this.templateId = templateId;
  }

  /**
   * Set batch ID
   */
  setBatchId(batchId) {
    if (typeof batchId === 'undefined') {
      return;
    }
    if (typeof batchId !== 'string') {
      throw new Error('String expected for `batchId`');
    }
    this.batchId = batchId;
  }

  /**
   * Set IP pool name
   */
  setIpPoolName(ipPoolName) {
    if (typeof ipPoolName === 'undefined') {
      return;
    }
    if (typeof ipPoolName !== 'string') {
      throw new Error('String expected for `ipPoolName`');
    }
    this.ipPoolName = ipPoolName;
  }

  /**
   * Set ASM
   */
  setAsm(asm) {
    if (typeof asm === 'undefined') {
      return;
    }
    if (typeof asm !== 'object') {
      throw new Error('Object expected for `asm`');
    }
    this.asm = asm;
  }

  /**
   * Set personalizations
   */
  setPersonalizations(personalizations) {
    if (typeof personalizations === 'undefined') {
      return;
    }
    if (!Array.isArray(personalizations)) {
      throw new Error('Array expected for `personalizations`');
    }

    //Clear and use add helper to add one by one
    this.personalizations = [];
    personalizations
      .forEach(personalization => this.addPersonalization(personalization));
  }

  /**
   * Add personalization
   */
  addPersonalization(personalization) {

    //We should either send substitutions or dynamicTemplateData
    //depending on the templateId
    if (this.isDynamic && personalization.substitutions) {
      delete personalization.substitutions;
    } else if (personalization.dynamicTemplateData) {
      delete personalization.dynamicTemplateData;
    }

    //Convert to class if needed
    if (!(personalization instanceof Personalization)) {
      personalization = new Personalization(personalization);
    }

    //If this is dynamic, set dynamicTemplateData, or set substitutions
    if (this.isDynamic) {
      this.applyDynamicTemplateData(personalization);
    } else {
      this.applySubstitutions(personalization);
    }

    //Push personalization to array
    this.personalizations.push(personalization);
  }

  /**
   * Convenience method for quickly creating personalizations
   */
  addTo(to, cc, bcc) {
    if (
      typeof to === 'undefined' &&
      typeof cc === 'undefined' &&
      typeof bcc === 'undefined'
    ) {
      throw new Error('Provide at least one of to, cc or bcc');
    }
    this.addPersonalization(new Personalization({to, cc, bcc}));
  }

  /**
   * Set substitutions
   */
  setSubstitutions(substitutions) {
    if (typeof substitutions === 'undefined') {
      return;
    }
    if (typeof substitutions !== 'object') {
      throw new Error('Object expected for `substitutions`');
    }
    this.substitutions = substitutions;
  }

  /**
   * Set substitution wrappers
   */
  setSubstitutionWrappers(wrappers) {
    if (typeof wrappers === 'undefined') {
      return;
    }
    if (!Array.isArray(wrappers) || wrappers.length !== 2) {
      throw new Error(
        'Array expected with two elements for `substitutionWrappers`'
      );
    }
    this.substitutionWrappers = wrappers;
  }

  /**
   * Helper which applies globally set substitutions to personalizations
   */
  applySubstitutions(personalization) {
    if (personalization instanceof Personalization) {
      personalization.reverseMergeSubstitutions(this.substitutions);
      personalization.setSubstitutionWrappers(this.substitutionWrappers);
    }
  }

  /**
   * Helper which applies globally set dynamic_template_data to personalizations
   */
  applyDynamicTemplateData(personalization) {
    if (personalization instanceof Personalization) {
      personalization.deepMergeDynamicTemplateData(this.dynamicTemplateData);
    }
  }

  /**
   * Set dynamicTemplateData
   */
  setDynamicTemplateData(dynamicTemplateData) {
    if (typeof dynamicTemplateData === 'undefined') {
      return;
    }
    if (typeof dynamicTemplateData !== 'object') {
      throw new Error('Object expected for `dynamicTemplateData`');
    }
    this.dynamicTemplateData = dynamicTemplateData;
  }

  /**
   * Set content
   */
  setContent(content) {
    if (typeof content === 'undefined') {
      return;
    }
    if (!Array.isArray(content)) {
      throw new Error('Array expected for `content`');
    }
    this.content = content;
  }

  /**
   * Add content
   */
  addContent(content) {
    if (typeof content !== 'object') {
      throw new Error('Object expected for `content`');
    }
    this.content.push(content);
  }

  /**
   * Add text content
   */
  addTextContent(text) {
    if (typeof text === 'undefined') {
      return;
    }
    if (typeof text !== 'string') {
      throw new Error('String expected for `text`');
    }
    this.addContent({
      value: text,
      type: 'text/plain',
    });
  }

  /**
   * Add HTML content
   */
  addHtmlContent(html) {
    if (typeof html === 'undefined') {
      return;
    }
    if (typeof html !== 'string') {
      throw new Error('String expected for `html`');
    }
    this.addContent({
      value: html,
      type: 'text/html',
    });
  }

  /**
   * Set attachments
   */
  setAttachments(attachments) {
    if (typeof attachments === 'undefined') {
      return;
    }
    if (!Array.isArray(attachments)) {
      throw new Error('Array expected for `attachments`');
    }
    this.attachments = attachments;
  }

  /**
   * Add attachment
   */
  addAttachment(attachment) {
    if (typeof attachment !== 'object') {
      throw new Error('Object expected for `attachment`');
    }
    this.attachments.push(attachment);
  }

  /**
   * Set categories
   */
  setCategories(categories) {
    if (typeof categories === 'undefined') {
      return;
    }
    if (typeof categories === 'string') {
      categories = [categories];
    }
    if (!Array.isArray(categories) ||
      !categories.every(cat => typeof cat === 'string')) {
      throw new Error('Array of strings expected for `categories`');
    }
    this.categories = categories;
  }

  /**
   * Add category
   */
  addCategory(category) {
    if (typeof category !== 'string') {
      throw new Error('String expected for `category`');
    }
    this.categories.push(category);
  }

  /**
   * Set headers
   */
  setHeaders(headers) {
    if (typeof headers === 'undefined') {
      return;
    }
    if (typeof headers !== 'object') {
      throw new Error('Object expected for `headers`');
    }
    this.headers = headers;
  }

  /**
   * Add a header
   */
  addHeader(key, value) {
    if (typeof key !== 'string') {
      throw new Error('String expected for header key');
    }
    if (typeof value !== 'string') {
      throw new Error('String expected for header value');
    }
    this.headers[key] = value;
  }

  /**
   * Set sections
   */
  setSections(sections) {
    if (typeof sections === 'undefined') {
      return;
    }
    if (typeof sections !== 'object') {
      throw new Error('Object expected for `sections`');
    }
    this.sections = sections;
  }

  /**
   * Set custom args
   */
  setCustomArgs(customArgs) {
    if (typeof customArgs === 'undefined') {
      return;
    }
    if (typeof customArgs !== 'object') {
      throw new Error('Object expected for `customArgs`');
    }
    this.customArgs = customArgs;
  }

  /**
   * Set tracking settings
   */
  setTrackingSettings(settings) {
    if (typeof settings === 'undefined') {
      return;
    }
    if (typeof settings !== 'object') {
      throw new Error('Object expected for `trackingSettings`');
    }
    this.trackingSettings = settings;
  }

  /**
   * Set mail settings
   */
  setMailSettings(settings) {
    if (typeof settings === 'undefined') {
      return;
    }
    if (typeof settings !== 'object') {
      throw new Error('Object expected for `mailSettings`');
    }
    this.mailSettings = settings;
  }

  /**
   * To JSON
   */
  toJSON() {

    //Extract properties from self
    const {
      from, replyTo, sendAt, subject, content, templateId,
      personalizations, attachments, ipPoolName, batchId, asm,
      sections, headers, categories, customArgs, mailSettings,
      trackingSettings,
    } = this;

    //Initialize with mandatory values
    const json = {
      from, subject,
      personalizations: arrayToJSON(personalizations),
    };

    //Array properties
    if (Array.isArray(attachments) && attachments.length > 0) {
      json.attachments = arrayToJSON(attachments);
    }
    if (Array.isArray(categories) && categories.length > 0) {
      json.categories = categories.filter(cat => cat !== '');
    }
    if (Array.isArray(content) && content.length > 0) {
      json.content = arrayToJSON(content);
    }

    //Object properties
    if (Object.keys(headers).length > 0) {
      json.headers = headers;
    }
    if (Object.keys(mailSettings).length > 0) {
      json.mailSettings = mailSettings;
    }
    if (Object.keys(trackingSettings).length > 0) {
      json.trackingSettings = trackingSettings;
    }
    if (Object.keys(customArgs).length > 0) {
      json.customArgs = customArgs;
    }
    if (Object.keys(sections).length > 0) {
      json.sections = sections;
    }
    if (Object.keys(asm).length > 0) {
      json.asm = asm;
    }

    //Simple properties
    if (typeof replyTo !== 'undefined') {
      json.replyTo = replyTo;
    }
    if (typeof sendAt !== 'undefined') {
      json.sendAt = sendAt;
    }
    if (typeof batchId !== 'undefined') {
      json.batchId = batchId;
    }
    if (typeof templateId !== 'undefined') {
      json.templateId = templateId;
    }
    if (typeof ipPoolName !== 'undefined') {
      json.ipPoolName = ipPoolName;
    }

    //Return as snake cased object
    return toSnakeCase(json, ['substitutions', 'dynamicTemplateData', 'customArgs', 'headers', 'sections']);
  }

  /**************************************************************************
   * Static helpers
   ***/

  /**
   * Create a Mail instance from given data
   */
  static create(data) {

    //Array?
    if (Array.isArray(data)) {
      return data
        .filter(item => !!item)
        .map(item => this.create(item));
    }

    //Already instance of Mail class?
    if (data instanceof Mail) {
      return data;
    }

    //Create instance
    return new Mail(data);
  }
}

//Export class
module.exports = Mail;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dependencies
 */
const chalk = __webpack_require__(194);

/**
 * Response error class
 */
class ResponseError extends Error {

  /**
   * Constructor
   */
  constructor(response) {

    //Super
    super();

    //Extract data from response
    const {headers, statusCode, statusMessage, body} = response;

    //Set data
    this.code = statusCode;
    this.message = statusMessage;
    this.response = {headers, body};

    //Capture stack trace
    if (!this.stack) {
      Error.captureStackTrace(this, this.constructor);
    }

    //Clean up stack trace
    const regex = new RegExp(process.cwd() + '/', 'gi');
    this.stack = this.stack.replace(regex, '');
  }

  /**
   * Convert to string
   */
  toString() {
    const {body} = this.response;
    let err = chalk.red(`${this.message} (${this.code})`);
    if (body && Array.isArray(body.errors)) {
      body.errors.forEach(error => {
        const message = chalk.yellow(error.message);
        const field = chalk.grey(error.field);
        const help = chalk.grey(error.help);
        err += `\n  ${message}\n    ${field}\n    ${help}`;
      });
    }
    return err;
  }

  /**
   * Convert to simple object for JSON responses
   */
  toJSON() {
    const {message, code, response} = this;
    return {message, code, response};
  }
}

//Export
module.exports = ResponseError;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose helpers
 */
const arrayToJSON = __webpack_require__(44);
const convertKeys = __webpack_require__(27);
const deepClone = __webpack_require__(20);
const mergeData = __webpack_require__(124);
const splitNameEmail = __webpack_require__(45);
const toCamelCase = __webpack_require__(21);
const toSnakeCase = __webpack_require__(22);
const wrapSubstitutions = __webpack_require__(46);

/**
 * Export
 */
module.exports = {
  arrayToJSON,
  convertKeys,
  deepClone,
  mergeData,
  splitNameEmail,
  toCamelCase,
  toSnakeCase,
  wrapSubstitutions,
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Merge data helper
 */
module.exports = function mergeData(base, data) {

  //Validate data
  if (typeof base !== 'object' || base === null) {
    throw new Error('Not an object provided for base');
  }
  if (typeof data !== 'object' || data === null) {
    throw new Error('Not an object provided for data');
  }

  //Copy base
  const merged = Object.assign({}, base);

  //Add data
  for (const key in data) {
    //istanbul ignore else
    if (data.hasOwnProperty(key)) {
      if (data[key] && Array.isArray(data[key])) {
        merged[key] = data[key];
      }
      else if (data[key] && typeof data[key] === 'object') {
        merged[key] = Object.assign({}, data[key]);
      }
      else {
        merged[key] = data[key];
      }
    }
  }

  //Return
  return merged;
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal conversion helper
 */
module.exports = function strToCamelCase(str) {
  if (typeof str !== 'string') {
    throw new Error('String expected for conversion to snake case');
  }
  return str
    .trim()
    .replace(/_+|\-+/g, ' ')
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (Number(match) === 0) {
        return '';
      }
      return (index === 0) ? match.toLowerCase() : match.toUpperCase();
    });
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal conversion helper
 */
module.exports = function strToSnakeCase(str) {
  if (typeof str !== 'string') {
    throw new Error('String expected for conversion to snake case');
  }
  return str.trim().replace(/(\s*\-*\b\w|[A-Z])/g, function($1) {
    $1 = $1.trim().toLowerCase().replace('-', '');
    return ($1[0] === '_' ? '' : '_') + $1;
  }).slice(1);
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const mailer = __webpack_require__(128);
const MailService = __webpack_require__(48);

module.exports = mailer;
module.exports.MailService = MailService;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dependencies
 */
const MailService = __webpack_require__(48);

//Export singleton instance
module.exports = new MailService();


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var express = __webpack_require__(11);
var path = __webpack_require__(92);
var logger = __webpack_require__(91);
var cookieParser = __webpack_require__(86);
var bodyParser = __webpack_require__(84);
var http = __webpack_require__(90);
var debug = __webpack_require__(87)('artcritical-list:server');

var expressValidator = __webpack_require__(89);

//Authentification
var passport = __webpack_require__(40);
var flash = __webpack_require__(85);
var session = __webpack_require__(88);

// Get the User Atuhentification model
__webpack_require__(73)(passport);

var app = express();

// MongoDB
var mongoose = __webpack_require__(7);
var url = process.env.MONGOLAB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('We are in!');
});

// Import the Mongoose models
var ListModels = __webpack_require__(77);
var List = ListModels.list;
var Archive = ListModels.archive;
var Trash = ListModels.trash;
var EventModels = __webpack_require__(75);
var EventSchema = EventModels.event;
var EventTrash = EventModels.archive;
var EventArchive = EventModels.trash;
var ArtistModels = __webpack_require__(74);
var Artist = ArtistModels.artist;
var ArtistTrash = ArtistModels.artistTrash;
var Venue = __webpack_require__(39);
var UserModels = __webpack_require__(38);
var User = UserModels.user;
var UserTrash = UserModels.userTrash;
var Feature = __webpack_require__(76);

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

//Pre-Rendering for SEO
app.use(__webpack_require__(93).set('prerenderToken', 'xNgryV1QDytdnXWxSjza'));

// Make our db accessible to our router
app.use(function (req, res, next) {
  req.list = List;
  req.archive = Archive;
  req.trash = Trash;
  req.event = EventSchema;
  req.eventTrash = EventTrash;
  req.eventArchive = EventArchive;
  req.artists = Artist;
  req.artistTrash = ArtistTrash;
  req.venue = Venue;
  req.userlist = User;
  req.usertrash = UserTrash;
  req.feature = Feature;
  next();
});

var index = __webpack_require__(81);
var venues = __webpack_require__(83);
var listings = __webpack_require__(82);
var event = __webpack_require__(80);
var artists = __webpack_require__(78);
var auth = __webpack_require__(79);

app.use('/venues', venues);
app.use('/list', listings);
app.use('/event', event);
app.use('/artist', artists);
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

var port = process.env.PORT || 5000;
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
/* WEBPACK VAR INJECTION */}.call(exports, "build"))

/***/ }),
/* 130 */
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

var _Helmet = __webpack_require__(9);

var _Helmet2 = _interopRequireDefault(_Helmet);

var _reactMapGl = __webpack_require__(18);

var _reactMapGl2 = _interopRequireDefault(_reactMapGl);

var _MapCluster = __webpack_require__(151);

var _MapCluster2 = _interopRequireDefault(_MapCluster);

var _VenueBlock = __webpack_require__(12);

var _VenueBlock2 = _interopRequireDefault(_VenueBlock);

var _d3Request = __webpack_require__(196);

var _reactstrap = __webpack_require__(2);

var _ListingNameDisplay = __webpack_require__(23);

var _ListingNameDisplay2 = _interopRequireDefault(_ListingNameDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var d3 = __webpack_require__(34);

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
			hoverPosition: [0, 0],
			revealOther: false

			//Getting the cluster icons
		};(0, _d3Request.json)('javascripts/location-icon-mapping.json', function (error, response) {
			if (!error) {
				_this.setState({ iconMapping: response });
			}
		});

		_this.componentDidMount = _this.componentDidMount.bind(_this);
		_this._revealOther = _this._revealOther.bind(_this);
		_this._hideOther = _this._hideOther.bind(_this);
		_this._goToNYC = _this._goToNYC.bind(_this);
		_this._goToPhil = _this._goToPhil.bind(_this);
		_this._goToUpstate = _this._goToUpstate.bind(_this);
		_this._goToNJ = _this._goToNJ.bind(_this);
		_this._goToLI = _this._goToLI.bind(_this);
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
			!this.props.currentLoaded && _ListActions2.default.getCurrent();
		}
	}, {
		key: '_resizeMap',
		value: function _resizeMap() {
			console.log(this.refs.mapWrap);
			// Create variable to change property
			var viewport = _extends({}, this.state.viewport, {
				width: this.refs.mapWrap.offsetWidth,
				height: this.refs.mapWrap.offsetHeight
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
		key: '_revealOther',
		value: function _revealOther() {
			this.setState({
				revealOther: true
			});
		}
	}, {
		key: '_hideOther',
		value: function _hideOther() {
			this.setState({
				revealOther: false
			});
		}
	}, {
		key: '_goToPhil',
		value: function _goToPhil() {
			var viewport = _extends({}, this.state.viewport, {
				longitude: -75.161488,
				latitude: 39.9373046,
				zoom: this.props.zoom,
				transitionDuration: this.props.transitionDuration,
				transitionInterpolator: this.props.transitionInterpolator,
				transitionEasing: this.props.transitionEasing
			});
			this.setState({ viewport: viewport });
		}
	}, {
		key: '_goToUpstate',
		value: function _goToUpstate() {
			var viewport = _extends({}, this.state.viewport, {
				longitude: -75.0738887,
				latitude: 42.6291662,
				zoom: 7,
				transitionDuration: this.props.transitionDuration,
				transitionInterpolator: this.props.transitionInterpolator,
				transitionEasing: this.props.transitionEasing
			});
			this.setState({ viewport: viewport });
		}
	}, {
		key: '_goToLI',
		value: function _goToLI() {
			var viewport = _extends({}, this.state.viewport, {
				longitude: -72.9371244,
				latitude: 40.8286694,
				zoom: 8.5,
				transitionDuration: this.props.transitionDuration,
				transitionInterpolator: this.props.transitionInterpolator,
				transitionEasing: this.props.transitionEasing
			});
			this.setState({ viewport: viewport });
		}
	}, {
		key: '_goToNJ',
		value: function _goToNJ() {
			var viewport = _extends({}, this.state.viewport, {
				longitude: -74.6243706,
				latitude: 40.5731734,
				zoom: 9,
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
					return _react2.default.createElement(_VenueBlock2.default, { key: index, listings: [listing], user: _this2.props.user, dateView: 'current' });
				});
			};

			var showLabels = function showLabels(listings) {
				return listings.map(function (listing) {
					return _react2.default.createElement(_ListingNameDisplay2.default, _extends({}, listing, { key: listing._id }));
				});
			};

			var labelStyles = {
				left: this.state.hoverPosition[0],
				top: this.state.hoverPosition[1]
			};

			return _react2.default.createElement(
				'div',
				{ className: 'currentMap' },
				_react2.default.createElement(_Helmet2.default, {
					title: 'Map',
					link: 'https://list.artcritical.com/map'
				}),
				_react2.default.createElement(
					'div',
					{ className: 'mapWrap', ref: 'mapWrap' },
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
					{ className: this.props.view + " mapInfo" },
					_react2.default.createElement(
						'div',
						{ className: 'mapHeader' },
						_react2.default.createElement(
							'h2',
							null,
							'Explore art exhibitions in New York City and beyond. Create your personal lists. See. Share.'
						),
						_react2.default.createElement(
							'p',
							null,
							'THE LIST prides itself on being the best, so if something\'s wrong or missing, please ',
							_react2.default.createElement(
								'a',
								{ href: 'mailto:thelist@artcritical.com' },
								'let us know'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'content' },
						this.state.browseListings ? displayListings(this.state.browseListings) : _react2.default.createElement(
							'div',
							{ className: 'intro' },
							_react2.default.createElement(
								'p',
								null,
								'Click on markers for neighborhood and exhibition details'
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
								_react2.default.createElement(
									'strong',
									null,
									this.props.currentListings.length,
									' shows'
								),
								' open in NYC and around.'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'footer cityJump' },
						_react2.default.createElement(
							_reactstrap.Button,
							{ onClick: this._goToNYC },
							'New York City'
						),
						_react2.default.createElement(
							'div',
							{ className: 'otherWrap', onMouseEnter: this._revealOther, onMouseLeave: this._hideOther },
							_react2.default.createElement(
								_reactstrap.Button,
								null,
								'Other'
							),
							this.state.revealOther && _react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									_reactstrap.Button,
									{ onClick: this._goToUpstate },
									'Upstate NY'
								),
								_react2.default.createElement(
									_reactstrap.Button,
									{ onClick: this._goToLI },
									'Long Island'
								),
								_react2.default.createElement(
									_reactstrap.Button,
									{ onClick: this._goToNJ },
									'New Jersey'
								),
								_react2.default.createElement(
									_reactstrap.Button,
									{ onClick: this._goToPhil },
									'Philadelphia'
								)
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
	center: { lat: 40.7321712, lng: -73.973286 },
	zoom: 11,
	token: process.env.MapboxAccessToken,
	transitionDuration: 1000,
	transitionInterpolator: new _reactMapGl.FlyToInterpolator(),
	transitionEasing: d3.easeCubic
};

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

var _reactRouter = __webpack_require__(4);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _Helmet = __webpack_require__(9);

var _Helmet2 = _interopRequireDefault(_Helmet);

var _neighborhoodNav = __webpack_require__(58);

var _neighborhoodNav2 = _interopRequireDefault(_neighborhoodNav);

var _listingsPerNeighbor = __webpack_require__(56);

var _listingsPerNeighbor2 = _interopRequireDefault(_listingsPerNeighbor);

var _loading = __webpack_require__(10);

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
            !this.props.currentLoaded && _ListActions2.default.getCurrent();
            //This goes through all listing and matches them with venues if the venue name exists (only when importing from old artcritical)
            //ListActions.getAll()
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'current mainList' },
                _react2.default.createElement(_Helmet2.default, {
                    title: 'Current',
                    link: 'https://list.artcritical.com/current'
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'left-col' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Current Exhibitions'
                    ),
                    _react2.default.createElement(_neighborhoodNav2.default, null),
                    _react2.default.createElement(
                        'p',
                        null,
                        'See ',
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/future', activeClassName: 'active' },
                            'Future Exhibitions'
                        ),
                        '.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.props.view + " listingsWrap main-col" },
                    _react2.default.createElement(_listingsPerNeighbor2.default, { listings: this.props.currentListings, user: this.props.user, dateView: 'current' }),
                    this.props.loading.current && _react2.default.createElement(_loading2.default, null)
                ),
                _react2.default.createElement('div', { className: 'right-col' })
            );
        }
    }]);

    return CurrentPage;
}(_react2.default.Component);

exports.default = CurrentPage;

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

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _VenueList = __webpack_require__(53);

var _VenueList2 = _interopRequireDefault(_VenueList);

var _Event = __webpack_require__(51);

var _Event2 = _interopRequireDefault(_Event);

var _loading = __webpack_require__(10);

var _loading2 = _interopRequireDefault(_loading);

var _featureBlock = __webpack_require__(55);

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

        return _possibleConstructorReturn(this, (DayPage.__proto__ || Object.getPrototypeOf(DayPage)).call(this, props));
    }

    _createClass(DayPage, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var events = [];
            var openings = [];
            var closings = [];

            this.props.glanceListings.events && this.props.glanceListings.events.map(function (event) {
                if ((0, _moment2.default)(event.date).isSame(_this2.props.date, 'day')) {
                    if (event.type === 'reception') {
                        if (event.list) {
                            var listing = event.list;
                            listing.venue = event.venue;
                            listing.artists = event.artists;
                            listing.relatedEvents = null;
                            listing.description = event.description;
                            openings.push(event);
                        }
                    } else {
                        events.push(event);
                    }
                }
            });

            this.props.glanceListings.listings && this.props.glanceListings.listings.map(function (listing) {
                //Check if it ends on this day
                if ((0, _moment2.default)(listing.end).isSame(_this2.props.date, 'day')) {
                    closings.push(listing);
                }
            });

            //Sorting all openings by neighborhood
            function compareNeighborhood(a, b) {
                if (a.venue.neighborhood < b.venue.neighborhood) return -1;
                if (a.venue.neighborhood > b.venue.neighborhood) return 1;
                return 0;
            }

            openings.sort(compareNeighborhood);

            var totalListings = closings.length + events.length + openings.length;

            var displayOpenings = openings.map(function (event) {
                return _react2.default.createElement(_Event2.default, { event: event, key: event._id, user: _this2.props.user });
            });

            var displayEvents = events.map(function (event) {
                return _react2.default.createElement(_Event2.default, { event: event, key: event._id, user: _this2.props.user });
            });

            return _react2.default.createElement(
                "div",
                { className: "day" },
                _react2.default.createElement(
                    "div",
                    { className: "featuredSection" },
                    this.props.feature.list && _react2.default.createElement(_featureBlock2.default, { feature: this.props.feature, user: this.props.user })
                ),
                !this.props.loading.glance ? _react2.default.createElement(
                    "div",
                    { className: this.props.view + " listingsWrap" },
                    openings.length > 0 && _react2.default.createElement(
                        "div",
                        { className: "openingWrap" },
                        _react2.default.createElement(
                            "h2",
                            null,
                            "Opening Receptions"
                        ),
                        displayOpenings
                    ),
                    events.length > 0 && _react2.default.createElement(
                        "div",
                        { className: "eventsWrap" },
                        _react2.default.createElement(
                            "h2",
                            null,
                            "Events"
                        ),
                        displayEvents
                    ),
                    closings.length > 0 && _react2.default.createElement(
                        "div",
                        { className: "closingWrap" },
                        _react2.default.createElement(
                            "h2",
                            null,
                            "Last Chance"
                        ),
                        _react2.default.createElement(_VenueList2.default, { listings: closings, user: this.props.user, dateView: "nodate" })
                    ),
                    totalListings == 0 && _react2.default.createElement(
                        "h4",
                        null,
                        "Nothing happening today."
                    )
                ) : _react2.default.createElement(_loading2.default, null)
            );
        }
    }]);

    return DayPage;
}(_react2.default.Component);

exports.default = DayPage;

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

var _Helmet = __webpack_require__(9);

var _Helmet2 = _interopRequireDefault(_Helmet);

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
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: '404' },
                _react2.default.createElement(_Helmet2.default, {
                    title: 'Error'
                }),
                'Error 404!'
            );
        }
    }]);

    return ErrorPage;
}(_react2.default.Component);

exports.default = ErrorPage;

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

var _reactRouter = __webpack_require__(4);

var _EventActions = __webpack_require__(14);

var _EventActions2 = _interopRequireDefault(_EventActions);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _Helmet = __webpack_require__(9);

var _Helmet2 = _interopRequireDefault(_Helmet);

var _Event = __webpack_require__(51);

var _Event2 = _interopRequireDefault(_Event);

var _DateBlock = __webpack_require__(8);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _DayPicker = __webpack_require__(159);

var _DayPicker2 = _interopRequireDefault(_DayPicker);

var _loading = __webpack_require__(10);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var scrollToComponent = '';

var EventsPage = function (_React$Component) {
    _inherits(EventsPage, _React$Component);

    function EventsPage(props) {
        _classCallCheck(this, EventsPage);

        var _this = _possibleConstructorReturn(this, (EventsPage.__proto__ || Object.getPrototypeOf(EventsPage)).call(this, props));

        _this.scrollToDate = _this.scrollToDate.bind(_this);
        return _this;
    }

    _createClass(EventsPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _EventActions2.default.getEvents();
            scrollToComponent = __webpack_require__(212);
        }
    }, {
        key: 'scrollToDate',
        value: function scrollToDate(date) {
            var formattedDate = (0, _moment2.default)(date).format('YYYY MM DD');
            scrollToComponent(this.refs[formattedDate]);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var oldDate = (0, _moment2.default)();
            var thelist = this.props.eventsListings && this.props.eventsListings.map(function (event, index) {
                var newDate = (0, _moment2.default)(event.date);
                if (newDate.isSame(oldDate, 'day')) {
                    if (index === 0) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'date', key: event._id },
                            _react2.default.createElement(
                                'h2',
                                null,
                                'Today'
                            ),
                            _react2.default.createElement(_Event2.default, { event: event, user: _this2.props.user })
                        );
                    }
                    return _react2.default.createElement(_Event2.default, { event: event, key: event._id, user: _this2.props.user });
                } else {
                    oldDate = newDate;
                    return _react2.default.createElement(
                        'div',
                        { className: 'date', key: event._id },
                        _react2.default.createElement(
                            'h2',
                            null,
                            _react2.default.createElement(_DateBlock2.default, { date: newDate, ref: (0, _moment2.default)(newDate).format('YYYY MM DD') })
                        ),
                        _react2.default.createElement(_Event2.default, { event: event, user: _this2.props.user })
                    );
                }
            });

            return _react2.default.createElement(
                'div',
                { className: 'events mainList' },
                _react2.default.createElement(_Helmet2.default, {
                    title: 'Events',
                    link: 'https://list.artcritical.com/events'
                }),
                _react2.default.createElement(
                    'h1',
                    null,
                    'Events'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'left-col' },
                    _react2.default.createElement(_DayPicker2.default, { events: this.props.eventsListings, scrollToDate: this.scrollToDate })
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.props.view + " listingsWrap main-col" },
                    this.props.eventsListings.length ? thelist : this.props.loading.events ? _react2.default.createElement(_loading2.default, null) : _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h2',
                            null,
                            'No Future Events'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Check back again later or check out our ',
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/' },
                                'list of this week\'s openings'
                            ),
                            '.'
                        )
                    )
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
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _neighborhoodNav = __webpack_require__(58);

var _neighborhoodNav2 = _interopRequireDefault(_neighborhoodNav);

var _listingsPerNeighbor = __webpack_require__(56);

var _listingsPerNeighbor2 = _interopRequireDefault(_listingsPerNeighbor);

var _loading = __webpack_require__(10);

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
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Future Exhibitions'
                    ),
                    _react2.default.createElement(_neighborhoodNav2.default, null),
                    _react2.default.createElement(
                        'p',
                        null,
                        'See ',
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/current', activeClassName: 'active' },
                            'Current Exhibitions'
                        ),
                        '.'
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
/* 136 */
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

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _reactIntl = __webpack_require__(25);

var _DayPage = __webpack_require__(132);

var _DayPage2 = _interopRequireDefault(_DayPage);

var _tabs = __webpack_require__(32);

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
            var d = (0, _moment2.default)().add(i, 'days');
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
            _ListActions2.default.getGlance();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var daysDisplay = function daysDisplay(listings) {
                var days = [];
                for (var i = 0; i < 7; i++) {
                    var label = _react2.default.createElement(
                        _reactIntl.IntlProvider,
                        { locale: 'en' },
                        _react2.default.createElement(_reactIntl.FormattedDate, { value: _this2.state.dates[i], weekday: 'long', day: 'numeric', month: 'short' })
                    );
                    days.push(_react2.default.createElement(_DayPage2.default, _extends({
                        key: i
                    }, _this2.props, {
                        feature: _this2.props.features[i] ? _this2.props.features[i] : {},
                        glanceListings: listings,
                        label: label,
                        date: _this2.state.dates[i] })));
                }
                return days;
            };

            return _react2.default.createElement(
                'div',
                { className: 'glance' },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Week at a Glance'
                ),
                _react2.default.createElement(
                    _tabs2.default,
                    null,
                    daysDisplay(this.props.glanceListings)
                )
            );
        }
    }]);

    return GlancePage;
}(_react2.default.Component);

exports.default = GlancePage;

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

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _AccountForm = __webpack_require__(157);

var _AccountForm2 = _interopRequireDefault(_AccountForm);

var _LogInForm = __webpack_require__(24);

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
                    'div',
                    { className: 'left-col' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Your Account'
                    )
                ),
                accountRender
            );
        }
    }]);

    return AccountPage;
}(_react2.default.Component);

exports.default = AccountPage;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _LogInForm = __webpack_require__(24);

var _LogInForm2 = _interopRequireDefault(_LogInForm);

var _Helmet = __webpack_require__(9);

var _Helmet2 = _interopRequireDefault(_Helmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Components


var AdminPage = function (_React$Component) {
    _inherits(AdminPage, _React$Component);

    function AdminPage() {
        _classCallCheck(this, AdminPage);

        return _possibleConstructorReturn(this, (AdminPage.__proto__ || Object.getPrototypeOf(AdminPage)).apply(this, arguments));
    }

    _createClass(AdminPage, [{
        key: 'render',
        value: function render() {

            var allowAccess = this.props.user.isLoggedIn && this.props.user.userAccess > 0 ? true : false;

            return _react2.default.createElement(
                'div',
                { className: 'adminWrap cf' },
                _react2.default.createElement(_Helmet2.default, { title: 'Admin' }),
                _react2.default.createElement(
                    'div',
                    { className: 'left-col' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Admin'
                    ),
                    allowAccess && _react2.default.createElement(
                        'nav',
                        null,
                        _react2.default.createElement(
                            'ul',
                            null,
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.IndexLink,
                                    { to: '/admin', activeClassName: 'active' },
                                    'Overview'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/admin/listings', activeClassName: 'active' },
                                    'Listings'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/admin/events', activeClassName: 'active' },
                                    'Events'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/admin/venues', activeClassName: 'active' },
                                    'Venues'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/admin/featured', activeClassName: 'active' },
                                    'Featured Calendar'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/admin/review', activeClassName: 'active' },
                                    'Review'
                                )
                            ),
                            this.props.user.userAccess >= 1 && _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/admin/users', activeClassName: 'active' },
                                    'All Users'
                                )
                            )
                        )
                    )
                ),
                allowAccess ? _react2.default.createElement(
                    'div',
                    { className: 'admin-content' },
                    _react2.default.cloneElement(this.props.children, this.props)
                ) : _react2.default.createElement(_LogInForm2.default, { loading: this.props.loading.login, error: this.props.error })
            );
        }
    }]);

    return AdminPage;
}(_react2.default.Component);

exports.default = AdminPage;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EventActions = __webpack_require__(14);

var _EventActions2 = _interopRequireDefault(_EventActions);

var _formSelect = __webpack_require__(16);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _EventForm = __webpack_require__(60);

var _EventForm2 = _interopRequireDefault(_EventForm);

var _reactstrap = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var EventEdit = function (_React$Component) {
    _inherits(EventEdit, _React$Component);

    function EventEdit(props) {
        _classCallCheck(this, EventEdit);

        var _this = _possibleConstructorReturn(this, (EventEdit.__proto__ || Object.getPrototypeOf(EventEdit)).call(this, props));

        _this.state = {
            formDisplay: false

            //Function Binding
        };_this.handleSelectChange = _this.handleSelectChange.bind(_this);
        _this.onCreateNew = _this.onCreateNew.bind(_this);
        return _this;
    }

    _createClass(EventEdit, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _EventActions2.default.eventEditReset();
        }
    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            if (data) {
                this.setState({
                    formDisplay: true
                });
                //Fetch all the venue info
                _EventActions2.default.getEventInfo(data.value);
            } else {
                //Reset
                _EventActions2.default.eventEditReset();
                this.setState({
                    formDisplay: false
                });
            }
        }
    }, {
        key: 'onCreateNew',
        value: function onCreateNew() {
            _EventActions2.default.eventEditReset();
            this.setState({
                formDisplay: true
            });
        }
    }, {
        key: 'render',
        value: function render() {

            //how to get option for select element
            var getOptions = function getOptions(input) {
                if (input) {
                    return fetch('/event/find/' + input).then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        return { options: json };
                    });
                } else {
                    return Promise.resolve({ options: [] });
                }
            };

            //Have a select value only if editing an existing event
            var selectValue = this.props.eventEdit._id && {
                value: this.props.eventEdit._id,
                label: this.props.eventEdit.name
            };

            return _react2.default.createElement(
                'div',
                { className: 'eventEdit' },
                _react2.default.createElement(
                    'h3',
                    null,
                    'Create or Edit Events'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'editHeader' },
                    _react2.default.createElement(
                        _reactstrap.Button,
                        { onClick: this.onCreateNew },
                        'New'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'search' },
                        _react2.default.createElement(_formSelect2.default, { value: selectValue,
                            handleSelectChange: this.handleSelectChange,
                            getOptions: getOptions })
                    )
                ),
                this.state.formDisplay && _react2.default.createElement(_EventForm2.default, {
                    event: this.props.eventEdit,
                    error: this.props.error,
                    success: this.props.success,
                    allArtists: this.props.allArtists })
            );
        }
    }]);

    return EventEdit;
}(_react2.default.Component);

exports.default = EventEdit;

/***/ }),
/* 140 */
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

var _VenueBlock = __webpack_require__(12);

var _VenueBlock2 = _interopRequireDefault(_VenueBlock);

var _formSelect = __webpack_require__(16);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _ListingForm = __webpack_require__(61);

var _ListingForm2 = _interopRequireDefault(_ListingForm);

var _reactstrap = __webpack_require__(2);

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

        _this.state = {
            formDisplay: false
        };

        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        _this.onCreateNew = _this.onCreateNew.bind(_this);
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
                this.setState({
                    formDisplay: true
                });
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
                this.setState({
                    formDisplay: false
                });
            }
        }
    }, {
        key: 'onCreateNew',
        value: function onCreateNew() {
            _ListActions2.default.listingEditReset();
            this.setState({
                formDisplay: true
            });
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

            //Have a select value only if editing an existing venue
            var selectValue = this.props.listingEdit._id && { value: this.props.listingEdit._id, label: this.props.listingEdit.name };

            return _react2.default.createElement(
                'div',
                { className: 'listingEdit' },
                _react2.default.createElement(
                    'h3',
                    null,
                    'Create or Edit Listings'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'editHeader' },
                    _react2.default.createElement(
                        _reactstrap.Button,
                        { onClick: this.onCreateNew },
                        'New'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'search' },
                        _react2.default.createElement(_formSelect2.default, { value: selectValue,
                            handleSelectChange: this.handleSelectChange,
                            getOptions: getOptions
                        })
                    )
                ),
                this.state.formDisplay && _react2.default.createElement(_ListingForm2.default, {
                    listing: this.props.listingEdit,
                    error: this.props.error,
                    loading: this.props.loading,
                    success: this.props.success,
                    allArtists: this.props.allArtists })
            );
        }
    }]);

    return ListingEdit;
}(_react2.default.Component);

exports.default = ListingEdit;

/***/ }),
/* 141 */
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

var _formSelect = __webpack_require__(16);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _VenueForm = __webpack_require__(162);

var _VenueForm2 = _interopRequireDefault(_VenueForm);

var _mapBlock = __webpack_require__(57);

var _mapBlock2 = _interopRequireDefault(_mapBlock);

var _reactstrap = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var MapboxClient = __webpack_require__(202);
var client = new MapboxClient(process.env.MapboxAccessToken);

var VenueEdit = function (_React$Component) {
    _inherits(VenueEdit, _React$Component);

    function VenueEdit(props) {
        _classCallCheck(this, VenueEdit);

        var _this = _possibleConstructorReturn(this, (VenueEdit.__proto__ || Object.getPrototypeOf(VenueEdit)).call(this, props));

        _this.state = {
            formDisplay: false
        };

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        _this.calculateCoords = _this.calculateCoords.bind(_this);
        _this.onCreateNew = _this.onCreateNew.bind(_this);
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
            var newVenue = this.props.venueEdit;
            //Format the website URL
            if (!/^https?:\/\//i.test(newVenue.website)) {
                newVenue.website = 'http://' + newVenue.website;
            }
            if (newVenue._id) {
                _ListActions2.default.updateVenue(newVenue);
            } else {
                delete newVenue._id;
                _ListActions2.default.saveVenue(newVenue);
            }
        }

        //Delete the listing

    }, {
        key: 'handleDelete',
        value: function handleDelete() {
            _ListActions2.default.deleteVenue(this.props.venueEdit._id);
            //Reset the form
            _ListActions2.default.venueEditReset();
            //Hide the form
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
        key: 'onCreateNew',
        value: function onCreateNew() {
            _ListActions2.default.venueEditReset();
            this.setState({
                formDisplay: true
            });
        }
    }, {
        key: 'calculateCoords',
        value: function calculateCoords(fullAdress) {
            var self = this;
            client.geocodeForward(fullAdress, function (err, data, res) {
                if (data.features[0]) {
                    var newCoords = data.features[0].center;
                    _ListActions2.default.coordinatesChange(newCoords);
                    self.setState({
                        foundAddress: data.features[0].place_name
                    });
                }
            });
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

            //Have a select value only if editing an existing venue
            var selectValue = this.props.venueEdit._id && { value: this.props.venueEdit._id, label: this.props.venueEdit.name };

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
                    { className: 'editHeader' },
                    _react2.default.createElement(
                        _reactstrap.Button,
                        { onClick: this.onCreateNew },
                        'New'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'search' },
                        _react2.default.createElement(_formSelect2.default, {
                            value: selectValue,
                            handleSelectChange: this.handleSelectChange,
                            getOptions: getOptions })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'venueEditing' },
                    _react2.default.createElement(
                        'div',
                        { className: 'listingForm' },
                        this.state.formDisplay && _react2.default.createElement(_VenueForm2.default, _extends({}, this.props.venueEdit, {
                            //newVenue={(this.props._id == '' || this.props._id == null && this.props.name !== '')}
                            handleSubmit: this.handleSubmit,
                            handleDelete: this.handleDelete,
                            error: this.props.error.updatevenue,
                            calculateCoords: this.calculateCoords,
                            loading: this.props.loading.updatevenue || this.props.loading.deletevenue,
                            success: this.props.success }))
                    )
                ),
                this.state.formDisplay && _react2.default.createElement(
                    'div',
                    { className: 'venueLocation' },
                    _react2.default.createElement(_mapBlock2.default, this.props.venueEdit),
                    this.state.foundAddress && this.props.address1 && _react2.default.createElement(
                        _reactstrap.Alert,
                        { color: 'secondary' },
                        'Found by GPS: ',
                        this.state.foundAddress
                    )
                )
            );
        }
    }]);

    return VenueEdit;
}(_react2.default.Component);

exports.default = VenueEdit;

/***/ }),
/* 142 */
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

var _VenueBlock = __webpack_require__(12);

var _VenueBlock2 = _interopRequireDefault(_VenueBlock);

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
                    return _react2.default.createElement(_VenueBlock2.default, { key: index, listings: [listing], user: this.props.user });
                }, _this2);
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h4',
                    null,
                    'Review'
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.props.view },
                    thelistings(this.props.latestListings)
                )
            );
        }
    }]);

    return ReviewPage;
}(_react2.default.Component);

exports.default = ReviewPage;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _loading = __webpack_require__(10);

var _loading2 = _interopRequireDefault(_loading);

var _UserCard = __webpack_require__(153);

var _UserCard2 = _interopRequireDefault(_UserCard);

var _UserFullInfo = __webpack_require__(154);

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

        var _this = _possibleConstructorReturn(this, (UsersPage.__proto__ || Object.getPrototypeOf(UsersPage)).call(this, props));

        _this.state = {
            editing: false,
            editingUser: 0
        };

        _this._userFullInfoReveal = _this._userFullInfoReveal.bind(_this);
        return _this;
    }

    _createClass(UsersPage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _AuthActions2.default.getAllUsers();
        }
    }, {
        key: '_userFullInfoReveal',
        value: function _userFullInfoReveal(index) {
            this.setState({
                editing: true,
                editingUser: index
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var usersRender = function usersRender(users) {
                return users.map(function (user, index) {
                    return _react2.default.createElement(_UserCard2.default, { key: index,
                        index: index,
                        user: user,
                        infoReveal: _this2._userFullInfoReveal,
                        error: _this2.props.error,
                        success: _this2.props.success });
                });
            };

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
                    this.state.editing && _react2.default.createElement(_UserFullInfo2.default, _extends({}, this.props, { user: this.props.allUsers[this.state.editingUser], index: this.state.editingUser }))
                )
            );
        }
    }]);

    return UsersPage;
}(_react2.default.Component);

exports.default = UsersPage;

/***/ }),
/* 144 */
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

var _VenueItem = __webpack_require__(181);

var _VenueItem2 = _interopRequireDefault(_VenueItem);

var _NeighborhoodSelect = __webpack_require__(63);

var _NeighborhoodSelect2 = _interopRequireDefault(_NeighborhoodSelect);

var _loading = __webpack_require__(10);

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

            var theVenuesRender = function theVenuesRender(venues) {
                return venues.map(function (venue, index) {

                    return _react2.default.createElement(_VenueItem2.default, _extends({ key: venue._id }, venue));
                });
            };

            return _react2.default.createElement(
                'div',
                { className: 'overviewWrap' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Overview'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Check on all venues listed on artcritical by neighborhood.'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Legend:',
                    _react2.default.createElement('span', { className: 'legend current' }),
                    ' Up to date',
                    _react2.default.createElement('span', { className: 'legend future' }),
                    ' Event coming up',
                    _react2.default.createElement('span', { className: 'legend nothing' }),
                    ' Need update',
                    _react2.default.createElement('span', { className: 'legend dormant' }),
                    ' Dormant'
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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ImagesActions = __webpack_require__(28);

var _ImagesActions2 = _interopRequireDefault(_ImagesActions);

var _imageUpload = __webpack_require__(65);

var _imageUpload2 = _interopRequireDefault(_imageUpload);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

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
                fullURL = "https://res.cloudinary.com/artcritical/image/upload/" + this.props.avatar + ".jpg";
            } else if (this.props.facebook) {
                isUploaded = true;
                fullURL = "https://graph.facebook.com/" + this.props.facebook.id + "/picture?type=large";
            }

            var avatarRender = (isUploaded || this.state.isUploading) && !this.state.resetAvatar ? _react2.default.createElement(
                'div',
                { className: isUploaded ? 'avatar loaded' : 'avatar loading', onClick: this.changeAvatar },
                _react2.default.createElement(
                    'div',
                    { className: 'delete' },
                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'times'] })
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
/* 146 */
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

var _formSelect = __webpack_require__(16);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _featuredForm = __webpack_require__(163);

var _featuredForm2 = _interopRequireDefault(_featuredForm);

var _featureBlock = __webpack_require__(55);

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

        _this.state = {
            text: _this.props.text
        };

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.onTextChange = _this.onTextChange.bind(_this);
        return _this;
    }

    // Add the listing to the database


    _createClass(FeaturedDay, [{
        key: 'handleSubmit',
        value: function handleSubmit() {
            var id = this.props.feature._id || null;
            var newFeature = {
                _id: id,
                date: this.props.date,
                text: this.state.text,
                list: this.props.feature.list._id,
                venue: this.props.feature.list.venue._id
            };
            _ListActions2.default.updateFeature(newFeature);
            _ListActions2.default.updateListing(this.props.feature.list);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            _ListActions2.default.featureInfoChange(event, this.props.dayNumber);
        }
    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            data ? data.value && _ListActions2.default.getListingInfo(data.value, this.props.dayNumber) : _ListActions2.default.featureReset(this.props.dayNumber);
        }
    }, {
        key: 'onTextChange',
        value: function onTextChange(newText) {
            this.setState({
                text: newText
            });
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
                    { className: 'featureFormWrap' },
                    _react2.default.createElement(_formSelect2.default, { value: { label: list.name, value: list._id }, handleSelectChange: this.handleSelectChange, getOptions: getOptions }),
                    this.props.feature.list && _react2.default.createElement(_featuredForm2.default, _extends({}, this.props.feature, {
                        number: this.props.dayNumber,
                        handleChange: this.handleChange,
                        handleSubmit: this.handleSubmit,
                        onTextChange: this.onTextChange,
                        error: this.props.error,
                        success: this.props.success }))
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'preview' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Preview'
                    ),
                    this.props.feature.list && _react2.default.createElement(_featureBlock2.default, { feature: this.props.feature, user: this.props.user })
                )
            );
        }
    }]);

    return FeaturedDay;
}(_react2.default.Component);

exports.default = FeaturedDay;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactIntl = __webpack_require__(25);

var _reactstrap = __webpack_require__(2);

var _featuredDay = __webpack_require__(146);

var _featuredDay2 = _interopRequireDefault(_featuredDay);

var _tabs = __webpack_require__(32);

var _tabs2 = _interopRequireDefault(_tabs);

var _loading = __webpack_require__(10);

var _loading2 = _interopRequireDefault(_loading);

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
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ListActions2.default.featureAdmin(14);
        }
    }, {
        key: 'render',
        value: function render() {

            var days = [];

            for (var i = 0; i < 14; i++) {
                var label = _react2.default.createElement(
                    _reactstrap.Button,
                    { outline: true, color: this.props.features[i] && this.props.features[i]._id ? 'success' : 'danger' },
                    _react2.default.createElement(
                        _reactIntl.IntlProvider,
                        { locale: 'en' },
                        _react2.default.createElement(_reactIntl.FormattedDate, { value: this.state.dates[i], weekday: 'short', day: 'numeric', month: 'short' })
                    )
                );

                days.push(_react2.default.createElement(_featuredDay2.default, {
                    key: i,
                    dayNumber: i,
                    date: this.state.dates[i],
                    user: this.props.user,
                    feature: this.props.features[i] || {},
                    error: this.props.error.feature,
                    success: this.props.success.updateFeature, label: label }));
            }

            return _react2.default.createElement(
                'div',
                { className: 'featureAdmin' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Featured Listings'
                ),
                this.props.loading.features ? _react2.default.createElement(_loading2.default, null) : _react2.default.createElement(
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
/* 148 */
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

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var Hamburger = function (_React$Component) {
    _inherits(Hamburger, _React$Component);

    function Hamburger(props) {
        _classCallCheck(this, Hamburger);

        return _possibleConstructorReturn(this, (Hamburger.__proto__ || Object.getPrototypeOf(Hamburger)).call(this, props));
    }

    _createClass(Hamburger, [{
        key: '_toggleMenu',
        value: function _toggleMenu() {
            _ListActions2.default.toggleMenu();
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'hamburger' },
                _react2.default.createElement(_reactFontawesome2.default, { icon: this.props.active ? ['fal', 'times'] : ['fal', 'bars'], onClick: this._toggleMenu })
            );
        }
    }]);

    return Hamburger;
}(_react2.default.Component);

exports.default = Hamburger;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _reactRouter = __webpack_require__(4);

var _reactstrap = __webpack_require__(2);

var _DateBlock = __webpack_require__(8);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _ListingNameDisplay = __webpack_require__(23);

var _ListingNameDisplay2 = _interopRequireDefault(_ListingNameDisplay);

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
            fullInfo: false,
            fullEvents: false,
            canToggle: true

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
            return events.map(function (event, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'listingEvent', key: index },
                    _react2.default.createElement(
                        'span',
                        { className: 'type' },
                        event.type === "other" ? event.name : event.type
                    ),
                    ': ',
                    event.date && _react2.default.createElement(_DateBlock2.default, { date: event.date }),
                    ' - ',
                    event.description ? event.description : "8pm"
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var listing = this.props.listing;
            var id = listing._id;

            var address = _react2.default.createElement(
                'span',
                { className: 'address' },
                listing.venue.address1,
                ' ',
                listing.venue.address2,
                listing.venue.city !== '' && ', ',
                listing.venue.city
            );

            //let closeIcon = this.state.fullInfo ? ["fal", "minus-circle"] : ["fal", "plus-circle"]
            var eventsPresence = false;
            listing.relatedEvents && listing.relatedEvents.map(function (event) {
                if ((0, _moment2.default)(event.date).isAfter((0, _moment2.default)().startOf('day'))) {
                    eventsPresence = true;
                }
            });

            //Display date according to type of listing and view
            var dateDisplay;
            var fullDates = _react2.default.createElement(
                'div',
                { className: 'date' },
                listing.start && _react2.default.createElement(_DateBlock2.default, { date: listing.start }),
                listing.end && _react2.default.createElement(
                    'span',
                    null,
                    ' to ',
                    _react2.default.createElement(_DateBlock2.default, { date: listing.end })
                )
            );

            !this.props.dateView ? dateDisplay = listing.start && _react2.default.createElement(
                'span',
                { className: 'date' },
                _react2.default.createElement(_DateBlock2.default, { date: listing.start })
            ) : this.props.dateView == "current" ? dateDisplay = listing.end && _react2.default.createElement(
                'span',
                { className: 'date' },
                'Until ',
                _react2.default.createElement(_DateBlock2.default, { date: listing.end })
            ) : this.props.dateView == "nodate" ? dateDisplay = '' : dateDisplay = fullDates;

            // Check if the listing is in mylist
            var mylistIndex = 0;
            if (this.props.user.mylist) {
                mylistIndex = this.props.user.mylist.filter(function (v) {
                    return v._id === id;
                }).length;
            }
            var mylistingIcon = mylistIndex > 0 ? ["far", "minus"] : ["far", "plus"];

            var isGroupShow = listing.artists && listing.artists.length > 3 ? true : false;
            var artists = listing.artists && listing.artists.map(function (artist, index) {
                return _react2.default.createElement(
                    'span',
                    { key: index, className: 'artist' },
                    artist.name
                );
            });

            //Thumbnail
            var image = listing.image ? "https://res.cloudinary.com/artcritical/image/upload/" + listing.image + ".jpg" : 'https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg';
            var style = { backgroundImage: 'url(' + image + ')'

                //Make info button black
            };var hasInfo = isGroupShow || listing.description ? true : false;

            return _react2.default.createElement(
                'div',
                { className: "listing " + (this.state.fullInfo ? 'active ' : '') + (mylistIndex > 0 ? 'selected' : 'notselected') },
                this.props.user._id && _react2.default.createElement(
                    'div',
                    { className: 'listingAdd' },
                    this.props.mylisting ? _react2.default.createElement(
                        'span',
                        null,
                        this.props.number
                    ) : _react2.default.createElement(
                        'div',
                        { className: 'addButton', onClick: function onClick(e) {
                                return _this2.addToList(e, listing);
                            }, style: style },
                        this.props.user._id && _react2.default.createElement(_reactFontawesome2.default, { icon: mylistingIcon })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'listingContent' },
                    _react2.default.createElement(
                        'div',
                        { className: 'header cf' },
                        _react2.default.createElement(_ListingNameDisplay2.default, listing),
                        ' ',
                        dateDisplay,
                        this.props.dateView == "current" && (0, _moment2.default)(listing.start).isSame((0, _moment2.default)(), 'day') && _react2.default.createElement(
                            'div',
                            { className: 'opening' },
                            ' Opening Today '
                        ),
                        this.props.dateView == "current" && (0, _moment2.default)(listing.end).isSame((0, _moment2.default)(), 'day') && _react2.default.createElement(
                            'div',
                            { className: 'closing' },
                            ' Closing Today '
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'icons' },
                            _react2.default.createElement(
                                'span',
                                { className: hasInfo ? 'active' : 'inactive' },
                                _react2.default.createElement(_reactFontawesome2.default, { onClick: this._revealInfo, icon: ['fal', 'info-circle'] })
                            ),
                            this.props.onMap && _react2.default.createElement(_reactFontawesome2.default, { onClick: this.props.mapMouseEnter, icon: ['fal', 'search'] }),
                            listing.review && _react2.default.createElement(
                                'a',
                                { alt: 'Review', target: '_blank', href: listing.review },
                                _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'pencil-alt'] })
                            ),
                            eventsPresence && _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'glass-martini'], onClick: this._revealInfo }),
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
                                        return _this2.addToList(e, listing);
                                    }, className: 'delete' },
                                _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'trash'] })
                            ),
                            this.props.user.userAccess > 0 && //If you are seeing this as an editor
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick(e) {
                                        return _this2._editListing(listing);
                                    }, className: 'edit' },
                                _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'edit'] })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.Collapse,
                        { isOpen: this.state.fullInfo },
                        _react2.default.createElement(
                            _reactstrap.Card,
                            null,
                            _react2.default.createElement(
                                _reactstrap.CardTitle,
                                null,
                                'Information'
                            ),
                            _react2.default.createElement(
                                _reactstrap.CardBlock,
                                null,
                                isGroupShow && _react2.default.createElement(
                                    'div',
                                    { className: 'artists' },
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        'Artists'
                                    ),
                                    ' ',
                                    artists
                                ),
                                listing.description && _react2.default.createElement(
                                    'div',
                                    { className: 'notes' },
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        'Notes'
                                    ),
                                    ' ',
                                    listing.description
                                ),
                                eventsPresence && _react2.default.createElement(
                                    'div',
                                    { className: 'events' },
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        'Events'
                                    ),
                                    ' ',
                                    this.eventsDisplay(listing.relatedEvents)
                                ),
                                fullDates,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'venueFullInfo' },
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { className: 'venueName', to: "/venue/" + listing.venue.slug },
                                        listing.venue.name
                                    ),
                                    _react2.default.createElement('br', null),
                                    address
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Listing;
}(_react2.default.Component);

exports.default = Listing;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _VenueList = __webpack_require__(53);

var _VenueList2 = _interopRequireDefault(_VenueList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var ListingsHood = function (_React$Component) {
    _inherits(ListingsHood, _React$Component);

    function ListingsHood(props) {
        _classCallCheck(this, ListingsHood);

        return _possibleConstructorReturn(this, (ListingsHood.__proto__ || Object.getPrototypeOf(ListingsHood)).call(this, props));
    }

    _createClass(ListingsHood, [{
        key: 'render',
        value: function render() {

            var sortedListings = this.props.listings.sort(function (a, b) {
                var nameA = a.venue.name.toLowerCase(),
                    nameB = b.venue.name.toLowerCase();
                if (nameA < nameB) //sort string ascending
                    return -1;
                if (nameA > nameB) return 1;
                return 0; //default return value (no sorting)
            });

            return _react2.default.createElement(
                'div',
                { className: 'neighborhood' },
                _react2.default.createElement(
                    'h2',
                    null,
                    this.props.title
                ),
                _react2.default.createElement(_VenueList2.default, _extends({}, this.props, { listings: sortedListings }))
            );
        }
    }]);

    return ListingsHood;
}(_react2.default.Component);

exports.default = ListingsHood;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _deck = __webpack_require__(197);

var _deck2 = _interopRequireDefault(_deck);

var _rbush = __webpack_require__(205);

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
        if (!p.venue.coordinates) {
          console.log(p);
        }
        var coordinates = p.venue.coordinates ? [p.venue.coordinates.lat, p.venue.coordinates.long] : [0, 0];
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
          return d.venue.coordinates ? [d.venue.coordinates.long, d.venue.coordinates.lat, 0] : [0, 0, 0];
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
/* 152 */
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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _imageBlock = __webpack_require__(30);

var _imageBlock2 = _interopRequireDefault(_imageBlock);

var _DateBlock = __webpack_require__(8);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _reactstrap = __webpack_require__(2);

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
				return _this;
		}

		_createClass(UserCard, [{
				key: 'render',
				value: function render() {
						var _this2 = this;

						var user = this.props.user;

						var userAccess = function userAccess(accessCode) {
								return {
										3: 'Super Admin',
										2: 'Admin',
										1: 'Editor',
										0: 'Subscriber'
								}[accessCode];
						};

						var avatar = user.avatar ? "https://res.cloudinary.com/artcritical/image/upload/" + user.avatar + ".jpg" : "https://qph.fs.quoracdn.net/main-qimg-87001d2ce810c2f48c97032cbc905939";

						return _react2.default.createElement(
								_reactstrap.Card,
								null,
								_react2.default.createElement(
										'div',
										{ className: 'avatarWrap' },
										_react2.default.createElement('div', { className: 'avatar', style: { backgroundImage: "url(" + avatar + ")" }, alt: 'avatar' })
								),
								_react2.default.createElement(
										_reactstrap.CardBlock,
										null,
										_react2.default.createElement(
												_reactstrap.CardTitle,
												null,
												user.firstname,
												' ',
												user.lastname
										),
										_react2.default.createElement(
												_reactstrap.CardSubtitle,
												null,
												userAccess(user.userAccess)
										),
										_react2.default.createElement(
												_reactstrap.Button,
												{ color: 'primary', onClick: function onClick() {
																return _this2.props.infoReveal(_this2.props.index);
														} },
												'More Info'
										)
								)
						);
				}
		}]);

		return UserCard;
}(_react2.default.Component);

exports.default = UserCard;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _imageBlock = __webpack_require__(30);

var _imageBlock2 = _interopRequireDefault(_imageBlock);

var _DateBlock = __webpack_require__(8);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _UserEdit = __webpack_require__(161);

var _UserEdit2 = _interopRequireDefault(_UserEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var UserFullInfo = function (_React$Component) {
		_inherits(UserFullInfo, _React$Component);

		function UserFullInfo(props) {
				_classCallCheck(this, UserFullInfo);

				var _this = _possibleConstructorReturn(this, (UserFullInfo.__proto__ || Object.getPrototypeOf(UserFullInfo)).call(this, props));

				_this.handleChange = _this.handleChange.bind(_this);
				return _this;
		}

		_createClass(UserFullInfo, [{
				key: 'handleChange',
				value: function handleChange(event) {
						//Update values of inputs
						_AuthActions2.default.userInfoChange(event, this.props.index);
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
								null,
								_react2.default.createElement(
										'h1',
										null,
										user.firstname,
										' ',
										user.lastname
								),
								_react2.default.createElement(_UserEdit2.default, {
										user: user,
										handleChange: this.handleChange,
										error: this.props.error,
										success: this.props.success
								})
						);
				}
		}]);

		return UserFullInfo;
}(_react2.default.Component);

exports.default = UserFullInfo;

/***/ }),
/* 155 */
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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

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
                _react2.default.createElement(_reactFontawesome2.default, { icon: ['fab', 'facebook'] }),
                'Login with Facebook'
            );
        }
    }]);

    return FacebookButton;
}(_react2.default.Component);

exports.default = FacebookButton;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _validator = __webpack_require__(19);

var _validator2 = _interopRequireDefault(_validator);

var _avatar = __webpack_require__(145);

var _avatar2 = _interopRequireDefault(_avatar);

var _reactstrap = __webpack_require__(2);

var _draftJs = __webpack_require__(67);

var _draftJsPluginsEditor = __webpack_require__(35);

var _draftJsImportHtml = __webpack_require__(69);

var _draftJsExportHtml = __webpack_require__(68);

var _MyEditor = __webpack_require__(62);

var _MyEditor2 = _interopRequireDefault(_MyEditor);

var _confirmModal = __webpack_require__(13);

var _confirmModal2 = _interopRequireDefault(_confirmModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var AccountForm = function (_React$Component) {
    _inherits(AccountForm, _React$Component);

    function AccountForm(props) {
        _classCallCheck(this, AccountForm);

        var _this = _possibleConstructorReturn(this, (AccountForm.__proto__ || Object.getPrototypeOf(AccountForm)).call(this, props));

        _this.state = {
            text: '',
            updatevisible: false,
            errorMessage: {},
            editorState: (0, _draftJsPluginsEditor.createEditorStateWithText)(''),
            updateModal: false,
            deleteModal: false

            //Function Binding
        };_this.handleChange = _this.handleChange.bind(_this);
        _this.saveChanges = _this.saveChanges.bind(_this);
        _this.onEditorChange = _this.onEditorChange.bind(_this);
        _this.toggleModal = _this.toggleModal.bind(_this);
        _this.onSave = _this.onSave.bind(_this);
        _this.onDelete = _this.onDelete.bind(_this);
        _this.deleteAccount = _this.deleteAccount.bind(_this);
        _this._validatePassword1 = _this._validatePassword1.bind(_this);
        _this._validatePassword2 = _this._validatePassword2.bind(_this);
        return _this;
    }

    _createClass(AccountForm, [{
        key: 'onEditorChange',
        value: function onEditorChange(editorState) {
            this.setState({
                editorState: editorState
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.user.bio !== this.state.text) {
                var bio = this.props.user.bio ? this.props.user.bio : '';
                this.setState({
                    text: this.props.user.bio,
                    editorState: _draftJs.EditorState.createWithContent((0, _draftJsImportHtml.stateFromHTML)(bio))
                });
            }
        }

        //Save alert

    }, {
        key: 'onSave',
        value: function onSave(event) {
            event.preventDefault();

            console.log(this.props.user);
            var password1 = this.props.user.password1;
            var password2 = this.props.user.password2;
            //If a new password is entered
            if (password1 || password2) {
                if (this._validatePassword1(password1) && this._validatePassword2(password1, password2)) {
                    this.setState({
                        updateModal: true
                    });
                }
            } else {
                this.setState({
                    updateModal: true
                });
            }
        }
        //Delete alert

    }, {
        key: 'onDelete',
        value: function onDelete(event) {
            event.preventDefault();
            this.setState({
                deleteModal: true
            });
        }

        //ToggleModal

    }, {
        key: 'toggleModal',
        value: function toggleModal(modalName) {
            this.setState(_defineProperty({}, modalName, !this.state[modalName]));
        }

        //VALIDATORS

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
            var pwValid = this._validatePassword1(password1);
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
            var newUser = this.props.user;
            newUser.bio = (0, _draftJsExportHtml.stateToHTML)(this.state.editorState.getCurrentContent());
            _AuthActions2.default.updateUser(this.props.user);
        }
    }, {
        key: 'deleteAccount',
        value: function deleteAccount() {
            _AuthActions2.default.deleteUser({ _id: this.props.user._id });
            window.location.reload();
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'accountform' },
                _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'avatarWrap' },
                        _react2.default.createElement(_avatar2.default, this.props.user)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'infoWrap' },
                        _react2.default.createElement(_reactstrap.Input, { name: 'firstname', placeholder: 'First Name', type: 'text', value: this.props.user.firstname, onChange: this.handleChange }),
                        _react2.default.createElement(_reactstrap.Input, { name: 'lastname', placeholder: 'Last Name', type: 'text', value: this.props.user.lastname, onChange: this.handleChange }),
                        _react2.default.createElement(_reactstrap.Input, { name: 'email', placeholder: 'Email', type: 'email', value: this.props.user.local.username, onChange: this.handleChange }),
                        _react2.default.createElement(
                            'label',
                            null,
                            'Bio'
                        ),
                        _react2.default.createElement(
                            _reactstrap.FormText,
                            { color: 'muted' },
                            'This text will appear on your ',
                            _react2.default.createElement(
                                'a',
                                { href: location.protocol + '//' + location.host + '/mylist/' + this.props.user.slug, target: '_blank' },
                                'public page'
                            ),
                            '.'
                        ),
                        _react2.default.createElement(_MyEditor2.default, {
                            name: 'bio',
                            editorState: this.state.editorState,
                            onEditorChange: this.onEditorChange }),
                        _react2.default.createElement(_reactstrap.Input, { name: 'website', placeholder: 'Website', type: 'website', value: this.props.user.website, onChange: this.handleChange }),
                        this.props.user.local.password && _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'label',
                                null,
                                'Change your password'
                            ),
                            _react2.default.createElement(_reactstrap.Input, { name: 'password1', placeholder: 'New Password', type: 'password', value: this.props.user.password1, onChange: this.handleChange }),
                            this.state.errorMessage.password1 && _react2.default.createElement(
                                _reactstrap.Alert,
                                { color: 'danger' },
                                this.state.errorMessage.password1
                            ),
                            _react2.default.createElement(_reactstrap.Input, { name: 'password2', placeholder: 'Re-Type the new password', type: 'password', value: this.props.user.password2, onChange: this.handleChange }),
                            this.state.errorMessage.password2 && _react2.default.createElement(
                                _reactstrap.Alert,
                                { color: 'danger' },
                                this.state.errorMessage.password2
                            )
                        ),
                        _react2.default.createElement(
                            _reactstrap.Button,
                            { type: 'submit', onClick: this.onSave },
                            'Save'
                        ),
                        _react2.default.createElement(
                            _reactstrap.Button,
                            { type: 'submit', outline: true, color: 'danger', onClick: this.onDelete },
                            'Delete your Account'
                        )
                    )
                ),
                this.state.updateModal && _react2.default.createElement(_confirmModal2.default, {
                    toggle: this.toggleModal,
                    handleSubmit: this.saveChanges,
                    name: 'updateModal',
                    textTitle: 'Save',
                    textAction: 'save your account information',
                    textConfirm: 'Saved!',
                    error: this.props.error.general,
                    success: this.props.success.updateUser }),
                this.state.deleteModal && _react2.default.createElement(_confirmModal2.default, {
                    toggle: this.toggleModal,
                    handleSubmit: this.deleteAccount,
                    name: 'deleteModal',
                    textTitle: 'Delete',
                    textAction: 'delete your account',
                    textConfirm: 'Deleted!',
                    error: this.props.error.general,
                    success: this.props.success.deleteUser })
            );
        }
    }]);

    return AccountForm;
}(_react2.default.Component);

exports.default = AccountForm;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactTagsinput = __webpack_require__(214);

var _reactTagsinput2 = _interopRequireDefault(_reactTagsinput);

var _reactAutosuggest = __webpack_require__(206);

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _ArtistsActions = __webpack_require__(49);

var _ArtistsActions2 = _interopRequireDefault(_ArtistsActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArtistTags = function (_React$Component) {
  _inherits(ArtistTags, _React$Component);

  function ArtistTags(props) {
    _classCallCheck(this, ArtistTags);

    var _this = _possibleConstructorReturn(this, (ArtistTags.__proto__ || Object.getPrototypeOf(ArtistTags)).call(this, props));

    _this.autoSuggestRenderInput = _this.autoSuggestRenderInput.bind(_this);
    return _this;
  }

  _createClass(ArtistTags, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('in ArtistTags');
      _ArtistsActions2.default.getAllArtistsSuggestions();
    }
  }, {
    key: 'autoSuggestRenderInput',
    value: function autoSuggestRenderInput(_ref) {
      var addTag = _ref.addTag,
          props = _objectWithoutProperties(_ref, ['addTag']);

      var handleOnChange = function handleOnChange(e, _ref2) {
        var newValue = _ref2.newValue,
            method = _ref2.method;

        if (method === 'enter') {
          e.preventDefault();
        } else {
          props.onChange(e);
        }
      };

      var inputValue = props.value && props.value.trim().toLowerCase() || '';
      var inputLength = inputValue.length;

      var suggestions = this.props.allArtists ? this.props.allArtists.filter(function (artist) {
        return artist.name.toLowerCase().slice(0, inputLength) === inputValue;
      }) : [];

      return _react2.default.createElement(_reactAutosuggest2.default, {
        ref: props.ref,
        suggestions: suggestions,
        shouldRenderSuggestions: function shouldRenderSuggestions(value) {
          return value && value.trim().length > 0;
        },
        getSuggestionValue: function getSuggestionValue(suggestion) {
          return suggestion.name;
        },
        renderSuggestion: function renderSuggestion(suggestion) {
          return _react2.default.createElement(
            'span',
            null,
            suggestion.name
          );
        },
        inputProps: _extends({}, props, { onChange: handleOnChange }),
        onSuggestionSelected: function onSuggestionSelected(e, _ref3) {
          var suggestion = _ref3.suggestion;

          addTag(suggestion);
        },
        onSuggestionsClearRequested: function onSuggestionsClearRequested() {},
        onSuggestionsFetchRequested: function onSuggestionsFetchRequested() {}
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_reactTagsinput2.default, {
        value: this.props.value,
        onChange: this.props.onChange,
        tagDisplayProp: "name",
        placeholder: 'Add an artist',
        renderInput: this.autoSuggestRenderInput,
        addKeys: [188, 9, 13]
      });
    }
  }]);

  return ArtistTags;
}(_react2.default.Component);

exports.default = ArtistTags;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _reactDates = __webpack_require__(36);

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
                if ((0, _moment2.default)(event.start).isSame(day, 'day')) {
                    highlight = true;
                }
            });

            return highlight;
        }
    }, {
        key: 'onDateChange',
        value: function onDateChange(date) {
            this.setState({
                datePicked: date
            });
            this.props.scrollToDate(date);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_reactDates.DayPickerSingleDateController, {
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
            });
        }
    }]);

    return DayPicker;
}(_react2.default.Component);

exports.default = DayPicker;

/***/ }),
/* 160 */
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

var _EventActions = __webpack_require__(14);

var _EventActions2 = _interopRequireDefault(_EventActions);

var _formDateSingle = __webpack_require__(64);

var _formDateSingle2 = _interopRequireDefault(_formDateSingle);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _confirmModal = __webpack_require__(13);

var _confirmModal2 = _interopRequireDefault(_confirmModal);

var _reactstrap = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var EventsForm = function (_React$Component) {
    _inherits(EventsForm, _React$Component);

    function EventsForm(props) {
        _classCallCheck(this, EventsForm);

        var _this = _possibleConstructorReturn(this, (EventsForm.__proto__ || Object.getPrototypeOf(EventsForm)).call(this, props));

        _this.state = {
            deleteModal: false,
            eventToDelete: '',
            error: '',
            success: false
        };

        _this.addEvent = _this.addEvent.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        _this.removeEvent = _this.removeEvent.bind(_this);
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.toggleModal = _this.toggleModal.bind(_this);
        return _this;
    }

    _createClass(EventsForm, [{
        key: 'toggleModal',
        value: function toggleModal(modalName) {
            this.setState(_defineProperty({}, modalName, !this.state[modalName]));
        }

        //Delete the listing

    }, {
        key: 'handleDelete',
        value: function handleDelete() {
            var id = this.props.events[this.state.eventToDelete]._id;
            console.log('deleting ' + id);
            _EventActions2.default.deleteEvent(id);
            _ListActions2.default.removeEvent(this.state.eventToDelete);
            this.setState({
                success: true,
                eventToDelete: ''
            });
            var that = this;
            setTimeout(function () {
                that.setState({
                    deleteModal: false,
                    success: false
                });
            }, 1000);
        }
    }, {
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
            if (this.props.events[index]._id) {
                console.log('Deleting an event');
                this.setState({
                    eventToDelete: index,
                    deleteModal: true
                });
            } else {
                _ListActions2.default.removeEvent(index);
            }
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
                                _reactstrap.Input,
                                { type: 'select',
                                    name: 'type',
                                    value: event && event.type,
                                    'data-index': index,
                                    onChange: _this2.onChange },
                                _react2.default.createElement(
                                    'option',
                                    { value: 'reception' },
                                    'Reception'
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
                            _react2.default.createElement(_formDateSingle2.default, { event: index, startDate: event && event.date, onDatesChange: _this2.onChange }),
                            event && event.type === "other" && _react2.default.createElement('input', {
                                type: 'text',
                                name: 'name',
                                placeholder: 'Name',
                                'data-index': index,
                                value: event && event.name,
                                onChange: _this2.onChange }),
                            _react2.default.createElement(_reactstrap.Input, {
                                type: 'textarea',
                                name: 'description',
                                value: event && event.description,
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
                ),
                this.state.deleteModal && _react2.default.createElement(_confirmModal2.default, {
                    toggle: this.toggleModal,
                    handleSubmit: this.handleDelete,
                    name: 'deleteModal',
                    textTitle: 'Delete',
                    textAction: 'delete this Listing',
                    textConfirm: 'Deleted!',
                    error: this.state.error,
                    success: this.state.success })
            );
        }
    }]);

    return EventsForm;
}(_react2.default.Component);

exports.default = EventsForm;

/***/ }),
/* 161 */
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

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _confirmModal = __webpack_require__(13);

var _confirmModal2 = _interopRequireDefault(_confirmModal);

var _reactstrap = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var UserEdit = function (_React$Component) {
	_inherits(UserEdit, _React$Component);

	function UserEdit(props) {
		_classCallCheck(this, UserEdit);

		var _this = _possibleConstructorReturn(this, (UserEdit.__proto__ || Object.getPrototypeOf(UserEdit)).call(this, props));

		_this.state = {
			save: false,
			delete: false
		};

		_this.onSave = _this.onSave.bind(_this);
		_this.onDelete = _this.onDelete.bind(_this);
		_this.onSaveAlert = _this.onSaveAlert.bind(_this);
		_this.onDeleteAlert = _this.onDeleteAlert.bind(_this);
		_this.toggleModal = _this.toggleModal.bind(_this);

		return _this;
	}

	_createClass(UserEdit, [{
		key: 'toggleModal',
		value: function toggleModal(modalName) {
			this.setState(_defineProperty({}, modalName, !this.state[modalName]));
		}

		//save alert

	}, {
		key: 'onSaveAlert',
		value: function onSaveAlert(event) {
			event.preventDefault();
			this.setState({
				save: true
			});
		}
		//delete alert

	}, {
		key: 'onDeleteAlert',
		value: function onDeleteAlert(event) {
			event.preventDefault();
			this.setState({
				delete: true
			});
		}

		//save

	}, {
		key: 'onSave',
		value: function onSave(event) {
			_AuthActions2.default.updateUser(this.props.user);
		}
		//delete

	}, {
		key: 'onDelete',
		value: function onDelete(event) {
			console.log('deleting user');
			_AuthActions2.default.deleteUser({ _id: this.props.user._id });
		}
	}, {
		key: 'render',
		value: function render() {
			var user = this.props.user;
			return _react2.default.createElement(
				_reactstrap.Form,
				null,
				_react2.default.createElement(
					_reactstrap.Label,
					null,
					'First Name'
				),
				_react2.default.createElement(
					'div',
					{ className: 'formSection' },
					_react2.default.createElement(_reactstrap.Input, { name: 'firstname', placeholder: 'Your First Name', type: 'text', onChange: this.props.handleChange, value: user.firstname })
				),
				_react2.default.createElement(
					_reactstrap.Label,
					null,
					'Last Name'
				),
				_react2.default.createElement(
					'div',
					{ className: 'formSection' },
					_react2.default.createElement(_reactstrap.Input, { name: 'lastname', placeholder: 'Your Last Name', type: 'text', onChange: this.props.handleChange, value: user.lastname })
				),
				_react2.default.createElement(
					_reactstrap.Label,
					null,
					'Email'
				),
				_react2.default.createElement(
					'div',
					{ className: 'formSection' },
					_react2.default.createElement(_reactstrap.Input, { name: 'email', placeholder: 'Your Email', type: 'email', onChange: this.props.handleChange, value: user.local.username })
				),
				_react2.default.createElement(
					_reactstrap.Label,
					{ 'for': 'exampleSelect' },
					'User Role'
				),
				_react2.default.createElement(
					_reactstrap.Input,
					{ type: 'select', name: 'userAccess', onChange: this.props.handleChange, value: user.userAccess },
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
					_reactstrap.FormGroup,
					null,
					_react2.default.createElement(
						_reactstrap.Button,
						{ onClick: this.onSaveAlert },
						'Save'
					),
					' ',
					_react2.default.createElement(
						_reactstrap.Button,
						{ color: 'danger', onClick: this.onDeleteAlert },
						'Delete'
					)
				),
				this.state.save && _react2.default.createElement(_confirmModal2.default, {
					handleSubmit: this.onSave,
					toggle: this.toggleModal,
					name: 'save',
					textTitle: 'Save',
					textAction: 'save this User',
					textConfirm: 'Saved!',
					error: this.props.error.updateUser,
					success: this.props.success.updateUser }),
				this.state.delete && _react2.default.createElement(_confirmModal2.default, {
					handleSubmit: this.onDelete,
					toggle: this.toggleModal,
					name: 'delete',
					textTitle: 'Delete',
					textAction: 'Delete this user',
					textConfirm: 'Deleted!',
					error: this.props.error.deleteUser,
					success: this.props.success.deleteUser })
			);
		}
	}]);

	return UserEdit;
}(_react2.default.Component);

exports.default = UserEdit;

/***/ }),
/* 162 */
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

var _reactToggleButton = __webpack_require__(37);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _confirmModal = __webpack_require__(13);

var _confirmModal2 = _interopRequireDefault(_confirmModal);

var _reactstrap = __webpack_require__(2);

var _DateBlock = __webpack_require__(8);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _NeighborhoodSelect = __webpack_require__(63);

var _NeighborhoodSelect2 = _interopRequireDefault(_NeighborhoodSelect);

var _UserLink = __webpack_require__(29);

var _UserLink2 = _interopRequireDefault(_UserLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var VenueForm = function (_React$Component) {
    _inherits(VenueForm, _React$Component);

    function VenueForm(props) {
        _classCallCheck(this, VenueForm);

        var _this = _possibleConstructorReturn(this, (VenueForm.__proto__ || Object.getPrototypeOf(VenueForm)).call(this, props));

        _this.state = {
            fullAdress: null,
            event: _this.props.event,
            updateModal: false,
            disableModal: false,
            deleteModal: false,
            createvisible: false,
            wasChanged: false,
            errorMessages: {}
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleDisable = _this.handleDisable.bind(_this);
        _this.onConfirm = _this.onConfirm.bind(_this);
        _this.onCreateConfirm = _this.onCreateConfirm.bind(_this);
        _this.onDeleteConfirm = _this.onDeleteConfirm.bind(_this);
        _this.onDisableConfirm = _this.onDisableConfirm.bind(_this);
        _this.toggleModal = _this.toggleModal.bind(_this);
        //Validation
        _this._validateAll = _this._validateAll.bind(_this);
        _this._validateName = _this._validateName.bind(_this);
        _this._validateAddress = _this._validateAddress.bind(_this);
        _this._validateCity = _this._validateCity.bind(_this);
        _this._validateNeighborhood = _this._validateNeighborhood.bind(_this);
        _this._validateZipcode = _this._validateZipcode.bind(_this);

        return _this;
    }

    _createClass(VenueForm, [{
        key: 'toggleModal',
        value: function toggleModal(modalName) {
            this.setState(_defineProperty({}, modalName, !this.state[modalName]));
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            //Update values of inputs
            _ListActions2.default.venueInfoChange(event.target ? event.target : event);
            this.setState({
                wasChanged: true
            });
        }

        //Disable the listing

    }, {
        key: 'handleDisable',
        value: function handleDisable(event) {
            event.preventDefault();
            var venue = _extends({}, this.props, {
                disabled: !this.props.disabled
            });

            _ListActions2.default.updateVenue(venue);
            //this.setState({disablevisible: false})
        }
    }, {
        key: 'onConfirm',
        value: function onConfirm(event) {
            event.preventDefault();
            if (this._validateAll()) {

                this.setState({
                    updateModal: true
                });
            }
        }
    }, {
        key: 'onCreateConfirm',
        value: function onCreateConfirm(event) {
            event.preventDefault();
            if (this._validateAll()) {

                this.setState({
                    createModal: true
                });
            }
        }
    }, {
        key: 'onDeleteConfirm',
        value: function onDeleteConfirm(event) {
            event.preventDefault();
            this.setState({
                deleteModal: true
            });
        }
    }, {
        key: 'onDisableConfirm',
        value: function onDisableConfirm(event) {
            event.preventDefault();
            this.setState({
                disableModal: true
            });
        }

        //Duplicate

    }, {
        key: '_duplicate',
        value: function _duplicate(event) {
            event.preventDefault();
            _ListActions2.default.venueDuplicate();
        }
    }, {
        key: '_validateAll',
        value: function _validateAll() {
            var validName = this._validateName();
            var validAddress = this._validateAddress();
            var validCity = this._validateCity();
            var validZipcode = this._validateZipcode();
            var validNeighborhood = this._validateNeighborhood();

            var result = validAddress && validName && validCity && validZipcode && validNeighborhood ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.general = result ? '' : 'Please review the error messages above.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
        }
    }, {
        key: '_validateName',
        value: function _validateName() {
            var result = this.props.name ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.name = result ? '' : 'Please enter a name.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
        }

        //Validate the Address

    }, {
        key: '_validateAddress',
        value: function _validateAddress() {
            var result = this.props.address1 ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.address = result ? '' : 'Please enter an address.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
        }
    }, {
        key: '_validateCity',
        value: function _validateCity() {
            var result = this.props.city ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.city = result ? '' : 'Please enter a city.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
        }
    }, {
        key: '_validateZipcode',
        value: function _validateZipcode() {
            var result = this.props.zipcode ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.zipcode = result ? '' : 'Please enter a zipcode.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
        }
    }, {
        key: '_validateNeighborhood',
        value: function _validateNeighborhood() {
            var result = this.props.neighborhood ? true : false;

            var errorMessages = this.state.errorMessages;
            errorMessages.neighborhood = result ? '' : 'Please select a neighborhood.';

            this.setState({
                errorMessages: errorMessages
            });

            return result;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            //Define the full address
            this.props.address1 ? this.setState({
                fullAdress: this.props.address1 + (this.props.city ? ' ' + this.props.city : '') + (this.props.state ? ', ' + this.props.state : '') + (this.props.zipcode ? ' ' + this.props.zipcode : '')
            }) : null;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            var nextFullAdress = nextProps.address1 !== '' && nextProps.address1 ? nextProps.address1 + (nextProps.city ? ' ' + nextProps.city : '') + (nextProps.state ? ', ' + nextProps.state : '') + (nextProps.zipcode ? ' ' + nextProps.zipcode : '') : null;
            if (nextFullAdress !== this.state.fullAdress && nextFullAdress !== null) {
                this.setState({
                    fullAdress: nextFullAdress
                });
                this.props.calculateCoords(nextFullAdress);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var venue = this.props;

            var deleteButton = this.props._id && _react2.default.createElement(
                _reactstrap.Button,
                { className: 'delete', color: 'danger', onClick: this.onDeleteConfirm },
                'Delete'
            );
            var duplicateButton = this.props._id && _react2.default.createElement(
                _reactstrap.Button,
                { className: 'duplicate', color: 'danger', onClick: this._duplicate },
                'Duplicate'
            );
            var disableButton = this.props._id && _react2.default.createElement(
                _reactstrap.Button,
                { className: 'disable', color: 'info', onClick: this.onDisableConfirm },
                this.props.disabled ? "Enable" : "Disable"
            );

            var coordinates = this.props.coordinates || {};

            return _react2.default.createElement(
                'div',
                { id: 'venueForm' },
                _react2.default.createElement(
                    _reactstrap.Form,
                    null,
                    !venue._id && _react2.default.createElement(
                        _reactstrap.Alert,
                        { color: 'primary' },
                        'This is a draft venue.'
                    ),
                    venue.disabled && _react2.default.createElement(
                        _reactstrap.Alert,
                        { color: 'danger' },
                        'This venue is currently disabled.'
                    ),
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
                            _react2.default.createElement(_reactstrap.Input, { disabled: venue.disabled, name: 'name', placeholder: 'Name', type: 'text', value: venue.name, onChange: this.handleChange }),
                            this.state.errorMessages.name && _react2.default.createElement(
                                _reactstrap.Alert,
                                { color: 'danger' },
                                this.state.errorMessages.name
                            )
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
                            _react2.default.createElement(_reactstrap.Input, { disabled: true, name: 'slug', type: 'text', value: venue.slug, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Popup'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactToggleButton2.default, {
                                value: venue.popup,
                                onToggle: function onToggle(value) {
                                    _this2.handleChange({ name: 'popup', value: value });
                                } })
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
                            _react2.default.createElement(_reactstrap.Input, { disabled: venue.disabled, name: 'address1', placeholder: 'Line 1', type: 'text', value: venue.address1, onChange: this.handleChange }),
                            _react2.default.createElement(_reactstrap.Input, { disabled: venue.disabled, name: 'address2', placeholder: 'Line 2', type: 'text', value: venue.address2, onChange: this.handleChange }),
                            this.state.errorMessages.address && _react2.default.createElement(
                                _reactstrap.Alert,
                                { color: 'danger' },
                                this.state.errorMessages.address
                            )
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
                            _react2.default.createElement(_reactstrap.Input, { disabled: venue.disabled, name: 'city', placeholder: 'City', type: 'text', value: venue.city, onChange: this.handleChange }),
                            this.state.errorMessages.city && _react2.default.createElement(
                                _reactstrap.Alert,
                                { color: 'danger' },
                                this.state.errorMessages.city
                            )
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
                            _react2.default.createElement(_NeighborhoodSelect2.default, { disabled: venue.disabled, selected: venue.neighborhood, onChange: this.handleChange }),
                            this.state.errorMessages.neighborhood && _react2.default.createElement(
                                _reactstrap.Alert,
                                { color: 'danger' },
                                this.state.errorMessages.neighborhood
                            )
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
                            _react2.default.createElement(_reactstrap.Input, { disabled: venue.disabled, name: 'state', placeholder: 'State', type: 'text', value: this.props.state, onChange: this.handleChange })
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
                            _react2.default.createElement(_reactstrap.Input, { disabled: venue.disabled, name: 'zipcode', placeholder: 'Zipcode', type: 'number', value: this.props.zipcode, onChange: this.handleChange }),
                            this.state.errorMessages.zipcode && _react2.default.createElement(
                                _reactstrap.Alert,
                                { color: 'danger' },
                                this.state.errorMessages.zipcode
                            )
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
                            _react2.default.createElement(_reactstrap.Input, { disabled: venue.disabled, name: 'lat', type: 'text', value: coordinates.lat, onChange: this.handleChange }),
                            _react2.default.createElement(_reactstrap.Input, { disabled: venue.disabled, name: 'long', type: 'text', value: coordinates.long, onChange: this.handleChange })
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
                            _react2.default.createElement(_reactstrap.Input, { disabled: venue.disabled, name: 'website', placeholder: 'Website', type: 'text', value: venue.website, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Email'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { disabled: venue.disabled, name: 'email', placeholder: 'Email', type: 'text', value: venue.email, onChange: this.handleChange })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Phone Number'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_reactstrap.Input, { disabled: venue.disabled, name: 'phone', placeholder: 'Phone Number', type: 'text', value: venue.phone, onChange: this.handleChange })
                        )
                    ),
                    venue.updated_by ? venue.created_at === venue.updated_at ? _react2.default.createElement(
                        'p',
                        null,
                        ' Created on ',
                        _react2.default.createElement(_DateBlock2.default, { date: venue.updated_at }),
                        ' by ',
                        _react2.default.createElement(_UserLink2.default, { user: venue.updated_by }),
                        '.'
                    ) : _react2.default.createElement(
                        'p',
                        null,
                        ' Updated on ',
                        _react2.default.createElement(_DateBlock2.default, { date: venue.updated_at }),
                        ' by ',
                        _react2.default.createElement(_UserLink2.default, { user: venue.updated_by }),
                        '.'
                    ) : '',
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { className: 'group-buttons' },
                        this.state.errorMessages.general && _react2.default.createElement(
                            _reactstrap.Alert,
                            { color: 'danger' },
                            this.state.errorMessages.general
                        ),
                        venue._id ? _react2.default.createElement(
                            _reactstrap.Button,
                            { onClick: this.onConfirm, disabled: !this.state.wasChanged },
                            'Update'
                        ) : _react2.default.createElement(
                            _reactstrap.Button,
                            { onClick: this.onCreateConfirm },
                            'Create'
                        ),
                        disableButton,
                        duplicateButton,
                        deleteButton
                    ),
                    this.state.updateModal && _react2.default.createElement(_confirmModal2.default, {
                        toggle: this.toggleModal,
                        handleSubmit: this.props.handleSubmit,
                        name: 'updateModal',
                        textTitle: 'Update',
                        textAction: 'save this Listing',
                        textConfirm: 'Saved!',
                        loading: this.props.loading.updatevenue,
                        error: this.props.error.general,
                        success: this.props.success.updatevenue }),
                    this.state.createModal && _react2.default.createElement(_confirmModal2.default, {
                        toggle: this.toggleModal,
                        modalVisible: this.state.createModal,
                        handleSubmit: this.props.handleSubmit,
                        name: 'createModal',
                        textTitle: 'Create',
                        textAction: 'create this Listing',
                        textConfirm: 'Created!',
                        loading: this.props.loading.savevenue,
                        error: this.props.error.general,
                        success: this.props.success.savevenue }),
                    this.state.deleteModal && _react2.default.createElement(_confirmModal2.default, {
                        toggle: this.toggleModal,
                        handleSubmit: this.props.handleDelete,
                        name: 'deleteModal',
                        textTitle: 'Delete',
                        textAction: 'delete this Listing',
                        textConfirm: 'Deleted!',
                        loading: this.props.loading.deletevenue,
                        error: this.props.error.general,
                        success: this.props.success.deletevenue }),
                    this.state.disableModal && _react2.default.createElement(_confirmModal2.default, {
                        toggle: this.toggleModal,
                        handleSubmit: this.handleDisable,
                        name: 'disableModal',
                        textTitle: this.props.disabled ? "Enable" : "Disable",
                        textAction: this.props.disabled ? "activate this venue again." : "hide this venue from the list of active venues.",
                        textConfirm: this.props.disabled ? "Disabled!" : "Enabled!",
                        loading: this.props.loading.updatevenue,
                        error: this.props.error.general,
                        success: this.props.success.updatevenue })
                )
            );
        }
    }]);

    return VenueForm;
}(_react2.default.Component);

exports.default = VenueForm;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactToggleButton = __webpack_require__(37);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _draftJs = __webpack_require__(67);

var _draftJsImportHtml = __webpack_require__(69);

var _draftJsExportHtml = __webpack_require__(68);

var _draftJsPluginsEditor = __webpack_require__(35);

var _confirmModal = __webpack_require__(13);

var _confirmModal2 = _interopRequireDefault(_confirmModal);

var _ThumbnailInput = __webpack_require__(31);

var _ThumbnailInput2 = _interopRequireDefault(_ThumbnailInput);

var _MyEditor = __webpack_require__(62);

var _MyEditor2 = _interopRequireDefault(_MyEditor);

var _reactstrap = __webpack_require__(2);

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
            text: '',
            updatevisible: false,
            editorState: (0, _draftJsPluginsEditor.createEditorStateWithText)('Test')
        };

        _this.onEditorChange = _this.onEditorChange.bind(_this);
        _this.onUpdate = _this.onUpdate.bind(_this);
        _this.toggleModal = _this.toggleModal.bind(_this);
        return _this;
    }

    _createClass(ListingForm, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.text !== this.state.text) {
                var description = this.props.text ? this.props.text : '';
                this.setState({
                    text: this.props.text,
                    editorState: _draftJs.EditorState.createWithContent((0, _draftJsImportHtml.stateFromHTML)(description))
                });
            }
        }
    }, {
        key: 'toggleModal',
        value: function toggleModal() {
            this.setState({
                updatevisible: false
            });
        }
    }, {
        key: 'onEditorChange',
        value: function onEditorChange(editorState) {
            this.props.onTextChange((0, _draftJsExportHtml.stateToHTML)(editorState.getCurrentContent()));
            this.setState({
                editorState: editorState
            });
        }
    }, {
        key: 'onUpdate',
        value: function onUpdate(e) {
            e.preventDefault();
            this.setState({
                updatevisible: true
            });
        }
    }, {
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
                            'Blurb'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_MyEditor2.default, {
                                name: 'text',
                                editorState: this.state.editorState,
                                onEditorChange: this.onEditorChange })
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Button,
                    { onClick: this.onUpdate },
                    'Submit'
                ),
                this.state.updatevisible && _react2.default.createElement(_confirmModal2.default, {
                    toggle: this.toggleModal,
                    handleSubmit: this.props.handleSubmit,
                    textTitle: 'Save',
                    textAction: 'save this Feature',
                    textConfirm: 'Saved!',
                    error: this.props.error,
                    success: this.props.success })
            );
        }
    }]);

    return ListingForm;
}(_react2.default.Component);

exports.default = ListingForm;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDates = __webpack_require__(36);

var _moment = __webpack_require__(6);

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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListStore = __webpack_require__(185);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactRouter = __webpack_require__(4);

var _sizeSelector = __webpack_require__(59);

var _sizeSelector2 = _interopRequireDefault(_sizeSelector);

var _Hamburger = __webpack_require__(148);

var _Hamburger2 = _interopRequireDefault(_Hamburger);

var _Helmet = __webpack_require__(9);

var _Helmet2 = _interopRequireDefault(_Helmet);

var _reactOffcanvas = __webpack_require__(211);

var _ListingForm = __webpack_require__(61);

var _ListingForm2 = _interopRequireDefault(_ListingForm);

var _EventForm = __webpack_require__(60);

var _EventForm2 = _interopRequireDefault(_EventForm);

var _reactGa = __webpack_require__(209);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _fontawesome = __webpack_require__(41);

var _fontawesome2 = _interopRequireDefault(_fontawesome);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _faPlusCircle = __webpack_require__(106);

var _faPlusCircle2 = _interopRequireDefault(_faPlusCircle);

var _faGlassMartini = __webpack_require__(99);

var _faGlassMartini2 = _interopRequireDefault(_faGlassMartini);

var _faTimes = __webpack_require__(110);

var _faTimes2 = _interopRequireDefault(_faTimes);

var _faEdit = __webpack_require__(97);

var _faEdit2 = _interopRequireDefault(_faEdit);

var _faCalendar = __webpack_require__(96);

var _faCalendar2 = _interopRequireDefault(_faCalendar);

var _faTrash = __webpack_require__(111);

var _faTrash2 = _interopRequireDefault(_faTrash);

var _faMap = __webpack_require__(103);

var _faMap2 = _interopRequireDefault(_faMap);

var _faExternalLinkSquare = __webpack_require__(98);

var _faExternalLinkSquare2 = _interopRequireDefault(_faExternalLinkSquare);

var _faMapMarkerAlt = __webpack_require__(104);

var _faMapMarkerAlt2 = _interopRequireDefault(_faMapMarkerAlt);

var _faBars = __webpack_require__(95);

var _faBars2 = _interopRequireDefault(_faBars);

var _faPencilAlt = __webpack_require__(105);

var _faPencilAlt2 = _interopRequireDefault(_faPencilAlt);

var _faListUl = __webpack_require__(102);

var _faListUl2 = _interopRequireDefault(_faListUl);

var _faTh = __webpack_require__(109);

var _faTh2 = _interopRequireDefault(_faTh);

var _faLink = __webpack_require__(101);

var _faLink2 = _interopRequireDefault(_faLink);

var _faSpinnerThird = __webpack_require__(108);

var _faSpinnerThird2 = _interopRequireDefault(_faSpinnerThird);

var _faSearch = __webpack_require__(107);

var _faSearch2 = _interopRequireDefault(_faSearch);

var _faInfoCircle = __webpack_require__(100);

var _faInfoCircle2 = _interopRequireDefault(_faInfoCircle);

var _faPlus = __webpack_require__(114);

var _faPlus2 = _interopRequireDefault(_faPlus);

var _faMinus = __webpack_require__(112);

var _faMinus2 = _interopRequireDefault(_faMinus);

var _faPhone = __webpack_require__(113);

var _faPhone2 = _interopRequireDefault(_faPhone);

var _faStar = __webpack_require__(115);

var _faStar2 = _interopRequireDefault(_faStar);

var _faFacebook = __webpack_require__(94);

var _faFacebook2 = _interopRequireDefault(_faFacebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


//Sidebar


//Google Analytics


//FontAwesome


_fontawesome2.default.library.add(_faBars2.default, _faListUl2.default, _faExternalLinkSquare2.default, _faTh2.default, _faMap2.default, _faCalendar2.default, _faPlusCircle2.default, _faPlusCircle2.default, _faMapMarkerAlt2.default, _faPlus2.default, _faMinus2.default, _faSpinnerThird2.default, _faGlassMartini2.default, _faStar2.default, _faTimes2.default, _faFacebook2.default, _faInfoCircle2.default, _faSearch2.default, _faEdit2.default, _faTrash2.default, _faPhone2.default, _faLink2.default, _faPencilAlt2.default);

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
            _reactGa2.default.initialize('UA-74357159-12');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ListStore2.default.listen(this.onChange);
            _reactGa2.default.pageview(window.location.pathname);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var currentPage = this.props.location.pathname;
            var nextPage = nextProps.location.pathname;

            if (currentPage !== nextPage) {
                _reactGa2.default.pageview(nextPage);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'toggleMenu',
        value: function toggleMenu() {
            _ListActions2.default.toggleMenu();
        }
    }, {
        key: 'toggleAdminMenu',
        value: function toggleAdminMenu() {
            _ListActions2.default.toggleSideBar();
        }
    }, {
        key: 'render',
        value: function render() {
            var user = this.state.user;

            var mylistNum = user.mylist.length;
            var connectedClass = user.isLoggedIn ? ' connected' : '';
            var currentLocation = this.props.location.pathname.slice(1).replace("/", "-");

            //admin access
            var allowAccess = user.isLoggedIn && user.userAccess > 0 ? true : false;

            return _react2.default.createElement(
                'div',
                { className: currentLocation + "Page app-container " + connectedClass },
                _react2.default.createElement(_Helmet2.default, {
                    title: 'The List',
                    link: 'https://list.artcritical.com',
                    ogType: 'website',
                    ogTitle: 'The List - artcritical',
                    ogUrl: 'https://list.artcritical.com'
                }),
                _react2.default.createElement(
                    'header',
                    { className: "mainHeader" + (this.state.menuActive ? ' active' : '') },
                    _react2.default.createElement(
                        'div',
                        { className: 'mainLogo' },
                        _react2.default.createElement(
                            'a',
                            { href: 'http://artcritical.com' },
                            _react2.default.createElement(
                                'h1',
                                null,
                                'artcritical'
                            ),
                            _react2.default.createElement(
                                'h2',
                                null,
                                'the online magazine of art and ideas'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'nav',
                        null,
                        _react2.default.createElement(
                            'ul',
                            null,
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '/' },
                                    'The List'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'submenu' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.IndexLink,
                                            { onClick: this.toggleMenu, to: '/', activeClassName: 'active' },
                                            'Week at a Glance'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { onClick: this.toggleMenu, to: '/current', activeClassName: 'active' },
                                            'All Shows'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { onClick: this.toggleMenu, to: '/events', activeClassName: 'active' },
                                            'Talks/Events'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { onClick: this.toggleMenu, to: '/map', activeClassName: 'active' },
                                            'Map'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        { className: 'accountOptions' },
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { onClick: this.toggleMenu, to: '/mylist', activeClassName: 'active' },
                                            'My List ',
                                            mylistNum > 0 && '(' + mylistNum + ')'
                                        ),
                                        user.isLoggedIn && _react2.default.createElement(
                                            'ul',
                                            { className: 'submenu' },
                                            _react2.default.createElement(
                                                _reactRouter.Link,
                                                { onClick: this.toggleMenu, to: '/account', activeClassName: 'active' },
                                                'Account'
                                            ),
                                            _react2.default.createElement(
                                                'a',
                                                { onClick: _AuthActions2.default.attemptLogOut },
                                                'Log Out'
                                            )
                                        )
                                    ),
                                    allowAccess && _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { onClick: this.toggleMenu, to: '/admin', activeClassName: 'active' },
                                            'Admin'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'http://www.artcritical.com' },
                                    'Magazine'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'http://www.artcritical.com/category/departments/the-review-panel/' },
                                    'The Review Panel'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(_sizeSelector2.default, { view: this.state.view })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mobileMenu' },
                    _react2.default.createElement(
                        'nav',
                        null,
                        _react2.default.createElement(
                            'ul',
                            null,
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.IndexLink,
                                    { to: '/', activeClassName: 'active' },
                                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'calendar'] }),
                                    'Week'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/current', activeClassName: 'active' },
                                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'list-ul'] }),
                                    'All'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/events', activeClassName: 'active' },
                                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'glass-martini'] }),
                                    'Events'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/map', activeClassName: 'active' },
                                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'map'] }),
                                    'Map'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/mylist', activeClassName: 'active' },
                                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'map-marker-alt'] }),
                                    'My List'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(_Hamburger2.default, { active: this.state.menuActive }),
                _react2.default.createElement(
                    _reactOffcanvas.OffCanvas,
                    { width: 500, transitionDuration: 300, isMenuOpened: this.state.sidebarOpen, position: "right", className: "fullCanvas" },
                    _react2.default.createElement(
                        _reactOffcanvas.OffCanvasBody,
                        { className: "app-content cf" },
                        //Give the current state as props to the children elements
                        _react2.default.cloneElement(this.props.children, this.state)
                    ),
                    _react2.default.createElement(
                        _reactOffcanvas.OffCanvasMenu,
                        { className: "sideMenu" },
                        _react2.default.createElement(
                            'a',
                            { className: 'close', onClick: this.toggleAdminMenu },
                            _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'times'] })
                        ),
                        typeof this.state.listingEdit._id === "string" && _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'h3',
                                null,
                                'Edit Listing'
                            ),
                            _react2.default.createElement(_ListingForm2.default, {
                                listing: this.state.listingEdit,
                                error: this.state.error,
                                loading: this.state.loading,
                                success: this.state.success })
                        ),
                        typeof this.state.eventEdit._id === "string" && _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'h3',
                                null,
                                'Edit Event'
                            ),
                            _react2.default.createElement(_EventForm2.default, {
                                event: this.state.eventEdit,
                                error: this.state.error,
                                loading: this.state.loading,
                                success: this.state.success })
                        ),
                        _react2.default.createElement('div', { className: 'overlay' })
                    )
                ),
                _react2.default.createElement(
                    'footer',
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        '"artcritical," "artcritical.com" and "The Review Panel" \xA92018 artcritical, LLC 2003-2018'
                    )
                )
            );
        }
    }]);

    return Layout;
}(_react2.default.Component);

exports.default = Layout;

/***/ }),
/* 166 */
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _validator = __webpack_require__(19);

var _validator2 = _interopRequireDefault(_validator);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _reactstrap = __webpack_require__(2);

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
            email: '',
            isValid: true,
            errorMessage: ''
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
            var errorMessage = '';

            if (valid) {
                this.setState({ errorMessage: errorMessage });
            } else {
                errorMessage = 'Please enter a valid email address';
                this.setState({ errorMessage: errorMessage });
            }
            return valid;
        }
    }, {
        key: 'handleSaveClick',
        value: function handleSaveClick(event) {

            event.preventDefault();

            var email = this.state.email;


            if (this._validateEmail(email)) {
                _AuthActions2.default.forgotPassword(email);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'resetForm' },
                _react2.default.createElement(
                    _reactstrap.Form,
                    null,
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(_reactstrap.Input, { type: 'email',
                            name: 'email',
                            placeholder: 'Email',
                            value: this.state.email,
                            className: this._getInputStyleName(this.state.isValid),
                            onChange: this.handleChange
                        }),
                        this.state.errorMessage && _react2.default.createElement(
                            _reactstrap.Alert,
                            { color: 'danger' },
                            this.state.errorMessage
                        ),
                        this.props.error && _react2.default.createElement(
                            _reactstrap.Alert,
                            { color: 'danger' },
                            this.props.error
                        ),
                        this.props.success && _react2.default.createElement(
                            _reactstrap.Alert,
                            { color: 'success' },
                            this.props.success
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.Button,
                        { type: 'submit', value: 'Submit', onClick: this.handleSaveClick },
                        'Reset'
                    )
                )
            );
        }
    }]);

    return SignUpForm;
}(_react2.default.Component);

exports.default = SignUpForm;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ForgotForm = __webpack_require__(167);

var _ForgotForm2 = _interopRequireDefault(_ForgotForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var ForgotPage = function (_React$Component) {
    _inherits(ForgotPage, _React$Component);

    function ForgotPage(props) {
        _classCallCheck(this, ForgotPage);

        return _possibleConstructorReturn(this, (ForgotPage.__proto__ || Object.getPrototypeOf(ForgotPage)).call(this, props));
    }

    _createClass(ForgotPage, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'ResetPage' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Reset Password'
                ),
                this.props.error.resetUser && _react2.default.createElement(
                    'div',
                    null,
                    this.props.error.resetUser
                ),
                _react2.default.createElement(_ForgotForm2.default, {
                    loading: this.props.loading.forgot,
                    error: this.props.error.forgot,
                    success: this.props.success.forgot })
            );
        }
    }]);

    return ForgotPage;
}(_react2.default.Component);

exports.default = ForgotPage;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LogInForm = __webpack_require__(24);

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
                { className: 'SignIn' },
                _react2.default.createElement(
                    'div',
                    { className: 'loginPage' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Login'
                    ),
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
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _validator = __webpack_require__(19);

var _validator2 = _interopRequireDefault(_validator);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _reactstrap = __webpack_require__(2);

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
            password1: '',
            password2: '',
            isValid: {
                password1: true,
                password2: true
            },
            errorMessage: {
                password1: '',
                password2: ''
            }
        };

        // Function Binding
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSaveClick = _this.handleSaveClick.bind(_this);
        _this._validatePassword1 = _this._validatePassword1.bind(_this);
        _this._validatePassword2 = _this._validatePassword2.bind(_this);
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
        key: 'handleSaveClick',
        value: function handleSaveClick(event) {

            event.preventDefault();

            var _state = this.state,
                password1 = _state.password1,
                password2 = _state.password2;


            if (this._validatePassword1(password1) && this._validatePassword2(password1, password2)) {
                _AuthActions2.default.resetPassword(password1, this.props.token);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'resetForm' },
                _react2.default.createElement(
                    _reactstrap.Form,
                    null,
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(_reactstrap.Input, { type: 'password',
                            name: 'password1',
                            placeholder: 'New Password',
                            value: this.state.password1,
                            className: this._getInputStyleName(this.state.password1.isValid),
                            onChange: this.handleChange
                        }),
                        this.state.errorMessage.password1 && _react2.default.createElement(
                            _reactstrap.Alert,
                            { color: 'danger' },
                            this.state.errorMessage.password1
                        ),
                        _react2.default.createElement(_reactstrap.Input, { type: 'password',
                            name: 'password2',
                            placeholder: 'Re-type your new Password',
                            value: this.state.password2,
                            className: this._getInputStyleName(this.state.password2.isValid),
                            onChange: this.handleChange
                        }),
                        this.state.errorMessage.password2 && _react2.default.createElement(
                            _reactstrap.Alert,
                            { color: 'danger' },
                            this.state.errorMessage.password2
                        ),
                        this.props.error && _react2.default.createElement(
                            _reactstrap.Alert,
                            { color: 'danger' },
                            this.state.errorMessage.password2
                        ),
                        this.props.success && _react2.default.createElement(
                            _reactstrap.Alert,
                            { color: 'success' },
                            this.props.success
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.Button,
                        { type: 'submit', value: 'Submit', onClick: this.handleSaveClick },
                        'Reset'
                    )
                )
            );
        }
    }]);

    return SignUpForm;
}(_react2.default.Component);

exports.default = SignUpForm;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ResetForm = __webpack_require__(170);

var _ResetForm2 = _interopRequireDefault(_ResetForm);

var _loading = __webpack_require__(10);

var _loading2 = _interopRequireDefault(_loading);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var ResetPage = function (_React$Component) {
    _inherits(ResetPage, _React$Component);

    function ResetPage(props) {
        _classCallCheck(this, ResetPage);

        return _possibleConstructorReturn(this, (ResetPage.__proto__ || Object.getPrototypeOf(ResetPage)).call(this, props));
    }

    _createClass(ResetPage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _AuthActions2.default.certifyReset(this.props.params.token);
        }
    }, {
        key: 'render',
        value: function render() {

            if (!this.props.resetUser && !this.props.loading.certifyReset) {
                this.props.history.push('/forgot');
            }

            return _react2.default.createElement(
                'div',
                { className: 'ResetPage' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Reset Password'
                ),
                !this.props.loading.certifyReset && this.props.resetUser ? _react2.default.createElement(_ResetForm2.default, {
                    token: this.props.params.token,
                    loading: this.props.loading.reset,
                    error: this.props.error.reset,
                    success: this.props.success.reset }) : _react2.default.createElement(_loading2.default, null)
            );
        }
    }]);

    return ResetPage;
}(_react2.default.Component);

exports.default = ResetPage;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(50);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _reactToggleButton = __webpack_require__(37);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _validator = __webpack_require__(19);

var _validator2 = _interopRequireDefault(_validator);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _reactstrap = __webpack_require__(2);

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
        _this._validateTerms = _this._validateTerms.bind(_this);
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
                errorMessage.firstname = '';
                this.setState({ errorMessage: errorMessage });
            } else {
                errorMessage.firstname = 'Please enter a first name.';
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
                errorMessage.lastname = '';
                this.setState({ errorMessage: errorMessage });
            } else {
                errorMessage.lastname = 'Please enter a last name.';
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
        key: '_validateTerms',
        value: function _validateTerms(value) {
            var errorMessage = this.state.errorMessage;

            if (value) {
                errorMessage.terms = '';
                this.setState({ errorMessage: errorMessage });
            } else {
                errorMessage.terms = 'Please accept the terms.';
                this.setState({ errorMessage: errorMessage });
            }
            return value;
        }
    }, {
        key: '_validate',
        value: function _validate(firstname, lastname, email, password1, password2, terms) {
            this.setState({
                isValid: {
                    firstname: this._validateFirstName(firstname),
                    lastname: this._validateLastName(lastname),
                    email: this._validateEmail(email),
                    password1: this._validatePassword1(password1),
                    password2: this._validatePassword2(password1, password2),
                    terms: this._validateTerms(terms)
                }
            });
        }
    }, {
        key: '_areValid',
        value: function _areValid(firstname, lastname, email, password1, password2, terms) {
            var result = false;

            if (this._validateFirstName(firstname) && this._validateLastName(lastname) && this._validateEmail(email) && this._validatePassword1(password1) && this._validatePassword2(password1, password2) && terms) {

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
                password2 = _state.password2,
                terms = _state.terms,
                newsletter = _state.newsletter;


            this._validate(firstname, lastname, email, password1, password2, terms);

            if (this._areValid(firstname, lastname, email, password1, password2, terms)) {
                var newUser = {
                    firstname: firstname,
                    lastname: lastname,
                    username: email,
                    password: password1,
                    subscribed: newsletter
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
                    _react2.default.createElement(_reactstrap.Input, { type: 'text',
                        name: 'firstname',
                        placeholder: 'First Name',
                        value: this.state.firstname,
                        className: this._getInputStyleName(this.state.isValid.firstname),
                        onChange: this.handleChange
                    }),
                    this.state.errorMessage.firstname && _react2.default.createElement(
                        _reactstrap.Alert,
                        { color: 'danger' },
                        this.state.errorMessage.firstname
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { check: true },
                    _react2.default.createElement(_reactstrap.Input, { type: 'text',
                        name: 'lastname',
                        placeholder: 'Last Name',
                        value: this.state.lastname,
                        className: this._getInputStyleName(this.state.isValid.lastname),
                        onChange: this.handleChange
                    }),
                    this.state.errorMessage.lastname && _react2.default.createElement(
                        _reactstrap.Alert,
                        { color: 'danger' },
                        this.state.errorMessage.lastname
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { check: true },
                    _react2.default.createElement(_reactstrap.Input, { type: 'email',
                        name: 'email',
                        placeholder: 'Email',
                        value: this.state.email,
                        className: this._getInputStyleName(this.state.isValid.email),
                        onChange: this.handleChange
                    }),
                    this.state.errorMessage.email && _react2.default.createElement(
                        _reactstrap.Alert,
                        { color: 'danger' },
                        this.state.errorMessage.email
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { check: true },
                    _react2.default.createElement(_reactstrap.Input, { type: 'password',
                        name: 'password1',
                        placeholder: 'Password',
                        value: this.state.password1,
                        className: this._getInputStyleName(this.state.isValid.password1),
                        onChange: this.handleChange
                    }),
                    this.state.errorMessage.password1 && _react2.default.createElement(
                        _reactstrap.Alert,
                        { color: 'danger' },
                        this.state.errorMessage.password1
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { check: true },
                    _react2.default.createElement(_reactstrap.Input, { type: 'password',
                        name: 'password2',
                        placeholder: 'Confirm Password',
                        value: this.state.password2,
                        className: this._getInputStyleName(this.state.isValid.password2),
                        onChange: this.handleChange
                    }),
                    this.state.errorMessage.password2 && _react2.default.createElement(
                        _reactstrap.Alert,
                        { color: 'danger' },
                        this.state.errorMessage.password2
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { check: true },
                    _react2.default.createElement(_reactstrap.Input, { type: 'checkbox',
                        name: 'terms',
                        onChange: this.handleChange }),
                    ' I accept the Terms and Conditions.',
                    this.state.errorMessage.terms && _react2.default.createElement(
                        _reactstrap.Alert,
                        { color: 'danger' },
                        this.state.errorMessage.terms
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { check: true },
                    _react2.default.createElement(_reactstrap.Input, { type: 'checkbox',
                        name: 'newsletter',
                        onChange: this.handleChange }),
                    ' I\'d like to subscribe to the artcritical newsletter.'
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
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _SignUpForm = __webpack_require__(172);

var _SignUpForm2 = _interopRequireDefault(_SignUpForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUpPage = function (_React$Component) {
    _inherits(SignUpPage, _React$Component);

    function SignUpPage() {
        _classCallCheck(this, SignUpPage);

        return _possibleConstructorReturn(this, (SignUpPage.__proto__ || Object.getPrototypeOf(SignUpPage)).apply(this, arguments));
    }

    _createClass(SignUpPage, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'SignIn' },
                _react2.default.createElement(
                    'div',
                    { className: 'signupForm' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Sign Up'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Register now and start adding shows to your list!'
                    ),
                    _react2.default.createElement(_SignUpForm2.default, this.props),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Already have an account? ',
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/login', activeClassName: 'active' },
                            'Log In'
                        )
                    )
                )
            );
        }
    }]);

    return SignUpPage;
}(_react2.default.Component);

exports.default = SignUpPage;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _myList = __webpack_require__(176);

var _myList2 = _interopRequireDefault(_myList);

var _LogInForm = __webpack_require__(24);

var _LogInForm2 = _interopRequireDefault(_LogInForm);

var _Helmet = __webpack_require__(9);

var _Helmet2 = _interopRequireDefault(_Helmet);

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
                { className: 'SignIn' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Sign In'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Sign in to start adding shows to your list.'
                    ),
                    _react2.default.createElement(_LogInForm2.default, {
                        loading: this.props.loading.login,
                        error: this.props.error })
                )
            );
            return _react2.default.createElement(
                'div',
                { className: 'myListwrap' },
                _react2.default.createElement(_Helmet2.default, {
                    title: 'My List',
                    link: 'https://list.artcritical.com/mylist'
                }),
                myListRender
            );
        }
    }]);

    return MyListPage;
}(_react2.default.Component);

exports.default = MyListPage;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _userList = __webpack_require__(178);

var _userList2 = _interopRequireDefault(_userList);

var _Helmet = __webpack_require__(9);

var _Helmet2 = _interopRequireDefault(_Helmet);

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
            var fullname = this.props.currentUser.mylist ? this.props.currentUser.firstname + ' ' + this.props.currentUser.lastname + "'s List" : 'The List';
            var myListRender = this.props.currentUser.mylist ? _react2.default.createElement(_userList2.default, this.props) : _react2.default.createElement(
                'div',
                null,
                'No such user.'
            );
            return _react2.default.createElement(
                'div',
                { className: 'myListwrap' },
                _react2.default.createElement(_Helmet2.default, {
                    title: fullname
                }),
                myListRender
            );
        }
    }]);

    return MyListPage;
}(_react2.default.Component);

exports.default = MyListPage;

/***/ }),
/* 176 */
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

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactMapGl = __webpack_require__(18);

var _myListings = __webpack_require__(177);

var _myListings2 = _interopRequireDefault(_myListings);

var _myMap = __webpack_require__(66);

var _myMap2 = _interopRequireDefault(_myMap);

var _facebookShare = __webpack_require__(54);

var _facebookShare2 = _interopRequireDefault(_facebookShare);

var _reactReorder = __webpack_require__(72);

var _reactstrap = __webpack_require__(2);

var _reactRouter = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var async = __webpack_require__(33);
// Components


var d3 = __webpack_require__(34);

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
        _this.onAutoReorder = _this.onAutoReorder.bind(_this);
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

            _AuthActions2.default.getMylist();

            async.map(this.props.user.mylist, this.findCoord, function (err, results) {
                // results is now an array
                this.setState({
                    markers: results
                });
            }.bind(this));
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {}
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
                width: this.refs.mapWrap.offsetWidth,
                height: this.refs.mapWrap.offsetHeight
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
        key: 'onAutoReorder',
        value: function onAutoReorder() {
            var newOrder = this.props.user.mylist.sort(function (a, b) {
                if (a.neighborhood < b.neighborhood) //sort string ascending
                    return -1;
                if (a.neighborhood > b.neighborhood) return 1;
                return 0; //default return value (no sorting)
            });
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

            var hasList = this.props.user.mylist && this.props.user.mylist.length > 0 ? true : false;

            return _react2.default.createElement(
                'div',
                { className: hasList ? "myList" : "mylist deactivated" },
                _react2.default.createElement(
                    'div',
                    { className: 'mapWrap', ref: 'mapWrap' },
                    _react2.default.createElement(_myMap2.default, {
                        markers: this.state.markers,
                        viewport: this.state.viewport,
                        updateViewport: this._updateViewport,
                        listingHover: this.state.listingHover,
                        onHover: this._onHover,
                        onLeave: this._onLeave
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: this.props.view + " mapInfo cf" },
                    _react2.default.createElement(
                        'div',
                        { className: 'mapHeader' },
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
                        _react2.default.createElement(_facebookShare2.default, { url: this.state.publicUrl })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        hasList && _react2.default.createElement(_myListings2.default, {
                            user: this.props.user,
                            view: this.props.view,
                            onHover: this._onHover,
                            onLeave: this._onLeave,
                            onReorder: this.onReorder,
                            onAutoReorder: this.onAutoReorder,
                            listingHover: this.state.listingHover })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'footer' },
                        _react2.default.createElement(
                            _reactstrap.Button,
                            { onClick: this.onAutoReorder },
                            'Reset Order'
                        )
                    )
                ),
                !hasList && _react2.default.createElement(
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
                            _reactRouter.Link,
                            { to: '/current' },
                            _react2.default.createElement(
                                _reactstrap.Button,
                                null,
                                'Explore all shows'
                            )
                        )
                    )
                )
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
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _VenueBlock = __webpack_require__(12);

var _VenueBlock2 = _interopRequireDefault(_VenueBlock);

var _reactReorder = __webpack_require__(72);

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
                            className: listing._id == _this2.props.listingHover && 'active'
                        },
                        _react2.default.createElement(_VenueBlock2.default, {
                            listings: [listing], number: index + 1,
                            user: _this2.props.user, mylisting: true,
                            mapMouseEnter: _this2.props.onHover.bind(_this2, listing),
                            mapMouseLeave: _this2.props.onLeave.bind(_this2, listing),
                            onMap: true
                        })
                    );
                })
            );
        }
    }]);

    return MyListings;
}(_react2.default.Component);

exports.default = MyListings;

/***/ }),
/* 178 */
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

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactMapGl = __webpack_require__(18);

var _userListings = __webpack_require__(179);

var _userListings2 = _interopRequireDefault(_userListings);

var _myMap = __webpack_require__(66);

var _myMap2 = _interopRequireDefault(_myMap);

var _facebookShare = __webpack_require__(54);

var _facebookShare2 = _interopRequireDefault(_facebookShare);

var _reactstrap = __webpack_require__(2);

var _HtmlText = __webpack_require__(52);

var _HtmlText2 = _interopRequireDefault(_HtmlText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var async = __webpack_require__(33);
// Components


var d3 = __webpack_require__(34);

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
                height: 0
            }
        };

        _this.findCoord = _this.findCoord.bind(_this);
        _this._onHover = _this._onHover.bind(_this);
        _this.onLeave = _this.onLeave.bind(_this);
        _this.updateViewport = _this.updateViewport.bind(_this);
        _this.componentWillMount = _this.componentWillMount.bind(_this);
        _this.componentDidMount = _this.componentDidMount.bind(_this);
        _this._updateDimensions = _this._updateDimensions.bind(_this);
        return _this;
    }

    _createClass(UserList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            async.map(this.props.currentUser.mylist, this.findCoord, function (err, results) {
                // results is now an array
                this.setState({
                    markers: results
                });
            }.bind(this));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            //Resize the map
            this._updateDimensions();
            window.addEventListener("resize", this._updateDimensions);
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
        key: 'updateViewport',
        value: function updateViewport(v) {
            this.setState({
                viewport: v
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var user = this.props.currentUser;
            var fullURL = '';
            var hasAvatar = false;

            if (user.avatar) {
                hasAvatar = true;
                fullURL = "https://res.cloudinary.com/artcritical/image/upload/" + user.avatar + ".jpg";
            } else if (user.facebook) {
                hasAvatar = true;
                fullURL = "https://graph.facebook.com/" + user.facebook.id + "/picture?type=large";
            }

            var name = user.lastname ? user.firstname + " " + user.lastname : user.firstname;

            return _react2.default.createElement(
                'div',
                { className: 'myList userList' },
                _react2.default.createElement(
                    'div',
                    { className: this.props.view + " mapInfo cf" },
                    _react2.default.createElement(
                        'header',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'avatarWrap' },
                            hasAvatar && _react2.default.createElement('div', { className: 'avatar', style: { backgroundImage: "url(" + fullURL + ")" } })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'infoWrap' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                name,
                                '\'s List'
                            ),
                            _react2.default.createElement(_HtmlText2.default, { content: user.bio }),
                            user.website && _react2.default.createElement(
                                'a',
                                { className: 'button',
                                    href: user.website,
                                    target: '_blank' },
                                'Website'
                            ),
                            _react2.default.createElement(_facebookShare2.default, { url: this.state.url })
                        )
                    ),
                    user.mylist ? _react2.default.createElement(_userListings2.default, _extends({}, this.props, {
                        listingHover: this.state.listingHover,
                        onHover: this._onHover,
                        onLeave: this.onLeave,
                        onMap: true
                    })) : _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h2',
                            null,
                            'There is no show in this list'
                        ),
                        _react2.default.createElement(
                            _reactstrap.Button,
                            { href: '/current' },
                            'Explore all shows'
                        )
                    )
                ),
                _react2.default.createElement(_myMap2.default, {
                    markers: this.state.markers,
                    viewport: this.state.viewport,
                    updateViewport: this.updateViewport,
                    listingHover: this.state.listingHover,
                    onHover: this._onHover,
                    onLeave: this.onLeave
                })
            );
        }
    }]);

    return UserList;
}(_react2.default.Component);

exports.default = UserList;


UserList.defaultProps = {
    center: { lat: 40.7238556, lng: -73.9221523 },
    zoom: 11,
    token: process.env.MapboxAccessToken,
    transitionDuration: 1000,
    transitionInterpolator: new _reactMapGl.FlyToInterpolator(),
    transitionEasing: d3.easeCubic
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _VenueBlock = __webpack_require__(12);

var _VenueBlock2 = _interopRequireDefault(_VenueBlock);

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
                this.props.currentUser.mylist.map(function (listing, index) {
                    return _react2.default.createElement(
                        'div',
                        { key: listing._id,
                            className: listing._id == _this2.props.listingHover && 'active'
                        },
                        _react2.default.createElement(_VenueBlock2.default, _extends({}, _this2.props, {
                            listings: [listing],
                            number: index + 1,
                            user: _this2.props.user,
                            'public': true,
                            mapMouseEnter: _this2.props.onHover.bind(_this2, listing),
                            mapMouseLeave: _this2.props.onLeave.bind(_this2, listing) }))
                    );
                })
            );
        }
    }]);

    return UserListings;
}(_react2.default.Component);

exports.default = UserListings;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _tabs = __webpack_require__(32);

var _tabs2 = _interopRequireDefault(_tabs);

var _VenueListings = __webpack_require__(182);

var _VenueListings2 = _interopRequireDefault(_VenueListings);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var VenuePage = function (_React$Component) {
    _inherits(VenuePage, _React$Component);

    function VenuePage(props) {
        _classCallCheck(this, VenuePage);

        return _possibleConstructorReturn(this, (VenuePage.__proto__ || Object.getPrototypeOf(VenuePage)).call(this, props));
    }

    _createClass(VenuePage, [{
        key: 'render',
        value: function render() {
            var venue = this.props.venue;

            return _react2.default.createElement(
                'div',
                { className: 'mapInfo' },
                _react2.default.createElement(
                    'h2',
                    null,
                    venue.name
                ),
                _react2.default.createElement(
                    'section',
                    null,
                    venue.address1,
                    ' ',
                    venue.address2,
                    _react2.default.createElement('br', null),
                    venue.city,
                    venue.state && ', ' + venue.state,
                    ' ',
                    venue.zipcode,
                    venue.phone && _react2.default.createElement(
                        'div',
                        { className: 'phone' },
                        _react2.default.createElement(_reactFontawesome2.default, { icon: ['fas', 'phone'] }),
                        ' ',
                        venue.phone
                    ),
                    venue.website && _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'link'] }),
                        ' ',
                        _react2.default.createElement(
                            'a',
                            { className: 'website', target: '_blank', href: venue.website },
                            venue.website
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'contact' },
                    'Represent this gallery? Contact us at ',
                    _react2.default.createElement(
                        'a',
                        { href: 'mailto:hello@artcritical.com' },
                        'hello@artcritical.com'
                    ),
                    ' to get access to this page.'
                ),
                _react2.default.createElement(
                    _tabs2.default,
                    null,
                    _react2.default.createElement(_VenueListings2.default, { view: this.props.view, listings: this.props.venue.currentListings, user: this.props.user, label: 'Current Shows' }),
                    _react2.default.createElement(_VenueListings2.default, { view: this.props.view, listings: this.props.venue.upcomingListings, user: this.props.user, label: 'Upcoming Shows' }),
                    _react2.default.createElement(_VenueListings2.default, { view: this.props.view, listings: this.props.venue.pastListings, user: this.props.user, label: 'Past Shows' })
                )
            );
        }
    }]);

    return VenuePage;
}(_react2.default.Component);

exports.default = VenuePage;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _DateBlock = __webpack_require__(8);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


//Find today's date
var today = (0, _moment2.default)();

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
            nextListing: ''
        };

        _this.componentDidMount = _this.componentDidMount.bind(_this);
        return _this;
    }

    _createClass(VenueItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //Check if it has been used recently and is not disabled
            this.props.listings ? this.props.listings.length == 0 && this.setState({ old: true }) : this.setState({ old: true });
            this.props.disabled && this.setState({ old: true, expired: true });
            //Check if it has a current listing
            if (!this.props.disabled && this.props.listings) {
                var allCurrent = [];
                this.props.listings.map(function (listing, index) {
                    var listingStart = (0, _moment2.default)(listing.start);
                    var listingEnd = (0, _moment2.default)(listing.end);

                    if (listingEnd.isSameOrAfter(today, 'day') && listingStart.isSameOrBefore(today, 'day')) {
                        allCurrent.push(listing);
                        this.setState({
                            expired: false
                        });
                    }
                    if (listingStart.isAfter(today, 'day')) {
                        this.setState({
                            upcoming: true
                        });
                        if (!this.state.nextListing || (0, _moment2.default)(this.state.nextListing.start) < listingStart) {
                            this.setState({
                                nextListing: listing
                            });
                        }
                    }
                }, this);

                this.setState({
                    currentListings: allCurrent
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var classNames = ['venue'];
            this.state.old && classNames.push('old');
            this.state.expired && classNames.push('expired');
            this.state.upcoming && classNames.push('upcoming');

            var nextListing = this.state.nextListing;

            var currentListings = function currentListings(listings) {
                return listings.map(function (listing) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'venueListing', key: listing._id },
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
                this.props.website && _react2.default.createElement(
                    'a',
                    { href: this.props.website, target: '_blank' },
                    _react2.default.createElement(_reactFontawesome2.default, { icon: ['fal', 'external-link-square'] })
                ),
                !this.state.old && currentListings(this.state.currentListings),
                nextListing && _react2.default.createElement(
                    'div',
                    null,
                    'Upcoming: ',
                    nextListing.name,
                    ' - Starting ',
                    _react2.default.createElement(_DateBlock2.default, { date: nextListing.start })
                )
            );
        }
    }]);

    return VenueItem;
}(_react2.default.Component);

exports.default = VenueItem;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _VenueBlock = __webpack_require__(12);

var _VenueBlock2 = _interopRequireDefault(_VenueBlock);

var _sizeSelector = __webpack_require__(59);

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

            return _react2.default.createElement(
                'div',
                { className: 'venueListings' },
                _react2.default.createElement(_sizeSelector2.default, { view: this.props.view }),
                _react2.default.createElement(
                    'div',
                    { className: this.props.view + " listingsWrap" },
                    this.props.listings[0] ? _react2.default.createElement(_VenueBlock2.default, { listings: this.props.listings, user: this.props.user, key: this.props.listings[0]._id }) : 'No Listings'
                )
            );
        }
    }]);

    return VenueListings;
}(_react2.default.Component);

exports.default = VenueListings;

/***/ }),
/* 183 */
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

var _mapBlock = __webpack_require__(57);

var _mapBlock2 = _interopRequireDefault(_mapBlock);

var _VenueContent = __webpack_require__(180);

var _VenueContent2 = _interopRequireDefault(_VenueContent);

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
            _ListActions2.default.getVenueFullInfo(this.props.params.slug);
        }
    }, {
        key: 'render',
        value: function render() {

            // Get coordinates
            var fullAdress = this.props.venue.address ? this.props.venue.address + ' ' + this.props.venue.city : null;
            var venueId = this.props.venue ? this.props.venue._id : '';

            if (fullAdress && !this.props.venue.coordinates) {
                client.geocodeForward(fullAdress, function (err, data, res) {
                    var newCoords = data.features[0].center;
                    _ListActions2.default.updateVenue(newCoords, venueId);
                });
            }

            return _react2.default.createElement(
                'div',
                { className: 'venuePage' },
                _react2.default.createElement(_VenueContent2.default, this.props),
                this.props.venue.coordinates && _react2.default.createElement(
                    'div',
                    { className: 'mapWrap' },
                    _react2.default.createElement(_mapBlock2.default, this.props.venue)
                )
            );
        }
    }]);

    return VenuePage;
}(_react2.default.Component);

exports.default = VenuePage;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _layout = __webpack_require__(165);

var _layout2 = _interopRequireDefault(_layout);

var _CurrentPage = __webpack_require__(131);

var _CurrentPage2 = _interopRequireDefault(_CurrentPage);

var _FuturePage = __webpack_require__(135);

var _FuturePage2 = _interopRequireDefault(_FuturePage);

var _GlancePage = __webpack_require__(136);

var _GlancePage2 = _interopRequireDefault(_GlancePage);

var _CurrentMap = __webpack_require__(130);

var _CurrentMap2 = _interopRequireDefault(_CurrentMap);

var _EventsPage = __webpack_require__(134);

var _EventsPage2 = _interopRequireDefault(_EventsPage);

var _VenuePage = __webpack_require__(183);

var _VenuePage2 = _interopRequireDefault(_VenuePage);

var _SignUpPage = __webpack_require__(173);

var _SignUpPage2 = _interopRequireDefault(_SignUpPage);

var _LogInPage = __webpack_require__(169);

var _LogInPage2 = _interopRequireDefault(_LogInPage);

var _ResetPage = __webpack_require__(171);

var _ResetPage2 = _interopRequireDefault(_ResetPage);

var _ForgotPage = __webpack_require__(168);

var _ForgotPage2 = _interopRequireDefault(_ForgotPage);

var _myListPage = __webpack_require__(174);

var _myListPage2 = _interopRequireDefault(_myListPage);

var _myListPublicPage = __webpack_require__(175);

var _myListPublicPage2 = _interopRequireDefault(_myListPublicPage);

var _AuthSuccess = __webpack_require__(166);

var _AuthSuccess2 = _interopRequireDefault(_AuthSuccess);

var _AdminPage = __webpack_require__(138);

var _AdminPage2 = _interopRequireDefault(_AdminPage);

var _EditListing = __webpack_require__(140);

var _EditListing2 = _interopRequireDefault(_EditListing);

var _EditEvents = __webpack_require__(139);

var _EditEvents2 = _interopRequireDefault(_EditEvents);

var _EditVenue = __webpack_require__(141);

var _EditVenue2 = _interopRequireDefault(_EditVenue);

var _featuredPage = __webpack_require__(147);

var _featuredPage2 = _interopRequireDefault(_featuredPage);

var _VenuesPage = __webpack_require__(144);

var _VenuesPage2 = _interopRequireDefault(_VenuesPage);

var _UsersPage = __webpack_require__(143);

var _UsersPage2 = _interopRequireDefault(_UsersPage);

var _ReviewPage = __webpack_require__(142);

var _ReviewPage2 = _interopRequireDefault(_ReviewPage);

var _Account = __webpack_require__(137);

var _Account2 = _interopRequireDefault(_Account);

var _ErrorPage = __webpack_require__(133);

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
      _react2.default.createElement(_reactRouter.Route, { path: 'reset/:token', component: _ResetPage2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'forgot', component: _ForgotPage2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'venue/:slug', component: _VenuePage2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'account', component: _Account2.default }),
      _react2.default.createElement(
            _reactRouter.Route,
            { path: 'admin', component: _AdminPage2.default },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: _VenuesPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'listings', component: _EditListing2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'events', component: _EditEvents2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'venues', component: _EditVenue2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'featured', component: _featuredPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'review', component: _ReviewPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'users', component: _UsersPage2.default })
      ),
      _react2.default.createElement(_reactRouter.Route, { path: 'auth/facebook/success', component: _AuthSuccess2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '*', component: _ErrorPage2.default })
);
// Error Components

//Signin Components
exports.default = routes;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(15);

var _alt2 = _interopRequireDefault(_alt);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _ArtistsActions = __webpack_require__(49);

var _ArtistsActions2 = _interopRequireDefault(_ArtistsActions);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ImagesActions = __webpack_require__(28);

var _ImagesActions2 = _interopRequireDefault(_ImagesActions);

var _EventActions = __webpack_require__(14);

var _EventActions2 = _interopRequireDefault(_EventActions);

var _toastr = __webpack_require__(217);

var _toastr2 = _interopRequireDefault(_toastr);

var _moment = __webpack_require__(6);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListStore = function () {
    function ListStore() {
        _classCallCheck(this, ListStore);

        this.bindActions(_ListActions2.default);
        this.bindActions(_ArtistsActions2.default);
        this.bindActions(_AuthActions2.default);
        this.bindActions(_ImagesActions2.default);
        this.bindActions(_EventActions2.default);
        //Display settings
        this.view = 'condensed';
        this.menuActive = false;
        //List states
        this.currentListings = [];
        this.currentLoaded = false;
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
        //New listing states
        this.listingEdit = {};
        this.listingEdit.artists = [];
        this.listingEdit.event = false;
        this.listingEdit.events = [];
        this.listingEdit.venue = {};
        //New event states
        this.eventEdit = {};
        this.eventEdit.venue = {};
        //New venue states
        this.venueEdit = {
            popup: false,
            coordinates: {}
        };
        // Featured listings
        this.features = [];
        this.allFeatures = [];
        //Venues
        this.allVenues = [];
        this.venue = {};
        this.venue.likeList = 0;
        this.venue.currentListings = [];
        this.venue.upcomingListings = [];
        this.venue.pastListings = [];
        //Artists
        this.allArtists = [{ name: 'The test artist' }];
        //Loadings
        this.loading = {};
        this.loading.login = false;
        this.loading.register = false;
        this.loading.updateUser = false;
        this.loading.updatelisting = false;
        this.loading.deletelisting = false;
        this.loading.updatevenue = false;
        this.loading.deletevenue = false;
        this.loading.savelisting = false;
        this.loading.savevenue = false;
        this.loading.current = false;
        this.loading.future = false;
        this.loading.events = true;
        this.loading.allVenues = false;
        this.loading.features = false;
        this.loading.glance = false;
        this.loading.certifyReset = false;
        //Error Messages
        this.error = {};
        this.error.feature = '';
        this.error.general = '';
        this.error.login = '';
        this.error.updateUser = '';
        this.error.updatelisting = {};
        this.error.updatevenue = '';
        this.error.savelisting = '';
        this.error.savevenue = '';
        this.error.reset = '';
        //Success
        this.success = {};
        this.success.updateUser = false;
        this.success.updatelisting = false;
        this.success.updateEvent = false;
        this.success.saveEvent = false;
        this.success.deleteEvent = false;
        this.success.updatevenue = false;
        this.success.deletelisting = false;
        this.success.deletevenue = false;
        this.success.savelisting = false;
        this.success.savevenue = false;
        this.success.feature = false;
        this.success.deleteUser = false;
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
        key: 'onCurrentNotLoaded',
        value: function onCurrentNotLoaded() {
            this.currentLoaded = false;
        }
    }, {
        key: 'onCurrentLoaded',
        value: function onCurrentLoaded() {
            this.currentLoaded = true;
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
        }
    }, {
        key: 'onGetAllSuccess',
        value: function onGetAllSuccess(data) {
            this.allListings = data;
        }
    }, {
        key: 'onGetEventsAttempt',
        value: function onGetEventsAttempt() {
            this.loading.events = true;
        }
    }, {
        key: 'onGetEventsSuccess',
        value: function onGetEventsSuccess(data) {
            this.eventsListings = data;
            this.loading.events = false;
        }
    }, {
        key: 'onGetGlanceAttempt',
        value: function onGetGlanceAttempt() {
            this.loading.glance = true;
        }
    }, {
        key: 'onGetGlanceSuccess',
        value: function onGetGlanceSuccess(data) {
            this.loading.glance = false;
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
            this.loading.events = false;
            // Handle multiple response formats, fallback to HTTP status code number.
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }, {
        key: 'onGetGlanceFail',
        value: function onGetGlanceFail(jqXhr) {
            this.loading.glance = false;
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
                image: '',
                venue: {},
                relatedEvents: [],
                artists: []
            };
        }

        //Load a specific listing into listing edit

    }, {
        key: 'onEditListing',
        value: function onEditListing(listing) {
            console.log('Editing a listing');
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
                _id: '',
                name: '',
                slug: '',
                address1: '',
                address2: '',
                city: '',
                zipcode: '',
                state: '',
                email: '',
                phone: '',
                coordinates: {
                    lat: '',
                    long: ''
                }
                // Reset messages
            };this.success.updatevenue = false;
            this.loading.updatevenue = false;
            this.error.updatevenue = '';
        }

        // Get listing info

    }, {
        key: 'onGetListingInfoSuccess',
        value: function onGetListingInfoSuccess(info) {
            console.log('Listing info loaded', info);
            this.listingEdit = info.data;
            if (!this.listingEdit.relatedEvents) {
                this.listingEdit.relatedEvents = [];
            }
            // Need to explain this
            if (Number.isInteger(info.i)) {
                console.log('Feature listing', this.features);
                this.features[info.i].list = info.data;
                console.log('Feature #' + info.i, this.features[info.i].list);
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
            this.eventEdit.venue = data;
            if (!data.coordinates) {
                data.coordinates = {};
            }
            this.venueEdit = data;
            //Create a slug automatically if there is none
            if (!data.slug) {
                this.venueEdit.slug = data.name.replace(/\s+/g, '-').toLowerCase();
            }
        }
    }, {
        key: 'onGetVenueFullInfoFailure',
        value: function onGetVenueFullInfoFailure(jqXhr) {}
    }, {
        key: 'onGetVenueInfoFailure',
        value: function onGetVenueInfoFailure(jqXhr) {}
        //Add a venue

    }, {
        key: 'onSaveVenueAttempt',
        value: function onSaveVenueAttempt() {
            this.loading.savevenue = true;
        }
    }, {
        key: 'onSaveVenueSuccess',
        value: function onSaveVenueSuccess(data) {
            console.log('Venue saved');
            this.venueEdit._id = data._id;
            this.loading.savevenue = false;
            this.success.savevenue = true;
            setTimeout(function () {
                this.success.savevenue = false;
            }.bind(this), 1000);
        }
    }, {
        key: 'onSaveVenueFailure',
        value: function onSaveVenueFailure(err) {
            console.log('Problem saving venue', err);
            this.loading.savevenue = false;
            this.error.saveVenue = 'Error while saving changes';
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
            console.log('Venue updated', data);
            this.venueEdit = data;
            this.loading.updatevenue = false;
            this.success.updatevenue = true;
            setTimeout(function () {
                this.success.updatevenue = false;
            }.bind(this), 1000);
        }
    }, {
        key: 'onUpdateVenueFailure',
        value: function onUpdateVenueFailure(error) {
            console.log('Problem updating venue', error);
            this.loading.updatevenue = false;
            this.error.updateVenue = 'Error. ' + error;
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
        value: function onDeleteVenueSuccess() {
            console.log('Deleted');
            this.loading.deletevenue = false;
            this.success.deletevenue = true;
            setTimeout(function () {
                this.success.deletevenue = false;
            }.bind(this), 1000);
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
            this.listingEdit.venue = {};
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
            this.loading.savelisting = false;
            this.success.savelisting = true;
            this.listingEdit._id = data._id;
            var that = this;
            setTimeout(function () {
                that.success.savelisting = false;
            }.bind(this), 1000);
        }
    }, {
        key: 'onSaveListingFailure',
        value: function onSaveListingFailure(err) {
            console.log('Error ', err);
            this.loading.savelisting = false;
            this.error.savelisting = 'Error ' + err;
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
            this.error.updatelisting = 'Error: ' + err;
            console.log('Error: ', err);
        }

        //Update a listing

    }, {
        key: 'onDeleteListingSuccess',
        value: function onDeleteListingSuccess() {
            console.log('Deleted');
            //Reset the listing data
            this.success.deletelisting = true;
            //Reset the listing
            this.listingEdit = {
                venue: {},
                relatedEvents: [],
                artists: []
                //Close the sidebar
            };this.sidebarOpen = false;
            //Reset the success status
            var that = this;
            setTimeout(function () {
                that.success.deletelisting = false;
            }, 1000);
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
                if (name === 'artists') {
                    var splitArtists = new Array();
                    value.map(function (artist) {
                        var split = artist.name.split(',');
                        if (split.length > 1) {
                            split.map(function (newArtist) {

                                splitArtists.push({ name: $.trim(newArtist) });
                            });
                        } else {
                            splitArtists.push(artist);
                        }
                    });
                    this.listingEdit[name] = splitArtists;
                } else {
                    this.listingEdit[name] = value;
                }
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
        //Duplicate the current venue

    }, {
        key: 'onVenueDuplicate',
        value: function onVenueDuplicate() {
            this.venueEdit._id = '';
        }
        //Duplicate the current event

    }, {
        key: 'onEventDuplicate',
        value: function onEventDuplicate() {
            this.eventEdit._id = '';
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
        key: 'onUpdateFeatureSuccess',
        value: function onUpdateFeatureSuccess(data) {
            this.success.updateFeature = true;
            var that = this;
            setTimeout(function () {
                that.success.updateFeature = false;
            }, 1000);
        }
    }, {
        key: 'onUpdateFeatureFailure',
        value: function onUpdateFeatureFailure(error) {
            this.error.feature = 'Error updating the feature: ' + error;
            console.log(error);
        }
    }, {
        key: 'onFeatureReset',
        value: function onFeatureReset(day) {
            if (Number.isInteger(day)) {
                this.features[day] = {
                    text: '',
                    list: {},
                    venue: {}
                };
            }
            this.success.feature = false;
        }
    }, {
        key: 'onFeatureLoadAttempt',
        value: function onFeatureLoadAttempt() {
            this.loading.features = true;
        }
    }, {
        key: 'onFeatureLoadSuccess',
        value: function onFeatureLoadSuccess(data) {
            this.loading.features = false;
            var today = (0, _moment2.default)();
            if (data.json) {
                // Match all features with a day of the next week
                var features = [];
                this.allFeatures = data.json;

                //Find element in features whose date == d
                //For each day of the week
                for (var i = 0; i < data.days; i++) {
                    var tempFeature = null;
                    // Go through all the features
                    this.allFeatures.map(function (feature) {
                        // Check if it matches
                        var d = (0, _moment2.default)().add(i, 'days');
                        if ((0, _moment2.default)(feature.date).isSame(d, 'day')) {
                            tempFeature = feature;
                        }
                    });
                    if (tempFeature) {
                        features.push(tempFeature);
                        tempFeature = null;
                    } else {
                        for (var y = 0; y < this.allFeatures.length; y++) {
                            var feature = this.allFeatures[y];
                            // Find current feature
                            if (!features.includes(feature) && feature.list) {
                                if ((0, _moment2.default)(feature.list.end).isSameOrAfter(today)) {
                                    features.push(feature);
                                    break;
                                }
                            }
                        }
                    }
                }
                this.features = features;
            } else {
                this.error.feature = "No Features";
            }
        }
    }, {
        key: 'onFeatureLoadFailure',
        value: function onFeatureLoadFailure(error) {
            this.loading.features = false;
            console.log("Feature load error: ", error);
            this.features = [];
        }
    }, {
        key: 'onFeatureEdit',
        value: function onFeatureEdit(featureEdit) {
            this.feature = featureEdit;
        }
    }, {
        key: 'onFeatureAdminAttempt',
        value: function onFeatureAdminAttempt() {
            this.loading.features = true;
        }
    }, {
        key: 'onFeatureAdminFailure',
        value: function onFeatureAdminFailure(error) {
            this.loading.features = false;
            this.features = [];
        }
    }, {
        key: 'onFeatureAdminSuccess',
        value: function onFeatureAdminSuccess(data) {
            this.loading.features = false;
            if (data.json) {
                // Match all features with a day of the next week
                var features = [];
                this.allFeatures = data.json;

                //Find element in features whose date == d
                //For each day of the week
                for (var i = 0; i < data.days; i++) {
                    var tempFeature = null;
                    // Go through all the features
                    this.allFeatures.map(function (feature) {
                        // Check if it matches
                        var d = (0, _moment2.default)().add(i, 'days');
                        if ((0, _moment2.default)(feature.date).isSame(d, 'day')) {
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
                this.features = features;
                console.log('Loaded all features: ', this.features);
            } else {
                this.error.feature = "No Features";
            }
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
            this.loading.updateUser = true;
            this.success.updateUser = false;
            this.error.updateUser = '';
        }
    }, {
        key: 'onUpdateUserSuccess',
        value: function onUpdateUserSuccess(data) {
            console.log('Success!');
            this.loading.updateUser = false;
            this.success.updateUser = true;
            setTimeout(function () {
                this.success.updateUser = false;
            }.bind(this), 1000);
        }
    }, {
        key: 'onUpdateUserFailure',
        value: function onUpdateUserFailure(error) {
            console.log('Failed Updating User', error);
            this.loading.updateUser = false;
            this.error.updateUser = 'Error Saving';
        }

        //DELETE USER

    }, {
        key: 'onDeleteUserAttempt',
        value: function onDeleteUserAttempt() {
            this.success.deleteUser = false;
            this.error.updateUser = '';
        }
    }, {
        key: 'onDeleteUserSuccess',
        value: function onDeleteUserSuccess(info) {
            console.log(info.data.slug);
            //Find user in current list of all users and delete it there for visualization
            this.allUsers = this.allUsers && this.allUsers.filter(function (user) {
                return user.slug !== info.data.slug;
            });
            //Display Success
            this.success.deleteUser = true;
            setTimeout(function () {
                this.success.deleteUser = false;
            }.bind(this), 1000);
        }
    }, {
        key: 'onDeleteUserFailure',
        value: function onDeleteUserFailure(error) {
            console.log('Failed Deleting User', error);
            this.error.deleteUser = 'Error Saving';
        }

        //RESET THE PASSWORD

    }, {
        key: 'onForgotPasswordAttempt',
        value: function onForgotPasswordAttempt() {
            this.loading.forgot = true;
            this.success.forgot = '';
            this.error.forgot = '';
        }
    }, {
        key: 'onForgotPasswordSuccess',
        value: function onForgotPasswordSuccess() {
            this.loading.forgot = false;
            this.success.forgot = 'An email was sent to your inbox';
            console.log('Email sent!');
        }
    }, {
        key: 'onForgotPasswordFailure',
        value: function onForgotPasswordFailure() {
            this.error.forgot = "This email doesn't match any account";
            this.loading.forgot = false;
        }
    }, {
        key: 'onCertifyPasswordAttempt',
        value: function onCertifyPasswordAttempt() {
            console.log('Trying to certify token');
            this.error.reset = '';
            this.resetUser = null;
            this.loading.certifyReset = true;
        }
    }, {
        key: 'onCertifyPasswordSuccess',
        value: function onCertifyPasswordSuccess(user) {
            console.log('Success');
            this.resetUser = user;
            this.loading.certifyReset = false;
        }
    }, {
        key: 'onCertifyPasswordFailure',
        value: function onCertifyPasswordFailure() {
            console.log('Failure');
            this.error.resetUser = 'The reset link expired. Please try again.';
            this.resetUser = null;
            this.loading.certifyReset = false;
        }
    }, {
        key: 'onResetPasswordAttempt',
        value: function onResetPasswordAttempt() {
            this.loading.reset = true;
            this.error.reset = '';
            this.success.reset = '';
        }
    }, {
        key: 'onResetPasswordSuccess',
        value: function onResetPasswordSuccess() {
            this.loading.reset = false;
            this.success.reset = 'Password was successfully changed! <a href="/login">Login</a>';
        }
    }, {
        key: 'onResetPasswordFailure',
        value: function onResetPasswordFailure() {
            this.loading.reset = false;
            this.error.reset = 'There was a problem changing the password.';
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
            console.log('Added to the list', data);
            if (data) {
                this.user.mylist = data;
                console.log(this.user);
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
            console.log('onGetUserMylistSuccess', data);
            this.currentUser = data;
        }
    }, {
        key: 'onGetUserMylistFailure',
        value: function onGetUserMylistFailure(error) {
            console.log('onGetUserMylistFailure', error);
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
            console.log('Uploaded!', data);
            this.listingEdit.image = data.image.public_id;
            if (Number.isInteger(data.i)) {
                this.features[data.i].list.image = data.image.public_id;
                console.log(this.features[data.i].list);
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
            this.listingEdit.relatedEvents.push({
                name: "",
                description: "",
                type: "",
                date: ""
            });
        }
    }, {
        key: 'onRemoveEvent',
        value: function onRemoveEvent(index) {
            this.listingEdit.relatedEvents.splice(index, 1);
        }
    }, {
        key: 'onEventsInfoChange',
        value: function onEventsInfoChange(event) {
            if (event.target) {
                var type = event.target.name;
                var index = event.target.dataset.index;
                this.listingEdit.relatedEvents[index][type] = event.target.value;
                //Make sure events have a type
                if (this.listingEdit.relatedEvents[index].type === "") {
                    this.listingEdit.relatedEvents[index].type = "reception";
                }
            } else if (event.date) {
                this.listingEdit.relatedEvents[event.index].date = event.date;
                //Make sure events have a type
                if (this.listingEdit.relatedEvents[event.index].type === "") {
                    this.listingEdit.relatedEvents[event.index].type = "reception";
                }
            }
        }

        //ACTUAL EVENTS

        //Update info on event form

    }, {
        key: 'onEventInfoChange',
        value: function onEventInfoChange(info) {
            if (info.target) {
                var value = info.target.value;
                var name = info.target.name;
                this.eventEdit[name] = value;
            } else if (info.date) {
                this.eventEdit.date = info.date;
            }
        }
    }, {
        key: 'onSaveEventSuccess',
        value: function onSaveEventSuccess(data) {
            this.eventEdit._id = data._id;
            this.success.saveEvent = true;
            var that = this;
            setTimeout(function () {
                that.success.saveEvent = false;
            }, 1000);
        }
    }, {
        key: 'onSaveEventFailure',
        value: function onSaveEventFailure(error) {
            console.log('error: ' + error);
            this.error.saveEvent = 'Error. ' + error;
        }
    }, {
        key: 'onGetEventInfoSuccess',
        value: function onGetEventInfoSuccess(data) {
            if (data) {
                this.eventEdit = data;
            }
        }
        //Update an event

    }, {
        key: 'onUpdateEventAttempt',
        value: function onUpdateEventAttempt() {
            this.loading.updateEvent = true;
        }
    }, {
        key: 'onUpdateEventSuccess',
        value: function onUpdateEventSuccess(data) {
            this.loading.updateEvent = false;
            this.success.updateEvent = true;
            this.sidebarOpen = false;
            var that = this;
            setTimeout(function () {
                that.success.updateEvent = false;
            }, 1000);
        }
    }, {
        key: 'onUpdateEventFailure',
        value: function onUpdateEventFailure(err) {
            this.loading.updateEvent = false;
            this.error.updateEvent = 'Error while saving changes';
            console.log('Error: ', err);
        }
        //Delete Event

    }, {
        key: 'onDeleteEventSuccess',
        value: function onDeleteEventSuccess() {
            //Reset the listing data
            this.success.deleteEvent = true;
            //Reset the listing
            this.deleteEvent = {
                venue: {},
                events: [],
                artists: []
                //Close the sidebar
            };this.sidebarOpen = false;
            //Reset the success status
            var that = this;
            setTimeout(function () {
                that.success.deleteEvent = false;
            }, 1000);
        }
    }, {
        key: 'onDeleteEventFailure',
        value: function onDeleteEventFailure(err) {
            console.log('Error: ', err);
            this.error.deleteEvent = 'Error deleting event';
        }
    }, {
        key: 'onEventEditReset',
        value: function onEventEditReset() {
            this.eventEdit = {
                venue: {},
                list: null,
                artists: null
            };
            console.log(this.eventEdit);
        }
        //Load a specific event into listing edit

    }, {
        key: 'onEditEvent',
        value: function onEditEvent(event) {
            console.log('Editing an event');
            this.eventEdit = event;
        }

        //Sidebar

    }, {
        key: 'onToggleSideBar',
        value: function onToggleSideBar() {
            this.sidebarOpen = !this.sidebarOpen;
            if (!this.sidebarOpen) {
                this.eventEdit = {
                    venue: {},
                    list: null,
                    artists: null
                };
                this.listingEdit = {
                    events: [],
                    venue: {},
                    end: null,
                    start: null
                };
            }
        }

        //Menu

    }, {
        key: 'onToggleMenu',
        value: function onToggleMenu() {
            this.menuActive = !this.menuActive;
        }

        // ARTISTS

    }, {
        key: 'onGetAllArtistsSuggestionsAttempt',
        value: function onGetAllArtistsSuggestionsAttempt() {
            console.log('Attempting to retrieve all artists');
        }
    }, {
        key: 'onGetAllArtistsSuggestionsSuccess',
        value: function onGetAllArtistsSuggestionsSuccess(data) {
            this.allArtists = data;
        }
    }, {
        key: 'onGetAllArtistsSuggestionsFailure',
        value: function onGetAllArtistsSuggestionsFailure() {
            console.log('Error retrieving all artists');
        }
    }]);

    return ListStore;
}();

exports.default = _alt2.default.createStore(ListStore);

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(187)(false);
// imports


// module
exports.push([module.i, ".draftJsToolbar__buttonWrapper__1Dmqh {\n  display: inline-block;\n}\n\n.draftJsToolbar__button__qi1gf {\n  background: #fbfbfb;\n  color: #888;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n}\n\n.draftJsToolbar__button__qi1gf svg {\n  fill: #888;\n}\n\n.draftJsToolbar__button__qi1gf:hover, .draftJsToolbar__button__qi1gf:focus {\n  background: #f3f3f3;\n  outline: 0; /* reset for :focus */\n}\n\n.draftJsToolbar__active__3qcpF {\n  background: #efefef;\n  color: #444;\n}\n\n.draftJsToolbar__active__3qcpF svg {\n  fill: #444;\n}\n.draftJsToolbar__separator__3U7qt {\n  display: inline-block;\n  border-right: 1px solid #ddd;\n  height: 24px;\n  margin: 0 0.5em;\n}\n.draftJsToolbar__toolbar__dNtBH {\n  left: 50%;\n  -webkit-transform: translate(-50%) scale(0);\n          transform: translate(-50%) scale(0);\n  position: absolute;\n  border: 1px solid #ddd;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(220,220,220,1);\n  z-index: 2;\n  box-sizing: border-box;\n}\n\n.draftJsToolbar__toolbar__dNtBH:after, .draftJsToolbar__toolbar__dNtBH:before {\n  top: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.draftJsToolbar__toolbar__dNtBH:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-top-color: #fff;\n  border-width: 4px;\n  margin-left: -4px;\n}\n.draftJsToolbar__toolbar__dNtBH:before {\n  border-color: rgba(221, 221, 221, 0);\n  border-top-color: #ddd;\n  border-width: 6px;\n  margin-left: -6px;\n}\n", ""]);

// exports


/***/ }),
/* 187 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(186);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(189)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./plugin.css", function() {
			var newContent = require("!!../../css-loader/index.js!./plugin.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(190);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 190 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = require("alt");

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = require("d3-request");

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = require("deck.gl");

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = require("draft-js-inline-toolbar-plugin");

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = require("mapbox");

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = require("rbush");

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = require("react-autosuggest");

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = require("react-offcanvas");

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-to-component");

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = require("react-tagsinput");

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = require("toastr");

/***/ })
/******/ ]);
//# sourceMappingURL=server.bundle.js.map