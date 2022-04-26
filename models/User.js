const mongoose = require('mongoose');
const { email } = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [email, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a paasword'],
    minlength: [6, 'Minimum paasword length is 6 characters']
  }
});

const User = mongoose.model('user', userSchema);

module.exports = User;