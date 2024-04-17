/*
Crear una funcion que guarde una palabra secreta que no pueda ser accedida ni cambiada desde fuera de la funcion.

CONCEPTO: CLOSURES

*/

const secretWord = () => {
    const secret = "secret";

    return () => secret;
}

const getSecret = secretWord(); // Cuando llamo a la funcion secretWord estoy recibiendo una funcion. getSecret se convierte en una funcion
console.log(getSecret()); // secret
console.log(secretWord()); // [Function (anonymous)]