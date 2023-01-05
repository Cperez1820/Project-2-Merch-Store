require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'T-shirts', sortOrder: 10},
    {name: 'Hoodies', sortOrder: 20},
    {name: 'Crewnecks', sortOrder: 30},
    {name: 'Jackets', sortOrder: 40},
    {name: 'Shorts', sortOrder: 50},
    {name: 'Socks', sortOrder: 60},
    {name: 'Soaps', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([

    // T-shirts
    {name: 'Graphic Tee', color: 'Grey', category: categories[0], price: 15.95},
    {name: 'Long Sleeve', color: 'White', category: categories[0], price: 16.95},
    {name: 'Logo Tee', color: 'Black', category: categories[0], price: 25.95},

    // Hoodies
    {name: 'Resvers-able Hoodie', color: 'Black/red', category: categories[1], price: 14.95},
    {name: 'Zipper Hoodie', color: 'black', category: categories[1], price: 13.95},
    {name: 'Logo Hoodie', color: 'Grey', category: categories[1], price: 25.95},

    // Crewnecks
    {name: 'Logo Crewneck', color: 'White', category: categories[2], price: 45.95},
    {name: 'Smooth-material Crewneck', color: 'Burgundy', category: categories[2], price: 40.95},
    {name: 'Plain Crewneck', color: 'Navy Blue', category: categories[3], price: 30.95},

    // jackets
    {name: 'Resvers-able Windbreaker', color: 'sky blue/ light pink', category: categories[3], price: 70.95},
    {name: 'Bomber jacket', color: 'White', category: categories[3], price: 50.95},

    // Shorts
    {name: 'Basket-ball Shorts', color: 'Black', category: categories[4], price: 25.95},
    {name: 'Sweat Shorts', color: 'Grey', category: categories[4], price: 30.95},
    {name: 'Resvers-able dress Shorts', color: 'Dark Green/Dark Brown', category: categories[5], price: 39.95},

    // Socks
    {name: 'Cloud Ankle Socks', color: 'Black', category: categories[5], price: 3.95},
    {name: ' Logo Executive Socks', color: 'Black', category: categories[5], price: 8.95},
    {name: ' Resvers-able Crew Socks', color: 'Black', category: categories[5], price: 6.95},
    {name: 'Smooth material Liner Socks', color: 'Black', category: categories[6], price: 4.95},

    // Soap
    {name: 'Charcoal', color: 'Black', category: categories[6], price: 0.95},
    {name: 'Mango', color: 'light Orange', category: categories[6], price: 7.95},
    {name: 'Rose', color: 'Light pink', category: categories[6], price: 8.95},
    {name: 'Lavander', color: 'Light Purple', category: categories[6], price: 3.95},
  ]);

  console.log(items)
  
  
  process.exit();

})();