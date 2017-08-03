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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

var _alt = __webpack_require__(8);

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListActions = function () {
  function ListActions() {
    _classCallCheck(this, ListActions);

    this.generateActions('getCurrentSuccess', 'getCurrentFail', 'getAllSuccess', 'getAllFail', 'getEventsSuccess', 'getEventsFail', 'getGlanceSuccess', 'getGlanceFail');
  }

  _createClass(ListActions, [{
    key: 'getCurrent',
    value: function getCurrent() {
      var _this = this;

      $.ajax({ url: '/currentlistings' }).done(function (data) {
        _this.getCurrentSuccess(data);
      }).fail(function (jqXhr) {
        _this.getCurrentFail(jqXhr);
      });
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      var _this2 = this;

      $.ajax({ url: '/alllistings' }).done(function (data) {
        _this2.getAllSuccess(data);
      }).fail(function (jqXhr) {
        _this2.getAllFail(jqXhr);
      });
    }
  }, {
    key: 'getEvents',
    value: function getEvents() {
      var _this3 = this;

      $.ajax({ url: '/currentlistings' }).done(function (data) {
        _this3.getEventsSuccess(data);
      }).fail(function (jqXhr) {
        _this3.getEventsFail(jqXhr);
      });
    }
  }, {
    key: 'getGlance',
    value: function getGlance() {
      var _this4 = this;

      $.ajax({ url: '/glancelistings' }).done(function (data) {
        _this4.getGlanceSuccess(data);
      }).fail(function (jqXhr) {
        _this4.getGlanceFail(jqXhr);
      });
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listing = function (_React$Component) {
  _inherits(Listing, _React$Component);

  function Listing() {
    _classCallCheck(this, Listing);

    return _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).apply(this, arguments));
  }

  _createClass(Listing, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _reactIntl.IntlProvider,
        { locale: 'en' },
        _react2.default.createElement(
          'div',
          { className: 'listing' },
          _react2.default.createElement(
            'p',
            null,
            this.props.name,
            ' at ',
            this.props.venue.name
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(_reactIntl.FormattedDate, { value: this.props.start, format: 'narrow' }),
            ' to ',
            _react2.default.createElement(_reactIntl.FormattedDate, { value: this.props.end, format: 'short' })
          ),
          _react2.default.createElement(
            'p',
            null,
            this.props.description
          ),
          _react2.default.createElement(
            'p',
            null,
            this.props.venue.address,
            ', ',
            this.props.venue.city
          ),
          _react2.default.createElement(
            'p',
            null,
            this.props.neighborhood
          )
        )
      );
    }
  }]);

  return Listing;
}(_react2.default.Component);

exports.default = Listing;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = __webpack_require__(8);

var _alt2 = _interopRequireDefault(_alt);

var _ListActions = __webpack_require__(2);

var _ListActions2 = _interopRequireDefault(_ListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListStore = function () {
    function ListStore() {
        _classCallCheck(this, ListStore);

        this.bindActions(_ListActions2.default);
        this.currentListings = [];
        this.allListings = [];
        this.eventsListings = [];
        this.glanceListings = [];
    }

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
        key: 'onGetEventSuccess',
        value: function onGetEventSuccess(data) {
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
    }]);

    return ListStore;
}();

exports.default = _alt2.default.createStore(ListStore);

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
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = __webpack_require__(24);

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var express = __webpack_require__(5);
var path = __webpack_require__(12);
var favicon = __webpack_require__(13);
var logger = __webpack_require__(14);
var cookieParser = __webpack_require__(15);
var bodyParser = __webpack_require__(16);
var http = __webpack_require__(17);
var debug = __webpack_require__(18)('artcritical-list:server');

var index = __webpack_require__(19);
var users = __webpack_require__(30);

var app = express();

// MongoDB
var mongoose = __webpack_require__(6);

var url = process.env.MONGOLAB_URI;

mongoose.connect(url, { useMongoClient: true });

console.log('Connecting to database...');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('We are in!');
});

// Import the Mongoose models
var List = __webpack_require__(31);
var Venue = __webpack_require__(32);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function (req, res, next) {
  req.list = List;
  req.venue = Venue;
  next();
});

app.use('/', index);
app.use('/users', users);

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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(20);

var _reactRouter = __webpack_require__(1);

var _routes = __webpack_require__(21);

var _routes2 = _interopRequireDefault(_routes);

var _ErrorPage = __webpack_require__(10);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(5);
var router = express.Router();
var JSX = __webpack_require__(29).install();
// we'll use this to render our app to an html string

// and these to match the url to routes and then render


/* GET home page. */
router.get('/', function (req, res, next) {
    var List = req.list;

    List.find({}, {}).sort('neighborhood').populate('venue').exec(function (e, docs) {
        res.render('index', {
            "title": "The List",
            "index": docs
        });
    });;
});

/*
 * GET currentlist to display.
 */
router.get('/currentlistings', function (req, res) {
    var List = req.list,
        Venue = req.venue;

    //Find today's date
    var today = new Date();

    console.log('Searching for current events...');

    List.find({ start: { $lt: today }, end: { $gt: today } }, {}).sort('neighborhood').populate('venue').exec(function (e, docs) {
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
    var inaWeek = new Date();
    inaWeek.setDate(inaWeek.getDate() + 7);

    console.log('Searching for this weeks events...');

    List.find({ $or: [{ start: { $gte: today, $lt: inaWeek } }, { end: { $gte: today, $lt: inaWeek } }] }, {}).sort('neighborhood').populate('venue').exec(function (e, docs) {
        res.json(docs);
    });
});

/*
 * GET ALL listings ===================
 */
router.get('/alllistings', function (req, res) {
    var List = req.list;

    List.find().sort('neighborhood').populate('venue').exec(function (e, docs) {
        res.json(docs);
    });
});

router.get('*', function (req, res) {
    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
        // in here we can make some decisions all at once
        if (err) {
            // there was an error somewhere during route matching
            return res.status(500).send(err.message);
        }

        if (redirect) {
            // we haven't talked about `onEnter` hooks on routes, but before a
            // route is entered, it can redirect. Here we handle on the server.
            return res.redirect(redirect.pathname + redirect.search);
        }

        var markup = void 0;

        if (props) {
            // if we got props then we matched a route and can render
            markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
        } else {
            // no errors, no redirect, we just didn't match anything
            markup = (0, _server.renderToString)(_react2.default.createElement(_ErrorPage2.default, null));
            res.status(404);
        }

        // render the index template with the embedded React markup
        return res.render('index', { markup: markup });
    });
});

module.exports = router;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _layout = __webpack_require__(22);

var _layout2 = _interopRequireDefault(_layout);

var _IndexPage = __webpack_require__(23);

var _IndexPage2 = _interopRequireDefault(_IndexPage);

var _CurrentPage = __webpack_require__(25);

var _CurrentPage2 = _interopRequireDefault(_CurrentPage);

var _GlancePage = __webpack_require__(26);

var _GlancePage2 = _interopRequireDefault(_GlancePage);

var _EventsPage = __webpack_require__(28);

var _EventsPage2 = _interopRequireDefault(_EventsPage);

var _ErrorPage = __webpack_require__(10);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _layout2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _IndexPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'current', component: _CurrentPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'ataglance', component: _GlancePage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'events', component: _EventsPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _ErrorPage2.default })
);

exports.default = routes;

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

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app-container' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'h1',
            null,
            ' Welcome to the List'
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
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'app-content' },
          this.props.children
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _listing = __webpack_require__(3);

var _listing2 = _interopRequireDefault(_listing);

var _ListStore = __webpack_require__(4);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _ListActions = __webpack_require__(2);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _displayActions = __webpack_require__(9);

var _displayActions2 = _interopRequireDefault(_displayActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexPage = function (_React$Component) {
    _inherits(IndexPage, _React$Component);

    function IndexPage(props) {
        _classCallCheck(this, IndexPage);

        var _this = _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call(this, props));

        _this.state = _ListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(IndexPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ListStore2.default.listen(this.onChange);
            _ListActions2.default.getAll();
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

            var nh = '';
            var thelist = this.state.allListings.map(function (listing) {
                var newNh = listing.venue.neighborhood;
                if (newNh !== nh) {
                    nh = newNh;
                    newNh = _displayActions2.default.displayCity(nh);
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h2',
                            null,
                            newNh
                        ),
                        _react2.default.createElement(_listing2.default, listing)
                    );
                } else {
                    return _react2.default.createElement(_listing2.default, listing);
                }
            });

            return _react2.default.createElement(
                'div',
                { className: 'home' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Landing page'
                ),
                thelist
            );
        }
    }]);

    return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("alt");

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

var _reactRouter = __webpack_require__(1);

var _ListStore = __webpack_require__(4);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _listing = __webpack_require__(3);

var _listing2 = _interopRequireDefault(_listing);

var _ListActions = __webpack_require__(2);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _displayActions = __webpack_require__(9);

var _displayActions2 = _interopRequireDefault(_displayActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            var nh = '';
            var thelist = this.state.currentListings.map(function (listing) {
                var newNh = listing.venue.neighborhood;
                if (newNh !== nh) {
                    nh = newNh;
                    newNh = _displayActions2.default.displayCity(nh);
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h2',
                            null,
                            newNh
                        ),
                        _react2.default.createElement(_listing2.default, listing)
                    );
                } else {
                    return _react2.default.createElement(_listing2.default, listing);
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
                thelist
            );
        }
    }]);

    return CurrentPage;
}(_react2.default.Component);

exports.default = CurrentPage;

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

var _reactRouter = __webpack_require__(1);

var _ListStore = __webpack_require__(4);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _ListActions = __webpack_require__(2);

var _ListActions2 = _interopRequireDefault(_ListActions);

var _daypage = __webpack_require__(27);

var _daypage2 = _interopRequireDefault(_daypage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
                days.push(_react2.default.createElement(_daypage2.default, { glanceListings: thelist, date: d }));
            }

            return _react2.default.createElement(
                'div',
                { className: 'glance' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'At a Glance'
                ),
                days
            );
        }
    }]);

    return GlancePage;
}(_react2.default.Component);

exports.default = GlancePage;

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

var _listing = __webpack_require__(3);

var _listing2 = _interopRequireDefault(_listing);

var _reactIntl = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayPage = function (_React$Component) {
    _inherits(DayPage, _React$Component);

    function DayPage() {
        _classCallCheck(this, DayPage);

        return _possibleConstructorReturn(this, (DayPage.__proto__ || Object.getPrototypeOf(DayPage)).apply(this, arguments));
    }

    _createClass(DayPage, [{
        key: 'render',
        value: function render() {
            var date = this.props.date.toISOString();

            var openings = [];
            var events = [];
            var closings = [];

            var thelist = this.props.glanceListings.map(function (listing) {
                // Check if it is an event
                if (listing.event == true) {
                    // it IS an event

                    if (listing.start == date) {
                        events.push(_react2.default.createElement(_listing2.default, listing));
                    }
                } else {
                    //not an event

                    //Check if it starts on this day
                    if (listing.start == date) {
                        openings.push(_react2.default.createElement(_listing2.default, listing));
                    }
                    //Check if it ends on this day
                    if (listing.end == date) {
                        closings.push(_react2.default.createElement(_listing2.default, listing));
                    }
                }
            });

            return _react2.default.createElement(
                _reactIntl.IntlProvider,
                { locale: 'en' },
                _react2.default.createElement(
                    'div',
                    { className: 'day' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        _react2.default.createElement(_reactIntl.FormattedDate, { value: date, weekday: 'long', day: 'numeric', month: 'short' })
                    ),
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
                    closings
                )
            );
        }
    }]);

    return DayPage;
}(_react2.default.Component);

exports.default = DayPage;

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

var _reactRouter = __webpack_require__(1);

var _ListStore = __webpack_require__(4);

var _ListStore2 = _interopRequireDefault(_ListStore);

var _listing = __webpack_require__(3);

var _listing2 = _interopRequireDefault(_listing);

var _ListActions = __webpack_require__(2);

var _ListActions2 = _interopRequireDefault(_ListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            var thelist = this.state.eventsListings.map(function (listing) {
                return _react2.default.createElement(_listing2.default, listing);
            });

            return _react2.default.createElement(
                'div',
                { className: 'home' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Events'
                ),
                thelist
            );
        }
    }]);

    return EventsPage;
}(_react2.default.Component);

exports.default = EventsPage;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("node-jsx");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(5);
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(6);

// Create the Listings table ==================================

var listingSchema = mongoose.Schema({
    name: String,
    type: String,
    start: Date,
    end: Date,
    description: String,
    neighborhood: Number,
    venue: {
        ref: 'Venue',
        type: String
    }
});

//compile the model

module.exports = mongoose.model('List', listingSchema);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(6);

// Create the Listings table ==================================

var venueSchema = mongoose.Schema({
    name: String,
    website: String,
    neighborhood: Number
});

//compile the model

module.exports = mongoose.model('Venue', venueSchema);

/***/ })
/******/ ]);
//# sourceMappingURL=server.bundle.js.map