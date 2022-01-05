import config from "./databaseConfig.js";
import { showResults, invalidRequest } from './helpers.js';

const connection = config.connection;

export function getUser(req, res) {
  res.header('Content-Type', 'application/json');
  connection.query(
    'SELECT * FROM users',
    (err, results) => showResults(res, err, results)
  );
}

export function createUser(req, res) {
  res.header('Content-Type', 'application/json');
  const { name, username } = req.body;
  if (!name || !username) {
    invalidRequest(res)
  } else {
    if (username.length < 3) {
      res.status(400).send({
        error: 'Username must be at least 3 characters long'
      });
    } else {
      connection.query(
        'INSERT INTO users SET ? ',
        { name, username },
        (err, results) => showResults(res, err, results)
      );
    }
  }
}

export function updateUser(req, res) {
  const { name, username } = req.body;
  if (!name || !username) {
    invalidRequest(res);
  } else {
    connection.query(
      'UPDATE users SET ? WHERE ?',
      [{ name, username }, { username: req.params.username }],
      (err, results) => showResults(res, err, results)
    );
  }
}

export function deleteUser(req, res) {
  connection.query(
    'DELETE FROM users WHERE ?',
    { username: req.params.username },
    (err, results) => showResults(res, err, results)
  );
}