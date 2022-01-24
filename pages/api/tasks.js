import nc from 'next-connect'
import { getTask, createTask, updateTask, deleteTask } from '/controller/tasks.js'

const handler = nc();

handler.get(getTask);
handler.post(createTask);
handler.patch(updateTask);
handler.delete(deleteTask);

export default handler;
