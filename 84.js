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

    reverse() {

        // si solo esta el head apuntando a null
        if (!this.head.next) {
            return this.head; // devolvemos el head
        }

        // guardamos el primer elemento
        let first = this.head;
        // tail se vuelve la cabeza ya que ahora irá al final
        this.tail = this.head;
        // guardamos el segundo elemento
        let second = first.next; // es el siguiente de head

        // mientras second no sea null
        while (second) {
            // guardamos el siguiente de second (el tercero)
            let next = second.next;
            // le asignamos el valor de first a second
            second.next = first;
            // actualizamos first y second
            first = second;
            second = next;
        }
        // apuntamos al viejo head a null
        this.head.next = null;
        // ahora head es el que era el tail
        this.head = first;
        
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
newLinked.reverse();
console.log(newLinked.printList());