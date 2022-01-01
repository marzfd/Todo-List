import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

// function database(query) {
//   const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//   });

//   connection.connect((err) => {
//     if (err) {
//       console.error(`error connecting: ${err.stack}`);
//       return;
//     }
//     console.log('Connected to database successfully !');
//   });

//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error(`error connecting: ${err.stack}`);
//       return;
//     }
//     else {
//       return results;
//     }
//   });
// //  return connection.query(query);
// }

// export default database;