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

console.log(getOddAndEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Pares 2,4,6,8,10, Impares 1,3,5,7,9