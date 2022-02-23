/* eslint-disable import/no-anonymous-default-export */
import { getTask, getTaskById, createTask, updateTask, deleteTask } from "../../../controller/tasks";

export default async (req, res) => {
  try {
    switch (req.method) {

      case "GET": {
        if (req.query.task_id) {
          // Get a task by task_id (/api/tasks/:task_id)
          const task = await getTaskById(req.query.task_id);
          return res.status(200).json(task);
        } else {
          // Otherwise, get all tasks
          const tasks = await getTask();
          return res.status(200).json(tasks);
        }
      }

      case "POST": {
        // Create a new task
        const { task_name, username, category_id } = req.body;
        const task = await createTask(task_name, username, category_id);
        return res.status(200).json(task);
      }

      case "PUT": {
        // Update a task
        const { task_id, ...updatedData } = req.body;
        const task = await updateTask(task_id, updatedData);
        return res.status(200).json(task);
      }

      case "DELETE": {
        // Delete a task
        const { task_id } = req.body;
        const task = await deleteTask(task_id);
        return res.status(200).json(task);
      }

      default: {
        break;
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
}