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


console.log(subdivideArray([1,2,3,4,5,6,7,8,9,10], 3)); // [1,2,3], [4,5,6], [7,8,9], [10]