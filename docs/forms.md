# Formularios e interacción

## Formulario de reserva

El formulario principal está en el componente `ReservationForm`. Es un formulario controlado, porque cada campo está conectado a un estado de React.

Los campos son:

- Destino.
- Nombre completo.
- Email.
- Número de viajeros.
- Fecha de salida.
- Preferencias del viaje.

## Validación

Antes de enviar se comprueban varias cosas:

- Que se haya elegido un destino.
- Que el nombre tenga una longitud mínima.
- Que el email tenga formato básico.
- Que el número de viajeros esté dentro de un rango válido.
- Que exista una fecha de salida.

El backend también valida los datos. Esto es importante porque no se debe confiar solo en la validación del navegador.

## Mensajes al usuario

Si la reserva se crea correctamente, se muestra un mensaje de confirmación. Si ocurre un error, se enseña un mensaje para que el usuario sepa que debe revisar los datos o intentarlo de nuevo.

## Interacciones visuales

Los botones, tarjetas e inputs tienen pequeñas animaciones para que la web se sienta más fluida. También hay un modo claro/oscuro que el usuario puede cambiar desde la cabecera.
