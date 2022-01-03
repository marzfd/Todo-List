import config from "./config/databaseConfig.js";
const connection = config.connection;

function showResults(res, err, results) {
  if (err) res.status(500).send(JSON.stringify({ error: err.message}));
  res.status(200).send(JSON.stringify(results));
}

function invalidRequest(res) {
  res.status(400).send(JSON.stringify({ error: 'Invalid Request !' }));
}

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
  connection.query(
    'INSERT INTO tasks SET ? ',
    {task_name: req.body.task_name, is_done: req.body.is_done, category_id: req.body.category_id},
    (err, results) => showResults(res, err, results)
  );
}

export function updateTask(req, res) {
  if (!req.body) invalidRequest(res);
  connection.query(
    'UPDATE tasks SET ? WHERE ?',
    [{task_name: req.body.task_name, is_done: req.body.is_done, category_id: req.body.category_id}, {task_id: req.params.id}],
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