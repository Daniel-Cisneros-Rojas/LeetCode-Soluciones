# Write your MySQL query statement below
SELECT
    Department.name AS Department,
    Employee.name AS Employee,
    Salary                               #datos a mostrar
FROM
    Employee,
    Department
WHERE
    Employee.DepartmentId = Department.Id    #creamos tabla con cada persona y su departamento
    AND (
        SELECT
            COUNT(DISTINCT e2.Salary)
        FROM Employee AS e2
        WHERE e2.Salary > Employee.Salary AND Employee.DepartmentId = e2.DepartmentId #compara solo en el mismo departamento
    ) < 3 #count devuele 0 para salario mas alto 1 a segundo 2 a tercero
    ;