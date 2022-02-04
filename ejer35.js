const createNewArrayOfFirstAndLast = (array) => {
    // Limpiamos el array
    array = cleanTheArray(array);

    let newArray = [];
    newArray.push(array[0]);
    newArray.push(array[array.length - 1]);
    return newArray;
}

// Funcion para limpiar elementos que no sean numeros del array
const cleanTheArray = (array) => {
    array = array.filter(element => typeof element === 'number');
    return array;
}

console.log(createNewArrayOfFirstAndLast([1, 2, 3, 4, 5])); // [1,5]