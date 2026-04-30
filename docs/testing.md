# Testing y pruebas manuales

## Pruebas realizadas

- Compilacion TypeScript con `npm run build`.
- Revision de reglas con `npm run lint`.
- Prueba manual de API: `GET /health`, `GET /destinations` y `POST /reservations`.
- Carga de destinos desde la API.
- Busqueda de destinos por texto.
- Seleccion de destino desde una tarjeta.
- Creacion de reserva con formulario controlado.
- Validacion de nombre, email, destino y fecha.
- Cancelacion de reserva.
- Navegacion entre rutas.
- Pagina 404.
- Revision responsive en mobile y desktop.

## Riesgos pendientes

No se han anadido tests automaticos con React Testing Library. Seria una mejora futura para probar componentes como `ReservationForm` y hooks como `useReservations`.
