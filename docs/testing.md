# Testing y pruebas manuales

## Pruebas realizadas

Para comprobar que la aplicación funcionaba correctamente hice pruebas manuales y también ejecuté los comandos de verificación del proyecto.

Comandos usados:

```bash
npm run lint
npm run build
```

Pruebas manuales realizadas:

- Cargar la página principal.
- Navegar entre Inicio, Destinos, Planificador y Nosotros.
- Buscar destinos por texto.
- Marcar destinos como favoritos.
- Seleccionar un destino y abrir el planificador.
- Crear una reserva desde el formulario.
- Ver la reserva en el listado.
- Cancelar una reserva.
- Probar la página 404.
- Cambiar entre modo claro y oscuro.
- Revisar que las imágenes cargan correctamente.
- Comprobar la API con `/api/v1/health`.
- Probar la estructura de SQL en `sql/schema.sql`.
- Revisar que los endpoints de productos devuelven un error controlado si no existe `DATABASE_URL`.
- Revisar la web en producción después del despliegue.

## Resultado

La aplicación compila correctamente y las funcionalidades principales funcionan. También se corrigió una imagen externa que fallaba en el destino de Marruecos y se añadió un fallback por si alguna imagen vuelve a fallar.

## Mejoras pendientes

No se han añadido tests automáticos con React Testing Library. Sería una mejora interesante para probar componentes como `ReservationForm`, `DestinationCard` o los hooks personalizados.
