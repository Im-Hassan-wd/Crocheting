const jwt = require('jsonwebtoken');
const User = require('../models/User')

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & verified
  if (token) {
    jwt.verify(token, 'chiccrochet user secret', (err, decodedToken) => {
      if (err) {
        res.redirect('/login');
      } else {
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
}

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, 'chiccrochet user secret', async (err, decodedToken) => {
      if (err) {
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  }
}

module.exports = { requireAuth };