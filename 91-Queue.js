// ----------- Implementacion con Arrays -------------------
class Queue {
    constructor(){
        this.dataStore = [];
        this.empty = true;
    }

    enqueue(element){
        this.dataStore.push(element);
        this.empty = false;
    }

    dequeue(){
        this.dataStore.shift();
        if(this.dataStore.length == 0){
            this.empty = true;
        }
    }

    isEmpty() {
        return this.empty;
    }

    print(){
        console.log(this.dataStore);
    }

    itemExists(element){
        return this.dataStore.indexOf(element) > -1;
    }
}

// ----------- Implementacion con Nodos -------------------

class Node {
    constructor (data, nextNode) {
        this.data = data;
        this.next = nextNode;
    }
}

class Queue {
    constructor() {
        this.top = new Node();
    }

    // Añade un elemento al final de la cola
    add(value) {
        let auxNode = this.top;

        while (auxNode.next !== null) {
            auxNode = auxNode.next;
        }

        auxNode.next = new Node(value);
    }

    // Elimina el primer elemento de la cola y lo devuelve
    remove() {
        let aux = this.top;
        this.top = this.top.next;
        return aux;
    }

    // Retorna el primer elemento de la cola sin eliminarlo
    peek() {
        if (!this.top) return null;
        return this.top;
    }

    isEmpty() {
        return this.top == null;
    }
}