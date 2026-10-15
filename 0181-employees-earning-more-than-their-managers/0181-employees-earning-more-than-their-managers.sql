# Write your MySQL query statement below
SELECT tabla1.name as Employee  #tomamos la tabla 2 veces
FROM Employee tabla1            #la tabla 1 seria tratada como los empeados normales
JOIN Employee tabla2            # la tabla 2 serian los managers
ON (tabla1.managerId=tabla2.id) && (tabla1.salary>tabla2.salary); #filtros donde el empleado tenga mas que su manager