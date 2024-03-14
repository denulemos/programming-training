const exponenteRecursivo = (numeroBase, exponente, resultadoActual = 0) => {

    // Se detiene en 1 ya que un numero elevado a 1 es el mismo numero
    if (exponente === 1) {
        return resultadoActual;
    }

    if (resultadoActual === 0) {
        resultadoActual = numeroBase;
    }
    
    resultadoActual = resultadoActual * numeroBase;
    exponente = exponente - 1;

    return exponenteRecursivo(numeroBase, exponente, resultadoActual);
}

const exponenteIterativo = (numeroBase, exponente) => {
    for (let i = 1; i < exponente; i++) {
        numeroBase = numeroBase * numeroBase;
    }

    return numeroBase;
}

module.exports = {exponenteRecursivo, exponenteIterativo};

