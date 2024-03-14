// Son parametros opcionales ambos, debemos darles un valor por defecto
const censor = (text=false, wordToCensor=false) => {
    let result = "";

    if (!text && !wordToCensor) {
        return "No se puede leer el texto y la busqueda";
    }
    else if (!text || !wordToCensor) {
        return "No se puede hacer la busqueda";
    }
    
    // Se debe hacer con regex para censurar todas las coincidencias
    const regex = new RegExp(wordToCensor, "gi");

    result = text.replace(regex, "[-CENSURADO-]");

    return result;
}

module.exports = censor;