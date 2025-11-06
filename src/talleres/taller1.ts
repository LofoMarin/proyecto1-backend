// Taller 1: Funciones básicas

/**
 * Convierte temperatura de Celsius a Fahrenheit
 */
export function convertidorTemp(tempCelsius: number): number {
  return (tempCelsius * 9) / 5 + 32
}

/**
 * Resuelve ecuación cuadrática usando la fórmula general
 * @param a - Coeficiente cuadrático
 * @param b - Coeficiente lineal
 * @param c - Término independiente
 * @param signo - +1 para solución positiva, -1 para negativa
 */
export function resolvedor(a: number, b: number, c: number, signo: number): number {
  return (-b + signo * Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
}

/**
 * Determina si un número es par (versión eficiente)
 */
export function mejorParidad(num: number): boolean {
  return !(num % 2)
}

/**
 * Determina si un número es par (versión ineficiente)
 */
export function peorParidad(n: number): boolean | null {
  if (n === 0) return true
  if (n === 1) return false
  if (n === 2) return true
  if (n === 3) return false
  if (n === 4) return true
  if (n === 5) return false
  if (n === 6) return true
  if (n === 7) return false
  if (n === 8) return true
  if (n === 9) return false
  if (n === 10) return true
  return null
}
