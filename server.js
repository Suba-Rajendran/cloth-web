require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

connectToMongoDB();

app.get('/', (req, res) => {
  res.send('Server is working!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
