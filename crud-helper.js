//Connect to database
require('dotenv').config();
require('./config/database');


// Require the Mongoose models
const User = require('./models/users');
const Item = require('./models/item');
const Category = require('./models/category');
const Order = require('./models/orders');

let user, item, category, order;
let users, items, categories, orders;
