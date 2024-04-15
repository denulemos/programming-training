/*
Ordenar un stack de forma que los elementos mas pequenios queden arriba de todo del Stack (Pila). Se puede usar un Stack adicional pero no se puede copiar elementos de uno a otro.

* Input: `(tope) 5-1-4-2`
* Output: `(tope) 1-2-4-5`
*/

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

// --------------------------

const orderStack = (stack) => {
    const stackOrdenado = new Stack();

    while (!stack.isEmpty()) {
        let current = stack.pop();
        while (!stackOrdenado.isEmpty() && current > stackOrdenado.peek()){
            stack.push(stackOrdenado.pop());
        }
        stackOrdenado.push(current);
    }

    return stackOrdenado;
}

const testStack = new Stack();
testStack.push(2);
testStack.push(4);
testStack.push(1);
testStack.push(5);

console.log(orderStack(testStack));