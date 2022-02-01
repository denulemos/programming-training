const searchWord = (word, phrase) => {

    // Limpiamos la frase, la ponemos en minuscula y retiramos las comas
    const cleanPhrase = phrase.toLowerCase().replace(',', '');
    // Existe la palabra buscada dentro de la frase?
    const wordFound = cleanPhrase.includes(word);

    if (wordFound){
        // Armamos un array con todas las palabras de la frase
        const words = cleanPhrase.split(" ");
        var map = {};
        
        // Iteramos por palabra y contamos sus ocurrencias
        words.forEach(wordIterated => {
            map[wordIterated] ? map[wordIterated]++ : map[wordIterated] = 1;
        });

        const result = map[word];
        return result;
    }
    
    return 0;

}

console.log(searchWord("hola", "hola, como va hola")); // 2
console.log(searchWord("denu", "hola, como va hola")); // 0