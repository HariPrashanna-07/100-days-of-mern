require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(cors()); // Allow Frontend to talk to Backend
app.use(express.json()); // Allow JSON data to be read

// CONNECT TO DATABASE
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ Connection Error:', err));

// SCHEMA (The Blueprint)
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: String,
    rating: Number,
    hasWatched: { type: Boolean, default: false }
});

const Movie = mongoose.model('Movie', movieSchema);

// --- ROUTES ---

// 1. GET (Read all movies)
app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movies" });
    }
});

// 2. POST (Add a movie)
app.post('/movies', async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: "Failed to add movie" });
    }
});

// START SERVER
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});