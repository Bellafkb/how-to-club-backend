export default class Location {
    constructor(lat, lng, name, price_level, rating, user_ratings_total, vicinity, city) {
        this.lat = lat;
        this.lng = lng;
        this.name = name;
        this.price_level = price_level;
        this.rating = rating;
        this.user_ratings_total = user_ratings_total;
        this.vicinity = vicinity;
        this.city = city;

    }
}