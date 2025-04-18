// Movie Rental App Backend

// This is the backend for a Movie Rental application built using Node.js, Express, Mongoose, and Joi. The app allows users to manage genres, movies, and user accounts. Users can authenticate using JWT and rent movies.

// Features

// - **User Authentication**: Secure login and registration using JWT.
// - **Genre Management**: Add, update, delete, and view genres.
// - **Movie Management**: Add, update, delete, and view movies. Each movie is associated with a genre.
// - **User Management**: Manage user accounts with validation for email, password, and phone.

// Project Structure

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
