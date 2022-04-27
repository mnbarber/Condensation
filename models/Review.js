const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    content: {
        type: String,
        required: [true, 'You must provide a reason for your review']
    },
    game: {
        type: mongoose.Types.ObjectId,
        ref: 'Game'
    }
}, {timestamps: true})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review