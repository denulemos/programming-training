const onlyOneLetter = (text) => {
    let count = {}; 
    let arrayResult = [];
    let letters = text.split('').filter(letter => letter.trim().length >= 1);

    // mapeamos las letras y sus repeticiones

    for (letter of letters) {
        // si la letra no está en el contador, agregarla
        if (!count[letter]) {
            count[letter] = 1;
        }
        else {
            count[letter]++;
        }
    }

    // eliminamos las letras que se repiten mas de una vez
    for (letter in count) {
        if (count[letter] === 1) {
            arrayResult.push(letter);
        }
    }

    return `${arrayResult}, ${arrayResult[0]}`
}

module.exports = onlyOneLetter;