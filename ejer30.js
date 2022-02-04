const cleanArrayFromRepeatNumbersAndStrings = (arrayToClean) => {
    // filtramos los strings 
    arrayToClean = arrayToClean.filter(element => typeof element === 'number');

    // filtramos los numeros repetidos
    arrayToClean = arrayToClean.filter((element, index, array) => array.indexOf(element) === index);

    return arrayToClean;
}

console.log(cleanArrayFromRepeatNumbersAndStrings([1,1,1,1,2,2,2,'denu',3,3,3])); // [ 1, 2, 3 ]
