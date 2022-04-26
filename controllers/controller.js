module.exports.home_get = (req, res) => {
  res.render('home', { title: "Home" });
}

module.exports.login_get = (req, res) => {
  res.render('login', { title: "Login" });
}

module.exports.login_post = (req, res) => {
  res.send('user login')
}