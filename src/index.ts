import express, { type Application, type Request, type Response } from "express"
import cors from "cors"
import taller1Routes from "./routes/taller1.routes"
import taller2Routes from "./routes/taller2.routes"
import taller3Routes from "./routes/taller3.routes"

const app: Application = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Ruta principal
app.get("/", (req: Request, res: Response) => {
  res.json({
    mensaje: "API de Talleres - Desarrollo Web Backend",
    version: "1.0.0",
    endpoints: {
      taller1: "/api/taller1",
      taller2: "/api/taller2",
      taller3: "/api/taller3",
    },
    documentacion: "/api/docs",
  })
})

// Documentación de endpoints
app.get("/api/docs", (req: Request, res: Response) => {
  res.json({
    taller1: {
      "POST /api/taller1/convertidor-temp": {
        descripcion: "Convierte temperatura de Celsius a Fahrenheit",
        body: { tempCelsius: "number" },
      },
      "POST /api/taller1/resolvedor": {
        descripcion: "Resuelve ecuación cuadrática",
        body: { a: "number", b: "number", c: "number", signo: "number (1 o -1)" },
      },
      "POST /api/taller1/mejor-paridad": {
        descripcion: "Determina si un número es par (versión eficiente)",
        body: { num: "number" },
      },
      "POST /api/taller1/peor-paridad": {
        descripcion: "Determina si un número es par (versión ineficiente)",
        body: { n: "number" },
      },
    },
    taller2: {
      "POST /api/taller2/find-max": {
        descripcion: "Encuentra el valor máximo en un array",
        body: { array: "number[]" },
      },
      "POST /api/taller2/includes": {
        descripcion: "Verifica si un número está en un array",
        body: { array: "number[]", num: "number" },
      },
      "POST /api/taller2/sum": {
        descripcion: "Suma todos los elementos de un array",
        body: { array: "number[]" },
      },
      "POST /api/taller2/missing-numbers": {
        descripcion: "Encuentra números faltantes en un rango",
        body: { array: "number[]" },
      },
    },
    taller3: {
      "POST /api/taller3/desglosar-string": {
        descripcion: "Cuenta vocales o consonantes en un texto",
        body: { texto: "string", opcion: '"vocales" | "consonantes"' },
      },
      "POST /api/taller3/two-sum": {
        descripcion: "Encuentra dos números que sumen un objetivo",
        body: { array: "number[]", objetivo: "number" },
      },
      "POST /api/taller3/conversion-romana": {
        descripcion: "Convierte números romanos a decimales",
        body: { numeroRomano: "string" },
      },
      "POST /api/taller3/descomposicion": {
        descripcion: "Encuentra dos palabras que formen el objetivo",
        body: { cadena: 'string (formato: "objetivo,palabra1,palabra2,...")' },
      },
    },
  })
})

// Rutas de los talleres
app.use("/api/taller1", taller1Routes)
app.use("/api/taller2", taller2Routes)
app.use("/api/taller3", taller3Routes)

// Manejo de rutas no encontradas
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    mensaje: "Visita /api/docs para ver los endpoints disponibles",
  })
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
  console.log(`📚 Documentación disponible en http://localhost:${PORT}/api/docs`)
})
