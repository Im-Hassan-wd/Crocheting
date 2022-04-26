const express = require('express');
const { home_get, login_get, login_post, signup_get, signup_post } = require('./controllers/controller');

const PORT = process.env.PORT || 3000

const app = express();

// register view engine
app.set('view engine', 'ejs');

// middle ware and static files
app.use(express.static('public'));

// database connection
const dbURI = "mongodb+srv://weird:test123@cluster0.ud8op.mongodb.net/chicrochet" 
mongoose.connect(dbURI)
  .then((result) => {
    app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
  })
  .catch((err) => console.log(err));

// routes 
app.get('/', home_get);
app.get('/signup', signup_get);
app.get('/signup', signup_post);
app.get('/login', login_get);
app.post('/login', login_post);

// eror 404
app.use((req, res) => res.status(404).render('404', { title: "404 Not Found"}));