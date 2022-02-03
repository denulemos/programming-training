const getFactorial = (numberToFactor) => {
    let factorial = 1;
    for (let i = 1; i <= numberToFactor; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(getFactorial(5)); // 120 