# Context API

## Uso en el proyecto

Se creo `BookingContext` para compartir el destino seleccionado y la lista de favoritos. Estos datos pueden ser usados por tarjetas, formulario y futuras paginas sin pasar props por muchos niveles.

## Provider

`BookingProvider` envuelve la aplicacion en `main.tsx`. Internamente usa `useState`, `useCallback` y `useMemo`.

## Consumo

Los componentes usan `useBookingContext()`. Si el hook se usa fuera del provider, lanza un error para detectar el problema durante desarrollo.

## Cuando es util

Context API es util cuando varios componentes separados necesitan leer o modificar el mismo estado. No sustituye siempre a props ni a una base de datos; se debe usar para estado global de UI o preferencias compartidas.
