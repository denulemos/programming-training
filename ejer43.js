const getAverage = (arrayOfNumbers) => {
    let sum = arrayOfNumbers.reduce((acumulatedValue, currentValue) => {
        return acumulatedValue + currentValue;
    })

    const result = sum / arrayOfNumbers.length

    return result;
}

module.exports = getAverage;