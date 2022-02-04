const showSquare = (number) => {
    let arrayResult = [];
    for (let i = 0; i < number; i++) {
        arrayResult.push(squareOfNumber(i));
    }

    return arrayResult;
}

const squareOfNumber = (number) => {
    return number*number;
}

console.log(showSquare(5)); // [ 0, 1, 4, 9, 16 ]
