"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _location = _interopRequireDefault(require("./location"));

var _eventbrite = _interopRequireDefault(require("./eventbrite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = {
  location: _location["default"],
  EventBrite: _eventbrite["default"]
};
var _default = db;
exports["default"] = _default;
//# sourceMappingURL=index.js.map