/*
Dados cinco enteros positivos, encuentre los valores 
mínimo y máximo que pueden calcularse sumando exactamente 
cuatro de los cinco enteros. A continuación, imprima los 
respectivos valores mínimo y máximo como una sola línea de 
dos enteros largos separados por espacios.

La suma debe hacerse entre 4 de 5 elementos.

*/

function miniMaxSum(arr) {
    const findMax = () => {
        let maxValue = 0;
        for(let i = 0; i < arr.length; i++) {
            const result = arr.reduce((accumulator, currentValue) => accumulator + currentValue) - arr[i];
            if (result > maxValue) {
                maxValue = result;
            }
        }
        
        return maxValue;
        
    }
    
    const findMin = () => {
        let minValue = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
        for(let i = 0; i < arr.length; i++) {
            const result = arr.reduce((accumulator, currentValue) => accumulator + currentValue) - arr[i];
            if (result < minValue) {
                minValue = result;
            }
        }
        
        return minValue;
        
    }
    
    console.log(findMin(),findMax());
 }