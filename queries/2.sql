/* Find the most expensive car or least expensive car bought on any given date and the salesperson who bought it. */
USE cars;
SELECT *
FROM car_inventory c 
JOIN c_transeid t ON c.c_id = t.cid 
JOIN emps e ON t.eid = e.EID 
WHERE t.buy_date = '2023-01-13 00:00:00' 
ORDER BY t.buy_price
DESC LIMIT 1;