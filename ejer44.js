const formPhrases = (elements) => {
    let newElements = [];

    for (word of elements) {
        // Si el elemento tiene dos o mas elementos
        if (word.split(' ').length >= 2){
            // Lo agregamos al array final
            newElements.push(word)
        }
    }

    return newElements;
}

module.exports = formPhrases;