const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');


require('dotenv').config();

// Connect to the database
require('./config/database');

const app = express();

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });