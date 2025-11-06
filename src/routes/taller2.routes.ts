import { Router, type Request, type Response } from "express"
import { findMax, includes, sum, missingNumbers } from "../talleres/taller2"

const router = Router()

/**
 * POST /api/taller2/find-max
 * Body: { array: number[] }
 */
router.post("/find-max", (req: Request, res: Response) => {
  try {
    const { array } = req.body

    if (!Array.isArray(array) || array.length === 0) {
      return res.status(400).json({
        error: "array debe ser un arreglo no vacío",
      })
    }

    if (!array.every((item) => typeof item === "number")) {
      return res.status(400).json({
        error: "Todos los elementos deben ser números",
      })
    }

    const resultado = findMax(array)
    res.json({
      array,
      maximo: resultado,
    })
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" })
  }
})

/**
 * POST /api/taller2/includes
 * Body: { array: number[], num: number }
 */
router.post("/includes", (req: Request, res: Response) => {
  try {
    const { array, num } = req.body

    if (!Array.isArray(array)) {
      return res.status(400).json({
        error: "array debe ser un arreglo",
      })
    }

    if (typeof num !== "number") {
      return res.status(400).json({
        error: "num debe ser un número",
      })
    }

    const resultado = includes(array, num)
    res.json({
      array,
      numero: num,
      incluido: resultado,
    })
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" })
  }
})

/**
 * POST /api/taller2/sum
 * Body: { array: number[] }
 */
router.post("/sum", (req: Request, res: Response) => {
  try {
    const { array } = req.body

    if (!Array.isArray(array)) {
      return res.status(400).json({
        error: "array debe ser un arreglo",
      })
    }

    if (!array.every((item) => typeof item === "number")) {
      return res.status(400).json({
        error: "Todos los elementos deben ser números",
      })
    }

    const resultado = sum(array)
    res.json({
      array,
      suma: resultado,
    })
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" })
  }
})

/**
 * POST /api/taller2/missing-numbers
 * Body: { array: number[] }
 */
router.post("/missing-numbers", (req: Request, res: Response) => {
  try {
    const { array } = req.body

    if (!Array.isArray(array) || array.length === 0) {
      return res.status(400).json({
        error: "array debe ser un arreglo no vacío",
      })
    }

    if (!array.every((item) => typeof item === "number")) {
      return res.status(400).json({
        error: "Todos los elementos deben ser números",
      })
    }

    const resultado = missingNumbers(array)
    res.json({
      array,
      numerosFaltantes: resultado,
    })
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" })
  }
})

export default router
