const getFibonacciSequence = (numberToPermutate) => {
    let serie = [0,1]; // inicializamos el array de fibonacci

    // recorremos todos los numeros a partir del 2, ya que ya inicializamos los dos primeros
    for (let i = 2; i < numberToPermutate; i++) {
        // obtenemos el numero anterior y el numero anterior del anterior, y los sumamos
        serie.push(serie[i - 1] + serie[i - 2]);
    }

    const total = serie[numberToPermutate-1]; // El total es el ultimo numero

    return `Fibonacci Serie: ${serie} \n Total: ${total}`;
}

console.log(getFibonacciSequence(5));
console.log(getFibonacciSequence(10));