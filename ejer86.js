const printRecursion = (repetition) => {
    // Base case
    if (repetition === 0) return;

    // 5 llama a 4, 4 llama a 3, etc.. asi hasta cero, donde ahi retorna
    // y ahi se termina la ejecucion de las funciones de 0 para abajo hasta repetition
    printRecursion(repetition - 1)
    console.log(repetition);
}

console.log(printRecursion(5))