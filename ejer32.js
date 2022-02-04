const squaredArray = (array) => {

    // Filtramos el array
    array = array.filter(element => typeof element === 'number');

    // Por cada numero dentro del array, multiplicarlo por si mismo y volver a ponerlo
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i];
    }

    return array;
}

console.log(squaredArray([1,2,3,4,5,'denu'])); // [ 1, 4, 9, 16, 25 ]