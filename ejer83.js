class DoubleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            // nuevo pointer
            prev: null
        }
        this.tail = this.head;
        this.size = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        // necesitamos llenar prev con el ultimo item, tail
        this.prev = this.tail;
        // apuntamos a tail al nuevo nodo
        this.tail.next = newNode;
        // convertimos al nuevo nodo en el nuevo tail
        this.tail = newNode;
        // aumentamos la cantidad total de items
        this.size++;

        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }

        // el nuevo nodo apuntará a head
        newNode.next = this.head;
        // ahora el nuevo newNode estará atras del viejo head
        this.head.prev = newNode;
        // reasignamos head
        this.head = newNode;
        this.size++;

        return this;
    }

    insertFrom(value, index) {
        // revisamos que el indice sea valido
        if (index < 0 || index > this.size) return null;

        const newNode = {
            value: value,
            next: null,
            prev: null
        }

        // recorremos hasta el index deseado
        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++;
        }

        // el nuevo nodo apuntará a current
        newNode.prev = current;
        newNode.next = current.next;
        // newNode se insertará despues de current
        current.next = newNode;
        // reasignamos current
        this.current = newNode;
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

}

const newLinked = new DoubleLinkedList(1); 
newLinked.append(2); 
newLinked.append(3); 
newLinked.prepend(0);
newLinked.insertFrom(4, 1);
console.log(newLinked.printList());