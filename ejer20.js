const cleanString = (text) => {
    return text
    .replace(/[^\w]/gi, "") // Eliminamos todo lo que NO sean letras
    .toLowerCase() // Lo pasamos a minúsculas
    .split("") // Lo convertimos en un array de caracteres
    .sort() // Lo ordenamos alfabeticamente
    .join("") // Lo volvemos a unir en un string
    ;
}

const isAnAnagram = (textOne, textTwo) => {
    return cleanString(textOne) === cleanString(textTwo);
}

module.exports = isAnAnagram;