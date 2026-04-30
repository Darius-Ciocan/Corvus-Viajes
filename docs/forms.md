# Formularios e interaccion

## Formulario de reserva

El formulario de `ReservationForm` es controlado. Los valores de destino, nombre, email, viajeros, fecha y notas se guardan en estado de React.

## Validacion

Antes de enviar se comprueba que:

- Exista un destino seleccionado.
- El nombre tenga al menos 3 caracteres.
- El email contenga `@`.
- El numero de viajeros sea valido.

El backend repite la validacion para no confiar solo en el cliente.

## Mensajes

La UI muestra confirmacion cuando se crea una reserva y muestra error si la API rechaza la peticion.
