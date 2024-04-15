/*
Diseniar un algoritmo que obtenga el valor minimo de un Stack, sin cambiar los funcionamientos tradicionales del mismo

* Input: `(tope) 5-1-4-2`
* Output: `1`
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
        if (this.isEmpty()) return null;

        let aux = this.top;
        this.top = this.top.next;
        return aux.data;
    }

    // Retorna el elemento de la cima de la pila sin eliminarlo
    peek() {
        return this.top;
    }

    isEmpty() {
        return this.top == null;
    }

}

// --------------------------


const getMinimo = (stack) => {
        let minValue = 10000000;

        while (!stack.isEmpty()) {
            let current = stack.pop();
            if (current < minValue){
                minValue = current;
            } 
        }
        return minValue;
}

const testStack = new Stack();
testStack.push(2);
testStack.push(4);
testStack.push(1);
testStack.push(5);
testStack.push(8);
testStack.push(5);
testStack.push(1);
testStack.push(9);
testStack.push(10);

console.log(getMinimo(testStack));