const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use('cors');

// routes
app.use('/food', require('/routes/food'));

//connect to DB
mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
