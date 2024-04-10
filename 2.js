/*

Dado un String comprobar si es un palindromo o no (se leen igual del derecho y del revés), por ejemplo Bob, Pop, etc...
No tener en cuenta espacios ni simbolos.

* Input: `"otto"`
* Output: `true`

Posee dos soluciones. Una validada con metodos de JS y otro con manejos de datos.

*/

const esPalindromo = (texto) => {
    // split() => Separa la palabra letra por letra en un array
    // reverse() => Invierte el array
    // join() => Une el array en un string
    return texto.toUpperCase() === texto.toUpperCase().split('').reverse().join('');
}

console.log(esPalindromo("hola")) // false
console.log(esPalindromo("otto")) // true


const esPalindromo2 = (word) => {

    let result = 0; 
    let wordSize = word.length; 
    // restamos 1 ya que los arrays empiezan en 0
    let final = wordSize - 1;

    // recorremos la palabra
    while (result <= wordSize) {
        // ignoramos a los caracteres especiales
        while (result<final && !isLetter(word[result])) {
            result++;
        }
        while (result<final && !isLetter(word[final])) {
            final--;
        }
        // lo pasamos a mayuscula ya que debemos soportar a todos los caracteres tanto min como mayus
        if (word.toUpperCase()[result] !== word.toUpperCase()[final]) {
            // Si ya no coinciden los caracteres, la palabra no es palindromo
            return false;
        }


        result++;
        final--;
    }

    return true;
}

const isLetter = (char) => {
    return char.match(/^[0-9a-zA-Z]+$/);
}

console.log(esPalindromo2("otto")); // true
console.log(esPalindromo2("hola")); // false

module.exports = { isPalindromo, esPalindromo2 };
