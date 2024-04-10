/*
Dado un numero devolver su tabla de multiplicar completa. Por ejemplo:

* Input: `5`
* Output:

Tabla del 5
5 x 1 = 5
5 x 2 = 10
(...)

*/


// Con impresion en consola
const tablasMultiplicar = (numero) => {
    console.log(`Tabla del ${numero}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

tablasMultiplicar(5);

/*
Tabla del 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
*/

// Con devolucion de String
const tablasMultiplicar2 = (number) => {
    let result = "";

    result += `Tabla del ${number} -`;
    for (let i = 1; i <= 10; i++){
        var operation = i*number;
        result += `${i} x ${number} = ${operation} - `
    }

    return result;
}

console.log(tablasMultiplicar2(5));

// Exportamos para los tests
module.exports = {tablasMultiplicar2, tablasMultiplicar};