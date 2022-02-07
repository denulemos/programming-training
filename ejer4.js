const flipWord = (word) => {

    // word.split("").reverse().join(''); -- Solucion en una sola linea

    let inverted = "";

    // recorremos el texto que nos llega letra por letra
    for (let letter of word) {
        // guardamos cada letra en orden invertido
        inverted = letter + inverted;
    }

    return inverted;
}

module.exports = flipWord;
