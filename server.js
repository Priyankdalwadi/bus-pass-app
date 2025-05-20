const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());               // 🔄 Allow frontend to access APIs
app.use(express.json());       // 📦 Parse JSON request bodies

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
const busPassRoutes = require('./routes/busPassRoutes');
app.use('/api/pass', busPassRoutes); // 🛣 Mount API routes

// Serve static HTML frontend
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Test route
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

// Start server
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
