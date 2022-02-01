const letterRepeated = (textToEvaluate) => {
    let result = {};
    let maxRepeated = 0;
    let mostRepeatedLetter = "";
    textToEvaluate = textToEvaluate.trim();

    for (let letter of textToEvaluate){
        result[letter] = (result[letter] || 0) + 1;
    }

    for (let letter in result){
        if (result[letter] > maxRepeated){
            maxRepeated = result[letter];
            mostRepeatedLetter = letter;
        }
    }


    return `La letra mas repetida es la ${mostRepeatedLetter} con ${maxRepeated} repeticiones`;
}


console.log(letterRepeated("Hola como estas todo bien")); // La letra mas repetida es la o con 5 repeticiones



