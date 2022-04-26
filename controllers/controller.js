module.exports.signup_get = (req, res) => {
  res.render('signup', { title: "signup" });
}

module.exports.login_get = (req, res) => {
  res.render('login', { title: "Login" });
}

module.exports.signup_post = (req, res) => {
  const { email, password } = req.body;
  res.send('user signup');
  console.log(email, password);
}

module.exports.login_post = (req, res) => {
  const { email, password } = req.body;
  res.send('user login');
  console.log(email, password);
}