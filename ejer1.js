const multiplyTable = (number) => {
    let result = `Tabla del ${number} \n`;

    for (let i = 1; i <= 10; i++){
        var operation = i*number;
        result += `${i} x ${number} = ${operation}\n`
    }

    return result;
}

console.log(multiplyTable(5));