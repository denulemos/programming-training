const getOddAndEvenNumbers = (numbers) => {
    let oddNumbers = [];
    let evenNumbers = [];

    for (number of numbers) {
        if (isEven(number)) {
            evenNumbers.push(number);
        } else{
            oddNumbers.push(number);
        }
      }

      return `Pares ${evenNumbers}, Impares ${oddNumbers}`;
}

const isEven = (number) => {
    return number % 2 === 0;
}

module.exports = getOddAndEvenNumbers;