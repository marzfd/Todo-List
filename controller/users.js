import dbQuery from '/config/db';
import { showResults, invalidRequest } from '/controller/helpers';

export const getUser = async (req, res) => {
  const user = await dbQuery('SELECT * FROM users');
  showResults(res, user);
}

export const createUser = async (req, res) => {
  const { name, username } = req.body;
  if (!name || !username) {
    invalidRequest(res)
  } else {
    if (username.length < 3) {
      res.status(400).send({
        error: 'Username must be at least 3 characters long'
      });
    } else {
      const user = await dbQuery(
        'INSERT INTO users SET ?',
        {name, username}
      );
      showResults(res, user);
    }
  }
}

export const updateUser = async (req, res) => {
  const { name, username } = req.body;
  if (!name || !username) {
    invalidRequest(res)
  } else {
    const user = await dbQuery(
      'UPDATE users SET ? WHERE ?',
      {name, username}, {username: req.params.username});
    showResults(res, user);
  }
}

export const deleteUser = async (req, res) => {
  const user = await dbQuery(
    'DELETE FROM users WHERE ?',
    {username: req.params.username}
  );
  showResults(res, null, user);
}

export const checkUser = async (req, res) => {
  const username = req.params.tagId;
  const result = await dbQuery(
    'SELECT * FROM users WHERE ?',
    {username}
  );
  if (err) {
    res.status(500).send({ error: err.message });
  } else if (result.length === 0) {
    res.status(200).send({ msg: 'Valid username' });
  } else {
    res.status(400).send({ msg: 'Invalid username' });
  }
}