import config from "./config/config.js";

const connection = config.connection;

export function getTask(req, res) {
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

export function createTask(req, res) {
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

export function updateTask(req, res) {
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

export function deleteTask(req, res) {
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