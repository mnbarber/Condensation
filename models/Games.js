const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    release: {
        type: String,
        required: true
    },
    image: String,
    price: Number
});

const Game = mongoose.model('Game', gameSchema);
