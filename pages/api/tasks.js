import nc from 'next-connect'
import getTask from '/controller/tasks.js'

const handler = nc();
handler.get(getTask);

export default handler;
