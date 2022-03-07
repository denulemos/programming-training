const getLongestPrefix = (arrayToEval) => {
    let answer = "";

    // Descubrimos el string mas pequeño
    let minWord = getSmallestWord(arrayToEval);

    // Si el array esta vacio, no hacemos nada
    if (arrayToEval.length === 0) return answer;

    // iteramos en los caracteres del string mas pequeño
    for (let i = 0; i < minWord.length; i++) {
        // recorremos el resto de palabras
        for (let j = 0; j < arrayToEval.length; j++) {
            // si el caracter actual del string pequeño no coincide con el caracter de alguna palabra del array
            if (minWord[i] !== arrayToEval[j][i]) {
                // Devolvemos lo que tenemos hasta ahora
                return answer;
            }
        }
        // Si no se hace el return antes, llega acá, y agregamos el caracter al resultado
        answer+= minWord[i];
    }

    return answer;
}

// Funcion para obtener el string mas pequeño
const getSmallestWord = (words) => {
    return words.reduce((smallestWord, current) => {
      return smallestWord.length < current.length ? smallestWord : current;
    });
  };

module.exports = getLongestPrefix;