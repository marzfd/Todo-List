import express from "express";
import path from "path";
import db from "./database.js";

const app = express();
const __dirname = path.resolve();

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

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
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.send(results);
    }
  });
}

function createCategory(req, res) {
  if (!req.body) {
    res.status(400).send('Invalid Request !');
  }
  else {
    const newCategory = {
      category_name: req.body.category_name
    };
    db.query('INSERT INTO categories SET ?', newCategory, (err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.send(results);
      }
    });
  }
}

function updateCategory(req, res) {
  if (!req.body) {
    res.status(400).send('Invalid Request !');
  }
  else {
    const category = data.find(category => category.category_id === req.params.id);
    if (!category) {
      res.status(404).send('Category not found !');
    }
    else {
      category.category_name = req.body.category_name;
      db.query('UPDATE categories SET ? WHERE category_id = ?', [category.category_name, req.params.id], (err, results) => {
        if (err) {
          res.status(500).send(err);
        }
        else {
          res.send(results);
        }
      });
    }
  }
}

function deleteCategory(req, res) {
  const category = data.find(category => category.category_id === req.params.id);
  if (!category) {
    res.status(404).send('Category not found !');
  }
  else {
    const index = data.indexOf(category);
    data.splice(index, 1);
    res.send(data);
  }
}

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));