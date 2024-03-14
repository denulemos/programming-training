const drawTree = (treeHeight) => {
    // Redondeamos y sacamos el punto medio del triangulo 
    let middle = Math.floor(treeHeight - 1) 

    // Guardamos el arbol en un resultado retornable
    let result = "";

    // hacemos un bucle de filas
    for (let row = 0; row < treeHeight; row++) {
        let level = "";

        // dibujar astericos y espacios
        for (let column = 0; column < (treeHeight * 2 - 1); column++){
            (middle - row <= column && middle + row >= column)  ? level += "*" : level += " ";
            
        }
        result += level + "\n"
    }

    return result;
}

console.log(drawTree(5));

/*
   *    
   ***
  *****
 *******
*********
*/