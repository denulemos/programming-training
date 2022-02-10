const subtringsGenerator = (string) => {
    let substrings = [];

    // Recorremos las letras por indice
    for (letter in string) {
        let start = parseInt(letter);

        // restando start evitamos duplicados
        for (let i = 0; i <= string.length - start ; i++) {
            let finale = parseInt(start) + parseInt(i);

            // por donde voy a empezar a cortar el texto?
            substrings.push(string.substring(start, finale));
        }

    }

    // filtramos eliminando los vacios
    return substrings.filter(substring => substring.length > 1);
}

module.exports = subtringsGenerator;