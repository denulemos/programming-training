const sumaRecursiva = (actual, resultadoActual = 0) => {
    if (actual == 0) {
        return resultadoActual;
    }
    
    resultadoActual += actual;
    actual = actual - 1;

    return sumaRecursiva(actual, resultadoActual);
}

const sumaIterativa = (limiteSuma) => {
    let resultado = 0;
    for (let i = 0; i <= limiteSuma; i++) {
        resultado += i;
    }
    return resultado;
}

module.exports = {sumaRecursiva, sumaIterativa}