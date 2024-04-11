/*
Dado un array de numeros enteros y un target, devolver los indices de dos numeros para que la suma de ambos sea igual al target
Asumir solo una solucion, o solo encontrar el primero. 

* Input: `nums=[9,2,5,6] target= 7`
* Output: `[1,2]` nums[1] + nums[2] = 7 (2 + 5)

*/

const obtenerIndex = (nums, target) => {
    if (nums.length < 2) return [];
    let resultado = [];

    for(let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                resultado.push(i);
                resultado.push(j);
            }
        }
    }

    return resultado;
}

console.log(obtenerIndex([9,2,5,6], 7)); // [ 1, 2 ]


// Solucion mas performante con HashTables

const obtenerIndex2 = (nums, target) => {
    let resultado = new Map();
    for(let i = 0; i < nums.length; i++) {
        // Si nuestro map ya tiene el numero, significa que ya encontramos su complemento
        if (resultado.has(nums[i])) {
            return [i, resultado.get(nums[i])]
        }
        // numero que sumado con el nos da target
        let complement = target - nums[i]; // Por ejemplo, 7 - 5 = 2
        // Agregamos al map como key el valor, y como valor en si, el index
        resultado.set(complement, i);
    }
}

console.log(obtenerIndex2([9,2,5,6], 7)); // [ 1, 2 ]