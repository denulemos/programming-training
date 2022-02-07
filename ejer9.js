const matchArrays = (array1 , array2) => {
    // filter es una función de array que devuelve un array con los elementos que cumplen una condición
    const filter = array1.filter(element => array2.includes(element)); // que el elemento exista en el array2
    return filter;
}

module.exports = matchArrays;