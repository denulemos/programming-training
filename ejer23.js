const capitalLetter = (text) => {   
    let result = '';

    // recorremos por indice
    for (letter in text) {
        if (text[letter - 1] === ' ' || parseInt(letter) === 0) {
            result += text[letter].toUpperCase();
        }
        else {
            result += text[letter];
        }
    }

    return result;
}

// resolucion utilizando array

const capitalLetterArray = (text) => {
    let words = [];

    for (let word of text.split(" ")){
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    // Unimos el array de palabras con un espacio entre elemento
    return words.join(" ");
}

console.log(capitalLetter("hola soy deno lemon")); // Hola Soy Deno Lemon
console.log(capitalLetterArray("hola soy deno lemon")); // Hola Soy Deno Lemon