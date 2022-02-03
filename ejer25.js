const toMayusOrMinus = (stringToEvaluate) => {
    // Contador de minusculas y mayusculas
    let minusAmount = 0;
    let mayusAmount = 0;

    for (let letter of stringToEvaluate) {
        if (letter === letter.toUpperCase()) {
            mayusAmount++;
        }
        else {
            minusAmount++;
        }
    }

    return mayusAmount > minusAmount ? stringToEvaluate.toUpperCase() : stringToEvaluate.toLowerCase();
}

console.log(toMayusOrMinus("hola soy deno lemon")); // hola soy deno lemon
console.log(toMayusOrMinus("hOLA SOY dENO lemON")); // HOLA SOY DENO LEMON

// Este ejercicio fue hecho por github copilot en un 86%