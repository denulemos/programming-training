const toMayusOrMinus = (stringToEvaluate) => {
    // Contador de minusculas y mayusculas
    let minusAmount = 0;
    let mayusAmount = 0;

    for (let letter of stringToEvaluate) {
        if (letter === letter.toUpperCase()) {
            mayusAmount++;
        }
        else {
            minusAmount++;
        }
    }

    return mayusAmount > minusAmount ? stringToEvaluate.toUpperCase() : stringToEvaluate.toLowerCase();
}

module.exports = toMayusOrMinus;