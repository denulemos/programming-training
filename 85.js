const fibonacciRecursion = (limit) => {
    // Base cases
    if (limit === 0) {
        return 0;
    } else if (limit === 1) {
        return 1;
    } 

    let smallOutput1 = fibonacciRecursion(limit - 1);
    let smallOutput2 = fibonacciRecursion(limit - 2);

    return smallOutput1 + smallOutput2;
}

console.log(fibonacciRecursion(3)) // 0 + 1 + 1 = 2
console.log(fibonacciRecursion(4)) // 0 + 1 + 1 + 2 = 4