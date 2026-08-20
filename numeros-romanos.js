const readline = require('readline');

function romano(num){
    const valores = [
        {valor: 1000, simbolo: "M"},
        {valor: 900, simbolo: "CM"},
        {valor: 500, simbolo: "D"},
        {valor: 400, simbolo: "CD"},
        {valor: 100, simbolo: "C"},
        {valor: 90, simbolo: "XC"},
        {valor: 50, simbolo: "L"},
        {valor: 40, simbolo: "XL"},
        {valor: 10, simbolo: "X"},
        {valor: 9, simbolo: "IX"},
        {valor: 5, simbolo: "V"},
        {valor: 4, simbolo: "IV"},
        {valor: 1, simbolo: "I"}
    ];
    let resultado = "";

    for(let i = 0; i < valores.length; i++){
        while (num >= valores[i].valor) {
            resultado += valores[i].simbolo;
            num -= valores[i].valor;
        }
    }
    return resultado;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digita un número entero (entre 1 y 3999): ', (respuesta) => {
    const numeroIngresado = parseInt(respuesta);
    
    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 3999) {
        console.log('Por favor, ingresa un número válido dentro del rango.');
    } else {
        const resultadoFinal = romano(numeroIngresado);
        console.log(`El número ${numeroIngresado} en romano es: ${resultadoFinal}`);
    }
    
    rl.close();
});