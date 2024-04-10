/*
Dado un String, darle la vuelta, invertir el orden de sus caracteres. No se pueden usar metodos del lenguaje, solo estructuras de control.

Hay dos soluciones. La primera sin el uso de pila y la segunda con, dependiendo de que tipo de solucion estamos buscando.

* Input: `"hola"`
* Output: `aloh`
*/

const flipWord = (word) => {

    // word.split("").reverse().join(''); -- Solucion en una sola linea

    let inverted = "";

    // recorremos el texto que nos llega letra por letra
    for (let letter of word) {
        // guardamos cada letra en orden invertido
        inverted = letter + inverted;
    }

    return inverted;
}

console.log(flipWord("hola")); // aloh
console.log(flipWord("mundo")); // odnum


// Solucion con una pila
// Una pila es una estructura de datos que tiene una funcion de apilar y desapilar
// Es un LIFO (Last In First Out - Ultimo que entra primero que sale)

const flipWordStack = (word) => {
    let inverted = "";
    // Creamos la pila
    let stack = [];

    // Recorremos caracter por caracter
    for (let letter of word) {
        // Apilamos cada letra
        stack.push(letter);
    }

    // Recorremos la pila agregando cada letra a inverted
    while (stack.length > 0) {
        inverted += stack.pop();
    }

    // devolvemos el string resultante
    return inverted;
}

console.log(flipWordStack("hola")); // aloh
console.log(flipWordStack("mundo")); // odnum

