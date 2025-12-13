Day 11 (Database Integration) 🍃

Day 11 marks the most critical infrastructure upgrade in the backend module. Today, I moved away from temporary in-memory storage (arrays) and successfully connected my Node.js application to a persistent MongoDB database.

🎯 Goal:
To eliminate "Server Amnesia" by connecting the Express.js server to a MongoDB database (both Local and Cloud/Atlas), ensuring data survives server restarts.

🧠 Key Concepts Learned
1. MongoDB & Mongoose
MongoDB: A NoSQL database that stores data in JSON-like documents.

Mongoose: An ODM (Object Data Modeling) library for Node.js. It acts as a bridge, allowing JavaScript to talk to the database easily.

Connection String: The URL containing credentials (mongodb://... or mongodb+srv://...) used to locate and authenticate with the database.

2. Environment Variables (.env)
Security First: Learned never to hardcode sensitive credentials (passwords, API keys) directly in the code.

dotenv Library: Used to load variables from a .env file into process.env to keep secrets safe and separate from the codebase.

Fallback Logic: Using process.env.PORT || 3000 to ensure the app works in both local and deployment environments.

3. Asynchronous Connections
Async/Await: Used to handle the database connection process, which is an asynchronous operation.

Try/Catch Blocks: Implemented error handling to gracefully log connection failures instead of crashing the application immediately.

🛠️ The Code (server.js)

// 1. Load Environment Variables
require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// 2. Database Connection Logic
const connectDB = async () => {
    try {
        // Wait for the handshake with the database
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ Connection Failed:', error.message);
        process.exit(1); // Exit process with failure
    }
};

// 3. Initialize Connection
connectDB();

app.get('/', (req, res) => {
    res.send('API is running and connected to Database!');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});


___________________________________________
🚀 How to Run locally
Clone the repo:

Bash

git clone <your-repo-url>
Install Dependencies:

npm install express mongoose dotenv
Setup Environment:

Create a .env file in the root folder.

Add your MONGO_URI.

Start the Server:

node server.js
Verify: Check the terminal for the ✅ MongoDB Connected Successfully message.