const sumRecursion = (number, amount) => {
    // Base Case
    if (amount === 0) return 0;

    // hacemos recursion restandole uno a amount cada vez
    return sumRecursion(number, amount - 1) + number;
}

console.log(sumRecursion(5, 5)); // 5 + 5 + 5 + 5 + 5 = 25
console.log(sumRecursion(5, 4)); // 5 + 5 + 5 + 5 = 20