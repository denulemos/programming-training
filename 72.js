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

// --------- OTRA SOLUCION POSIBLE ------------

class HashTableAlternative {
    constructor(size) {
        // inicializamos el array con un length fijo
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.data.length;
    }

    set(key, value) {
        // Donde queremos guardar la info
        let address = this._hash(key);
        // si no existe, lo agregamos al array
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                // buscamos por todos los items del hash
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    // iterar por todas las key del hashtable
    keys() {
        if (!this.data.length) {
            return undefined
          }
          let result = []

          for (let i = 0; i < this.data.length; i++) {
              
              if (this.data[i] && this.data[i].length) {
                // eliminamos potenciales coaliciones
                if (this.data.length > 1) {
                  for (let j = 0; j < this.data[i].length; j++) {
                    result.push(this.data[i][j][0])
                  }
                } else {
                  result.push(this.data[i][0])
                } 
              }
          }
          return result; 
    }
}

