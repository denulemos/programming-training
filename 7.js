const impares = (num1, num2) => {
    let cantidadImpares = 0;
    for (let i = num1; i < num2; i ++){
      if (i % 2 !== 0) {
        cantidadImpares+= 1;
      }
    }
  
    return cantidadImpares;
  }
  
  console.log(impares(4, 50));