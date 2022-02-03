const numberComparison = (number1, number2) => {
    if (number1 > number2) {
        return `${number1} is greater than ${number2}`;
    } else if (number1 < number2) {
        return `${number1} is less than ${number2}`;
    } else {
        return `${number1} is equal to ${number2}`;
    }
}

console.log(numberComparison(5, 5)); // 5 is equal to 5
console.log(numberComparison(5, 10)); // 5 is less than 10