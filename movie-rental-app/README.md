# Movie Rental App

This is a movie rental application built with Node.js, Express, and MongoDB. The application allows users to manage movie rentals, including genres, movies, and user authentication.

## Features

- User registration and authentication using JWT
- CRUD operations for genres
- CRUD operations for movies, including association with genres
- User management, including tracking purchased movies

## Project Structure

```
movie-rental-app
├── src
│   ├── controllers        # Contains controller files for handling requests
│   ├── database           # Database connection file
│   ├── models             # Mongoose models for Genre, Movie, and User
│   ├── routes             # Route definitions for the application
│   ├── middlewares        # Middleware for authentication
│   ├── utils              # Utility functions, including JWT handling
│   └── app.js             # Main application file
├── package.json           # NPM package configuration
├── .env                   # Environment variables
├── .gitignore             # Files to ignore in Git
├── README.md              # Project documentation
└── server.js              # Entry point of the application
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd movie-rental-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The application will be running on `http://localhost:3000`.

## API Endpoints

- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Login an existing user

- **Genres**
  - `GET /api/genres` - Retrieve all genres
  - `POST /api/genres` - Create a new genre
  - `PUT /api/genres/:id` - Update a genre
  - `DELETE /api/genres/:id` - Delete a genre

- **Movies**
  - `GET /api/movies` - Retrieve all movies
  - `POST /api/movies` - Add a new movie
  - `PUT /api/movies/:id` - Update a movie
  - `DELETE /api/movies/:id` - Delete a movie

- **Users**
  - `GET /api/users/:id` - Retrieve user details
  - `POST /api/users/purchase` - Purchase a movie

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.