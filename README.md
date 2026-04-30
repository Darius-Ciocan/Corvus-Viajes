# Corvus Viajes

Aplicacion fullstack para una empresa ficticia de viajes. El frontend esta construido con React, TypeScript, Tailwind CSS y React Router. El backend usa Node.js y Express con arquitectura por capas.

## Funcionalidades

- Catalogo de destinos cargado desde la API.
- Busqueda de destinos por nombre, pais o etiqueta.
- Formulario controlado para crear solicitudes de reserva.
- Validacion en frontend y backend.
- Listado de reservas con opcion de cancelacion.
- Context API para destino seleccionado y favoritos.
- Boton claro/oscuro con preferencia persistente.
- Fondo de particulas y animaciones de interaccion.
- Hooks reutilizables para destinos, reservas y presupuesto.
- Estados de red: loading, data y error.
- Lazy loading de paginas con `React.lazy`.

## Scripts

```bash
npm install
npm run server
npm run dev
npm run build
```

El frontend se ejecuta en `http://localhost:5173` y la API en `http://localhost:4000/api/v1`.

## API

- `GET /api/v1/health`
- `GET /api/v1/destinations`
- `GET /api/v1/destinations/:id`
- `GET /api/v1/reservations`
- `POST /api/v1/reservations`
- `PATCH /api/v1/reservations/:id`
- `DELETE /api/v1/reservations/:id`

## Trello y despliegue

- Tablero Trello: pendiente de crear manualmente y pegar aqui.
- Frontend Vercel: [Corvus Viajes](https://corvus-viajes.vercel.app)
- API Vercel: [Corvus Viajes](https://corvus-viajes.vercel.app/api/v1/health)

## Documentacion

La carpeta `docs/` incluye investigacion, idea, gestion del proyecto, arquitectura, componentes, hooks, contexto, rutas, formularios, API, cliente tipado, testing, despliegue y retrospectiva.
