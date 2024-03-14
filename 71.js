class Node {
    constructor (data, nextNode) {
        this.data = data;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // agregar info al final de la lista
    add(data) {
        const newNode = new Node(data, null);
        if (!this.head) {
            // Si head esta vacio, asignamos al nodo como cabeza
            this.head = newNode;
        }
        else {
            // al momento de agregar un nuevo nodo, se debe iterar en toda la lista
            // hasta encontrar un nodo cuya referencia al siguiente sea nula
            let current = this.head;
            while (current.next) {
                // iteramos al siguiente elemento y a su next
                current = current.next;
            }
            // al encontrar un current sin un nodo siguiente, lo asignamos
            current.next = newNode;
        }
        // aumentamos el tamaño de la lista
        this.size++;
    }

    // Ingresar info a la lista en un indice especifico
    insertAt(data, index) {
        // revisamos que el indice sea valido
        if (index < 0 || index > this.size) return null;

        const newNode = new Node(data);
        let current = this.head;
        // creamos una variable anterior 
        let previous;

        // Si se quiere agregar el nuevo nodo a la cabeza
        if (index === 0) {
            // apuntamos el head del nuevo nodo al viejo nodo en head
            newNode.next = current;
            this.head = newNode;
        }
        else {
            // iteramos hasta el indice
            for (let i = 0; i < index; i++) {
                // guardamos el nodo anterior
                previous = current;
                // iteramos al siguiente elemento
                current = current.next;
            }
            // al encontrar el indice, apuntamos el nodo anterior al nuevo nodo
            previous.next = newNode;
            // apuntamos el nuevo nodo al nodo siguiente del actual
            newNode.next = current;
        }
    }

    // imprime la lista enlazada
    print() {
        // si esta vacia devolvemos vacio
        if (this.size === 0) return 'Empty list';
        let current = this.head;
        let result = ''
        while (current) {
            // recorremos
            result += `${current.data} => `;
            current = current.next;
        }
        result += "X";
        return result;
    }

    removeData(dataToRemove) {
        let current = this.head;
        let previous = null;

        //siempre y cuando current no sea nulo
        while (current) {
            if (current.data == dataToRemove) {
                // si no tiene valor anterior, es el head
                if (!previous){
                    this.head = current.next;
                }
                else {
                    // el sig valor del anterior será igual al sig valor del actual
                    previous.next = current.next;
                }
                this.size--;
                return current.data; // devuelve lo eliminado
            }
            // si no lo encontramos
            previous = current;
            current = current.next;
        }

        return null;

    }

    // eliminar basado en el indice y no en su valor
    removeFrom (index) {
        if (index < 0 || index > this.size) return null;

        let current = this.head;
        let previous = null;

        // si se quiere eliminar el primer valor de la lista (head)
        if (index === 0) {
            // asignamos una nueva head
            this.head = current.next;
        }
        else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--; // la lista disminuira su tamaño
        return current.data; // devuelve lo eliminado

    }

    // la lista esta vacia? 
    isEmpty () {
        if (this.size === 0) return true;
        return false;
    }

    // obtener tamaño
    getSize () {
        return this.size;
    }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.insertAt(10, 1);
linkedList.add(2);
linkedList.add(2);
linkedList.add(2);
linkedList.add(2);
linkedList.print();
linkedList.removeData(2);
linkedList.removeFrom(1);
console.log(linkedList.isEmpty());
console.log(linkedList.getSize());
console.log(linkedList.print());

// ----------------- Segunda opcion -------

class LinkedListAlt {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head; // ultimo nodo que apunta a null
        this.size = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        // apuntamos a tail al nuevo nodo
        this.tail.next = newNode;
        // convertimos al nuevo nodo en el nuevo tail
        this.tail = newNode;
        // aumentamos la cantidad total de items
        this.size++;

        return this;
    }

    // agregar al principio del linkedlist
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }

        // el nuevo nodo apuntará a head
        newNode.next = this.head;
        // reasignamos head
        this.head = newNode;
        this.size++;

        return this;
    }

    printList() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }

    // insertar item en un index especifico
    insert(value, index) {
        // revisamos que el indice sea valido
        if (index < 0 || index > this.size) return null;

        const newNode = {
            value: value,
            next: null
        }

        let current = this.head;
        let previous;

        // Si se quiere agregar el nuevo nodo a la cabeza
        if (index === 0) {
            // apuntamos el head del nuevo nodo al viejo nodo en head
            newNode.next = current;
            this.head = newNode;
        }
        else {
            // iteramos hasta el indice
            for (let i = 0; i < index; i++) {
                // guardamos el nodo anterior
                previous = current;
                // iteramos al siguiente elemento
                current = current.next;
            }
            // al encontrar el indice, apuntamos el nodo anterior al nuevo nodo
            previous.next = newNode;
            // apuntamos el nuevo nodo al nodo siguiente del actual
            newNode.next = current;
        }
        this.size++;

        return this;
    }

    // eliminar basado en el indice y no en su valor
    removeFrom (index) {
        // chequear que el param es correcto
        if (index < 0 || index > this.size) return null;

        let current = this.head;
        let previous;

        // si se quiere eliminar el primer valor de la lista (head)
        if (index === 0) {
            // asignamos una nueva head
            this.head = current.next;
        }
        else {
            // recorremos hasta el index
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            // le asignamos al que quedo en previus el siguiente del actual
            previous.next = current.next;
        }

        this.size--; // la lista disminuira su tamaño
        return current.value; // devuelve lo eliminado

    }
}

const newLinked = new LinkedListAlt(1); [1]
newLinked.append(2); [1,2]
newLinked.append(3); [1,2,3]
newLinked.prepend(0); [0,1,2,3]
newLinked.insert(4, 1); [0,4,1,2,3]
console.log(newLinked.printList());