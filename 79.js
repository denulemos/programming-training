const containsCommon = (arr1, arr2) => {
    // creamos un objeto que vamos a llenar con los items del primer array
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        // si no existe el elemento en el map
        if (!map[arr1[i]]) {
            // lo agregamos al map
            map[arr1[i]] = true;
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        // si el elemento existe en el map
        if (map[arr2[j]]) {
            return true;
        }
    }

    return false
}