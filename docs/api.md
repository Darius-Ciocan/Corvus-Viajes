# Documentación de la API

Base local: `http://localhost:4000/api/v1`

## Comprobar estado

`GET /health`

Respuesta:

```json
{
  "status": "ok",
  "service": "corvus-viajes-api"
}
```

Sirve para comprobar que el backend está funcionando.

## Destinos

### `GET /destinations`

Devuelve la lista completa de destinos.

### `GET /destinations/:id`

Devuelve un destino concreto. Si el destino no existe, devuelve un error `404`.

## Reservas

### `GET /reservations`

Devuelve la lista de reservas.

### `POST /reservations`

Crea una nueva reserva.

Ejemplo de body:

```json
{
  "destinationId": "japon-cultural",
  "customerName": "Laura Martin",
  "email": "laura@example.com",
  "travelers": 2,
  "startDate": "2026-07-15",
  "notes": "Hoteles céntricos"
}
```

Si los datos son correctos, devuelve `201` con la reserva creada. Si falta algún campo importante, devuelve `400`.

### `PATCH /reservations/:id`

Actualiza el estado de una reserva.

Ejemplo:

```json
{
  "status": "cancelled"
}
```

Puede devolver `200`, `400` si el estado no es válido o `404` si la reserva no existe.

### `DELETE /reservations/:id`

Elimina una reserva. Devuelve `200` si se elimina correctamente o `404` si no existe.
