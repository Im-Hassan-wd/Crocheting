module.exports.home_get = (req, res) => {
  res.render('home', { title: "Home" });
}

module.exports.login_get = (req, res) => {
  res.render('login', { title: "Login" });
}