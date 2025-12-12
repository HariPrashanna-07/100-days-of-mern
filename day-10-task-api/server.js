const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// --- DATABASE ---
let tasks = [
    { id: 1, title: "Learn Node.js", completed: true },
    { id: 2, title: "Build a REST API", completed: false }
];

// --- ROUTES ---

// 1. GET ALL TASKS
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// 2. GET SINGLE TASK
app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === id);
    
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: "Task not found" });
    }
});

// 3. CREATE TASK (POST)
app.post('/tasks', (req, res) => {
    const newTitle = req.body.title;
    if (!newTitle) {
        return res.status(400).json({ error: "Title is required" });
    }

    const newTask = {
        id: tasks.length + 1,
        title: newTitle,
        completed: false // Fixed the syntax error here (using : instead of =)
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// 4. UPDATE TASK (PUT) <--- This is the new part!
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === id);

    if (task) {
        // Update only if data is sent
        if (req.body.title) task.title = req.body.title;
        if (req.body.completed !== undefined) task.completed = req.body.completed;

        res.json(task);
    } else {
        res.status(404).json({ error: "Task not found" });
    }
});

// 5. DELETE TASK (DELETE)
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = tasks.length;
    
    // Filter out the task with the given ID
    tasks = tasks.filter((t) => t.id !== id);

    if (tasks.length < initialLength) {
        res.json({ message: "Task deleted successfully" });
    } else {
        res.status(404).json({ error: "Task not found" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});