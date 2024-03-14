// Solucion para cualquier lenguaje

const repeatMe = (text, repeatTimes=1) => {
    let result = "";

    // le concatenamos a resultado el texto X veces

    for (let i = 0; i < repeatTimes; i++) {
        result += text + " ";
    }
    return result;
}

// Solucion Javascript con Prototype

String.prototype.repeatMeJs = function(repeatTimes){
    let result = "";

    for(let i=0; i< repeatTimes; i++){
        result += this + " ";
    }

    return result.toString();
}

module.exports = repeatMe;