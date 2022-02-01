const matchArrays = (array1 , array2) => {
    // filter es una función de array que devuelve un array con los elementos que cumplen una condición
    const filter = array1.filter(element => array2.includes(element)); // que el elemento exista en el array2
    return filter;
}

console.log(matchArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 2, 3, 4, 5]
console.log(matchArrays(['denu', 'lemon', 'hola'], ['denu', 'lemon', 'deno', 'javascript'])); // ['denu', 'lemon]