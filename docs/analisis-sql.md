# Análisis SQL

## INSERT, UPDATE y DELETE

En `sql/seed.sql` se crean categorías y productos iniciales usando `INSERT`. También hay un ejemplo de `UPDATE` para simular una venta, restando una unidad de stock a un producto.

Además, se incluye un ejemplo de `DELETE` para eliminar un producto de prueba. En una aplicación real habría que tener cuidado con estas operaciones, porque modifican datos de forma permanente.

## INNER JOIN

`INNER JOIN` devuelve solo las filas que tienen coincidencia en las dos tablas.

En este proyecto sirve para listar productos con su categoría. Si un producto no tuviera una categoría válida, no aparecería en el resultado. En realidad, eso no debería ocurrir porque `category_id` está protegido con una foreign key.

Ejemplo del proyecto:

```sql
SELECT
  p.name AS product,
  p.price,
  c.name AS category
FROM products p
INNER JOIN categories c ON p.category_id = c.id;
```

Un escenario real sería mostrar reservas con el cliente asociado. Si solo queremos reservas que tengan cliente válido, usaríamos `INNER JOIN`.

## LEFT JOIN

`LEFT JOIN` devuelve todas las filas de la tabla de la izquierda, aunque no tengan coincidencia en la tabla de la derecha. Cuando no hay coincidencia, los datos de la derecha aparecen como `NULL`.

En este proyecto se usa para contar productos por categoría. Así aparecen también las categorías que todavía no tienen productos.

Ejemplo:

```sql
SELECT
  c.name AS category,
  COUNT(p.id) AS total_products
FROM categories c
LEFT JOIN products p ON p.category_id = c.id
GROUP BY c.id, c.name;
```

Un escenario real sería mostrar todas las categorías de una tienda, aunque algunas no tengan productos publicados todavía.

## GROUP BY y COUNT

`GROUP BY` permite agrupar filas que comparten un dato. `COUNT()` sirve para contar elementos dentro de cada grupo.

En el inventario de Corvus Viajes, esto permite saber cuántos productos tiene cada categoría.
