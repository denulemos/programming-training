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

console.log(calculator(5,5));

/*
5 + 5 = 10 
5 - 5 = 0 
5 * 5 = 25 
5 / 5 = 1
*/