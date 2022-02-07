const multiplyTable = (number) => {
    let result = "";

    for (let i = 1; i <= 10; i++){
        var operation = i*number;
        result += `${i} x ${number} = ${operation} `
    }

    return result;
}

// Exportamos para los tests
module.exports = multiplyTable;
