"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var partySchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

var _default = _mongoose["default"].model('Location', partySchema);

exports["default"] = _default;
//# sourceMappingURL=party.js.map