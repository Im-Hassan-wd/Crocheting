const express = require('express');
const { home_get, login_get } = require('./controllers/controller');

const PORT = process.env.PORT || 4000

const app = express();
app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));

// register view engine
app.set('view engine', 'ejs');

// middle ware and static files
app.use(express.static('public'));

// routes 
app.get('/', home_get);
app.get('/login', login_get);