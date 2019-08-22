const eventbrite = require('eventbrite').default;
import config from '../config'

const sdk = eventbrite({ token: config.EVENTBRITE_API_KEY });

export const getEventBriteEventsByCity = async (city, radius, category) => {
    try {
        let events = await sdk.request(`/events/search?location.address=${city
            }&location.within=${radius}&categories=${category}`);
        return events;
    } catch (error) {
        throw error;
    }
}