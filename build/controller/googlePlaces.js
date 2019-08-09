"use strict";

var _config = _interopRequireDefault(require("../config"));

var _nodeGoogleplaces = _interopRequireDefault(require("node-googleplaces"));

var _database = _interopRequireDefault(require("../database"));

var _datatypes = _interopRequireDefault(require("../datatypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var googlePlaces = {};
var places = new _nodeGoogleplaces["default"](_config["default"].GOOGLE_PLACES_API_KEY);

googlePlaces.fetchClubsNearByGeoCode =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _database["default"].location.find({
              city: req.body.city
            }).then(
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(locationsResp) {
                var locations, city;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (locationsResp.length >= 1) {
                          res.status(200).json({
                            clubs: locationsResp
                          });
                        } else {
                          city = req.body.city;
                          delete req.body.city;
                          places.nearbySearch(req.body).then(
                          /*#__PURE__*/
                          function () {
                            var _ref4 = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee(_ref3) {
                              var text;
                              return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      text = _ref3.text;
                                      _context.next = 3;
                                      return Promise.all(JSON.parse(text).results.map(function (location) {
                                        var newLocation = new _datatypes["default"](location.geometry.location.lat, location.geometry.location.lng, location.name, location.price_level, location.rating, location.user_ratings_total, location.vicinity, city);
                                        new _database["default"].location(newLocation).save();
                                        return newLocation;
                                      }));

                                    case 3:
                                      locations = _context.sent;
                                      res.json({
                                        clubs: locations
                                      });

                                    case 5:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee);
                            }));

                            return function (_x4) {
                              return _ref4.apply(this, arguments);
                            };
                          }())["catch"](function (err) {
                            res.send(err);
                          });
                        }

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }())["catch"](function (err) {
              res.json(err);
            });

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = googlePlaces;
//# sourceMappingURL=googlePlaces.js.map