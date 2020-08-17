const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const DB = require('./config/keys').MongoURI;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use('/')

// routes
app.use('/dishes', require('./routes/dishes'));
app.use('/lists', require('./routes/lists'));
// app.use('/recipes', require('./routes/recipes'));

//connect to DB
mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err))


const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
