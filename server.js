const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');


require('dotenv').config();

// Connect to the database
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
app.use(express.static(path.join(__dirname, "build")))
app.use(require('./config/checkToken'))

// Put API routes here, before the "catch all" route
app.use('/api/users', require("./routes/api/users"))


const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Express app running on port: ${PORT}`)
  });