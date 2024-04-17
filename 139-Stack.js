/*
Se le proporciona una matriz N-dimensional (una lista anidada) y su tarea es convertirla en una matriz 1D. La matriz N-dimensional puede tener cualquier cantidad de listas anidadas y cada lista anidada puede contener cualquier cantidad de elementos. Los elementos de las listas anidadas son números enteros. Escriba una función que tome una matriz N-dimensional como entrada y devuelva una matriz 1D

* Input: `[1, [2, 3], [4, [5, 6]], 7]`;
* Output: `[1, 2, 3, 4, 5, 6, 7]`;
*/

function aplanarArrayND(arr) {
    // Inicializamos un array vacío para almacenar los elementos aplanados
    const arrayAplanado = [];

    // Pila para llevar un seguimiento de los arrays anidados
    const pila = [...arr];

    // Iteramos a través de la pila - Mientras la pila tenga elementos en ella
    while (pila.length) {
        // Extraemos el elemento superior de la pila
        const siguiente = pila.pop();
        console.log(siguiente);

        // Si el elemento extraído es un array, agregamos sus elementos a la pila
        if (Array.isArray(siguiente)) {
            pila.push(...siguiente);
        } else {
            // Si el elemento extraído no es un array, lo agregamos al array aplanado
            arrayAplanado.push(siguiente);
        }
    }

    // Revertimos el array aplanado para mantener el orden original
    return arrayAplanado.reverse();
}

// Ejemplo de uso
const arrayAnidado = [1, [2, [3, 4], 5], 6, [7, 8]];
console.log(aplanarArrayND(arrayAnidado)); // Salida: [1, 2, 3, 4, 5, 6, 7, 8]
