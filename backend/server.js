// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',
}));

// Session Configuration
app.use(session({
  secret: process.env.SESSION_SECRET, // Secret for session encryption
  resave: false, 
  saveUninitialized: true, 
  cookie: { secure: false }
}));

// MongoDB connection
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Routes and server setup
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
