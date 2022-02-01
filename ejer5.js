const porcentajeCalculator = (percent, number) => {
    const result = (number * (percent/100));
    return result;
}

console.log(porcentajeCalculator(20, 100)); // 20