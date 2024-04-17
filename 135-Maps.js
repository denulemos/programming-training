/*
Dado un array de palabras, devolver la palabra mas repetida de la misma

* Input: ["hola", "como", "estas", "hola", "hola"]
* Output: "hola"
*/

const palabraMasRepetida = (array) => {
    const stringCount = new Map();

    array.forEach(element => {
        element = element.toLowerCase();
        if (stringCount.has(element)) {
            stringCount.set(element, stringCount.get(element) + 1);
        }
        else {
            stringCount.set(element, 1);
        }
    });

    let maxCount = 0;
    let maxKey = "";

    stringCount.forEach((value, key) => {
        if (value > maxCount) {
            maxCount = value;
            maxKey = key;
        }
    });

    return `${maxKey} ${maxCount}`;

}

console.log(palabraMasRepetida(["hola","hola","hola", "hola", "denu", "chau"])); // hola 4