// seedProducts.js
const mongoose = require('mongoose');
const Product = require('./models/Product');

// 🔗 Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/paavaivasta', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.error('Connection error:', err);
});

// 🌸 Sample Products
const products = [
  {
    name: 'Handloom Cotton Kurta',
    price: 999,
    image: 'assets/images/cotton.jpg',
  },
  {
    name: 'Floral Kurta Set',
    price: 1299,
    image: 'assets/images/floral.jpg',
  },
  {
    name: 'Pastel Chikankari Kurta',
    price: 1599,
    image: 'assets/images/pastel.jpg',
  },
];

// 🚀 Insert Products
Product.insertMany(products)
  .then(() => {
    console.log('✅ Sample products inserted!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('❌ Failed to insert products:', err);
    mongoose.connection.close();
  });
