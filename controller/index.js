var EventSearch = require("facebook-events-by-location-core");
var es = new EventSearch();
let controller = {};

controller.getEvent = (req, res) => {
    es.search({
        "lat": 40.710803,
        "lng": -73.964040
      }).then(function (events) {
          res.status(200).json(events);
          //console.log(JSON.stringify(events));
      }).catch(function (error) {
        res.status(500).json(error);        
      });
}

module.exports = controller;