const sumDigits = (number) => {
    if (number === 0) return 0;
    let smallAns = sumDigits(parseInt(number / 10));

    /*
    1234
    123
    12
    1
    0 => al llegar a cero, vuelve, y se suman
    */

    return smallAns + number % 10;
}

console.log(sumDigits(12345)); // 15