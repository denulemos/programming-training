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

const removeDuplicates = (stringToEval) => {
    // Instanciamos la pila 
    let stack = new Stack();
    let result = "";

    // agregamos cada caracter del string a la pila
    for (let i = 0; i < stringToEval.length; i++) {
        // si la pila esta vacia, pusheamos directo, ya que no tenemos qué evaluar
        // O si el ultimo elemento NO es igual al elemento que intentamos agregar
        if (stack.size() === 0 || stack.peek() !== stringToEval[i]) {
            // Agregamos el elemento a la pila
            stack.push(stringToEval[i]);
        }
        else {
            // Si no, sacamos el ultimo elemento de la pila y seguimos
            stack.pop();
        }
    }

    if (stack.size() === 0) {
        // Si no quedaron letras restantes, imprimir esto y evitar el procesamiento
        return "Empty String"
    }
    else {
// Pasamos todos los elementos de la pila a un String final
while (stack.size() > 0) {
    result += stack.pop();
}

// debemos darlo vuelta para recuperar el orden original
return result.split("").reverse().join("");
    } 
}

module.exports = removeDuplicates;