/*

Alice y Bob crearon cada uno un problema para HackerRank. Un revisor califica los dos desafíos y otorga puntos en una escala del 1 al 100 para tres categorías: claridad del problema, originalidad y dificultad.

La calificación para el desafío de Alice es el triplete a = (a[0], a[1], a[2]), y la calificación para el desafío de Bob es el triplete b = (b[0], b[1], b [2]).

La tarea es encontrar sus puntos de comparación comparando a[0] con b[0], a[1] con b[1] y a[2] con b[2].

Si a[i] > b[i], entonces Alice recibe 1 punto.
Si a[i] < b[i], entonces Bob recibe 1 punto.
Si a[i] = b[i], entonces ninguna persona recibe un punto.
Los puntos de comparación son los puntos totales que obtuvo una persona.

Dados a y b, determine sus respectivos puntos de comparación.

* Input: `a = [5, 6, 7] b = [3, 6, 10]`
* Output: `[1, 1]` (Alice 1 punto, Bob 1 punto)

*/

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    const resultArray = [0,0];
    for (let i = 0; i < a.length; i ++){
        if (a[i] > b[i]) {
            resultArray[0] = resultArray[0] + 1;
        }
        else if (a[i] < b[i]) {
            resultArray[1] = resultArray[1] + 1;
        }
    }
    
    return resultArray;
}