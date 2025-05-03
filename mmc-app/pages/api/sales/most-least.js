import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

// connect MySQL database using environment variables
const db = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export default async function handler(req, res) {
  const { type, date } = req.query;

  if (!type || !date) {
    return res.status(400).json({ error: "Missing parameter" });
  }

  try {
    const sql = `SELECT * FROM car_inventory c 
        JOIN c_transeid t ON c.c_id = t.cid 
        JOIN emps e ON t.eid = e.EID 
        WHERE t.buy_date = ? 
        ORDER BY t.buy_price
        ${type} LIMIT 1;`;
    const [rows] = await db.execute(sql, [date]);
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Query was FUBAR", details: err.message });
  }
}
