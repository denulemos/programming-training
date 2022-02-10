const squaredArray = (array) => {

    // Filtramos el array
    array = array.filter(element => typeof element === 'number');

    // Por cada numero dentro del array, multiplicarlo por si mismo y volver a ponerlo
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i];
    }

    return array;
}

module.exports = squaredArray;