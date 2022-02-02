const printNumbers = (endNumber) => {
    let finalNumbers = "";
    for (let i = 1; i <= endNumber; i++) {
        finalNumbers += evaluateNumber(i) + " ";
    }

    return finalNumbers;
}

const evaluateNumber = (numberToEvaluate) => { 
    // Se evaluan los multiplos
    if (numberToEvaluate % 3 === 0 && numberToEvaluate % 5 === 0){
        return "DenoLemon";
    }
    else if (numberToEvaluate % 3 === 0) {
        return "Deno";
    }
    else if (numberToEvaluate % 5 === 0){
        return "Lemon";
    }
    return numberToEvaluate;
}

console.log(printNumbers(6));