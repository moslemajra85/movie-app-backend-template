const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const genreRoutes = require('./routes/genreRoutes');
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');
const { connectDB } = require('./database/connect');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});