/*
Dado un array de 6x6 de dos dimensiones con 16 relojes de arena, devolver la maxima suma de la hora de cada reloj de arena.
*/

function hourglassSum(arr) {
    let max = -100000; // Algunos casos pueden ser de numeros negativos
    // 4 ya que sabemos el tamanio del reloj de arena es 4x4
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let topRow = arr[i][j] + arr[i][j+1] + arr[i][j + 2];
            let midRow = arr[i + 1][j +1 ];
            let botRow = arr[i + 2][j] + arr[i + 2][j+1] + arr[i + 2][j + 2];
            let curHourGlass = topRow + botRow + midRow;
            if (curHourGlass > max) max = curHourGlass;
        }
    }
    
    return max;
}