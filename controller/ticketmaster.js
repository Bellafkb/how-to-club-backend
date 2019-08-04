import config from '../config'
import axios from 'axios';
const ticketmaster = {};
//const rootURL = "https://app.ticketmaster.com/discovery/v2/"

ticketmaster.fetchEventsByLocation = (req, res) => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${config.TICKETMASTER_KEY}`)
        .then( (content) => {
            console.log(content)
            res.send(content)

        }).catch( (error) => {
            console.log(error)
            res.json({
                error
            })
        })  
}

export default ticketmaster;