import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var favoritesSchema = new Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    createdAt: { type: Date, required: false, default: Date.now },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

export default mongoose.model('Favorite', favoritesSchema);
