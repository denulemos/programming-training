class HashTable {
    constructor() {
        this.size = 20
        this.buckets = new Array(this.size)

        // llevamos cada bucket con un map
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map()
        }

    }

    insert(key, value){
        let idx = hash(key, this.size); // hasheamos la key
        this.buckets[idx].set(key, value); // set es un metodo de map
    }

    remove(key){
        let idx = hash(key, this.size);
        let deleted = this.buckets[idx].get(key);
        this.buckets[idx].delete(key); // borramos el item
        return deleted;
    }

    search(key){
        let idx = hash(key, this.size);
        return this.buckets[idx].get(key);
    }

}

const hash = (key, size) => {
    let hashedKey = 0;

    for (let i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i);
    }

    return hashedKey % size;

}

const countWords = (stringToEval) => {
    if (stringToEval.length === 0) return "No hay palabras";

    // Creamos un hashtable
    const hashTable = new HashTable();
    // sacamos los caracteres especiales y pasamos todo a minuscula
    stringToEval = stringToEval.replace(/[^\w\s]/gi, '').toLowerCase();
    // Separamos por espacio cada palabra en un array
    const words = stringToEval.split(' ');
    // Recorremos cada palabra del array
    words.forEach(element => {
        // Si la palabra no esta en el hashTable, la insertamos
        if (hashTable.search(element) === undefined) {
            hashTable.insert(element, 1);
        }
        else {
            // Si la palabra esta en el hashTable, la actualizamos
            hashTable.insert(element, hashTable.search(element) + 1);
        }
    });

    // creamos un array para guardar las respuestas
    const arrayResponse = [];

    // Recorremos el hashTable 
    for (let i = 0; i < hashTable.buckets.length; i++) {
        // Si el bucket no esta vacio
        if (hashTable.buckets[i].size > 0) {
            // Recorremos el bucket tomando key y value
                hashTable.buckets[i].forEach((value, key) => {
                    arrayResponse.push(key + ': ' + value);
                });
        }
    }

    return arrayResponse;
}

console.log(countWords("Hola! como estas? todo bien? me alegro! hola! como andas? todo bien?"))
console.log(countWords(""))