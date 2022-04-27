const jwt = require('jsonwebtoken');

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

module.exports = { requireAuth };