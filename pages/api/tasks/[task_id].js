/* eslint-disable import/no-anonymous-default-export */
import { getTaskById, deleteTask } from "../../../controller/tasks";


export default async (req, res) => {
  try {
    switch (req.method) {

      case 'GET': {
        const { task_id } = req.query
        if (task_id) {
          // Get a task by task_id (/api/tasks/:task_id)
          const task = await getTaskById(parseInt(task_id));
          return res.status(200).json(task);
        }
      }

      case 'DELETE': {
        // Delete a task
        const { task_id } = req.body;
        const task = await deleteTask(task_id);
        return res.status(200).json(task);
      }

      default: {
        break
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
}