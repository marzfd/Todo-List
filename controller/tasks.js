import dbQuery from '/config/db';
import { showResults, invalidRequest } from '/controller/helpers';

export const getTask = async (req, res) => {
  const task = await dbQuery('SELECT * FROM tasks');
  showResults(res, task);
}

export const createTask = async (req, res) => {
  const { task_name, is_done, category_id, username } = req.body;
  await dbQuery(
    'INSERT INTO tasks SET ?',
    { task_name, is_done, category_id, username }
  );
  if (!task_name || !category_id) {
    invalidRequest(res);
  } else {
    showResults(res, task);
  }
}

export const updateTask = async (req, res) => {
  const { task_name, is_done, category_id } = req.body;
  if (!task_name || !category_id) {
    invalidRequest(res);
  } else {
    const task = await dbQuery(
      'UPDATE tasks SET ? WHERE ?',
      [{ task_name, is_done, category_id }, { task_id: req.params.id }]
    );
      showResults(res, task);
  }
}

export const deleteTask = async (req, res) => {
  const task = await dbQuery(
    'DELETE FROM tasks WHERE ?',
    { task_id: req.params.id }
  );
  showResults(res, task);
}