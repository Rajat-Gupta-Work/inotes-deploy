const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')
require('dotenv').config();

// Connect to MongoDB
connectToMongo();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors({
  origin: 'https://mern-i-notes-f.vercel.app/' // Replace with your frontend URL
}));

// Middleware
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const notesRoutes = require('./routes/notes');

// Log the types and contents of the imported modules
// console.log('Type of authRoutes:', typeof authRoutes); // Should log "function"
// console.log('Contents of authRoutes:', authRoutes);
// console.log('Type of notesRoutes:', typeof notesRoutes); // Should log "function"
// console.log('Contents of notesRoutes:', notesRoutes);

// Available Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
    console.log(`iNotebook Backend listening at : ${PORT}`);
});
