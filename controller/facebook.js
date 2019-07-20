import config from '../config'
const facebook = {};
var EventSearch = require("facebook-events-by-location-core");


var es = new EventSearch();


facebook.fetchEventsByLocation = (req,res)=>{
    es.search({
        "lat": 40.710803,
        "lng": -73.964040,
        "accessToken" : config.FACEBOOK_API_KEY,
      }).then( (events) => {
            res.status(200).json({
                events
            })
      }).catch((err) => {
        res.status(500).json({err})
      });
}

export default facebook;