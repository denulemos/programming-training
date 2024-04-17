/*
Dado una cadena de texto, devolver cuantas vocales tiene la misma.

* Input: `denu`
* Output: `2`
*/

const searchVocals = (textToEvaluate) => {
    const regexVocals = /[aeiou]/gi;
    const coincidences = textToEvaluate.match(regexVocals);

    // Coincidences puede no existir si no encuentra vocales
    return coincidences ? coincidences.length : 0;
}

// -----------------------

const searchVocals2 = (word) => {
    const vocals = ["a", "e", "i", "o", "u"];
    let count = 0;
    
    for (let char of word.toLowerCase()) {
        if (vocals.includes(char)) {
            count = count + 1;
        }
    }

    return count;
}

// -----------------------

const searchVocals3 = (word) => {
    const vocals = ["a", "e", "i", "o", "u"];
    // pasamos el string a minuscula, a array y corremos un reduce
    return word.toLowerCase().split("").reduce((accumulator, character) => { 
        if (vocals.includes(character)) {
            accumulator = accumulator + 1;
        }
        return accumulator;
    }, 0) // inicializamos el accumulator en cero
}

console.log(searchVocals("adaasdaeeeeiis")); // 10
console.log(searchVocals2("adaasdaeeeeiis")); // 10
console.log(searchVocals3("adaasdaeeeeiis")); // 10