INSERT INTO categories (name, description)
VALUES
  ('Escapadas culturales', 'Viajes centrados en ciudades, patrimonio, gastronomía y visitas guiadas.'),
  ('Naturaleza y aventura', 'Experiencias para descubrir paisajes, rutas naturales y actividades al aire libre.'),
  ('Viajes premium', 'Propuestas personalizadas con alojamientos especiales y servicios exclusivos.')
ON CONFLICT (name) DO NOTHING;

INSERT INTO products (name, price, stock, category_id)
VALUES
  (
    'Ruta cultural por Japón',
    2180.00,
    8,
    (SELECT id FROM categories WHERE name = 'Escapadas culturales')
  ),
  (
    'Auroras de Islandia',
    1420.00,
    12,
    (SELECT id FROM categories WHERE name = 'Naturaleza y aventura')
  ),
  (
    'Atlas y desierto en Marruecos',
    880.00,
    15,
    (SELECT id FROM categories WHERE name = 'Naturaleza y aventura')
  ),
  (
    'Costa Rica verde',
    1760.00,
    10,
    (SELECT id FROM categories WHERE name = 'Naturaleza y aventura')
  ),
  (
    'Perú andino privado',
    2490.00,
    6,
    (SELECT id FROM categories WHERE name = 'Viajes premium')
  );

-- Simulación de una venta: se resta una plaza al viaje de Marruecos.
UPDATE products
SET stock = stock - 1
WHERE name = 'Atlas y desierto en Marruecos'
  AND stock > 0;

-- Ejemplo de borrado responsable de un producto concreto.
DELETE FROM products
WHERE name = 'Producto de prueba para eliminar';

-- Productos con su categoría usando INNER JOIN.
SELECT
  p.name AS product,
  p.price,
  c.name AS category
FROM products p
INNER JOIN categories c ON p.category_id = c.id
ORDER BY c.name, p.name;

-- Número de productos por categoría.
SELECT
  c.name AS category,
  COUNT(p.id) AS total_products
FROM categories c
LEFT JOIN products p ON p.category_id = c.id
GROUP BY c.id, c.name
ORDER BY c.name;
