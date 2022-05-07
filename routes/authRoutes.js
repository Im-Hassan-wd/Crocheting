const { Router } = require('express');
const { login_get, login_post, signup_get, signup_post, signout_get } = require('../controllers/authController');
const { preview_course_get, learning_course_get } = require('../controllers/contentController');

const router = Router();

// auth routes
router.get('/signup', signup_get);
router.post('/signup', signup_post);
router.get('/login', login_get);
router.post('/login', login_post);
router.get('/signout', signout_get);
// course routes
router.get('/course', preview_course_get);
router.get('/learning', learning_course_get);

module.exports = router;