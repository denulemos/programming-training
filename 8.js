const invertNumber = (number) => {
    if (number > 10 && number <= 0) {
        // si el numero se encuentra en el rango de 0 a 10, no se puede invertir
        return number
    }
    else {
        // Lo multiplicamos por su signo para conservarlo
        const inverted = parseInt(number.toString().split('').reverse().join('')) * Math.sign(number);
        return inverted;
    }
}

module.exports = invertNumber;
