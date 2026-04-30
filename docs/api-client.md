# Cliente de API tipado

El frontend usa `src/api/client.ts` como unica capa de red. Esto evita repartir llamadas `fetch` por todos los componentes.

## Contratos

Los tipos principales estan en `src/types/travel.ts`:

- `Destination`
- `Reservation`
- `ReservationInput`
- `ApiErrorResponse`

Estos contratos coinciden con los datos que devuelve Express.

## Funciones disponibles

- `getDestinations()`
- `getDestination(id)`
- `getReservations()`
- `createReservation(payload)`
- `updateReservationStatus(id, status)`
- `deleteReservation(id)`

## Estados de red

Los hooks gestionan:

- Loading: mientras se espera la respuesta.
- Data: cuando la API devuelve datos.
- Error: cuando la peticion falla.

La UI muestra `LoadingState`, contenido real o `ErrorState` segun corresponda.
