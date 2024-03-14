const searchVocals = (textToEvaluate) => {
    const regexVocals = /[aeiou]/gi;
    const coincidences = textToEvaluate.match(regexVocals);

    // Coincidences puede no existir si no encuentra vocales
    return coincidences ? coincidences.length : 0;
}

module.exports= searchVocals;



