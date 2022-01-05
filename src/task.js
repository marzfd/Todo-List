import config from "./databaseConfig.js";
import { showResults, invalidRequest } from './helpers.js';

const connection = config.connection;

export function getTask(req, res) {
  res.header('Content-Type', 'application/json');
  connection.query(
    'SELECT * FROM tasks',
    (err, results) => showResults(res, err, results)
  );
}

export function createTask(req, res) {
  res.header('Content-Type', 'application/json');
  if (!req.body) invalidRequest(res);
  const { task_name, is_done, category_id, username } = req.body;
  connection.query(
    'INSERT INTO tasks SET ? ',
    {task_name, is_done, category_id, username},
    (err, results) => showResults(res, err, results)
  );
}

export function updateTask(req, res) {
  if (!req.body) invalidRequest(res);
  const { task_name, is_done, category_id } = req.body;
  connection.query(
    'UPDATE tasks SET ? WHERE ?',
    [{task_name, is_done, category_id}, {task_id: req.params.id}],
    (err, results) => showResults(res, err, results)
  );
}

export function deleteTask(req, res) {
  connection.query(
    'DELETE FROM tasks WHERE ?',
    {task_id: req.params.id},
    (err, results) => showResults(res, err, results)
  );
}