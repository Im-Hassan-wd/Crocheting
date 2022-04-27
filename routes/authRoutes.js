const { Router } = require('express');
const { login_get, login_post, signup_get, signup_post, signout_get } = require('../controllers/controller');

const router = Router();

router.get('/signup', signup_get);
router.post('/signup', signup_post);
router.get('/login', login_get);
router.post('/login', login_post);
router.get('/signout', signout_get)

module.exports = router;