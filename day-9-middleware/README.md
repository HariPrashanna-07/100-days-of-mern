📅 Day 9: Middleware (The Security Guards)
Goal: Controlling the flow of requests using Middleware functions for security, logging, and access control.

Key Concepts Learned:
Middleware Flow: The concept of req -> middleware -> next() -> route.

Global Middleware: Functions that run for every request (e.g., app.use(logger)).

Route-Specific Middleware: Functions that protect specific routes (e.g., Admin checks).

Request Blocking: Using res.json() inside middleware to reject access (e.g., Maintenance Mode).

// Global Middleware: Maintenance Mode
const maintenanceCheck = (req, res, next) => {
    const isMaintenance = true;
    if (isMaintenance) {
        res.json({ message: "Site under maintenance. Come back later." });
    } else {
        next(); // Let them pass
    }
};

// Route Middleware: Age Verification
const checkAge = (req, res, next) => {
    if (req.query.age >= 18) next();
    else res.json({ error: "Too young!" });
};

app.use(maintenanceCheck); // Blocks everything if true
app.get('/beer', checkAge, (req, res) => res.send('🍺'));

🛠️ How to Run This Project
Clone the repo:

Bash

git clone <your-repo-url>

Install Dependencies:

Bash

npm install

Run the Server:

Bash

nodemon server.js



Test Endpoints:

Open Browser for GET requests: http://localhost:3000

Use Thunder Client for POST requests: http://localhost:3000/login



🚀 Next Steps
Moving on to Day 10, where I will combine these concepts to build a Full Task Manager API.