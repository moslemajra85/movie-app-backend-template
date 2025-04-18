const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

// Create a new genre
router.post('/', genreController.createGenre);

// Get all genres
router.get('/', genreController.getAllGenres);

// Get a genre by ID
router.get('/:id', genreController.getGenreById);

// Update a genre by ID
router.put('/:id', genreController.updateGenre);

// Delete a genre by ID
router.delete('/:id', genreController.deleteGenre);

module.exports = router;