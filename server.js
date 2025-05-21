const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Optional if you're using a .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
MONGODB_URI=mongodb+srv ;//subasuba52621:<your_password>@cluster0.v2tgzo5.mongodb.net/paavaivastra?retryWrites=true&w=majority&appName=Cluster0
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to Paavai Vastra Backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
