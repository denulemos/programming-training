const getOddNumbers = (number1, number2) => {
    let result = [];
    for (let i = number1; i <= number2; i++) { //while(number1 < number2)
        if (i % 2 !== 0) {
            result.push(i);
        }
        
        // number1++
    }

    const howManyoddNumbersAre = result.length;
    return howManyoddNumbersAre;
}

// Comentado en el ejercicio hay otras opciones que se pueden tomar dentro del bucle si queremos usar un while

module.exports = getOddNumbers;
