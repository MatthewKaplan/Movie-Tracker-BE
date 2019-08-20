const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	movie_id: {
		type: Number,
		trim: true,
		required: true
	},
	user_id: {
		type: Number,
		trim: true,
		required: true
	},
	title: {
		type: String,
		trim: true,
		required: true
	},
	poster_path: {
		type: String,
		trim: true
  },
  release_date: {
    type: String,
    trim: true,
    required: true
  },
  vote_average: {
    type: String,
    trim: true,
    required: true
  },
  overview: {
    type: String,
    trim: true,
    required: true
  }
});

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;