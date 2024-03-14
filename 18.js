const getDivisors = (endNumber) => {
    let finalNumbers = "";
    for (let i = 0; i <= endNumber; i++) {
        if (isDivisor(i, endNumber)) {
        finalNumbers += i + " ";
    }
    }
    return finalNumbers;
}


const isDivisor = (numberToEvaluate, baseNumber) => { 
    return baseNumber % numberToEvaluate === 0;
}

module.exports = getDivisors;