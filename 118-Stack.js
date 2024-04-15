// Implementar una pila (stack) en tu lenguaje de programacion preferido - Con nodos

// ----------- Implementacion con Nodos -------------------

class Node {
    constructor (data, nextNode) {
        this.data = data;
        this.next = nextNode;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    // Agrega un elemento a la cima de la pila
    push(item) {
        let newTop = new Node(item, this.top);
        this.top = newTop;
    }

    // Elimina el primer elemento de la pila, el de la cima y devuelve su valor
    pop() {
        if (this.isEmpty()) return;

        let aux = this.top;
        this.top = this.top.next;
        return aux.data;
    }

    // Retorna el elemento de la cima de la pila sin eliminarlo
    peek() {
        return this.top.data;
    }

    isEmpty() {
        return this.top == null;
    }

}

const stack = new Stack();
console.log(stack); // Stack { top: Node { data: undefined, next: undefined } }
stack.push(1);
console.log(stack); // Stack {top: Node { data: 1, next: Node { data: undefined, next: undefined } }}
stack.push(2);
console.log(stack); // Stack { top: Node { data: 2, next: Node { data: 1, next: [Node] } } }
console.log(stack.peek()); // 2
console.log(stack.pop()); // 2
console.log(stack); //   top: Node { data: 1, next: Node { data: undefined, next: undefined } }