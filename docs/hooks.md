# Hooks de React

## useState

`useState` se usa para guardar información que cambia en la interfaz. Por ejemplo, los campos del formulario, el texto de búsqueda, los mensajes, los datos cargados y los estados de carga.

## useEffect

`useEffect` se usa para ejecutar acciones cuando el componente se monta. En este proyecto se utiliza para cargar destinos y reservas desde la API.

## useMemo

`useMemo` se usa para evitar cálculos innecesarios. Por ejemplo, el filtro de destinos no necesita recalcularse si no cambia la búsqueda o la lista de destinos.

También se usa para calcular el presupuesto estimado según el destino elegido y el número de viajeros.

## useCallback

`useCallback` se usa para mantener estables algunas funciones, como crear una reserva, cancelar una reserva o cambiar favoritos. Esto ayuda cuando esas funciones se pasan como props a otros componentes.

## Hooks personalizados

Los hooks personalizados creados son:

- `useDestinations`: carga destinos desde la API.
- `useReservations`: carga, crea y cancela reservas.
- `useTripBudget`: calcula el presupuesto estimado.
- `useBookingContext`: facilita el uso del contexto de reservas/favoritos.
- `useTheme`: facilita el uso del contexto de tema.

Separar esta lógica en hooks hace que las páginas sean más limpias y fáciles de entender.
