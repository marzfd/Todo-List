import dbQuery from '/config/db';

const getUser = async (req, res) => {
  const user = await dbQuery('SELECT * FROM users');
  res.status(200).json(user[0]);
}

export default getUser;