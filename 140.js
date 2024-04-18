/*
Se le proporciona una matriz desordenada que consta de números enteros consecutivos [1, 2, 3, ..., n] sin duplicados. 
Se le permite intercambiar dos elementos cualesquiera. Encuentre la cantidad mínima de intercambios necesarios para 
ordenar la matriz en orden ascendente.
*/

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let numSwaps = 0;

    // recorremos el array
    for (let i = 0; i < arr.length; i++) {
        // Mientras el numero actual no este en su lugar
        // i + 1 = 1 arr[0] => 1
        while (i + 1 != arr[i]) {
            let swapIndex = arr[i] - 1; // index - 1 = valor
            let valAtIndex = arr[i]; // valor actual
            let valAtSwapIndex = arr[swapIndex]; 

            // Swap
            arr[i] = valAtSwapIndex;
            arr[swapIndex] = valAtIndex;
            numSwaps++;
        }
    }

    return numSwaps

}

console.log(minimumSwaps([4,3,1,2])); // 3