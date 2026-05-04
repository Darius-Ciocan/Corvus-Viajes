# Corvus Viajes

Corvus Viajes es una aplicación fullstack para una agencia de viajes ficticia. La idea es que una persona pueda consultar destinos, marcar favoritos y enviar una solicitud de reserva desde una interfaz sencilla y visual.

El proyecto está hecho con React, TypeScript, Tailwind CSS y React Router en el frontend. En el backend se usa Node.js con Express, organizado por capas para separar rutas, controladores, servicios y datos.

## Funcionalidades principales

- Catálogo de destinos cargado desde la API.
- Búsqueda por nombre, país o etiquetas.
- Formulario controlado para solicitar una reserva.
- Validaciones básicas en frontend y backend.
- Listado de reservas recientes.
- Opción para cancelar una solicitud.
- Favoritos y destino seleccionado usando Context API.
- Modo claro/oscuro con preferencia guardada.
- Fondo de partículas y pequeñas animaciones de interacción.
- Cliente de API tipado con TypeScript.
- Estados de carga, error y datos cargados.
- Carga diferida de páginas con `React.lazy`.

## Cómo ejecutar el proyecto

```bash
npm install
npm run server
npm run dev
```

El frontend se abre en `http://localhost:5173` y la API en `http://localhost:4000/api/v1`.

Para comprobar que el proyecto compila:

```bash
npm run build
```

## Endpoints principales

- `GET /api/v1/health`
- `GET /api/v1/destinations`
- `GET /api/v1/destinations/:id`
- `GET /api/v1/reservations`
- `POST /api/v1/reservations`
- `PATCH /api/v1/reservations/:id`
- `DELETE /api/v1/reservations/:id`

## Enlaces

- Web desplegada: [Corvus Viajes](https://corvus-viajes.vercel.app)
- API desplegada: [Corvus Viajes](https://corvus-viajes.vercel.app/api/v1/health)
- Repositorio GitHub: [Corvus-Viajes](https://github.com/Darius-Ciocan/Corvus-Viajes)
- Tablero de Trello: pendiente de añadir cuando esté terminado.

## Documentación

La carpeta `docs/` contiene la investigación y la explicación del proceso: idea del proyecto, organización, arquitectura, componentes, hooks, contexto, rutas, formularios, API, despliegue, pruebas y retrospectiva final.
