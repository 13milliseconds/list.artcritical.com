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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(10);

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListActions = function () {
    function ListActions() {
        _classCallCheck(this, ListActions);

        this.generateActions('getCurrentSuccess', 'getCurrentFail', 'getAllSuccess', 'getAllFail', 'getEventsSuccess', 'getEventsFail', 'getGlanceSuccess', 'getGlanceFail', 'getMylistSuccess', 'getMylistFailure');
    }

    _createClass(ListActions, [{
        key: 'getCurrent',
        value: function getCurrent() {
            var _this = this;

            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: '/list/currentlistings'
                }).done(function (data) {
                    _this.getCurrentSuccess(data);
                }).fail(function (jqXhr) {
                    _this.getCurrentFail(jqXhr);
                });
            };
        }
    }, {
        key: 'getAll',
        value: function getAll() {
            var _this2 = this;

            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: '/list/alllistings'
                }).done(function (data) {
                    _this2.getAllSuccess(data);
                }).fail(function (jqXhr) {
                    _this2.getAllFail(jqXhr);
                });
            };
        }
    }, {
        key: 'getEvents',
        value: function getEvents() {
            var _this3 = this;

            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: '/list/eventslistings'
                }).done(function (data) {
                    _this3.getEventsSuccess(data);
                }).fail(function (jqXhr) {
                    _this3.getEventsFail(jqXhr);
                });
            };
        }
    }, {
        key: 'getGlance',
        value: function getGlance() {
            var _this4 = this;

            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: '/list/glancelistings'
                }).done(function (data) {
                    _this4.getGlanceSuccess(data);
                }).fail(function (jqXhr) {
                    _this4.getGlanceFail(jqXhr);
                });
            };
        }
    }, {
        key: 'getMylist',
        value: function getMylist() {
            var _this5 = this;

            console.log('Getting mylist');
            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: '/auth/getmylist'
                }).done(function (data) {
                    console.log('Got mylist');
                    _this5.getMylistSuccess(data);
                    return true;
                }).fail(function (jqXhr) {
                    console.log('Failed to get mylist');
                    _this5.getMylistFailure(jqXhr);
                    return true;
                });
            };
        }
    }]);

    return ListActions;
}();

exports.default = _alt2.default.createActions(ListActions);

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

__webpack_require__(32);

var _ListActions = __webpack_require__(2);

var _ListActions2 = _interopRequireDefault(_ListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthActions = function () {
  function AuthActions() {
    _classCallCheck(this, AuthActions);

    this.generateActions('sessionCheckFailure', 'sessionCheckSuccess', 'addToMyListSuccess', 'addToMyListFailure', 'loginAttempt', 'loginFailure', 'loginSuccess', 'logoutSuccess', 'logoutFailure', 'registerAttempt', 'registerSuccess', 'registerFailure');
  }

  _createClass(AuthActions, [{
    key: 'attemptLogIn',
    value: async function attemptLogIn(userData) {
      var _this = this;

      this.loginAttempt();

      console.log('Login attempt');

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

      console.log('Register attempt');

      await fetch('/auth/signup', {
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
    key: 'checkSession',
    value: async function checkSession() {
      var _this4 = this;

      // contact the API
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
          _this4.sessionCheckSuccess(json);
          return true;
        } else {
          _this4.sessionCheckFailure(error);
          return true;
        }
      }).catch(function (error) {
        _this4.sessionCheckFailure(error);
        return true;
      });
    }
  }, {
    key: 'addToUserList',
    value: async function addToUserList(listing) {
      var _this5 = this;

      var listData = { listingID: listing._id };

      //Upload the ID to the user profile
      await fetch('/auth/addtolist', {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(listData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      }).then(function (json) {
        _this5.addToMyListSuccess(json);
        return true;
      }).catch(function (error) {
        _this5.addToMyListFailure(error);
        return true;
      });
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

var _date = __webpack_require__(14);

var _date2 = _interopRequireDefault(_date);

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
            if (this.props.event !== true && this.props.end !== '') {
                end = _react2.default.createElement(
                    'span',
                    null,
                    'to ',
                    _react2.default.createElement(_date2.default, { date: this.props.end })
                );
            }
            var id = this.props._id;
            // Check if the listing is in mylist
            var mylistIndex = 0;
            if (this.props.mylist) {
                mylistIndex = this.props.mylist.filter(function (v) {
                    return v._id === id;
                }).length;
            }

            return _react2.default.createElement(
                'div',
                { className: mylistIndex > 0 ? 'listing selected' : 'listing notselected', id: this.props._id },
                _react2.default.createElement(
                    'div',
                    { className: 'listingAdd' },
                    _react2.default.createElement('div', { className: 'addButton', onClick: function onClick(e) {
                            return _this2.addToList(e, _this2.props);
                        } })
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
                            ' ',
                            this.props.venue._id !== '' && ' at ',
                            _react2.default.createElement(
                                'span',
                                { className: 'venueName' },
                                this.props.venue.name
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            this.props.start !== '' && _react2.default.createElement(_date2.default, { date: this.props.start }),
                            ' ',
                            end,
                            ' '
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'moreInfo' },
                        _react2.default.createElement(
                            'p',
                            null,
                            this.props.venue.address,
                            this.props.venue.address !== '' && this.props.venue.city !== '' && ', ',
                            this.props.venue.city
                        ),
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
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
    },

    saveListing: function saveListing(newListing) {

        var eventString = JSON.stringify(newListing);

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: eventString,
            url: '/list/add',
            dataType: 'json',
            contentType: "application/json; charset=utf-8"
        }).done(function (response) {

            // Check for successful (blank) response
            if (response.msg === '') {

                console.log('Success');
            } else {
                console.log(response);
                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg.message);
            }
        });
    }
};

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

var _alt = __webpack_require__(10);

var _alt2 = _interopRequireDefault(_alt);

var _ListActions = __webpack_require__(2);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListStore = function () {
    function ListStore() {
        _classCallCheck(this, ListStore);

        this.bindActions(_ListActions2.default);
        this.bindActions(_AuthActions2.default);
        //List states
        this.currentListings = [];
        this.allListings = [];
        this.eventsListings = [];
        this.glanceListings = [];
        this.mylist = [];
        // Auth states
        this.user = {};
        this.user.name = '';
        this.user.id = '';
        this.user.isLoggedIn = false;
        this.user.isLoggingIn = false;
        this.user.email = '';
    }

    //List Reducers

    _createClass(ListStore, [{
        key: 'onGetCurrentSuccess',
        value: function onGetCurrentSuccess(data) {
            this.currentListings = data;
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
            // Handle multiple response formats, fallback to HTTP status code number.
            toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }, {
        key: 'onGetAllFail',
        value: function onGetAllFail(jqXhr) {
            // Handle multiple response formats, fallback to HTTP status code number.
            toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }, {
        key: 'onGetEventsFail',
        value: function onGetEventsFail(jqXhr) {
            // Handle multiple response formats, fallback to HTTP status code number.
            toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }, {
        key: 'onGetGlanceFail',
        value: function onGetGlanceFail(jqXhr) {
            // Handle multiple response formats, fallback to HTTP status code number.
            toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
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
            console.log(error);
            this.user.name = '';
            this.user.id = '';
            this.user.isLoggedIn = false;
            this.user.isLoggingIn = false;
            this.user.email = '';
        }
    }, {
        key: 'onLoginSuccess',
        value: function onLoginSuccess(action) {
            this.user.name = action.local.name;
            this.user.id = action._id;
            this.user.isLoggedIn = true;
            this.user.isLoggingIn = false;
            this.user.email = action.local.email;
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
            this.user.email = action.local.email;
            this.isRegistering = false;
            this.user.isLoggedIn = true;
        }

        //Facebook Login

    }, {
        key: 'onFacebookLogin',
        value: function onFacebookLogin(user) {
            console.log("Logged in via Facebook");
            this.user.name = user.facebook.name;
            this.user.id = user._id;
            this.user.isLoggedIn = true;
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
            this.mylist = [];
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
            this.user.id = action._id;
            this.user.isLoggedIn = true;
            this.user.isLoggingIn = false;
            if (action.local) {
                this.user.name = action.local.name;
            }
            if (action.facebook) {
                this.user.name = action.facebook.name;
            }
        }

        // ADD TO MYLIST

    }, {
        key: 'onAddToMyListSuccess',
        value: function onAddToMyListSuccess(response) {
            this.mylist = response;
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
            this.mylist = data;
        }
    }, {
        key: 'onGetMylistFailure',
        value: function onGetMylistFailure(jqXhr) {
            // Handle multiple response formats, fallback to HTTP status code number.
            toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }]);

    return ListStore;
}();

exports.default = _alt2.default.createStore(ListStore);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = __webpack_require__(31);

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7);
var bcrypt = __webpack_require__(12); // encripts password

// Create the Listings table ==================================

var userSchema = mongoose.Schema({
    local: {
        name: String,
        username: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    mylist: [String]
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(11);

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
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-toggle-button");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dates");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSelect = __webpack_require__(62);

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

            return _react2.default.createElement(_reactSelect.AsyncCreatable, {
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var express = __webpack_require__(5);
var path = __webpack_require__(20);
var favicon = __webpack_require__(21);
var logger = __webpack_require__(22);
var cookieParser = __webpack_require__(23);
var bodyParser = __webpack_require__(24);
var http = __webpack_require__(25);
var debug = __webpack_require__(26)('artcritical-list:server');

var expressValidator = __webpack_require__(27);

//Authentification
var passport = __webpack_require__(9);
var flash = __webpack_require__(28);
var session = __webpack_require__(29);
var bcrypt = __webpack_require__(12); // encripts password

// Get the User model
__webpack_require__(30)(passport);

var app = express();

// MongoDB
var mongoose = __webpack_require__(7);

var url = process.env.MONGOLAB_URI;

mongoose.connect(url, { useMongoClient: true });

console.log('Connecting to database...');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('We are in!');
});

// Import the Mongoose models
var List = __webpack_require__(35);
var Venue = __webpack_require__(36);
var User = __webpack_require__(13);

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
app.use(session({ secret: 'woot', cookie: { maxAge: maxAge } }));

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
  next();
});

var index = __webpack_require__(37);
var venues = __webpack_require__(68);
var listings = __webpack_require__(69);
var auth = __webpack_require__(70);

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
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// config/passport.js

// load all the things we need
var LocalStrategy = __webpack_require__(33).Strategy;
var FacebookStrategy = __webpack_require__(34).Strategy;


// load up the user model
var User = __webpack_require__(13);

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
        User.findById(id, function (err, user) {
            done(err, user);
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
            User.findOne({ 'local.username': username }, function (err, user) {
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
        User.findOne({ 'local.username': username }, function (err, user) {
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
            console.log('local-login: Signed In');
            return done(null, user);
        });
    }));

    passport.use(new FacebookStrategy({
        clientID: "1154923567943109",
        clientSecret: "9ab1f837eabcc53aafadc9657eb65f19",
        callbackURL: "http://localhost:5000/auth/facebook/callback"
    }, function (accessToken, refreshToken, profile, done) {
        //check user table for anyone with a facebook ID of profile.id
        console.log("Finding Facebook user");

        User.findOne({
            'facebook.id': profile.id
        }, function (err, user) {
            if (err) {
                console.log("Error", err);
                return done(err);
            }
            //No user was found
            if (!user) {
                console.log("No found user");
                console.log(profile);
                user = new User({
                    name: profile.displayName,
                    provider: 'facebook',
                    facebook: profile._json
                });
                console.log("New user", user);
                user.save(function (err) {
                    if (err) console.log(err);
                    _AuthActions2.default.facebookLogin(user);
                    return done(err, user);
                });
            } else {
                console.log("Found user");
                //found user. Return
                _AuthActions2.default.facebookLogin(user);
                return done(err, user);
            }
        });
    }));
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("alt");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7);

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
    event: Boolean
});

//compile the model

module.exports = mongoose.model('List', listingSchema);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(7);

// Create the Listings table ==================================

var venueSchema = mongoose.Schema({
    name: String,
    website: String,
    neighborhood: Number
});

//compile the model

module.exports = mongoose.model('Venue', venueSchema);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(38);

var _reactRouter = __webpack_require__(1);

var _routes = __webpack_require__(39);

var _routes2 = _interopRequireDefault(_routes);

var _ErrorPage = __webpack_require__(18);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(5);
var router = express.Router();
var JSX = __webpack_require__(66).install();
var passport = __webpack_require__(9);
// we'll use this to render our app to an html string

// and these to match the url to routes and then render

var history = __webpack_require__(67);
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
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _layout = __webpack_require__(40);

var _layout2 = _interopRequireDefault(_layout);

var _IndexPage = __webpack_require__(41);

var _IndexPage2 = _interopRequireDefault(_IndexPage);

var _CurrentPage = __webpack_require__(42);

var _CurrentPage2 = _interopRequireDefault(_CurrentPage);

var _GlancePage = __webpack_require__(43);

var _GlancePage2 = _interopRequireDefault(_GlancePage);

var _EventsPage = __webpack_require__(47);

var _EventsPage2 = _interopRequireDefault(_EventsPage);

var _SignUpPage = __webpack_require__(48);

var _SignUpPage2 = _interopRequireDefault(_SignUpPage);

var _LogInPage = __webpack_require__(51);

var _LogInPage2 = _interopRequireDefault(_LogInPage);

var _myListPage = __webpack_require__(55);

var _myListPage2 = _interopRequireDefault(_myListPage);

var _AdminPage = __webpack_require__(57);

var _AdminPage2 = _interopRequireDefault(_AdminPage);

var _NewListing = __webpack_require__(58);

var _NewListing2 = _interopRequireDefault(_NewListing);

var _EditListings = __webpack_require__(63);

var _EditListings2 = _interopRequireDefault(_EditListings);

var _Account = __webpack_require__(65);

var _Account2 = _interopRequireDefault(_Account);

var _ErrorPage = __webpack_require__(18);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Signin Components
var routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _layout2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _IndexPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'current', component: _CurrentPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'ataglance', component: _GlancePage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'events', component: _EventsPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'signup', component: _SignUpPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'mylist', component: _myListPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _LogInPage2.default }),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: 'account', component: _AdminPage2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Account2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'edit', component: _EditListings2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'newlisting', component: _NewListing2.default })
  ),
  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _ErrorPage2.default })
);
// Error Components

//Admin Components
exports.default = routes;

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

var _reactRouter = __webpack_require__(1);

var _ListStore = __webpack_require__(8);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ListActions = __webpack_require__(2);

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
            // Get my list
            _ListActions2.default.getMylist();
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
                        ' | ',
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
                    null,
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Welcome to the List'
                    ),
                    _react2.default.createElement(
                        _reactRouter.IndexLink,
                        { to: '/', activeClassName: 'active' },
                        'All'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/current', activeClassName: 'active' },
                        'Current'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/ataglance', activeClassName: 'active' },
                        'At a Glance'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/events', activeClassName: 'active' },
                        'Events'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/mylist', activeClassName: 'active' },
                        'my list (',
                        this.state.mylist.length,
                        ')'
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _ListActions = __webpack_require__(2);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _displayActions = __webpack_require__(6);

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
                                mylist: mylist,
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

var _reactRouter = __webpack_require__(1);

var _ListStore = __webpack_require__(8);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _ListActions = __webpack_require__(2);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _displayActions = __webpack_require__(6);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var CurrentPage = function (_React$Component) {
    _inherits(CurrentPage, _React$Component);

    function CurrentPage(props) {
        _classCallCheck(this, CurrentPage);

        var _this = _possibleConstructorReturn(this, (CurrentPage.__proto__ || Object.getPrototypeOf(CurrentPage)).call(this, props));

        _this.state = _ListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(CurrentPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ListStore2.default.listen(this.onChange);
            _ListActions2.default.getCurrent();
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
            var _this2 = this;

            var nh = '';
            var thelist = this.state.currentListings.map(function (listing) {
                var newNh = listing.venue.neighborhood;
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
                        _react2.default.createElement(_listing2.default, _extends({}, listing, { mylist: _this2.props.mylist }))
                    );
                } else {
                    return _react2.default.createElement(_listing2.default, _extends({}, listing, { key: listing._id, mylist: _this2.props.mylist }));
                }
            });

            return _react2.default.createElement(
                'div',
                { className: 'home' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Current'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'listingsWrap' },
                    thelist
                )
            );
        }
    }]);

    return CurrentPage;
}(_react2.default.Component);

exports.default = CurrentPage;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _ListStore = __webpack_require__(8);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _ListActions = __webpack_require__(2);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _daypage = __webpack_require__(44);

var _daypage2 = _interopRequireDefault(_daypage);

var _tabs = __webpack_require__(45);

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

        var _this = _possibleConstructorReturn(this, (GlancePage.__proto__ || Object.getPrototypeOf(GlancePage)).call(this, props));

        _this.state = _ListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(GlancePage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ListStore2.default.listen(this.onChange);
            _ListActions2.default.getGlance();
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

            var thelist = this.state.glanceListings;

            var days = [];
            var today = new Date();
            today.setHours(0, 0, 0, 0);

            for (var i = 0; i < 7; i++) {
                var d = new Date();
                d.setHours(0, 0, 0, 0);
                d.setDate(today.getDate() + i);
                days.push(_react2.default.createElement(_daypage2.default, { key: d, glanceListings: thelist, mylist: this.props.mylist, label: d }));
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(11);

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

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
        key: 'render',
        value: function render() {
            var _this2 = this;

            var date = this.props.label.toISOString();

            var openings = [];
            var events = [];
            var closings = [];

            var thelist = this.props.glanceListings.map(function (listing) {
                // Check if it is an event
                if (listing.event == true) {
                    // it IS an event

                    if (listing.start == date) {
                        events.push(_react2.default.createElement(_listing2.default, _extends({}, listing, { key: listing._id, mylist: _this2.props.mylist })));
                    }
                } else {
                    //not an event

                    //Check if it starts on this day
                    if (listing.start == date) {
                        openings.push(_react2.default.createElement(_listing2.default, _extends({}, listing, { key: listing._id, mylist: _this2.props.mylist })));
                    }
                    //Check if it ends on this day
                    if (listing.end == date) {
                        closings.push(_react2.default.createElement(_listing2.default, _extends({}, listing, { key: listing._id, mylist: _this2.props.mylist })));
                    }
                }
            });

            return _react2.default.createElement(
                'div',
                { className: 'day' },
                _react2.default.createElement(
                    'div',
                    { className: 'featuredSection' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Featured item'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'listingsWrap' },
                    openings.length > 0 && _react2.default.createElement(
                        'h3',
                        null,
                        'Openings'
                    ),
                    openings,
                    events.length > 0 && _react2.default.createElement(
                        'h3',
                        null,
                        'Events'
                    ),
                    events,
                    closings.length > 0 && _react2.default.createElement(
                        'h3',
                        null,
                        'Closing'
                    ),
                    closings,
                    closings.length + events.length + openings.length == 0 && _react2.default.createElement(
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(11);

var _propTypes = __webpack_require__(46);

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
                        _react2.default.createElement(
                            _reactIntl.IntlProvider,
                            { locale: 'en' },
                            _react2.default.createElement(_reactIntl.FormattedDate, { value: child.props.label, weekday: 'long', day: 'numeric', month: 'short' })
                        )
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
/* 46 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _ListStore = __webpack_require__(8);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _ListActions = __webpack_require__(2);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _date = __webpack_require__(14);

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENTS


var EventsPage = function (_React$Component) {
    _inherits(EventsPage, _React$Component);

    function EventsPage(props) {
        _classCallCheck(this, EventsPage);

        var _this = _possibleConstructorReturn(this, (EventsPage.__proto__ || Object.getPrototypeOf(EventsPage)).call(this, props));

        _this.state = _ListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(EventsPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ListStore2.default.listen(this.onChange);
            _ListActions2.default.getEvents();
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
            var _this2 = this;

            var oldDate = void 0;
            var thelist = this.state.eventsListings.map(function (listing) {
                var newDate = listing.start;
                if (newDate !== oldDate) {
                    oldDate = newDate;
                    return _react2.default.createElement(
                        'div',
                        { key: listing._id },
                        _react2.default.createElement(
                            'h2',
                            null,
                            _react2.default.createElement(_date2.default, { date: newDate })
                        ),
                        _react2.default.createElement(_listing2.default, _extends({}, listing, { mylist: _this2.props.mylist }))
                    );
                } else {
                    return _react2.default.createElement(_listing2.default, _extends({}, listing, { key: listing._id, mylist: _this2.props.mylist }));
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
                _react2.default.createElement(
                    'div',
                    { className: 'listingsWrap' },
                    thelist
                )
            );
        }
    }]);

    return EventsPage;
}(_react2.default.Component);

exports.default = EventsPage;

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

var _reactRouter = __webpack_require__(1);

var _SignUpForm = __webpack_require__(49);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(6);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _reactToggleButton = __webpack_require__(15);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _validator = __webpack_require__(50);

var _validator2 = _interopRequireDefault(_validator);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

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
          _react2.default.createElement('input', { type: 'text',
            name: 'name',
            value: this.state.name,
            className: this._getInputStyleName(this.state.isValid.name),
            placeholder: 'Name',
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
          _react2.default.createElement('input', { type: 'text',
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
          _react2.default.createElement('input', { type: 'password',
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
          _react2.default.createElement('input', { type: 'password',
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
          _react2.default.createElement('input', { type: 'submit', value: 'Submit', onClick: this.handleSaveClick })
        )
      );
    }
  }]);

  return SignUpForm;
}(_react2.default.Component);

;

SignUpForm.contextTypes = {
  router: _react2.default.PropTypes.object.isRequired
};

exports.default = SignUpForm;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ListActions = __webpack_require__(2);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactRouterDom = __webpack_require__(52);

var _LogInForm = __webpack_require__(53);

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
                    _ListActions2.default.getMylist();
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
                    _react2.default.createElement(_LogInForm2.default, { loginFunction: _AuthActions2.default.attemptLogIn }),
                    _react2.default.createElement(
                        'a',
                        { href: '/auth/facebook' },
                        'Login with Facebook'
                    )
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
    router: _react2.default.PropTypes.object.isRequired
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogInForm = function (_React$Component) {
    _inherits(LogInForm, _React$Component);

    function LogInForm(props) {
        _classCallCheck(this, LogInForm);

        var _this = _possibleConstructorReturn(this, (LogInForm.__proto__ || Object.getPrototypeOf(LogInForm)).call(this, props));

        _this.state = {
            username: '',
            password: ''
        };

        // Function binding
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
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

        // Add the listing to the database

    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            var loginFunction = this.props.loginFunction;

            var formData = this.state;
            loginFunction(formData);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
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
                    })
                ),
                _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
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
                    })
                ),
                _react2.default.createElement(
                    _reactstrap.Button,
                    { onClick: this.handleSubmit },
                    'Log In'
                )
            );
        }
    }]);

    return LogInForm;
}(_react2.default.Component);

exports.default = LogInForm;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

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

var _myList = __webpack_require__(56);

var _myList2 = _interopRequireDefault(_myList);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
                    'Please register to create your own list'
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/signup', activeClassName: 'active' },
                    'Register'
                )
            );
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

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyList = function (_React$Component) {
    _inherits(MyList, _React$Component);

    function MyList(props) {
        _classCallCheck(this, MyList);

        return _possibleConstructorReturn(this, (MyList.__proto__ || Object.getPrototypeOf(MyList)).call(this, props));
    }

    _createClass(MyList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'myList' },
                _react2.default.createElement(
                    'p',
                    null,
                    'Items in your list: ',
                    _react2.default.createElement(
                        'strong',
                        null,
                        this.props.mylist.length
                    )
                ),
                this.props.mylist.map(function (listing) {
                    return _react2.default.createElement(_listing2.default, _extends({}, listing, { key: listing._id, mylist: _this2.props.mylist }));
                })
            );
        }
    }]);

    return MyList;
}(_react2.default.Component);

exports.default = MyList;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
                null,
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
                        { to: '/account/edit', activeClassName: 'active' },
                        'Edit Listing'
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
                    'p',
                    null,
                    'Please login to have access to your account'
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/login', activeClassName: 'active' },
                    'Login'
                )
            );

            return _react2.default.createElement(
                'div',
                { className: 'admin' },
                adminRender
            );
        }
    }]);

    return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;

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

var _ListingForm = __webpack_require__(59);

var _ListingForm2 = _interopRequireDefault(_ListingForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewListing = function (_React$Component) {
    _inherits(NewListing, _React$Component);

    function NewListing() {
        _classCallCheck(this, NewListing);

        return _possibleConstructorReturn(this, (NewListing.__proto__ || Object.getPrototypeOf(NewListing)).apply(this, arguments));
    }

    _createClass(NewListing, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'new' },
                _react2.default.createElement(_ListingForm2.default, null)
            );
        }
    }]);

    return NewListing;
}(_react2.default.Component);

exports.default = NewListing;

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

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _formDateRange = __webpack_require__(60);

var _formDateRange2 = _interopRequireDefault(_formDateRange);

var _formDateSingle = __webpack_require__(61);

var _formDateSingle2 = _interopRequireDefault(_formDateSingle);

var _formSelect = __webpack_require__(17);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _displayActions = __webpack_require__(6);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _reactToggleButton = __webpack_require__(15);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListingForm = function (_React$Component) {
    _inherits(ListingForm, _React$Component);

    function ListingForm(props) {
        _classCallCheck(this, ListingForm);

        var _this = _possibleConstructorReturn(this, (ListingForm.__proto__ || Object.getPrototypeOf(ListingForm)).call(this, props));

        _this.state = {
            name: '',
            startDate: '',
            endDate: '',
            venue: { label: '', value: '' },
            description: '',
            venueInfo: { address: '' },
            event: false
        };

        _this.onDatesChange = _this.onDatesChange.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.resetListState = _this.resetListState.bind(_this);
        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(ListingForm, [{
        key: 'resetListState',
        value: function resetListState() {
            this.setState({
                name: '',
                startDate: '',
                endDate: '',
                venue: { label: '', value: '' },
                description: '',
                venueInfo: {}
            });
        }

        //Update values of inputs

    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var target = event.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;
            this.setState(_defineProperty({}, name, value));
        }

        //Search as the user types in select box

    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            var _this2 = this;

            this.setState({
                venue: {
                    label: data.label,
                    value: data.value
                }
            });
            if (data.label == data.value) {
                // Create a new venue

            } else {
                //Fetch all the venue info
                return fetch('/venues/getinfo/' + data.value).then(function (response) {
                    return response.json();
                }).then(function (json) {
                    _this2.setState({
                        venueInfo: json[0]
                    });
                });
            }
        }

        // Add the listing to the database

    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var newEvent = {
                name: this.state.name,
                start: this.state.startDate,
                end: this.state.endDate,
                description: this.state.description,
                neighborhood: this.state.venueInfo.neighborhood,
                venue: this.state.venue.value
            };
            _displayActions2.default.saveListing(newEvent);
            this.resetListState();
            event.preventDefault();
        }

        //Handle change of Dates

    }, {
        key: 'onDatesChange',
        value: function onDatesChange(value) {
            this.setState(value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            //how ot get option for select element
            var getOptions = function getOptions(input) {
                return fetch('/venues/find/' + input).then(function (response) {
                    return response.json();
                }).then(function (json) {
                    return { options: json };
                });
            };

            var listing = {
                name: this.state.name,
                start: this.state.startDate,
                end: this.state.endDate,
                venue: {
                    _id: this.state.venue.value,
                    name: this.state.venue.label,
                    address: this.state.venueInfo.address
                },
                description: this.state.description,
                neighborhood: this.state.venueInfo.neighborhood,
                event: this.state.event
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { id: 'newlistingForm' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'New Event'
                    ),
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            'label',
                            null,
                            'Name'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement('input', { name: 'name', placeholder: 'Event name', type: 'text', value: this.state.name, onChange: this.handleChange })
                        ),
                        _react2.default.createElement(
                            'label',
                            null,
                            'Venue'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement(_formSelect2.default, { value: this.state.venue, handleSelectChange: this.handleSelectChange, getOptions: getOptions })
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
                                value: this.state.event || false,
                                onToggle: function onToggle(value) {
                                    _this3.setState({
                                        event: !value
                                    });
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
                            this.state.event ? //If an event
                            _react2.default.createElement(_formDateSingle2.default, { startDate: this.state.startDate, endDate: this.state.endDate, onDatesChange: this.onDatesChange }) : // If not an event
                            _react2.default.createElement(_formDateRange2.default, { startDate: this.state.startDate, endDate: this.state.endDate, onDatesChange: this.onDatesChange })
                        ),
                        _react2.default.createElement(
                            'label',
                            null,
                            'Description'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'formSection' },
                            _react2.default.createElement('textarea', { name: 'description', type: 'text', value: this.state.description, onChange: this.handleChange })
                        ),
                        _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'newlistingDemo' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Listing Preview'
                    ),
                    _react2.default.createElement(_listing2.default, listing)
                )
            );
        }
    }]);

    return ListingForm;
}(_react2.default.Component);

exports.default = ListingForm;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDates = __webpack_require__(16);

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
            focusedInput: ''
        };
        return _this;
    }

    _createClass(DateRange, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_reactDates.DateRangePicker, {
                startDate: this.props.startDate,
                endDate: this.props.endDate,
                isOutsideRange: function isOutsideRange() {
                    return false;
                },
                onDatesChange: function onDatesChange(_ref) {
                    var startDate = _ref.startDate,
                        endDate = _ref.endDate;
                    return _this2.props.onDatesChange({ startDate: startDate, endDate: endDate });
                } // PropTypes.func.isRequired,
                , focusedInput: this.state.focusedInput // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                , onFocusChange: function onFocusChange(focusedInput) {
                    return _this2.setState({ focusedInput: focusedInput });
                } // PropTypes.func.isRequired,
            });
        }
    }]);

    return DateRange;
}(_react2.default.Component);

exports.default = DateRange;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDates = __webpack_require__(16);

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
                date: this.props.startDate,
                onDateChange: function onDateChange(startDate) {
                    return _this2.props.onDatesChange(startDate);
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
/* 62 */
/***/ (function(module, exports) {

module.exports = require("react-select");

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

var _ListingEdit = __webpack_require__(64);

var _ListingEdit2 = _interopRequireDefault(_ListingEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexPage = function (_React$Component) {
    _inherits(IndexPage, _React$Component);

    function IndexPage() {
        _classCallCheck(this, IndexPage);

        return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
    }

    _createClass(IndexPage, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'edit' },
                _react2.default.createElement(
                    'h3',
                    null,
                    'Edit Listings'
                ),
                _react2.default.createElement(_ListingEdit2.default, null)
            );
        }
    }]);

    return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;

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

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _formSelect = __webpack_require__(17);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _displayActions = __webpack_require__(6);

var _displayActions2 = _interopRequireDefault(_displayActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListingEdit = function (_React$Component) {
    _inherits(ListingEdit, _React$Component);

    function ListingEdit(props) {
        _classCallCheck(this, ListingEdit);

        var _this = _possibleConstructorReturn(this, (ListingEdit.__proto__ || Object.getPrototypeOf(ListingEdit)).call(this, props));

        _this.state = {
            listing: "",
            listingInfo: {
                _id: '',
                venue: {}
            }
        };

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
        return _this;
    }

    // Add the listing to the database


    _createClass(ListingEdit, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {}
    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            var _this2 = this;

            this.setState({
                listing: {
                    label: data.label,
                    value: data.value
                }
            });
            console.log(data.value);
            //Fetch all the venue info
            return fetch('/list/getinfo/' + data.value).then(function (response) {
                return response.json();
            }).then(function (json) {
                _this2.setState({
                    listingInfo: json
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {

            //how ot get option for select element
            var getOptions = function getOptions(input) {
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
                    { id: 'ListingList' },
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(_formSelect2.default, { value: this.state.listing, handleSelectChange: this.handleSelectChange, getOptions: getOptions }),
                        _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'ListingInfo' },
                    _react2.default.createElement(_listing2.default, this.state.listingInfo)
                )
            );
        }
    }]);

    return ListingEdit;
}(_react2.default.Component);

exports.default = ListingEdit;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexPage = function (_React$Component) {
    _inherits(IndexPage, _React$Component);

    function IndexPage(props) {
        _classCallCheck(this, IndexPage);

        return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call(this, props));
    }

    _createClass(IndexPage, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "account" },
                _react2.default.createElement(
                    "h3",
                    null,
                    "Your Account"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Name: ",
                    this.props.user.name
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Email: ",
                    this.props.user.username
                )
            );
        }
    }]);

    return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("node-jsx");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(5);
var router = express.Router();

/* GET All Venues */
router.get('/', function (req, res, next) {
    var Venue = req.venue;

    Venue.find().sort('name').exec(function (e, docs) {
        res.json(docs);
    });
});

/* GET  a set of venue */
router.get('/find/:venue_id', function (req, res, next) {
    var Venue = req.venue;

    console.log('Looking for venue ' + req.params.venue_id);

    var regexp = new RegExp("^" + req.params.venue_id, "i");
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

/* GET info for one venue */
router.get('/getinfo/:venue_id', function (req, res, next) {
    var Venue = req.venue;

    Venue.find({ _id: req.params.venue_id }, function (err, venue) {
        if (err) res.send(err);

        res.json(venue);
    });
});

/*
 * POST a new venue.
 */
router.post('/add', function (req, res) {
    var Venue = req.venue;

    // define a new entry
    var newvenue = new Venue(req.body);

    //newvenue.markModified('coordinates');

    //Save this new entry
    newvenue.save(function (err, newvenue) {
        res.send(err === null ? {
            msg: ''
        } : {
            msg: err
        });
    });
});

module.exports = router;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(5);
var router = express.Router();

/*
 * GET ALL listings ===================
 */
router.get('/alllistings', function (req, res) {
    var List = req.list;
    var Venue = req.venue;

    console.log("Getting all listings");

    List.find().sort('neighborhood').limit(50).populate('venue').exec(function (e, docs) {
        res.json(docs);
    });
});

/*
 * GET currentlist to display.
 */
router.get('/currentlistings', function (req, res) {
    var List = req.list,
        Venue = req.venue;

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    console.log('Searching for current events...');

    List.find({ start: { $lt: today } }).limit(50).sort('neighborhood').populate('venue').exec(function (e, docs) {
        res.json(docs);
    });
});

/*
 * GET GLANCE list to display.
 */
router.get('/glancelistings', function (req, res) {
    var List = req.list,
        Venue = req.venue;

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var inaWeek = new Date();
    inaWeek.setDate(inaWeek.getDate() + 7);
    inaWeek.setHours(0, 0, 0, 0);

    console.log('Searching for this weeks events...');

    List.find({ $or: [{ start: { $gte: today, $lt: inaWeek } }, { end: { $gte: today, $lt: inaWeek } }] }, {}).sort('neighborhood').populate('venue').exec(function (e, docs) {
        res.json(docs);
    });
});

/*
 * GET EVENTS list to display.
 */
router.get('/eventslistings', function (req, res) {
    var List = req.list,
        Venue = req.venue;

    //Find today's date
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    console.log('Searching for the next events...');

    List.find({ $and: [{ start: { $gte: today } }, { event: true }] }, {}).sort('start').populate('venue').exec(function (e, docs) {
        res.json(docs);
    });
});

/* GET ONE listing */
router.get('/find/:listing_id', function (req, res, next) {
    var List = req.list;

    console.log("Getting one listing");

    var regexp = new RegExp("^" + req.params.listing_id, "i");
    List.find({ name: regexp }, function (err, listing) {
        if (err) res.send(err);
        var results = [];
        listing.map(function (thelisting) {
            results.push({
                value: thelisting._id,
                label: thelisting.name
            });
        });

        res.json(results);
    });
});

/* GET ONE listing */
router.get('/getinfo/:listing_id', function (req, res, next) {
    var List = req.list;

    List.findOne({ _id: req.params.listing_id }).populate('venue').exec(function (e, docs) {
        if (e) res.send(e);

        res.json(docs);
    });
});

/*
 * POST a new listing.
 */
router.post('/add', function (req, res) {
    var List = req.list;

    console.log("Adding one listing");

    // define a new entry
    var newlisting = new List(req.body);

    //newvenue.markModified('coordinates');

    //Save this new entry
    newlisting.save(function (err, newlisting) {
        res.send(err === null ? {
            msg: ''
        } : {
            msg: err
        });
    });
});

/*
 * UPDATE a listing.
 */
router.post('/update', function (req, res) {
    var List = req.list;

    console.log("Update one listing");

    // define a new entry
    var thelisting = new List(req.body);

    List.update({ _id: thelisting._id }, { $set: thelisting }, function (err, newlisting) {
        console.log(newlisting);
        res.send(err === null ? {
            msg: ''
        } : {
            msg: err
        });
    });
});

/*
 * DELETE a listing.
 */
router.post('/delete/:listing_id', function (req, res) {
    var List = req.list;

    console.log("Getting one listing");

    var listingToDelete = req.params.listing_id;
    List.remove({ '_id': listingToDelete }, function (err) {
        res.send(err === null ? { msg: '' } : { msg: 'error: ' + err });
    });
});

module.exports = router;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(5);
var router = express.Router();
var passport = __webpack_require__(9);

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

router.post('/signup', async function (req, res) {
    passport.authenticate('local-signup')(req, res, function () {
        console.log('Registering');
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
        var listingID = req.body.listingID;

        Userlist.findById(userID, function (err, user) {

            if (err) return handleError(err);

            // Check if listing is already in the list
            var IndexOfListing = user.mylist.indexOf(listingID);
            if (IndexOfListing == -1) {

                //add listing to mylist
                user.mylist.push(listingID);
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
        }).sort('neighborhood').populate('venue').exec(function (e, docs) {
            res.json(docs);
        });
    } else {
        var docs = [];
        res.json(docs);
    }
});

// GET to check session
router.get('/checksession', function (req, res) {

    if (req.user) {
        return res.send(JSON.stringify(req.user));
    }
    return res.send(JSON.stringify({}));
});

/*
 * GET Current User Info ===================
 */
router.get('/user', function (req, res) {
    var User = req.user;

    console.log(User);
});

module.exports = router;

/***/ })
/******/ ]);
//# sourceMappingURL=server.bundle.js.map