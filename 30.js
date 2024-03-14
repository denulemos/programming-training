const cleanArrayFromRepeatNumbersAndStrings = (arrayToClean) => {
    // filtramos los strings 
    arrayToClean = arrayToClean.filter(element => typeof element === 'number');

    // filtramos los numeros repetidos
    arrayToClean = arrayToClean.filter((element, index, array) => array.indexOf(element) === index);

    return arrayToClean;
}

module.exports = cleanArrayFromRepeatNumbersAndStrings;
