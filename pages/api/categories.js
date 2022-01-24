import nc from 'next-connect'
import { getCategory, createCategory, updateCategory, deleteCategory } from '/controller/categories.js'

const handler = nc();

handler.get(getCategory);
handler.post(createCategory);
handler.patch(updateCategory);
handler.delete(deleteCategory);

export default handler;