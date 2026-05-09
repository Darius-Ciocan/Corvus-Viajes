# Despliegue

## Plataforma elegida

El proyecto está desplegado en Vercel, porque funciona bien con proyectos de Vite y permite publicar el frontend de forma sencilla.

## Proceso seguido

Primero comprobé que el proyecto compilaba correctamente:

```bash
npm run build
```

Después se desplegó con Vercel:

```bash
npx vercel deploy --prod
```

## Backend en Vercel

El backend principal está en `server/src`, pero para Vercel se añadieron endpoints dentro de la carpeta `api/`. Así se pueden publicar las rutas de la API junto al frontend.

La aplicación usa `/api/v1` como base de la API, por lo que en producción frontend y backend quedan bajo el mismo dominio.

## Base de datos en producción

Para que el inventario funcione con datos reales hay que crear una base de datos en Neon y añadir la variable `DATABASE_URL` en Vercel.

Pasos:

1. Crear el proyecto en Neon con el nombre `learning-inventory`.
2. Ejecutar `sql/schema.sql` en la consola SQL de Neon.
3. Ejecutar `sql/seed.sql` para insertar datos iniciales.
4. Añadir `DATABASE_URL` en las variables de entorno del proyecto de Vercel.
5. Redesplegar la aplicación.

## Variables de entorno

En local, Vite usa un proxy para enviar `/api` al backend de Express. Si en el futuro la API estuviera en otro dominio, se podría usar una variable:

```text
VITE_API_URL=https://tu-api.com/api/v1
```

En este caso, para la API no hace falta cambiar la URL porque está en el mismo proyecto de Vercel. Lo importante es configurar `DATABASE_URL` para que los endpoints de productos puedan conectarse a Neon.

## URLs finales

- Frontend: [Corvus Viajes](https://corvus-viajes.vercel.app)
- API: [Corvus Viajes](https://corvus-viajes.vercel.app/api/v1/health)
