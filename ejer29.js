const isCapicua = (numberToEvaluate) => {

    // Pasamos el numero a un String para tratarlo como tal
    const numberToEvaluateString = numberToEvaluate.toString();
    // Separamos los numeros, los damos vuelta y los volvemos a unir en un numero
    const numberToEvaluateStringReverse = numberToEvaluateString.split('').reverse().join('');

    // Si el numero resultante es igual al numero del parametro, es capicua
    return numberToEvaluateString === numberToEvaluateStringReverse;
}

module.exports = isCapicua;