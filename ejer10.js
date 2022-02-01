const drawStairs = (level) => {
    let stairs = '';

    // Mientras que la variable de iteracion sea menor o igual al nivel deseado de escalones
    for (let i = 1; i <= level; i++) {

        // Agregamos un escalon con X cantidad de repeticiones por iteración con su salto de linea
        stairs += ''.repeat(level - i) + '[-]'.repeat(i) + '\n';

    }
    return stairs;
}

console.log(drawStairs(5)); 
/*
[-]
[-][-]
[-][-][-]
[-][-][-][-]
[-][-][-][-][-]
*/