module.exports.home_get = (req, res) => {
  res.render('home', { title: "Home" });
}

module.exports.login_get = (req, res) => {
  res.render('login', { title: "Login" });
}

module.exports.login_post = (req, res) => {
  res.send('user login')
}

module.exports.signup_get = (req, res) => {
  res.render('signup', { title: "signup" });
}

module.exports.signup_post = (req, res) => {
  res.send('user signup')
}