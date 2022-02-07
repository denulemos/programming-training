const printNumbersInAList = (startingNumber) => {
    let result = `--- Del ${startingNumber} al 0 --- \n`;

    while (startingNumber > 0){
        result += `- n ${startingNumber} \n`;
        startingNumber-=8; // Cada que numero hago el salto? Resto 1 si quiero de 1 en 1.
    }

    return result;
}

module.exports = printNumbersInAList;
