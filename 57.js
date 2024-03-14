const evaluateInfix = (arrayToEval) => {
    let stack = [], result = 0;

    for (let i = 0; i < arrayToEval.length; i++) {
        if (!isSign(arrayToEval[i])){
            // Si no es un signo, lo agregamos a la pila
            stack.push(arrayToEval[i]);
        }
        else {
            // quitamos el primero y segundo de la pila y los guardamos
            let a = parseInt(stack.pop());
            let b = parseInt(stack.pop());
            // Realizamos la operacion dependiendo del signo en donde estamos parados
            switch (arrayToEval[i]) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
            }
            // Agregamos el resultado a la pila
            stack.push(result);
        }
    }
    
    return result;
}

const isSign = (char) => {
    return char == '+' || char == '-' || char == '*' || char == '/';
}


module.exports = evaluateInfix;