/*
Dada una matriz, escribir un algoritmo para establecer todos los elementos de la fila y la columna correspondientes a 0 si un elemento de la matriz es 0.

* Input: 

[
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
]

* Output: (Columna 2 y fila 2 son todos ceros por el cero del medio)

[
  [1, 0, 3],
  [0, 0, 0],
  [7, 0, 9]
]

Su complejidad sera dada por la cantidad de filas y columnas
*/

const matrixZero = (matrix) => {

  const hasFirstRowAnyZero = (matrix) => {
    for (let i = 0; i < matrix[0].length; i++) {
      if (matrix[0][i] === 0) {
        return true;
      }
    }
    return false;
}

const hasFirstColAnyZero = (matrix) => {
for (let i = 0; i < matrix.length; i++) {
      if (matrix[0][i] === 0) {
        return true;
      }
    }
    return false;
}


const checkForZero = (matrix) => {
  // procesa desde la 2da fila y columna, ya que las primeras ya fueron analizadas
  for(let row = 1; row < matrix.length; row++) {
    for(let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0){
        // marcamos las columnas y rows que van a ir a cero
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }
}

const processRows = (matrix) => {
  for (let row = 0; row < matrix.length; row++){
    if (matrix[row][0] == 0) {
      setColToZero(matrix, row);
    }
  }
}

// Llenamos a cero las rows
const setRowToZero = (matrix, row) => {
  for (let col = 0; col < matrix[0].length; col++){
    matrix[row][col] = 0;
  }
}

const processColumns = (matrix) => {
  for (let col = 0; col < matrix[0].length; col++){
    if (matrix[0][col] == 0) {
      setColToZero(matrix, col);
    }
  }
}

  // Llenamos a cero las rows
  const setColToZero = (matrix, col) => {
    for (let row = 0; row < matrix.length; row++){
      matrix[row][col] = 0;
    }
  }

  let firstRowHasZero = hasFirstRowAnyZero(matrix);
  let firstColHasZero = hasFirstColAnyZero(matrix);

  checkForZero(matrix);
  processRows(matrix);
  processColumns(matrix);

  if (firstRowHasZero) {
    setRowToZero(matrix, 0);
  }

  if (firstColHasZero) {
    setColToZero(matrix, 0);
  }

    return matrix;
}

console.log(matrixZero([[2,1,3,0,2], [7,4,1,3,8], [4,0,1,2,1], [9,3,4,1,9]]));