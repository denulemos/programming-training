const drawSquare = (size) => {
    let draw = floorAndCeiling(size) + '\n';
    let content = "";

    // Creacion de lados de los costados, empezamos desde 2 para restar los que ya estan dibujados
    for (let i=2; i < size; i++){
        content = "*";

        for (let x = 2; x<size; x++){
            content += " ";
        }

        content += "*";

        draw += content + "\n";
    }

    draw += floorAndCeiling(size);

    return draw;

}

// Creacion de lados superiores e inferiores
const floorAndCeiling = (number) => {
    let side = "";

    for(let i = 0; i < number; i++) {
        side += "*";
    }
    
    return side;
}

console.log(drawSquare(5));

