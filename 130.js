/*
Armar un diccionario que mediante la funcion isOnDict devuelva si la palabra existe en el diccionario.
No es una funcion, es una clase.

* Diccionario recibe: ["hola", "como", "estas"] y isOnDict("hola") devuelve true

*/

class Dictionary {
    constructor(words) {
        this.words = new Set(words);
    }

    isInDict(word) {
        return this.words.has(word);
    }
}

const dictionary = new Dictionary(["hola", "como", "estas"]);
dictionary.isInDict("denu"); // false
dictionary.isInDict("hola"); // true