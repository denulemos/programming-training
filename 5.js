/*
Sacar el porcentaje de un numero. Mandamos tanto el porcentaje como el numero por parametros.

* Input: `(20, 100)` -- El 20% de 100
* Output: `20`
*/

const porcentaje = (numero, porcentaje) => {
    return (numero * porcentaje) / 100;
  }
  
  console.log(porcentaje(20, 100))