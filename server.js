import express from "express";
import path from "path";
import { getCategory, createCategory, updateCategory, deleteCategory } from "./src/category.js";
import { getTask, createTask, updateTask, deleteTask } from "./src/task.js";
import { getUser, createUser, updateUser, deleteUser, checkUser } from "./src/users.js";

const app = express();
app.use(express.json());

app.use('/', express.static(path.join(path.resolve(), 'client/build')));

// ... CATEGORIES ... //
// Get Category
app.get('/api/categories', (req, res) => getCategory(req, res));

// Create Category
app.post('/api/categories', (req, res) => createCategory(req, res));

// Update Category
app.put('/api/categories/:id', (req, res) => updateCategory(req, res));

// Delete Category
app.delete('/api/categories/:id', (req, res) => deleteCategory(req, res));

// ... TASKS ... //
// Get Task
app.get('/api/tasks', (req, res) => getTask(req, res));

// Create Task
app.post('/api/tasks', (req, res) => createTask(req, res));

// Update Task
app.put('/api/tasks/:id', (req, res) => updateTask(req, res));

// Delete Task
app.delete('/api/tasks/:id', (req, res) => deleteTask(req, res))

// ... USERS ... //
// Get User
app.get('/api/users', (req, res) => getUser(req, res));

// Create User
app.post('/api/users', (req, res) => createUser(req, res));

// Update User
app.put('/api/users/:username', (req, res) => updateUser(req, res));

// Delete User
app.delete('/api/users/:username', (req, res) => deleteUser(req, res));

// Check if user exists
app.get('/api/p/:tagId', (req, res) => checkUser(req, res));

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));