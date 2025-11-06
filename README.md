# Talleres Backend - Desarrollo Web

API REST que unifica todos los talleres desarrollados en clase, implementada con Node.js, Express y TypeScript.

## 🚀 Instalación

\`\`\`bash
# Instalar dependencias
npm install

# Modo desarrollo (con hot reload)
npm run dev

# Compilar TypeScript
npm run build

# Ejecutar en producción
npm start
\`\`\`

## 📁 Estructura del Proyecto

\`\`\`
src/
├── talleres/           # Lógica de negocio de cada taller
│   ├── taller1.ts     # Funciones básicas
│   ├── taller2.ts     # Operaciones con arrays
│   └── taller3.ts     # Manipulación de strings
├── routes/            # Definición de rutas HTTP
│   ├── taller1.routes.ts
│   ├── taller2.routes.ts
│   └── taller3.routes.ts
└── index.ts           # Servidor principal
\`\`\`

## 📖 Documentación

Visita `http://localhost:3000/api/docs` para ver la documentación completa de todos los endpoints.

## 🛠️ Tecnologías

- Node.js
- Express.js
- TypeScript
- CORS
