# Seguridad en base de datos

## Qué es una inyección SQL

Una inyección SQL ocurre cuando se construye una consulta mezclando texto SQL con datos introducidos por el usuario. Si esos datos se concatenan directamente, un atacante podría modificar la consulta.

Ejemplo inseguro:

```ts
const id = request.body.id
const query = `SELECT * FROM products WHERE id = '${id}'`
```

Si el usuario envía un valor manipulado, podría alterar la consulta y acceder a datos que no debería.

## Cómo se evita

La forma correcta es usar consultas parametrizadas. En este proyecto se usa el driver `@neondatabase/serverless`, que permite separar la consulta de los valores.

Ejemplo usado en el servicio de productos:

```ts
await sql`
  INSERT INTO products (name, price, stock, category_id)
  VALUES (${payload.name.trim()}, ${payload.price}, ${payload.stock ?? 0}, ${payload.categoryId})
`
```

Aunque parezca una plantilla de texto, el driver no concatena los valores como texto plano. Los envía de forma segura como parámetros.

## Por qué es importante

La seguridad no debe depender solo del frontend. Aunque el formulario valide datos, cualquier persona podría enviar una petición manual al backend. Por eso la validación y las consultas seguras deben estar también en el servidor.

## Variable DATABASE_URL

La cadena de conexión de Neon se guarda en `DATABASE_URL`. Esta variable contiene credenciales, por lo que no debe subirse a GitHub.

Por eso el proyecto incluye `.env.example`, pero no incluye `.env` ni `.env.local` con datos reales.
