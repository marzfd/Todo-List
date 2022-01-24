import dbQuery from '/config/db';

const getTask = async (req, res) => {
  const task = await dbQuery('SELECT * FROM tasks');
  res.status(200).json(task[0]);
}

export default getTask;