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

## 📚 Endpoints Disponibles

### Taller 1 - Funciones Básicas

#### POST `/api/taller1/convertidor-temp`
Convierte temperatura de Celsius a Fahrenheit
\`\`\`json
{
  "tempCelsius": 25
}
\`\`\`

#### POST `/api/taller1/resolvedor`
Resuelve ecuación cuadrática
\`\`\`json
{
  "a": 1,
  "b": -3,
  "c": 2,
  "signo": 1
}
\`\`\`

#### POST `/api/taller1/mejor-paridad`
Determina si un número es par
\`\`\`json
{
  "num": 42
}
\`\`\`

#### POST `/api/taller1/peor-paridad`
Determina si un número es par (versión ineficiente)
\`\`\`json
{
  "n": 7
}
\`\`\`

### Taller 2 - Operaciones con Arrays

#### POST `/api/taller2/find-max`
Encuentra el valor máximo
\`\`\`json
{
  "array": [3, 7, 2, 9, 1]
}
\`\`\`

#### POST `/api/taller2/includes`
Verifica si un número está en el array
\`\`\`json
{
  "array": [1, 2, 3, 4, 5],
  "num": 3
}
\`\`\`

#### POST `/api/taller2/sum`
Suma todos los elementos
\`\`\`json
{
  "array": [1, 2, 3, 4, 5]
}
\`\`\`

#### POST `/api/taller2/missing-numbers`
Encuentra números faltantes en un rango
\`\`\`json
{
  "array": [1, 3, 5, 7, 10]
}
\`\`\`

### Taller 3 - Manipulación de Strings

#### POST `/api/taller3/desglosar-string`
Cuenta vocales o consonantes
\`\`\`json
{
  "texto": "Hola Mundo",
  "opcion": "vocales"
}
\`\`\`

#### POST `/api/taller3/two-sum`
Encuentra dos números que sumen el objetivo
\`\`\`json
{
  "array": [2, 7, 11, 15],
  "objetivo": 9
}
\`\`\`

#### POST `/api/taller3/conversion-romana`
Convierte números romanos a decimales
\`\`\`json
{
  "numeroRomano": "MCMXCIV"
}
\`\`\`

#### POST `/api/taller3/descomposicion`
Encuentra dos palabras que formen el objetivo
\`\`\`json
{
  "cadena": "hola,ho,la,mundo"
}
\`\`\`

## 🧪 Ejemplos de Uso con cURL

\`\`\`bash
# Convertir temperatura
curl -X POST http://localhost:3000/api/taller1/convertidor-temp \
  -H "Content-Type: application/json" \
  -d '{"tempCelsius": 25}'

# Encontrar máximo
curl -X POST http://localhost:3000/api/taller2/find-max \
  -H "Content-Type: application/json" \
  -d '{"array": [3, 7, 2, 9, 1]}'

# Contar vocales
curl -X POST http://localhost:3000/api/taller3/desglosar-string \
  -H "Content-Type: application/json" \
  -d '{"texto": "Hola Mundo", "opcion": "vocales"}'
\`\`\`

## 📖 Documentación

Visita `http://localhost:3000/api/docs` para ver la documentación completa de todos los endpoints.

## 🛠️ Tecnologías

- Node.js
- Express.js
- TypeScript
- CORS

## 👨‍💻 Autor

Proyecto desarrollado para el curso de Desarrollo Web Backend
