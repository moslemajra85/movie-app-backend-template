const Movie = require('../models/movie');
const Genre = require('../models/genre');

// Add a new movie
exports.addMovie = async (req, res) => {
    try {
        const { title, description, genreId, price } = req.body;
        const genre = await Genre.findById(genreId);
        if (!genre) {
            return res.status(404).json({ message: 'Genre not found' });
        }
        const movie = new Movie({ title, description, genre: genreId, price });
        await movie.save();
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all movies
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find().populate('genre');
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a movie by ID
exports.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id).populate('genre');
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a movie
exports.updateMovie = async (req, res) => {
    try {
        const { title, description, genreId, price } = req.body;
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        const genre = await Genre.findById(genreId);
        if (!genre) {
            return res.status(404).json({ message: 'Genre not found' });
        }
        movie.title = title;
        movie.description = description;
        movie.genre = genreId;
        movie.price = price;
        await movie.save();
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a movie
exports.deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};