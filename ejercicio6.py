# 6. Contador de Vocales y Consonantes:
#○ Descripción: Recibe una frase y retorna un objeto JSON con dos propiedades: la
#cantidad de vocales y la cantidad de consonantes.
import json

frase = input("Ingrese una frase: ")
vocales = "aeiouAEIOU"

vocalesTotales = 04
consonantes = 0

for caracter in frase:
    if caracter.isalpha():
        if caracter in vocales:
            vocalesTotales += 1
        else:
            consonantes += 1

resultado = {
    "vocales": vocalesTotales,
    "consonantes": consonantes
}

resultado_json = json.dumps(resultado, indent=2)

print(resultado_json + "Saul la bestia")