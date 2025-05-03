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
  const { vin } = req.query;

  if (!vin) {
    return res.status(400).json({ error: "Missing vin" });
  }

  try {
    const [rows] = await db.execute(
      // the aliasing saved my a** here
      `SELECT 
    c.vin, t.buy_price, t.buy_date,
    e.EID, e.fname AS emfname, e.lname AS emlname, e.email,
    p.fname AS cfname, p.lname AS clname
    FROM car_inventory c 
    JOIN c_transeid t ON c.c_id = t.cid 
    JOIN emps e ON t.eid = e.EID 
    JOIN people_cars p ON t.custid = p.custno
    WHERE c.vin = ?`,
      [vin]
    );

    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Query was FUBAR", details: err.message });
  }
}
