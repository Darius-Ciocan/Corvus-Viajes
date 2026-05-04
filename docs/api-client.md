# Cliente de API tipado

El archivo `src/api/client.ts` centraliza las llamadas al backend. En vez de usar `fetch` directamente en cada componente, las peticiones se hacen desde este cliente.

Esto hace que el código sea más ordenado y que los componentes no tengan que saber todos los detalles de la API.

## Tipos usados

Los tipos principales están en `src/types/travel.ts`:

- `Destination`
- `Reservation`
- `ReservationInput`
- `ApiErrorResponse`

Estos tipos ayudan a que TypeScript avise si se usa mal algún dato.

## Funciones del cliente

- `getDestinations()`
- `getDestination(id)`
- `getReservations()`
- `createReservation(payload)`
- `updateReservationStatus(id, status)`
- `deleteReservation(id)`

## Estados de red

La interfaz contempla tres estados:

- Cargando: cuando la petición todavía no ha terminado.
- Éxito: cuando los datos han llegado bien.
- Error: cuando la API responde con un problema o la petición falla.

Estos estados se muestran en la UI con componentes como `LoadingState` y `ErrorState`.
