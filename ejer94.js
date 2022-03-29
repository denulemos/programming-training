const thisStringCanBeSegmented = (stringToEval, dictionary) => {
    // recorremos todo el array
    for (let i = 0; i < stringToEval.length; i++) {
        // va cortando la primera parte de la palabra
        let firstOption = stringToEval.substring(0, i);
        // si el diccionario tiene la palabra formada (despues de varias iteraciones)
        if (dictionary.has(firstOption)) {
            // buscamos el resto de la palabra
            let secondOption = stringToEval.substring(i);
            // si ya cortamos la palabra completa o el diccionario tiene la segunda parte, retornar true
            if (secondOption.length === 0 || dictionary.has(secondOption)) {
                return "String Can be Segmented";
            }
            if (thisStringCanBeSegmented(secondOption, dictionary)) {
                return "String Can be Segmented";
            }
        }
    }
    return "String Can NOT be Segmented";
}

module.exports = thisStringCanBeSegmented;