const maxAndMin = (arrayToEvaluate) => {
    arrayToEvaluate.sort();
    return `El menor es ${arrayToEvaluate[0]} y el mayor es ${arrayToEvaluate[arrayToEvaluate.length - 1]}`;
}

console.log(maxAndMin([1,5,7,9,1,2,3])); // El menor es 1 y el mayor es 9