/*
Suma de todos los números en un arreglo:
Escribe una función que reciba un arreglo de números y devuelva 
la suma de todos los números en el arreglo.
*/

const sumAllNumbers = (arrayOfNumbers) => {
    return arrayOfNumbers.reduce((accumulator, current) => accumulator + current, 0);
  }
  
  console.log(sumAllNumbers([1,3,5,6,7]))

/*
Encontrar el número más grande en un arreglo:
Escribe una función que encuentre el número más grande en un arreglo de números.
*/

const findMaxNumber = (array) => {
    return array.sort((a,b) => a - b)[array.length - 1];
  }
  
  console.log(findMaxNumber([6,7,5,3,9]))


//Filtrar números pares en un arreglo:
// Escribe una función que reciba un arreglo de números y devuelva un nuevo arreglo que contenga solo los números pares.

const filterPares = (arrayToFilter)  => {
    return arrayToFilter.filter(element => element % 2 === 0)
}
  
console.log(filterPares([6,7,5,3,9]))


/*
Contar la frecuencia de elementos en un arreglo:
Escribe una función que tome un arreglo como entrada y devuelva un objeto con la frecuencia de cada elemento en el arreglo.
*/

const getFrecuency = (arrayToFilter)  => {
    const result = new Map();
  
    arrayToFilter.forEach(element => {
      if (result.has(element)) {
        result.set(element, (result.get(element) + 1));
      }
      else {
        result.set(element, 1);
      }
    })

    // Map -> Object
    const mapToObject = map => Object.fromEntries(map.entries());
    return mapToObject(result);
  }

  console.log(getFrecuency([6,7,5,3,9, 10, 5, 4, 5]))

