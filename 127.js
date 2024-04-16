/*
Una operación de rotación hacia la izquierda en un arreglo desplaza cada uno de los elementos del arreglo una unidad hacia la izquierda. Por ejemplo, si se realizan 2 rotaciones hacia la izquierda en el arreglo 12345, entonces el arreglo se convertiría en 34512. Observa que el elemento de índice más bajo se mueve al índice más alto en una rotación. Esto se llama un arreglo circular.

Dado un arreglo de enteros y un número, realiza rotaciones hacia la izquierda en el arreglo. Retorna el arreglo actualizado para ser impreso como una sola línea de enteros separados por espacios.

* Input: `5 4 1 2 3 - 2`
* Output: `12354`
*/

/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

function rotLeft(a, d) {
    for (let i = 0; i < d; i ++){
        let element = a.shift();
        a.push(element);
    }
    return a;
}