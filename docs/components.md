# Componentes

## AppShell

`AppShell` es el componente que contiene la estructura general de la aplicación. Incluye el logo, la navegación, el menú móvil y el botón para cambiar entre modo claro y oscuro.

También se encarga de mostrar el fondo de partículas detrás del contenido.

## DestinationCard

`DestinationCard` muestra la información principal de un destino: imagen, país, nombre, resumen, etiquetas, valoración y precio.

También permite marcar un destino como favorito y seleccionar ese destino para ir al formulario de reserva. Las props están tipadas con TypeScript usando el tipo `Destination`.

## ReservationForm

`ReservationForm` es un formulario controlado. Guarda en estado los datos que introduce el usuario: destino, nombre, email, número de viajeros, fecha y preferencias.

Antes de enviar, valida algunos campos básicos. Si todo está correcto, llama a la función que crea la reserva en la API.

## ReservationList

`ReservationList` muestra las reservas que devuelve la API. Si no hay reservas, enseña un mensaje indicando que todavía no hay solicitudes.

También permite cancelar una reserva, cambiando su estado desde la API.

## LoadingState y ErrorState

Estos componentes se usan para no repetir código cuando una petición está cargando o cuando ocurre un error. Así la interfaz no se queda en blanco mientras espera la respuesta.

## ParticleBackground

`ParticleBackground` añade partículas decorativas al fondo. Es solo un detalle visual, no afecta a la interacción porque usa `pointer-events: none`.

También se ha tenido en cuenta `prefers-reduced-motion` para reducir las animaciones si el usuario lo tiene configurado en su sistema.

## Composición

Las páginas principales combinan componentes más pequeños. Esto hace que el código sea más fácil de leer y evita que una página tenga demasiada lógica junta.
