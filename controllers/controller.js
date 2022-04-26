module.exports.home_get = (req, res) => {
  res.render('home', { title: "Home" });
}

module.exports.login_get = (req, res) => {
  res.render('login', { title: "Login" });
}

module.exports.login_post = (req, res) => {
  res.send('user login')
}

module.exports.logout_get = (req, res) => {
  res.render('logout', { title: "logout" });
}

module.exports.logout_post = (req, res) => {
  res.send('user logout')
}