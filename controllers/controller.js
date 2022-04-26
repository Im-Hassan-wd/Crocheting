const User = require('../models/User');

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // validation errors
  if(err.message.include('user validation failed')){
    console.log(err);
  }
}

module.exports.signup_get = (req, res) => {
  res.render('signup', { title: "signup" });
}

module.exports.login_get = (req, res) => {
  res.render('login', { title: "Login" });
}

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).send('user not created');
  }
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  res.send('user login');
  console.log(email, password);
}