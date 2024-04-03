/*
Se tiene una funcion que recibe 2 o mas arrays. La idea es devolver un Array que solo obtenga los repetidos 
entre cada uno de los Array. Es decir, si recibo [[1,2,3][5,3,1][7,5,3]] devolver un array que contenga los valores [1,3]
*/

// Primera Solucion

const sym = () => {
    // Para hacer referencia a los argumentos que puede recibir una funcion, puedo usar el objecto arguments de JS
    const args = [];
    
    // Valor de Arguments = { '0': [ 1, 2, 3 ], '1': [ 5, 2, 1, 4 ] }
    // No se puede hacer forEach 
    for (let i = 0; i < arguments.length; i++) {
        // itera por cada array dentro de arguments
      args.push(arguments[i]); // [ 1, 2, 3 ] y [ 5, 2, 1, 4 ]
    }
  
    const symDiff = (arrayOne, arrayTwo) => {
      const result = [];
  
      arrayOne.forEach((item) => {
        // Si el elemento de arrayOne existe en arrayTwo y existe en el array de result, agregarlo
        if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      arrayTwo.forEach((item) => {
        if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      return result;
    }
  
    return args.reduce(symDiff);
  }


  // Ejemplo de funcion

  sym([1, 2, 3], [5, 2, 1, 4]);