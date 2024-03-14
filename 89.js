const sumRecursion = (number, amount) => {
    // Base Case
    if (amount === 0) return 0;

    // hacemos recursion restandole uno a amount cada vez
    return sumRecursion(number, amount - 1) + number;
}

module.exports = sumRecursion;