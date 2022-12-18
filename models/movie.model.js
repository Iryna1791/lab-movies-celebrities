const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Movie({
    title: {
        type: String
    },
    genre: {
        type: String
    },
    plot: {
        type: String
    },
    cast: {
        type: String
    }
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;