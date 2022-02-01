// Solucion para cualquier lenguaje

const repeatMe = (text, repeatTimes=1) => {
    let result = "";

    // le concatenamos a resultado el texto X veces

    for (let i = 0; i < repeatTimes; i++) {
        result += text + " ";
    }
    return result;
}

console.log(repeatMe('denu', 2)); //denu denu

// Solucion Javascript con Prototype

String.prototype.repeatMeJs = function(repeatTimes){
    let result = "";

    for(let i=0; i< repeatTimes; i++){
        result += this + " ";
    }

    return result.toString();
}

console.log("denu".repeatMeJs(2)); //denu denu")



