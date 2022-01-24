import nc from 'next-connect'
import getCategory from '/controller/categories.js'

const handler = nc();
handler.get(getCategory);

export default handler;