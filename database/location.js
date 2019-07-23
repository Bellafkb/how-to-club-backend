import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var locationSchema = new Schema({
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    name: { type: String, required: true },
    price_level: { type: Number },
    rating: { type: Number },
    user_ratings_total: { type: Number },
    vicinity: { type: String, required: true },
    city : {type: String, required: true},
});

export default mongoose.model('Location', locationSchema);
