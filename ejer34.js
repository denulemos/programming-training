const calculator = (number1 , number2) =>{
    const sum = number1 + number2;
    const rest = number1 - number2;
    const multiplication = number1 * number2;
    const division = number1 / number2;

    return `${number1} + ${number2} = ${sum} \n` +
    `${number1} - ${number2} = ${rest} \n` +
    `${number1} * ${number2} = ${multiplication} \n` +
    `${number1} / ${number2} = ${division}`
}

module.exports = calculator;
