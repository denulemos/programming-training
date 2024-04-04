/* 
Comparar y actualizar el inventario almacenado en una matriz 2D contra una segunda 
matriz 2D de una entrega nueva. Actualizar las cantidades de los elementos del 
inventario existentes actualmente (en arr1). Si no se puede encontrar un elemento, 
añadir el nuevo elemento y cantidad a la matriz de inventario. La matriz de inventario 
devuelta debe estar en orden alfabético por elemento.
*/

const updateInventory = (arr1, arr2) => {
    // Recorremos el segundo array que es el de productos frescos
    arr2.forEach(product => {
        // Buscamos si el nombre del elemento ya esta en el array de inventario
        const find = arr1.find(element => element[1] === product[1]);
        // Si lo encuentra, actualizamos la cantidad
        if (find) {
            let position = arr1.indexOf(find);
            find[0] += product[0];
            // Reemplazamos el elemento por el nuevo
            arr1[position] = find;
        }
        else {
            // Si no lo encuentra, lo añadimos al array de inventario
            arr1.push(product);
        }
    })


    // Ordenar alfabeticamente
    arr1.sort((a, b) => {
    // En JS se pueden comparar 2 Strings con comparadores logicos. 
    if (a[1] < b[1]) {
        return -1;
    }
    if (a[1] > b[1]) {
        return 1;
    }
        return 0;
    });

    return arr1;
}



// Ejemplo ejecución dado por FreeCodeCamp
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
