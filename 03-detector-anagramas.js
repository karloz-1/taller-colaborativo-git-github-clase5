// Descripción: Recibe dos palabras y retorna true si ambas tienen exactamente las
// mismas letras (sin importar el orden), o false.

function sonAnagramas(palabra1, palabra2) {
  // Formatear palabras
  const p1 = palabra1.toLowerCase().replace(/\s+/g, "");
  const p2 = palabra2.toLowerCase().replace(/\s+/g, "");

  // Si no tienen la misma longitud, es imposible que tengan las mismas letras
  if (p1.length !== p2.length) {
    return false;
  }

  const palabra1Ordenada = p1.split("").sort().join("");
  const palabra2Ordenada = p2.split("").sort().join("");

  return palabra1Ordenada === palabra2Ordenada;
}

console.log("Ingresa dos palabras");

import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const palabra1 = await rl.question("Palabra 1: ");
const palabra2 = await rl.question("Palabra 2: ");

rl.close();

console.log(sonAnagramas(palabra1, palabra2));
