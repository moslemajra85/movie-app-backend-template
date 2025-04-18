const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Get user details
exports.getUserDetails = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Purchase a movie
exports.purchaseMovie = async (req, res) => {
    const { movieId } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.purchasedMovies.includes(movieId)) {
            return res.status(400).json({ message: 'Movie already purchased' });
        }
        user.purchasedMovies.push(movieId);
        await user.save();
        res.status(200).json({ message: 'Movie purchased successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};