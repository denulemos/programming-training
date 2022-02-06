const getAverage = (arrayOfNumbers) => {
    let sum = arrayOfNumbers.reduce((acumulatedValue, currentValue) => {
        return acumulatedValue + currentValue;
    })

    const result = sum / arrayOfNumbers.length

    return result;
}

console.log(getAverage([1,5,7,3,4])); // 4