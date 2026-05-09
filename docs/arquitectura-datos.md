# Arquitectura de datos

## Modelo elegido

Para esta parte del proyecto he añadido una base de datos relacional con PostgreSQL en Neon. La base de datos se usa para guardar un pequeño inventario de productos de viaje de Corvus Viajes.

El modelo tiene dos tablas principales:

- `categories`: categorías de productos o tipos de viaje.
- `products`: productos concretos que ofrece la agencia.

He mantenido una estructura sencilla porque el objetivo es practicar bien los fundamentos: tablas, claves primarias, claves foráneas, restricciones y consultas SQL.

## Tabla categories

La tabla `categories` guarda los tipos de producto. Tiene:

- `id`: identificador UUID.
- `name`: nombre único de la categoría.
- `description`: descripción opcional.
- `created_at`: fecha de creación.

El nombre es único para evitar tener dos categorías iguales escritas de forma repetida.

## Tabla products

La tabla `products` guarda los productos del inventario. Tiene:

- `id`: identificador UUID.
- `name`: nombre del producto.
- `price`: precio, que debe ser mayor que 0.
- `stock`: plazas o unidades disponibles, con valor por defecto 0.
- `category_id`: relación con la tabla `categories`.
- `created_at`: fecha de creación.

## Qué significa category_id como foreign key

`category_id` es una foreign key porque apunta al `id` de una fila de la tabla `categories`. Esto significa que un producto no puede tener una categoría inventada o inexistente.

Por ejemplo, si un producto pertenece a “Naturaleza y aventura”, en realidad guarda el UUID de esa categoría. Así se evita repetir el nombre de la categoría en cada producto y se mantiene la integridad de los datos.

## ON DELETE CASCADE o ON DELETE RESTRICT

Para este caso considero más seguro usar `ON DELETE RESTRICT`.

Si una categoría tiene productos asociados, no debería borrarse automáticamente, porque se perderían productos reales del inventario. Con `RESTRICT`, PostgreSQL bloquea el borrado hasta que se eliminen o reasignen esos productos.

`ON DELETE CASCADE` puede ser útil en otros casos, por ejemplo si se borra un usuario y queremos borrar todos sus posts. Pero en un inventario de viajes sería más peligroso, porque borrar una categoría podría eliminar varios productos sin querer.

Por eso en `schema.sql` he usado:

```sql
FOREIGN KEY (category_id)
REFERENCES categories(id)
ON DELETE RESTRICT
```
