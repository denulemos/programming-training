const subdivideArray = (array, newArraySize) => {

    // Un array de arrays
    let arrays = [];

    // Recorro el array que llega por parametros
    for(let object of array) {

        // conseguir el ultimo elemento del array
        let lastElement = arrays[arrays.length - 1];

        // Si el ultimo elemento del array no existe, crear uno nuevo
        if(!lastElement || lastElement.length === newArraySize) {
            arrays.push([object]);
        }
        else {
            lastElement.push(object);
        }

    }

    return arrays;
}

module.exports = subdivideArray;