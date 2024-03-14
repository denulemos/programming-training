const countDigits = (number) => {
    // Base Case
    if (number === 0) return 0;


    // Recursive Case
    let smallAns = countDigits(parseInt(number / 10));
    // En JS debemos redondear los numeros 

    return smallAns + 1;
}

console.log(countDigits(12345)); // 5