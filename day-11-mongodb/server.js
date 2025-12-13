require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
const connectDB = async () => {
    try {
        // This reads the MONGO_URI from your .env file
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB Connected Successfully');
    } catch (e) {
        console.error('❌ Connection Failed:', e.message);
    }
};

connectDB();

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});