import config from "./config/databaseConfig.js";
const connection = config.connection;

function invalidRequest(res) {
  res.status(400).send(JSON.stringify({ error: 'Invalid Request !' }));
}

export function getCategory(req, res) {
  res.header('Content-Type', 'application/json');
  connection.query(
    'SELECT * FROM categories',
    (err, results) => {
      if (err) res.status(500).send(JSON.stringify({ error: err.message}));
      res.status(200).send(JSON.stringify(results));
    }
  );
}

export function createCategory(req, res) {
  res.header('Content-Type', 'application/json');
  if (!req.body) invalidRequest(res);
  connection.query(
    'INSERT INTO categories SET ?',
    {category_name: req.body.category_name},
    (err, results) => {
      if (err) res.status(500).send(JSON.stringify({ error: err.message }));
      res.status(200).send(JSON.stringify(results));
    }
  );
}

export function updateCategory(req, res) {
  if (!req.body) invalidRequest(res);
  connection.query(
    'UPDATE categories SET ? WHERE ?',
    [{category_name: req.body.category_name}, {category_id: req.params.id}],
    (err, results) => {
      if (err) res.status(500).send(JSON.stringify({ error: err.message }));
      res.status(200).send(JSON.stringify(results));
    }
  );
}

export function deleteCategory(req, res) {
  connection.query(
    'DELETE FROM categories WHERE ?',
    {category_id: req.params.id},
    (err, results) => {
      if (err) res.status(500).send(JSON.stringify({ error: err.message }));
      res.status(200).send(JSON.stringify(results));
    }
  );
}