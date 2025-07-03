require('dotenv').config(); // Load environment variables first
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import DB connection function
const contactRoutes = require('./routes/contactRoutes'); // Import contact routes

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(express.json()); // Body parser for JSON requests

// CORS setup (IMPORTANT for connecting frontend and backend)
// For development, allow all origins. For production, restrict to your frontend URL.
// Replace 'http://localhost:3000' with your deployed frontend URL (e.g., https://your-firebase-app.web.app)

app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? 'https://hitech-interior.vercel.app' : 'http://localhost:3000',
  optionsSuccessStatus: 200
}));


// Define Routes
app.get('/', (req, res) => {
  res.send('Hitech Interior Backend API is running!');
});

app.use('/api/contact', contactRoutes); // Use the contact routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});