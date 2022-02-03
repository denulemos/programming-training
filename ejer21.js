const cutText = (textToCut, amountToCut) => {
    if (validateParameters(textToCut, amountToCut)) {
        if (textToCut.length > amountToCut) {
            return textToCut.substring(0, amountToCut);
        } else {
            return textToCut;
        }
    }
    else {
        return "Not valid input";
    }
}

const validateParameters = (text, amount) => {
    return typeof text === 'string' && typeof amount === 'number';
}

console.log(cutText("Denisse", 5)); // Denis