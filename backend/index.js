const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

// Connect to MongoDB
connectToMongo();

const app = express();
const port = 5000;

app.use(cors())

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

app.listen(port, () => {
    console.log(`iNotebook Backend listening at http://localhost:${port}`);
});
