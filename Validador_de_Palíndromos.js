let palabra = prompt ("Ingrese la palabra que desea verificar (Y si desea salir ponga salir) -> ");

while (palabra !== 'salir') {
    let voltear = palabra.split('').reverse().join('');
    if (voltear == palabra) {
        console.log('La palabra es un Palindromo')
    }else {
        console.log('La palabra no es un Palindromo')
    }
    palabra = prompt ("Ingrese la palabra que desea verificar (Y si desea salir ponga salir) -> ");
}