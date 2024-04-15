/*
Dado un String que solo contiene los caracteres 
`() [] y {}` implementar un algoritmo para 
determinar si es valido

* Input: `([]){} ({)}`
* Output: `true false` 
(Ya que la llave cierra por fuera del parentesis)
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

const validParenthesis = (word) => {
    const getOpposite = (char) => {
        switch (char) {
            case "(":
                return ")";
            case "[":
                return "]";
            case "{":
                return "}"
            default:
                return ")";
        }
    }
    const stack = new Stack();
    const array = word.split('');

    // Si el length del array no es par, entonces no hay pares correctos
    if (array.length % 2 !== 0) {
        return false;
    }

    array.forEach(element => {
        // Si el caracter corresponde a la apertura de uno de los ()[]{}
        if (element === '{' || element === "(" || element === '[') {
            // agregamos al stack el opuesto }])
            stack.push(getOpposite(element));
        }
        else {
            // Si nos encontramos con uno de cerrado
            // Sacamos el del stack, y deberian coincidir
            if(stack.isEmpty() || stack.pop() !== getOpposite(element)) {
                return false;
            }
        }
    });

    // Retornamos esto porque, si quedo algun elemento restante en el stack
    // Significa que es invalido todo
    return stack.isEmpty();
}

console.log(validParenthesis("([]){}")); //true
console.log(validParenthesis("([){}")); // false