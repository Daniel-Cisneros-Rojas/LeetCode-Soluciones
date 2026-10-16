# Write your MySQL query statement below
SELECT DISTINCT tabla1.email as Email # distinct quita repetidos del resultado
FROM Person tabla1  # usamos como 2 tablas para comparar con ella misma
JOIN Person tabla2
ON (tabla1.email=tabla2.email)&&(tabla1.id!=tabla2.id); #condicion de mismo email pero diferente id 