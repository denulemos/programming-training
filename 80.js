const strings = ['a', 'b', 'c', 'd'];

// Acceder al primer item
console.log(strings[0]);

// agregar un elemento al final del String
strings.push('e'); // ['a', 'b', 'c', 'd', 'e']

// borrar el ultimo item del array
strings.pop() // ['a', 'b', 'c', 'd']

// agregar un elemento al inicio del array
strings.unshift('x') // ['x', 'a', 'b', 'c', 'd']

// agregar un elemento en un indice especifico
strings.splice(1, 0, 'y') // ['x', 'y', 'a', 'b', 'c', 'd']

// obtener largo del String
console.log(strings.length);

// ---- Implementacion con clases -----

class arrayClass {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get (index) {
        return this.data[index];
    }

    push (item) {
        // agregamos el elemento
        this.data[this.length] = item;
        // sumamos uno al largo del array
        this.length++;
        // devolvemos el nuevo length
        return this.length;
    }

    pop(){
        // si no hay elementos, devolvemos undefined
        if (this.length == 0) return undefined;
        // guardamos el ultimo elemento
        let lastItem = this.data[this.length - 1];
        // borramos el ultimo elemento
        delete this.data[this.length - 1];
        // restamos uno al largo del array
        this.length--;
        // devolvemos el ultimo elemento
        return lastItem;
    }

    delete(index){
        // si no hay elementos, o no existe, devolvemos undefined
        if (this.length == 0 || !this.data[index]) return undefined;

        // guardamos el elemento a borrar
        let deletedItem = this.data[index];
        // borramos el elemento
        delete this.data[index];
        // restamos uno al largo del array
        this.length--;
        // devolvemos el elemento borrado
        return deletedItem;
    }
    
    shiftItems (index) {
        // si no hay elementos, devolvemos undefined
        if (this.length == 0) return undefined;
        // guardamos el primer elemento
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        // borramos el ultimo elemento
        delete this.data[this.length - 1];
        // restamos uno al largo del array
        this.length--;
    }

}

const newArray = new arrayClass();
newArray.push('hola');
newArray.push('mundo');
console.log(newArray.get(0)); // Hola
console.log(newArray.get(1)); // Mundo