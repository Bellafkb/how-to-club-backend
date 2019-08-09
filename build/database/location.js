"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var locationSchema = new Schema({
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price_level: {
    type: Number
  },
  rating: {
    type: Number
  },
  user_ratings_total: {
    type: Number
  },
  vicinity: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
});

var _default = _mongoose["default"].model('Location', locationSchema);

exports["default"] = _default;
//# sourceMappingURL=location.js.map