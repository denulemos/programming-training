/*
Dada una matriz de números enteros, ordene la matriz en orden ascendente usando el algoritmo Bubble Sort anterior. 
Una vez ordenado, imprima las siguientes tres líneas:

Array is sorted in numSwaps swaps., dóndees el número de intercambios que tuvieron lugar.
First Element: firstElement, dóndees el primer elemento de la matriz ordenada.
Last Element: lastElement, dóndees el último elemento de la matriz ordenada.

Sugerencia: Para completar este desafío, debe agregar una variable que mantenga un recuento actualizado de todos los 
intercambios que ocurren durante la ejecución
*/

function countSwaps(array) {
    let swapCount = 0;
    for (let i = 0; i < array.length; i++) {
    // Itera por todos los elementos menos el ultimo, por eso length - 1
    for (let j = 0; j < array.length - 1; j++) {
        // Es el elemento actual (j) mayor al siguiente? (j + 1)
      if (array[j] > array[j + 1]) {

        // Si se cumple la condicion, darlos vuelta
        const temp = array[j];

        // Asigno al elemento actual el valor siguiente
        array[j] = array[j + 1];

        // Asigno al valor siguiente el elemento actual
        array[j + 1] = temp;
        
        swapCount++;
      }
    }
  }

    console.log("Array is sorted in " + swapCount +" swaps.")
    console.log("First Element: " + array[0])
    console.log("Last Element: " + array[array.length - 1])

}