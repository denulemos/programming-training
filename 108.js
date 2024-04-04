/*
Devuelve el número total de permutaciones de la cadena proporcionada que no tienen 
letras consecutivas repetidas. Supón que todos los caracteres en la cadena proporcionada son únicos.

Por ejemplo, para la cadena "aab", debería retornar 2 porque tiene 6 permutaciones totales 
(aab, aab, aba, aba, baa, baa), pero solo 2 de ellas (aba y aba) no tienen la misma letra (en este caso "a") 
repitiéndose.
*/

const permAlone = (str) => {
    // Este regex busca cualquier caracter que se repita 2 o más veces seguidas.
    let regex = /(.)\1+/;
  
    // Dividimos la cadena en un array de caracteres.
    const arr = str.split("");
    const permutations = [];
    let tmp;
  
    // Retorna 0 si la cadena no tiene caracteres repetidos.
    if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;
  
    // Función para intercambiar dos elementos en un array.
    function swap(index1, index2) {
      tmp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = tmp;
    }
  
    // Función para generar las permutaciones usando el algoritmo Heap.
    const generate = (int) => {
      if (int === 1) {
        // Unir el array en una cadena y agregarlo a la matriz de permutaciones.
        permutations.push(arr.join(""));
      } else {
        for (let i = 0; i != int; ++i) {
          generate(int - 1);
          swap(int % 2 ? 0 : i, int - 1);
        }
      }
    }
  
    generate(arr.length);
  
    // Filtrar el array de permutaciones y retornar cuántas no tienen caracteres repetidos.
    const filtered = permutations.filter((string) => {
      return !string.match(regex);
    });
  

    return filtered.length;
  }


  // Solucion recursiva

  const permAlone = (str) => {
    // Creamos el regex para verificar si hay caracteres repetidos.
    const re=/(.)\1/;
    const pT = (p,o) => {
      if(o.length){
        var sum=0;
        for(var i=0;i<p.length+1;i++){
          sum+=pT(p.slice(0,i).concat(o[0]).concat(p.slice(i)),o.slice(1));
        }
        return sum;
      }
      else return !re.test(p.join(''));
    }
    return pT([],str.split(''));
  }
  
  // Test here.
  permAlone("aab");