const findSum = (array, value) => {
    let mapValues = new Set();

    for (let a in A) {
        // Si el set tiene el valor actual menos el valor parametro
        if (mapValues.has(val - A[a])) {
            // ya devolver verdadero
          return true;
        }
        // si no, agregarlo
        mapValues.add(A[a]);
      }
      // si se recorre todo el set y no se encuentra ningun valor, sale del for y devuelve false
      return false;
}