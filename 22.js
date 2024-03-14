const numberComparison = (number1, number2) => {
    if (number1 > number2) {
        return `${number1} is greater than ${number2}`;
    } else if (number1 < number2) {
        return `${number1} is less than ${number2}`;
    } else {
        return `${number1} is equal to ${number2}`;
    }
}


module.exports = numberComparison;