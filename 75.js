const getSumExists = (array, expectedResult) => {
    // set permite almacenar valores unicos de cualquier tipo
    let foundValues = new Set()
    // recorremos el array
    for (let elementIndex in array) {
        // si el set tiene un numero que es igual al numero esperado menos el numero indexado
      if (foundValues.has(expectedResult - array[elementIndex])) {
        return true; // ya nos vamos ante el primer resultado positivo
      }
      // agregamos el valor al set
      foundValues.add(array[elementIndex]);
    }
  
    return false;
}

console.log(getSumExists([1, 2, 3, 4, 6, 7, 8, 9, 10], 11));
console.log(getSumExists([1, 2, 3, 4, 6, 7, 8, 9, 10], 13));
console.log(getSumExists([1, 2, 3, 4, 6, 7, 8, 9, 10], 153));

