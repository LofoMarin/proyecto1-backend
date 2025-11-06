// Taller 2: Operaciones con arrays

/**
 * Encuentra el valor máximo en un array
 */
export function findMax(array: number[]): number {
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i]
  }
  return max
}

/**
 * Verifica si un número está incluido en un array
 */
export function includes(array: number[], num: number): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) return true
  }
  return false
}

/**
 * Suma todos los elementos de un array
 */
export function sum(array: number[]): number {
  let s = 0
  for (let i = 0; i < array.length; i++) s += array[i]
  return s
}

/**
 * Encuentra los números faltantes en un rango
 */
export function missingNumbers(array: number[]): number[] {
  // Hallar min y max sin Math.min/Math.max
  let min = array[0]
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) min = array[i]
    if (array[i] > max) max = array[i]
  }

  // Números faltantes entre min y max
  const missing: number[] = []
  for (let n = min + 1; n < max; n++) {
    if (!includes(array, n)) missing.push(n)
  }
  return missing
}
