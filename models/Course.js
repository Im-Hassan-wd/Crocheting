const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  thumbnail: {
    type: File
  }, 
  content: {
    type: Array
  }
});

const Course = mongoose.model('user', courseSchema);

module.exports = Course;