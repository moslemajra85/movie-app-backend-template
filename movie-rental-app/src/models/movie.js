const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre',
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;