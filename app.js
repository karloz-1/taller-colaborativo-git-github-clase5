/* Limpiador de Arreglos (Filtro de Duplicados):
○ Descripción: Recibe un arreglo con números repetidos y retorna un nuevo arreglo

ordenado de menor a mayor y sin duplicados. */

let numeros_repetidos = [5,4,3,1,2,2,3,4,5,5,6,6,7,8]
let numeros_mayor_menor = [...new Set(numeros_repetidos)].sort((a, b) => a - b)

console.log(numeros_mayor_menor)
