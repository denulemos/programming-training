/*
Imagine que le han dado una serie de números enteros y un número de consulta k. 
Su tarea es escribir una función que encuentre todos los tripletes 
en la matriz que suman el número de consulta k

* Input: nums = [1, 2, 3, 4, 5] k = 6
* Output:  1 - Solo 1,2,3 suman 6
*/

// Fuerza bruta

function findTripletsWithSum(arr, k) {
    const triplets = [];

    // Recorremos el arreglo
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let l = j + 1; l < arr.length; l++) {
                // Comprobamos si la suma de los tres números es igual a k
                if (arr[i] + arr[j] + arr[l] === k) {
                    triplets.push([arr[i], arr[j], arr[l]]);
                }
            }
        }
    }

    return triplets;
}

// Ejemplo de uso
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const k = 10;
console.log(findTripletsWithSum(arr, k)); // Debería imprimir: [[1, 2, 7], [1, 3, 6], [1, 4, 5], [2, 3, 5]]

// Con punteros

function findTripletsWithSum2(arr, k) {
    // Ordenamos el arreglo para facilitar el proceso de búsqueda de los triplets
    arr.sort((a, b) => a - b);

    const triplets = [];

    // Recorremos el arreglo
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1; // Índice del primer elemento después de arr[i]
        let right = arr.length - 1; // Índice del último elemento

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            // Si la suma es igual a k, agregamos el triplet al arreglo
            if (sum === k) {
                triplets.push([arr[i], arr[left], arr[right]]);
                left++; // Incrementamos el puntero izquierdo
                right--; // Decrementamos el puntero derecho
            }
            // Si la suma es menor que k, movemos el puntero izquierdo hacia la derecha
            else if (sum < k) {
                left++;
            }
            // Si la suma es mayor que k, movemos el puntero derecho hacia la izquierda
            else {
                right--;
            }
        }
    }

    return triplets;
}

console.log(findTripletsWithSum2(arr, k)); // Debería imprimir: [[1, 2, 7], [1, 3, 6], [1, 4, 5], [2, 3, 5]]
