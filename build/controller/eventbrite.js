"use strict";

var _config = _interopRequireDefault(require("../config"));

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var eventbrite = require('eventbrite')["default"];

// Create configured Eventbrite SDK
var sdk = eventbrite({
  token: _config["default"].EVENTBRITE_API_KEY
});
var eventBrite = {};

eventBrite.myprofile = function (req, res) {
  sdk.request('/users/me').then(function (content) {
    res.json({
      content: content
    });
  });
};

eventBrite.fetchEvents = function (req, res) {
  sdk.request("/events/search?location.address=".concat(req.body.city, "&location.within=").concat(req.body.radius, "&categories=").concat(req.body.category)).then(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(content) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all(content.events.map(function (event) {
                new _database["default"].EventBrite(event).save();
              }));

            case 2:
              res.json({
                content: content
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }())["catch"](function (err) {
    res.json(err);
  });
};

module.exports = eventBrite;
//# sourceMappingURL=eventbrite.js.map