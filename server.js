import express from "express";
import path from "path";
import config from "./config.js";

const connection = config.connection;

const app = express();
app.use(express.json());

app.use('/', express.static(path.join(path.resolve(), 'public')));

// CATEGORIES

// Get Category
app.get('/categories', (req, res) => getCategory(req, res));

// Create Category
app.post('/categories', (req, res) => createCategory(req, res));

// Update Category
app.put('/categories/:id', (req, res) => updateCategory(req, res));

// Delete Category
app.delete('/categories/:id', (req, res) => deleteCategory(req, res));

function getCategory(req, res) {
  res.header('Content-Type', 'application/json');
  connection.query('SELECT * FROM categories', (err, results) => {
    if (err) {
      res.status(500).send(JSON.stringify({
        error: err.message
      }));
    } else {
      res.status(200).send(JSON.stringify(results));
    }
  });
}

function createCategory(req, res) {
  res.header('Content-Type', 'application/json');
  if (!req.body) {
    res.status(400).send(JSON.stringify({
      error: 'Invalid Request !'
    }));
  }
  else {
    connection.query('INSERT INTO categories SET ?', {category_name: req.body.category_name}, (err, results) => {
      if (err) {
        res.status(500).send(JSON.stringify({
          error: err.message
        }));
      } else {
        res.status(200).send(JSON.stringify(results));
      }
    });
  }
}

function updateCategory(req, res) {
  if (!req.body) {
    res.status(400).send(JSON.stringify({
      error: 'Invalid Request !'
    }));
  }
  else {
    connection.query('UPDATE categories SET ? WHERE ?', [{category_name: req.body.category_name}, {category_id: req.params.id}], (err, results) => {
      if (err) {
        res.status(500).send(JSON.stringify({
          error: err.message
        }));
      } else {
        res.status(200).send(JSON.stringify(results));
      }
    });
  }
}

function deleteCategory(req, res) {
  connection.query('DELETE FROM categories WHERE ?', {category_id: req.params.id}, (err, results) => {
    if (err) {
      res.status(500).send(JSON.stringify({
        error: err.message
      }));
    } else {
      res.status(200).send(JSON.stringify(results));
    }
  });
}

// TASKS

// Get Task
app.get('/tasks', (req, res) => getTask(req, res));

// Create Task
app.post('/tasks', (req, res) => createTask(req, res));

// Update Task
app.put('/tasks/:id', (req, res) => updateTask(req, res));

// Delete Task
app.delete('/tasks/:id', (req, res) => deleteTask(req, res));

function getTask(req, res) {
  res.header('Content-Type', 'application/json');
  connection.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      res.status(500).send(JSON.stringify({
        error: err.message
      }));
    } else {
      res.status(200).send(JSON.stringify(results));
    }
  });
}

function createTask(req, res) {
  res.header('Content-Type', 'application/json');
  if (!req.body) {
    res.status(400).send(JSON.stringify({
      error: 'Invalid Request !'
    }));
  }
  else {
    connection.query('INSERT INTO tasks SET ? ', {task_name: req.body.task_name, is_done: req.body.is_done, category_id: req.body.category_id}, (err, results) => {
      if (err) {
        res.status(500).send(JSON.stringify({
          error: err.message
        }));
      } else {
        res.status(200).send(JSON.stringify(results));
      }
    });
  }
}

function updateTask(req, res) {
  if (!req.body) {
    res.status(400).send(JSON.stringify({
      error: 'Invalid Request !'
    }));
  }
  else {
    connection.query('UPDATE tasks SET ? WHERE ?', [{task_name: req.body.task_name, is_done: req.body.is_done, category_id: req.body.category_id}, {task_id: req.params.id}], (err, results) => {
      if (err) {
        res.status(500).send(JSON.stringify({
          error: err.message
        }));
      } else {
        res.status(200).send(JSON.stringify(results));
      }
    });
  }
}

function deleteTask(req, res) {
  connection.query('DELETE FROM tasks WHERE ?', {task_id: req.params.id}, (err, results) => {
    if (err) {
      res.status(500).send(JSON.stringify({
        error: err.message
      }));
    } else {
      res.status(200).send(JSON.stringify(results));
    }
  });
}

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));