import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

// connect MySQL database using environment variables
const db = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// API route handler to fetch all rows from the 'car_inventory' table
// export default async function handler(req, res) {
//   const [rows] = await db.execute('SELECT * FROM car_inventory');
//   res.status(200).json(rows);
// }

export default async function handler(req, res){
    const {price, data} = req.query;
}