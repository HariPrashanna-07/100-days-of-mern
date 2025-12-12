Day 10 marks a significant transition from learning individual concepts to building a full-fledged backend application. Today, I built a complete REST API from scratch using Node.js and Express.js, implementing all four CRUD operations.
_______________________________________________________________

🎯 Goal
To understand how real-world applications manage data by building a Task Manager API and a Bookstore API that can Create, Read, Update, and Delete records.

______________________________________________

🧠 Key Concepts Learned
1. CRUD Operations
I implemented the four fundamental functions of persistent storage:

Create (POST): Adding new data using req.body.

Read (GET): Fetching data (All items or specific items via ID).

Update (PUT): Modifying existing data using req.params.id to find it and req.body to update it.

Delete (DELETE): Removing data using req.params.id.


_______________________________________________

2. Request Anatomy
req.params: Used for identifying resources (e.g., /books/1 -> ID is 1).

req.body: Used for sending secure/complex data (e.g., { "title": "New Book", "price": 20 }).

_____________________________________________________________

3. HTTP Status Codes
200 OK: Standard success response.

201 Created: Specific success response for POST requests.

404 Not Found: Error when an ID doesn't exist.


🛠️ Project: Bookstore API
A fully functional API to manage a bookstore inventory.
____________________________________________________________
The Code (server.js):

const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON body

// In-Memory Database
let books = [
    { id: 1, title: "Harry Potter", price: 20 },
    { id: 2, title: "The Hobbit", price: 15 }
];

// 1. GET ALL
app.get('/books', (req, res) => res.json(books));

// 2. CREATE (POST)
app.post('/books', (req, res) => {
    const newBook = { id: books.length + 1, ...req.body };
    books.push(newBook);
    res.status(201).json(books);
});

// 3. UPDATE (PUT)
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if (book) {
        book.price = req.body.price;
        res.json(books);
    } else {
        res.status(404).json("Not Found");
    }
});

// 4. DELETE
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(b => b.id !== id);
    res.json(books);
});

app.listen(3000, () => console.log('Server running on port 3000'));








______________________________________
Method,Endpoint,Description,Body Required?
GET,/books,Get list of all books,❌ No
POST,/books,Add a new book,✅ Yes (JSON)
PUT,/books/:id,Update a book's price,✅ Yes (JSON)
DELETE,/books/:id,Remove a book,❌ No