# Write your MySQL query statement below
SELECT name as Customers #se selecciona el nombre 
FROM Customers 
WHERE Customers.id NOT IN(  #donde su id no este en las orders, es decir los que no han hecho pedidos
   SELECT customerId
   FROM Orders
   WHERE Customers.id=customerId
);