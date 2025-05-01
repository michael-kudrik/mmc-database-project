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

    if(!price || !date){
      return res.status(400).json({ error: "Missing parameter"});

    }

    try{
      const [rows] = await db.execute(
        `SELECT e.fname, e.lname, c.make, c.model, t.retail, t.buy_date
       FROM car_inventory c
       JOIN c_transeid t ON c.c_id = t.cid
       JOIN emps e ON t.eid = e.EID
       WHERE DATE(t.buy_date) = ? AND t.retail > ?
       ORDER BY t.buy_price`,
       [date, price]
      );

      res.status(200).json(rows);
    } catch (err){
      console.error(err);
      res.status(500).json({error: "Query was FUBAR", details: err.message});
    }
}