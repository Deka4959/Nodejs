const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/books')
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log(err));

// Import routes
const bookRoutes = require('./routes/books');

// IMPORTANT: Register routes
app.use('/books', bookRoutes);

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});