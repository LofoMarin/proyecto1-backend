import { Router, type Request, type Response } from "express"
import { convertidorTemp, resolvedor, mejorParidad, peorParidad } from "../talleres/taller1"

const router = Router()

/**
 * POST /api/taller1/convertidor-temp
 * Body: { tempCelsius: number }
 */
router.post("/convertidor-temp", (req: Request, res: Response) => {
  try {
    const { tempCelsius } = req.body

    if (typeof tempCelsius !== "number") {
      return res.status(400).json({
        error: "tempCelsius debe ser un número",
      })
    }

    const resultado = convertidorTemp(tempCelsius)
    res.json({
      celsius: tempCelsius,
      fahrenheit: resultado,
    })
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" })
  }
})

/**
 * POST /api/taller1/resolvedor
 * Body: { a: number, b: number, c: number, signo: number }
 */
router.post("/resolvedor", (req: Request, res: Response) => {
  try {
    const { a, b, c, signo } = req.body

    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number" || typeof signo !== "number") {
      return res.status(400).json({
        error: "Todos los parámetros deben ser números",
      })
    }

    if (signo !== 1 && signo !== -1) {
      return res.status(400).json({
        error: "signo debe ser 1 o -1",
      })
    }

    const resultado = resolvedor(a, b, c, signo)
    res.json({
      ecuacion: `${a}x² + ${b}x + ${c} = 0`,
      solucion: resultado,
    })
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" })
  }
})

/**
 * POST /api/taller1/mejor-paridad
 * Body: { num: number }
 */
router.post("/mejor-paridad", (req: Request, res: Response) => {
  try {
    const { num } = req.body

    if (typeof num !== "number") {
      return res.status(400).json({
        error: "num debe ser un número",
      })
    }

    const resultado = mejorParidad(num)
    res.json({
      numero: num,
      esPar: resultado,
    })
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" })
  }
})

/**
 * POST /api/taller1/peor-paridad
 * Body: { n: number }
 */
router.post("/peor-paridad", (req: Request, res: Response) => {
  try {
    const { n } = req.body

    if (typeof n !== "number") {
      return res.status(400).json({
        error: "n debe ser un número",
      })
    }

    const resultado = peorParidad(n)
    res.json({
      numero: n,
      esPar: resultado,
    })
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" })
  }
})

export default router
