const User = require('../models/User');

const handleErrors = (err) => {
  let errors = { email: '', password: '' };

  // duplicate error code
  if(err.code === 11000){
    errors['email'] = 'that email already exist';
    return errors;
  }

  // validation errors
  if(err.message.includes('user validation failed')){
    Object.values(err.errors).forEach(({properties}) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

module.exports.signup_get = (req, res) => {
  res.render('signup', { title: "signup" });
}

module.exports.login_get = (req, res) => {
  res.render('login', { title: "Login" });
}

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password)

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  res.send('user login');
  console.log(email, password);
}