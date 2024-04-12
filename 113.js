/*
Un anagrama es una palabra creada a partir de la reordenacion de las letras de otra palabra. 
Por ejemplo, saco - caso. Dado un array de Strings, devolver los anagramas agrupados. No importa 
el orden

* Input: words= `["saco", "arresto", "programa", "rastreo", "caso"]`
* Output: `[["saco", "caso"], ["arresto", "rastreo"], ["programa"]]`

Tener en cuenta que la respuesta es un array de arrays, donde dentro se encuentra el par que 
es anagrama. Si hay una palabra que no posee su anagrama, queda solo. 
*/

const findAnagrams = (words) => {
  const hashMap = {};

  for (const word of words) {
    // Ordena alfabéticamente cada palabra y la utiliza como clave en el objeto hashMap
    const sortedWord = word.split("").sort().join("");
    if (!hashMap[sortedWord]) {
      // Si la clave no existe, crea una nueva entrada en el objeto hashMap con la palabra actual como valor.
      hashMap[sortedWord] = [word];
    } else {
      // Si la clave ya existe en el objeto hashMap, añade la palabra actual al arreglo de palabras correspondiente.
      hashMap[sortedWord].push(word);
    }
  }

  /*
    {
        acos: [ 'saco', 'caso' ],
        aeorrst: [ 'arresto', 'rastreo' ],
        aagmoprr: [ 'programa' ]
    }
*/

  return Object.values(hashMap);
};

console.log(findAnagrams(["saco", "arresto", "programa", "rastreo", "caso"]));
