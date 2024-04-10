/* 

Dados dos array devolver un array con los elementos comunes entre ambos sin duplicados

* Input: `([1,2,3], [3,2,5,6])`
* Output: `[2,3]`

*/

const matchArrays = (array1 , array2) => {
    // filter es una función de array que devuelve un array con los elementos que cumplen una condición
    const filter = array1.filter(element => array2.includes(element)); // que el elemento exista en el array2
    return filter;
}

const duplicados = (arr1, arr2) => {
    let resultado = arr1.concat(arr2);
    // El set solo admite valores unicos, entonces elimina los duplicados
    resultado = Array.from(new Set(resultado))
    return resultado;
}
   
   console.log(duplicados([1,2,3], [3,2,5,6]))

