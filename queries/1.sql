/* Find the salespeople who bought cars that had retail prices over an amount on a specific date. (example, 40,000 on the 4th of April 2023) */
USE cars;
SELECT *
FROM car_inventory c 
JOIN c_transeid t ON c.c_id = t.cid 
JOIN emps e ON t.eid = e.EID 
WHERE t.buy_date = '2023-01-13 00:00:00' AND (t.retail > 500) 
ORDER BY t.buy_price;