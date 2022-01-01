import express from "express";
import path from "path";
import { getCategory, createCategory, updateCategory, deleteCategory } from "./src/category.js";
import { getTask, createTask, updateTask, deleteTask } from "./src/task.js";

const app = express();
app.use(express.json());

app.use('/', express.static(path.join(path.resolve(), 'public')));

// ... CATEGORIES ... //
// Get Category
app.get('/categories', (req, res) => getCategory(req, res));

// Create Category
app.post('/categories', (req, res) => createCategory(req, res));

// Update Category
app.put('/categories/:id', (req, res) => updateCategory(req, res));

// Delete Category
app.delete('/categories/:id', (req, res) => deleteCategory(req, res));

// ... TASKS ... //
// Get Task
app.get('/tasks', (req, res) => getTask(req, res));

// Create Task
app.post('/tasks', (req, res) => createTask(req, res));

// Update Task
app.put('/tasks/:id', (req, res) => updateTask(req, res));

// Delete Task
app.delete('/tasks/:id', (req, res) => deleteTask(req, res));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));