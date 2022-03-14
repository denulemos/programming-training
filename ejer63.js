const sumaMatrizRecursivo = (matriz, variableControl = matriz.length - 1, resultadoActual = 0) => {

    if (variableControl === -1) {
        return resultadoActual;
    }
    
    resultadoActual += matriz[variableControl][variableControl];
    variableControl = variableControl - 1;

    return sumaMatrizRecursivo(matriz, variableControl, resultadoActual);
}


/*
[1, 2, 3, 4, 5]
[4, 2, 6, 7, 8]
[7, 8, 3, 1, 2]
[7, 8, 9, 4, 2]
[7, 8, 9, 1, 5]
*/
/*
[[1, 2, 3]
[4, 5, 6]  ->  [[5, 6]  ->  
[7, 8, 9]]      [8, 9]]      [[9]]
*/
const sumaMatrizRecursivo2 = (matriz) => {

    if (matriz.length === 1 && matriz[0].length === 1) {
        return matriz[0][0];
    }

    let nuevaMatriz = [];
    matriz.forEach((element, index) => {
        if (index !== 0) {
            nuevaMatriz.push(element.slice(1, element.length))
        }
    });


    return matriz[0][0] + sumaMatrizRecursivo2(nuevaMatriz);
}

const sumaMatrizIterativo = (matriz) => {
    let resultado = 0;
    matriz.forEach(element => {
        element.forEach(element2 => {
            resultado += element2;
        });
    });

    return resultado;
}
/*
    sumaMatrizRecursivo2([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        matriz[0][0](1) + sumaMatrizRecursivo2([[5, 6][8, 9]])
            matriz[0][0](5) + sumaMatrizRecursivo2([[9]])
                matriz[0][0](9)
*/

/*
9
5
1
console.log(sumaMatrizRecursivo2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
*/


// const exponenteIterativo = (numeroBase, exponente) => {
//     for (let i = 1; i < exponente; i++) {
//         numeroBase = numeroBase * numeroBase;
//     }

//     return numeroBase;
// }

// module.exports = {exponenteRecursivo, exponenteIterativo};

console.log(sumaMatrizRecursivo2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

