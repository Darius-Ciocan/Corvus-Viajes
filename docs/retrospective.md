# Retrospectiva

## Qué he aprendido

Con este proyecto he practicado cómo conectar un frontend en React con una API propia en Express. También he reforzado el uso de TypeScript, React Router, Tailwind CSS, hooks y Context API.

Una de las partes más importantes ha sido entender que frontend y backend deben compartir una estructura de datos coherente. Si la API devuelve una propiedad con un nombre distinto, el frontend puede fallar o mostrar datos incorrectos.

## Conexión frontend-backend

El frontend no trabaja con datos escritos directamente dentro de los componentes principales. Los datos de destinos y reservas vienen de la API.

Para organizar mejor las peticiones, creé un cliente de API tipado. Así los componentes llaman a funciones como `getDestinations()` o `createReservation()` sin repetir código de `fetch`.

## Problemas encontrados

Uno de los problemas fue adaptar el backend para que funcionara tanto en local como en Vercel. En local Express se ejecuta como servidor, pero en Vercel se necesitan endpoints dentro de la carpeta `api/`.

También hubo un problema con una imagen externa del destino de Marruecos. La URL dejó de responder y la tarjeta se veía rota. Lo solucioné cambiando la imagen y añadiendo un fallback.

## Uso de IA

He usado IA como apoyo durante el desarrollo para organizar ideas, revisar documentación, plantear estructura de carpetas y detectar mejoras. No la he usado como sustituto de entender el proyecto, sino como ayuda para avanzar más rápido y revisar el resultado.

También me ha servido para dejar la documentación más clara y para comprobar que se cumplían los puntos del enunciado.

## Qué mejoraría

Si tuviera más tiempo, conectaría también destinos y reservas a PostgreSQL. En esta fase he conectado el inventario de productos para practicar el modelo relacional, foreign keys y consultas SQL.

Otra mejora sería documentar la API con Swagger/OpenAPI para que los endpoints se puedan consultar de forma más visual.

También sería útil crear migraciones con Drizzle Kit para no ejecutar los scripts SQL manualmente.
