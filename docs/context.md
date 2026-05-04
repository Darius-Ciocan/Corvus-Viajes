# Context API

## Por qué se usa Context

Context API sirve para compartir información entre componentes sin tener que pasar props por muchos niveles. En este proyecto se usa para dos casos concretos: la selección/favoritos de destinos y el tema visual.

## BookingContext

`BookingContext` guarda:

- El destino seleccionado.
- La lista de destinos favoritos.
- Una función para cambiar el destino seleccionado.
- Una función para añadir o quitar favoritos.

Esto permite que una tarjeta de destino pueda seleccionar un viaje y que el formulario lo reciba sin tener que pasar esa información manualmente por todas las páginas.

## ThemeContext

`ThemeContext` guarda el tema actual, claro u oscuro, y una función para cambiarlo.

La preferencia se guarda en `localStorage`, así que si el usuario vuelve a abrir la web se mantiene el último modo elegido.

## Providers

En `main.tsx` la aplicación está envuelta por `ThemeProvider` y `BookingProvider`. De esta forma, cualquier componente que lo necesite puede acceder a esos datos.

## Cuándo es útil

Context API es útil para estados globales de interfaz. No lo usaría para todo, porque si se abusa puede complicar el proyecto, pero en este caso encaja bien para favoritos, destino seleccionado y tema.
