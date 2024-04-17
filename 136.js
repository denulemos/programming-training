/*
Dado un string, devolver true si el mismo tiene todos caracteres unicos o false si no los tiene.

* Input: "hola" "aaee"
* Output: true false
*/


const isAllUnique = string => {
    const auxSet = new Set(string.toUpperCase());
     return auxSet.size === string.length;
  };
  
  console.log(isAllUnique("holaa"));
  console.log(isAllUnique("hola"));