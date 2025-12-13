require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
app.use(express.json());

// --- 1. CONNECT TO DATABASE ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ Connection Error:', err));

// --- 2. DEFINE THE BLUEPRINT (Schema) ---
// This enforces rules: Every book MUST have a title & price.
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    author: String,
    price: { type: Number, required: true }
});

// --- 3. CREATE THE MODEL ---
// The "Book" model is the tool we use to talk to the DB.
const Book = mongoose.model('Book', bookSchema);

// --- 4. THE ROUTES (Async/Await) ---

// CREATE (POST)
app.post('/books', async (req, res) => {
    try {
        // .create() saves it directly to MongoDB
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ ALL (GET)
app.get('/books', async (req, res) => {
    try {
        // .find() fetches everything from the DB
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch books" });
    }
});

// UPDATE (PUT)
app.put('/books/:id', async (req, res) => {
    try {
        // findByIdAndUpdate(id, data, options)
        // { new: true } means "Give me back the updated version, not the old one"
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } 
        );
        
        if (updatedBook) {
            res.json(updatedBook);
        } else {
            res.status(404).json({ error: "Book not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Update failed" });
    }
});

// DELETE (DELETE)
app.delete('/books/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        
        if (deletedBook) {
            res.json({ message: "Book deleted successfully" });
        } else {
            res.status(404).json({ error: "Book not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Delete failed" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});