# Hooks de React

## useState

Se usa para guardar datos que cambian en la interfaz: busqueda de destinos, campos del formulario, mensajes, loading, error y datos recibidos.

## useEffect

Se usa en `useDestinations` y `useReservations` para cargar datos desde la API cuando el componente se monta.

## useMemo

Se usa para evitar recalcular filtros y presupuestos si no cambian sus dependencias. Por ejemplo, el presupuesto estimado depende del destino elegido y del numero de viajeros.

## useCallback

Se usa en `useReservations` y `BookingContext` para mantener funciones estables, como refrescar reservas, crear una reserva o alternar favoritos.

## Custom hooks

`useDestinations` encapsula la carga de destinos y devuelve `destinations`, `isLoading` y `error`.

`useReservations` gestiona la lista de reservas, creacion, cancelacion y recarga.

`useTripBudget` calcula el presupuesto base, la comision de servicio y el total.
