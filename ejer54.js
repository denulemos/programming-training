const iterateArrays = (a, b, k) =>{
    let result = 0;
    let resultAux;
    // Volteamos el segundo array para leerlo al reves
    b = b.reverse();
    
    for (let i = 0; i < a.length; i++) {
        // Concatenamos ambos numeros obtenidos
        resultAux = parseInt(a[i]+""+b[i]);

        // Si el numero obtenido es menor a k, se suma 1 a resultado
        if (resultAux < k ) {
            result++;
        }
    }
    
    return result;
    
}

console.log(solution([1, 2, 3], [1, 2, 3], 31));