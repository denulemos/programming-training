const getHypotenuse = (sideA , sideB) => {
    const newSideA = sideA * sideA;
    const newSideB = sideB * sideB;
    return Math.sqrt(newSideA + newSideB);
}

module.exports = getHypotenuse;