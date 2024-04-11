/*
Dado un String, comprobar si todos los caracteres son unicos o no

* Input: `abcde` y `abcded`
* Output: `true` - `false`
*/

const comprobarCaracteres = (string) => {
    // Creamos un set - Elimina valores repetidos
    const comprobativo = new Set(string.toUpperCase());
    // Si el size del set y del string (convertido a array) es lo mismo, entonces no cambio
    return comprobativo.size === Array.from(string.toUpperCase()).length;
}

console.log(comprobarCaracteres("abcde")); // true
console.log(comprobarCaracteres("adee")); // false
console.log(comprobarCaracteres("adeE")); // false


// Solucion con hash
const comprobarCaracteres2 = (string) => {
    // Creo el hash
    const collection = new Map();
    let found = true;
    // Convierto el string a mayusculas y a array
    const stringArray = Array.from(string.toUpperCase());

    // recorro el array
    stringArray.forEach(element => { // O(string)
        // si el elemento ya se encuentra en el hash, entonces devolver false
        if (collection.get(element)){
            found = false;
            return false;
        }
        // si no esta en el hash, agregarlo
        collection.set(element, element);
    }) 

    return found;
}

console.log(comprobarCaracteres2("abcde")); // true
console.log(comprobarCaracteres2("adee")); // false
console.log(comprobarCaracteres2("adeE")); // false
