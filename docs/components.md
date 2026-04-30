# Componentes

## AppShell

Define la estructura comun: cabecera, logo, navegacion desktop y menu movil. Usa `NavLink` para marcar la ruta activa.

## DestinationCard

Recibe una prop tipada `destination: Destination`. Muestra imagen, pais, nombre, etiquetas, rating y precio. Tambien permite marcar favorito y seleccionar el destino para reservar.

## ReservationForm

Formulario controlado. Cada input tiene su propio estado local. Valida datos basicos antes de enviar y llama a una funcion `onSubmit` tipada.

## ReservationList

Recibe reservas y una funcion para cancelar. Renderiza el estado de cada solicitud y muestra un estado vacio si no hay datos.

## LoadingState y ErrorState

Componentes reutilizables para representar carga y error. Se usan en paginas que dependen de la API.

## ParticleBackground

Renderiza particulas decorativas en segundo plano. No bloquea la interaccion porque usa `pointer-events: none` y respeta `prefers-reduced-motion` desde CSS.

## Composicion

Las paginas no contienen toda la logica visual. Componen componentes pequenos y pasan datos por props. Esto hace que las piezas sean reutilizables y mas faciles de probar.
