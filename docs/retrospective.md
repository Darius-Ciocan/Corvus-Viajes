# Retrospectiva

## Que aprendi

Este proyecto conecta varias piezas que suelen estudiarse por separado: React, TypeScript, Tailwind, React Router, Context API, hooks, Express y una API REST. La parte mas importante fue mantener contratos claros entre frontend y backend.

## Conexion frontend-backend

El frontend no accede directamente a datos inventados dentro de los componentes. Usa un cliente de API tipado que llama a Express. Express organiza la logica en rutas, controladores y servicios. Esto hace que cada capa tenga una responsabilidad concreta.

## Problemas encontrados

Uno de los retos es que los tipos del frontend y del backend deben mantenerse alineados. Si cambia una propiedad en la API, hay que actualizar el contrato TypeScript del cliente.

Otro punto importante es validar dos veces: en el formulario para ayudar al usuario y en el backend para proteger la API.

## Uso de IA

La IA se uso como apoyo para estructurar el proyecto, redactar documentacion, proponer componentes, organizar endpoints y revisar que los requisitos del enunciado estuvieran cubiertos. El uso principal fue acelerar decisiones tecnicas y generar una primera version coherente del proyecto.

## Mejoras futuras

Anadiria base de datos real, login, panel de administracion, tests automaticos y documentacion OpenAPI. Tambien desplegaria frontend y API en produccion con variables de entorno configuradas.

Como mejora visual posterior se anadieron particulas, modo claro/oscuro y animaciones de interaccion. Esto mejora la sensacion de producto final sin cambiar la arquitectura de datos.
