# Despliegue

## Frontend

El frontend se puede desplegar en Vercel con:

```bash
npm run build
npx vercel deploy
```

## Backend

El backend Express esta en `server/src`. Para Vercel se creo `api/[...path].ts`, que reutiliza la misma app de Express como funcion serverless catch-all.

## Variables de entorno

En local el cliente usa el proxy de Vite para `/api`. Si frontend y API se despliegan en el mismo proyecto de Vercel, puede usarse `/api/v1`. Si la API esta en otro dominio, se recomienda definir:

```text
VITE_API_URL=https://tu-api.com/api/v1
```

## URLs

- Frontend: [Corvus Viajes](https://corvus-viajes.vercel.app)
- API: [Corvus Viajes](https://corvus-viajes.vercel.app/api/v1/health)
