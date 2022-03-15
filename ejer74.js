const findMissingNumber = (arrToEval) => {
    let sum = 0;
    let sumOfArr = 0;

    // sumamos todos los elementos del array
    for (let i = 0; i < arrToEval.length; i++) {
        sum += arrToEval[i];
    }
    
    // Creamos un aux que sea el largo del array mas uno
    let aux = arrToEval.length + 1;

    // realizamos la siguiente operacion
    sumOfArr = (aux * (aux + 1)) / 2; // arithmetic series sum formula

    // restamos el resultado de la suma de los elementos del array con la suma de los numeros del array
    return sumOfArr - sum;
}

console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(findMissingNumber([2, 3, 4,5, 6, 7, 8, 9, 10]));