# Write your MySQL query statement below
SELECT Department.name AS department, Employee.name AS employee, salary
FROM
    Employee
    JOIN Department
    ON Employee.departmentId = Department.id  #obtiene una tabla con el empleado, departamento y salario
WHERE   # conserva de la tabla anterior solo los que coincidan con la siguiente condicion
    (Department.id, salary) IN (
        SELECT departmentId, MAX(salary) #obtiene el salario maximo por departamento
        FROM Employee
        GROUP BY 1
    );