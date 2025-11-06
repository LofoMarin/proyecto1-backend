// Taller 3: Manipulación de strings y algoritmos

/**
 * Filtra si una letra es vocal
 */
function filterVocales(letra: string): boolean {
  return ["a", "e", "i", "o", "u"].includes(letra)
}

/**
 * Cuenta vocales o consonantes en un string
 */
export function desglosarString(st: string, opc: "vocales" | "consonantes"): number {
  const letras = st.toLowerCase().match(/[a-záéíóúñ]/g) || []
  const vocales = letras.filter((ch) => filterVocales(ch.normalize("NFD")[0]))

  if (opc === "vocales") return vocales.length
  if (opc === "consonantes") return letras.length - vocales.length
  return 0
}

/**
 * Encuentra dos números en un array que sumen un valor objetivo
 */
export function twoSum(arr: number[], num: number): number[] | number {
  const seen = new Map<number, number>() // valor -> índice
  for (let i = 0; i < arr.length; i++) {
    const need = num - arr[i]
    if (seen.has(need)) return [seen.get(need)!, i]
    seen.set(arr[i], i)
  }
  return -1 // si no hay pareja
}

/**
 * Convierte números romanos a decimales
 */
export function conversionRomana(nr: string): number {
  const eq: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  const s = nr.toUpperCase()
  let res = 0

  for (let i = 0; i < s.length; i++) {
    const val = eq[s[i]]
    const next = eq[s[i + 1]] || 0
    res += val < next ? -val : val
  }
  return res
}

/**
 * Encuentra dos palabras en un diccionario que concatenadas formen el objetivo
 */
export function descomposicion(cadena: string): string[] | number {
  const partes = cadena.split(",").map((x) => x.trim())
  const objetivo = partes[0]
  const dic = partes.slice(1)

  for (let i = 0; i < dic.length; i++) {
    for (let j = 0; j < dic.length; j++) {
      if (i === j) continue
      if (dic[i] + dic[j] === objetivo) return [dic[i], dic[j]]
    }
  }
  return -1 // si no existe combinación
}
