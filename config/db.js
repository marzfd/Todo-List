import { createPool } from 'mysql2/promise';

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
}

const connection = createPool(config);

connection.getConnection(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to database !');
});

const dbQuery = (query) => {
  try {
    return connection.query(query);
  }
  catch (err) {
    throw err;
  }
}

export default dbQuery;