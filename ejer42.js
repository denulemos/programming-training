const generateRandom = (floor, top) => {
    const randomNumber = Math.random() * ((top - floor) + floor);
 
    return Math.round(randomNumber); // Lo redondeamos para que no sea decimal
}

console.log(generateRandom(1, 100));