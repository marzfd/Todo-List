import nc from 'next-connect'
import { getUser, createUser, updateUser, deleteUser } from '/controller/users.js'

const handler = nc();

handler.get(getUser);
handler.post(createUser);
handler.patch(updateUser);
handler.delete(deleteUser);

export default handler;
