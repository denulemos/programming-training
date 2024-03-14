const getRecurrent = (array) => {
    let mapping = {};

    // recorremos todo el array
    for (let i = 0; i < array.length; i++) {
        // si mapping ya posee al elemento
        if (mapping[array[i]] !== undefined) {
            // devolverlo
            return array[i];
        }
        // si no, agregarlo al mapping
        mapping[array[i]] = i;
    }
    return undefined;
}


console.log(getRecurrent([1,5,6,3,4,6]))
