// Creamos una pila
class Stack {
    constructor() {
        this.stack = [];
    }

    // Agregamos un valor arriba de la pila
    push(value) {
        this.stack.push(value);
        return this.stack;
    }

    // Sacamos el primer valor de la pila 
    pop() {
        return this.stack.pop();
    }

    // Vemos cual es el primer elemento de la pila
    peek() {
        return this.stack[this.stack.length - 1];
    }

    // cuantos elementos tiene la pila?
    size() {
        return this.stack.length;
    }

    // imprimir la pila
    print() {
        console.log(this.stack);
    }
}


// Creamos nuestro propio objeto que pueda guardar tanto valor como count
class Item {
    constructor(item) {
        this.item = item;
        this.count = 1;
    }

    sumOne () {
        this.count ++;
    }

    getAmount () {
        return this.count;
    }

    reset () {
        this.count = 0;
    }

    getItem () {
        return this.item;
    }
}

const removeDuplicates = (stringToEval, amountToDelete ) => {
    let stack = new Stack();
    let result = "";

    for (let i = 0; i < stringToEval.length; i++) {
        // Si es el primer item o no es igual al ultimo item de la pila
        if (stack.size() === 0 || stack.peek().getItem() !== stringToEval[i]) {
            // Creamos un item y lo agregamos a la pila
            let item = new Item(stringToEval[i]); // Item: {item: "a", count:0}
            stack.push(item);
        }
        else {
            // Si son iguales, sumamos uno al count
            stack.peek().sumOne();
            // Si el count es igual al numero que llega por parametro
            if (stack.peek().getAmount() === amountToDelete) {
                // Lo sacamos de la pila
                stack.pop();
            }
        }
    }

    if (stack.size() === 0) {
        // Si la pila quedo vacia, devolvemos este String
        return "Empty String"
    }
    else {
        // Si no, ponemos todos los valores de los items de la pila en un string
        while (stack.size() > 0) {
            result += stack.pop().getItem();
        }
        // Y lo volteamos para que quede corecto.
        return result.split("").reverse().join("");;
    }
}

module.exports = removeDuplicates;