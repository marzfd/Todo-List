import dbQuery from '/config/db';

const getCategory = async (req, res) => {
  const category = await dbQuery('SELECT * FROM categories');
  res.status(200).json(category[0]);
}

export default getCategory;