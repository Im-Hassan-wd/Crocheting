const express = require('express');
const { home_get } = require('./controllers/controller');

const app = express();
app.listen(3000, () => console.log('listening on port 3000'));

// register view engine
app.set('view engine', 'ejs');

// middle ware and static files
app.use(express.static('public'));

// routes 
app.get('/', home_get);