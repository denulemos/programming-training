// Esta es una posible solucion que se rompe al enviar un "Hola   mundo    "
const getLengthOfLast = (stringToEval) => {
    const lastWord = stringToEval.split(' ').pop();
    return lastWord.length;
}

// Solucion correcta utilizando estructuras de datos
const getLengthOfLastArray = (stringToEval) => {
    let count = 0, i = 0;

    while(i < stringToEval.length) {
        // Si no es un espacio, sumamos al counter
        if (stringToEval[i] !== ' ') {
            count++;
            i++;
        }
        else {
            // Si el caracter es un espacio
            while (i < stringToEval.length && stringToEval[i] === ' ') {
                i++;
            }
            if (i === stringToEval.length) {
                return count;
            }
            else {
                count = 0;
            }
        }


    }
    return count;
}


module.exports = {getLengthOfLast, getLengthOfLastArray};