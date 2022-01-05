import config from "./databaseConfig.js";
import { showResults, invalidRequest } from './helpers.js';

const connection = config.connection;

export function getCategory(req, res) {
  res.header('Content-Type', 'application/json');
  connection.query(
    'SELECT * FROM categories',
    (err, results) => showResults(res, err, results)
  );
}

export function createCategory(req, res) {
  res.header('Content-Type', 'application/json');
  const { category_name } = req.body;
  if (!category_name) {
    invalidRequest(res);
  } else {
    connection.query(
      'INSERT INTO categories SET ?',
      {category_name},
      (err, results) => showResults(res, err, results)
    );
  }
}

export function updateCategory(req, res) {
  const { category_name } = req.body;
  if (!category_name) {
    invalidRequest(res);
  } else {
    connection.query(
      'UPDATE categories SET ? WHERE ?',
      [{category_name}, {category_id: req.params.id}],
      (err, results) => showResults(res, err, results)
    );
  }
}

export function deleteCategory(req, res) {
  connection.query(
    'DELETE FROM categories WHERE ?',
    {category_id: req.params.id},
    (err, results) => showResults(res, err, results)
  );
}