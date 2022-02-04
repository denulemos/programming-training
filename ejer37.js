const mostRepeatedWord = (evaluate) => {
    let mapping = {}, mostRepeated = "", mostRepeatedTimes = 0; // Guardamos todos los elementos en un JSON

    // chequeamos que sea un string
    if (typeof evaluate === 'string') {
        evaluate = evaluate.split(" ");
    }

    // mapeamos por palabra y repeticiones
    for (let element of evaluate) {
        if (mapping[element]) {
            mapping[element]++;
        } else {
            mapping[element] = 1;
        }
    }

    // recorremos el mapeo armado antes
    for (let element in mapping) {
        if (mapping[element] > mostRepeated) {
            mostRepeated = mapping[element];
            mostRepeatedTimes = element;
        }
    }

    return `El elemento mas repetido es "${mostRepeatedTimes}" por ${mostRepeated} apariciones`;

}

console.log(mostRepeatedWord("hola como andas ? denu esta bien y vos como andas")); // La palabra mas repetida es "como" por 2 apariciones
console.log(mostRepeatedWord([1,2,2,2,3,4])); // El elemento mas repetido es "2" por 3 apariciones