const getHypotenuse = (sideA , sideB) => {
    const newSideA = sideA * sideA;
    const newSideB = sideB * sideB;
    return Math.sqrt(newSideA + newSideB);
}

console.log(getHypotenuse(10, 8)); //12.806248474865697