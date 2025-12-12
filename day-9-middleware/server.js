const express = require('express');
const app = express();
let isMaintenanceMode = true; // Change this to false to let people in
// --- MIDDLEWARE 1: The Logger (Tracks traffic) ---
const requestLogger = (req, res, next) => {
    console.log(`[LOG] ${req.method} request to ${req.url}`);
    next(); 
};

// --- MIDDLEWARE 2: The Bouncer (Checks for Password) ---
// This acts like a login check. 
const checkAge=(req,res,next)=>{
    const age=req.query.age;
    if (age>=18){
        next();

    }else{
        res.json({error: "You are too young!"})
    }
}
const maintenanceCheck=(req,res,next)=>
{
    if(isMaintenanceMode){
        res.json({"message": "Site is currently under maintenance. Please come back later."})

    }else{
        next();
    }
}
const checkPassword = (req, res, next) => {
    // We check if the URL has ?password=secret
    const password = req.query.password;

    if (password === "secret") {
        // ID verified! Let them pass.
        next();
    } else {
        // Wrong ID! Stop them right here.
        res.json({ error: "ACCESS DENIED. You need the correct password." });
    }
};
app.get('/beer', checkAge, (req, res) => {
    res.send('<h1>Here is your cold beer! 🍺</h1>');
});

// Apply Logger to EVERYTHING
app.use(requestLogger);
app.use(maintenanceCheck);

// Apply Security Check ONLY to the Admin Route
// Notice we put 'checkPassword' inside the route definition!
app.get('/admin', checkPassword, (req, res) => {
    res.send('<h1>Welcome to the Secret Admin Page! 🕵️‍♂️</h1>');
});

// This route is public (No password needed)
app.get('/', (req, res) => {
    res.send('<h1>Public Home Page (Everyone allowed)</h1>');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});