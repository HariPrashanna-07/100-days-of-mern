📅 Day 8: Express.js & The First Server
Goal: Move from the terminal to the web by building an HTTP Server using the Express.js framework.

Key Concepts Learned:
Express Server: Setting up a server listening on Port 3000.

Request & Response: Understanding req (incoming data) and res (outgoing answer).

HTTP Methods:

GET: Fetching data (Browsers, req.query, req.params).

POST: Sending secure data via req.body (Login forms).

Dynamic Routes: Handling variable URLs like /users/:id.

API Testing: Using Thunder Client to send POST requests.

Code Highlight (POST Route):
Created an API endpoint to handle login requests.


app.use(express.json()); // Middleware to parse JSON body

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === "Hari" && password === "123") {
        res.json({ success: true, message: "Welcome back!" });
    } else {
        res.json({ success: false, message: "Wrong password!" });
    }
});