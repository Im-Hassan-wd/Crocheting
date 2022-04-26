const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const uri = require('./db/DBURI');

const PORT = process.env.PORT || 3000

const app = express();

// register view engine
app.set('view engine', 'ejs');

// middle ware and static files
app.use(express.static('public'));
app.use(express.json({}))

// database connection
const dbURI =  uri;
mongoose.connect(dbURI)
  .then((result) => {
    app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
  })
  .catch((err) => console.log(err));

// routes 
app.get('/', (req, res) => res.render('home', { title: "Home" }))
app.use(authRoutes);

// eror 404
app.use((req, res) => res.status(404).render('404', { title: "404 Not Found"}));