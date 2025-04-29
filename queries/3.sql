/* Given a VIN number, find the salesperson, the wholesale price, and the sellers name.  Include the date of the transaction */
USE cars;
SELECT c.vin, t.buy_price, t.buy_date, e.EID, e.fname, e.lname, e.email, p.fname, p.lname
FROM car_inventory c 
JOIN c_transeid t ON c.c_id = t.cid 
JOIN emps e ON t.eid = e.EID 
JOIN people_cars p ON t.custid = p.custno
WHERE c.vin = 'D6F9W88D8U6Y54V8V';