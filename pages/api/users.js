import nc from 'next-connect'
import getUser from '/controller/users.js'

const handler = nc();
handler.get(getUser);

export default handler;
