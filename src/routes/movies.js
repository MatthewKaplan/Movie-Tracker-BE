const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const Movie = require('../models/movie');

router.post('/movies', auth, async (req, res) => {
	const movie = await new Movie({ ...req.body, userList: req.user._id });
	try {
		await movie.save();
		res.status(201).send(movie);
	} catch (e) {
		res.status(400).send();
	}
});

router.get('/movies', auth, async (req, res) => {
	try {
		const movies = await Movie.find({});
		res.send(movies);
	} catch (e) {
		res.status(500).send();
	}
});

router.get('/movies/:id', auth, async (req, res) => {
	try {
		const movie = await Movie.findOne({ _id: req.params.id, userList: req.user._id });
		if (!movie) {
			return res.status(404).send({ error: 'Movie not located.' });
		}
		res.send(movie);
	} catch (e) {
		res.status(500).send();
	}
});

router.get('/movies/favorites/:id', auth, async (req, res) => {
	try {
		const favorites = await Movie.find({ userList: req.params.id });
		res.send(favorites);
	} catch (e) {
		res.status(500).send();
	}
});

router.delete('/movies/:id', auth, async (req, res) => {
	try {
		const movie = await Movie.findOneAndDelete({ _id: req.params.id, userList: req.user._id });
		// const movie = await Movie.findByIdAndDelete(req.params.id)
		if (!movie) {
			return res.status(404).send({ error: 'No movie found with that id' });
		}

		res.send(movie);
	} catch (e) {
		res.status(500).send();
	}
});

module.exports = router;
