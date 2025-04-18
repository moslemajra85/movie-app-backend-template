const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    purchasedMovies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }]
});

const User = mongoose.model('User', userSchema);

const validateUser = (user) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(user);
};

module.exports = {
    User,
    validateUser
};