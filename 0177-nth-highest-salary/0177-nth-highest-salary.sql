CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
   DECLARE posicion INT;
   SET posicion= N-1;
  RETURN (
      # Write your MySQL query statement below.
        
        SELECT DISTINCT salary
        FROM Employee
        ORDER BY salary DESC
        LIMIT posicion, 1
    
  );
END