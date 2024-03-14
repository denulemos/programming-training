const calculateTime = (daysToCalculate) => {
    let years = Math.floor(daysToCalculate / 365); // Calculamos los años y redondeamos al primer numero
    let months = Math.floor((daysToCalculate % 365) / 30); // Calculamos los meses y redondeamos al primer numero
    let days = Math.floor((daysToCalculate % 365) % 30); // Calculamos los dias y redondeamos al primer numero

    return `${years} años, ${months} meses, ${days} dias`;
}

module.exports = calculateTime;