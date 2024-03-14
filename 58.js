const searchColumn = (title) => {
    let answer = 0, pow = 1, titleSize = title.length;

    // comenzamos iterando desde el final
    for (let i = titleSize-1; i >= 0; i--) {
        // guardamos el valor del char
        // si i es cero devolvera NaN
        let current = title.charCodeAt(i) - 64;

        // A = 65 - 64 = 1
        // B = 66 - 64 = 2
        // C = 67 - 64 = 3
        // D = 68 - 64 = 4

        // sumamos el valor del char al resultado
        answer = answer + current  * pow;
        
        
        // incrementamos a pow x 26 para que el siguiente char tenga un valor mayor
        pow = pow * 26;
    }

    return answer;
}

module.exports = searchColumn;