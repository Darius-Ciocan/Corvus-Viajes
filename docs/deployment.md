# Despliegue

## Frontend

El frontend se puede desplegar en Vercel con:

```bash
npm run build
npx vercel deploy
```

## Backend

El backend Express esta en `server/src`. Para produccion en Vercel se debe adaptar como funcion serverless o desplegarlo como servicio compatible con Node.js. Otra opcion es alojar la API en un proveedor externo y configurar `VITE_API_URL`.

## Variables de entorno

En local el cliente usa el proxy de Vite para `/api`. En produccion se recomienda definir:

```text
VITE_API_URL=https://tu-api.com/api/v1
```

## URLs

- Frontend: pendiente.
- API: pendiente.
