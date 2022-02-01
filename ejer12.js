const printNumbersInAList = (startingNumber) => {
    let result = `--- Del ${startingNumber} al 0 --- \n`;

    while (startingNumber > 0){
        result += `- n ${startingNumber} \n`;
        startingNumber-=8; // Cada que numero hago el salto? Resto 1 si quiero de 1 en 1.
    }

    return result;
}

console.log(printNumbersInAList(56));

/*
--- Del 56 al 0 --- 
- n 56 
- n 48 
- n 40 
- n 32 
- n 24 
- n 16 
- n 8 
*/