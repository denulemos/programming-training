const sumaRecursiva = (startingPoint, resultadoActual = 0) => {
    if (startingPoint % 2 !== 0) {
        return "Error";
    }
    if (startingPoint == 2) {
        return resultadoActual;
    }
    
    resultadoActual += startingPoint;
    startingPoint = startingPoint - 2;

    return sumaRecursiva(startingPoint, resultadoActual);
}

module.exports = sumaRecursiva;