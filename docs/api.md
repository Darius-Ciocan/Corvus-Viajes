# Documentacion de API

Base local: `http://localhost:4000/api/v1`

## Health

`GET /health`

Respuesta `200`:

```json
{
  "status": "ok",
  "service": "corvus-viajes-api"
}
```

## Destinos

`GET /destinations`

Devuelve `200` con un array de destinos.

`GET /destinations/:id`

Devuelve `200` con un destino o `404` si no existe.

## Reservas

`GET /reservations`

Devuelve `200` con un array de reservas.

`POST /reservations`

Body:

```json
{
  "destinationId": "japon-cultural",
  "customerName": "Laura Martin",
  "email": "laura@example.com",
  "travelers": 2,
  "startDate": "2026-07-15",
  "notes": "Hoteles centricos"
}
```

Respuesta `201` con la reserva creada. Si faltan datos devuelve `400`.

`PATCH /reservations/:id`

Body:

```json
{
  "status": "cancelled"
}
```

Respuesta `200` con la reserva actualizada, `400` si el estado no es valido o `404` si no existe.

`DELETE /reservations/:id`

Respuesta `200` con mensaje de confirmacion o `404`.
