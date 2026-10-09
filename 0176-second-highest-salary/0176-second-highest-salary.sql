# Write your MySQL query statement below
SELECT
    (
        SELECT DISTINCT salary  /* elimina repetidos */
        FROM Employee
        ORDER BY salary DESC    /* ordena de mayor a menor */
        LIMIT 1, 1               /* primer parametro filas que salta y segundo cuantas mostrar*/
    ) AS SecondHighestSalary;