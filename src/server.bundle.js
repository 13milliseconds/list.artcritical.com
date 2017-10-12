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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
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

var _alt = __webpack_require__(8);

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var offset = 0;

var ListActions = function () {
    function ListActions() {
        _classCallCheck(this, ListActions);

        this.generateActions('getCurrentAttempt', 'getCurrentSuccess', 'getCurrentFail', 'getAllSuccess', 'getAllFail', 'getEventsSuccess', 'getEventsFail', 'getGlanceSuccess', 'getGlanceFail', 'getMylistSuccess', 'getMylistFailure', 'getListingInfoSuccess', 'getListingInfoFailure', 'getVenueInfoSuccess', 'getVenueInfoFailure', 'saveListingSuccess', 'saveListingFailure', 'updateListingSuccess', 'updateListingFailure', 'updateFeatureSuccess', 'updateFeatureFailure', 'featureLoadSuccess', 'featureLoadFailure', 'deleteListingSuccess', 'deleteListingFailure');
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
                }
            }).catch(function (jqXhr) {
                _this.getCurrentFail(jqXhr);
            });
        }
    }, {
        key: 'getAll',
        value: function getAll() {
            var _this2 = this;

            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: process.env.BASE_URI + '/list/alllistings'
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
                    url: process.env.BASE_URI + '/list/eventslistings'
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
                $.ajax({
                    url: process.env.BASE_URI + '/list/glancelistings'
                }).done(function (data) {
                    _this4.getGlanceSuccess(data);
                }).fail(function (jqXhr) {
                    _this4.getGlanceFail(jqXhr);
                });
            };
        }
    }, {
        key: 'listingEditReset',
        value: function listingEditReset() {
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
        value: function featureInfoChange(event) {
            return event;
        }
    }, {
        key: 'saveListing',
        value: async function saveListing(newListing) {
            var _this5 = this;

            console.log('saveListing: ', newListing);

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
                _this5.saveListingSuccess(json);
                return true;
            }).catch(function (error) {
                _this5.saveListingFailure(error);
            });
        }
    }, {
        key: 'deleteListing',
        value: async function deleteListing(oldListing) {
            var _this6 = this;

            await fetch(process.env.BASE_URI + '/list/delete/' + oldListing).then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            }).then(function (json) {
                _this6.deleteListingSuccess(json);
                return true;
            }).catch(function (error) {
                _this6.deleteListingFailure(error);
            });
        }
    }, {
        key: 'updateListing',
        value: async function updateListing(newInfo) {
            var _this7 = this;

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
                _this7.updateListingSuccess(json);
                return true;
            }).catch(function (error) {
                _this7.updateListingFailure(error);
            });
        }
    }, {
        key: 'getListingInfo',
        value: function getListingInfo(id) {
            var _this8 = this;

            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: process.env.BASE_URI + '/list/getinfo/' + id
                }).done(function (data) {
                    _this8.getListingInfoSuccess(data);
                }).fail(function (jqXhr) {
                    _this8.getListingInfoFailure(jqXhr);
                });
            };
        }

        // Update or save a featured article

    }, {
        key: 'updateFeature',
        value: async function updateFeature(data) {
            var _this9 = this;

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
                _this9.updateFeatureSuccess(json);
                return true;
            }).catch(function (error) {
                _this9.updateFeatureFailure(error);
            });
        }
    }, {
        key: 'featureReset',
        value: function featureReset() {
            return true;
        }
    }, {
        key: 'featureLoad',
        value: async function featureLoad(data) {
            var _this10 = this;

            await fetch(process.env.BASE_URI + '/list/findfeature', {
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
                _this10.featureLoadSuccess(json[0]);
                return true;
            }).catch(function (error) {
                _this10.featureLoadFailure(error);
            });
        }
    }, {
        key: 'getVenueInfo',
        value: function getVenueInfo(id) {
            var _this11 = this;

            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: process.env.BASE_URI + '/venues/getinfo/' + id
                }).done(function (data) {
                    _this11.getVenueInfoSuccess(data);
                }).fail(function (jqXhr) {
                    _this11.getVenueInfoFailure(jqXhr);
                });
            };
        }
    }, {
        key: 'resetVenue',
        value: function resetVenue() {
            return true;
        }
    }, {
        key: 'getMylist',
        value: function getMylist() {
            var _this12 = this;

            return function (dispatch) {
                dispatch();
                $.ajax({
                    url: process.env.BASE_URI + '/auth/getmylist'
                }).done(function (data) {
                    _this12.getMylistSuccess(data);
                    return true;
                }).fail(function (jqXhr) {
                    _this12.getMylistFailure(jqXhr);
                    return true;
                });
            };
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

var _alt = __webpack_require__(8);

var _alt2 = _interopRequireDefault(_alt);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthActions = function () {
  function AuthActions() {
    _classCallCheck(this, AuthActions);

    this.generateActions('sessionCheckFailure', 'sessionCheckSuccess', 'addToMyListSuccess', 'addToMyListFailure', 'loginAttempt', 'loginFailure', 'loginSuccess', 'logoutSuccess', 'logoutFailure', 'registerAttempt', 'registerSuccess', 'registerFailure', 'updateUserSuccess', 'updateUserFailure', 'updateUserAttempt');
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

      await fetch('http://localhost:5000/auth/checksession', {
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
        }
        _this4.sessionCheckFailure(json.error);
        return true;
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
  }, {
    key: 'updateUser',
    value: async function updateUser(newUserInfo) {
      var _this6 = this;

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
        _this6.updateUserSuccess(json);
        return true;
      }).catch(function (error) {
        _this6.updateUserFailure(error);
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

var _date = __webpack_require__(19);

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
            if (this.props.event !== true && this.props.end) {
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

            var image = this.props.image ? "http://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg" : 'https://image.freepik.com/free-vector/hexagonal-pattern_1051-833.jpg';

            return _react2.default.createElement(
                'div',
                { className: mylistIndex > 0 ? 'listing selected' : 'listing notselected', id: this.props._id },
                _react2.default.createElement(
                    'div',
                    { className: 'listingAdd' },
                    _react2.default.createElement(
                        'div',
                        { className: 'addButton', onClick: function onClick(e) {
                                return _this2.addToList(e, _this2.props);
                            } },
                        _react2.default.createElement('img', { src: image })
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
                            this.props.start && _react2.default.createElement(_date2.default, { date: this.props.start }),
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
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = __webpack_require__(40);

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(8);

var _alt2 = _interopRequireDefault(_alt);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ImagesActions = __webpack_require__(12);

var _ImagesActions2 = _interopRequireDefault(_ImagesActions);

var _toastr = __webpack_require__(51);

var _toastr2 = _interopRequireDefault(_toastr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListStore = function () {
    function ListStore() {
        _classCallCheck(this, ListStore);

        this.bindActions(_ListActions2.default);
        this.bindActions(_AuthActions2.default);
        this.bindActions(_ImagesActions2.default);
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
        this.user.avatar = '';
        this.user.facebook = {};
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
        // Featured listings
        this.feature = {};
        this.feature.text = '';
        this.feature.list = {};
        this.feature.venue = {};
        //Loadings
        this.loading = {};
        this.loading.login = false;
        this.loading.register = false;
        this.loading.updateuser = false;
        this.loading.current = false;
        //Error Messages
        this.error = {};
        this.error.feature = '';
        this.error.updateuser = '';
        //Success
        this.success = {};
        this.success.updateuser = '';
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

        // Get listing info

    }, {
        key: 'onGetListingInfoSuccess',
        value: function onGetListingInfoSuccess(data) {
            this.listingEdit = data;
            this.feature.list = data;
        }
    }, {
        key: 'onGetListingInfoFailure',
        value: function onGetListingInfoFailure(jqXhr) {
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }

        // Get venue info

    }, {
        key: 'onGetVenueInfoSuccess',
        value: function onGetVenueInfoSuccess(data) {
            this.listingEdit.venue = data[0];
        }
    }, {
        key: 'onGetVenueInfoFailure',
        value: function onGetVenueInfoFailure(jqXhr) {
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
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
        key: 'onSaveListingSuccess',
        value: function onSaveListingSuccess(data) {
            console.log('Saved: ', data);
        }
    }, {
        key: 'onSaveListingFailure',
        value: function onSaveListingFailure(err) {
            console.log('Error: ', err);
        }

        //Update a listing

    }, {
        key: 'onUpdateListingSuccess',
        value: function onUpdateListingSuccess(data) {
            console.log('Updated: ', data);
        }
    }, {
        key: 'onUpdateListingFailure',
        value: function onUpdateListingFailure(err) {
            console.log('Error: ', err);
        }

        //Update a listing

    }, {
        key: 'onDeleteListingSuccess',
        value: function onDeleteListingSuccess(data) {
            console.log('Deleted: ', data);
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
            } else {
                this.listingEdit.event = !info.event;
                console.log(this.listingEdit.event);
            }
        }

        //Update info on listing page

    }, {
        key: 'onFeatureInfoChange',
        value: function onFeatureInfoChange(info) {
            var value = info.target.value;
            var name = info.target.name;
            this.feature[name] = value;
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
            this.feature.text = '';
            this.feature.list = {};
            this.feature.venue = {};
        }
    }, {
        key: 'onFeatureLoadSuccess',
        value: function onFeatureLoadSuccess(data) {
            console.log('Feature: ', data);
            if (data) {
                this.feature = data;
                this.listingEdit._id = data.list._id;
                this.listingEdit.name = data.list.name;
                this.listingEdit.text = data.text;
                this.listingEdit.image = data.list.image;
                this.listingEdit.venue._id = data.venue._id;
                this.error.feature = "";
                console.log(this.feature);
            } else {
                this.error.feature = "No Feature selected today";
            }
        }
    }, {
        key: 'onFeatureLoadFailure',
        value: function onFeatureLoadFailure(error) {
            console.log("Feature load error: ", error);
            this.feature = {};
            this.feature.text = '';
            this.feature.list = {};
            this.feature.venue = {};
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
            console.log('User conneced: ', action);
            this.user.email = action.local.username;
            this.user.name = action.local.name;
            this.user.id = action._id;
            this.user.isLoggedIn = true;
            this.user.isLoggingIn = false;
            this.user.avatar = action.avatar;
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
            this.user.avatar = action.avatar;
            this.user.name = action.name;
            if (action.local) {
                this.user.email = action.local.username;
            }
            if (action.facebook) {
                this.user.facebook = {
                    id: action.facebook.id,
                    token: action.facebook.token
                };
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
            _toastr2.default.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
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
        value: function onThumbnailUploadSuccess(image) {
            this.isUploaded = true;
            this.listingEdit.image = image.public_id;
            this.feature.list.image = image.public_id;
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(8);

var _alt2 = _interopRequireDefault(_alt);

__webpack_require__(17);

var _superagent = __webpack_require__(50);

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
        value: function handleThumbnailUpload(file) {
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
                    console.log('Image Uploaded');
                    _this2.thumbnailUploadSuccess(response.body);
                }
            });
        }
    }]);

    return ImagesActions;
}();

exports.default = _alt2.default.createActions(ImagesActions);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-toggle-button");

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

var _reactSelect = __webpack_require__(75);

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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(6);
var bcrypt = __webpack_require__(16); // encripts password

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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(9);

var _imageBlock = __webpack_require__(56);

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
            var venue = this.props.feature.venue;
            var listing = this.props.feature.list;

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(9);

var _propTypes = __webpack_require__(13);

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
/* 22 */
/***/ (function(module, exports) {

module.exports = require("validator");

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

var _reactToggleButton = __webpack_require__(14);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _formDateRange = __webpack_require__(72);

var _formDateRange2 = _interopRequireDefault(_formDateRange);

var _formDateSingle = __webpack_require__(74);

var _formDateSingle2 = _interopRequireDefault(_formDateSingle);

var _formSelect = __webpack_require__(15);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _ThumbnailInput = __webpack_require__(25);

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

            //how ot get option for select element
            var getOptions = function getOptions(input) {
                return fetch('/venues/find/' + input).then(function (response) {
                    return response.json();
                }).then(function (json) {
                    return { options: json };
                });
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
                deleteButton
            );
        }
    }]);

    return ListingForm;
}(_react2.default.Component);

exports.default = ListingForm;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dates");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _imageUpload = __webpack_require__(26);

var _imageUpload2 = _interopRequireDefault(_imageUpload);

var _ImagesActions = __webpack_require__(12);

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

            _ImagesActions2.default.handleThumbnailUpload(file[0]);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = __webpack_require__(76);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var express = __webpack_require__(5);
var path = __webpack_require__(29);
var favicon = __webpack_require__(30);
var logger = __webpack_require__(31);
var cookieParser = __webpack_require__(32);
var bodyParser = __webpack_require__(33);
var http = __webpack_require__(34);
var debug = __webpack_require__(35)('artcritical-list:server');

var expressValidator = __webpack_require__(36);

//Authentification
var passport = __webpack_require__(10);
var flash = __webpack_require__(37);
var session = __webpack_require__(38);
var bcrypt = __webpack_require__(16); // encripts password

// Get the User model
__webpack_require__(39)(passport);

var app = express();

// MongoDB
var mongoose = __webpack_require__(6);
var url = process.env.MONGOLAB_URI;
mongoose.connect(url, { useMongoClient: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('We are in!');
});

// Import the Mongoose models
var List = __webpack_require__(43);
var Venue = __webpack_require__(44);
var User = __webpack_require__(18);
var Feature = __webpack_require__(45);

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

var index = __webpack_require__(46);
var venues = __webpack_require__(85);
var listings = __webpack_require__(86);
var auth = __webpack_require__(87);

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
/* 29 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// config/passport.js

// load all the things we need
var LocalStrategy = __webpack_require__(41).Strategy;
var FacebookStrategy = __webpack_require__(42).Strategy;


// load up the user model
var User = __webpack_require__(18);

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
        User.findOne({
            'facebook.id': profile.id
        }, function (err, user) {
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
                //found user
                _AuthActions2.default.facebookLogin(user);
                console.log("in passport: ", user._id);
                return done(err, user);
            }
        });
    }));
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("alt");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(6);

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
    image: String,
    thumb: String
});

//compile the model

module.exports = mongoose.model('List', listingSchema);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(6);

// Create the Listings table ==================================

var venueSchema = mongoose.Schema({
    name: String,
    blurb: String,
    website: String,
    address: String,
    city: String,
    neighborhood: Number,
    coordinates: {
        lat: Number,
        long: Number
    }
});

//compile the model

module.exports = mongoose.model('Venue', venueSchema);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(6);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(47);

var _reactRouter = __webpack_require__(2);

var _routes = __webpack_require__(48);

var _routes2 = _interopRequireDefault(_routes);

var _ErrorPage = __webpack_require__(27);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(5);
var router = express.Router();
var JSX = __webpack_require__(83).install();
var passport = __webpack_require__(10);
// we'll use this to render our app to an html string

// and these to match the url to routes and then render

var history = __webpack_require__(84);
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
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _layout = __webpack_require__(49);

var _layout2 = _interopRequireDefault(_layout);

var _IndexPage = __webpack_require__(52);

var _IndexPage2 = _interopRequireDefault(_IndexPage);

var _CurrentPage = __webpack_require__(53);

var _CurrentPage2 = _interopRequireDefault(_CurrentPage);

var _GlancePage = __webpack_require__(54);

var _GlancePage2 = _interopRequireDefault(_GlancePage);

var _EventsPage = __webpack_require__(57);

var _EventsPage2 = _interopRequireDefault(_EventsPage);

var _SignUpPage = __webpack_require__(58);

var _SignUpPage2 = _interopRequireDefault(_SignUpPage);

var _LogInPage = __webpack_require__(60);

var _LogInPage2 = _interopRequireDefault(_LogInPage);

var _myListPage = __webpack_require__(65);

var _myListPage2 = _interopRequireDefault(_myListPage);

var _AdminPage = __webpack_require__(70);

var _AdminPage2 = _interopRequireDefault(_AdminPage);

var _NewListing = __webpack_require__(71);

var _NewListing2 = _interopRequireDefault(_NewListing);

var _EditListings = __webpack_require__(77);

var _EditListings2 = _interopRequireDefault(_EditListings);

var _featuredPage = __webpack_require__(78);

var _featuredPage2 = _interopRequireDefault(_featuredPage);

var _Account = __webpack_require__(81);

var _Account2 = _interopRequireDefault(_Account);

var _ErrorPage = __webpack_require__(27);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Admin Components
var routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _layout2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _GlancePage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'current', component: _CurrentPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'events', component: _EventsPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'signup', component: _SignUpPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'mylist', component: _myListPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _LogInPage2.default }),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: 'account', component: _AdminPage2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Account2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'edit', component: _EditListings2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'newlisting', component: _NewListing2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'featured', component: _featuredPage2.default })
  ),
  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _ErrorPage2.default })
);
// Error Components

//Signin Components
exports.default = routes;

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

var _reactRouter = __webpack_require__(2);

var _ListStore = __webpack_require__(11);

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
/* 50 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("toastr");

/***/ }),
/* 52 */
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

var _displayActions = __webpack_require__(7);

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

var _reactRouter = __webpack_require__(2);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _displayActions = __webpack_require__(7);

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

            var mainNH = '';
            var secondaryNH = '';
            var newMainNH = '';
            var newSecondaryNH = '';

            var city = function city(name) {
                return _react2.default.createElement(
                    'h1',
                    null,
                    name
                );
            };
            var neighborhood = function neighborhood(name) {
                return _react2.default.createElement(
                    'h2',
                    null,
                    name
                );
            };

            var thelistRender = function thelistRender(currentListings) {
                return currentListings.map(function (listing) {

                    newSecondaryNH = listing.venue.neighborhood;

                    if (newSecondaryNH !== secondaryNH) {
                        // Update neighborhood
                        secondaryNH = newSecondaryNH;
                        newSecondaryNH = _displayActions2.default.displayNeighborhood(secondaryNH);
                        newMainNH = _displayActions2.default.displayCity(secondaryNH);
                        if (newMainNH !== mainNH) {
                            mainNH = newMainNH;
                            // Removed the city(blah), to be replaced with an anchor
                            return _react2.default.createElement(
                                'div',
                                { key: listing._id },
                                neighborhood(newSecondaryNH),
                                _react2.default.createElement(_listing2.default, _extends({}, listing, { mylist: _this2.props.mylist }))
                            );
                        } else {
                            return _react2.default.createElement(
                                'div',
                                { key: listing._id },
                                neighborhood(newSecondaryNH),
                                _react2.default.createElement(_listing2.default, _extends({}, listing, { mylist: _this2.props.mylist }))
                            );
                        }
                    } else {
                        return _react2.default.createElement(_listing2.default, _extends({}, listing, { key: listing._id, mylist: _this2.props.mylist }));
                    }
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
                _react2.default.createElement(
                    'div',
                    { className: 'listingsWrap' },
                    thelistRender(this.props.currentListings),
                    this.props.loading.current ? 'Loading...' : ''
                )
            );
        }
    }]);

    return CurrentPage;
}(_react2.default.Component);

exports.default = CurrentPage;

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

var _reactRouter = __webpack_require__(2);

var _ListStore = __webpack_require__(11);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _daypage = __webpack_require__(55);

var _daypage2 = _interopRequireDefault(_daypage);

var _tabs = __webpack_require__(21);

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

        return _possibleConstructorReturn(this, (GlancePage.__proto__ || Object.getPrototypeOf(GlancePage)).call(this, props));
    }

    _createClass(GlancePage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ListActions2.default.getGlance();
        }
    }, {
        key: 'render',
        value: function render() {

            var thelist = this.props.glanceListings;

            var days = [];
            var today = new Date();
            today.setHours(0, 0, 0, 0);

            for (var i = 0; i < 7; i++) {
                var d = new Date();
                d.setHours(0, 0, 0, 0);
                d.setDate(today.getDate() + i);
                days.push(_react2.default.createElement(_daypage2.default, { key: d, feature: this.props.feature, glanceListings: thelist, mylist: this.props.mylist, label: d }));
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
/* 55 */
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

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _featureBlock = __webpack_require__(20);

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
        key: 'componentWillMount',
        value: function componentWillMount() {
            _ListActions2.default.featureReset();
            _ListActions2.default.featureLoad({ date: this.props.label });
        }
    }, {
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
                    _react2.default.createElement(_featureBlock2.default, { feature: this.props.feature })
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
/* 56 */
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
            var fullURL = "http://res.cloudinary.com/artcritical/image/upload/" + this.props.image + ".jpg";

            return _react2.default.createElement("img", { src: fullURL, className: this.props.classes });
        }
    }]);

    return imageBlock;
}(_react2.default.Component);

exports.default = imageBlock;

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

var _reactRouter = __webpack_require__(2);

var _ListStore = __webpack_require__(11);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _date = __webpack_require__(19);

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _SignUpForm = __webpack_require__(59);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(7);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _reactToggleButton = __webpack_require__(14);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _validator = __webpack_require__(22);

var _validator2 = _interopRequireDefault(_validator);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  router: _propTypes2.default.object.isRequired
};

exports.default = SignUpForm;

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

var _reactRouter = __webpack_require__(2);

var _AuthActions = __webpack_require__(3);

var _AuthActions2 = _interopRequireDefault(_AuthActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _reactRouterDom = __webpack_require__(61);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LogInForm = __webpack_require__(62);

var _LogInForm2 = _interopRequireDefault(_LogInForm);

var _FacebookButton = __webpack_require__(64);

var _FacebookButton2 = _interopRequireDefault(_FacebookButton);

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
                    _react2.default.createElement(_LogInForm2.default, { loginFunction: _AuthActions2.default.attemptLogIn, loading: this.props.isLoggingIn }),
                    _react2.default.createElement(_FacebookButton2.default, null)
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
/* 61 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

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

var _validator = __webpack_require__(22);

var _validator2 = _interopRequireDefault(_validator);

var _reactstrap = __webpack_require__(63);

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
        value: function handleSubmit() {
            var loginFunction = this.props.loginFunction;
            var _state = this.state,
                username = _state.username,
                password = _state.password;

            this._validate(username, password);

            if (this._areValid(username, password)) {

                var formData = {
                    username: this.state.username,
                    password: this.state.password
                };

                loginFunction(formData);
            }
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
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'alert alert-danger' },
                        this.state.errorMessage.email
                    )
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
                    }),
                    this.state.errorMessage.password
                ),
                _react2.default.createElement(
                    _reactstrap.Button,
                    { onClick: this.handleSubmit },
                    'Log In'
                ),
                this.props.loading ? 'Loading' : ''
            );
        }
    }]);

    return LogInForm;
}(_react2.default.Component);

exports.default = LogInForm;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _myList = __webpack_require__(66);

var _myList2 = _interopRequireDefault(_myList);

var _reactRouter = __webpack_require__(2);

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

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _myMap = __webpack_require__(67);

var _myMap2 = _interopRequireDefault(_myMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Components


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
                    'div',
                    { className: 'mymap-wrap' },
                    _react2.default.createElement(_myMap2.default, { items: this.props.mylist })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'listing-wrap' },
                    this.props.mylist.map(function (listing) {
                        return _react2.default.createElement(_listing2.default, _extends({}, listing, { key: listing._id, mylist: _this2.props.mylist }));
                    })
                )
            );
        }
    }]);

    return MyList;
}(_react2.default.Component);

exports.default = MyList;

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

var _googleMapReact = __webpack_require__(68);

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _marker = __webpack_require__(69);

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//COMPONENT


var MyMap = function (_React$Component) {
  _inherits(MyMap, _React$Component);

  function MyMap(props) {
    _classCallCheck(this, MyMap);

    return _possibleConstructorReturn(this, (MyMap.__proto__ || Object.getPrototypeOf(MyMap)).call(this, props));
  }

  _createClass(MyMap, [{
    key: 'render',
    value: function render() {
      var num = 0;
      var markers = this.props.items.map(function (listing) {
        num = num + 1;
        return _react2.default.createElement(_marker2.default, {
          key: 'listing._id',
          lat: listing.venue.coordinates.lat || this.props.center.lat,
          lng: listing.venue.coordinates.long || this.props.center.long,
          listing: listing,
          num: num
        });
      });

      return _react2.default.createElement(
        _googleMapReact2.default,
        {
          bootstrapURLKeys: { key: "AIzaSyD1qPeqE6djJy-KU0hj2JJfKJ77JAkXmNg" },
          defaultCenter: this.props.center,
          defaultZoom: this.props.zoom
        },
        markers
      );
    }
  }]);

  return MyMap;
}(_react2.default.Component);

exports.default = MyMap;


MyMap.defaultProps = {
  center: { lat: 40.7238556, lng: -73.9221523 },
  zoom: 11
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

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
                { className: "marker" },
                this.props.num
            );
        }
    }]);

    return Marker;
}(_react2.default.Component);

exports.default = Marker;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

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
                        { to: '/account/edit', activeClassName: 'active' },
                        'Edit Listing'
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
                null,
                adminRender
            );
        }
    }]);

    return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;

/***/ }),
/* 71 */
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

var _ListingForm = __webpack_require__(23);

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

    // Add the listing to the database


    _createClass(NewListing, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var listingId = this.props.listingEdit._id || null;
            var newListing = {
                _id: listingId,
                name: this.props.listingEdit.name,
                start: this.props.listingEdit.start,
                end: this.props.listingEdit.end,
                venue: this.props.listingEdit.venue._id,
                website: this.props.listingEdit.website,
                description: this.props.listingEdit.description,
                neighborhood: this.props.listingEdit.venue.neighborhood,
                image: this.props.listingEdit.image
            };
            _ListActions2.default.saveListing(newListing);
            _ListActions2.default.listingEditReset();
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
                    _react2.default.createElement(_ListingForm2.default, _extends({}, this.props.listingEdit, { handleSubmit: this.handleSubmit })),
                    _react2.default.createElement(
                        'div',
                        { id: 'newlistingDemo' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'Listing Preview'
                        ),
                        _react2.default.createElement(_listing2.default, this.props.listingEdit)
                    )
                )
            );
        }
    }]);

    return NewListing;
}(_react2.default.Component);

exports.default = NewListing;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDates = __webpack_require__(24);

var _moment = __webpack_require__(73);

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
/* 73 */
/***/ (function(module, exports) {

module.exports = require("moment");

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

var _reactDates = __webpack_require__(24);

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
/* 75 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(7);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _listing = __webpack_require__(4);

var _listing2 = _interopRequireDefault(_listing);

var _formSelect = __webpack_require__(15);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _ListingForm = __webpack_require__(23);

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

        _this.state = {
            listing: "",
            listingInfo: {
                _id: '',
                venue: {}
            }
        };

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
            var newListing = {
                _id: this.props.listingEdit._id,
                name: this.props.listingEdit.name,
                start: this.props.listingEdit.start,
                end: this.props.listingEdit.end,
                venue: this.props.listingEdit.venue._id,
                website: this.props.listingEdit.website,
                description: this.props.listingEdit.description,
                neighborhood: this.props.listingEdit.venue.neighborhood,
                image: this.props.listingEdit.image
            };
            _ListActions2.default.updateListing(newListing);
            _ListActions2.default.listingEditReset();
        }

        //Delete the listing

    }, {
        key: 'handleDelete',
        value: function handleDelete() {
            var oldListing = this.props.listingEdit._id;
            _ListActions2.default.deleteListing(oldListing);
            _ListActions2.default.listingEditReset();
        }
    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            if (data.value) {
                //Fetch all the venue info
                _ListActions2.default.getListingInfo(data.value);
            }
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
                    _react2.default.createElement(_listing2.default, this.props.listingEdit)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'listingForm' },
                    _react2.default.createElement(_ListingForm2.default, _extends({}, this.props.listingEdit, { handleSubmit: this.handleSubmit, handleDelete: this.handleDelete }))
                )
            );
        }
    }]);

    return ListingEdit;
}(_react2.default.Component);

exports.default = ListingEdit;

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

var _reactRouter = __webpack_require__(2);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _featuredDay = __webpack_require__(79);

var _featuredDay2 = _interopRequireDefault(_featuredDay);

var _tabs = __webpack_require__(21);

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

        return _possibleConstructorReturn(this, (GlancePage.__proto__ || Object.getPrototypeOf(GlancePage)).call(this, props));
    }

    _createClass(GlancePage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ListActions2.default.getGlance();
        }
    }, {
        key: 'render',
        value: function render() {

            var days = [];
            var today = new Date();
            today.setHours(0, 0, 0, 0);

            for (var i = 0; i < 7; i++) {
                var d = new Date();
                d.setHours(0, 0, 0, 0);
                d.setDate(today.getDate() + i);
                days.push(_react2.default.createElement(_featuredDay2.default, { key: d, feature: this.props.feature, error: this.props.error.feature, label: d }));
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

    return GlancePage;
}(_react2.default.Component);

exports.default = GlancePage;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayActions = __webpack_require__(7);

var _displayActions2 = _interopRequireDefault(_displayActions);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _formSelect = __webpack_require__(15);

var _formSelect2 = _interopRequireDefault(_formSelect);

var _featuredForm = __webpack_require__(80);

var _featuredForm2 = _interopRequireDefault(_featuredForm);

var _featureBlock = __webpack_require__(20);

var _featureBlock2 = _interopRequireDefault(_featureBlock);

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
        return _this;
    }

    _createClass(ListingEdit, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _ListActions2.default.featureLoad({ date: this.props.label });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ListActions2.default.featureReset();
        }

        // Add the listing to the database

    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var id = this.props.feature._id ? this.props.feature._id : null;
            var newFeature = {
                _id: id,
                date: this.props.label,
                text: this.props.feature.text,
                list: this.props.feature.list._id,
                venue: this.props.feature.list.venue._id
            };
            var newThumbnail = {
                _id: this.props.feature.list._id,
                image: this.props.feature.list.image
            };
            _ListActions2.default.updateFeature(newFeature);
            _ListActions2.default.updateListing(newThumbnail);
        }
    }, {
        key: 'handleSelectChange',
        value: function handleSelectChange(data) {
            if (data.value) {
                //Fetch all the listing info
                _ListActions2.default.getListingInfo(data.value);
            }
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
                    { className: 'column-2of3' },
                    _react2.default.createElement(_formSelect2.default, { value: { label: this.props.feature.list.name, value: this.props.feature.list._id }, handleSelectChange: this.handleSelectChange, getOptions: getOptions }),
                    _react2.default.createElement(_featuredForm2.default, _extends({}, this.props.feature, { handleSubmit: this.handleSubmit }))
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'column-1of3' },
                    this.props.error ? this.props.error : _react2.default.createElement(_featureBlock2.default, { feature: this.props.feature })
                )
            );
        }
    }]);

    return ListingEdit;
}(_react2.default.Component);

exports.default = ListingEdit;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactToggleButton = __webpack_require__(14);

var _reactToggleButton2 = _interopRequireDefault(_reactToggleButton);

var _ListActions = __webpack_require__(1);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _ThumbnailInput = __webpack_require__(25);

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

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(ListingForm, [{
        key: 'handleChange',
        value: function handleChange(event) {
            _ListActions2.default.featureInfoChange(event);
        }
    }, {
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
                _react2.default.createElement(_ThumbnailInput2.default, { image: this.props.list.image }),
                _react2.default.createElement(
                    'label',
                    null,
                    'Description'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'formSection' },
                    _react2.default.createElement('textarea', { name: 'text', type: 'text', value: this.props.text, onChange: this.handleChange })
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _avatar = __webpack_require__(82);

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
        };

        console.log(_this.props.user);

        //Function Binding
        _this.handleChange = _this.handleChange.bind(_this);
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

            var theAvatar = this.props.user.avatar || this.props.user.facebook.id;

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
                    _react2.default.createElement('input', { name: 'email', placeholder: 'Your Email', type: 'text', value: this.props.user.email, onChange: this.handleChange })
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ImagesActions = __webpack_require__(12);

var _ImagesActions2 = _interopRequireDefault(_ImagesActions);

var _imageUpload = __webpack_require__(26);

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
            } else if (this.props.facebook.id) {
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
/* 83 */
/***/ (function(module, exports) {

module.exports = require("node-jsx");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 85 */
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(5);
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
        res.json(docs);
    });
});

//#######################
// GET EVENTS list to display.
//#######################

router.get('/eventslistings', function (req, res) {
    var List = req.list,
        Venue = req.venue;

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
        res.json(docs);
    });
});

//#######################
/* GET ONE listing */
//#######################

router.get('/find/:listing_id', function (req, res, next) {
    var List = req.list;

    var regexp = new RegExp("^" + req.params.listing_id, "i");
    List.find({
        name: regexp
    }, function (err, listing) {
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

    console.log("Update one feature");

    if (req.body._id) {

        //Update feature
        console.log('Update feature');

        var theFeature = new Feature(req.body);

        Feature.update({
            _id: theFeature._id
        }, {
            $set: theFeature
        }, function (err, newFeature) {
            console.log('Updated feature: ', newFeature);
            res.send(err === null ? { msg: '' } : { msg: err });
        });
    } else {
        // New feature
        console.log('New feature');

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

router.post('/findfeature', function (req, res) {
    var Feature = req.feature;

    console.log("Find one feature");

    Feature.find({
        date: req.body.date
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(5);
var router = express.Router();
var passport = __webpack_require__(10);

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