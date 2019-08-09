"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Location = function Location(lat, lng, name, price_level, rating, user_ratings_total, vicinity, city) {
  _classCallCheck(this, Location);

  this.lat = lat;
  this.lng = lng;
  this.name = name;
  this.price_level = price_level;
  this.rating = rating;
  this.user_ratings_total = user_ratings_total;
  this.vicinity = vicinity;
  this.city = city;
};

exports["default"] = Location;
//# sourceMappingURL=index.js.map