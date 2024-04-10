/*
Dado un String y una frase decir cuantas veces se repite la palabra en esa frase dada.

* Input: `("Hola", "Hola cómo andas?")`
* Output: `1`
*/

const contarPalabras = (palabra, frase) => {
    // Se divide la frase en palabras y se recorre para contar cuantas veces se repite la palabra
    let palabras = frase.split(" ");
    let contador = 0;
    palabras.forEach(palabraFrase => {
        if(palabraFrase === palabra){
            contador++;
        }
    });
    return contador;
}

console.log(contarPalabras("Hola", "Hola cómo andas?")) // 1
console.log(contarPalabras("Hola", "Hola cómo andas? Hola")) // 2
console.log(contarPalabras("Hola", "Hola cómo andas? Hola Hola")) // 3

const contarPalabras2 = (palabra, frase) => {
    // Se divide la frase en palabras y se filtra por la palabra que se quiere contar
    return frase.split(" ").filter(palabraFrase => palabraFrase === palabra).length;
}

console.log(contarPalabras2("Hola", "Hola cómo andas?")) // 1
console.log(contarPalabras2("Hola", "Hola cómo andas? Hola")) // 2
console.log(contarPalabras2("Hola", "Hola cómo andas? Hola Hola")) // 3

module.exports = {contarPalabras, contarPalabras2};

