const isPalindromo = (word) => {

    const inverted = word
    // Separamos cada letra de la palabra en un Array
    .split('')
    // Volteamos el array
    .reverse()
    // Unimos el array en un texto de nuevo
    .join('')

    const checkIfIsPalindromo = inverted === word;

    return checkIfIsPalindromo;
}

module.exports = isPalindromo;
