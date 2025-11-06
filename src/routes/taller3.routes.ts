import { Router, type Request, type Response } from "express"
import { desglosarString, twoSum, conversionRomana, descomposicion } from "../talleres/taller3"

const router = Router()

/**
 * POST /api/taller3/desglosar-string
 * Body: { texto: string, opcion: "vocales" | "consonantes" }
 */
router.post("/desglosar-string", (req: Request, res: Response) => {
  try {
    const { texto, opcion } = req.body

    if (typeof texto !== "string") {
      return res.status(400).json({
        error: "texto debe ser un string",
      })
    }

    if (opcion !== "vocales" && opcion !== "consonantes") {
      return res.status(400).json({
        error: 'opcion debe ser "vocales" o "consonantes"',
      })
    }

    const resultado = desglosarString(texto, opcion)
    res.json({
      texto,
      opcion,
      cantidad: resultado,
    })
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" })
  }
})

/**
 * POST /api/taller3/two-sum
 * Body: { array: number[], objetivo: number }
 */
router.post("/two-sum", (req: Request, res: Response) => {
  try {
    const { array, objetivo } = req.body

    if (!Array.isArray(array)) {
      return res.status(400).json({
        error: "array debe ser un arreglo",
      })
    }

    if (typeof objetivo !== "number") {
      return res.status(400).json({
        error: "objetivo debe ser un número",
      })
    }

    const resultado = twoSum(array, objetivo)
    res.json({
      array,
      objetivo,
      indices: resultado,
    })
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" })
  }
})

/**
 * POST /api/taller3/conversion-romana
 * Body: { numeroRomano: string }
 */
router.post("/conversion-romana", (req: Request, res: Response) => {
  try {
    const { numeroRomano } = req.body

    if (typeof numeroRomano !== "string") {
      return res.status(400).json({
        error: "numeroRomano debe ser un string",
      })
    }

    const resultado = conversionRomana(numeroRomano)
    res.json({
      romano: numeroRomano,
      decimal: resultado,
    })
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" })
  }
})

/**
 * POST /api/taller3/descomposicion
 * Body: { cadena: string }
 */
router.post("/descomposicion", (req: Request, res: Response) => {
  try {
    const { cadena } = req.body

    if (typeof cadena !== "string") {
      return res.status(400).json({
        error: "cadena debe ser un string",
      })
    }

    const resultado = descomposicion(cadena)
    res.json({
      entrada: cadena,
      resultado,
    })
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" })
  }
})

export default router
