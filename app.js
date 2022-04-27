// const uri = require('./db/DBURI');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth } = require('./middleware/authMiddleware');

const PORT = process.env.PORT || 3000

const app = express();

// register view engine
app.set('view engine', 'ejs');

// middle ware and static files
app.use(express.static('public'));
app.use(express.json({}));
app.use(cookieParser());

// database connection
const dbURI =  "mongodb+srv://weird:test123@cluster0.ud8op.mongodb.net/chicrochet";
mongoose.connect(dbURI)
  .then((result) => {
    app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
  })
  .catch((err) => console.log(err));

// routes 
app.get('/', requireAuth, (req, res) => res.render('home', { title: "Home" }))
app.use(authRoutes);

// eror 404
app.use((req, res) => res.status(404).render('404', { title: "404 Not Found"}));