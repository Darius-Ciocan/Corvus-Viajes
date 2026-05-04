# Rutas

La navegación de la aplicación está hecha con React Router.

## Rutas principales

- `/`: página de inicio.
- `/destinos`: catálogo de destinos.
- `/planificador`: formulario y listado de reservas.
- `/nosotros`: información sobre la agencia.
- `*`: página 404 para rutas que no existen.

## Navegación

El componente `AppShell` contiene los enlaces principales. Se usa `NavLink` para poder resaltar visualmente la página activa.

## Lazy loading

Las páginas se cargan con `React.lazy` y `Suspense`. Esto permite dividir el código en partes más pequeñas y cargar cada página cuando hace falta.
