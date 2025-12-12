// 1. Import Express
const express = require('express');

// 2. Create the App (The Server Object)
const app = express();
const PORT = 3000;
// Middleware: Allows Express to read JSON data sent in the Body
app.use(express.json());  // <--- IMPORTANT: Make sure this is near the top!

// usage: Send a POST request with JSON body { "username": "Hari", "password": "123" }
app.post('/login', (req, res) => {
    const user = req.body;
    console.log(user); 

    if (user.username === "Hari" && user.password === "123") {
        res.json({ success: true, message: "Welcome back, Hari!" });
    } else {
        res.json({ success: false, message: "Wrong password!" });
    }
});
app.post('/calculate', (req, res) => {
    const opr = req.body;
    const a = opr.a; // Extract 'a' from the body
    const b = opr.b; // Extract 'b' from the body

    console.log(opr);

    if (opr.operation === "add") {
        res.json({ "result": a + b });
    } 
    else if (opr.operation === "sub") {
        res.json({ "result": a - b });
    } 
    else if (opr.operation === "multiply") {
        res.json({ "result": a * b });
    } 
    else {
        res.json({ "error": "Invalid Operation" }); // Fixed syntax here!
    }
});
// 3. Create a Route (What happens when someone visits the homepage)
// req = Request (Data coming from the user)
// res = Response (Data we send back)
app.get('/', (req, res) => {
    res.send('Hello! This is your first Express Server running!');
});

// 4. Create another Route
app.get('/about', (req, res) => {
    res.send('<h1>About Me</h1><p>I am learning MERN stack.</p>');
});
app.get('/contract',(req,res)=>{
    res.send('<h1>9655560484</h1>');
})
app.get("/square/:number",(req,res)=>{
    const n=req.params.number;
    res.send(`<h1>The square of ${n} is ${n*n}</h1>`)
})
// Route: /search (No colon needed!)
// usage: http://localhost:3000/search?q=iphone&price=1000
app.get('/search', (req, res) => {
    // Express automatically parses the ?q=... part
    const query = req.query.q; 
    const city=req.query.city;
    
    if (query) {
        res.send(`You are searching for: <b>${query} in ${city}</b>`);
    } else {
        res.send('Please provide a search term (e.g., /search?q=laptop)');
    }
});

// 5. Start the Server (Listen for requests)
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:3000`);
});