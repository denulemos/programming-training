const maxAndMin = (arrayToEvaluate) => {
    arrayToEvaluate.sort();
    return `El menor es ${arrayToEvaluate[0]} y el mayor es ${arrayToEvaluate[arrayToEvaluate.length - 1]}`;
}

module.exports = maxAndMin;