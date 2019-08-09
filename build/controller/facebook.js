"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var facebook = {};

var EventSearch = require("facebook-events-by-location-core");

var es = new EventSearch();

facebook.fetchEventsByLocation = function (req, res) {
  es.search({
    "lat": 40.710803,
    "lng": -73.964040,
    "accessToken": _config["default"].FACEBOOK_API_KEY
  }).then(function (events) {
    res.status(200).json({
      events: events
    });
  })["catch"](function (err) {
    res.status(500).json({
      err: err
    });
  });
};

var _default = facebook;
exports["default"] = _default;
//# sourceMappingURL=facebook.js.map