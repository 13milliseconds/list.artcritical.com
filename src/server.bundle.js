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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
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

var _alt = __webpack_require__(10);

var _alt2 = _interopRequireDefault(_alt);

var _bluebird = __webpack_require__(15);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var offset = 0;

var ListActions = function () {
    function ListActions() {
        _classCallCheck(this, ListActions);

        this.generateActions('getCurrentAttempt', 'getCurrentSuccess', 'getCurrentFail', 'getFutureAttempt', 'getFutureSuccess', 'getFutureFail', 'getAllSuccess', 'getAllFail', 'getEventsSuccess', 'getEventsFail', 'getGlanceSuccess', 'getGlanceFail', 'getListingInfoSuccess', 'getListingInfoFailure', 'getVenueInfoSuccess', 'getVenueInfoFailure', 'getVenueFullInfoSuccess', 'getVenueFullInfoFailure', 'saveListingSuccess', 'saveListingFailure', 'saveListingAttempt', 'saveVenueSuccess', 'saveVenueFailure', 'saveVenueAttempt', 'updateListingSuccess', 'updateListingFailure', 'updateListingAttempt', 'updateVenueAttempt', 'updateVenueSuccess', 'updateVenueFailure', 'updateFeatureSuccess', 'updateFeatureFailure', 'featureLoadSuccess', 'featureLoadFailure', 'deleteListingSuccess', 'deleteListingFailure', 'deleteVenueSuccess', 'deleteVenueFailure', 'getVenueListingsSuccess', 'getVenueListingsFailure', 'getVenuesAdminSuccess', 'getVenuesAdminFailure', 'getVenuesAdminAttempt', 'getCoordFailure', 'getCoordSuccess');
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
            var _this6 = this;

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
                _this6.saveListingSuccess(json);
                _this6.listingEditReset();
                return true;
            }).catch(function (error) {
                _this6.saveListingFailure(error);
            });
        }
    }, {
        key: 'deleteListing',
        value: async function deleteListing(oldListing) {
            var _this7 = this;

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
                _this7.deleteListingSuccess(json);
                _this7.listingEditReset();
                return true;
            }).catch(function (error) {
                _this7.deleteListingFailure(error);
            });
        }
    }, {
        key: 'updateListing',
        value: async function updateListing(newInfo) {
            var _this8 = this;

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
                _this8.updateListingSuccess(json);
                _this8.listingEditReset();
                return true;
            }).catch(function (error) {
                _this8.updateListingFailure(error);
            });
        }
    }, {
        key: 'getListingInfo',
        value: function getListingInfo(id, i) {
            var _this9 = this;

            console.log('Getting the info');
            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: process.env.BASE_URI + '/list/getinfo/' + id
                }).done(function (data) {
                    _this9.getListingInfoSuccess({ data: data, i: i });
                }).fail(function (jqXhr) {
                    _this9.getListingInfoFailure(jqXhr);
                });
            };
        }

        // Update or save a featured article

    }, {
        key: 'updateFeature',
        value: async function updateFeature(data) {
            var _this10 = this;

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
                console.log(json);
                _this10.updateFeatureSuccess(json);
                return true;
            }).catch(function (error) {
                _this10.updateFeatureFailure(error);
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
            var _this11 = this;

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
                _this11.featureLoadSuccess({ json: json, days: days });
                return true;
            }).catch(function (error) {
                _this11.featureLoadFailure(error);
            });
        }
    }, {
        key: 'getVenueInfo',
        value: async function getVenueInfo(id) {
            var _this12 = this;

            await fetch(process.env.BASE_URI + '/venues/getinfo/' + id, {
                method: 'GET',
                credentials: 'same-origin'
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this12.getVenueInfoSuccess(json);
                return true;
            }).catch(function (error) {
                _this12.getVenueInfoFailure(error);
            });
        }
    }, {
        key: 'getVenueFullInfo',
        value: async function getVenueFullInfo(id) {
            var _this13 = this;

            await fetch(process.env.BASE_URI + '/venues/getfullinfo/' + id, {
                method: 'GET',
                credentials: 'same-origin'
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                console.log(json);
                _this13.getVenueFullInfoSuccess(json);
                return true;
            }).catch(function (error) {
                _this13.getVenueFullInfoFailure(error);
            });
        }
    }, {
        key: 'getVenueListings',
        value: async function getVenueListings(id) {
            var _this14 = this;

            await fetch(process.env.BASE_URI + '/venues/getlistings/' + id, {
                method: 'GET',
                credentials: 'same-origin'
            }).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this14.getVenueListingsSuccess(json);
                return true;
            }).catch(function (error) {
                _this14.getVenueListingsFailure(error);
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
            var _this15 = this;

            this.getVenuesAdminAttempt();
            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: process.env.BASE_URI + '/venues/getadmin/' + neighborhood
                }).done(function (data) {
                    _this15.getVenuesAdminSuccess(data);
                }).fail(function (jqXhr) {
                    _this15.getVenuesAdminFailure(jqXhr);
                });
            };
        }
    }, {
        key: 'updateVenue',
        value: async function updateVenue(info) {
            var _this16 = this;

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
                _this16.updateVenueSuccess(json);
                _this16.venueEditReset();
                return true;
            }).catch(function (error) {
                _this16.updateVenueFailure(error);
            });
        }
    }, {
        key: 'saveVenue',
        value: async function saveVenue(newVenue) {
            var _this17 = this;

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
                _this17.venueEditReset();
                _this17.saveVenueSuccess(json);
                return true;
            }).catch(function (error) {
                _this17.saveVenueFailure(error);
            });
        }
    }, {
        key: 'deleteVenue',
        value: async function deleteVenue(oldVenue) {
            var _this18 = this;

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
                _this18.deleteVenueSuccess(json);
                return true;
            }).catch(function (error) {
                _this18.deleteVenueFailure(error);
            });
        }
    }, {
        key: 'adminReset',
        value: function adminReset() {
            return;
        }
    }]);

    return ListActions;
}();

exports.default = _alt2.default.createActions(ListActions);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(10);

var _alt2 = _interopRequireDefault(_alt);

__webpack_require__(24);

var _bluebird = __webpack_require__(15);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthActions = function () {
  function AuthActions() {
    _classCallCheck(this, AuthActions);

    this.generateActions('sessionCheckFailure', 'sessionCheckSuccess', 'addToMyListSuccess', 'addToMyListFailure', 'loginAttempt', 'loginFailure', 'loginSuccess', 'logoutSuccess', 'logoutFailure', 'registerAttempt', 'registerSuccess', 'registerFailure', 'updateUserSuccess', 'updateUserFailure', 'updateUserAttempt', 'getMylistSuccess', 'getMylistFailure', 'reorderMyListSuccess', 'reorderMyListFailure');
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
        }
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
    key: 'checkSession',
    value: async function checkSession() {
      var _this5 = this;

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
          _this5.sessionCheckSuccess(json);
          return true;
        }
        _this5.sessionCheckFailure(json.error);
        return true;
      }).catch(function (error) {
        _this5.sessionCheckFailure(error);
        return true;
      });
    }
  }, {
    key: 'addToUserList',
    value: async function addToUserList(listing) {
      var _this6 = this;

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
        _this6.addToMyListSuccess(json);
        return true;
      }).catch(function (error) {
        _this6.addToMyListFailure(error);
        return true;
      });
    }
  }, {
    key: 'reorderMyList',
    value: async function reorderMyList(newList) {
      var _this7 = this;

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
        _this7.reorderMyListSuccess(json);
        return true;
      }).catch(function (error) {
        _this7.reorderMyListFailure(error);
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
      var _this8 = this;

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
        _this8.updateUserSuccess(json);
        return true;
      }).catch(function (error) {
        _this8.updateUserFailure(error);
        return true;
      });
    }

    // When a user type new info in the account page

  }, {
    key: 'userInfoChange',
    value: function userInfoChange(event) {
      return event;
    }
  }]);

  return AuthActions;
}();

exports.default = _alt2.default.createActions(AuthActions);

/***/ }),
/* 4 */
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

var _DateBlock = __webpack_require__(11);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var Listing = function (_React$Component) {
    _inherits(Listing, _React$Component);

    function Listing(props) {
        _classCallCheck(this, Listing);

        // Function binding
        var _this = _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this, props));

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

                if (thislisting.hasClass('selected')) {

                    //Close the currently open tab
                    $(thislisting).removeClass('selected');
                } else {

                    //Open this listing
                    $(thislisting).addClass('selected');
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            //Display date according to type of listing and view
            var dateDisplay;
            var address = _react2.default.createElement(
                'span',
                null,
                this.props.venue.address,
                this.props.venue.address !== '' && this.props.venue.city !== '' && ', ',
                this.props.venue.city
            );

            if (this.props.event == true) {
                dateDisplay = _react2.default.createElement(
                    'p',
                    null,
                    this.props.start && _react2.default.createElement(_DateBlock2.default, { date: this.props.start }),
                    ' - ',
                    address
                );
            } else {
                if (this.props.dateView == "current") {
                    dateDisplay = _react2.default.createElement(
                        'p',
                        null,
                        'Until ',
                        _react2.default.createElement(_DateBlock2.default, { date: this.props.end }),
                        ' - ',
                        address
                    );
                } else {
                    dateDisplay = _react2.default.createElement(
                        'p',
                        null,
                        this.props.start && _react2.default.createElement(_DateBlock2.default, { date: this.props.start }),
                        this.props.end && _react2.default.createElement(
                            'span',
                            null,
                            ' to ',
                            _react2.default.createElement(_DateBlock2.default, { date: this.props.end })
                        ),
                        ' - ',
                        address
                    );
                }
            }

            var id = this.props._id;
            // Check if the listing is in mylist
            var mylistIndex = 0;
            if (this.props.user.mylist) {
                mylistIndex = this.props.user.mylist.filter(function (v) {
                    return v._id === id;
                }).length;
            }

            var image = this.props.image ? "https://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg" : 'https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg';
            var style = { backgroundImage: 'url(' + image + ')' };

            return _react2.default.createElement(
                'div',
                { className: mylistIndex > 0 ? 'listing selected' : 'listing notselected', id: this.props._id },
                _react2.default.createElement(
                    'div',
                    { className: 'listingAdd' },
                    _react2.default.createElement(
                        'div',
                        { className: this.props.user._id ? "addButton active" : "addButton", onClick: function onClick(e) {
                                return _this2.addToList(e, _this2.props);
                            }, style: style },
                        this.props.user._id && _react2.default.createElement('i', { className: mylistIndex > 0 ? 'fa fa-minus' : 'fa fa-plus', 'aria-hidden': 'true' })
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
                            this.props.name,
                            this.props.venue._id !== '' && ' at ',
                            _react2.default.createElement(
                                'a',
                                { className: 'venueName', href: "/venue/" + this.props.venue.slug },
                                this.props.venue.name
                            )
                        ),
                        dateDisplay
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'moreInfo' },
                        _react2.default.createElement(
                            'p',
                            null,
                            this.props.description
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            this.props.receptionnotes
                        )
                    )
                ),
                this.props.description || this.props.receptionnotes ? _react2.default.createElement(
                    'div',
                    { className: 'listingClose' },
                    _react2.default.createElement('i', { className: 'fa fa-plus-square-o', 'aria-hidden': 'true' }),
                    _react2.default.createElement('i', { className: 'fa fa-minus-square-o', 'aria-hidden': 'true' })
                ) : _react2.default.createElement('div', { className: 'listingClose' })
            );
        }
    }]);

    return Listing;
}(_react2.default.Component);

exports.default = Listing;

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = __webpack_require__(51);

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(9);

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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-toggle-button");

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

var _reactSelect = __webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateSingle = function (_React$Component) {
    _inherits(DateSingle, _React$Component);

    function DateSingle(props) {
        _classCallCheck(this, DateSingle);

        return _possibleConstructorReturn(this, (DateSingle.__proto__ || Object.getPrototypeOf(DateSingle)).call(this, props));
    }

    _createClass(DateSingle, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_reactSelect.Async, {
                name: 'venue',
                value: this.props.value,
                loadOptions: this.props.getOptions,
                onChange: this.props.handleSelectChange
            });
        }
    }]);

    return DateSingle;
}(_react2.default.Component);

exports.default = DateSingle;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(10);

var _alt2 = _interopRequireDefault(_alt);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ImagesActions = __webpack_require__(17);

var _ImagesActions2 = _interopRequireDefault(_ImagesActions);

var _toastr = __webpack_require__(61);

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
        this.listingEdit = {}, this.listingEdit.image = '';
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
            console.log('Got some info', info);
            console.log('A Day Number', info.i);
            this.listingEdit = info.data;
            if (info.i) {
                this.features[info.i].list = info.data;
                console.log(info.data);
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
        key: 'onDeleteVenueSuccess',
        value: function onDeleteVenueSuccess(data) {
            console.log('Deleted');
        }
    }, {
        key: 'onDeleteVenueFailure',
        value: function onDeleteVenueFailure(err) {
            console.log('Error: ', err);
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
        }
    }, {
        key: 'onDeleteListingFailure',
        value: function onDeleteListingFailure(err) {
            console.log('Error: ', err);
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
        value: function onupdateFeatureSuccess(data) {
            console.log(data);
        }
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
            this.isLoggingIn = true;
            this.loginRedirect = false;
        }
    }, {
        key: 'onLoginFailure',
        value: function onLoginFailure(error) {
            console.log('Login error: ', error);
            this.user.name = '';
            this.user.id = '';
            this.user.isLoggedIn = false;
            this.user.isLoggingIn = false;
            this.user.email = '';
        }
    }, {
        key: 'onLoginSuccess',
        value: function onLoginSuccess(action) {
            this.user = action;
            this.user.isLoggedIn = true;
            this.user.isLoggingIn = false;
        }

        // REGISTER ATTEMPT

    }, {
        key: 'onRegisterAttempt',
        value: function onRegisterAttempt() {
            this.isRegistering = true;
        }
    }, {
        key: 'onRegisterFailure',
        value: function onRegisterFailure(error) {
            console.log(error);
            this.user.name = '';
            this.user.id = '';
            this.user.email = '';
            this.isRegistering = false;
        }
    }, {
        key: 'onRegisterSuccess',
        value: function onRegisterSuccess(action) {
            this.user.name = action.local.name;
            this.user.id = action._id;
            this.user.email = action.local.username;
            this.user.avatar = action.avatar;
            this.isRegistering = false;
            this.user.isLoggedIn = true;
        }

        //Facebook Login

    }, {
        key: 'onFacebookLogin',
        value: function onFacebookLogin(user) {
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
            console.log('Success!');
            this.loading.updateuser = false;
            this.success.updateuser = 'Saved!';
        }
    }, {
        key: 'onUpdateUserFailure',
        value: function onUpdateUserFailure(error) {
            console.log('Error!');
            this.loading.updateuser = false;
            this.error.updateuser = 'Error Saving';
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
            this.user.name = '';
            this.user.id = '';
            this.user.isLoggedIn = false;
            this.user.isLoggingIn = false;
            this.user.email = '';
            this.user.mylist = [];
        }

        // CHECK SESSION

    }, {
        key: 'onSessionCheckFailure',
        value: function onSessionCheckFailure() {
            this.user.name = '';
            this.user.id = '';
            this.user.isLoggedIn = false;
            this.user.isLoggingIn = false;
            this.user.email = '';
        }
    }, {
        key: 'onSessionCheckSuccess',
        value: function onSessionCheckSuccess(action) {
            this.user = action;
            this.user.isLoggedIn = true;
            this.user.isLoggingIn = false;
        }

        // ADD TO MYLIST

    }, {
        key: 'onAddToMyListSuccess',
        value: function onAddToMyListSuccess(response) {
            this.user.mylist = response;
        }
    }, {
        key: 'onAddToMyListFailure',
        value: function onAddToMyListFailure(error) {
            console.log(error);
        }

        // GET MYLIST

    }, {
        key: 'onGetMylistSuccess',
        value: function onGetMylistSuccess(data) {
            this.user.mylist = data;
        }
    }, {
        key: 'onGetMylistFailure',
        value: function onGetMylistFailure(jqXhr) {
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
            console.log(data);
        }
    }, {
        key: 'onReorderMyListFailure',
        value: function onReorderMyListFailure() {
            console.log('problem!');
        }

        // INFO CHANGE ON ACCOUNT PAGE

    }, {
        key: 'onUserInfoChange',
        value: function onUserInfoChange(event) {
            var target = event.target;
            var value = target.value;
            var name = target.name;
            this.user[name] = value;
        }

        // UPLOAD AN AVATAR

    }, {
        key: 'onImageUploadSuccess',
        value: function onImageUploadSuccess(image) {
            this.isUploaded = true;
            this.user.avatar = image.public_id;
        }
    }, {
        key: 'onImageUploadFailure',
        value: function onImageUploadFailure(err) {
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
    }]);

    return ListStore;
}();

exports.default = _alt2.default.createStore(ListStore);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(10);

var _alt2 = _interopRequireDefault(_alt);

__webpack_require__(24);

var _superagent = __webpack_require__(60);

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
/* 18 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(20);

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
/* 20 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _validator = __webpack_require__(30);

var _validator2 = _interopRequireDefault(_validator);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _reactstrap = __webpack_require__(31);

var _FacebookButton = __webpack_require__(78);

var _FacebookButton2 = _interopRequireDefault(_FacebookButton);

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
                null,
                _react2.default.createElement(
                    _reactstrap.Form,
                    { onSubmit: this.handleSubmit },
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Email'
                        ),
                        _react2.default.createElement(_reactstrap.Input, {
                            name: 'username',
                            placeholder: 'Email',
                            type: 'text',
                            value: this.state.username,
                            onChange: this.handleChange
                        }),
                        _react2.default.createElement(
                            'div',
                            { className: 'alert alert-danger' },
                            this.state.errorMessage.email
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(
                            _reactstrap.Label,
                            null,
                            'Password'
                        ),
                        _react2.default.createElement(_reactstrap.Input, {
                            name: 'password',
                            placeholder: 'Password',
                            type: 'password',
                            value: this.state.password,
                            onChange: this.handleChange
                        }),
                        this.state.errorMessage.password
                    ),
                    _react2.default.createElement(
                        _reactstrap.Button,
                        null,
                        'Log In'
                    ),
                    this.props.loading && _react2.default.createElement(
                        'div',
                        { className: 'loading' },
                        'Loading'
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
/* 23 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(8);
var bcrypt = __webpack_require__(23); // encripts password

// Create the Listings table ==================================

var userSchema = mongoose.Schema({
    name: String,
    local: {
        username: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        username: String
    },
    avatar: String,
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(8);

// Create the Listings table ==================================

var venueSchema = mongoose.Schema({
    name: String,
    slug: String,
    website: String,
    address: String,
    city: String,
    state: String,
    zipcode: Number,
    neighborhood: Number,
    coordinates: {
        lat: Number,
        long: Number
    }
});

//compile the model
module.exports = mongoose.model('Venue', venueSchema);

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

var _reactIntl = __webpack_require__(9);

var _imageBlock = __webpack_require__(67);

var _imageBlock2 = _interopRequireDefault(_imageBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var FeatureBlock = function (_React$Component) {
    _inherits(FeatureBlock, _React$Component);

    function FeatureBlock() {
        _classCallCheck(this, FeatureBlock);

        return _possibleConstructorReturn(this, (FeatureBlock.__proto__ || Object.getPrototypeOf(FeatureBlock)).apply(this, arguments));
    }

    _createClass(FeatureBlock, [{
        key: 'render',
        value: function render() {
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
                    'h2',
                    null,
                    'Featured item'
                ),
                listing.image ? _react2.default.createElement(_imageBlock2.default, { image: listing.image, classes: 'feature' }) : '',
                _react2.default.createElement(
                    'h3',
                    null,
                    listing.name,
                    ' at ',
                    venue.name
                ),
                start,
                end ? ' to ' : '',
                end,
                _react2.default.createElement(
                    'p',
                    null,
                    feature.text
                )
            );
        }
    }]);

    return FeatureBlock;
}(_react2.default.Component);

exports.default = FeatureBlock;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _googleMapReact = __webpack_require__(70);

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _singleMarker = __webpack_require__(71);

var _singleMarker2 = _interopRequireDefault(_singleMarker);

var _reactMapGl = __webpack_require__(21);

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
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-reorder");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactToggleButton = __webpack_require__(12);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactRouter = __webpack_require__(2);

var _formDateRange = __webpack_require__(88);

var _formDateRange2 = _interopRequireDefault(_formDateRange);

var _formDateSingle = __webpack_require__(89);

var _formDateSingle2 = _interopRequireDefault(_formDateSingle);

var _formSelect = __webpack_require__(13);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _ThumbnailInput = __webpack_require__(35);

var _ThumbnailInput2 = _interopRequireDefault(_ThumbnailInput);

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
            event: _this.props.event
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        return _this;
    }

    _createClass(ListingForm, [{
        key: 'handleChange',
        value: function handleChange(event) {
            //Update values of inputs
            _ListActions2.default.listingInfoChange(event);
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
                    _reactRouter.browserHistory.push('/account/editvenue');
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

            var venueData = { value: this.props.venue._id, label: this.props.venue.name };

            var deleteButton = this.props.handleDelete ? _react2.default.createElement(
                'button',
                { className: 'delete', onClick: this.props.handleDelete },
                'Delete'
            ) : null;

            return _react2.default.createElement(
                'div',
                { id: 'listingForm' },
                _react2.default.createElement(
                    'label',
                    null,
                    'Name'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'formSection' },
                    _react2.default.createElement('input', { name: 'name', placeholder: 'Event name', type: 'text', value: this.props.name, onChange: this.handleChange })
                ),
                _react2.default.createElement(
                    'label',
                    null,
                    'Venue'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'formSection' },
                    _react2.default.createElement(_formSelect2.default, { value: venueData, handleSelectChange: this.handleSelectChange, getOptions: getOptions })
                ),
                _react2.default.createElement(
                    'label',
                    null,
                    'Event'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'formSection' },
                    _react2.default.createElement(_reactToggleButton2.default, {
                        value: this.props.event,
                        onToggle: function onToggle(value) {
                            _this2.handleChange({ 'event': value });
                        } })
                ),
                _react2.default.createElement(
                    'label',
                    null,
                    ' Dates '
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'formSection' },
                    this.props.event ? //If an event
                    _react2.default.createElement(_formDateSingle2.default, { startDate: this.props.start, onDatesChange: this.handleChange }) : // If not an event
                    _react2.default.createElement(_formDateRange2.default, { startDate: this.props.start, endDate: this.props.end, onDatesChange: this.handleChange })
                ),
                _react2.default.createElement(
                    'label',
                    null,
                    'Description'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'formSection' },
                    _react2.default.createElement('textarea', { name: 'description', type: 'text', value: this.props.description, onChange: this.handleChange })
                ),
                _react2.default.createElement(
                    'label',
                    null,
                    'Thumbnail'
                ),
                _react2.default.createElement(_ThumbnailInput2.default, this.props),
                _react2.default.createElement(
                    'button',
                    { onClick: this.props.handleSubmit },
                    'Submit'
                ),
                this.props.loading && _react2.default.createElement(
                    'div',
                    { className: 'loading' },
                    'loading'
                ),
                this.props.success && _react2.default.createElement(
                    'div',
                    { className: 'success' },
                    'Saved!'
                ),
                this.props.error.general && _react2.default.createElement(
                    'div',
                    { className: 'error' },
                    this.props.error.savelisting.general
                ),
                deleteButton
            );
        }
    }]);

    return ListingForm;
}(_react2.default.Component);

exports.default = ListingForm;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-dates");

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

var _imageUpload = __webpack_require__(36);

var _imageUpload2 = _interopRequireDefault(_imageUpload);

var _ImagesActions = __webpack_require__(17);

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
        value: function onImageDrop(file) {
            this.setState({
                uploadedFile: file[0],
                isUploading: true
            });

            _ImagesActions2.default.handleThumbnailUpload(file[0], this.props.number);
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = __webpack_require__(91);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageUpload = function (_React$Component) {
    _inherits(ImageUpload, _React$Component);

    function ImageUpload(props) {
        _classCallCheck(this, ImageUpload);

        return _possibleConstructorReturn(this, (ImageUpload.__proto__ || Object.getPrototypeOf(ImageUpload)).call(this, props));
    }

    _createClass(ImageUpload, [{
        key: 'render',
        value: function render() {
            var inlineStyles = {
                width: '100%',
                height: '50px',
                border: '2px dotted blue',
                borderRadius: '10px'
            };
            return _react2.default.createElement(
                _reactDropzone2.default,
                {
                    activeClassName: 'formSection',
                    style: inlineStyles,
                    multiple: false,
                    accept: 'image/*',
                    onDrop: this.props.onImageDrop },
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
/* 37 */
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

var NeighborhoodSelect = function (_React$Component) {
    _inherits(NeighborhoodSelect, _React$Component);

    function NeighborhoodSelect(props) {
        _classCallCheck(this, NeighborhoodSelect);

        return _possibleConstructorReturn(this, (NeighborhoodSelect.__proto__ || Object.getPrototypeOf(NeighborhoodSelect)).call(this, props));
    }

    _createClass(NeighborhoodSelect, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "select",
                { name: "neighborhood",
                    value: this.props.selected ? this.props.selected : "no-value",
                    onChange: this.props.onChange },
                _react2.default.createElement(
                    "option",
                    { value: "no-value", disabled: true },
                    "Neighborhood"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "10" },
                    "Tribeca and below"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "20" },
                    "Lower East Side"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "30" },
                    "Soho"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "40" },
                    "Noho/East Village"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "60" },
                    "West Village"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "70" },
                    "19th St and below"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "80" },
                    "20th St and nearby"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "90" },
                    "21st St and nearby"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "100" },
                    "22nd St and nearby"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "110" },
                    "23rd St and nearby"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "120" },
                    "24th St and nearby"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "130" },
                    "25th St and nearby"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "140" },
                    "26th St and nearby"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "150" },
                    "27th St and above"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "160" },
                    "Flatiron/Gramercy Park"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "170" },
                    "Midtown"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "180" },
                    "57th Street and nearby"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "190" },
                    "Upper East Side"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "200" },
                    "Upper West Side"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "210" },
                    "Harlem"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "220" },
                    "Brooklyn South"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "230" },
                    "Dumbo/Downtown"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "235" },
                    "Fort Greene"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "240" },
                    "Bushwick/Bed-stuy"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "250" },
                    "Williamsburg / Greenpoint"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "260" },
                    "Brooklyn (Other)"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "270" },
                    "Ridgewood"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "272" },
                    "Long Island City/Astoria"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "274" },
                    "Queens (Other)"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "280" },
                    "The Bronx"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "290" },
                    "Staten Island"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "300" },
                    "Long Island"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "310" },
                    "Upstate New York"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "320" },
                    "New Jersey"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "330" },
                    "Philadelphia"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "340" },
                    "Old City"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "350" },
                    "West Philadelphia"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "360" },
                    "North Philadelphia"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "370" },
                    "Other"
                )
            );
        }
    }]);

    return NeighborhoodSelect;
}(_react2.default.Component);

exports.default = NeighborhoodSelect;

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var express = __webpack_require__(7);
var path = __webpack_require__(40);
var favicon = __webpack_require__(41);
var logger = __webpack_require__(42);
var cookieParser = __webpack_require__(43);
var bodyParser = __webpack_require__(44);
var http = __webpack_require__(45);
var debug = __webpack_require__(46)('artcritical-list:server');

var expressValidator = __webpack_require__(47);

//Authentification
var passport = __webpack_require__(14);
var flash = __webpack_require__(48);
var session = __webpack_require__(49);
var bcrypt = __webpack_require__(23); // encripts password

// Get the User model
__webpack_require__(50)(passport);

var app = express();

// MongoDB
var mongoose = __webpack_require__(8);
var url = process.env.MONGOLAB_URI;
mongoose.connect(url, { useMongoClient: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('We are in!');
});

// Import the Mongoose models
var List = __webpack_require__(54);
var Venue = __webpack_require__(26);
var User = __webpack_require__(25);
var Feature = __webpack_require__(55);

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
  req.venue = Venue;
  req.userlist = User;
  req.feature = Feature;
  next();
});

var index = __webpack_require__(56);
var venues = __webpack_require__(106);
var listings = __webpack_require__(107);
var auth = __webpack_require__(108);

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

var port = normalizePort(process.env.PORT || '3000');
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
/* 40 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// config/passport.js

// load all the things we need
var LocalStrategy = __webpack_require__(52).Strategy;
var FacebookStrategy = __webpack_require__(53).Strategy;


// load up the user model
var User = __webpack_require__(25);
var Venue = __webpack_require__(26);

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
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                } else {
                    console.log("New User..");
                    // create the user
                    var newUser = new User();

                    // set the user's local credentials
                    newUser.local.name = req.body.name;
                    newUser.local.username = req.body.username;
                    newUser.local.password = newUser.generateHash(password);

                    // save the user
                    newUser.save(function (err) {
                        if (err) throw err;
                        return done(null, newUser);
                    });
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
                user = new User({
                    name: profile.displayName,
                    facebook: {
                        id: profile.id,
                        token: accessToken
                    }
                });
                console.log("New user", user);
                user.save(function (err) {
                    if (err) console.log(err);
                    _AuthActions2.default.facebookLogin(user);
                    return done(err, user);
                });
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
/* 51 */
/***/ (function(module, exports) {

module.exports = require("alt");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(8);

// Create the Listings table ==================================

var listingSchema = mongoose.Schema({
    name: String,
    //type: String,
    start: Date,
    end: Date,
    description: String,
    neighborhood: Number,
    venue: {
        ref: 'Venue',
        type: String
    },
    event: Boolean,
    events: [],
    image: String,
    thumb: String
});

//compile the model

module.exports = mongoose.model('List', listingSchema);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(8);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(57);

var _reactRouter = __webpack_require__(2);

var _routes = __webpack_require__(58);

var _routes2 = _interopRequireDefault(_routes);

var _ErrorPage = __webpack_require__(38);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(7);
var router = express.Router();
var JSX = __webpack_require__(104).install();
var passport = __webpack_require__(14);
// we'll use this to render our app to an html string

// and these to match the url to routes and then render

var history = __webpack_require__(105);
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
/* 57 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _layout = __webpack_require__(59);

var _layout2 = _interopRequireDefault(_layout);

var _IndexPage = __webpack_require__(62);

var _IndexPage2 = _interopRequireDefault(_IndexPage);

var _CurrentPage = __webpack_require__(63);

var _CurrentPage2 = _interopRequireDefault(_CurrentPage);

var _FuturePage = __webpack_require__(64);

var _FuturePage2 = _interopRequireDefault(_FuturePage);

var _GlancePage = __webpack_require__(65);

var _GlancePage2 = _interopRequireDefault(_GlancePage);

var _EventsPage = __webpack_require__(68);

var _EventsPage2 = _interopRequireDefault(_EventsPage);

var _VenuePage = __webpack_require__(69);

var _VenuePage2 = _interopRequireDefault(_VenuePage);

var _SignUpPage = __webpack_require__(74);

var _SignUpPage2 = _interopRequireDefault(_SignUpPage);

var _LogInPage = __webpack_require__(76);

var _LogInPage2 = _interopRequireDefault(_LogInPage);

var _myListPage = __webpack_require__(79);

var _myListPage2 = _interopRequireDefault(_myListPage);

var _AdminPage = __webpack_require__(86);

var _AdminPage2 = _interopRequireDefault(_AdminPage);

var _NewListing = __webpack_require__(87);

var _NewListing2 = _interopRequireDefault(_NewListing);

var _EditListing = __webpack_require__(92);

var _EditListing2 = _interopRequireDefault(_EditListing);

var _EditVenue = __webpack_require__(93);

var _EditVenue2 = _interopRequireDefault(_EditVenue);

var _featuredPage = __webpack_require__(96);

var _featuredPage2 = _interopRequireDefault(_featuredPage);

var _VenuesPage = __webpack_require__(99);

var _VenuesPage2 = _interopRequireDefault(_VenuesPage);

var _Account = __webpack_require__(102);

var _Account2 = _interopRequireDefault(_Account);

var _ErrorPage = __webpack_require__(38);

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
  _react2.default.createElement(_reactRouter.Route, { path: 'signup', component: _SignUpPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'mylist', component: _myListPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _LogInPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'venue/:slug', component: _VenuePage2.default }),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: 'account', component: _AdminPage2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Account2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'editlisting', component: _EditListing2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'newlisting', component: _NewListing2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'editvenue', component: _EditVenue2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'featured', component: _featuredPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'venuesadmin', component: _VenuesPage2.default })
  ),
  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _ErrorPage2.default })
);
// Error Components

//Signin Components
exports.default = routes;

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

var _reactRouter = __webpack_require__(2);

var _ListStore = __webpack_require__(16);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout(props) {
        _classCallCheck(this, Layout);

        var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

        _this.state = _ListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
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
        key: 'render',
        value: function render() {
            var user = this.state.user;

            var name = user.name;
            var mylistNum = user.mylist.length;

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
                        'span',
                        null,
                        'Welcome, ',
                        name,
                        ' ',
                        _react2.default.createElement(
                            'button',
                            { onClick: _AuthActions2.default.attemptLogOut },
                            'Log Out'
                        )
                    )
                );
            };

            return _react2.default.createElement(
                'div',
                { className: 'app-container' },
                _react2.default.createElement(
                    'header',
                    { className: 'mainHeader' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'artcritical'
                    ),
                    _react2.default.createElement(
                        _reactRouter.IndexLink,
                        { to: '/', activeClassName: 'active' },
                        'At a Glance'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/current', activeClassName: 'active' },
                        'Current'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/future', activeClassName: 'active' },
                        'Future'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/events', activeClassName: 'active' },
                        'Events'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/mylist', activeClassName: 'active' },
                        'my list ',
                        mylistNum > 0 && '(' + mylistNum + ')'
                    ),
                    user.isLoggedIn ? renderGreeting(name) : renderLogin()
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'app-content' },
                    _react2.default.cloneElement(this.props.children, this.state)
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
/* 60 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("toastr");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _displayActions = __webpack_require__(5);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//ACTIONS

//COMPONENTS


var IndexPage = function (_React$Component) {
    _inherits(IndexPage, _React$Component);

    function IndexPage(props) {
        _classCallCheck(this, IndexPage);

        return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call(this, props));
    }

    _createClass(IndexPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Get all listings
            _ListActions2.default.getAll();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var nh = '';
            var thelist = function thelist(mylist) {
                return _this2.props.allListings.map(function (listing) {
                    var newNh = listing.neighborhood;

                    if (newNh !== nh) {
                        nh = newNh;
                        newNh = _displayActions2.default.displayCity(nh);
                        return _react2.default.createElement(
                            'div',
                            { key: listing._id },
                            _react2.default.createElement(
                                'h2',
                                null,
                                newNh
                            ),
                            _react2.default.createElement(_listing2.default, _extends({}, listing, {
                                user: _this2.props.user,
                                addToList: function addToList(e) {
                                    return _this2.addToList(e, listing);
                                }
                            }))
                        );
                    } else {
                        return _react2.default.createElement(_listing2.default, _extends({}, listing, {
                            key: listing._id,
                            mylist: mylist
                        }));
                    }
                });
            };

            return _react2.default.createElement(
                'div',
                { className: 'home' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Landing page'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'listingsWrap' },
                    thelist(this.props.mylist)
                )
            );
        }
    }]);

    return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _displayActions = __webpack_require__(5);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _sizeSelector = __webpack_require__(6);

var _sizeSelector2 = _interopRequireDefault(_sizeSelector);

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
            _ListActions2.default.getCurrent();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var secondaryNH = '';
            var newSecondaryNH = '';
            var renderExport = [];
            var title = '';
            var num = this.props.currentListings.length - 1;

            var neighborhood = function neighborhood(name) {
                return _react2.default.createElement(
                    'h2',
                    null,
                    name
                );
            };

            var thelistRender = function thelistRender(currentListings) {
                return currentListings.map(function (listing, index) {

                    var result = _react2.default.createElement(_listing2.default, _extends({ key: listing._id }, listing, { user: _this2.props.user, dateView: 'current' }));

                    newSecondaryNH = listing.venue.neighborhood;

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
                { className: 'home' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Current'
                ),
                _react2.default.createElement(_sizeSelector2.default, { view: this.props.view }),
                _react2.default.createElement(
                    'div',
                    { className: this.props.view + " listingsWrap" },
                    thelistRender(this.props.currentListings),
                    this.props.loading.current && _react2.default.createElement(
                        'div',
                        { className: 'loading' },
                        'Loading...'
                    )
                )
            );
        }
    }]);

    return CurrentPage;
}(_react2.default.Component);

exports.default = CurrentPage;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _displayActions = __webpack_require__(5);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _sizeSelector = __webpack_require__(6);

var _sizeSelector2 = _interopRequireDefault(_sizeSelector);

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
            var _this2 = this;

            var secondaryNH = '';
            var newSecondaryNH = '';
            var renderExport = [];
            var title = '';
            var num = this.props.futureListings.length - 1;

            var neighborhood = function neighborhood(name) {
                return _react2.default.createElement(
                    'h2',
                    null,
                    name
                );
            };

            var thelistRender = function thelistRender(futureListings) {
                return futureListings.map(function (listing, index) {

                    var result = _react2.default.createElement(_listing2.default, _extends({ key: listing._id }, listing, { user: _this2.props.user }));

                    newSecondaryNH = listing.venue.neighborhood;

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
                { className: 'home' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Future'
                ),
                _react2.default.createElement(_sizeSelector2.default, { view: this.props.view }),
                _react2.default.createElement(
                    'div',
                    { className: this.props.view + " listingsWrap" },
                    thelistRender(this.props.futureListings),
                    this.props.loading.future && _react2.default.createElement(
                        'div',
                        { className: 'loading' },
                        'Loading...'
                    )
                )
            );
        }
    }]);

    return FuturePage;
}(_react2.default.Component);

exports.default = FuturePage;

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

var _reactRouter = __webpack_require__(2);

var _ListStore = __webpack_require__(16);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactIntl = __webpack_require__(9);

var _daypage = __webpack_require__(66);

var _daypage2 = _interopRequireDefault(_daypage);

var _tabs = __webpack_require__(19);

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
                    'h2',
                    null,
                    'At a Glance'
                ),
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

var _reactIntl = __webpack_require__(9);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _moment = __webpack_require__(18);

var _moment2 = _interopRequireDefault(_moment);

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _featureBlock = __webpack_require__(27);

var _featureBlock2 = _interopRequireDefault(_featureBlock);

var _sizeSelector = __webpack_require__(6);

var _sizeSelector2 = _interopRequireDefault(_sizeSelector);

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

            this.props.glanceListings.map(function (listing) {
                // Check if it is an event
                if (listing.event == true) {
                    // it IS an event

                    if ((0, _moment2.default)(listing.start).format().slice(0, 10) == _this2.state.date) {
                        events.push(_react2.default.createElement(_listing2.default, _extends({}, listing, { key: listing._id, user: _this2.props.user })));
                    }
                } else {
                    //not an event
                    //Check if it starts on this day
                    if ((0, _moment2.default)(listing.start).format().slice(0, 10) == _this2.state.date) {
                        openings.push(_react2.default.createElement(_listing2.default, _extends({}, listing, { key: listing._id, user: _this2.props.user, dateView: 'current' })));
                    }
                    //Check if it ends on this day
                    if ((0, _moment2.default)(listing.end).format().slice(0, 10) == _this2.state.date) {
                        closings.push(_react2.default.createElement(_listing2.default, _extends({}, listing, { key: listing._id, user: _this2.props.user })));
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
                    { className: 'featuredSection' },
                    _react2.default.createElement(_featureBlock2.default, { feature: this.props.feature })
                ),
                _react2.default.createElement(_sizeSelector2.default, { view: this.props.view }),
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
                        'h3',
                        null,
                        'Nothing happening today!'
                    )
                )
            );
        }
    }]);

    return DayPage;
}(_react2.default.Component);

exports.default = DayPage;

/***/ }),
/* 67 */
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
            var fullURL = "https://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg";

            return _react2.default.createElement("img", { src: fullURL, className: this.props.classes });
        }
    }]);

    return imageBlock;
}(_react2.default.Component);

exports.default = imageBlock;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _ListStore = __webpack_require__(16);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _DateBlock = __webpack_require__(11);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

var _sizeSelector = __webpack_require__(6);

var _sizeSelector2 = _interopRequireDefault(_sizeSelector);

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
                        _react2.default.createElement(_listing2.default, _extends({}, listing, { user: _this2.props.user }))
                    );
                } else {
                    return _react2.default.createElement(_listing2.default, _extends({}, listing, { key: listing._id, user: _this2.props.user }));
                }
            });

            return _react2.default.createElement(
                'div',
                { className: 'home' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Events'
                ),
                _react2.default.createElement(_sizeSelector2.default, { view: this.props.view }),
                _react2.default.createElement(
                    'div',
                    { className: this.props.view + " listingsWrap" },
                    thelist
                )
            );
        }
    }]);

    return EventsPage;
}(_react2.default.Component);

exports.default = EventsPage;

/***/ }),
/* 69 */
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

var _mapBlock = __webpack_require__(28);

var _mapBlock2 = _interopRequireDefault(_mapBlock);

var _VenueListings = __webpack_require__(72);

var _VenueListings2 = _interopRequireDefault(_VenueListings);

var _VenueContent = __webpack_require__(73);

var _VenueContent2 = _interopRequireDefault(_VenueContent);

var _tabs = __webpack_require__(19);

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
            _ListActions2.default.getVenueFullInfo(this.props.params.slug);
        }
    }, {
        key: 'render',
        value: function render() {

            // Get coordinates
            var fullAdress = this.props.venue.address ? this.props.venue.address + ' ' + this.props.venue.city : null;
            var venueId = this.props.venue._id;

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
/* 70 */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _sizeSelector = __webpack_require__(6);

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
                    return _react2.default.createElement(_listing2.default, _extends({}, listing, { user: _this2.props.user, key: listing._id }));
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
/* 73 */
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

            var venue = this.props.venue;

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
                    venue.address,
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _SignUpForm = __webpack_require__(75);

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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(5);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _reactToggleButton = __webpack_require__(12);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _validator = __webpack_require__(30);

var _validator2 = _interopRequireDefault(_validator);

var _propTypes = __webpack_require__(20);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _reactstrap = __webpack_require__(31);

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
      name: '',
      email: '',
      password1: '',
      password2: '',
      isValid: {
        name: true,
        email: true,
        password1: true,
        password2: true
      },
      errorMessage: {
        name: '',
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
    key: '_validateName',
    value: function _validateName(value) {
      var valid = _validator2.default.isLength(value.trim(), 1, 50);
      var errorMessage = this.state.errorMessage;

      if (valid) {
        errorMessage.name = '';
        this.setState({ errorMessage: errorMessage });
      } else {
        errorMessage.name = 'Please enter a name.';
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
    value: function _validate(name, email, password1, password2) {
      this.setState({
        isValid: {
          name: this._validateName(name),
          email: this._validateEmail(email),
          password1: this._validatePassword1(password1),
          password2: this._validatePassword2(password1, password2)
        }
      });
    }
  }, {
    key: '_areValid',
    value: function _areValid(name, email, password1, password2) {
      var result = false;

      if (this._validateName(name) && this._validateEmail(email) && this._validatePassword1(password1) && this._validatePassword2(password1, password2)) {

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
          name = _state.name,
          email = _state.email,
          password1 = _state.password1,
          password2 = _state.password2;


      this._validate(name, email, password1, password2);

      if (this._areValid(name, email, password1, password2)) {
        var newUser = {
          name: name,
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
        'form',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactstrap.Input, { type: 'text',
            name: 'name',
            value: this.state.name,
            className: this._getInputStyleName(this.state.isValid.name),
            placeholder: 'A Name',
            onChange: this.handleChange
          }),
          _react2.default.createElement(
            'span',
            null,
            this.state.errorMessage.name
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactstrap.Input, { type: 'text',
            name: 'email',
            value: this.state.email,
            className: this._getInputStyleName(this.state.isValid.email),
            placeholder: 'Email',
            onChange: this.handleChange
          }),
          _react2.default.createElement(
            'span',
            null,
            this.state.errorMessage.email
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactstrap.Input, { type: 'password',
            name: 'password1',
            value: this.state.password1,
            className: this._getInputStyleName(this.state.isValid.password1),
            placeholder: 'Password',
            onChange: this.handleChange
          }),
          _react2.default.createElement(
            'span',
            null,
            this.state.errorMessage.password1
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactstrap.Input, { type: 'password',
            name: 'password2',
            value: this.state.password2,
            className: this._getInputStyleName(this.state.isValid.password2),
            placeholder: 'Confirm Password',
            onChange: this.handleChange
          }),
          _react2.default.createElement(
            'span',
            null,
            this.state.errorMessage.password2
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'button-container' },
          _react2.default.createElement(_reactstrap.Input, { type: 'submit', value: 'Submit', onClick: this.handleSaveClick })
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(77);

var _propTypes = __webpack_require__(20);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LogInForm = __webpack_require__(22);

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
                    _react2.default.createElement(_LogInForm2.default, { loading: this.props.isLoggingIn })
                ),
                'Need to sign up? ',
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/signup', activeClassName: 'active' },
                    'Sign Up'
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
/* 77 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 78 */
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
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "a",
                { className: "facebookbutton", href: "/auth/facebook" },
                _react2.default.createElement("i", { className: "fa fa-facebook", "aria-hidden": "true" }),
                "Login with Facebook"
            );
        }
    }]);

    return FacebookButton;
}(_react2.default.Component);

exports.default = FacebookButton;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _myList = __webpack_require__(80);

var _myList2 = _interopRequireDefault(_myList);

var _LogInForm = __webpack_require__(22);

var _LogInForm2 = _interopRequireDefault(_LogInForm);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _reactRouter = __webpack_require__(2);

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
            var myListRender = this.props.user.isLoggedIn ? _react2.default.createElement(_myList2.default, this.props) : _react2.default.createElement(_LogInForm2.default, { loginFunction: _AuthActions2.default.attemptLogIn, loading: this.props.isLoggingIn });
            return _react2.default.createElement(
                'div',
                { className: 'myListwrap' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'my list'
                ),
                myListRender
            );
        }
    }]);

    return MyListPage;
}(_react2.default.Component);

exports.default = MyListPage;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactMapGl = __webpack_require__(21);

var _myListings = __webpack_require__(81);

var _myListings2 = _interopRequireDefault(_myListings);

var _myMap = __webpack_require__(83);

var _myMap2 = _interopRequireDefault(_myMap);

var _sizeSelector = __webpack_require__(6);

var _sizeSelector2 = _interopRequireDefault(_sizeSelector);

var _reactReorder = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var async = __webpack_require__(85);
// Components

var MyList = function (_React$Component) {
    _inherits(MyList, _React$Component);

    function MyList(props) {
        _classCallCheck(this, MyList);

        var _this = _possibleConstructorReturn(this, (MyList.__proto__ || Object.getPrototypeOf(MyList)).call(this, props));

        _this.state = {
            listingHover: '',
            markers: [],
            viewport: {
                latitude: _this.props.center.lat,
                longitude: _this.props.center.lng,
                zoom: _this.props.zoom,
                mapboxApiAccessToken: _this.props.token,
                bearing: 0,
                pitch: 0,
                width: window.innerWidth,
                height: 500
            }
        };

        _this.onReorder = _this.onReorder.bind(_this);
        _this.onHover = _this.onHover.bind(_this);
        _this.onLeave = _this.onLeave.bind(_this);
        _this._goToViewport = _this._goToViewport.bind(_this);
        _this.findCoord = _this.findCoord.bind(_this);
        _this.updateViewport = _this.updateViewport.bind(_this);
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
            // Create variable to change property
            var newViewport = this.state.viewport;
            newViewport.width = _reactDom2.default.findDOMNode(this).offsetWidth;
            //Update state
            this.setState({
                viewport: newViewport
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
            console.log('we left');
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

            return _react2.default.createElement(
                'div',
                { className: 'myList' },
                _react2.default.createElement(_myMap2.default, {
                    markers: this.state.markers,
                    viewport: this.state.viewport,
                    updateViewport: this.updateViewport,
                    listingHover: this.state.listingHover,
                    onHover: this.onHover,
                    onLeave: this.onLeave
                }),
                _react2.default.createElement(_sizeSelector2.default, { view: this.props.view }),
                this.props.user.mylist ? _react2.default.createElement(_myListings2.default, {
                    user: this.props.user,
                    view: this.props.view,
                    onHover: this.onHover,
                    onLeave: this.onLeave,
                    onReorder: this.onReorder,
                    listingHover: this.state.listingHover
                }) : null
            );
        }
    }]);

    return MyList;
}(_react2.default.Component);

exports.default = MyList;


MyList.defaultProps = {
    center: { lat: 40.7238556, lng: -73.9221523 },
    zoom: 11,
    token: process.env.MapboxAccessToken
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _myListing = __webpack_require__(82);

var _myListing2 = _interopRequireDefault(_myListing);

var _reactReorder = __webpack_require__(32);

var _reactReorder2 = _interopRequireDefault(_reactReorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Components


//

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
                            { key: listing._id,
                                className: listing._id == _this2.props.listingHover && 'active',
                                onMouseEnter: _this2.props.onHover.bind(_this2, listing),
                                onMouseLeave: _this2.props.onLeave.bind(_this2, listing)
                            },
                            _react2.default.createElement(_myListing2.default, _extends({}, listing, { number: index + 1, user: _this2.props.user }))
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
/* 82 */
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

var _DateBlock = __webpack_require__(11);

var _DateBlock2 = _interopRequireDefault(_DateBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var Listing = function (_React$Component) {
    _inherits(Listing, _React$Component);

    function Listing(props) {
        _classCallCheck(this, Listing);

        // Function binding
        var _this = _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this, props));

        _this.addToList = _this.addToList.bind(_this);
        return _this;
    }

    //Function to add a listing to the personal list


    _createClass(Listing, [{
        key: 'addToList',
        value: function addToList(e, listing) {
            //Select this listing
            var thislisting = $(e.target).closest('.listing');

            //Add or remove the listing to the user's list
            _AuthActions2.default.addToUserList(listing);

            if (thislisting.hasClass('selected')) {

                //Close the currently open tab
                $(thislisting).removeClass('selected');
            } else {

                //Open this listing
                $(thislisting).addClass('selected');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var end;
            if (this.props.event !== true && this.props.end) {
                end = _react2.default.createElement(
                    'span',
                    null,
                    'to ',
                    _react2.default.createElement(_DateBlock2.default, { date: this.props.end })
                );
            }

            var image = this.props.image ? "https://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg" : 'https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg';
            var style = { backgroundImage: 'url(' + image + ')' };

            return _react2.default.createElement(
                'div',
                { className: 'listing notselected',
                    id: this.props._id, key: this.props._id },
                _react2.default.createElement(
                    'div',
                    { className: 'listingAdd' },
                    _react2.default.createElement(
                        'div',
                        { className: 'addButton', style: style },
                        _react2.default.createElement(
                            'span',
                            null,
                            this.props.number
                        )
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
                            this.props.name,
                            this.props.venue._id !== '' && ' at ',
                            _react2.default.createElement(
                                'a',
                                { className: 'venueName', href: "/venue/" + this.props.venue._id },
                                this.props.venue.name
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            this.props.start && _react2.default.createElement(_DateBlock2.default, { date: this.props.start }),
                            ' ',
                            end,
                            '  - ',
                            this.props.venue.address,
                            this.props.venue.address !== '' && this.props.venue.city !== '' && ', ',
                            this.props.venue.city
                        ),
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick(e) {
                                    return _this2.addToList(e, _this2.props);
                                } },
                            'Delete this listing'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'moreInfo' },
                        _react2.default.createElement(
                            'p',
                            null,
                            this.props.description
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            this.props.receptionnotes
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'listingClose' },
                    _react2.default.createElement('i', { className: 'fa fa-plus-square-o', 'aria-hidden': 'true' }),
                    _react2.default.createElement('i', { className: 'fa fa-minus-square-o', 'aria-hidden': 'true' })
                )
            );
        }
    }]);

    return Listing;
}(_react2.default.Component);

exports.default = Listing;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _myMarker = __webpack_require__(84);

var _myMarker2 = _interopRequireDefault(_myMarker);

var _reactMapGl = __webpack_require__(21);

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
                            _react2.default.createElement(_myMarker2.default, {
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
                { className: 'mapWrap' },
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
/* 84 */
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
/* 85 */
/***/ (function(module, exports) {

module.exports = require("async");

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

var _reactRouter = __webpack_require__(2);

var _LogInForm = __webpack_require__(22);

var _LogInForm2 = _interopRequireDefault(_LogInForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Components


var IndexPage = function (_React$Component) {
    _inherits(IndexPage, _React$Component);

    function IndexPage() {
        _classCallCheck(this, IndexPage);

        return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
    }

    _createClass(IndexPage, [{
        key: 'render',
        value: function render() {
            var adminRender = this.props.user.isLoggedIn ? _react2.default.createElement(
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
                    _react2.default.createElement(
                        _reactRouter.IndexLink,
                        { to: '/account', activeClassName: 'active' },
                        'Account'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/account/newlisting', activeClassName: 'active' },
                        'New Listing'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/account/editlisting', activeClassName: 'active' },
                        'Edit Listing'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/account/editvenue', activeClassName: 'active' },
                        'Edit Venue'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/account/venuesadmin', activeClassName: 'active' },
                        'All Venues'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/account/featured', activeClassName: 'active' },
                        'Featured Listings'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'admin-content' },
                    _react2.default.cloneElement(this.props.children, this.props)
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
                        'Please login to have access to your account'
                    )
                ),
                _react2.default.createElement(_LogInForm2.default, { loading: this.props.isLoggingIn })
            );

            return _react2.default.createElement(
                'div',
                null,
                adminRender
            );
        }
    }]);

    return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;

/***/ }),
/* 87 */
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

var _ListingForm = __webpack_require__(33);

var _ListingForm2 = _interopRequireDefault(_ListingForm);

var _listing = __webpack_require__(4);

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
            var newListing = {
                name: this.props.listingEdit.name,
                event: this.props.listingEdit.event,
                start: this.props.listingEdit.start,
                end: this.props.listingEdit.end,
                venue: this.props.listingEdit.venue._id,
                website: this.props.listingEdit.website,
                description: this.props.listingEdit.description,
                neighborhood: this.props.listingEdit.venue.neighborhood,
                image: this.props.listingEdit.image
            };
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
                            _react2.default.createElement(_listing2.default, _extends({}, this.props.listingEdit, { user: '' }))
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDates = __webpack_require__(34);

var _moment = __webpack_require__(18);

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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDates = __webpack_require__(34);

var _moment = __webpack_require__(18);

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
                    return _this2.props.onDatesChange({ date: date });
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
/* 90 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(5);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _formSelect = __webpack_require__(13);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _ListingForm = __webpack_require__(33);

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

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        _this.handleDelete = _this.handleDelete.bind(_this);
        return _this;
    }

    _createClass(ListingEdit, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ListActions2.default.listingEditReset();
        }

        // Add the listing to the database

    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            _ListActions2.default.updateListing(this.props.listingEdit);
        }

        //Delete the listing

    }, {
        key: 'handleDelete',
        value: function handleDelete() {
            _ListActions2.default.deleteListing(this.props.listingEdit._id);
            _ListActions2.default.listingEditReset();
        }
    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            if (data) {
                //Fetch all the venue info
                _ListActions2.default.getListingInfo(data.value);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            //how ot get option for select element
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
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(_formSelect2.default, { value: { value: this.props.listingEdit._id, label: this.props.listingEdit.name }, handleSelectChange: this.handleSelectChange, getOptions: getOptions })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'ListingInfo' },
                    _react2.default.createElement(
                        'div',
                        { className: 'medium listingsWrap' },
                        _react2.default.createElement(_listing2.default, _extends({}, this.props.listingEdit, { user: '' }))
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'listingForm' },
                    _react2.default.createElement(_ListingForm2.default, _extends({}, this.props.listingEdit, {
                        handleSubmit: this.handleSubmit,
                        handleDelete: this.handleDelete,
                        error: this.props.error.updatelisting,
                        loading: this.props.loading.updatelisting,
                        success: this.props.success.updatelisting }))
                )
            );
        }
    }]);

    return ListingEdit;
}(_react2.default.Component);

exports.default = ListingEdit;

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

var _displayActions = __webpack_require__(5);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _formSelect = __webpack_require__(13);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _VenueForm = __webpack_require__(94);

var _VenueForm2 = _interopRequireDefault(_VenueForm);

var _mapBlock = __webpack_require__(28);

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
        }
    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            if (data) {
                this.setState({
                    formDisplay: true
                });
                if (data.label == data.value) {
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
                            _react2.default.createElement(_formSelect2.default, { value: { value: this.props.venueEdit._id, label: this.props.venueEdit.name }, handleSelectChange: this.handleSelectChange, getOptions: getOptions })
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
                            loading: this.props.loading.updatevenue,
                            success: this.props.success.updatevenue }))
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactToggleButton = __webpack_require__(12);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _NeighborhoodSelect = __webpack_require__(37);

var _NeighborhoodSelect2 = _interopRequireDefault(_NeighborhoodSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Components


var MapboxClient = __webpack_require__(95);
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
          'label',
          null,
          'Name'
        ),
        _react2.default.createElement(
          'div',
          { className: 'formSection' },
          _react2.default.createElement('input', { name: 'name', placeholder: 'Name', type: 'text', value: this.props.name, onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'label',
          null,
          'Slug'
        ),
        _react2.default.createElement(
          'div',
          { className: 'formSection' },
          _react2.default.createElement('input', { disabled: true, name: 'slug', type: 'text', value: this.props.slug, onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'label',
          null,
          'Address'
        ),
        _react2.default.createElement(
          'div',
          { className: 'formSection' },
          _react2.default.createElement('input', { name: 'address', placeholder: 'Address', type: 'text', value: this.props.address, onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'label',
          null,
          'City'
        ),
        _react2.default.createElement(
          'div',
          { className: 'formSection' },
          _react2.default.createElement('input', { name: 'city', placeholder: 'City', type: 'text', value: this.props.city, onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'label',
          null,
          'Neighborhood'
        ),
        _react2.default.createElement(
          'div',
          { className: 'formSection' },
          _react2.default.createElement(_NeighborhoodSelect2.default, { selected: this.props.neighborhood, onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'label',
          null,
          'State'
        ),
        _react2.default.createElement(
          'div',
          { className: 'formSection' },
          _react2.default.createElement('input', { name: 'state', placeholder: 'State', type: 'text', value: this.props.state, onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'label',
          null,
          'Zipcode'
        ),
        _react2.default.createElement(
          'div',
          { className: 'formSection' },
          _react2.default.createElement('input', { name: 'zipcode', placeholder: 'Zipcode', type: 'number', value: this.props.zipcode, onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'label',
          null,
          'Coordinates'
        ),
        _react2.default.createElement(
          'div',
          { className: 'formSection' },
          _react2.default.createElement('input', { name: 'lat', type: 'text', value: coordinates.lat, onChange: this.handleChange }),
          _react2.default.createElement('input', { name: 'long', type: 'text', value: coordinates.long, onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'label',
          null,
          'Website'
        ),
        _react2.default.createElement(
          'div',
          { className: 'formSection' },
          _react2.default.createElement('input', { name: 'website', placeholder: 'Website', type: 'text', value: this.props.website, onChange: this.handleChange })
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.props.handleSubmit },
          this.props._id ? 'Update' : 'Save'
        ),
        this.props.loading && _react2.default.createElement(
          'div',
          { className: 'loading' },
          'loading'
        ),
        this.props.success && _react2.default.createElement(
          'div',
          { className: 'success' },
          'Saved!'
        ),
        this.props.error.general && _react2.default.createElement(
          'div',
          { className: 'error' },
          this.props.error.general
        ),
        this.props.handleDelete && this.props._id ? _react2.default.createElement(
          'button',
          { className: 'delete', onClick: this.props.handleDelete },
          'Delete'
        ) : null
      );
    }
  }]);

  return VenueForm;
}(_react2.default.Component);

exports.default = VenueForm;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("mapbox");

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactIntl = __webpack_require__(9);

var _featuredDay = __webpack_require__(97);

var _featuredDay2 = _interopRequireDefault(_featuredDay);

var _tabs = __webpack_require__(19);

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
                days.push(_react2.default.createElement(_featuredDay2.default, { key: i, dayNumber: i, date: this.state.dates[i], feature: this.props.features[i] || {}, error: this.props.error.feature, label: label }));
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(5);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _formSelect = __webpack_require__(13);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _featuredForm = __webpack_require__(98);

var _featuredForm2 = _interopRequireDefault(_featuredForm);

var _featureBlock = __webpack_require__(27);

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
                    this.props.feature.list ? _react2.default.createElement(_featureBlock2.default, { feature: this.props.feature }) : this.props.error
                )
            );
        }
    }]);

    return FeaturedDay;
}(_react2.default.Component);

exports.default = FeaturedDay;

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

var _reactToggleButton = __webpack_require__(12);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _ThumbnailInput = __webpack_require__(35);

var _ThumbnailInput2 = _interopRequireDefault(_ThumbnailInput);

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
                { id: 'listingForm' },
                _react2.default.createElement(
                    'label',
                    null,
                    'Thumbnail'
                ),
                _react2.default.createElement(_ThumbnailInput2.default, { image: this.props.list && this.props.list.image, number: this.props.number }),
                _react2.default.createElement(
                    'label',
                    null,
                    'Description'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'formSection' },
                    _react2.default.createElement('textarea', { name: 'text', type: 'text', value: this.props.text, onChange: this.props.handleChange })
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
/* 99 */
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

var _displayActions = __webpack_require__(5);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _VenueItem = __webpack_require__(100);

var _VenueItem2 = _interopRequireDefault(_VenueItem);

var _NeighborhoodSelect = __webpack_require__(37);

var _NeighborhoodSelect2 = _interopRequireDefault(_NeighborhoodSelect);

var _loading = __webpack_require__(101);

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
        key: 'componentDidUnmount',
        value: function componentDidUnmount() {
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _DateBlock = __webpack_require__(11);

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
            this.props.listings.length == 0 && this.setState({ old: true });
            //Check if it has a current listing
            if (!this.state.old) {
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
/* 101 */
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _avatar = __webpack_require__(103);

var _avatar2 = _interopRequireDefault(_avatar);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var updateTimer;

var IndexPage = function (_React$Component) {
    _inherits(IndexPage, _React$Component);

    function IndexPage(props) {
        _classCallCheck(this, IndexPage);

        var _this = _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call(this, props));

        _this.state = {
            name: _this.props.user.name,
            updating: false

            //Function Binding
        };_this.handleChange = _this.handleChange.bind(_this);
        _this.saveChanges = _this.saveChanges.bind(_this);
        return _this;
    }

    _createClass(IndexPage, [{
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
        value: function saveChanges() {
            _AuthActions2.default.updateUser(this.props.user);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'account' },
                _react2.default.createElement(
                    'h3',
                    null,
                    'Your Account'
                ),
                _react2.default.createElement(
                    'label',
                    null,
                    'Name'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'formSection' },
                    _react2.default.createElement('input', { name: 'name', placeholder: 'Your Name', type: 'text', value: this.props.user.name, onChange: this.handleChange })
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
                    'button',
                    { onClick: this.saveChanges },
                    'Save'
                ),
                this.props.loading.updateuser ? 'saving...' : '',
                this.props.success.updateuser || '',
                this.props.error.updateuser || ''
            );
        }
    }]);

    return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;

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

var _ImagesActions = __webpack_require__(17);

var _ImagesActions2 = _interopRequireDefault(_ImagesActions);

var _imageUpload = __webpack_require__(36);

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
                resetAvatar: true
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
/* 104 */
/***/ (function(module, exports) {

module.exports = require("node-jsx");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(7);
var router = express.Router();
var Promise = __webpack_require__(15);

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
                var newvenue = {
                    _id: venue._id,
                    name: venue.name,
                    neighborhood: venue.neighborhood,
                    listings: current
                };
                return newvenue;
            });
        });
    }).then(function (result) {
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

    Venue.findOne({
        _id: req.params.venue_id
    }).exec(function (e, docs) {
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

    Venue.find({ slug: req.params.venue_slug }, function (err, venue) {
        if (err) res.send(err);

        List.find({ venue: venue[0]._id }).where('start').lte(today).where('end').gte(today).populate('venue').exec(function (e, current) {

            List.find({ venue: venue[0]._id }).where('start').gte(today).limit(4).populate('venue').exec(function (e, upcoming) {

                List.find({ venue: venue[0]._id }).where('end').lte(today).sort('-end').limit(4).populate('venue').exec(function (e, past) {
                    var data = {
                        venue: venue[0],
                        currentListings: current,
                        upcomingListings: upcoming,
                        pastListings: past
                    };
                    res.json(data);
                });
            });
        });
    });
});

/* GET current listings for one venue */
router.get('/getlistings/:venue_id', function (req, res, next) {
    var List = req.list;

    List.find({ venue: req.params.venue_id }).exec(function (e, docs) {
        res.json(docs);
    });
});

/*
 * POST a new venue.
 */
router.post('/add', function (req, res) {
    var Venue = req.venue;

    // define a new entry
    var newvenue = new Venue(req.body);

    //Save this new entry
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(7);
var router = express.Router();

//#######################
// GET ALL listings ===================
//#######################

router.get('/alllistings', function (req, res) {
    var List = req.list;
    var Venue = req.venue;

    console.log("Getting all listings");

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
    var offset_ratio = parseInt(req.params.offset_ratio) * 30;

    List.find().where('start').lte(today).where('end').gte(today).sort('neighborhood').skip(offset_ratio).limit(30).populate('venue').exec(function (e, docs) {
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

    List.find().where('start').gte(today).where('event').ne(true).sort('neighborhood').skip(offset_ratio).limit(30).populate('venue').exec(function (e, docs) {
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
    }, {}).sort('neighborhood').populate('venue').exec(function (e, docs) {
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

    List.find({
        $and: [{
            start: {
                $gte: today
            }
        }, {
            event: true
        }]
    }, {}).sort('start').populate('venue').exec(function (e, docs) {
        console.log(e, docs);
        res.json(docs);
    });
});

//#######################
/* FIND listings based on text */
//#######################

router.get('/find/:regex_input', function (req, res, next) {
    var List = req.list;

    var regexp = new RegExp(req.params.regex_input, "i");

    List.find({ name: regexp }).exec(function (err, listings) {
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
    }).populate('venue').exec(function (e, docs) {
        if (e) res.send(e);

        res.json(docs);
    });
});

//############################
// POST a new listing.
//############################

router.post('/add', function (req, res) {
    var List = req.list;

    console.log("Adding one listing");

    // define a new entry
    console.log('Body: ', req.body);
    var newlisting = new List(req.body);

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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(7);
var router = express.Router();
var passport = __webpack_require__(14);

//###################################
// SIGNUP
//###################################

router.post('/signup', async function (req, res) {
    passport.authenticate('local-signup')(req, res, function () {
        // If logged in, we should have user info to send back
        if (req.user) {
            passport.authenticate('local-login')(req, res, function () {
                console.log('auth/signup: Signed in');

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
        console.log('Logged in');
        // If logged in, we should have user info to send back
        if (req.user) {
            return res.send(JSON.stringify(req.user));
        }

        // Otherwise return an error
        return res.send(JSON.stringify({
            error: 'There was an error logging in'
        }));
    });
});

//###################################
// FACEBOOK LOGIN
//###################################

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', function (req, res) {

    console.log("In route: ", req.body);

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
            res.redirect('/');
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
            } else {

                // Remove from the list
                user.mylist.splice(IndexOfListing, 1);
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
//###################################

router.get('/getmylist', function (req, res) {
    var List = req.list;
    var Venue = req.venue;

    //CHECK IF USER IS CONNECTED
    if (req.user) {
        var theirList = req.user.mylist;

        List.find({
            '_id': { $in: theirList }
        }).populate('venue').exec(function (e, docs) {
            res.json(docs);
        });
    } else {
        var docs = [];
        res.json(docs);
    }
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

    console.log(User);
});

//###################################
// UPDATE USER INFO 
//###################################
router.post('/updateuser', function (req, res) {
    var Userlist = req.userlist;
    var User = req.user;

    var newInfo = {
        'avatar': req.body.avatar,
        'local.username': req.body.email,
        'local.name': req.body.name
    };

    console.log('New user info: ', newInfo);
    var update = { $set: newInfo };

    Userlist.update({ _id: User._id }, update, { upsert: true }, function (err, updatedUser) {
        res.send(err === null ? {
            newuser: updatedUser
        } : {
            msg: err
        });
    });
});

module.exports = router;

/***/ })
/******/ ]);
//# sourceMappingURL=server.bundle.js.map