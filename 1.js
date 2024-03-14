/*
    Dado un numero devolver su tabla de multiplicar completa. Por ejemplo:

    Input: 5
    Output:
        Tabla del 5
        5 x 1 = 5
        5 x 2 = 10
    (...)
*/

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

