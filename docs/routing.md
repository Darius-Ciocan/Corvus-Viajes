# Rutas

La navegacion usa React Router.

## Rutas principales

- `/`: pagina de inicio.
- `/destinos`: catalogo y busqueda de destinos.
- `/planificador`: formulario de reserva y listado de solicitudes.
- `/nosotros`: descripcion del proyecto.
- `*`: pagina 404.

## Lazy loading

Las paginas se cargan con `React.lazy` y `Suspense`. Esto divide el codigo y mejora la carga inicial.

## Navegacion

`AppShell` contiene enlaces con `NavLink`, que permite aplicar estilos a la ruta activa.
