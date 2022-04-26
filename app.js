const express = require('express');
const { home_get, login_get, login_post } = require('./controllers/controller');

const PORT = process.env.PORT || 3000

const app = express();
app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));

// register view engine
app.set('view engine', 'ejs');

// middle ware and static files
app.use(express.static('public'));

// routes 
app.get('/', home_get);
app.get('/login', login_get);
app.post('/login', login_post);

// eror 404
app.use((req, res) => res.status(404).render('404', { title: "404 Not Found"}));