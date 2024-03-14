const isPalindromo = (word) => {
    let recorrido = 0, recorridoReves = word.length - 1;

    // ya es un palindromo por defecto

    while (recorrido < recorridoReves) {

        // Tratado para ver si borramos un caracter para volverlo palindromo
        if (word[recorrido] != word[recorridoReves]) {

            // eliminar la letra de recorrido
            // eliminar la letra de recorridoReves

            if (chequeo(word, recorrido, recorridoReves - 1) || chequeo(word, recorridoReves - 1, recorrido)) {
                return true;
            }
            else {
                // despues de eliminar un caracter no pudimos volver al string un palindromo
                return false;
            }
        }
        recorrido++;
        recorridoReves--;
    }

    return true;

}

// chequeará solo el string restante, no todo el string entero en cada ejecucion

const chequeo = (word, inicio, fin) => {
    // hacemos el mismo chequeo que en el ejercicio anterior
    while (inicio <= fin) {
        if (word[inicio] != word[fin]) {
            return false;
        }
        inicio++;
        fin--;
    }

    return true
}

module.exports = isPalindromo;