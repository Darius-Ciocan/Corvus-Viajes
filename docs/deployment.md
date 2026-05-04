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

## Variables de entorno

En local, Vite usa un proxy para enviar `/api` al backend de Express. Si en el futuro la API estuviera en otro dominio, se podría usar una variable:

```text
VITE_API_URL=https://tu-api.com/api/v1
```

En este caso no ha hecho falta porque la API está en el mismo proyecto de Vercel.

## URLs finales

- Frontend: [Corvus Viajes](https://corvus-viajes.vercel.app)
- API: [Corvus Viajes](https://corvus-viajes.vercel.app/api/v1/health)
