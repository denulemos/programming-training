const vowelsAndConsonants = (textToEvaluate) => {
    let consonants = 0, vowels = 0, cleanText = '';

    // Cada letra que yo recorra del texto cumpla con un regex, solo letras 
    cleanText = textToEvaluate
    .split("") // Filter solo funciona con arrays de caracteres, por eso el Split
    .filter(letter => /[áéíóú\w]/gi.test(letter) && isNaN(letter)) // IsNaN se usa para eliminar numeros (is not a number)
    .join(""); // Lo volvemos a unir en un String

    // recorremos el string
    for (let letter of cleanText) {
        // Si es vocal
        if (/[aeiouáéíóú]/gi.test(letter)) {
            vowels++;
        } else {
            consonants++;
        }
    }

    return `Vowels: ${vowels} \nConsonants: ${consonants}`;
}


module.exports = vowelsAndConsonants;