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

const hashTable = new HashTable();
hashTable.insert('Gandalf', 'moon');
hashTable.insert('John', 'sun');
hashTable.insert('Tyrion', 'earth');
hashTable.insert('Sansa', 'water');
hashTable.insert('Arya', 'fire');
hashTable.insert('Bran', 'air');

hashTable.remove('John');

console.log(hashTable.search('Gandalf'));

console.log(hashTable);