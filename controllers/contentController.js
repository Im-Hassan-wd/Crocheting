module.exports.preview_course_get = (req, res) => {
  res.render('course/preview', { title: 'Course preview' });
}

module.exports.learning_course_get = (req, res) => {
  res.render('course/learning', { title: 'Course learning' });
}