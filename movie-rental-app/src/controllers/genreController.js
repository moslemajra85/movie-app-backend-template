const Genre = require('../models/genre');

// Create a new genre
exports.createGenre = async (req, res) => {
    try {
        const genre = new Genre(req.body);
        await genre.save();
        res.status(201).json(genre);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all genres
exports.getGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        res.status(200).json(genres);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a genre by ID
exports.getGenreById = async (req, res) => {
    try {
        const genre = await Genre.findById(req.params.id);
        if (!genre) return res.status(404).json({ message: 'Genre not found' });
        res.status(200).json(genre);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a genre
exports.updateGenre = async (req, res) => {
    try {
        const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!genre) return res.status(404).json({ message: 'Genre not found' });
        res.status(200).json(genre);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a genre
exports.deleteGenre = async (req, res) => {
    try {
        const genre = await Genre.findByIdAndDelete(req.params.id);
        if (!genre) return res.status(404).json({ message: 'Genre not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};